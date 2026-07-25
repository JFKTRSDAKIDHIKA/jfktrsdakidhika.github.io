---
layout: post
title: "(2023 ICCAD) MAGNet: A Modular Accelerator Generator for Neural Networks"
date: 2023-01-01
description: "Modular accelerator generator producing synthesizable RTL from high-level specifications"
published: ICCAD 2023
tags: paper-reading DSE accelerator-generator RTL-generation modular
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "MAGNet: A Modular Accelerator Generator for Neural Networks"
  authors: "Unknown"
  venue: "ICCAD, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/MAGNet_A_Modular_Accelerator_Generator_for_Neural_Networks.pdf"
---

## TL;DR

- MAGNet：模块化 DNN 加速器生成器，从高层规格自动产生可综合 RTL。
- 核心思想：将加速器分解为标准模块（PE array, buffer, controller, NoC），参数化组合。
- 支持从 spec 到 ASIC/FPGA 实现的全流程。

## Problem

加速器设计周期长、RTL 开发工作量大。能否像 software library 一样组合生成硬件？

## Method

1. 定义模块库：parameterized PE, buffer hierarchy, interconnect, control
2. High-level spec 描述所需 dataflow/parallelism
3. Generator 自动组合模块 + 生成 RTL + 约束文件

## Insights

- Accelerator generator 是 DSE 闭环的关键 — 没有 RTL 就无法做后端验证。
- 类似工具：Gemmini (Chisel-based), NVDLA, VTA。
- MAGNet 的优势在 modularity：换模块不需要重写。
