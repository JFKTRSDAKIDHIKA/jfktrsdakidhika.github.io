---
layout: post
title: "(2020 IEEE Micro) (2019 IEEE Micro) MAESTRO: A Data-Centric Approach to Understand Reuse, Performance, and Hardware Cost of DNN Mappings"
date: 2020-01-01
description: "Data-centric analytical model for understanding DNN dataflow/mapping reuse, performance, and cost"
published: IEEE Micro 2020
tags: paper-reading DSE dataflow mapping analytical-model reuse
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "MAESTRO: A Data-Centric Approach to Understand Reuse, Performance, and Hardware Cost of DNN Mappings"
  authors: "Hyoukjun Kwon, Prasanth Chatarasi, Michael Pellauer, Angshuman Parashar, Vivek Sarkar, Tushar Krishna"
  venue: "IEEE Micro, 2020"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/MAESTRO_A_Data-Centric_Approach_to_Understand_Reuse_Performance_and_Hardware_Cost_of_DNN_Mappings.pdf"
---

## TL;DR

- MAESTRO 提出以数据为中心的分析框架，理解 DNN mapping 中的数据复用模式。
- 用 "data-centric directive" 描述 dataflow，自动推导 reuse factor、buffer 需求、带宽需求。
- 开源工具，被后续大量 DSE 工作引用（Timeloop 的互补工具）。

## Problem

DNN 加速器的 mapping (dataflow) 决定了数据复用模式，进而影响性能和能效。如何系统地分析和比较不同 mapping？

## Method

1. Data-centric directives: 用简洁的语言描述数据在空间和时间上的分布
2. 自动推导 reuse factor: 从 directive 计算每种 tensor (weight/input/output) 的复用次数
3. 性能/面积/能耗估算: 基于 reuse 推导 buffer size、bandwidth、latency

## Insights

- MAESTRO 的核心贡献是让 mapping 分析变得可编程和可自动化。
- 与 Timeloop 的区别：Timeloop 更关注 "给定 mapping 的精确评估"，MAESTRO 更关注 "mapping 的系统化表达和比较"。
- 对 DSE 的价值：可以作为 DSE loop 中的快速评估器。
