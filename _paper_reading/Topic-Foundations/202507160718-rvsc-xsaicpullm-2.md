---
layout: post
title: "(2025 RVSC Talk) XSAI - Hardware Support for Modern LLM Kernels in a CPU Paradigm"
date: 2025-01-01
description: "BOSC's XSAI architecture extending XiangShan RISC-V with tensor extensions for LLM workloads in consumer and cloud SoCs"
published: RVSC Talk 2025
tags: paper-reading foundations RISC-V LLM XiangShan BOSC
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "XSAI: Hardware Support for Modern LLM Kernels in a CPU Paradigm"
  authors: "BOSC (北京开源芯片研究院)"
  venue: "RVSC Talk, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/20250716%260718-RVSC-XSAI%EF%BC%9A%E4%BB%A5CPU%E7%9A%84%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F%E6%94%AF%E6%8C%81%E7%8E%B0%E4%BB%A3LLM%E6%A0%B8%E5%87%BD%E6%95%B0.pdf"
---

## TL;DR

- BOSC 提出 XSAI (ξ) 架构：在香山 RISC-V CPU 基础上扩展张量计算能力，以 CPU 编程范式支持 LLM 核函数。
- 目标：Consumer SoC (AIPC) 和 Cloud SoC 两个场景。
- 采用 XiangShan-KMH + RhyMAX 方案，RISC-V tensor extension 支持 GEMM/attention 等 LLM 关键算子。
- 体现了"CPU+加速器" hybrid 路线（区别于 GPU-centric 或 NPU-centric）。

## Insights

- 代表了中国开源芯片社区在 LLM 硬件方向的探索。
- "CPU paradigm for LLM" 的核心主张：programmability > raw TOPS，适合部署场景多变的 LLM workload。
- 与 Intel AMX、ARM SME 等思路类似：在通用 CPU 上加 matrix extension。
