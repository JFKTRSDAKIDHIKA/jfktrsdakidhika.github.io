---
layout: post
title: "(2024 TCAD) EQ-ViT: Algorithm-Hardware Co-Design for End-to-End Acceleration of Vision Transformers on FPGA"
date: 2024-01-01
description: "Algorithm-hardware co-design for Vision Transformer acceleration on FPGA"
published: TCAD 2024
tags: paper-reading FPGA ViT quantization co-design
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "EQ-ViT: Algorithm-Hardware Co-Design for End-to-End Acceleration of Vision Transformers on FPGA"
  authors: "Unknown"
  venue: "TCAD, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/EQ-ViT_Algorithm-Hardware_Co-Design_for_End-to-End_Acceleration_of_Real-Time_Vision_Transformer_Inference_on_Versal_ACAP_Architecture.pdf"
---

## TL;DR

- EQ-ViT：FPGA 上端到端加速 Vision Transformer。
- 算法-硬件协同：quantization-friendly ViT + 定制 FPGA 加速器。
- 在 FPGA 上实现 comparable-to-GPU 的 ViT 推理。

## Problem

ViT 在 FPGA 上效率低（attention 的动态性不适合固定 datapath）。

## Method

1. 量化友好的 ViT 变体
2. 定制 attention + FFN 加速器
3. Mixed-precision 支持。

## Insights

- ViT on FPGA 是 2024 热点（边缘部署需求）。
- Co-design 比先设计模型再做硬件更有效。
