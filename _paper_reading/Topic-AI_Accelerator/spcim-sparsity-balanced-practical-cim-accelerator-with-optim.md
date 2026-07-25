---
layout: post
title: "(2023 TCAD) SPCIM: Sparsity-Balanced Practical CIM Accelerator With Optimized Spatial-Temporal Multi-Macro Utilization"
date: 2023-01-01
description: "Practical CIM accelerator with sparsity balancing across multiple macros"
published: TCAD 2023
tags: paper-reading CIM sparsity multi-macro utilization
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "SPCIM: Sparsity-Balanced Practical CIM Accelerator With Optimized Spatial-Temporal Multi-Macro Utilization"
  authors: "Unknown"
  venue: "TCAD, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/SPCIM_Sparsity-Balanced_Practical_CIM_Accelerator_With_Optimized_Spatial-Temporal_Multi-Macro_Utilization.pdf"
---

## TL;DR

- SPCIM 解决多 CIM macro 协同工作时的 sparsity 不均衡问题。
- 稀疏度不同的 macro 会导致 load imbalance → 部分 macro 空闲。
- 提出 spatial-temporal 调度策略平衡各 macro 利用率。

## Problem

多 macro CIM 系统中，不同 macro 分配到的计算负载稀疏度不同，导致利用率低。

## Method

1. Sparsity-aware workload partitioning
2. 空间维度：跨 macro 负载均衡
3. 时间维度：pipeline 调度避免气泡

## Insights

- CIM 系统级优化（multi-macro）是从单 macro demo 到实际产品的必经之路。
- Sparsity 既是机会（跳过计算）也是挑战（不均衡）。
