---
layout: post
title: "(2020 Unknown) Using Bayesian Optimization for Hardware/Software Co-Design of Neural Accelerators"
date: 2020-01-01
description: "Bayesian optimization for joint hardware/software design space exploration of neural accelerators"
published: Unknown 2020
tags: paper-reading DSE Bayesian-optimization HW-SW-codesign accelerator
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Using Bayesian Optimization for Hardware/Software Co-Design of Neural Accelerators"
  authors: "Zhan Shi, Chirag Sakhuja, Milad Hashemi, Kevin Swersky"
  venue: "Unknown, 2020"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/using_shi_2020.pdf"
---

## TL;DR

- 用 Bayesian Optimization 联合搜索 DNN accelerator 的 HW 配置和 SW mapping。
- 证明 BO 比 random search 和 grid search 在同等 budget 下找到更好的设计点。
- 处理 mixed-variable (continuous + discrete) 搜索空间。

## Problem

Neural accelerator 的 HW (PE count, buffer size) 和 SW (tiling, loop order) 互相耦合，联合空间巨大。

## Method

1. 定义联合搜索空间
2. GP surrogate model 建模 objective (latency/energy)
3. Acquisition function 选下一个评估点
4. 迭代直到收敛

## Insights

- Google 团队的工作，将 BO 引入 accelerator DSE 的早期尝试。
- BO 对中等维度 (~20D) 效果好，但高维需要改进 (→ TuRBO)。
- 启发了后续大量 BO-for-DSE 的工作。
