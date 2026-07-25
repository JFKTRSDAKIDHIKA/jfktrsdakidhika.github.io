---
layout: post
title: "(2025 MICRO) OASIS: A Commercial High Performance Terminal AI Processor Supporting RISC-V Tensor Extension Instructions"
date: 2025-01-01
description: "Commercial AI processor with RISC-V tensor extension for edge deployment"
published: MICRO 2025
tags: paper-reading accelerator commercial RISC-V tensor edge-AI
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "OASIS: A Commercial High Performance Terminal AI Processor Supporting RISC-V Tensor Extension Instructions"
  authors: "Peng Gao, Yang Liu et al."
  venue: "MICRO, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%282025MICRO%29%20OASIS%20-%20A%20Commercial%20High%20Performance%20Terminal%20AI%20Processor%20Supporting%20RISC-V%20Tensor%20Extension%20Instructions.pdf"
---

## TL;DR

- OASIS：支持 RISC-V Tensor Extension 的商用 AI 处理器（SOPHGO 新一代）。
- 基于 RISC-V 自定义 tensor 指令集（非 ARM/x86）。
- 性能对标 BM1684X 的下一代。

## Problem

如何在 RISC-V 生态上实现高性能 AI 推理？标准 RVV 不够用。

## Method

自定义 RISC-V tensor extension + 专用 tensor core + 编译器 co-design。

## Insights

- RISC-V for AI 的产业化进展。
- 与 XSAI (Xiangshan) 的思路相呼应：RISC-V + AI 扩展。
