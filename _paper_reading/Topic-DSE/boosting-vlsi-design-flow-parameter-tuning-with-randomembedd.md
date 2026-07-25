---
layout: post
title: "(2024 TODAES) Boosting VLSI Design Flow Parameter Tuning with Random Embedding and MOBO"
date: 2024-01-01
description: "Random embedding + multi-objective trust-region BO for VLSI design flow tuning"
published: TODAES 2024
tags: paper-reading DSE Bayesian-optimization VLSI random-embedding
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Boosting VLSI Design Flow Parameter Tuning with Random Embedding and MOBO"
  authors: "Unknown"
  venue: "TODAES, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Boosting%20VLSI%20Design%20Flow%20Parameter%20Tuning%20with%20RandomEmbedding%20and%20Multi-objective%20Trust-region%20BayesianOptimization.pdf"
---

## TL;DR

- Random embedding 将高维 EDA 参数空间投射到低维，使 BO 可扩展。
- Multi-objective trust-region BO 在低维子空间中高效搜索 Pareto front。
- 应用于 synthesis/place/route 工具调参。

## Problem

EDA 工具有 100+ 参数，直接用 BO 不可行。如何降维+多目标同时处理？

## Method

Random projection + Trust-region MOBO + Pareto 筛选。

## Insights

- 降维是高维 DSE 的关键 enabler。
- Random embedding 理论上保证了重要信息的保留（Johnson-Lindenstrauss lemma）。
