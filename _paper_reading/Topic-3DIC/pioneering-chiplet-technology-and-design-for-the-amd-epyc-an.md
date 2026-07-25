---
layout: post
title: "(2021 ISCA) Pioneering Chiplet Technology and Design for the AMD EPYC and Ryzen Processor Families"
date: 2021-01-01
description: "AMD's pioneering chiplet approach for EPYC and Ryzen processors (ISCA Industry Track)"
published: ISCA 2021
tags: paper-reading 3DIC chiplet AMD EPYC industry
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Pioneering Chiplet Technology and Design for the AMD EPYC and Ryzen Processor Families"
  authors: "AMD"
  venue: "ISCA, 2021"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Pioneering_Chiplet_Technology_and_Design_for_the_AMD_EPYC_and_Ryzen_Processor_Families__Industrial_Product.pdf"
---

## TL;DR

- AMD 分享 EPYC/Ryzen 的 chiplet 设计经验。
- CCD (Core Complex Die) + IOD (I/O Die) 分离。
- 经济驱动：小 die 良率高 → 成本低 → 性能/$ 优势。

## Problem

大 die 良率低、成本高。AMD 如何用 chiplet 实现 cost-effective 的高性能 CPU？

## Method

1. 将 CPU 拆分为多个小 CCD + 一个大 IOD
2. Infinity Fabric 互连
3. 跨代复用 CCD（换新工艺只需重新设计小 die）

## Insights

- AMD chiplet 是产业界最成功的案例。
- 证明了 chiplet 的经济可行性。
- "Design once, replicate many" 理念。
