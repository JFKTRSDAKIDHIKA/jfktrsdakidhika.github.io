---
layout: post
title: "(2025 DAC) MEEK: Re-thinking Heterogeneous Parallel Error Detection Architecture"
date: 2025-01-01
description: "Heterogeneous parallel error detection architecture rethinking"
published: DAC 2025
tags: paper-reading CPU error-detection heterogeneous reliability
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "MEEK: Re-thinking Heterogeneous Parallel Error Detection Architecture"
  authors: "Unknown"
  venue: "DAC, 2025"
  url: ""
  code: ""
  pdf: ""
---

## TL;DR

- MEEK：重新思考异构并行错误检测架构。
- 传统 DMR (Dual Modular Redundancy) 代价太高。
- 用异构检测器（simplified checker）降低面积/功耗。

## Problem

安全关键应用（汽车、航天）需要 error detection，但 DMR 翻倍面积。

## Method

异构 checker：主核 full OoO + checker 核 simplified in-order，比较结果。

## Insights

- 可靠性是高端 CPU 设计的重要维度（不只是性能）。
- 异构检测比同构 DMR 更实际。
