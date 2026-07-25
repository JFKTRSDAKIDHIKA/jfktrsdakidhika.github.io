---
layout: post
title: "(2024 JSSC) KLIMA: Low-latency Mixed-signal In-Memory Computing Accelerator"
date: 2024-01-01
description: "Low-latency mixed-signal CIM accelerator for DNN inference"
published: JSSC 2024
tags: paper-reading CIM analog mixed-signal low-latency
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "KLIMA: Low-latency Mixed-signal In-Memory Computing Accelerator"
  authors: "Unknown"
  venue: "JSSC, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/KLIMA_Low-latency_mixed-signal_In-Memory_Computing_accelerator_for_solving_arbitrary-order_Boolean_Satisfiability.pdf"
---

## TL;DR

- KLIMA：低延迟混合信号 CIM 加速器。
- 优化 ADC 设计减少 latency（ADC 通常是 CIM 的延迟瓶颈）。
- 混合信号：analog MVM + digital accumulation。

## Problem

Analog CIM 中 ADC 转换延迟 dominates 整体延迟。如何实现低延迟 CIM？

## Method

优化 ADC 架构（如 SAR ADC with early termination）+ pipeline analog-digital interface。

## Insights

- ADC 是 analog CIM 的核心瓶颈（面积、功耗、延迟都由 ADC 主导）。
- 降低 ADC bit 精度是 tradeoff（精度 vs 速度）。
