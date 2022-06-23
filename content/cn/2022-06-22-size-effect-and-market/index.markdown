---
title: 市值效应与规模因子
author: 薛英杰
date: '2022-06-22'
slug: size effect and market
categories:
  - cn
tags:
  - research
---


读入收益率和Fama-French 五因子数据，分别按照滞后一期的总市值和流通市值分组，统计组合等权收益和对应市值加权收益，并计算市值最小组与市值最大组的收益差。





下面的结果分别为全样本和子样本的累计收益表现和Fama-French因子模型回归，回归方程左手边为小市值组合与大市值组合收益差，右手边为市场（RiskPremiu）、市值（SMB）、价值(HML)、投资(CMA)、盈利(RMW)五个因子。








































































## 总市值分组(全样本)


```r
pacman::p_load(data.table,stringr,dplyr,foreign,flextable)
options(warn = F)
fivefactort<-read.dbf("D:/科研/数据/月个股回报率文件145758441/STK_MKT_FIVEFACMONTH.dbf")%>% ## 读入月度Fama-French五因子
  filter(Markettype=="P9714"&Portfolios==1)
```

```
## Field name: 'RiskPremiu' changed to: 'RiskPremiu.1'
```

```r
stockret<-read.dbf("D:/科研/数据/月个股回报率文件145758441/TRD_Mnth.dbf")                ##股票市值和收益数据

cleandata<-stockret%>%filter(as.character(Trdmnt)>="1995-01")%>%
  group_by(Stkcd)%>%
  mutate(LMsmvosd=lag(Msmvosd),
  LMsmvttl=lag(Msmvttl))%>%ungroup()%>%filter(!is.na(LMsmvosd)&!is.na(LMsmvttl))%>%
  group_by(Trdmnt)%>%
  mutate(Groupsd=cut(LMsmvosd,c(min(LMsmvosd,na.rm=T)-100,quantile(LMsmvosd,seq(0.1,0.9,0.1),na.rm=T),max(LMsmvosd,na.rm=T)+100),labels=1:10),
  Groupmvt=cut(LMsmvttl,c(min(LMsmvttl,na.rm=T)-100,quantile(LMsmvttl,seq(0.1,0.9,0.1),na.rm=T),max(LMsmvttl,na.rm=T)+100),labels=1:10))%>%
  select(Stkcd,Trdmnt,Groupsd,Groupmvt,Msmvttl,LMsmvttl,Mretnd)%>%
  ungroup()%>%
  na.omit()


Mvtotal<-cleandata%>%group_by(Trdmnt,Groupmvt)%>%
  summarise(Eqret=mean(Mretnd),Wiehtret=weighted.mean(Mretnd,LMsmvttl))%>%
  filter(Groupmvt%in%c(1,10))%>%
  as.data.frame()%>%
  reshape(idvar = "Trdmnt",timevar = "Groupmvt",direction = "wide")%>%
  mutate(E10_1=Eqret.1-Eqret.10,
  W10_1=Wiehtret.1-Wiehtret.10)
```

```
## `summarise()` has grouped output by 'Trdmnt'. You can override using the
## `.groups` argument.
```




### 所有时间


```r
factmerg<-Mvtotal%>%
  mutate(TradingMon=Trdmnt)%>%
  merge(fivefactort,by="TradingMon",all.x = T)%>%
  mutate(cumretE10_1=cumsum(E10_1),
  cumretE10=cumsum(Eqret.10),
  cumretE1=cumsum(Eqret.1),
  cumSMB=cumsum(SMB2))
plot(factmerg$cumretE10_1,type="l",axes = F,ylab="累计收益",xlab="时间",lwd=2,ylim=c(-2,15))
axis(side =1,at=seq(1,length(factmerg$Trdmnt),50),
as.character(factmerg$Trdmnt[seq(1,length(factmerg$Trdmnt),50)]))
axis(side =2,at=seq(-2,15,3),seq(-2,15,3))
box(lty = "solid")
lines(factmerg$cumretE10,col="blue",lwd=2)
lines(factmerg$cumretE1,col="orange",lwd=2)
legend(0,25,c("S-B","B","S"),lty=c(1,1,1),lwd=c(2,2,2),
  horiz = T,col = c("black","blue","orange"),border=F)
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-19-1.png" width="672" />


```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.27089 -0.03623 -0.00706  0.02277  0.89973 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.022688   0.005229   4.339 1.92e-05 ***
## RiskPremiu  -0.156186   0.066235  -2.358   0.0190 *  
## SMB2         0.678730   0.152902   4.439 1.24e-05 ***
## HML2        -0.397768   0.181328  -2.194   0.0290 *  
## RMW2        -0.425770   0.240674  -1.769   0.0778 .  
## CMA2         0.181918   0.230659   0.789   0.4309    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.09161 on 322 degrees of freedom
## Multiple R-squared:  0.2292,	Adjusted R-squared:  0.2172 
## F-statistic: 19.14 on 5 and 322 DF,  p-value: < 2.2e-16
```

```r
 ##总市值加权收益回归
```
### 分时间段

**1995年1月至2005年12月**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-21-1.png" width="672" />



```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.24185 -0.05113 -0.01035  0.02440  0.91311 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)  
## (Intercept)  0.01923    0.01173   1.639   0.1037  
## RiskPremiu  -0.14549    0.13969  -1.042   0.2997  
## SMB2         0.37573    0.29756   1.263   0.2091  
## HML2        -0.74497    0.39797  -1.872   0.0636 .
## RMW2        -0.43041    0.43357  -0.993   0.3228  
## CMA2         0.17133    0.39931   0.429   0.6686  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.126 on 125 degrees of freedom
## Multiple R-squared:  0.07292,	Adjusted R-squared:  0.03584 
## F-statistic: 1.966 on 5 and 125 DF,  p-value: 0.08814
```



**2006年1月至2015年12月**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-23-1.png" width="672" />



```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.09266 -0.03502 -0.00792  0.01315  0.35140 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.031050   0.006040   5.141 1.15e-06 ***
## RiskPremiu  -0.067079   0.067821  -0.989    0.325    
## SMB2         1.239719   0.208184   5.955 2.95e-08 ***
## HML2         0.006068   0.204147   0.030    0.976    
## RMW2         0.141735   0.355844   0.398    0.691    
## CMA2         0.188522   0.319410   0.590    0.556    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.06268 on 114 degrees of freedom
## Multiple R-squared:  0.5444,	Adjusted R-squared:  0.5244 
## F-statistic: 27.24 on 5 and 114 DF,  p-value: < 2.2e-16
```


**2016年1月至2022年5月**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-25-1.png" width="672" />


```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.060392 -0.018295 -0.001647  0.013408  0.094868 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.015816   0.003938   4.016 0.000162 ***
## RiskPremiu  -0.141409   0.099279  -1.424 0.159357    
## SMB2         0.921483   0.160239   5.751 2.92e-07 ***
## HML2         0.159545   0.230155   0.693 0.490769    
## RMW2        -0.157241   0.234630  -0.670 0.505240    
## CMA2         0.643688   0.319673   2.014 0.048399 *  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.03143 on 62 degrees of freedom
## Multiple R-squared:  0.6531,	Adjusted R-squared:  0.6251 
## F-statistic: 23.35 on 5 and 62 DF,  p-value: 4.155e-13
```










## 总市值分组(市值后30%的股票)


```r
pacman::p_load(data.table,stringr,dplyr,foreign,flextable)
options(warn = F)
fivefactort<-read.dbf("D:/科研/数据/月个股回报率文件145758441/STK_MKT_FIVEFACMONTH.dbf")%>% ## 读入月度Fama-French五因子
  filter(Markettype=="P9714"&Portfolios==1)
```

```
## Field name: 'RiskPremiu' changed to: 'RiskPremiu.1'
```

```r
stockret<-read.dbf("D:/科研/数据/月个股回报率文件145758441/TRD_Mnth.dbf")                ##股票市值和收益数据

cleandata<-stockret%>%filter(as.character(Trdmnt)>="1995-01")%>%
  group_by(Stkcd)%>%
  mutate(LMsmvosd=lag(Msmvosd),
  LMsmvttl=lag(Msmvttl))%>%ungroup()%>%
  group_by(Trdmnt)%>%
  filter(LMsmvttl<=quantile(LMsmvttl,0.3,na.rm=T))%>%
  mutate(Groupsd=cut(LMsmvosd,c(min(LMsmvosd)-100,quantile(LMsmvosd,seq(0.1,0.9,0.1),na.rm=T),max(LMsmvosd)+100),labels=1:10),
  Groupmvt=cut(LMsmvttl,c(min(LMsmvttl)-100,quantile(LMsmvttl,seq(0.1,0.9,0.1),na.rm=T),max(LMsmvttl)+100),labels=1:10))%>%
  select(Stkcd,Trdmnt,Groupsd,Groupmvt,Msmvttl,LMsmvttl,Mretnd)%>%
  ungroup()%>%
  na.omit()


Mvtotal<-cleandata%>%group_by(Trdmnt,Groupmvt)%>%
  summarise(Eqret=mean(Mretnd),Wiehtret=weighted.mean(Mretnd,LMsmvttl))%>%
  filter(Groupmvt%in%c(1,10))%>%
  as.data.frame()%>%
  reshape(idvar = "Trdmnt",timevar = "Groupmvt",direction = "wide")%>%
  mutate(E10_1=Eqret.1-Eqret.10,
  W10_1=Wiehtret.1-Wiehtret.10)
```

```
## `summarise()` has grouped output by 'Trdmnt'. You can override using the
## `.groups` argument.
```




### 所有时间(市值后30%的股票)


```r
factmerg<-Mvtotal%>%
  mutate(TradingMon=Trdmnt)%>%
  merge(fivefactort,by="TradingMon",all.x = T)%>%
  mutate(cumretE10_1=cumsum(E10_1),
  cumretE10=cumsum(Eqret.10),
  cumretE1=cumsum(Eqret.1),
  cumSMB=cumsum(SMB2))
plot(factmerg$cumretE10_1,type="l",axes = F,ylab="累计收益",xlab="时间",lwd=2,ylim=c(-2,13))
axis(side =1,at=seq(1,length(factmerg$Trdmnt),50),
as.character(factmerg$Trdmnt[seq(1,length(factmerg$Trdmnt),50)]))
axis(side =2,at=seq(-2,13,3),seq(-2,13,3))
box(lty = "solid")
lines(factmerg$cumretE10,col="blue",lwd=2)
lines(factmerg$cumretE1,col="orange",lwd=2)
legend(0,13,c("S-B","B","S"),lty=c(1,1,1),lwd=c(2,2,2),
  horiz = T,col = c("black","blue","orange"),border=F)
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-28-1.png" width="672" />


```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.35079 -0.05070 -0.02028  0.02207  0.69276 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.025262   0.006236   4.051 6.39e-05 ***
## RiskPremiu  -0.190459   0.078981  -2.411 0.016449 *  
## SMB2        -0.672471   0.182326  -3.688 0.000265 ***
## HML2        -0.339857   0.216221  -1.572 0.116978    
## RMW2        -0.029402   0.286987  -0.102 0.918464    
## CMA2        -0.017798   0.275045  -0.065 0.948446    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.1092 on 322 degrees of freedom
## Multiple R-squared:  0.08818,	Adjusted R-squared:  0.07403 
## F-statistic: 6.228 on 5 and 322 DF,  p-value: 1.569e-05
```
### 分时间段

**1995年1月至2005年12月(市值后30%的股票)**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-30-1.png" width="672" />



```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.30847 -0.06743 -0.02024  0.02540  0.70880 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)  
## (Intercept)  0.01793    0.01195   1.501   0.1359  
## RiskPremiu  -0.32229    0.14224  -2.266   0.0252 *
## SMB2        -0.65683    0.30299  -2.168   0.0321 *
## HML2        -0.37058    0.40522  -0.915   0.3622  
## RMW2        -0.16129    0.44148  -0.365   0.7155  
## CMA2        -0.08497    0.40659  -0.209   0.8348  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.1283 on 125 degrees of freedom
## Multiple R-squared:  0.09583,	Adjusted R-squared:  0.05967 
## F-statistic:  2.65 on 5 and 125 DF,  p-value: 0.02592
```



**2006年1月至2015年12月(市值后30%的股票)**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-32-1.png" width="672" />



```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.14320 -0.05768 -0.02454  0.01588  0.46162 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.036359   0.009736   3.734 0.000295 ***
## RiskPremiu  -0.040906   0.109320  -0.374 0.708959    
## SMB2        -0.368176   0.335572  -1.097 0.274883    
## HML2        -0.346525   0.329065  -1.053 0.294540    
## RMW2         0.641630   0.573585   1.119 0.265649    
## CMA2         0.026073   0.514856   0.051 0.959700    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.101 on 114 degrees of freedom
## Multiple R-squared:  0.1229,	Adjusted R-squared:  0.08445 
## F-statistic: 3.195 on 5 and 114 DF,  p-value: 0.00976
```


**2016年1月至2022年5月(市值后30%的股票)**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-34-1.png" width="672" />


```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.085404 -0.027197 -0.009712  0.011588  0.260084 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)  
## (Intercept)  0.014792   0.007139   2.072   0.0424 *
## RiskPremiu  -0.118199   0.179985  -0.657   0.5138  
## SMB2        -0.745737   0.290499  -2.567   0.0127 *
## HML2        -0.146831   0.417252  -0.352   0.7261  
## RMW2         0.204542   0.425364   0.481   0.6323  
## CMA2         0.843361   0.579539   1.455   0.1507  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.05698 on 62 degrees of freedom
## Multiple R-squared:  0.2457,	Adjusted R-squared:  0.1849 
## F-statistic:  4.04 on 5 and 62 DF,  p-value: 0.003081
```






## 总市值分组(市值前70%的股票)

```r
pacman::p_load(data.table,stringr,dplyr,foreign,flextable)
options(warn = F)
fivefactort<-read.dbf("D:/科研/数据/月个股回报率文件145758441/STK_MKT_FIVEFACMONTH.dbf")%>% ## 读入月度Fama-French五因子
  filter(Markettype=="P9714"&Portfolios==1)
```

```
## Field name: 'RiskPremiu' changed to: 'RiskPremiu.1'
```

```r
stockret<-read.dbf("D:/科研/数据/月个股回报率文件145758441/TRD_Mnth.dbf")                ##股票市值和收益数据

cleandata<-stockret%>%filter(as.character(Trdmnt)>="1995-01")%>%
  group_by(Stkcd)%>%
  mutate(LMsmvosd=lag(Msmvosd),
  LMsmvttl=lag(Msmvttl))%>%ungroup()%>%
  group_by(Trdmnt)%>%
  filter(LMsmvttl>=quantile(LMsmvttl,0.3,na.rm=T))%>%
  mutate(Groupsd=cut(LMsmvosd,c(min(LMsmvosd)-100,quantile(LMsmvosd,seq(0.1,0.9,0.1),na.rm=T),max(LMsmvosd)+100),labels=1:10),
  Groupmvt=cut(LMsmvttl,c(min(LMsmvttl)-100,quantile(LMsmvttl,seq(0.1,0.9,0.1),na.rm=T),max(LMsmvttl)+100),labels=1:10))%>%
  select(Stkcd,Trdmnt,Groupsd,Groupmvt,Msmvttl,LMsmvttl,Mretnd)%>%
  ungroup()%>%
  na.omit()


Mvtotal<-cleandata%>%group_by(Trdmnt,Groupmvt)%>%
  summarise(Eqret=mean(Mretnd),Wiehtret=weighted.mean(Mretnd,LMsmvttl))%>%
  filter(Groupmvt%in%c(1,10))%>%
  as.data.frame()%>%
  reshape(idvar = "Trdmnt",timevar = "Groupmvt",direction = "wide")%>%
  mutate(E10_1=Eqret.1-Eqret.10,
  W10_1=Wiehtret.1-Wiehtret.10)
```

```
## `summarise()` has grouped output by 'Trdmnt'. You can override using the
## `.groups` argument.
```




### 全时间段(市值前70%的股票)


```r
factmerg<-Mvtotal%>%
  mutate(TradingMon=Trdmnt)%>%
  merge(fivefactort,by="TradingMon",all.x = T)%>%
  mutate(cumretE10_1=cumsum(E10_1),
  cumretE10=cumsum(Eqret.10),
  cumretE1=cumsum(Eqret.1),
  cumSMB=cumsum(SMB2))
plot(factmerg$cumretE10_1,type="l",axes = F,ylab="累计收益",xlab="时间",lwd=2,ylim=c(-2,7))
axis(side =1,at=seq(1,length(factmerg$Trdmnt),50),
as.character(factmerg$Trdmnt[seq(1,length(factmerg$Trdmnt),50)]))
axis(side =2,at=seq(-2,7,2),seq(-2,7,2))
box(lty = "solid")
lines(factmerg$cumretE10,col="blue",lwd=2)
lines(factmerg$cumretE1,col="orange",lwd=2)
legend(0,7,c("S-B","B","S"),lty=c(1,1,1),lwd=c(2,2,2),
  horiz = T,col = c("black","blue","orange"),border=F)
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-37-1.png" width="672" />


```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.059346 -0.011827  0.000688  0.011304  0.080281 
## 
## Coefficients:
##               Estimate Std. Error t value Pr(>|t|)    
## (Intercept) -0.0002772  0.0011103  -0.250 0.802996    
## RiskPremiu  -0.0571848  0.0140627  -4.066 6.01e-05 ***
## SMB2         1.1778615  0.0324633  36.283  < 2e-16 ***
## HML2        -0.0004871  0.0384984  -0.013 0.989912    
## RMW2        -0.1817871  0.0510984  -3.558 0.000431 ***
## CMA2         0.1481259  0.0489721   3.025 0.002689 ** 
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.01945 on 322 degrees of freedom
## Multiple R-squared:  0.908,	Adjusted R-squared:  0.9066 
## F-statistic: 635.6 on 5 and 322 DF,  p-value: < 2.2e-16
```
### 分时间段

**1995年1月至2005年12月(市值前70%的股票)**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-39-1.png" width="672" />



```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.048482 -0.012497  0.000564  0.012691  0.069887 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.001578   0.001906   0.828 0.409321    
## RiskPremiu  -0.046891   0.022695  -2.066 0.040883 *  
## SMB2         1.052535   0.048345  21.772  < 2e-16 ***
## HML2        -0.154998   0.064658  -2.397 0.018000 *  
## RMW2        -0.206367   0.070443  -2.930 0.004036 ** 
## CMA2         0.244383   0.064875   3.767 0.000253 ***
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.02047 on 125 degrees of freedom
## Multiple R-squared:  0.8671,	Adjusted R-squared:  0.8617 
## F-statistic: 163.1 on 5 and 125 DF,  p-value: < 2.2e-16
```



**2006年1月至2015年12月(市值前70%的股票)**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-41-1.png" width="672" />



```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.052115 -0.010315 -0.000092  0.008049  0.052591 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept) -0.002219   0.001766  -1.257  0.21131    
## RiskPremiu  -0.042008   0.019825  -2.119  0.03627 *  
## SMB2         1.416380   0.060856  23.274  < 2e-16 ***
## HML2         0.165044   0.059676   2.766  0.00663 ** 
## RMW2         0.022995   0.104019   0.221  0.82544    
## CMA2         0.035794   0.093369   0.383  0.70217    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.01832 on 114 degrees of freedom
## Multiple R-squared:  0.9462,	Adjusted R-squared:  0.9438 
## F-statistic: 400.8 on 5 and 114 DF,  p-value: < 2.2e-16
```


**2016年1月至2022年5月(市值前70%的股票)**

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-43-1.png" width="672" />


```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg)) ##等权收益回归
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.031221 -0.008218  0.000217  0.006562  0.058239 
## 
## Coefficients:
##               Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.0005274  0.0019728   0.267  0.79009    
## RiskPremiu  -0.0109623  0.0497359  -0.220  0.82628    
## SMB2         1.3099766  0.0802749  16.319  < 2e-16 ***
## HML2         0.3868776  0.1153010   3.355  0.00136 ** 
## RMW2        -0.2933457  0.1175427  -2.496  0.01525 *  
## CMA2        -0.1792742  0.1601465  -1.119  0.26727    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.01575 on 62 degrees of freedom
## Multiple R-squared:  0.908,	Adjusted R-squared:  0.9005 
## F-statistic: 122.3 on 5 and 62 DF,  p-value: < 2.2e-16
```
