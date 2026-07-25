---
layout: post
title: "(2022 ISSCC) 3D V-Cache: The Implementation of a Hybrid-Bonded 64MB Stacked Cache for a 7nm x86-64 CPU"
date: 2022-01-01
description: "AMD 3D V-Cache implementation using hybrid bonding for 64MB stacked L3 cache"
published: ISSCC 2022
tags: paper-reading 3DIC hybrid-bonding cache AMD
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "3D V-Cache: The Implementation of a Hybrid-Bonded 64MB Stacked Cache for a 7nm x86-64 CPU"
  authors: "AMD"
  venue: "ISSCC, 2022"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/3D_V-Cache_the_Implementation_of_a_Hybrid-Bonded_64MB_Stacked_Cache_for_a_7nm_x86-64_CPU.pdf"
---

## TL;DR

- AMD 3D V-Cache：用 hybrid bonding 将 64MB SRAM cache 堆叠在 7nm CPU die 上。
- 首个量产的 hybrid bonding 3D cache 产品 (Ryzen 5800X3D)。
- L3 cache 容量翻三倍（32MB → 96MB），gaming 性能提升 ~15%。

## Problem

CPU L3 cache 面积受限于 die size。如何在不增大 die 的情况下大幅增加 cache？

## Method

1. Hybrid bonding (Cu-Cu direct bond, ~9μm pitch)
2. SRAM cache die 堆叠在 CCD 上方
3. TSV 穿透连接，带宽 2TB/s+

## Insights

- 3D V-Cache 证明了 hybrid bonding 的量产可行性。
- 对比 HBM 的 micro-bump (~40μm)，hybrid bonding 密度高 20×。
- 开启了 3D cache 的产品化时代。
