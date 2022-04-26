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

> ### 1.探测要匹配字段

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
