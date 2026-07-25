---
layout: post
title: "(2019 NeurIPS) Scalable Global Optimization via Local Bayesian Optimization (TuRBO)"
date: 2019-01-01
description: "TuRBO: trust-region BO that maintains multiple local models for scalable high-dimensional optimization"
published: NeurIPS 2019
tags: paper-reading DSE Bayesian-optimization TuRBO high-dimensional
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Scalable Global Optimization via Local Bayesian Optimization (TuRBO)"
  authors: "David Eriksson et al."
  venue: "NeurIPS, 2019"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Scalable%20Global%20Optimization%20via%20Local%20Bayesian%20Optimization.pdf"
---

## TL;DR

- 提出 **TuRBO**：用 trust region 限制 BO 的搜索范围，使其在高维（>20D）时仍然有效。
- 维护多个 trust region，每个有独立的 local GP model。
- Trust region 根据 success/failure 自适应 expand/shrink。
- 是目前高维 BO 的 state-of-the-art 方法之一。

## Problem

Standard GP-based BO 在高维时 GP 拟合质量差、acquisition 有太多 local optima。如何 scale BO to high dimensions？

## Method

1. 初始化多个 trust region（局部搜索区域）
2. 每个 trust region 内用 local GP 建模
3. 采集新点时只在 trust region 内搜索
4. 根据观测质量动态调整 trust region 大小
5. Restart mechanism 避免陷入 local optima

## Insights

- TuRBO 是 architecture DSE 中最常用的 BO variant 之一（ICCAD 2024 那篇就对比了它）。
- 核心哲学："Think globally, act locally" — 全局策略分配 budget，局部模型做精细搜索。
- 对你的 DSE 研究直接有用：如果参数 >20 维，优先考虑 TuRBO 而非 vanilla BO。
