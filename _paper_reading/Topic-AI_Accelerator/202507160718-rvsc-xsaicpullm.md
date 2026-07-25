---
layout: post
title: "(2025 RVSC Talk) XSAI: Hardware Support for Modern LLM Kernels in a CPU Paradigm"
date: 2025-01-01
description: "RISC-V extension for supporting modern LLM kernels using CPU programming paradigm"
published: RVSC Talk 2025
tags: paper-reading RISC-V LLM CPU-paradigm Xiangshan BOSC
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "XSAI: Hardware Support for Modern LLM Kernels in a CPU Paradigm"
  authors: "BOSC/Xiangshan Team"
  venue: "RVSC Talk, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/20250716%260718-RVSC-XSAI%EF%BC%9A%E4%BB%A5CPU%E7%9A%84%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F%E6%94%AF%E6%8C%81%E7%8E%B0%E4%BB%A3LLM%E6%A0%B8%E5%87%BD%E6%95%B0%20%282%29.pdf"
---

## TL;DR

- XSAI (ξ)：在 RISC-V CPU (香山/Xiangshan) 上支持 LLM 核函数。
- 核心理念：用 CPU 的编程范式（通用指令集 + 扩展）运行 LLM kernel。
- 不是做 GPU，而是让 CPU 能高效跑 attention, GEMM, softmax。
- BOSC (北京开源芯片研究院) 和 XSAI 团队的联合工作。

## Problem

LLM 依赖 GPU/NPU，能否让通用 RISC-V CPU 也高效支持 LLM 推理？

## Method

1. Xiangshan-KMH: 专用 matrix extension
2. RhyMAX: RISC-V matrix acceleration extension
3. 面向 consumer SoC (AIPC) 和 cloud SoC

## Insights

- 直接与你在 BOSC 的工作相关。
- RISC-V 的扩展性优势：可以加任何自定义指令。
- CPU-paradigm vs GPU-paradigm 的路线之争。
