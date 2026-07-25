---
layout: post
title: "(2024 HPCA) Gemini: Mapping and Architecture Co-exploration for Large-scale DNN Chiplet Accelerators"
date: 2024-01-01
description: "Joint exploration of mapping strategies and chiplet architecture for large-scale DNN accelerators"
published: HPCA 2024
tags: paper-reading DSE chiplet mapping co-exploration
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Gemini: Mapping and Architecture Co-exploration for Large-scale DNN Chiplet Accelerators"
  authors: "Unknown"
  venue: "HPCA, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Gemini_Mapping_and_Architecture_Co-exploration_for_Large-scale_DNN_Chiplet_Accelerators.pdf"
---

## TL;DR

- Gemini 联合探索 chiplet-based 大规模 DNN 加速器的 mapping 和架构。
- 核心挑战：chiplet 间通信代价使得 mapping 问题比单芯片更复杂。
- 同时优化：chiplet 数量/配置 + inter-chiplet 数据分布 + intra-chiplet mapping。

## Problem

Chiplet 加速器的设计空间 = architecture space × mapping space，且两者强耦合（不同架构对应不同最优 mapping）。

## Method

1. Architecture space: chiplet 数量、单个 chiplet 规模、互连拓扑
2. Mapping space: model parallelism (TP/PP/DP) + intra-chiplet dataflow
3. Co-exploration algorithm 避免嵌套循环的巨大开销

## Insights

- Chiplet 时代的 DSE 比 monolithic 复杂得多 — 通信代价不可忽略。
- 对你研究的直接相关性：如果做 multi-chiplet accelerator DSE，Gemini 是 baseline。
