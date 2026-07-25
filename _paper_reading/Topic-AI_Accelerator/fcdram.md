---
layout: post
title: "(2024 MICRO) FCDRAM: DRAM with Built-in Flexible Compute Capability"
date: 2024-01-01
description: "DRAM with flexible built-in compute capability beyond simple bitwise operations"
published: MICRO 2024
tags: paper-reading PIM DRAM compute-capable flexible
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "FCDRAM: DRAM with Built-in Flexible Compute Capability"
  authors: "Unknown"
  venue: "MICRO, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/fcdram.pdf"
---

## TL;DR

- FCDRAM：在 DRAM 内嵌灵活计算能力（不止 bitwise，还支持加减乘）。
- 通过修改 sense amplifier 和增加少量逻辑实现 in-DRAM 算术。
- 比传统 PuD 功能更强，比 near-memory 方案带宽利用更高。

## Problem

传统 PuD 只能做 bitwise (AND/OR)，如何在 DRAM 工艺限制下实现算术运算？

## Method

修改 DRAM sense amplifier 电路 + 多次 activation (multi-row) 实现 arithmetic。

## Insights

- 从 "只能做逻辑" 到 "能做算术" 是 PuD 的重要进步。
- 代价：额外 activation 增加延迟和能耗。
