---
layout: post
title: "(2019 IEEE JSSC) Active Interposer Technology for Chiplet-Based Advanced 3D System Architectures"
date: 2019-01-01
description: "Active silicon interposer technology enabling advanced chiplet-based 3D systems"
published: IEEE JSSC 2019
tags: paper-reading 3DIC chiplet interposer active
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Active Interposer Technology for Chiplet-Based Advanced 3D System Architectures"
  authors: "Unknown"
  venue: "IEEE JSSC, 2019"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Active_Interposer_Technology_for_Chiplet-Based_Advanced_3D_System_Architectures.pdf"
---

## TL;DR

- Active interposer：不只是被动硅桥 (passive interposer)，而是有逻辑功能的中间层。
- 可以在 interposer 上放 cache、router、PHY 等。
- 比 passive interposer 更灵活但成本更高。

## Problem

Passive interposer 只做布线，浪费了硅面积。能否利用 interposer 做有用的计算/缓存？

## Method

在 interposer die 上集成 cache、network router、power management 等逻辑。

## Insights

- Active interposer 是 chiplet 架构的高端选项。
- 成本问题制约了大规模采用（interposer 本身成为昂贵的 die）。
