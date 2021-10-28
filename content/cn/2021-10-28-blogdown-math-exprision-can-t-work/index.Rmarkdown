---
title: Blogdown无法显示公式的坑与及解决方案
author: 薛英杰
date: '2021-10-28'
slug: blogdown math exprision can't work
categories:
  - cn
tags:
  - diary
---

一段时间没有再发帖了，昨天准备更新帖子时，发现以前发的帖子中所有公式都无法正常显示，以为是自己在更新的过程中，将关于公式显示的相关配置文件修改，导致所有帖子的公式无法显示。检查了n次配置文件，花了两天时间，一个错误都没有发现。

> 只要思想不滑坡，办法总比困难多

寻找错误两天时间，解决问题二十分钟。查阅了一些资料，发现网页上的数学公式显示都是基于MathJax来实现，它是一个基于Ajax技术的数学表达式显示解决方案，能够在Html页面显示LaTex和MathML数学符号，支持大部分浏览器，不需要插件，额外字体或安装特殊的阅读器，支持复制/粘贴。如果浏览器支持mathml，则mathjax可以将tex标记转换为mathml语言，来加速渲染。MathJax提供了三种使用途径支持数学公式：

> 1.**直接使用MathJax的CDN进行调用。**

> 2.**使用针对不同平台开发的 MathJax 插件。**

> 3.**本地安装 MathJax 的内容然后调用。**

大家经常使用的方式也是方式1，如果网络没有问题直接直接用 CDN 是最省事的办法，操作简单，不占本地存储空间。理论上任何平台都允许调用 MathJax 的代码，只需要在heade标签加入引用cdn地址的mathjax文件。

blogdown搭建的网页显示数学公式也是采用该方式，具体配置参考[谢老大的教材](https://bookdown.org/yihui/blogdown/themes.html),打开连接后直接搜索Mathjax，对应位置就是讲解公式文件配置。按照教程配置了不下十次还是没有解决这个问题，浏览了许多网站才发现是由于CDN关闭的缘故，不再支持MathJax的调用，所以导致我帖子中的公式无法正常显示。原来blogdown主题默认的MathJax也无法正常显示。比如：[https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js](https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML),后来找到Rstuio的MathJax：[https://mathjax.rstudio.com/latest/MathJax.js](https://mathjax.rstudio.com/latest/MathJax.js?config=TeX-MML-AM_CHTML)。替换主题中对应的MathJax就正常啦。你可以将下述代码复制到txt文档中，用浏览器打开就检查公式能否正常显示。

```
<!DOCTYPE html>
<html>
<head>
<title>MathJax TeX Test Page</title>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript"
  src="https://mathjax.rstudio.com/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
</head>
<body>
When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</body>
</html>
```
结果如下：
![](images/MathJax.png)

最后分享几个MathJax学习和使用的网站：

> [MathJax 官网](https://www.mathjax.org)

> [MathJax中文文档](https://mathjax-chinese-doc.readthedocs.io/en/latest/index.html)

> [CDN 关闭声明](https://www.mathjax.org/cdn-shutting-down/)




