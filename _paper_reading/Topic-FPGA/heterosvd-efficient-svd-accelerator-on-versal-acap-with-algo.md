---
layout: post
title: "(2024 DAC) HeteroSVD: Efficient SVD Accelerator on Versal ACAP with Algorithm-Hardware Co-Design"
date: 2024-01-01
description: "SVD accelerator on Versal ACAP exploiting heterogeneous compute resources"
published: DAC 2024
tags: paper-reading FPGA Versal ACAP SVD heterogeneous
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "HeteroSVD: Efficient SVD Accelerator on Versal ACAP with Algorithm-Hardware Co-Design"
  authors: "Unknown"
  venue: "DAC, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/HeteroSVD_Efficient_SVD_Accelerator_on_Versal_ACAP_with_Algorithm-Hardware_Co-Design%20%281%29.pdf"
---

## TL;DR

- HeteroSVD：在 Versal ACAP 上用异构资源加速 SVD。
- AIE 做 dense compute，PL 做 data shuffle/control。
- SVD 是 LLM compression (LoRA) 的核心运算。

## Problem

SVD 计算量大但 structure 特殊（迭代、mixed 精度），如何在 ACAP 上高效实现？

## Method

异构映射：Jacobi SVD 的旋转运算→AIE, 排序/选择→PL。

## Insights

- SVD for LoRA/模型压缩是新兴应用。
- Versal ACAP 的异构性正好匹配 SVD 的混合计算需求。
