---
layout: post
title: "(2024 TCAD) Klotski v2: Improved DNN Model Orchestration Framework for Dataflow Architecture Accelerators"
date: 2024-01-01
description: "Improved version of Klotski with better fusion decisions and pipeline optimization"
published: TCAD 2024
tags: paper-reading DSE dataflow scheduling mapping
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Klotski v2: Improved DNN Model Orchestration Framework for Dataflow Architecture Accelerators"
  authors: "Unknown"
  venue: "TCAD, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Klotski_v2_Improved_DNN_Model_Orchestration_Framework_for_Dataflow_Architecture_Accelerators%20%281%29.pdf"
---

## TL;DR

- Klotski v2 改进了 v1 的 fusion 决策和 pipeline 优化策略。
- 支持更复杂的 DNN 拓扑（residual, attention blocks）。
- 在更大规模的 DNN 模型上验证了有效性。

## Problem

Klotski v1 的 fusion heuristic 在复杂拓扑上次优；pipeline 策略不够灵活。

## Method

改进的 fusion group 算法 + 更细粒度的 pipeline stage 划分 + 更好的 buffer 管理策略。

## Insights

- 验证了 multi-layer orchestration 是一个持续改进的方向。
- 实际部署需要处理各种 corner case（irregular shapes, dynamic batching）。
