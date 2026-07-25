---
layout: post
title: "(2023 JSSC) TranCIM: Full-Digital Bitline-Transpose CIM-based Sparse Transformer Accelerator With Pipeline Parallel Reconfigurable Modes"
date: 2023-01-01
description: "Digital CIM accelerator for sparse Transformer with bitline-transpose architecture"
published: JSSC 2023
tags: paper-reading CIM digital Transformer sparsity chip
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "TranCIM: Full-Digital Bitline-Transpose CIM-based Sparse Transformer Accelerator With Pipeline Parallel Reconfigurable Modes"
  authors: "Unknown"
  venue: "JSSC, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/TranCIM_Full-Digital_Bitline-Transpose_CIM-based_Sparse_Transformer_Accelerator_With_Pipeline_Parallel_Reconfigurable_Modes.pdf"
---

## TL;DR

- TranCIM：面向 Transformer 的全数字 CIM 加速器。
- Bitline-transpose 架构：支持 attention 的转置矩阵乘。
- 利用 activation sparsity 跳过无效计算。
- Pipeline parallel mode 支持不同 Transformer block 并行。

## Problem

Transformer 需要 QKᵀ 运算（转置矩阵乘），传统 CIM 只优化一个方向的 MVM。如何在 CIM 中高效做两个方向的乘法？

## Method

1. Bitline-transpose: 通过切换 wordline/bitline 角色实现转置乘
2. Sparsity exploitation: 检测 zero activation, 跳过对应列
3. Pipeline 模式: Attention head 和 FFN 可并行

## Insights

- CIM for Transformer 是最新研究热点（不再只是 CNN）。
- Bitline-transpose 是巧妙的电路级创新。
