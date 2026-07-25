---
layout: post
title: "(2024 ICCAD) Polaris: Multi-Fidelity Design Space Exploration of Deep Learning Accelerators"
date: 2024-01-01
description: "Multi-fidelity DSE framework combining fast analytical models with expensive cycle-accurate simulation"
published: ICCAD 2024
tags: paper-reading DSE multi-fidelity Bayesian-optimization accelerator
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Polaris: Multi-Fidelity Design Space Exploration of Deep Learning Accelerators"
  authors: "Unknown"
  venue: "ICCAD, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Polaris%20-%20Multi-Fidelity%20Design%20Space%20Exploration%20of%20Deep%20Learning%20Accelerators.pdf"
---

## TL;DR

- 提出多保真度 (multi-fidelity) DSE 框架：用低保真度模型（analytical）快速筛选，高保真度（cycle-accurate sim）精确验证。
- 关键思想：不是所有 design point 都需要昂贵的精确评估，大部分可以用便宜模型淘汰。
- 比 single-fidelity DSE 减少 evaluation cost，同时维持解质量。

## Problem

Cycle-accurate simulation 太慢（分钟/小时级），analytical model 太粗。如何平衡 exploration 速度和精确度？

## Method

1. 多层模型：Level 0 (analytical, ms) → Level 1 (cycle-approx, sec) → Level 2 (cycle-accurate, min)
2. Multi-fidelity Bayesian optimization: 用低层 model 的信息指导高层 model 的采样
3. 信息融合：不同层的评估结果加权组合

## Insights

- Multi-fidelity 是 DSE 的未来方向 — 从 Timeloop (analytical) 到 gem5 (cycle-accurate) 的 cost 差异巨大。
- 与 transfer learning for DSE 互补：multi-fidelity 跨精度层，transfer learning 跨架构。
- 对你的研究的直接启发：bupt_stamp 项目如果有 fast proxy + accurate sim，可以用此框架。
