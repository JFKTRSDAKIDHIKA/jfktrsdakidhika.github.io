---
layout: post
title: "(1978 CMU CS Report) Systolic Arrays (for VLSI)"
date: 1978-01-01
description: "The seminal paper introducing systolic arrays - a foundational concept for all modern DNN accelerators"
published: CMU CS Report 1978
tags: paper-reading foundations systolic-array VLSI
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Systolic Arrays (for VLSI)"
  authors: "H. T. Kung, Charles E. Leiserson"
  venue: "CMU CS Report, 1978"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/1978-cmu-cs-report-kung-leiserson.pdf"
---

## TL;DR

- 提出 **systolic array** 概念：数据在规则互连的 PE 阵列中有节奏地"泵送"，每个数据元素被多次复用。
- 核心思想：用大量简单 PE 和 local interconnect 替代 global memory access，实现高吞吐计算。
- 给出了矩阵乘法、卷积、LU分解等多种计算的 systolic 实现。
- **所有现代 DNN accelerator（TPU, Eyeriss, systolic arrays）的理论根源。**

## Problem

VLSI 时代，芯片上可以放大量 PE，但 I/O 带宽有限（pin-limited）。如何设计计算结构使得：少量 I/O 下实现高计算吞吐？

## Method

- **Systolic principle**: 数据从 memory 读入后，在 PE array 中流动，每经过一个 PE 都被处理一次
- 不需要每个 PE 独立访存 → memory bandwidth requirement 极低
- PE 间只有 nearest-neighbor 通信 → 布线简单，时钟频率高
- 数据流方向决定了不同的 systolic 组织（weight stationary, output stationary 等的原型）

## Insights

- **奠基之作**：1978 年的概念直接影响了 2017 年的 Google TPU（systolic array for matrix multiply）。
- Dataflow taxonomy (weight/output/input stationary) 本质上就是 systolic array 中不同数据流动方向的分类。
- Systolic 设计的核心权衡：regularity（易于 VLSI 实现）vs. flexibility（只适合规则计算模式）。

## Follow-up

- Google TPU (ISCA 2017) - systolic array 的商业化
- Eyeriss (ISCA 2016) - row stationary dataflow
- MAESTRO, Timeloop - systolic 映射空间建模工具
