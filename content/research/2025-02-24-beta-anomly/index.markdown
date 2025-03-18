---
title: 贝塔异象
author: 薛英杰
date: '2025-02-24'
slug: beta anomly
categories:
  - research
tags:
  - research
bibliography: references.bib
---

## Betting against beta

### 摘要

> 我们提出了一个带杠杆和保证金约束的模型，该模型随投资者和时间变化。我们发现了与模型的 五个中心假设一致的证据。（1）由于受约束的投资者哄抬高贝塔资产的价格，导致高贝塔的资产获得的 alpha 较低，这与我们在美国股票、20个国际股票市场、美国国债、公司债券和期货市场的实证发现一致。 （2）赌博高贝塔因子[^1]产生了显著正的风险调整收益。（3）当融资约束收紧时，赌博贝塔因子的收益降低。（4）增加的流动性风险会将beta压缩到1.（5）更大约束的投资者持有更高风险的资产。

### 研究问题

> 资本资产定价模型的基本假设是所有代理人都投资单位风险带来期望收益最高的投资组合， 并通过加杠杆或去杠杆来迎合他们的风险偏好。许多投资者，像散户，养老基金和共同基金，他们 承担的杠杆都存在约束。**因此，高风险的资产将替代使用杠杆。这种向高贝塔资产倾斜的行为表明，高风险的高贝塔资产需要比低贝塔资产更低的风险调整回报**

> **那么，不受约束的套利者如何利用这一效应，即，你怎么赌β？相对于市值、价值和动量效应的大小这个异象的大小是多少？在其他国家和资产类别中，做空贝塔值是否会获得回报？收益溢价如何随时间和横截面而变化？谁敢赌贝塔？**

### 研究思路

> 为了回答以上问题，本文建立了一个带杠杆约束的动态模型，并利用20个国家股票市场、国库券市场、信用债市场和期货市场的数据检验了该模型的推论。在实证中，本文在全球市场检验了基于beta的投资组合检验，然后，构造了赌博beta因子。

### 文献观点

> 1.美国股票的证券市场线要比资本资产定价模型（CAPM）更加平坦，带有借贷约束的CAPM模型比标准的CAPM模型对美股收益的解释更好(Mehrling and Brown 2011; Black 1972a)。
>
> 2.看沃伦巴菲特伯克希尔哈撒韦公司的持股，可以发现巴菲特通过购买低贝塔股票并运用刚来押注贝塔(Frazzini, Kabiller, and Pedersen 2018)。
>
> 3.高贝塔的股票经风险调整后的收益率较低(Baker, Bradley, and Wurgler 2011)。

### 理论分析

> 我们考虑一个时代更替的经济，在这个经济中，每个时期$t$，代理人$i=1,\dots,I$出生都携带财富$W_t^i$，并生存两期。代理人交易证券$s=1,\dots,S$。其中，证券$s$支付红利$\delta_t^s$，有$\chi^{*s}$份流通股。在每个时期$t$，年轻的代理人选择份额为$\chi=(\chi^1,\dots,\chi^S)^\prime$的投资组合，其余财富投资收益率为$r^f$的无风险资产，以最大化他的效用：

$$
Max:  x\prime(E_t(P_{t+1}+\delta_{t+1})-(1+r^f)P_t)-\frac{\gamma^i}{2}\chi^\prime\Omega_t\chi
$$

> 其中，$P_t$是$t$时期的价格向量，$\Omega$是$P_{t+1}+\delta_{t+1}$方差-协方差矩阵，$\gamma^i$是代理人$i$的风险厌恶。代理人$i$的预算约束如下：

$$
m_t^i\sum_{s}\chi^sP^s_t\leq W^i_t
$$

> 乘子$m^i$为代理人的投资所使用的杠杆，这个约束要求股票份额与价格的乘积小于代理人的财富。

> 投资约束取决于代理人$i$。例如，一些代理人不能使用杠杆，在模型中通过$m^i=1$来捕获。其他代理人不仅不能使用杠杆，而且必须有一部分现金财富，这个由大于$m$大于1来捕获，而且他们面临保证金约束。

> 我们非常感兴趣总需求等于总供给时的性质：

$$
\sum_i\chi^i=\chi^*
$$

> 为了求均衡解，我们让一阶条件等于0，具体如下：

$$
E_t(P_{t+1}+\delta_{t+1})-(1+r^f)P_t-\gamma^i\Omega \chi^i-\phi^i_tP_t=0
$$

> 其中，$\phi^i$组合约束的拉格朗日乘数。解得$x^i$的最优头寸为：

$$
x^i=\frac{1}{\gamma^i}\Omega ^{-1}(E_t(P_{t+1}+\delta_{t+1})-(1+r^f+\phi^i_t)P_t)
$$

> 对所有代理人的头寸进行加总将得到均衡条件：

$$
\chi^*=\frac{1}{\gamma}\Omega ^{-1}(E_t(P_{t+1}+\delta_{t+1})-(1+r^f+\phi_t)P_t)
$$

> 均衡价格和收益如下：

$$
P=\frac{E_t(P_{t+1}+\delta_{t+1})-\gamma\Omega\chi^*}{1+r^f+\phi_t}
$$

$$
r_{t+1}^i=\frac{P^i_{t+1}+\delta^i_{t+1}}{P^i_t}-1
$$

> 假设市场收益为$r_{t+1}^M$，则贝塔可以表示为：

$$
\beta_t^s=\frac{cov_t(r_{t+1}^s,r_{t+1}^M)}{var_t(r_{t+1}^M)}
$$

> **推论1：**

> （1）对于任何资产$s$的均衡收益为：$E_t(r^s_{t+1})=r^f+\phi_t+\beta_t^s\lambda_t$。其中，风险溢价 `\(\lambda_t=E_t(r_{t+1}^M-r^f-\phi_t)\)`,$\phi_t$平均拉格朗日乘子，测量了融资约束的紧张程度 。

> （2）一个证券相对市场的超额收益$\alpha^s=\phi_t(1-\beta_t^s)$，该$\alpha$随着$\beta$上升而递减。

> （3） 对于一个有效的投资组合，夏普比率在贝塔系数小于1的有效投资组合中最高，贝塔系数越高，夏普比率越小，贝塔系数越小。

> **下面我们将考虑做多低贝塔资产，多空高贝塔资产的因子的性质**。为了构建一个因子，让$w_L$是一个相对低贝塔资产组合权重，则低贝塔组合收益为$r_{t+1}^L=w_Lr_{t+1}$，同时考虑类似的高贝塔资产组合收益$r_{t+1}^H$，组合贝塔分别为$\beta_t^L$和$\beta_{t+1}^H$，且$\beta_t^L<\beta_t^H$。这样我们可以构建赌博贝塔因子:

$$
r_{t+1}^{BAB}=\frac{1}{\beta_t^L}(r_{t+1}^L-r^f)-\frac{1}{\beta_t^H}(r_{t+1}^H-r^f)
$$

> **推论2：**

> 赌博贝塔因子的超额收益为正：

$$
E_t(r_{t+1}^{BAB})=\frac{\beta_t^H-\beta_t^L}{\beta_t^H \beta_t^L}\phi_t\geq 0
$$

> **推论3**

> 组合约束（$m^k$）的冲击效应，可以解释为在极端信用危机中资金流动性恶化。这种资金流动性冲击导致BAB因子的损失，因为其要求的回报增加。因为投资者可能需要降低他们对贝塔值的押注，或者进一步扩大购买高贝塔值资产的规模。

> 组合约束越紧，意味着$m^k$上升，将导致BAB因子收益下降，未来获得的收益上升。具体如下：

$$
\frac{\partial r_t^{BAB}}{\partial m_t^k}\leq 0
$$ $$
\frac{\partial E_t(r_t^{BAB})}{\partial m_t^k}\leq 0
$$

> **推论4**

> 假设所有随机变量都是独立同分布，$\delta_t$与其他随机变量无关。此外，在时间t-1在BAB组合形成并设定价格后，由于$m_t$和$W_t$的新信息，贴现因子$\frac{1}{1+r^f+\phi_t}$的条件方差上升（下降）。

> 1.  所有证券的条件收益$beta$被压缩到1
> 2.  BAB投资组合的条件贝塔系数变为正（负），即使它相对于用于投资组合形成的信息集是市场中性的。

> **推论5**

> 不受约束的代理持有风险证券的投资组合的贝塔系数小于1;受约束的代理持有风险证券的投资组合，具有较高的贝塔系数。

### 实证分析

> **1.估计事前beta**

> 本文采用日度股票超额收益对市场超额收益的滚动回归来估计$beta$，估计方法如下：

$$
\hat{\beta}_i^{ts}=\hat{\rho}\frac{\hat{\sigma_i}}{\hat{\sigma}_m}
$$

> 其中，$\hat{\sigma_i}$和$\hat{\sigma_m}$分别是股票和市场的波动率的估计量。$\hat{\rho}$是相关系数的估计量。**独立估计波动率和相关系数主要有两个原因：（1）股票与市场之间相关性的变化比二者的波动变化慢，则估计波动用1年期的数据，估计相关系数用5年期的数据；（2）使用日度对数收益来估计波动，使用重叠三天的收益**$r_{i,t}^{3d}=\sum_{k=0}{2}ln(1+r_{t+K}^i)$来构造非同步交易的相关性。估计波动率至少使用6个月（120个交易日数据），估计相关系数至少使用3年（750个交易日）的数据。为了降低异常值对结果的影响，本文对估计的时间序列贝塔和横截面贝塔进行加权平均处理。具体如下：

$$
\hat{\beta}_i=w_i\hat{\beta}_i^{TS}+(1-w_i)\hat{\beta}_i^{XS}
$$

> **为了简化，对于所有时间和资产，设置**$w=0.6，\hat{\beta}_i^{XS}=1$。

> **2.构建赌博beta因子**

> 我们构建了简单的投资组合，做多低贝塔证券，做空高贝塔证券(BAB因子)。为了构建每个BAB因子，资产类别中的所有证券根据其估计的beta按升序排列。按照beta排序的证券分别被分配到低贝塔和高贝塔组，低贝塔组合有贝塔中位数以下的资产构成，在每个组合中，证券收益按照贝塔排序加权，每月组合进行调仓。

> 具体来看，让$z$表示组合形成期贝塔排序向量$z_i=rank(\beta_{it})$，让$\bar{z}$表示平均排序，则组合权重如下：

$$
w_H=k(z-\bar{z})^+\\
w_L=k(z-\bar{z})^-
$$

> 其中，$k$是一个标量常数$k=2/1_n|z-\bar{z}|$,$x^+$和$x^-$表示向量x的正负元素。

> 为了构建因子，组合在形成期被标准化。具体如下：

$$
r_{t+1}^{BAB}=\frac{1}{\beta_t^L}(r_{t+1}^L-r^f)-\frac{1}{\beta_t^H}(r_{t+1}^H-r^f)
$$

> 其中，$r_{t+1}^L=r_{t+1}^\prime w_L$，$r_{t+1}^H=r_{t+1}^\prime w_H$，$\beta^L=\beta_{t}^\prime w_L$，$\beta^H=\beta_{t}^\prime w_H$

### 研究结论

> 1.高贝塔资产的投资组合比低贝塔资产的投资组合具有更低的α和夏普比率。

> 2.  BAB因子的回报与所有标准资产定价因子(例如，价值、动量和规模)的回报相媲美。

> 3.  资金流动性的恶化应导致时间序列中BAB因子的损失，并且增加的资金流动性风险将证券横截面中的贝塔系数压缩为1。

> 4.  杠杆收购基金和伯克希尔哈撒韦公司都可以获得杠杆，购买平均贝塔系数低于1的股票。

## The volatility puzzle of the beta anomaly

### 摘要

> 本文研究表明，β异象的领先理论无法解释异象的条件性能。在低于中位数的已实现波动率的情况下，即使控制了错误定价、套利限制、彩票偏好、分析师分歧和情绪，BAB因子的异常回报率和夏普比率也会在几个月后上升。此外，杠杆约束理论与事实相反地预测，市场和BAB夏普比率随着波动性而增加。我们进一步表明，机构投资者转移他们的需求从高，低贝塔股票的波动性增加，由此产生的价格影响是足够的解释高，低波动性状态之间的异常BAB回报率的差异。

### 研究问题

> 理解风险与收益之间的关系是资产定价最核心的诉求。其中最古老最为人所知的是相比CAPM模型，低市场beta的股票获得正的超额收益，而持有高贝塔股票获得负收益。这个异象可以追溯到(Friend and Blume 1970)以及(Black 1972b)，但在这些开创性研究之后的50年数据中，它仍然是稳健的，其原因仍在积极讨论中，缺乏一个普遍接受的解释 。除了学术兴趣之外，“防御性股票”策略还经历了(Novy-Marx and Velikov 2022)所说的“大量资本流入”，并为众多交易所交易基金和其他投资产品提供了基础。

### 研究思路

> 本文采用一种新方法来评估贝塔异象的主要理论，基于理论的能力来解释贝塔异象BAB因子的条件收益(Cochrane, n.d.a)。本文考虑了6个贝塔异象的潜在解释，包括杠杆约束、CAPM模型缺失的风险因子、套利限制、彩票偏好、投资者情绪和分析师意见分歧。然后，我们研究其他理论是否能纠正低波动状态下FF6模型的失效。

### 文献观点

> 1.  大量证据表明，风险与风险溢价随时间而变动，一个异象的真正原因也必须与这种时间变化相匹配(Cochrane, n.d.b)。
>
> 2.  由于高贝塔的股票期望收益高，低风险厌恶且受杠杆约束的投资者会抬高高贝塔的股票价格，导致CAPM模型的超额收益为负(Frazzini and Pedersen 2014; Black 1972c)。
>
> 3.  Liu, Stambaugh, and Yuan (2018) 认为贝塔异象可能来源于特质波动率（IVOL）与贝塔横截面相关，在控制特质波动后，异象收益将会消失。
>
> 4.  Bali et al. (2017) 认为投资者对彩票股的需求抬高了高风险股票的价格，随后获得负的超额收益。
>
> 5.  “Investor Sentiment, Beta, and the Cost of Equity Capital \| Management Science” (n.d.) 认为高贝塔系数的股票尤其容易受到市场情绪的影响，并且发现只有在市场情绪高涨的月份，这种异常现象才会显著。
>
> 6.  “Speculative Betas - HONG - 2016 - the Journal of Finance - Wiley Online Library” (n.d.) 研究发现贝塔系数放大了对经济的分歧，再加上卖空限制，当分歧很大时，贝塔系数高的股票就会被高估。
>
> 7.  Asness et al. (2020) 创造了一种风险因子，将贝塔的系统性风险的横截面效应从特质波动中分离出来。
>
> 8.  “Benchmarks as Limits to Arbitrage: Understanding the Low-Volatility Anomaly: Financial Analysts Journal: Vol 67, No 1” (n.d.) 从理论上证明了基金经理根据标普500等基准指数来判断，即使高贝塔的收益为负，他们也要增持高贝塔股票。

### 关键变量度量

> **赌博贝塔（BAB）**
>
> 在每个月，使用前60个月（至少36个月）的数据对所有股票做如下回归：
>
> $$
> r_{i,t}-r_{f,t}=\alpha_{i,t}+\beta_{i,t,0}MKT_t+\beta_{i,t,1}MKT_{t
> -1}+\epsilon_t
> $$
>
> 其中，$MKT_t$是市场相对无风险利率的超额收益，然后，我们缩减估计结果为$\hat{\beta}_{n,t}^{ts}=\hat{\beta}_{n,t,0}+\hat{\beta}_{n,t,1}$，为了缓解估计误差，作如下处理：
>
> $$
> \hat{\beta}_{n,t}=w_n\hat{\beta}_{n,t}^{ts}+(1-w_n)\times 1
> $$
>
> 其中，
>
> $$
> w_n=\frac{1/\hat{\sigma}^2(\hat{\beta}_{n,t}^{ts})}{1/\hat{\sigma}(\hat{\beta}_{n,t}^{ts})+1/\hat{\sigma}^2(\beta)}
> $$
>
> 其中，$\hat{\sigma}(\hat{\beta}_{n,t}^{ts})$是$\hat{\beta}_{n,t}^{ts}$的标准误。并且$\hat{\sigma}^2(\beta)=\hat{\sigma}^{2}_{cs}(\hat{\beta}_{n,t}^{ts})-\hat{\sigma}^{2}(\hat{\beta}^{ts})$，该公式度量了真实贝塔的横截面方差，$\hat{\sigma}^{2}_{cs}(\hat{\beta}_{n,t}^{ts})$是$\hat{\beta}_{n,t}^{ts}$的横截面方差，$\hat{\sigma}^{2}(\hat{\beta}^{ts})$是横截面方差$\hat{\sigma}^{2}_{cs}(\hat{\beta}_{n,t}^{ts})$的均值。
>
> **BAB因子构造**
>
> 在每个月初，我们基于t-1月的$\hat{\beta}_{n,t}$对所有股票进行排序，并按照十分位数分成十组，用最低$\hat{\beta}_{n,t}$组减最高组，具体如下：
>
> $$
> BAB_t=r_{L,t}-r_{H,t}-(\beta_{L,t-1}-\beta_{H,t-1})MKT_t
> $$

### 研究结论

> 50年来，金融文献一直在努力解释贝塔系数与回报之间令人费解的弱横截面关系，这挑战了资产定价的基本原则。这些文献对这种异常现象提出了广泛的解释。虽然这些解释都有实证依据，但没有基于这些条件进行严格检验。
>
> 我们表明，杠杆约束理论反事实地预测了波动性和随后的贝塔因子夏普比率之间的正关系，直观地，因为它主要依赖于风险厌恶投资者的假设，他们自然要求在横截面和时间序列中进行积极的风险回报权衡。实证研究发现，多因子资产定价模型不能解释反向押注因素的条件回报。当实现的方差下降时，解释他们无条件回报的负荷通常会缩小，因此，他们恰恰在风险最低的时候获得了最异常的回报。这一事实对于控制彩票偏好和套利限制的横截面效应的β因子仍然成立。总的来说，我们引入了一个新的时间序列维度来测试贝塔异常的主要理论，并发现这些理论通常无法解释这种异常的条件表现。
>
> 当波动性较低时，机构投资者对高贝塔股票有强烈的需求，但这种需求随着风险的增加而减少。我们进一步定量地表明，这种转移需求的价值影响足以解释高波动率和低波动率制度之间押注对抗贝塔策略的异常回报的全部差异。广泛使用的基于基准的绩效评估合同以及各种机构负债和风险约束的激励可以解释这些交易模式。它们促使机构在波动性较低时强烈需求高贝塔系数的股票，以超过标准普尔500指数等平均单位贝塔系数的基准;但它们也会惩罚跟踪错误，当波动性增加时，这会鼓励投资者从高贝塔系数股票撤退到低贝塔系数股票。不管激励的确切来源是什么，“赌贝塔”策略的有条件表现和我们的制度需求结果，大大提高了下一代低风险异常理论的门槛。

### 参考文献

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-asness2020" class="csl-entry">

Asness, Cliff, Andrea Frazzini, Niels Joachim Gormsen, and Lasse Heje Pedersen. 2020. “Betting Against Correlation: Testing Theories of the Low-Risk Effect.” *Journal of Financial Economics* 135 (3): 629–52. <https://doi.org/10.1016/j.jfineco.2019.07.003>.

</div>

<div id="ref-baker2011" class="csl-entry">

Baker, Malcolm, Brendan Bradley, and Jeffrey Wurgler. 2011. “Benchmarks as Limits to Arbitrage: Understanding the Low-Volatility Anomaly.” *Financial Analysts Journal* 67 (1): 40–54. <https://doi.org/10.2469/faj.v67.n1.4>.

</div>

<div id="ref-bali2017" class="csl-entry">

Bali, Turan G., Stephen J. Brown, Scott Murray, and Yi Tang. 2017. “A Lottery-Demand-Based Explanation of the Beta Anomaly.” *Journal of Financial and Quantitative Analysis* 52 (6): 2369–97. <https://doi.org/10.1017/S0022109017000928>.

</div>

<div id="ref-benchmar" class="csl-entry">

“Benchmarks as Limits to Arbitrage: Understanding the Low-Volatility Anomaly: Financial Analysts Journal: Vol 67, No 1.” n.d. <https://www.tandfonline.com/doi/abs/10.2469/faj.v67.n1.4>.

</div>

<div id="ref-black1972a" class="csl-entry">

Black, Fischer. 1972a. “Capital Market Equilibrium with Restricted Borrowing.” *The Journal of Business* 45 (3): 444–55. <https://www.jstor.org/stable/2351499>.

</div>

<div id="ref-black1972b" class="csl-entry">

———. 1972b. “Capital Market Equilibrium with Restricted Borrowing.” *The Journal of Business* 45 (3): 444–55. <https://www.jstor.org/stable/2351499>.

</div>

<div id="ref-black1972c" class="csl-entry">

———. 1972c. “Capital Market Equilibrium with Restricted Borrowing.” *The Journal of Business* 45 (3): 444–55. <https://www.jstor.org/stable/2351499>.

</div>

<div id="ref-cochrane" class="csl-entry">

Cochrane, John H. n.d.a. “Presidential Address: Discount Rates.” <https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.2011.01671.x>.

</div>

<div id="ref-cochranea" class="csl-entry">

———. n.d.b. “Presidential Address: Discount Rates.” <https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.2011.01671.x>.

</div>

<div id="ref-frazzini2018" class="csl-entry">

Frazzini, Andrea, David Kabiller, and Lasse Heje Pedersen. 2018. “Buffett’s Alpha.” *Financial Analysts Journal* 74 (4): 35–55. <https://doi.org/10.2469/faj.v74.n4.3>.

</div>

<div id="ref-frazzini2014" class="csl-entry">

Frazzini, Andrea, and Lasse Heje Pedersen. 2014. “Betting Against Beta.” *Journal of Financial Economics* 111 (1): 1–25. <https://doi.org/10.1016/j.jfineco.2013.10.005>.

</div>

<div id="ref-friend1970" class="csl-entry">

Friend, Irwin, and Marshall Blume. 1970. “Measurement of Portfolio Performance Under Uncertainty.” *The American Economic Review* 60 (4): 561–75. <https://www.jstor.org/stable/1818402>.

</div>

<div id="ref-investor" class="csl-entry">

“Investor Sentiment, Beta, and the Cost of Equity Capital \| Management Science.” n.d. <https://pubsonline.informs.org/doi/10.1287/mnsc.2014.2101>.

</div>

<div id="ref-liu2018" class="csl-entry">

Liu, Jianan, Robert F. Stambaugh, and Yu Yuan. 2018. “Absolving Beta of Volatility’s Effects.” *Journal of Financial Economics* 128 (1): 1–15. <https://doi.org/10.1016/j.jfineco.2018.01.003>.

</div>

<div id="ref-mehrling2011" class="csl-entry">

Mehrling, Perry, and Aaron Brown. 2011. *Fischer Black and the Revolutionary Idea of Finance*. John Wiley & Sons.

</div>

<div id="ref-novy-marx2022" class="csl-entry">

Novy-Marx, Robert, and Mihail Velikov. 2022. “Betting Against Betting Against Beta.” *Journal of Financial Economics* 143 (1): 80–106. <https://doi.org/10.1016/j.jfineco.2021.05.023>.

</div>

<div id="ref-speculata" class="csl-entry">

“Speculative Betas - HONG - 2016 - the Journal of Finance - Wiley Online Library.” n.d. <https://onlinelibrary.wiley.com/doi/10.1111/jofi.12431>.

</div>

</div>

[^1]: 赌博高低贝因子是做多加杠杆的低贝塔资产，做空高贝塔资产的投资组合收益。
