---
layout: post
title: "(2023 MICRO) DOSA: Differentiable Model-Based One-Loop Search for DNN Accelerators"
date: 2023-01-01
description: "Differentiable one-loop search method for jointly optimizing DNN accelerator architecture and mapping"
published: MICRO 2023
tags: paper-reading DSE differentiable-optimization accelerator mapping
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "DOSA: Differentiable Model-Based One-Loop Search for DNN Accelerators"
  authors: "Unknown"
  venue: "MICRO, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/dosa2023-micro-slides.pdf"
---

## TL;DR

- 提出 DOSA：将加速器 DSE 转化为可微分优化问题，一次循环联合搜索架构和映射。
- 核心创新：relaxation of discrete design choices → continuous optimization → rounding。
- 比 heuristic/RL-based DSE 更快收敛到更优解。

## Problem

传统 DSE 方法（遗传算法、RL、Bayesian）需要大量迭代评估。能否用 gradient-based 方法一次性找到好的设计？

## Method

1. 将离散设计选择（PE 数量、buffer 大小、dataflow）松弛为连续变量
2. 构建可微分的 performance model
3. 用 gradient descent 联合优化所有参数
4. 最后 rounding 回离散空间

## Insights

- 可微分方法在 NAS (Neural Architecture Search) 中已成功，DOSA 将其引入硬件 DSE。
- 关键挑战：hardware design space 的约束比 NAS 更复杂（面积、功耗、时序）。
- 需要高质量的可微分 surrogate model。
