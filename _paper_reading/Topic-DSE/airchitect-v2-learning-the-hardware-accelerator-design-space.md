---
layout: post
title: "(2024 DAC) AIRCHITECT V2: Learning the Hardware Accelerator Design Space through Unified Representations"
date: 2024-01-01
description: "Uses unified graph representations to learn across different accelerator design spaces for efficient DSE"
published: DAC 2024
tags: paper-reading DSE ML-for-architecture accelerator
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "AIRCHITECT V2: Learning the Hardware Accelerator Design Space through Unified Representations"
  authors: "Junho Lee et al."
  venue: "DAC, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/AIRCHITECT_V2_Learning_the_Hardware_Accelerator_Design_Space_through_Unified_Representations.pdf"
---

## TL;DR

- 用统一的图表示学习不同加速器设计空间的共性，实现跨架构的 DSE 迁移。
- 关键创新：将异构加速器（systolic, dataflow, PIM）统一编码为图结构。
- 学到的表示可以加速新架构的设计空间探索（减少评估次数）。

## Problem

每种新加速器架构都需要从头做 DSE，计算代价高。能否利用已有架构的 DSE 经验来加速新架构的探索？

## Method

1. 统一表示：将不同加速器架构编码为 computation graph + resource graph
2. 学习嵌入：用 GNN 学习 design point → performance 的映射
3. 迁移学习：在新架构上 fine-tune，减少评估次数

## Insights

- "Learn once, explore many" 的思路对 DSE 研究有重要意义。
- 表示学习的质量决定了迁移效果 — 好的 unified representation 是关键。
- 局限：对全新范式的架构（如 quantum），迁移效果可能有限。
