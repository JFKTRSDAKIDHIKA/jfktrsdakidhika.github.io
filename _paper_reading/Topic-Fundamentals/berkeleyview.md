---
layout: post
title: "(2006 UC Berkeley EECS TR) The Landscape of Parallel Computing Research - A View from Berkeley"
date: 2006-01-01
description: "Influential Berkeley report proposing the '13 Dwarfs' of parallel computing and arguing for a new approach to parallel hardware/software design"
published: UC Berkeley EECS TR 2006
tags: paper-reading foundations parallel-computing dwarfs
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "The Landscape of Parallel Computing Research: A View from Berkeley"
  authors: "Krste Asanović, Rastislav Bodik, Bryan Catanzaro, Joseph Gebis, Parry Husbands, Kurt Keutzer, David Patterson, William Plishker, John Shalf, Samuel Williams, Katherine Yelick"
  venue: "UC Berkeley EECS TR, 2006"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/BerkeleyView.pdf"
---

## TL;DR

- 提出并行计算的 **"13 Dwarfs"**（13种基本计算模式）：dense/sparse linear algebra, spectral methods, N-body, structured/unstructured grids, MapReduce, etc.
- 主张用 dwarfs 驱动硬件设计：不是为单一 benchmark 优化，而是覆盖关键计算模式的通用并行架构。
- 批判了当时 processor 设计过度关注 ILP 的方向，预见了多核/众核时代。
- 影响了后续所有 domain-specific accelerator 的分类方法论。

## Insights

- "Dwarfs" 的思想直接启发了后来的 workload characterization 方法（如 DNN workload 的 compute/memory bound 分析）。
- Patterson 团队从这篇 2006 年 report 到 2017 年 TPU paper，一脉相承：用 workload 驱动架构设计。
- 对 DSE 研究的启示：设计空间应该按 workload dwarfs 划分，而非按 microarchitecture 特征。
