---
layout: post
title: "(2023 FPGA) High Performance Low Power Matrix Multiply Design on ACAP from Algorithm to RTL"
date: 2023-01-01
description: "High-performance matrix multiply on Versal ACAP platform"
published: FPGA 2023
tags: paper-reading FPGA Versal ACAP matrix-multiply
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "High Performance Low Power Matrix Multiply Design on ACAP from Algorithm to RTL"
  authors: "Unknown"
  venue: "FPGA, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/High_Performance_Low_Power_Matrix_Multiply_Design_on_ACAP_from_Architecture_Design_Challenges_and_DSE_Perspectives.pdf"
---

## TL;DR

- 在 Xilinx Versal ACAP (AI Core + PL + PS) 上实现高性能低功耗矩阵乘。
- 利用 AI Engine (AIE) 的 VLIW + SIMD 能力做 GEMM。
- 从算法到 RTL 的全栈优化。

## Problem

ACAP 的 AI Engine 编程复杂，如何充分利用其向量单元做 GEMM？

## Method

Algorithm-level tiling → AIE kernel 优化 → PL 做数据搬运 → 全系统集成。

## Insights

- Versal ACAP 是 FPGA + AI Engine 的异构平台。
- AIE 的编程范式不同于传统 FPGA HLS。
