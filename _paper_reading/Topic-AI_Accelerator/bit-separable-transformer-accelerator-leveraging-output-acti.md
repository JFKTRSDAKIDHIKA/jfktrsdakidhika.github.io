---
layout: post
title: "(2024 ISSCC) Bit-Separable Transformer Accelerator Leveraging Output Activation Sparsity for Efficient DRAM Access"
date: 2024-01-01
description: "Transformer accelerator exploiting output activation sparsity to reduce DRAM bandwidth"
published: ISSCC 2024
tags: paper-reading accelerator Transformer sparsity DRAM ISSCC
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Bit-Separable Transformer Accelerator Leveraging Output Activation Sparsity for Efficient DRAM Access"
  authors: "Unknown"
  venue: "ISSCC, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Bit-Separable_Transformer_Accelerator_Leveraging_Output_Activation_Sparsity_for_Efficient_DRAM_Access.pdf"
---

## TL;DR

- 利用 Transformer 输出 activation 的 bit-level sparsity 减少 DRAM 访问。
- Bit-separable 计算：将高位和低位分开处理，低位稀疏时跳过。
- 显著降低 off-chip memory bandwidth 需求。

## Problem

Transformer 的 attention/FFN 输出 activation 存在大量 leading-zero bits。能否利用 bit-level sparsity？

## Method

1. 检测 output activation 的 effective bit-width
2. 只传输/计算 non-zero 高位部分
3. 硬件支持 variable bit-width 的 MAC 操作

## Insights

- Bit-level sparsity 是 value sparsity 之外的另一个优化维度。
- ISSCC 级别的电路创新 + 架构设计。
