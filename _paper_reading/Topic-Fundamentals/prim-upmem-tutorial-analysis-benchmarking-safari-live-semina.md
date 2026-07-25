---
layout: post
title: "(2021 SAFARI Seminar) Understanding a Modern Processing-in-Memory Architecture: Benchmarking and Experimental Characterization"
date: 2021-01-01
description: "Experimental benchmarking and characterization of UPMEM PIM architecture"
published: SAFARI Seminar 2021
tags: paper-reading PIM UPMEM benchmark characterization
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Understanding a Modern Processing-in-Memory Architecture: Benchmarking and Experimental Characterization"
  authors: "Juan Gómez Luna et al."
  venue: "SAFARI Seminar, 2021"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/PrIM-UPMEM-Tutorial-Analysis-Benchmarking-SAFARI-Live-Seminar-2021-07-12-talk.pdf"
---

## TL;DR

- 对 UPMEM PIM-DIMM 的实际测试和 benchmark 分析。
- UPMEM 是第一个商用 PIM 产品（基于 DRAM）。
- 实测结果：哪些操作 PIM 快，哪些反而慢。

## Problem

UPMEM PIM 的实际性能如何？理论优势能否兑现？

## Method

PrIM benchmark suite: 各种 primitive (scan, reduce, sort, GEMV) 的实测。

## Insights

- UPMEM PIM 在 data-parallel 场景快 10-100×，但 sequential 场景不行。
- 实测数据对 PIM 研究者很有价值 — 纠正了一些过于乐观的预期。
