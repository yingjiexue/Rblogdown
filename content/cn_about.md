---
title: "薛英杰"
---


<style>
/* Page-scoped overrides for the existing Yingjie theme. */
.main:has(#about-resume) { padding-left: 48px; padding-right: 24px; }
.main:has(#about-resume) .title h1 { text-align: left; margin: 0 0 12px; }
.main:has(#about-resume) .title h3,
.main:has(#about-resume) .title hr { display: none; }
.main:has(#about-resume) h2 { text-align: left; margin: 28px 0 10px; font-size: 22px; }
.main:has(#about-resume) h3 { margin: 18px 0 8px; font-size: 18px; }
.main:has(#about-resume) p { margin: 8px 0; line-height: 1.7; }
.main:has(#about-resume) ul,
.main:has(#about-resume) ol { margin: 8px 0 14px; padding-left: 1.5em; }
.main:has(#about-resume) li { margin: 5px 0; line-height: 1.65; }
.main:has(#about-resume) li p { margin: 0; }
.main:has(#about-resume) table { width: 100%; margin: 10px 0 16px; font-size: .94em; border-collapse: collapse; }
.main:has(#about-resume) th,
.main:has(#about-resume) td { text-align: left; padding: 7px 8px; }
.main:has(#about-resume) a { overflow-wrap: anywhere; }
@media (max-width: 960px) {
  .main:has(#about-resume) { padding: 24px 18px; }
}
@media (max-width: 600px) {
  .main:has(#about-resume) { padding: 20px 12px; }
  .main:has(#about-resume) h2 { font-size: 20px; }
  .main:has(#about-resume) h3 { font-size: 17px; }
  .main:has(#about-resume) table { display: block; overflow-x: auto; }
}
</style>

<div id="about-resume"></div>

**数据分析｜垂直行业智能体开发｜金融与统计研究**

邮箱：yingjiexuesuwfe@163.com

## 个人简介

薛英杰，现为西安财经大学讲师，具有统计学与金融学复合背景，获统计学学士、硕士及金融学博士学位，博士研究方向为实证资产定价，并具有金融学博士后研究经历。系统掌握概率论与数理统计、时间序列分析、多元统计与机器学习等量化建模方法，长期从事 ETF 折溢价、错误定价与投资者情绪等市场微观结构研究。

具备扎实的编程与数据处理能力，熟练使用 Python、R、C++、SQL、Matlab、SAS 等工具，能够独立完成数据清洗、指标与信号构建、统计建模及实证检验的完整流程。善于将经济逻辑转化为可检验、可复现的量化策略，注重研究的可复现性与代码规范。

在金融与统计研究之外，关注数据分析和人工智能在具体行业中的应用，项目实践涵盖民政社会救助、网络安全与金融研究辅助。通过整合行业数据、业务规则与大模型工具调用，构建自然语言查询、数据核对、异常识别、分析研判和报告生成应用，将研究与编程能力延伸至实际业务问题的解决。

## 核心能力

- 数据分析与研究：数据清洗、统计建模、实证资产定价；双重差分、断点回归、倾向得分匹配及因果关系分析。
- 行业智能应用：多源数据整合、自然语言问数、规则引擎与大模型协同分析、分析报告生成。
- 开发工具：Python、R、SQL、Tableau；项目涉及 Django、PostgreSQL、React、TypeScript、DeepSeek Harness 与 Git。

- **调查与报告：** 具有问卷调查、实地调研和研究报告撰写经历，能够将业务问题转化为数据分析任务。

## 工作与教育经历

| 时间 | 单位 | 职务或学位 | 方向 |
| --- | --- | --- | --- |
| 2024.06—至今 | 西安财经大学 | 讲师 | 统计与金融 |
| 2022.01—2024.05 | 对外经济贸易大学 | 博士后 | 金融学 |
| 2017.09—2021.12 | 西南财经大学 | 经济学博士 | 金融学 实证资产定价 |
| 2015.09—2017.07 | 西南财经大学 | 经济学硕士 | 统计学 商务统计 |
| 2010.09—2014.07 | 山西财经大学 | 经济学学士 | 统计学 市场调查与分析 |
| 2011.09—2014.07 | 山西财经大学 | 管理学学士 | 会计学 第二学位 |

## 项目经验

### SXRS｜民政社会救助数据服务与智能分析平台

**业务目标：** 整合分散的民政业务数据，为工作人员提供统一的信息查询、数据核对与分析入口。

- 整合养老服务、老龄补贴、社会救助和殡葬管理四类业务系统数据，支持人员与家庭信息检索、跨系统数据核对及统计分析。
- 通过自然语言问答调用数据库查询工具，让业务人员以日常语言查询数据、获取分析结果，减少手工编写查询的需要。
- 构建救助退出状态预测模块，结合家庭人口、收入、补助及救助类型等特征，为进一步业务核查提供辅助线索。
- 实现数据装载与增量同步，并结合只读查询、行政区划行级权限及敏感字段脱敏，对数据访问进行约束。

**技术实现：** Python、Django、PostgreSQL、React、DeepSeek、Text-to-SQL、随机森林。

**项目地址：** https://github.com/yingjiexue/SXRS

### Agent｜网络安全日志分析与入侵检测智能体

**业务目标：** 辅助安全运维人员筛查日志、追查可疑行为并整理分析报告，减少重复性人工工作。

- 支持 Apache、Nginx、syslog、CSV 等日志格式，以及压缩文件、目录和轮转日志输入。
- 将攻击特征规则、来源 IP 聚合和滑动时间窗口分析结合，识别 SQL 注入、跨站脚本、目录遍历及暴力破解等可疑行为，生成附带日志证据的结构化告警。
- 为智能体配置日志扫描、条件检索和报告保存工具，支持自然语言发起任务，并针对特定 IP 或异常行为继续追问。
- 自动整理扫描概览、告警统计、模型研判、原始证据与处置建议，导出 Markdown 报告；支持云端 API 与本地模型接入。

**技术实现：** TypeScript、DeepSeek Harness、规则引擎、模型工具调用、LM Studio。

**项目地址：** https://github.com/yingjiexue/Agent

### TradingAgents｜多智能体股票研究辅助系统

**项目性质：** 基于 TradingAgents 开源框架的应用实践。

**业务目标：** 面向 A 股研究场景，将市场信息获取、个股分析、候选股票筛选与模拟复盘组织为协同研究流程，辅助研究人员整理信息、比较不同观点并形成研究参考。

- 通过大盘、板块、市场、基本面和新闻等不同分析角色协作，结合乐观与审慎研究员的辩论机制，从多个角度分析个股与市场主题，呈现不同情景下的观点与风险。
- 支持自然语言提出研究问题和描述选股需求，将需求理解、条件筛选与候选股票池匹配结合，减少手工汇总信息和反复设置筛选条件的操作。
- 接入 Tushare、AKShare、BaoStock 等行情与财务数据接口，结合大模型工具调用、事实记忆及可扩展技能，支持研究资料获取与上下文积累。
- 提供模拟交易与复盘功能，用于记录和回顾研究判断；系统定位为研究辅助，输出作为分析参考。

**技术实现：** Python、FastAPI、LangChain、LangGraph、Vue 3、TypeScript、MongoDB、Redis。

**项目地址：** https://github.com/yingjiexue/TradingAgents

**访问地址：** http://stockagent.vip.cpolar.cn

## 科研与数据分析经验

### ETF 持股与股票定价效率研究

- 使用中国 A 股 ETF 持股及交易数据测量价格信息效率，将股票调入与调出基金投资组合作为外生冲击，采用双重差分与 R 分析持股变化对信息效率的影响。

### 金融发展与区域经济研究

- 基于银行贷款、上市公司经营及金融中介机构数据构建金融深度与广度指标，利用格兰杰因果检验分析金融发展与地区生产总值的关系。

### ETF 折溢价与错误定价研究

- 结合套利均衡模型与贝叶斯学习，分析 ETF 及基础资产受到信息和噪声冲击后的价格变化，测算错误定价概率并研究价格修正机制。

## 科研成果

### 发表论文

1. 中国跨境ETF的价格偏离: 情绪驱动还是信息驱动？（当代经济科学，2020（1），第一作者）

2. ETF持股增加了股票定价效率吗？——来自中国A股市场的证据（当代财经，2021（3），第一作者，期刊封面论文）

3. 投资者情绪、套利限制与错误定价——基于中国A股市场ETF的实证研究（金融发展研究，2022（12），第一作者）

4. 地区信息、注意力约束与股票收益（云南财经大学学报，2023（06），第二作者（通讯作者））

5. ETF折溢价可以预测其未来收益吗？——基于错误定价的视角（中央财经大学学报，2023（0９），第一作者）

6. 发挥数字经济优势，助力共质量发展（光明日报，2023（06），第一作者）

7. 充分发挥金融在高质量发展中的推动作用（中国经济日报，2023（11），第一作者）

8. 中国A股市场的早公告溢价：现象与机制（当代经济，2024(4)，第二作者)

9. How does the level of digital finance in free trade zones reduce barriers to overseas market entry for enterprises?[J]. International Review of Financial Analysis, 2025: 104773.



## 课题经历

- 项目主持：非同步交易下市场情绪与投资者过度反应——证据来自中国跨境 ETF（中央高校课题）。

- 主要参与：国有企业高杠杆控制权网络解析：发生机制与控制路径（国家自然科学基金面上项目）。

- 主要参与：四川产业投资集团风险控制体系构建。

- 主要参与四川省统计局课题：战略性新兴产业发展、民营企业融资、金融集聚与成渝经济圈协同发展、金融创新与四川经济发展；其中金融创新课题获省委书记批示。

## 教学经历

- 西南财经大学｜计量经济课程助教｜2017.07—2021.12

- 对外经济贸易大学｜金融工程助教｜2021.07—2023.12

## 奖励与证书

- 2022年度《金融发展研究》优秀论文奖（2023年获奖）。

- 第三届全国大学生市场调查与分析大赛总决赛一等奖（2013年）。

- 国家励志奖学金；全国市场调查与分析专业证书；CET4 / CET6。

## 个人兴趣

喜欢阅读、编程、球类运动、健身与金融市场研究。保持对实际问题的好奇心，也享受将想法转化为代码与应用的过程。
