---
layout: post
title: "(2024 TCAD) Pin-3D: Effective Physical Design Methodology for Multi-Die Co-Optimization in Monolithic 3-D ICs"
date: 2024-01-01
description: "Native 3D PnR methodology for monolithic 3D ICs with multi-die co-optimization"
published: TCAD 2024
tags: paper-reading physical-design 3DIC monolithic PnR co-optimization
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Pin-3D: Effective Physical Design Methodology for Multi-Die Co-Optimization in Monolithic 3-D ICs"
  authors: "Sai Pentapati, Kyungwook Chang, Sung Kyu Lim"
  venue: "TCAD, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/tcad24-sai.pdf"
---

## TL;DR

- Pin-3D：原生 3D PnR 方法，专门为 monolithic 3D IC 设计。
- 与 Compact-2D (fold/unfold) 不同，Pin-3D 直接在 3D 空间做 P&R。
- Multi-die co-optimization：同时优化多层的 placement + routing。

## Problem

Compact-2D 的 fold/unfold 方法在 monolithic 3D 下损失 3D-specific 优化机会。

## Method

1. 3D-native placement: 考虑 MIV (Monolithic Inter-tier Via) 位置
2. Tier-aware routing
3. Multi-die timing co-optimization

## Insights

- Monolithic 3D 的 MIV density 比 TSV 高 100×，使 gate-level partitioning 成为可能。
- Sung Kyu Lim 组在 3D PD 领域的核心贡献。
