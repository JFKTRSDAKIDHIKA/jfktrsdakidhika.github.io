---
layout: post
title: "(2023 JSSC) ReDCIM: Reconfigurable Digital Computing-In-Memory Processor With Unified FP/INT Pipeline for Cloud AI Acceleration"
date: 2023-01-01
description: "Reconfigurable digital CIM processor supporting both FP and INT operations for cloud AI"
published: JSSC 2023
tags: paper-reading CIM digital reconfigurable JSSC chip
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "ReDCIM: Reconfigurable Digital Computing-In-Memory Processor With Unified FP/INT Pipeline for Cloud AI Acceleration"
  authors: "Unknown"
  venue: "JSSC, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/ReDCIM_Reconfigurable_Digital_Computing-_In_-Memory_Processor_With_Unified_FP_INT_Pipeline_for_Cloud_AI_Acceleration.pdf"
---

## TL;DR

- ReDCIM：可重构数字 CIM 处理器，统一 FP/INT pipeline。
- 解决传统 analog CIM 精度不足的问题 → 全数字实现。
- 支持云端 AI 推理（不仅仅是边缘端）。
- 流片验证。

## Problem

Analog CIM 有精度瓶颈（ADC 噪声、cell 变异），数字 CIM 能否同时实现高能效和高精度？

## Method

1. Digital SRAM-based CIM macro
2. Reconfigurable pipeline: 切换 INT8/FP16 模式
3. Multi-bank 并行 + 高效 data path

## Insights

- Digital CIM 正在取代 Analog CIM 成为主流 — 精度可控、可综合、EDA 工具友好。
- 对比：Analog CIM 能效更高但精度受限；Digital CIM 精度无损但面积效率较低。
