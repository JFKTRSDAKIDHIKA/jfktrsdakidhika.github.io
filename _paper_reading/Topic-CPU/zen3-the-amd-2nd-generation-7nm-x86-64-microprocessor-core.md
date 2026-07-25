---
layout: post
title: "(2022 ISSCC) Zen3: The AMD 2nd-Generation 7nm x86-64 Microprocessor Core"
date: 2022-01-01
description: "AMD Zen3 microprocessor core architecture details from ISSCC"
published: ISSCC 2022
tags: paper-reading CPU AMD Zen3 microarchitecture ISSCC
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Zen3: The AMD 2nd-Generation 7nm x86-64 Microprocessor Core"
  authors: "AMD"
  venue: "ISSCC, 2022"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Zen3_The_AMD_2nd-Generation_7nm_x86-64_Microprocessor_Core.pdf"
---

## TL;DR

- AMD Zen3 微架构详解（ISSCC 2022）。
- 7nm, 统一的 8-core CCX (vs Zen2 的 4+4)。
- IPC 提升 ~19% over Zen2。
- 关键改进：更大 L3 cache 共享、更宽 frontend。

## Problem

如何在同一工艺节点 (7nm) 下通过微架构改进提升性能？

## Method

统一 8 核共享 32MB L3 + 更大 dispatch/issue width + improved branch prediction。

## Insights

- ISSCC 级别的工业微架构论文 — 实际产品的真实数据。
- "Same node, better architecture" 策略。
