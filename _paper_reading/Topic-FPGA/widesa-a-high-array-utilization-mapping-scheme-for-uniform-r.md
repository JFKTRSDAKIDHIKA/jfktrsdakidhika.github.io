---
layout: post
title: "(2023 DAC) WideSA: A High Array Utilization Mapping Scheme for Uniform Recurrence on FPGA"
date: 2023-01-01
description: "High utilization mapping for systolic arrays on FPGA"
published: DAC 2023
tags: paper-reading FPGA systolic-array mapping utilization
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "WideSA: A High Array Utilization Mapping Scheme for Uniform Recurrence on FPGA"
  authors: "Unknown"
  venue: "DAC, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/WideSA_A_High_Array_Utilization_Mapping_Scheme_for_Uniform_Recurrences_on_ACAP.pdf"
---

## TL;DR

- WideSA：提高 FPGA 上 systolic array 利用率的映射方案。
- 传统 systolic array 对非方阵形状利用率低。
- WideSA 通过 reshape + remap 提高 PE 利用率。

## Problem

实际 DNN layer shape 不规则，systolic array 常有大量空闲 PE。

## Method

将 irregular shape 重新映射为多个小的 regular shape，充满 PE array。

## Insights

- Array utilization 是 FPGA 加速器的核心指标。
- 与 DSE 中的 mapping 优化互补。
