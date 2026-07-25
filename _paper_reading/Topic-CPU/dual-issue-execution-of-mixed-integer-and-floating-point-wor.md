---
layout: post
title: "(2024 Unknown) Dual-Issue Execution of Mixed Integer and Floating-Point Workloads"
date: 2024-01-01
description: "Dual-issue execution scheme for mixed integer and FP workloads"
published: Unknown 2024
tags: paper-reading CPU dual-issue integer floating-point
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Dual-Issue Execution of Mixed Integer and Floating-Point Workloads"
  authors: "Unknown"
  venue: "Unknown, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Dual-Issue_Execution_of_Mixed_Integer_and_Floating-Point_Workloads_on_Energy-Efficient_In-Order_RISC-V_Cores.pdf"
---

## TL;DR

- 在同一周期内同时发射 integer 和 floating-point 指令 (dual-issue)。
- 传统设计中 INT 和 FP 通道竞争 issue slot。
- 优化 mixed workload（如 quantized DNN inference）的 IPC。

## Problem

混合 INT/FP 负载导致 issue port 利用率低。

## Method

分离 INT/FP issue queue + 并行 dispatch + bypass network 优化。

## Insights

- 对 edge AI (mixed precision INT8+FP16) 负载有实际意义。
