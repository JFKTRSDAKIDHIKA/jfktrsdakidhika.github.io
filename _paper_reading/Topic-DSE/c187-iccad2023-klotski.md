---
layout: post
title: "(2023 ICCAD) Klotski: DNN Model Orchestration on Dataflow Architecture Accelerators"
date: 2023-01-01
description: "DNN model orchestration framework for multi-layer scheduling on dataflow accelerators"
published: ICCAD 2023
tags: paper-reading DSE dataflow scheduling mapping orchestration
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Klotski: DNN Model Orchestration on Dataflow Architecture Accelerators"
  authors: "Unknown"
  venue: "ICCAD, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/C187-ICCAD2023-Klotski.pdf"
---

## TL;DR

- Klotski 解决 dataflow 加速器上多层 DNN 的**调度和编排**问题。
- 类比华容道（Klotski）：在有限资源上安排多个 DNN layer 的执行顺序和资源分配。
- 考虑 layer fusion、pipeline parallelism、buffer reuse 的联合优化。

## Problem

给定 dataflow accelerator 的有限 on-chip resource，如何最优地调度多层 DNN 执行（考虑 data dependency, buffer, pipeline）？

## Method

1. 建模为约束优化问题（资源约束 + 数据依赖约束）
2. 分层决策：先确定 fusion group，再确定每组内的 mapping
3. Heuristic + ILP 混合求解

## Insights

- 从 single-layer mapping (Timeloop) 到 multi-layer orchestration (Klotski) 是 DSE 研究的自然演进。
- "华容道" 类比很形象：有限空间内排列组合的组合爆炸。
