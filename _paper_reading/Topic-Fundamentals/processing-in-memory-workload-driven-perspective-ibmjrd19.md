---
layout: post
title: "(2019 IBM JRD) Processing-in-Memory: A Workload-Driven Perspective"
date: 2019-01-01
description: "IBM's workload-driven analysis of Processing-in-Memory opportunities"
published: IBM JRD 2019
tags: paper-reading PIM workload analysis IBM
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Processing-in-Memory: A Workload-Driven Perspective"
  authors: "IBM Research"
  venue: "IBM JRD, 2019"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/processing-in-memory_workload-driven-perspective_IBMjrd19.pdf"
---

## TL;DR

- IBM 从 workload 角度分析 PIM 的机会。
- 不是所有 workload 都适合 PIM — 只有 memory-bound + high parallelism 的才值得。
- 提供了系统的 workload 分类框架。

## Problem

PIM 的实际价值有多大？哪些 workload 真正受益？

## Method

分析多种 workload 的 compute/memory intensity → 识别 PIM-friendly 子集。

## Insights

- 务实的视角：PIM 不是银弹。
- 对研究者选题有参考价值：选对 workload 比设计好 PIM 更重要。
