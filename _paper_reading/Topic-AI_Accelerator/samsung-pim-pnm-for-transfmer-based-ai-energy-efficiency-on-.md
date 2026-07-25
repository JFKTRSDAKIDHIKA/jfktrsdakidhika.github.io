---
layout: post
title: "(2023 HotChips) Samsung PIM/PNM for Transformer-Based AI: Energy Efficiency on PIM/PNM Cluster"
date: 2023-01-01
description: "Samsung's industrial PIM/PNM solutions for Transformer workloads in HBM"
published: HotChips 2023
tags: paper-reading PIM PNM Samsung HBM industry
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Samsung PIM/PNM for Transformer-Based AI: Energy Efficiency on PIM/PNM Cluster"
  authors: "Samsung"
  venue: "HotChips, 2023"
  url: ""
  code: ""
  pdf: ""
---

## TL;DR

- Samsung 在 HotChips 2023 展示的 PIM/PNM 产品路线图。
- HBM-PIM：在 HBM DRAM die 中嵌入 FP16 MAC 单元。
- PNM (Processing-Near-Memory)：在 memory controller 附近放加速器。
- 针对 Transformer (BERT, GPT) 优化。

## Problem

LLM 推理的 memory bandwidth 需求远超 GPU 显存带宽。Samsung 如何用 PIM/PNM 解决？

## Method

1. HBM-PIM: 在 DRAM bank 旁加 FP16 ALU
2. CXL-PNM: CXL-attached 加速器做 embedding lookup
3. 软件栈支持自动 offload

## Insights

- Samsung 是 PIM 产业化的领头羊（UPMEM 之外）。
- Industry 视角：PIM 不是替代 GPU，而是 augment GPU（处理 memory-bound kernels）。
- CXL + PIM 是下一阶段的重点。
