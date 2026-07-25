---
layout: post
title: "(2023 arXiv) Ramulator 2.0: A Modern, Modular, and Extensible DRAM Simulator"
date: 2023-01-01
description: "Next-generation DRAM simulator with modular design supporting emerging memory technologies and PIM"
published: arXiv 2023
tags: paper-reading DSE DRAM simulation tool memory
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Ramulator 2.0: A Modern, Modular, and Extensible DRAM Simulator"
  authors: "Haocong Luo, Ataberk Olgun, A. Giray Yaglikci, Yahya Can Tugrul, Steve Rhyner, Meryem Banu Cavlak, Joël Lindegger, Mohammad Sadrosadati, Onur Mutlu"
  venue: "arXiv, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Ramulator2_arxiv23.pdf"
---

## TL;DR

- Ramulator 2.0：新一代模块化 DRAM simulator，支持 DDR5, HBM3, LPDDR5, PIM 等。
- 比 Ramulator 1.0 更易扩展（插件式架构）、更精确（cycle-accurate timing）。
- 集成 PIM/NDP 功能单元建模。
- Onur Mutlu 组的经典工具链。

## Problem

Memory system simulation 需要跟上快速演进的 DRAM 标准和新兴 PIM 架构。Ramulator 1.0 难以扩展。

## Method

模块化重构：Address Mapping Module + Timing Module + Controller Module + PIM Module，每个可独立替换。

## Insights

- 做 memory/PIM 研究的必备工具。
- 模块化设计是研究工具的最佳实践 — 也是你 bupt_stamp 项目应该追求的。
