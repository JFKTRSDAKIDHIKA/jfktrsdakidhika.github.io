---
layout: post
title: "(2022 ETH Lecture) Decoupled Access-Execute (DAE) Architecture"
date: 2022-01-01
description: "Onur Mutlu's lecture on Decoupled Access-Execute architecture - separating memory access from computation for latency tolerance"
published: ETH Lecture 2022
tags: paper-reading foundations DAE architecture memory-latency
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Digital Design & Computer Architecture - Lecture 19c: Decoupled Access-Execute"
  authors: "Onur Mutlu"
  venue: "ETH Zürich Lecture, 2022"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/onur-digitaldesign_comparch-2022-lecture19c-dae-beforelecture.pdf"
---

## TL;DR

- **Decoupled Access-Execute (DAE)** 架构将程序执行拆分为 access stream（负责内存请求）和 execute stream（负责计算）。
- Access stream 提前发出 memory request，execute stream 等数据就绪后计算 → 容忍 memory latency。
- 经典架构思想，影响了现代 PIM、prefetcher、dataflow accelerator 的设计。

## Insights

- DAE 思想对 PIM 尤其重要：PIM 本质上是把 "access" 极致优化（data locality），让 "execute" 在数据旁边完成。
- 现代 DNN accelerator 的 double-buffering、prefetch pipeline 都是 DAE 思想的体现。
- Onur Mutlu 是 PIM/NDP 领域的核心人物，他的 lecture 系列是入门必读。
