---
layout: post
title: "(2024 ISCA) Data Oblivious CPU Microarchitectural Side-channel Leakage-Resilient Processing"
date: 2024-01-01
description: "Data-oblivious CPU design to resist microarchitectural side-channel attacks"
published: ISCA 2024
tags: paper-reading CPU security side-channel data-oblivious
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Data Oblivious CPU Microarchitectural Side-channel Leakage-Resilient Processing"
  authors: "Unknown"
  venue: "ISCA, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Data_Oblivious_CPU_Microarchitectural_Side-channel_Leakage-Resilient_Processor.pdf"
---

## TL;DR

- 提出 data-oblivious CPU 微架构：所有执行行为与数据值无关。
- 抵御 timing, cache, power side-channel attacks。
- 代价：性能下降，但安全性得到数学保证。

## Problem

现代 CPU 的微架构优化（分支预测、cache）泄漏秘密信息。如何从根本上消除？

## Method

Data-oblivious 执行：fixed timing, oblivious RAM access, constant-time ALU。

## Insights

- Security vs Performance 的终极 tradeoff。
- 对密码学应用有实际意义（constant-time crypto）。
