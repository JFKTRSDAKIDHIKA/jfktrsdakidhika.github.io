---
layout: post
title: "(1970 IEEE Trans. Computers) Logic-in-Memory Computer"
date: 1970-01-01
description: "Early proposal for a computer with logic integrated directly in memory"
published: IEEE Trans. Computers 1970
tags: paper-reading PIM classic logic-in-memory
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Logic-in-Memory Computer"
  authors: "Harold S. Stone"
  venue: "IEEE Trans. Computers, 1970"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/stone_logic_in_memory_1970.pdf"
---

## TL;DR

- 提出将处理逻辑嵌入存储器的计算机架构。
- 分析了 memory bandwidth 是性能瓶颈的本质原因。
- 提出 content-addressable 的并行处理方案。

## Problem

处理器速度增长快于内存带宽（memory wall 的早期观察），能否消除数据搬移？

## Method

在每个 memory word 旁放置简单 ALU，实现 SIMD 式的全局并行操作。

## Insights

- 1970 年对 memory wall 的洞察和今天完全一致。
- 这篇和 1966 cellular arrays 是 PIM 的两个思想源头。
