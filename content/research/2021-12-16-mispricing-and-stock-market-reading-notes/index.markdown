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
bilbio-style: "biomed-central.csl"
---

## [Expected Return, Volume, and Mispricing](https://doi.org/10.1016/j.jfineco.2021.05.014)

### 摘要

> 本文研究发现，在高估的股票中，成交量与预期收益正相关，而在低估的股票中，成交量与预期收益正相关，表明交易量有放大错误定价的作用。采用不同的误定价和交易量度量、不同组合形成方法，并控制多个变量后，交易量放大误定价的结果仍然稳健。本研究将成交量归因于投资者意见分歧，认为投资者意见分歧预测股票收益是以预期差为条件，这与 Atmaz and Basak ([2018](#ref-atmaz_belief_2018)) 最近建立的理论模型结果一致。

### 研究问题

> 交易量对股票市场的价格发现、风险分担和流动性供给有重要作用，由于它可能与投资者意见分歧、波动性、流动性、投资者关注、私人信息等有关，那么交易量在资产定价异象中有什么作用？其如何影响股票收益？

### 相关文献

> 1.  Cochrane ([2017](#ref-cochrane_macro-finance_2017)) 讨论了交易量都重要作用，并声称这些研究是未来资产定价革命性成果。
> 2.  Atmaz and Basak ([2018](#ref-atmaz_belief_2018)) 建立了理论模型，在一只股票上同时考虑了平均预期偏差和投资者意见分歧，并将他们定义为投资者预期偏差的均值和标准差。在均衡状态下，在好消息发生后，乐观的投资者的信念得到支持，并通过对股票的投资变得相对富裕，这反过来又增加了他们在平均预期偏差中的权重，使对股票的整体看法更加乐观。相反，悲观的投资者变得更加悲观。 进一步证明了投资者意见分歧有放大平均预期偏差的作用。
> 3.  Conrad, Hameed, and Niden ([1994](#ref-conrad_volume_1994)) 发现在过去一周的亏损者中，交易量与收益存在显著的正向关系,认为这个结果与微观结构理论一致，交易量被解释为私有信息。
> 4.  著名的零交易量理论表明，在完美的市场上，理性的投资者拥有相同的知识，交易量应该为零(Back [2010](#ref-back_asset_2010))。
> 5.  为了解释现实市场上的交易量，传统模型假设投资者在信息和私有投资机会上是异质的(Lo and Wang [2010](#ref-lo_stock_2010))。
> 6.  Novy-Marx and Velikov ([2015](#ref-novy-marx_taxonomy_2015)) 和 Hou, Xue, and Zhang ([2018](#ref-hou_replicating_2018)) 研究表明，在小盘股中，套利成本是一个驱动误定价的主要因素。
> 7.  Hong and Stein ([2007](#ref-hong_disagreement_2007)), Daniel and Hirshleifer ([2015](#ref-daniel_overconfident_2015)) 和 Barberis ([2018](#ref-barberis_chapter_2018)) 认为投资者一般出于三种动机交易：流动性需求、私有信息以及由于投机或过度自信导致的意见分歧。

### 实证结果

> **1. 交易量对误定价的放大作用检验**

> 为了检验成交量在误定价中扮演的作用，在每月月末，本文使用误定价和成交量两个变量进行独立双重分组，形成5 `$\times$` 5投资组合。结果如下所示：

> ![](images/citation.png)

> 无论是原始收益还是风险因子模型调整收益，在在成交量高的组合内，高估股票与低估股票收益差越大，显著性也越高。
> 
> ![](images/mispricingup%20.png)

> 图1呈现了不同交易量组合中，高估股票与低估股票收益差，我们发现，高估股票与低估股票收益差随着成交量上升而上升，表明交易量有放大误定价的作用。

> **2.交易量对误定价的放大持久性检验**

> ![](images/duration.png)

> 从交易量对误定价放大效应的持久性来看，误定价代理变量对未来股票收益率的预测性可达36个月。

> **3.经济解释**

> 本文尝试着利用行为金融理论来解释交易量对误定价的放大效应。Atmaz and Basak ([2018](#ref-atmaz_belief_2018)) 研究表明投资者意见分歧有放大平均预期偏差的作用，当平均偏差为正时，意见分歧与平均偏差正相关，意见分歧增加导致投资者更加乐观，意味着意见分歧与收益存在负向关系，反之则反。总之，投资者意见分歧单独不会产生误定价，但当投资者预期出现偏差时，他会放大错误定价。

> (1)投资者意见分歧

> ![](images/disagreement.PNG)

> 虽然大量文献使用交易量代理意见分歧，但该指标并非一个干净的投资者意见分歧的代理变量，因此，本文使用分析师收益预测偏差和盈余预测偏差来反映投资者预期偏差。具体来讲，我们将t月分析师过去12个月预测的目标价格与实际价格比作为分析师预测收益，然后用分析师预测收益的标准差来度量意见分歧。

> 表6 Panel A报告了交易量与误定价二为组合的意见分歧，我们发现投资者意见分歧随交易量升高而上升，随着误定价上升而上升，表明投资者意见分歧有放大投资者预期偏差的作用。 Panel B报告了分析师和盈利预测偏差如何影响交易量放大效应，我们采用Fama-Macbeth回归来检验，交互项MISP和交易量的交叉项显著为负，表明意见分歧几乎吸收了交易量和特质波动效应，支持交易量对误定价的放大效用由投资者意见分歧驱使的结论。

> (2)投资者预期偏差
> 
> Stambaugh, Yu, and Yuan ([2015](#ref-stambaugh_arbitrage_2015)) 通过讨论投资者预期偏差研究了投资者意见分歧，发现投资者预期偏差与意见分歧由密切的联系。Livnat and Mendenhall ([2006](#ref-livnat_comparing_2006)) 将预期偏差定义为实际盈余与分析师预测中位数差与股价之比。 在本部分，我们检验在低估股票经历负面消息后，预期偏差是否更可能由悲观投资者主导，这时事后的分析师预测偏差为正，并且交易量（投资者意见分歧）更大。相反，在高估的股票中，我们期望交易量越高，预测偏差越负。

> ![](images/expectation%20bias.png)

> 表7报告了25个组合分析师预测偏差，与我们预期一致，在低估股票中，分析师预测偏差为正，相反，在高估股票中分析师预测偏差为负。这说明投资者对低估股票较为悲观，对高估股票较为乐观。而且当交易量上升时，低估股票的预测偏差为负，高估股票预期偏差为正。

> 进一步我们检验了预期差在时间序列上的变化。由于预期偏差是由投资者意见分歧驱使，在时间序列上有变化，所以我们预期交易量的放大效应也是时变的。我们使用Baker and Wurgler (2006) 的投资者情绪指数作为总预期偏差的代理，检验了交易量的放大效应随投资者情绪如何变动。

> ![](images/amplictaion.png)

> 如表8所示，在投资者情绪高的时期，高估的股票获得较低的收益更加明显。

### 研究结论

> 交易量与收益的关系是资产定价的基本问题之一，是一个仍需要研究的邻域。我们发现错误定价主要集中在高交易量的股票中， **在低估的股票中，交易量与预期收益正相关，而在高估的股票中，交易量与预期收益负相关。** 在经济驱动力解释上，我们认为我们的结果可以通过 Atmaz and Basak ([2018](#ref-atmaz_belief_2018)) 的理论模型来解释，如果交易量捕获了投资者意见分歧并且误定价捕获了投资着预期偏差，我们的实证结果不仅有助于调和现有文献研究的争议，而且还超越了 Atmaz and Basak ([2018](#ref-atmaz_belief_2018)) ，我们号召建立新的资产定价模型来更具体地分析交易量、错误定价、IVOL和其他经济变量的作用，以丰富我们对交易量-收益关系的理解。

## [Systematic limited arbitrage and the cross-section of stock returns: Evidence from exchange traded funds](https://doi.org/10.1016/j.jbankfin.2016.06.006)

### 摘要

> 本文提出了一个简明、全面的套利限制代理变量，即ETF溢价创新，与普通因子成分一致，我们证明了由四类资产ETF溢价创新构造的套利限制因子是相关的。进一步发现套利限制因子在股票横截面上被负定价，并且该套利限制因子提供的定价信息远远多于已知非流动性和特质波动等套利限制因子，我们的发下表明套利限制风险被定价。

### 研究问题

> 在资产定价中，由于套利或套利者行为存在障碍，市场有效性取决于套利者消除误定价的能力。以前研究在理论上识别了两种套利限制：特质波动和非流动性，并分析了其在横截面上的作用。然而，特质波动和流动性的度量有显著地系统性变化，不仅在横截面上存在差异，而且随时间系统性地变动。但套利限制并不仅限于特质波动和非流动性这两种因素，因此，本文企图寻找一个范围更加广泛的套利限制的度量。

### 研究思路

> 由于ETF溢价变化主要反映了导致误定价的多个资产类别套利限制因素的变化，而这些套利限制的因素不限于波动和流动性，相比非流动性和特质波动，ETF折溢价反映了套利者无法消除误定价的能力，是对套利限制因素的干净测度。因为对ETF基本价值的冲击可以产生ETF的定价过高和定价过低，所以，本文使用ETF溢价的绝对值来代理套利限制程度，并构建了零成本投资组合。

> 具体来讲，首先，本文使用标普500ETF、罗素3000ETF、英国债券指数ETF、道指30ETF六个ETF溢价和三个股票ETF的第一主成分分别作为套利限制的代理变量，做多与套利限制代理变量协方差为正的前20%的股票，同时做空与套利限制代理变量协方为负的前20%的股票，构成投资组合。我们发现与套利限制代理变量正相关的股票获得较低的收益，而与套利限制代理变量负相关的股票获得负向收益。然后，本文检验了套利限制风险是否被定价，并把误定价检验限定到股票ETF和股票价格上，一方面由于检验的资产是股票，我们期望套利限制风险因素更精确地捕获了影响股票市场交易者的其他套利限制，另一方面由于非股票ETF上市交易时间较短，将定价风险检验限制到股票上降低了我们结果受负面效应影响的担忧。本文将套利限制风险定义为股票收益对套利限制代理变量的敏感程度，并期望套利风险被负向定价。最后，本文做了几个稳健性检验。

### 相关文献

> 1.  Deuskar ([2006](#ref-deuskar2006extrapolative)) 模拟了一个市场，波动增加会导致市场流动性降低，反过来又增加了市场波动。

> 2.  Brunnermeier and Pedersen ([2008](#ref-Brunnermeier)) 将市场流动性与套利者的资金流动性联系起来，这种联系可能导致市场波动和流动性螺旋上升。

> 3.  Mitchell and Pulvino ([2012](#ref-mitchell2012arbitrage)) 研究表明，2008年10月之后，几个套利基金同时失去了外部融资的机会

> 4.  Hu, Pan, and Wang ([2013](#ref-hu2013noise)) 认为套利者在市场上可利用的资本量是随时间变化的。

> 5.  Ang, Papanikolaou, and Westerfield ([2014](#ref-ang2014portfolio)) 一般投资者会支付溢价来对冲流动性危机可能性带来的有限套利。

> 6.  Broman ([2016](#ref-broman2016liquidity)) 发现对大盘价值投资风格相关的噪声交易需求是ETF溢价变化的共同因素。

> 7.  Hu, Pan, and Wang ([2013](#ref-hu2013noise)) 使用国库券误定价作为作为总套利活动的度量，并构建了一个因子来捕获这个噪声。

### 实证结果

> **1. 不同套利限制变量的相关型检验**

> ![](images/corelation.png)

> Panel A 报告了ETF LAP和其状态变量代理得相关系数，与反映系统套利限制变化一致，在1%的显著性水平上，股票ETF、股票主成分和债券ETF的LAP显著为正，GLD和FXE的LAP显著为正，而GLD和FXE与股票ETF不相关。Panel B 报告了LAF和可交易风险因子控制变量的相关系数，表明所有ETF的FAF是正相关。

> **2. 横截面定价检验**

> 本部分检验问题为：**股票LAF是反映了已知套利限制的信息还是反映了比现有套利限制因素更多的信息。** 实证结果如下：

> ![](images/ranktest.PNG)

> 表4 Panel A 到 Panel C报告了因子载荷排序组合原始收益、因子模型调整收益以及控制非流动性和特质波动收益，我们发现每个套利限制代理变量的因子载荷组合从低到高收益依次递减，高低组可以获得显著的超额收益，表明套利风险已被定价，另外，控制非流动性和特质波动后，仍然可以获得超额收益，说明该度量捕获了更多的套利限制因素。

### 研究结论

> 本文提出了一个套利限制的度量创新，发现套利限制程度是时变的，高套利限制导致资产全市场范围内的误定价，通过组合排序和Fama-Macbeth回归检验了套利限制代理变量对收益率的预测性，发现承担高套利限制风险的股票可以获得较高的收益，表明套利风险被定价。

## [ETF Arbitrage, Non-Fundamental Demand,and Return Predictability](https://doi.org/10.1093/rof/rfaa027)

### 摘要

> 非基本面需求冲击对资产价格有显著的影响，但捕捉到这些冲击面临挑战。本文使用ETF一级市场来研究非基本面需求冲击，ETF市场的独特指出在于被称为权威参与者的特殊套利者通过申购或赎回ETF份额可以纠正ETF和基础资产之间的价格偏离。我们从理论和实证上证明了ETF申购或赎回活动提供了非基本面需求冲击的信号，做多低申赎ETF同时做空高申赎ETF的投资组合每月可以活动1.1%到2%的投资收益，与非基本面需求扭曲资产价格偏离基本面价值的理论一致，我们发现非基本面需求给投资者施加了成本，导致其表现不佳。

### 研究问题

> 非基本面冲击非基本面需求冲击导致资产价格偏离其基本面价值。反过来可能会产生金融市场的外部性，导致实际投资和产出的扭曲。尽管非基本面需求冲击对金融市场和实体经济很重要，但衡量它们仍然是一项挑战。因为基本面值是不可观察的，识别股票价格变化带来的非基本面需求冲击非常困难。同样，从交易量中识别非基本需求也很困难，因为交易量并不能揭示交易的潜在动机。甚至共同基金的流动也被有关基金经理技能的信息所混淆，因此很难将非基本面需求与对特定基金经理的需求分开。

> ETF为识别和研究非基本面需求提供了独一无二的环境，虽然基本价值本质上是不可观察的，但 ETF 及其基础资产具有相同的基本价值，因此，两者之间的一价定律的违反意味着着ETF和基础资产至少一个受到非基本面需求的影响。这时专业的套利者通过申购或赎回ETF来纠正这种价格偏离。本文通过理论和实证证明了ETF资金流可以识别基本面错误定价，投资着可以从误定价修正中获得超额收益。

### 研究思路

![](images/ETFabitrage.jpeg)

> 本文分四个阶段来描述ETF套利机制。在t=0时，ETF和标的资产价格相同。在t=1 时，潜在的非基本需求冲击到来，并将ETF的价格推高至基础资产净值 (NAV) 以上。这些需求冲击可能对ETF和标的资产产生不同的影响，要么是因为 ETF 受到的需求冲击大于对标的资产的冲击，要么是 ETF 对需求冲击相对更敏感。这会导致 ETF 溢价（即相对错误定价）。在t =2、套利者买入标的资产股票，卖出ETF股票，以纠正相对错误定价。他们通过在 ETF 中创建新股来结束交易，产生可观察到的ETF资金流，揭示非基本面的需求冲击。重要的是，虽然套利者通过交易来纠正相对错误定价，但他们的交易并不能纠正基本面错误定价。因此，从长远来看，随着基本面错误定价的纠正，ETF和标的资产的价格都表现出回报的可预测性。

### 相关文献

[金融风险带来新挑战 需运用金融科技手段助力高质量发展](http://finance.sina.com.cn/roll/2021-05-23/doc-ikmxzfmm4137839.shtml)

\[基金业高质量发展面对三大挑战】(https://baijiahao.baidu.com/s?id=1684573252044536531\&wfr=spider\&for=pc)

[推动金融业高质量发展](http://www.xinhuanet.com/politics/2019-02/24/c_1210066649.htm)

[着力推动金融业高质量发展](https://baijiahao.baidu.com/s?id=1636622459768961508&wfr=spider&for=pc)

[大连市金融业为经济高质量发展注入新动力](https://www.financialnews.com.cn/qy/dfjr/202203/t20220314_241567.html)

[“十四五”要更加重视金融服务实体经济这个发展根基](https://export.shobserver.com/baijiahao/html/322750.html)

[实现金融业的高质量发展](https://news.gmw.cn/2018-06/12/content_29239273.htm)

[金融业高质量发展需要把握创新平衡点](http://news.cctv.com/2018/12/03/ARTI2NDIS5zDYiW2wKokn2nm181203.shtml?ivk_sa=1023197a)

[以科技创新推进金融高质量发展](https://mbd.baidu.com/newspage/data/landingsuper?rs=6262328&ruk=aRCU6d10ZdQYnDKdy2h54g&isBdboxFrom=1&pageType=1&urlext=%7B%22cuid%22%3A%22_uvlu0aIB8lKOv8pjO2ltg8i2ilSPHuFju2su08RSuKk0qqSB%22%7D&context=%7B%22nid%22%3A%22news_9515884705773705858%22%7D)

[当前中国金融面临的机遇和挑战](https://xw.qq.com/cmsid/20211020A06RAC00?pgv_ref=baidutw)

[金融行业的高质量发展](https://baijiahao.baidu.com/s?id=1630419923647969159&wfr=spider&for=pc)

[深圳市金融业高质量发展“十四五”规划](http://www.sz.gov.cn/szzt2010/wgkzl/jcgk/jcygk/zyggfa/content/mpost_9521959.html)

[积极实施数字普惠金融服务行动](https://baijiahao.baidu.com/s?id=1726424972173815922&wfr=spider&for=pc)

[积极发展监管科技 保障金融业高质量发展](https://www.weiyangx.com/333435.html)

[统筹发展与安全 推进金融业高质量发展](http://www.stcn.com/stock/djjd/202106/t20210608_3315683.html)

[我国金融业数字化转型面临三大挑战](https://www.sohu.com/a/279276652_100105408)

[平台经济治理的红灯和绿灯都在哪儿？](https://mp.weixin.qq.com/s/FFBBXb3AWxYucqk1kVfYjQ)

[易纲：详谈中国金融科技的发展与监管](https://mbd.baidu.com/newspage/data/landingsuper?rs=3203603032&ruk=aRCU6d10ZdQYnDKdy2h54g&isBdboxFrom=1&pageType=1&urlext=%7B%22cuid%22%3A%22_uvlu0aIB8lKOv8pjO2ltg8i2ilSPHuFju2su08RSuKk0qqSB%22%7D&context=%7B%22nid%22%3A%22news_9514336030750032608%22%7D)

[以金融服务创新助推经济高质量发展](https://xw.qq.com/cmsid/20200826A0JY5B00)

[金融科技引领首都金融高质量发展](https://xw.qq.com/cmsid/20200727A0UR9C00)

> 

### 

### 参考文献

<div id="refs" class="references">

<div id="ref-ang2014portfolio">

Ang, Andrew, Dimitris Papanikolaou, and Mark M Westerfield. 2014. “Portfolio Choice with Illiquid Assets.” *Management Science* 60 (11): 2737–61. <https://doi.org/10.1287/mnsc.2014.1986>.

</div>

<div id="ref-atmaz_belief_2018">

Atmaz, Adem, and Suleyman Basak. 2018. “Belief Dispersion in the Stock Market.” *The Journal of Finance* 73 (3): 1225–79. <https://doi.org/10.1111/jofi.12618>.

</div>

<div id="ref-back_asset_2010">

Back, Kerry. 2010. *Asset Pricing and Portfolio Choice Theory*. Oxford University Press. <https://toc.library.ethz.ch/objects/pdf/e01_978-0-19-538061-3_01.pdf>.

</div>

<div id="ref-barberis_chapter_2018">

Barberis, Nicholas. 2018. “Chapter 2 - Psychology-Based Models of Asset Prices and Trading Volume.” In *Handbook of Behavioral Economics - Foundations and Applications 1*, 1:79–175. North-Holland. <https://doi.org/https://doi.org/10.1016/bs.hesbe.2018.07.001>.

</div>

<div id="ref-broman2016liquidity">

Broman, Markus S. 2016. “Liquidity, Style Investing and Excess Comovement of Exchange-Traded Fund Returns.” *Journal of Financial Markets* 30: 27–53. <https://doi.org/10.1016/j.finmar.2016.05.002>.

</div>

<div id="ref-Brunnermeier">

Brunnermeier, Markus K., and Lasse Heje Pedersen. 2008. “Market Liquidity and Funding Liquidity.” *The Review of Financial Studies* 22 (6): 2201–38. <https://doi.org/10.1093/rfs/hhn098>.

</div>

<div id="ref-cochrane_macro-finance_2017">

Cochrane, John H. 2017. “Macro-Finance.” *Review of Finance* 21 (3): 945–85. <https://doi.org/10.1093/rof/rfx010>.

</div>

<div id="ref-conrad_volume_1994">

Conrad, Jennifer S, Allaudeen Hameed, and Cathy Niden. 1994. “Volume and Autocovariances in Short-Horizon Individual Security Returns.” *The Journal of Finance* 49 (4): 1305–29. <https://doi.org/10.1111/j.1540-6261.1994.tb02455.x>.

</div>

<div id="ref-daniel_overconfident_2015">

Daniel, Kent, and David Hirshleifer. 2015. “Overconfident Investors, Predictable Returns, and Excessive Trading.” *Journal of Economic Perspectives* 29 (4): 61–88. <https://doi.org/10.1257/jep.29.4.61>.

</div>

<div id="ref-deuskar2006extrapolative">

Deuskar, Prachi. 2006. “Extrapolative Expectations: Implications for Volatility and Liquidity.” In *AFA 2007 Chicago Meetings Paper*. ["https://ssrn.com/abstract=891539"](%22https://ssrn.com/abstract=891539%22).

</div>

<div id="ref-hong_disagreement_2007">

Hong, Harrison, and Jeremy C. Stein. 2007. “Disagreement and the Stock Market.” *Journal of Economic Perspectives* 21 (2): 109–28. <https://doi.org/10.1257/jep.21.2.109>.

</div>

<div id="ref-hou_replicating_2018">

Hou, Kewei, Chen Xue, and Lu Zhang. 2018. “Replicating Anomalies.” *The Review of Financial Studies* 33 (5): 2019–2133. <https://doi.org/10.1093/rfs/hhy131>.

</div>

<div id="ref-hu2013noise">

Hu, Grace Xing, Jun Pan, and Jiang Wang. 2013. “Noise as Information for Illiquidity.” *The Journal of Finance* 68 (6): 2341–82. <https://doi.org/10.1111/jofi.12083>.

</div>

<div id="ref-livnat_comparing_2006">

Livnat, Joshua, and Richard R Mendenhall. 2006. “Comparing the Post–Earnings Announcement Drift for Surprises Calculated from Analyst and Time Series Forecasts.” *Journal of Accounting Research* 44 (1): 177–205. <https://doi.org/10.1111/j.1475-679X.2006.00196.x>.

</div>

<div id="ref-lo_stock_2010">

Lo, Andrew W, and Jiang Wang. 2010. “Stock Market Trading Volume.” In *Handbook of Financial Econometrics: Applications*, 241–342. Elsevier. <https://doi.org/10.1016/B978-0-444-53548-1.50007-6>.

</div>

<div id="ref-mitchell2012arbitrage">

Mitchell, Mark, and Todd Pulvino. 2012. “Arbitrage Crashes and the Speed of Capital.” *Journal of Financial Economics* 104 (3): 469–90. <https://www.sciencedirect.com/science/article/pii/S0304405X11001991>.

</div>

<div id="ref-novy-marx_taxonomy_2015">

Novy-Marx, Robert, and Mihail Velikov. 2015. “A Taxonomy of Anomalies and Their Trading Costs.” *The Review of Financial Studies* 29 (1): 104–47. <https://doi.org/10.1093/rfs/hhv063>.

</div>

<div id="ref-stambaugh_arbitrage_2015">

Stambaugh, Robert F, Jianfeng Yu, and Yu Yuan. 2015. “Arbitrage Asymmetry and the Idiosyncratic Volatility Puzzle.” *The Journal of Finance* 70 (5): 1903–48. <https://www.sciencedirect.com/science/article/pii/S2352239918300010>.

</div>

</div>
