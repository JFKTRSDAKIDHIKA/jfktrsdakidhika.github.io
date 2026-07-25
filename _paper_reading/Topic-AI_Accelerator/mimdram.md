---
layout: post
title: "(2024 ISCA) MIMDRAM: An End-to-End Processing-Using-DRAM System for High-Throughput, Energy-Efficient and Programmer-Transparent Computations"
date: 2024-01-01
description: "End-to-end Processing-Using-DRAM system with MIMD execution model"
published: ISCA 2024
tags: paper-reading PIM DRAM bulk-bitwise MIMD
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "MIMDRAM: An End-to-End Processing-Using-DRAM System for High-Throughput, Energy-Efficient and Programmer-Transparent Computations"
  authors: "Unknown"
  venue: "ISCA, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/mimdram.pdf"
---

## TL;DR

- MIMDRAM：完整的 Processing-Using-DRAM 系统，支持 MIMD 执行模型。
- 利用 DRAM RowClone/RowCopy 技术在 subarray 内做批量 bitwise 操作。
- 端到端：ISA extension + compiler + runtime + 硬件。

## Problem

之前的 PuD (Processing-using-DRAM) 工作只有 micro-benchmark 评估，缺乏完整系统。

## Method

1. 扩展 ISA 支持 PuD 操作
2. Compiler 自动识别可 offload 到 DRAM 的操作
3. Runtime 管理 DRAM subarray 资源分配

## Insights

- Onur Mutlu 组的工作（ETH Zurich / SAFARI）。
- "Processing-Using-DRAM" 是比 "Near-DRAM" 更激进的方案。
- Programmer transparency 是实用化的关键。
