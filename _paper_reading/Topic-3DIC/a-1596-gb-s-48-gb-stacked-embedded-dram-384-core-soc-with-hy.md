---
layout: post
title: "(2024 ISSCC) A 1596-GB/s 48-Gb Stacked Embedded DRAM 384-Core SoC With Hybrid Bonding Integration"
date: 2024-01-01
description: "384-core SoC with 48Gb stacked eDRAM using hybrid bonding achieving 1596 GB/s"
published: ISSCC 2024
tags: paper-reading 3DIC hybrid-bonding eDRAM SoC
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "A 1596-GB/s 48-Gb Stacked Embedded DRAM 384-Core SoC With Hybrid Bonding Integration"
  authors: "Unknown"
  venue: "ISSCC, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/A_1596-GB_s_48-Gb_Stacked_Embedded_DRAM_384-Core_SoC_With_Hybrid_Bonding_Integration.pdf"
---

## TL;DR

- 384 核 SoC + 48Gb 堆叠 eDRAM，hybrid bonding 集成。
- 带宽 1596 GB/s — 远超传统 HBM 方案。
- Logic + eDRAM 3D 集成的极端案例。

## Problem

AI/HPC 需要超高带宽内存，HBM 仍有瓶颈。Hybrid bonding eDRAM 能否提供更高带宽？

## Method

384 核 compute die + 多层 eDRAM die，hybrid bonding 实现 ultra-high bandwidth。

## Insights

- 1596 GB/s 超过了 HBM3 (819 GB/s per stack) 的单栈带宽。
- eDRAM + hybrid bonding 可能是 HBM 的竞争方案。
