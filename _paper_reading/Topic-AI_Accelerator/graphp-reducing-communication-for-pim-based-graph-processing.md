---
layout: post
title: "(2018 HPCA) GraphP: Reducing Communication for PIM-Based Graph Processing with Efficient Data Partition"
date: 2018-01-01
description: "Efficient graph partitioning for PIM-based graph processing to reduce inter-vault communication"
published: HPCA 2018
tags: paper-reading PIM graph-processing partitioning
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "GraphP: Reducing Communication for PIM-Based Graph Processing with Efficient Data Partition"
  authors: "Mingxing Zhang et al."
  venue: "HPCA, 2018"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/GraphP_Reducing_Communication_for_PIM-Based_Graph_Processing_with_Efficient_Data_Partition.pdf"
---

## TL;DR

- 针对 HMC (Hybrid Memory Cube) 上的 PIM 图处理，提出高效数据划分策略。
- 关键问题：图的边跨越不同 memory vault → 产生大量 inter-vault 通信。
- GraphP 通过 replicate-and-reduce 策略减少通信量。

## Problem

PIM 图计算中，图的分割导致大量 remote memory access（跨 vault 通信），抵消了 PIM 的带宽优势。

## Method

1. 将图 partition 到不同 vault，优化 edge-cut
2. 对热点 vertex 做 replication（空间换通信）
3. Two-phase execution: local compute → reduce across replicas

## Insights

- PIM 不是万能的 — data placement 和 partitioning 对性能至关重要。
- 图计算是 PIM 的理想 workload（irregular access, high bandwidth demand）。
- 对 NDP 架构也有参考价值（HBM-PIM 上做类似事情）。
