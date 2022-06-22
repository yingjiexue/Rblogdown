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
  group_by(Trdmnt)%>%
  mutate(GroupMsmvosd=cut(Msmvosd,c(min(Msmvosd)-100,quantile(Msmvosd,seq(0.1,0.9,0.1),na.rm=T),max(Msmvosd)+100),labels=1:10),
  GroupMsmvttl=cut(Msmvttl,c(min(Msmvttl)-100,quantile(Msmvttl,seq(0.1,0.9,0.1),na.rm=T),max(Msmvttl)+100),labels=1:10))%>%
  ungroup()%>%group_by(Stkcd)%>%
  mutate(Groupsd=lag(GroupMsmvosd),
  Groupmvt=lag(GroupMsmvttl),
  LMsmvosd=lag(Msmvosd),
  LMsmvttl=lag(Msmvttl))%>%
  select(Stkcd,Trdmnt,Groupsd,Groupmvt,LMsmvosd,LMsmvttl,Mretnd)%>%
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

```r
Msmvosd<-cleandata%>%group_by(Trdmnt,Groupsd)%>%
  summarise(Eqret=mean(Mretnd),Wiehtret=weighted.mean(Mretnd,LMsmvosd))%>%
  filter(Groupsd%in%c(1,10))%>%
  as.data.frame()%>%
  reshape(idvar = "Trdmnt",timevar = "Groupsd",direction = "wide")%>%
  mutate(E10_1=Eqret.1-Eqret.10,
  W10_1=Wiehtret.1-Wiehtret.10)
```

```
## `summarise()` has grouped output by 'Trdmnt'. You can override using the
## `.groups` argument.
```



下面的结果分别为全样本和子样本的累计收益表现和Fama-French因子模型回归，回归方程左手边为小市值组合与大市值组合收益差，右手边为市场（RiskPremiu）、市值（SMB）、价值(HML)、投资(CMA)、盈利(RMW)五个因子。


## 总市值分组



### 全样本


```r
factmerg<-Mvtotal%>%
  mutate(TradingMon=Trdmnt)%>%
  merge(fivefactort,by="TradingMon",all.x = T)%>%
  mutate(cumretE10_1=cumsum(E10_1),
  cumretW10_1=cumsum(W10_1),
  cumSMB=cumsum(SMB2))
plot(factmerg$cumretE10_1,type="l",axes = F,ylab="累计收益",xlab="时间",lwd=2)
axis(side =1,at=seq(1,length(factmerg$Trdmnt),50),
as.character(factmerg$Trdmnt[seq(1,length(factmerg$Trdmnt),50)]))
axis(side =2,at=seq(0,8,1),0:8)
box(lty = "solid")
lines(factmerg$cumretW10_1,col="blue",lwd=2)
lines(factmerg$cumSMB,col="red",lwd=2)
legend(0,7,c("等权","加权","SMB"),lty=c(1,1,1),lwd=c(2,2,2),
  horiz = T,col = c("black","blue","red"),border=F)
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-2-1.png" width="672" />

```r
summary(lm(E10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg))
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.26235 -0.03773 -0.00655  0.02320  0.90216 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.020769   0.005146   4.036 6.79e-05 ***
## RiskPremiu  -0.158237   0.065173  -2.428   0.0157 *  
## SMB2         0.666469   0.150451   4.430 1.29e-05 ***
## HML2        -0.376438   0.178420  -2.110   0.0356 *  
## RMW2        -0.421914   0.236815  -1.782   0.0758 .  
## CMA2         0.158123   0.226960   0.697   0.4865    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.09014 on 322 degrees of freedom
## Multiple R-squared:  0.2258,	Adjusted R-squared:  0.2138 
## F-statistic: 18.78 on 5 and 322 DF,  p-value: < 2.2e-16
```

```r
summary(lm(W10_1~RiskPremiu+SMB2+HML2+RMW2+CMA2,factmerg))
```

```
## 
## Call:
## lm(formula = W10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.31699 -0.02792 -0.00333  0.02185  0.88560 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.017900   0.004918   3.640 0.000318 ***
## RiskPremiu  -0.104388   0.062292  -1.676 0.094753 .  
## SMB2         1.003818   0.143800   6.981 1.68e-11 ***
## HML2        -0.506152   0.170533  -2.968 0.003221 ** 
## RMW2        -0.579819   0.226346  -2.562 0.010873 *  
## CMA2         0.196824   0.216927   0.907 0.364911    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.08615 on 322 degrees of freedom
## Multiple R-squared:  0.4005,	Adjusted R-squared:  0.3912 
## F-statistic: 43.03 on 5 and 322 DF,  p-value: < 2.2e-16
```

### 1995年1月至2005年12月

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-3-1.png" width="672" />

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.24202 -0.05055 -0.00931  0.02466  0.91338 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)  
## (Intercept)  0.01906    0.01174   1.623   0.1071  
## RiskPremiu  -0.14502    0.13980  -1.037   0.3016  
## SMB2         0.37299    0.29779   1.253   0.2127  
## HML2        -0.74688    0.39827  -1.875   0.0631 .
## RMW2        -0.42157    0.43391  -0.972   0.3331  
## CMA2         0.17822    0.39961   0.446   0.6564  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.1261 on 125 degrees of freedom
## Multiple R-squared:  0.07229,	Adjusted R-squared:  0.03518 
## F-statistic: 1.948 on 5 and 125 DF,  p-value: 0.09103
```

```
## 
## Call:
## lm(formula = W10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.24580 -0.04850 -0.00574  0.02487  0.90143 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)  
## (Intercept)  0.01525    0.01152   1.324   0.1881  
## RiskPremiu  -0.08096    0.13714  -0.590   0.5560  
## SMB2         0.58587    0.29213   2.005   0.0471 *
## HML2        -0.82884    0.39070  -2.121   0.0359 *
## RMW2        -0.46303    0.42566  -1.088   0.2788  
## CMA2         0.15134    0.39202   0.386   0.7001  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.1237 on 125 degrees of freedom
## Multiple R-squared:  0.1106,	Adjusted R-squared:  0.07499 
## F-statistic: 3.108 on 5 and 125 DF,  p-value: 0.01116
```

### 2006年1月至2015年12月

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-4-1.png" width="672" />

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.086981 -0.028897 -0.006434  0.013541  0.293821 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.026672   0.005498   4.851 3.92e-06 ***
## RiskPremiu  -0.075484   0.061736  -1.223    0.224    
## SMB2         1.207372   0.189506   6.371 4.10e-09 ***
## HML2         0.026467   0.185831   0.142    0.887    
## RMW2         0.085082   0.323917   0.263    0.793    
## CMA2         0.091908   0.290752   0.316    0.753    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.05705 on 114 degrees of freedom
## Multiple R-squared:  0.578,	Adjusted R-squared:  0.5595 
## F-statistic: 31.23 on 5 and 114 DF,  p-value: < 2.2e-16
```

```
## 
## Call:
## lm(formula = W10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.16224 -0.01948 -0.00733  0.01235  0.22846 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.021705   0.004501   4.823 4.42e-06 ***
## RiskPremiu  -0.026051   0.050536  -0.515   0.6072    
## SMB2         1.596922   0.155127  10.294  < 2e-16 ***
## HML2        -0.017839   0.152119  -0.117   0.9069    
## RMW2        -0.145834   0.265156  -0.550   0.5834    
## CMA2         0.454305   0.238007   1.909   0.0588 .  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.0467 on 114 degrees of freedom
## Multiple R-squared:  0.8225,	Adjusted R-squared:  0.8147 
## F-statistic: 105.6 on 5 and 114 DF,  p-value: < 2.2e-16
```


### 2016年1月至2022年5月

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-5-1.png" width="672" />

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.060422 -0.017308 -0.001578  0.012385  0.095948 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.015540   0.003921   3.963 0.000194 ***
## RiskPremiu  -0.139739   0.098847  -1.414 0.162453    
## SMB2         0.926011   0.159541   5.804 2.38e-07 ***
## HML2         0.177258   0.229153   0.774 0.442145    
## RMW2        -0.162298   0.233608  -0.695 0.489811    
## CMA2         0.612074   0.318281   1.923 0.059068 .  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.0313 on 62 degrees of freedom
## Multiple R-squared:  0.6527,	Adjusted R-squared:  0.6247 
## F-statistic: 23.31 on 5 and 62 DF,  p-value: 4.293e-13
```

```
## 
## Call:
## lm(formula = W10_1 ~ RiskPremiu + SMB2 + HML2 + RMW2 + CMA2, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.048556 -0.014957 -0.003592  0.010791  0.064849 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.015811   0.003304   4.786 1.09e-05 ***
## RiskPremiu  -0.072116   0.083288  -0.866    0.390    
## SMB2         1.353492   0.134430  10.068 1.15e-14 ***
## HML2         0.096540   0.193085   0.500    0.619    
## RMW2        -0.302532   0.196839  -1.537    0.129    
## CMA2         0.441035   0.268184   1.645    0.105    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.02637 on 62 degrees of freedom
## Multiple R-squared:  0.8331,	Adjusted R-squared:  0.8196 
## F-statistic: 61.89 on 5 and 62 DF,  p-value: < 2.2e-16
```


## 流通市值分组

### 全样本


```r
factmerg<-Msmvosd%>%
  mutate(TradingMon=Trdmnt)%>%
  merge(fivefactort,by="TradingMon",all.x = T)%>%
  mutate(cumretE10_1=cumsum(E10_1),
  cumretW10_1=cumsum(W10_1),
  cumSMB=cumsum(SMB1))
plot(factmerg$cumretE10_1,type="l",axes = F,ylab="累计收益",xlab="时间",lwd=2)
axis(side =1,at=seq(1,length(factmerg$Trdmnt),50),
as.character(factmerg$Trdmnt[seq(1,length(factmerg$Trdmnt),50)]))
axis(side =2,at=seq(0,8,1),0:8)
box(lty = "solid")
lines(factmerg$cumretW10_1,col="blue",lwd=2)
lines(factmerg$cumSMB,col="red",lwd=2)
legend(0,7,c("等权","加权","SMB"),lty=c(1,1,1),lwd=c(2,2,2),
  horiz = T,col = c("black","blue","red"),border=F)
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-6-1.png" width="672" />

```r
summary(lm(E10_1~RiskPremiu+SMB1+HML1+RMW1+CMA1,factmerg))
```

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB1 + HML1 + RMW1 + CMA1, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.29422 -0.03696 -0.00869  0.02956  0.72572 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.017331   0.004978   3.482 0.000567 ***
## RiskPremiu  -0.165147   0.062223  -2.654 0.008347 ** 
## SMB1         0.956905   0.159075   6.015 4.87e-09 ***
## HML1        -0.395016   0.172145  -2.295 0.022395 *  
## RMW1        -0.071827   0.245575  -0.292 0.770104    
## CMA1         0.172235   0.209303   0.823 0.411174    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.08543 on 322 degrees of freedom
## Multiple R-squared:  0.2815,	Adjusted R-squared:  0.2704 
## F-statistic: 25.23 on 5 and 322 DF,  p-value: < 2.2e-16
```

```r
summary(lm(W10_1~RiskPremiu+SMB1+HML1+RMW1+CMA1,factmerg))
```

```
## 
## Call:
## lm(formula = W10_1 ~ RiskPremiu + SMB1 + HML1 + RMW1 + CMA1, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.31488 -0.03038 -0.00359  0.02377  0.66650 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.009433   0.004165   2.265  0.02419 *  
## RiskPremiu  -0.128114   0.052065  -2.461  0.01439 *  
## SMB1         1.333440   0.133106  10.018  < 2e-16 ***
## HML1        -0.426962   0.144042  -2.964  0.00326 ** 
## RMW1        -0.044057   0.205485  -0.214  0.83037    
## CMA1         0.229604   0.175135   1.311  0.19079    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.07148 on 322 degrees of freedom
## Multiple R-squared:  0.4945,	Adjusted R-squared:  0.4867 
## F-statistic: 63.01 on 5 and 322 DF,  p-value: < 2.2e-16
```

### 1995年1月至2005年12月

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-7-1.png" width="672" />

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB1 + HML1 + RMW1 + CMA1, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.27914 -0.04566 -0.01599  0.02568  0.74373 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)  
## (Intercept)  0.01812    0.01024   1.770   0.0792 .
## RiskPremiu  -0.24777    0.12284  -2.017   0.0458 *
## SMB1         0.45303    0.29796   1.520   0.1309  
## HML1        -0.71669    0.35878  -1.998   0.0479 *
## RMW1        -0.27023    0.40526  -0.667   0.5061  
## CMA1         0.37360    0.32296   1.157   0.2496  
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.1096 on 125 degrees of freedom
## Multiple R-squared:  0.1085,	Adjusted R-squared:  0.07284 
## F-statistic: 3.043 on 5 and 125 DF,  p-value: 0.01259
```

```
## 
## Call:
## lm(formula = W10_1 ~ RiskPremiu + SMB1 + HML1 + RMW2 + CMA1, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.27634 -0.04068 -0.00797  0.02235  0.68421 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)   
## (Intercept)  0.012109   0.008816   1.374  0.17203   
## RiskPremiu  -0.223441   0.104776  -2.133  0.03492 * 
## SMB1         0.766260   0.237292   3.229  0.00159 **
## HML1        -0.533819   0.308436  -1.731  0.08597 . 
## RMW2        -0.423403   0.319122  -1.327  0.18700   
## CMA1         0.311384   0.279159   1.115  0.26680   
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.09454 on 125 degrees of freedom
## Multiple R-squared:  0.1987,	Adjusted R-squared:  0.1666 
## F-statistic: 6.198 on 5 and 125 DF,  p-value: 3.622e-05
```

### 2006年1月至2015年12月

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-8-1.png" width="672" />

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB1 + HML1 + RMW1 + CMA1, 
##     data = factmerg)
## 
## Residuals:
##      Min       1Q   Median       3Q      Max 
## -0.10858 -0.03358 -0.00917  0.02199  0.42928 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.017131   0.006788   2.524    0.013 *  
## RiskPremiu  -0.028515   0.072571  -0.393    0.695    
## SMB1         1.751885   0.251854   6.956 2.34e-10 ***
## HML1         0.226705   0.236583   0.958    0.340    
## RMW1         0.416493   0.415057   1.003    0.318    
## CMA1        -0.551584   0.377336  -1.462    0.147    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.06757 on 114 degrees of freedom
## Multiple R-squared:  0.5692,	Adjusted R-squared:  0.5503 
## F-statistic: 30.13 on 5 and 114 DF,  p-value: < 2.2e-16
```

```
## 
## Call:
## lm(formula = W10_1 ~ RiskPremiu + SMB1 + HML1 + RMW1 + CMA1, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.101803 -0.029193 -0.004862  0.021492  0.299266 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.006606   0.005083   1.300    0.196    
## RiskPremiu  -0.017211   0.054344  -0.317    0.752    
## SMB1         1.906386   0.188598  10.108   <2e-16 ***
## HML1         0.020446   0.177162   0.115    0.908    
## RMW1         0.115626   0.310810   0.372    0.711    
## CMA1        -0.353455   0.282563  -1.251    0.214    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.0506 on 114 degrees of freedom
## Multiple R-squared:  0.7948,	Adjusted R-squared:  0.7858 
## F-statistic: 88.32 on 5 and 114 DF,  p-value: < 2.2e-16
```


### 2016年1月至2022年5月

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-9-1.png" width="672" />

```
## 
## Call:
## lm(formula = E10_1 ~ RiskPremiu + SMB1 + HML1 + RMW1 + CMA1, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.075574 -0.024594 -0.001905  0.014555  0.136887 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.008290   0.005104   1.624   0.1094    
## RiskPremiu  -0.055527   0.127284  -0.436   0.6642    
## SMB1         1.437103   0.209295   6.866 3.66e-09 ***
## HML1         0.388181   0.272153   1.426   0.1588    
## RMW1         0.578544   0.336842   1.718   0.0909 .  
## CMA1        -0.033026   0.390205  -0.085   0.9328    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.04026 on 62 degrees of freedom
## Multiple R-squared:  0.537,	Adjusted R-squared:  0.4997 
## F-statistic: 14.38 on 5 and 62 DF,  p-value: 2.421e-09
```

```
## 
## Call:
## lm(formula = W10_1 ~ RiskPremiu + SMB1 + HML1 + RMW1 + CMA1, 
##     data = factmerg)
## 
## Residuals:
##       Min        1Q    Median        3Q       Max 
## -0.073404 -0.024972 -0.004774  0.021222  0.098900 
## 
## Coefficients:
##              Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  0.003788   0.004645   0.816    0.418    
## RiskPremiu  -0.031383   0.115831  -0.271    0.787    
## SMB1         1.809958   0.190463   9.503 1.03e-13 ***
## HML1         0.216710   0.247664   0.875    0.385    
## RMW1         0.427155   0.306532   1.394    0.168    
## CMA1        -0.241894   0.355093  -0.681    0.498    
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.03664 on 62 degrees of freedom
## Multiple R-squared:  0.7366,	Adjusted R-squared:  0.7153 
## F-statistic: 34.67 on 5 and 62 DF,  p-value: < 2.2e-16
```
