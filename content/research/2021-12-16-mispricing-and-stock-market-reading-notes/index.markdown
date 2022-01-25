---
title: 错误定价与股票收益文献阅读笔记
author: 薛英杰
date: '2021-12-16'
slug: mispricing and stock market reading notes
categories:
  - research
tags:
  - research
bibliography: [one.bib]
link-citations: TRUE
bilbio-style: "apalike"
---

## [Expected Return, Volume, and Mispricing](https://doi.org/10.1016/j.jfineco.2021.05.014)

### 摘要

> 本文研究发现，在高估的股票中，成交量与预期收益正相关，而在低估的股票中，成交量与预期收益正相关，表明交易量有放大错误定价的作用。采用不同的误定价和交易量度量、不同组合形成方法，并控制多个变量后，交易量放大误定价的结果仍然稳健。本研究将成交量归因于投资者意见分歧，认为投资者意见分歧预测股票收益是以预期差为条件，这与 Atmaz and Basak ([2018](#ref-atmaz2018belief)) 最近建立的理论模型结果一致。

### 研究问题

> 交易量对股票市场的价格发现、风险分担和流动性供给有重要作用，由于它可能与投资者意见分歧、波动性、流动性、投资者关注、私人信息等有关，那么交易量在资产定价异象中有什么作用？其如何影响股票收益？

### 相关文献

> 1.  Cochrane ([2017](#ref-cochrane2017macro)) 讨论了交易量都重要作用，并声称这些研究是未来资产定价革命性成果。

> 2.  Atmaz and Basak ([2018](#ref-atmaz2018belief)) 建立了理论模型，在一只股票上同时考虑了平均预期偏差和投资者意见分歧，并将他们定义为投资者预期偏差的均值和标准差。在均衡状态下，在好消息发生后，乐观的投资者的信念得到支持，并通过对股票的投资变得相对富裕，这反过来又增加了他们在平均预期偏差中的权重，使对股票的整体看法更加乐观。相反，悲观的投资者变得更加悲观。 进一步证明了投资者意见分歧有放大平均预期偏差的作用。

> 3.  Conrad, Hameed, and Niden ([1994](#ref-conrad1994volume)) 发现在过去一周的亏损者中，交易量与收益存在显著的正向关系,认为这个结果与微观结构理论一致，交易量被解释为私有信息。

> 4.  著名的零交易量理论表明，在完美的市场上，理性的投资者拥有相同的知识，交易量应该为零(Back [2010](#ref-back2010asset))。

> 5.  为了解释现实市场上的交易量，传统模型假设投资者在信息和私有投资机会上是异质的(Lo and Wang [2010](#ref-lo2010stock))。

> 6.  Novy-Marx and Velikov ([2015](#ref-Novy-Marx)) 和 Hou, Xue, and Zhang ([2018](#ref-Kewei2020)) 研究表明，在小盘股中，套利成本是一个驱动误定价的主要因素。

### 实证结果

> **1. 交易量对误定价的放大作用检验**

> 为了检验成交量在误定价中扮演的作用，在每月月末，本文使用误定价和成交量两个变量进行独立双重分组，形成5 `\(\times\)` 5投资组合。结果如下所示：

> ![](images/citation.png)

> 无论是原始收益还是风险因子模型调整收益，在在成交量高的组合内，高估股票与低估股票收益差越大，显著性也越高。

> ![](images/mispricingup%20.png)

> 图1呈现了不同交易量组合中，高估股票与低估股票收益差，我们发现，高估股票与低估股票收益差随着成交量上升而上升，表明交易量有放大误定价的作用。

> **2.交易量对误定价的放大持久性检验**

> ![](images/duration.png)

> 从交易量对误定价放大效应的持久性来看，误定价代理变量对未来股票收益率的预测性可达36个月。

> **3.经济解释 **

> 本文尝试着利用行为金融理论来解释交易量对误定价的放大效应。

### 研究结论

> 交易量与收益的关系是资产定价的基本问题之一，是一个仍需要研究的邻域。我们发现错误定价主要集中在高交易量的股票中， **在低估的股票中，交易量与预期收益正相关，而在高估的股票中，交易量与预期收益负相关。** 在经济驱动力解释上，我们认为我们的结果可以通过 Atmaz and Basak ([2018](#ref-atmaz2018belief)) 的理论模型来解释，如果交易量捕获了投资者意见分歧并且误定价捕获了投资着预期偏差，我们的实证结果不仅有助于调和现有文献研究的争议，而且还超越了 Atmaz and Basak ([2018](#ref-atmaz2018belief)) ，我们号召建立新的资产定价模型来更具体地分析交易量、错误定价、IVOL和其他经济变量的作用，以丰富我们对交易量-收益关系的理解。

### 参考文献

<div id="refs" class="references">

<div id="ref-atmaz2018belief">

Atmaz, Adem, and Suleyman Basak. 2018. “Belief Dispersion in the Stock Market.” *The Journal of Finance* 73 (3): 1225–79. <https://doi.org/10.1111/jofi.12618>.

</div>

<div id="ref-back2010asset">

Back, Kerry. 2010. *Asset Pricing and Portfolio Choice Theory*. Oxford University Press. <https://toc.library.ethz.ch/objects/pdf/e01_978-0-19-538061-3_01.pdf>.

</div>

<div id="ref-cochrane2017macro">

Cochrane, John H. 2017. “Macro-Finance.” *Review of Finance* 21 (3): 945–85. <https://doi.org/10.1093/rof/rfx010>.

</div>

<div id="ref-conrad1994volume">

Conrad, Jennifer S, Allaudeen Hameed, and Cathy Niden. 1994. “Volume and Autocovariances in Short-Horizon Individual Security Returns.” *The Journal of Finance* 49 (4): 1305–29. <https://doi.org/10.1111/j.1540-6261.1994.tb02455.x>.

</div>

<div id="ref-Kewei2020">

Hou, Kewei, Chen Xue, and Lu Zhang. 2018. “Replicating Anomalies.” *The Review of Financial Studies* 33 (5): 2019–2133. <https://doi.org/10.1093/rfs/hhy131>.

</div>

<div id="ref-lo2010stock">

Lo, Andrew W, and Jiang Wang. 2010. “Stock Market Trading Volume.” In *Handbook of Financial Econometrics: Applications*, 241–342. Elsevier. <https://doi.org/10.1016/B978-0-444-53548-1.50007-6>.

</div>

<div id="ref-Novy-Marx">

Novy-Marx, Robert, and Mihail Velikov. 2015. “A Taxonomy of Anomalies and Their Trading Costs.” *The Review of Financial Studies* 29 (1): 104–47. <https://doi.org/10.1093/rfs/hhv063>.

</div>

</div>
