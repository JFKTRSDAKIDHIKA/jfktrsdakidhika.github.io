---
layout: post
title: "(2023 ISSCC) A Stacked Embedded DRAM Array for LPDDR4 4X using Hybrid Bonding 3D Integration"
date: 2023-01-01
description: "Stacked eDRAM with LPDDR4 4X interface using hybrid bonding"
published: ISSCC 2023
tags: paper-reading 3DIC hybrid-bonding eDRAM LPDDR
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "A Stacked Embedded DRAM Array for LPDDR4 4X using Hybrid Bonding 3D Integration"
  authors: "Unknown"
  venue: "ISSCC, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/A_Stacked_Embedded_DRAM_Array_for_LPDDR4_4X_using_Hybrid_Bonding_3D_Integration_with_34GB_s_1Gb_0.88pJ_b_Logic-to-Memory_Interface.pdf"
---

## TL;DR

- 用 hybrid bonding 将 eDRAM 堆叠，提供 LPDDR4 4× 的带宽。
- 34 GB/s, 1Gb 容量, 0.88 pJ/b 能效。
- Logic-to-Memory 接口设计。

## Problem

移动端需要高带宽低功耗内存，LPDDR 受限于 package-level 连接。

## Method

Hybrid bonding 将 eDRAM die 直接堆叠在 logic die 上，缩短互连距离。

## Insights

- 移动端 3D 集成的先行者。
- 0.88 pJ/b 能效对 mobile AI 非常有吸引力。
