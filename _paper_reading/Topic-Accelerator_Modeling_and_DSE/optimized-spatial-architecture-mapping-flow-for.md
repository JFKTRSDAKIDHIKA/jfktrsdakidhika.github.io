---
layout: post
title: "(2022 DAC) Optimized Spatial Architecture Mapping Flow"
date: 2022-01-01
description: "Optimized mapping flow for spatial DNN accelerator architectures"
published: DAC 2022
tags: paper-reading DSE mapping spatial-architecture optimization
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Optimized Spatial Architecture Mapping Flow"
  authors: "Unknown"
  venue: "DAC, 2022"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Optimized%20Spatial%20Architecture%20Mapping%20Flow%20for.pdf"
---

## TL;DR

- 针对 spatial DNN accelerator 提出优化的 mapping flow。
- 从 high-level DNN graph 到 low-level PE assignment 的系统化转换。
- 结合 analytical model + search 找最优 spatial mapping。

## Problem

Spatial accelerator 的 mapping 空间巨大（每个 PE 可映射不同计算），如何系统化地找好 mapping？

## Method

分层 mapping: Loop tiling → PE assignment → Data routing，每层独立优化。

## Insights

- Spatial mapping 是 Timeloop/MAESTRO 等工具的核心问题。
- "Mapping flow" 的概念强调了 mapping 不是一步到位，而是层层 refinement。
