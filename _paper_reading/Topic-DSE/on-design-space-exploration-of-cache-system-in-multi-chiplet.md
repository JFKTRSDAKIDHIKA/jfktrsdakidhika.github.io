---
layout: post
title: "(2024 ICCAD) On Design Space Exploration of Cache System in Multi-Chiplet Systems"
date: 2024-01-01
description: "DSE framework for cache hierarchy design in multi-chiplet architectures"
published: ICCAD 2024
tags: paper-reading DSE cache chiplet multi-chiplet
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "On Design Space Exploration of Cache System in Multi-Chiplet Systems"
  authors: "Unknown"
  venue: "ICCAD, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/On_Design_Space_Exploration_of_Cache_System_in_Multi-Chiplet_Systems.pdf"
---

## TL;DR

- 探索 multi-chiplet 系统中 cache 层次结构的设计空间。
- 考虑 chiplet 间 coherence protocol、shared/private cache 划分、cache 容量分配。
- 在不同 workload 下找到适应性强的 cache 配置。

## Problem

Multi-chiplet 的 cache 设计比单芯片更复杂：chiplet 间通信延迟使得传统 cache hierarchy 假设不成立。

## Method

Simulation-based DSE (gem5 + multi-chiplet 模型) + 搜索算法。

## Insights

- Chiplet 时代 cache coherence 的代价被放大 → 可能需要 relaxed coherence 或 software-managed 方案。
- 与 Gemini (mapping-architecture co-exploration for chiplet) 互补。
