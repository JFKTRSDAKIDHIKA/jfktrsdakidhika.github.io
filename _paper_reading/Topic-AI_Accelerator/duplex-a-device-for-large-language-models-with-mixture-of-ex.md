---
layout: post
title: "(2024 MICRO) Duplex: A Device for Large Language Models with Mixture of Experts"
date: 2024-01-01
description: "Hardware device optimized for LLM inference with Mixture of Experts architecture"
published: MICRO 2024
tags: paper-reading accelerator LLM MoE device
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Duplex: A Device for Large Language Models with Mixture of Experts"
  authors: "Unknown"
  venue: "MICRO, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Duplex_A_Device_for_Large_Language_Models_with_Mixture_of_Experts_Grouped_Query_Attention_and_Continuous_Batching.pdf"
---

## TL;DR

- Duplex：专为 MoE (Mixture of Experts) LLM 设计的加速器。
- MoE 的挑战：expert routing 不均衡 + 大量 expert weight 需要调度。
- 双工 (Duplex) 设计：同时做 routing decision 和 expert computation。

## Problem

MoE 模型（如 Mixtral）的 expert 选择是动态的，传统加速器无法预知哪些 expert 会被激活。

## Method

1. Predictive expert prefetch（预测哪些 expert 会被选中）
2. 双通道 memory system 支持同时读 routing + expert weights
3. Load balancing across experts

## Insights

- MoE 是 LLM scaling 的主要技术路线 → 专用硬件必须跟进。
- Expert 调度问题类似于 OS 中的 page fault prediction。
