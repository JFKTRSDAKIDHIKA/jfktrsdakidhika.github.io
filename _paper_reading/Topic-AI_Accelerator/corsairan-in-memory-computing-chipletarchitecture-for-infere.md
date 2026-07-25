---
layout: post
title: "(2024 ISSCC) CORSAIR: An In-Memory Computing Chiplet Architecture for Inference"
date: 2024-01-01
description: "In-memory computing chiplet architecture for scalable DNN inference"
published: ISSCC 2024
tags: paper-reading CIM chiplet inference ISSCC
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "CORSAIR: An In-Memory Computing Chiplet Architecture for Inference"
  authors: "Unknown"
  venue: "ISSCC, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/CORSAIRAn_In-Memory_Computing_ChipletArchitecture_for_Inference-Time_Compute_Acceleration.pdf"
---

## TL;DR

- CORSAIR：CIM chiplet 架构，通过多 chiplet 扩展 CIM 推理能力。
- 解决单 CIM die 容量有限的问题 → chiplet 级 scale-out。
- ISSCC 2024 发表，代表 CIM 从单 chip 走向系统集成。

## Problem

单个 CIM chip 容量有限（只能存部分 model），如何扩展到大模型？

## Method

多 CIM chiplet + die-to-die interconnect + model partitioning across chiplets。

## Insights

- CIM + Chiplet 是两个热点趋势的结合。
- 关键挑战：chiplet 间通信不能抵消 CIM 的带宽优势。
- 与 3DIC 方向交叉。
