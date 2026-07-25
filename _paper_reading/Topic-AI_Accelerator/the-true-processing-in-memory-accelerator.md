---
layout: post
title: "(2023 JSSC) The True Processing In Memory Accelerator"
date: 2023-01-01
description: "A true PIM accelerator with compute logic embedded directly in DRAM arrays"
published: JSSC 2023
tags: paper-reading PIM DRAM accelerator chip
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "The True Processing In Memory Accelerator"
  authors: "Unknown"
  venue: "JSSC, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/The_true_Processing_In_Memory_accelerator.pdf"
---

## TL;DR

- 提出 "真正的" PIM — 计算逻辑直接嵌入 DRAM 阵列内部（不是 near-memory）。
- 利用 DRAM subarray-level 并行性实现超高带宽计算。
- 流片验证了在 DRAM 工艺下做逻辑的可行性。

## Problem

大多数 "PIM" 其实是 near-memory computing (NMC)。真正在 memory cell 旁做计算有什么挑战和收益？

## Method

在 DRAM sense amplifier 中嵌入逻辑门，利用 charge sharing 完成 bulk bitwise 操作。

## Insights

- "True PIM" vs. "Near-memory": 前者带宽更高（internal bandwidth），但逻辑功能受限。
- 适合特定 workload：大规模 bitwise 操作、搜索、哈希。
