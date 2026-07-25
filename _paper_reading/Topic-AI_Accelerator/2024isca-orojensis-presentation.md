---
layout: post
title: "(2024 ISCA) Mind the Gap: Attainable Data Movement and Operational Intensity Bounds for Tensor Algorithms"
date: 2024-01-01
description: "Theoretical framework for attainable data movement bounds in tensor computations"
published: ISCA 2024
tags: paper-reading accelerator roofline dataflow analysis theoretical
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Mind the Gap: Attainable Data Movement and Operational Intensity Bounds for Tensor Algorithms"
  authors: "Qijing Huang, Po-An Tsai, Joel S. Emer, Angshuman Parashar"
  venue: "ISCA, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/2024ISCA_Orojensis_Presentation.pdf"
---

## TL;DR

- 为 tensor 算法建立 **可达的** 数据移动下界 (attainable bound)。
- 扩展 roofline model：不只是 peak bandwidth/compute，还考虑 reuse 的理论极限。
- 帮助评估一个 dataflow/mapping 离最优还有多远。

## Problem

给定 tensor 算法（如 GEMM, Conv），在特定硬件约束下，数据移动的理论最小值是多少？

## Method

1. 形式化 tensor 的 loop nest 和 data dependency
2. 推导 memory hierarchy 每层的最优 tiling
3. 计算 attainable operational intensity

## Insights

- MIT Emer/Parashar 组（Timeloop 团队）的理论工作。
- 为 DSE 提供了 "golden reference"：mapping 质量可以用 gap-to-bound 衡量。
- 类似于 HPC 中的 communication lower bound 理论。
