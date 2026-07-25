---
layout: post
title: "(2021 DAC) HASCO: Towards Agile Hardware and Software CO-design for Tensor Computation"
date: 2021-01-01
description: "Agile HW/SW co-design framework for tensor computations on FPGA"
published: DAC 2021
tags: paper-reading FPGA HLS co-design tensor
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "HASCO: Towards Agile Hardware and Software CO-design for Tensor Computation"
  authors: "Unknown"
  venue: "DAC, 2021"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/HASCO_Towards_Agile_HArdware_and_Software_CO-design_for_Tensor_Computation.pdf"
---

## TL;DR

- HASCO：敏捷的 tensor 计算硬件-软件协同设计框架。
- 从 high-level tensor expression 自动生成 FPGA 加速器。
- 比纯 HLS 方案更高效。

## Problem

FPGA 加速器设计周期长，如何实现类似软件的快速迭代？

## Method

High-level DSL → 自动 tiling/scheduling exploration → HLS code generation。

## Insights

- "Agile hardware" 是 FPGA 领域的追求方向。
- 类似 Halide/TVM 的思路应用到 FPGA。
