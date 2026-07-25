---
layout: post
title: "(2023 MICRO) DEAP: DNN Accelerator Parallelism DSE"
date: 2023-01-01
description: "Design space exploration framework for DNN accelerator parallelism strategies"
published: MICRO 2023
tags: paper-reading DSE parallelism DNN-accelerator
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "DEAP: DNN Accelerator Parallelism DSE"
  authors: "Unknown"
  venue: "MICRO, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/DEAP_DNN_Accelerator_Parallelism_DSE.pdf"
---

## TL;DR

- 探索 DNN 加速器中不同层面的并行策略：spatial, temporal, pipeline parallelism。
- 建立并行策略 → 性能/面积/能耗 的分析模型。
- 在大规模设计空间中搜索最优并行配置。

## Problem

DNN 加速器的并行度选择（PE array 维度、pipeline stage 划分、数据并行度）构成巨大设计空间，如何高效探索？

## Method

1. 形式化并行策略空间
2. 建立 analytical performance model
3. 搜索算法在 constrained 空间中找 Pareto-optimal 配置

## Insights

- 并行策略的选择对最终 PPA 影响巨大（可差 2-5×），是 DSE 中最值得关注的维度之一。
- Analytical model 比 simulation 快几个数量级，适合大规模 DSE。
