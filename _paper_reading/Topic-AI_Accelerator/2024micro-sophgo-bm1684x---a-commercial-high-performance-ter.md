---
layout: post
title: "(2024 MICRO) SOPHGO BM1684X: A Commercial High Performance Terminal AI Processor with Large Model Support"
date: 2024-01-01
description: "Commercial AI processor for edge deployment supporting large model inference"
published: MICRO 2024
tags: paper-reading accelerator commercial SOPHGO edge-AI chip
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "SOPHGO BM1684X: A Commercial High Performance Terminal AI Processor with Large Model Support"
  authors: "Yang Liu et al."
  venue: "MICRO, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%282024MICRO%29%20SOPHGO%20BM1684X%20-%20A%20Commercial%20High%20Performance%20Terminal%20AI%20Processor%20with%20Large%20Model%20Support.pdf"
---

## TL;DR

- 算能 (SOPHGO) BM1684X：商用边缘 AI 处理器。
- 支持大模型推理（7B 级别 on-device）。
- 32 TOPS INT8, 支持 transformer/CNN 混合负载。
- 已量产部署（安防、自动驾驶等场景）。

## Problem

边缘端需要运行越来越大的 AI 模型，如何在有限功耗/面积下实现？

## Method

高并行度 tensor core + 大容量 on-chip SRAM + 高效 memory subsystem + 编译器优化。

## Insights

- 中国 AI 芯片商业化的代表（SOPHGO/算能 = 比特大陆拆分）。
- 边缘 LLM 推理是当前热点 — BM1684X 代表了产业前沿。
