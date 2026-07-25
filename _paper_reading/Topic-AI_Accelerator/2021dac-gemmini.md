---
layout: post
title: "(2021 DAC) Gemmini: Enabling Systematic Deep-Learning Architecture Evaluation via Full-Stack Integration"
date: 2021-01-01
description: "Open-source systolic array accelerator generator integrated with RISC-V SoC for full-stack DNN evaluation"
published: DAC 2021
tags: paper-reading accelerator generator systolic-array RISC-V Chisel
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Gemmini: Enabling Systematic Deep-Learning Architecture Evaluation via Full-Stack Integration"
  authors: "Hasan Genc, Seah Kim, Alon Amid et al."
  venue: "DAC, 2021"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%282021DAC%29%20Gemmini.pdf"
---

## TL;DR

- Gemmini：开源参数化 systolic array 加速器生成器，集成在 RISC-V SoC 中。
- 支持从 TensorFlow/PyTorch → compiler → accelerator → tape-out 的全栈验证。
- 用 Chisel 实现，参数化 PE array 大小、数据类型、scratchpad 容量。
- UC Berkeley 的标志性开源 IP。

## Problem

学术界缺乏 end-to-end 的 DNN accelerator 评估平台（从软件到 RTL 到后端）。

## Method

1. 参数化 systolic array (WS/OS dataflow)
2. 集成 RoCC interface 接入 RISC-V Rocket/BOOM
3. Custom ISA extensions for matrix operations
4. Software stack: ONNX → Gemmini compiler → ISA

## Insights

- Gemmini 是做 accelerator 研究的标准 baseline 之一。
- 全栈集成的价值：能跑真实 workload，不只是 microbenchmark。
- 开源 + 参数化 = reproducible research。
