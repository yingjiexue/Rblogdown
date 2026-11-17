(function () {
  'use strict';
  var root = document.getElementById('comments-app');
  if (!root) return;
  var api = (root.dataset.api || '').replace(/\/+$/, '');
  var path = root.dataset.path || window.location.pathname;
  var REACTIONS = ['👍', '👎', '😄', '🎉', '😕', '❤️', '🚀', '👀'];
  var sortOrder = 'oldest';
  var currentList = [];
  var token = null;
  var user = null;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function parseToken(t) {
    try {
      var payload = t.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      while (payload.length % 4) payload += '=';
      return JSON.parse(atob(payload));
    } catch (e) { return null; }
  }

  function renderContent(text) {
    if (window.marked && window.marked.parse) {
      try { return window.marked.parse(String(text), { breaks: true }); } catch (e) {}
    }
    return esc(text);
  }

  function userKey() {
    var k = null;
    try { k = localStorage.getItem('comments-user'); } catch (e) {}
    if (!k) {
      k = 'u-' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      try { localStorage.setItem('comments-user', k); } catch (e) {}
    }
    return k;
  }

  function initial(name) {
    var s = String(name || '').trim();
    return s ? s.charAt(0).toUpperCase() : '?';
  }

  function avatarColor(name) {
    var colors = ['#0969da', '#1a7f37', '#9a6700', '#bc4c00', '#cf222e', '#8250df', '#6e7781'];
    var s = String(name || '');
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return colors[h % colors.length];
  }

  function commentHtml(node, parentName) {
    var avatar = node.avatar_url
      ? '<img class="comment-avatar" src="' + esc(node.avatar_url) + '" alt="">'
      : '<span class="comment-avatar" style="background:' + avatarColor(node.name) + '">' + esc(initial(node.name)) + '</span>';
    var isMine = user && node.user_id && String(node.user_id) === String(user.sub);
    var delBtn = isMine
      ? '<button type="button" class="comment-delete-btn" data-id="' + esc(node.id) + '">删除</button>'
      : '';
    var html = '<li class="comment-item">'
      + avatar
      + '<div class="comment-body">'
      + '<div class="comment-meta"><span class="comment-name">' + esc(node.name) + '</span>'
      + '<time class="comment-date">' + esc((node.created_at || '').slice(0, 10)) + '</time></div>'
      + '<div class="comment-content">'
      + (parentName ? '<span class="comment-reply-to">回复 @' + esc(parentName) + '：</span>' : '')
      + renderContent(node.content)
      + '</div>'
      + '<div class="comment-actions">'
      + '<button type="button" class="comment-reply-btn">回复</button>'
      + delBtn
      + '</div>'
      + '<form class="reply-form" data-parent="' + esc(node.id) + '" hidden>'
      + '<input type="text" name="website" class="comments-hp" tabindex="-1" autocomplete="off" aria-hidden="true">'
      + (user ? '' : '<input type="text" name="name" placeholder="昵称" required maxlength="50">')
      + '<textarea name="content" placeholder="回复 ' + esc(node.name) + '…" required maxlength="2000" rows="3"></textarea>'
      + '<button type="submit">提交回复</button>'
      + '</form>';
    if (node.children && node.children.length) {
      html += '<ul class="comments-children">'
        + node.children.map(function (ch) { return commentHtml(ch, node.name); }).join('')
        + '</ul>';
    }
    html += '</div></li>';
    return html;
  }

  function buildTree() {
    var flat = currentList.slice();
    if (sortOrder === 'newest') {
      flat.sort(function (a, b) { return a.created_at < b.created_at ? 1 : -1; });
    }
    var map = {};
    flat.forEach(function (c) { map[c.id] = Object.assign({}, c, { children: [] }); });
    var roots = [];
    flat.forEach(function (c) {
      if (c.parent_id && map[c.parent_id]) map[c.parent_id].children.push(map[c.id]);
      else roots.push(map[c.id]);
    });
    return roots;
  }

  function render() {
    var box = root.querySelector('.comments-list');
    if (!box) return;
    var roots = buildTree();
    if (!roots.length) {
      box.innerHTML = '<li class="comments-empty">还没有评论。</li>';
      return;
    }
    box.innerHTML = roots.map(function (n) { return commentHtml(n); }).join('');
  }

  function renderReactions(data) {
    var bar = root.querySelector('.reactions-bar');
    if (!bar) return;
    var html = '';
    REACTIONS.forEach(function (r) {
      var count = (data.counts && data.counts[r]) || 0;
      var active = data.mine && data.mine.indexOf(r) >= 0;
      html += '<button type="button" class="reaction-btn' + (active ? ' active' : '') + '" data-reaction="' + r + '">'
        + '<span class="reaction-emoji">' + r + '</span>'
        + (count ? '<span class="reaction-count">' + count + '</span>' : '')
        + '</button>';
    });
    bar.innerHTML = html;
  }

  function loadReactions() {
    fetch(api + '/api/reactions?path=' + encodeURIComponent(path) + '&user=' + encodeURIComponent(userKey()))
      .then(function (r) { return r.json(); })
      .then(renderReactions)
      .catch(function () {});
  }

  function toggleReaction(emoji) {
    fetch(api + '/api/reactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: path, reaction: emoji, user: userKey() })
    }).then(function (r) { return r.json(); }).then(renderReactions).catch(function () {});
  }

  function userBarHtml() {
    if (user) {
      return '<div class="comments-user">'
        + '<img class="comments-user-avatar" src="' + esc(user.avatar_url || '') + '" alt="">'
        + '<span class="comments-user-name">' + esc(user.name || user.login) + '</span>'
        + '<button type="button" class="comments-logout">退出</button>'
        + '</div>';
    }
    return '<div class="comments-user">'
      + '<button type="button" class="comments-login">使用 GitHub 登录</button>'
      + '</div>';
  }

  // 加载登录态：优先从 OAuth 回调 URL 的 token，否则从 localStorage
  (function () {
    var params = new URLSearchParams(window.location.search);
    var t = params.get('token');
    if (t) {
      try { localStorage.setItem('comments-token', t); } catch (e) {}
      params.delete('token');
      var q = params.toString();
      history.replaceState(null, '', window.location.pathname + (q ? '?' + q : '') + window.location.hash);
    }
    try { token = localStorage.getItem('comments-token'); } catch (e) {}
    user = token ? parseToken(token) : null;
  })();

  root.innerHTML =
    userBarHtml()
    + '<div class="reactions-bar"></div>'
    + '<div class="comments-toolbar">'
    + '<select class="comments-sort" aria-label="评论排序">'
    + '<option value="oldest">最旧在前</option>'
    + '<option value="newest">最新在前</option>'
    + '</select>'
    + '</div>'
    + '<ul class="comments-list"><li class="comments-loading">评论加载中…</li></ul>'
    + '<form class="comments-form">'
    + '<input type="text" name="website" class="comments-hp" tabindex="-1" autocomplete="off" aria-hidden="true">'
    + (user ? '' : '<input type="text" name="name" placeholder="昵称" required maxlength="50">')
    + '<textarea name="content" placeholder="写下你的评论…（支持 Markdown）" required maxlength="2000" rows="4"></textarea>'
    + '<button type="submit">提交评论</button>'
    + '<p class="comments-msg"></p>'
    + '</form>';

  function post(payload, cb) {
    var headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = 'Bearer ' + token;
    fetch(api + '/api/comments', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().then(function (j) { return { ok: r.ok, body: j }; });
    }).then(cb).catch(function () {
      cb({ ok: false, body: { detail: '网络错误，请稍后再试。' } });
    });
  }

  function load() {
    fetch(api + '/api/comments?path=' + encodeURIComponent(path))
      .then(function (r) { return r.json(); })
      .then(function (data) { currentList = data; render(); })
      .catch(function () { currentList = []; render(); });
  }

  load();
  loadReactions();

  root.querySelector('.comments-sort').addEventListener('change', function (e) {
    sortOrder = e.target.value;
    render();
  });

  var form = root.querySelector('.comments-form');
  var msg = root.querySelector('.comments-msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    msg.textContent = '';
    post({
      path: path,
      name: fd.get('name') || '',
      content: fd.get('content'),
      website: fd.get('website') || ''
    }, function (res) {
      if (res.ok) {
        msg.textContent = res.body.approved === false ? '评论已提交，待审核后显示。' : '评论已提交。';
        form.reset();
        load();
      } else {
        msg.textContent = res.body && res.body.detail ? res.body.detail : '提交失败，请稍后再试。';
      }
    });
  });

  root.addEventListener('click', function (e) {
    if (e.target.closest('.comments-login')) {
      window.location = api + '/api/auth/github/login?return_to=' + encodeURIComponent(window.location.href);
      return;
    }
    if (e.target.closest('.comments-logout')) {
      try { localStorage.removeItem('comments-token'); } catch (err) {}
      window.location.reload();
      return;
    }
    var delBtn = e.target.closest('.comment-delete-btn');
    if (delBtn) {
      if (!window.confirm('确定删除这条评论吗？')) return;
      var headers = {};
      if (token) headers['Authorization'] = 'Bearer ' + token;
      fetch(api + '/api/comments/' + encodeURIComponent(delBtn.dataset.id), { method: 'DELETE', headers: headers })
        .then(function (r) { if (r.ok) load(); })
        .catch(function () {});
      return;
    }
    var rbtn = e.target.closest('.reaction-btn');
    if (rbtn) { toggleReaction(rbtn.dataset.reaction); return; }
    var btn = e.target.closest('.comment-reply-btn');
    if (!btn) return;
    var reply = btn.closest('.comment-body').querySelector('.reply-form');
    if (reply) {
      reply.hidden = !reply.hidden;
      if (!reply.hidden) {
        var first = reply.querySelector('input[name="name"], textarea');
        if (first) first.focus();
      }
    }
  });

  root.addEventListener('submit', function (e) {
    var reply = e.target.closest('.reply-form');
    if (!reply) return;
    e.preventDefault();
    var fd = new FormData(reply);
    post({
      path: path,
      name: fd.get('name') || '',
      content: fd.get('content'),
      website: fd.get('website') || '',
      parent_id: reply.dataset.parent
    }, function (res) {
      if (res.ok) {
        reply.reset();
        reply.hidden = true;
        load();
      } else {
        alert(res.body && res.body.detail ? res.body.detail : '提交失败，请稍后再试。');
      }
    });
  });
})();
