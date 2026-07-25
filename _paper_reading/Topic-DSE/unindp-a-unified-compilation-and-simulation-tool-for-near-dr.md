---
layout: post
title: "(2024 ASPLOS) UniNDP: A Unified Compilation and Simulation Tool for Near DRAM Processing Architectures"
date: 2024-01-01
description: "Unified compilation and simulation tool for near-DRAM processing (NDP) architectures"
published: ASPLOS 2024
tags: paper-reading DSE NDP PIM simulation compilation tool
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "UniNDP: A Unified Compilation and Simulation Tool for Near DRAM Processing Architectures"
  authors: "Unknown"
  venue: "ASPLOS, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/UniNDP_A_Unified_Compilation_and_Simulation_Tool_for_Near_DRAM_Processing_Architectures.pdf"
---

## TL;DR

- UniNDP：统一的 NDP 编译和仿真工具，覆盖从 workload 到 NDP 硬件的全流程。
- 支持多种 NDP 架构（UPMEM, AIM, Newton）的统一编程模型。
- Compiler 负责 workload partition (host vs. NDP) + data mapping。

## Problem

不同 NDP 架构有不同的 ISA 和编程接口，开发者需要为每种重写代码。缺乏统一抽象。

## Method

1. Unified IR 抽象 NDP 操作
2. Compiler 做 host/NDP partition + data layout optimization
3. Simulator 验证 performance/energy

## Insights

- 类似于 TVM 对 DNN accelerator 的作用：统一编程接口 + 自动化 code generation。
- NDP 生态的基础设施建设仍在早期 — UniNDP 是重要一步。
