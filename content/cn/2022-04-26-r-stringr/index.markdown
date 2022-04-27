---
title: 盘点R语言处理文本包stringr的特异功能
author: 薛英杰
date: '2022-04-26'
slug: r-stringr
categories:
  - cn
tags:
  - diary
---

> 使用R处理文本数据离不开正则表达式和得心应手的函数，stringr包配合正则表达式可以解决几乎所有文本分析中遇到的问题。今天我们就来盘点一下这个包中各个函数的特异功能。

> ### 1.查找文本中是否有要匹配字段

> -  **str_detect(string,pattern)**: 探测文本中是否出现了某个字符

> **示例**：


```r
library(stringr)

fruit<-c("apple","pear","banana","orange")

str_detect(fruit,"a")
```

```
## [1] TRUE TRUE TRUE TRUE
```

```r
str_detect(fruit,"ap")
```

```
## [1]  TRUE FALSE FALSE FALSE
```

> - **str_which(string,pattern)**: 返回索要查找字符的索引

> **示例**：


```r
library(stringr)

fruit<-c("apple","pear","banana","orange")

str_which(fruit,"a")
```

```
## [1] 1 2 3 4
```

```r
str_which(fruit,"ap")
```

```
## [1] 1
```

> - **str_count(string,pattern)**: 返回索要匹配字符在文本中出现的次数

> **示例**：


```r
library(stringr)

fruit<-c("apple","pear","banana","orange")

str_count(fruit,"a")
```

```
## [1] 1 1 3 1
```

```r
str_count(fruit,"an")
```

```
## [1] 0 0 2 1
```

> - **str_locate(string,pattern)**: 返回索要查找的字符在文本中开始和终止的位置

> **示例**：


```r
library(stringr)

fruit<-c("apple","pear","banana","orange")

str_locate(fruit,"a")
```

```
##      start end
## [1,]     1   1
## [2,]     3   3
## [3,]     2   2
## [4,]     3   3
```

```r
str_locate(fruit,"an")
```

```
##      start end
## [1,]    NA  NA
## [2,]    NA  NA
## [3,]     2   3
## [4,]     3   4
```

```r
str_locate_all(fruit,"an")
```

```
## [[1]]
##      start end
## 
## [[2]]
##      start end
## 
## [[3]]
##      start end
## [1,]     2   3
## [2,]     4   5
## 
## [[4]]
##      start end
## [1,]     3   4
```

> **Warning:注意str_locate和str_locate_all的区别，如果一个文本中有多个匹配目标文本，str_locate_all是返回所有目标文本的精确位置，而str_locate只返回第一个。**

> ### 2.提取文本子集

> - **str_sub(string,start,end)**: 设定开始和结束长度来提前文本子集

> **示例**：


```r
library(stringr)

fruit<-c("apple","pear","banana","orange")

str_sub(fruit,1,3)
```

```
## [1] "app" "pea" "ban" "ora"
```

```r
str_sub(fruit,-3,-1)
```

```
## [1] "ple" "ear" "ana" "nge"
```

> - **str_subset(string,pattern)**: 返回包含特定模式的字符集

> **示例**：


```r
library(stringr)

fruit<-c("apple","pear3","banana6","orange9")

str_subset(fruit,"an")
```

```
## [1] "banana6" "orange9"
```

```r
str_subset(fruit,"\\d")
```

```
## [1] "pear3"   "banana6" "orange9"
```

> - **str_extract(string,pattern)**: 返回匹配到特定模式的字符集

> **示例**：


```r
library(stringr)

fruit<-c("apple6","pear3","banana6","orange9")

str_extract(fruit,"an")
```

```
## [1] NA   NA   "an" "an"
```

```r
str_extract(fruit,"\\d")
```

```
## [1] "6" "3" "6" "9"
```

> - **str_match(string,pattern)**: 返回匹配到特定模式的字符集

> **示例**：


```r
library(stringr)

fruit<-c("apple6","pear3","banana6","orange9")

str_match(fruit,"an")
```

```
##      [,1]
## [1,] NA  
## [2,] NA  
## [3,] "an"
## [4,] "an"
```

```r
str_match(fruit,"\\d")
```

```
##      [,1]
## [1,] "6" 
## [2,] "3" 
## [3,] "6" 
## [4,] "9"
```

> **Warning:注意str_match和str_extract的区别在于返回的数据类型不同，前者返回矩阵，后者返回向量。**

### 3.字符长度处理

> - **str_pad(string,width,side,ellipsis)**: 用字符填充文本到固定长度

> **示例**：


```r
library(stringr)

fruit<-c("1","2","3","4")

str_pad(fruit,6,"left","0")
```

```
## [1] "000001" "000002" "000003" "000004"
```

> - **str_trunc(string,width,side,ellipsis)**: 截取固定width长度的 字符，截取部分用ellipsis替代

> **示例**：


```r
library(stringr)

fruit<-c("apple6","pear3","banana6","orange9")

str_trunc(fruit,2,"left","4")
```

```
## [1] "46" "43" "46" "49"
```

```r
str_trunc(fruit,2,"center","4")
```

```
## [1] "a4apple6"  "p4pear3"   "b4banana6" "o4orange9"
```

```r
str_trunc(fruit,2,"right","4")
```

```
## [1] "a4" "p4" "b4" "o4"
```


> - **str_trim(string,side)**: 删除字符左右两边的空白

> **示例**：


```r
library(stringr)

fruit<-c(" apple6"," pear3","banana6 ","orange9 ")
fruit
```

```
## [1] " apple6"  " pear3"   "banana6 " "orange9 "
```

```r
str_trim(fruit,"left")
```

```
## [1] "apple6"   "pear3"    "banana6 " "orange9 "
```

```r
str_trim(fruit,"both")
```

```
## [1] "apple6"  "pear3"   "banana6" "orange9"
```

```r
str_trim(fruit,"right")
```

```
## [1] " apple6" " pear3"  "banana6" "orange9"
```

### 4. 字符操作

> - **str_replace(string,pattern,replacement)**: 替代每个文本中第一次被匹配的字符

> **示例**：


```r
library(stringr)

fruit<-c(" apple6"," pear3","banana6 ","orange9 ")
fruit
```

```
## [1] " apple6"  " pear3"   "banana6 " "orange9 "
```

```r
str_replace(fruit,"\\d","数字")
```

```
## [1] " apple数字"  " pear数字"   "banana数字 " "orange数字 "
```

> - **str_to_lower(string,pattern,replacement)**: 大写字母转换成小写

> **示例**：


```r
library(stringr)

fruit<-c("Apple6"," Pear3","Banana6 ",")range9 ")
fruit
```

```
## [1] "Apple6"   " Pear3"   "Banana6 " ")range9 "
```

```r
str_to_lower(fruit)
```

```
## [1] "apple6"   " pear3"   "banana6 " ")range9 "
```

> - **str_to_upper(string,pattern,replacement)**: 小写字母转换成大写

> **示例**：


```r
library(stringr)

fruit<-c("Apple6"," Pear3","Banana6 ",")range9 ")
fruit
```

```
## [1] "Apple6"   " Pear3"   "Banana6 " ")range9 "
```

```r
str_to_upper(fruit)
```

```
## [1] "APPLE6"   " PEAR3"   "BANANA6 " ")RANGE9 "
```

### 文本合并与拆分

> - **str_c(...,sep="",collapse=NULL)**: 文本合并

> **示例**：


```r
library(stringr)

fruit<-data.frame(ates=c("Apple6"," Pear3","Banana6 ","range9 "),
                  btas=c("Apple6"," Pear3","Banana6 ","range9 "))
str_c(fruit$ates,fruit$btas,collapse=NULL)
```

```
## [1] "Apple6Apple6"     " Pear3 Pear3"     "Banana6 Banana6 " "range9 range9 "
```

```r
str_c(fruit$ates,fruit$btas,collapse="")
```

```
## [1] "Apple6Apple6 Pear3 Pear3Banana6 Banana6 range9 range9 "
```

**Warning:注意参数collapse=""和collapse=NULL的区别。**

> - **str_dup(string,time)**: 构造重复性文本

> **示例**：


```r
library(stringr)

fruit<-c("Apple6"," Pear3","Banana6 ","range9 ")
str_dup(fruit,3)
```

```
## [1] "Apple6Apple6Apple6"       " Pear3 Pear3 Pear3"      
## [3] "Banana6 Banana6 Banana6 " "range9 range9 range9 "
```

> - **str_split_fixed(string,pattern,n)**: 拆分一个文本向量成矩阵子文本

> **示例**：


```r
library(stringr)

fruit<-c("Apple6"," Pear3","Banana6 ","range9 ")
str_split_fixed(fruit,"e",2)
```

```
##      [,1]       [,2] 
## [1,] "Appl"     "6"  
## [2,] " P"       "ar3"
## [3,] "Banana6 " ""   
## [4,] "rang"     "9 "
```

```r
str_split_fixed(fruit,"\\d",2)
```

```
##      [,1]     [,2]
## [1,] "Apple"  ""  
## [2,] " Pear"  ""  
## [3,] "Banana" " " 
## [4,] "range"  " "
```

```r
str_split(fruit,"\\d")
```

```
## [[1]]
## [1] "Apple" ""     
## 
## [[2]]
## [1] " Pear" ""     
## 
## [[3]]
## [1] "Banana" " "     
## 
## [[4]]
## [1] "range" " "
```
> - **str_glue(string,pattern,n)**: 文本中嵌入数字并并计算

> **示例**：


```r
library(stringr)
bta<-1:4
fruit<-c("Apple6"," Pear3","Banana6 ","range9 ")
str_glue("{fruit} is {bta}")
```

```
## Apple6 is 1
##  Pear3 is 2
## Banana6  is 3
## range9  is 4
```


### 文本排序

> - **str_order(string)**: 返回文本向量排序索引

> **示例**：


```r
library(stringr)

fruit<-c("Apple6"," Pear3","Banana6 ","range9 ")
str_order(fruit)
```

```
## [1] 2 1 3 4
```

> - **str_order(string)**: 返回文本向量排序后结果

> **示例**：


```r
library(stringr)

fruit<-c("Apple6"," Pear3","Banana6 ","range9 ")

str_sort(fruit)
```

```
## [1] " Pear3"   "Apple6"   "Banana6 " "range9 "
```
