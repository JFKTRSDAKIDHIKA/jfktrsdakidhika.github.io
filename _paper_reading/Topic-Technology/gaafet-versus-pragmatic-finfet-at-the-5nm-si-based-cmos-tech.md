---
layout: post
title: "(2017 IEEE JEDS) GAAFET Versus Pragmatic FinFET at the 5nm Si-Based CMOS Technology Node"
date: 2017-01-01
description: "TCAD comparison of GAA nanosheet vs scaled FinFET at 5nm, showing GAA advantages in electrostatics but FinFET remains competitive"
published: IEEE JEDS 2017
tags: paper-reading technology GAA FinFET TCAD device
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "GAAFET Versus Pragmatic FinFET at the 5nm Si-Based CMOS Technology Node"
  authors: "N. Loubet et al."
  venue: "IEEE JEDS, 2017"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/GAAFET_Versus_Pragmatic_FinFET_at_the_5nm_Si-Based_CMOS_Technology_Node.pdf"
---

## TL;DR

- 通过 TCAD 仿真对比 5nm 节点下 GAA nanosheet FET 和 scaled FinFET 的性能。
- GAA 在静电控制（SS, DIBL）上有明显优势，但 FinFET 通过 fin pitch 缩减仍有竞争力。
- 结论：在 5nm 节点 FinFET 仍可工作，但 3nm 及以下 GAA 成为必需。

## Problem

CMOS 持续缩放需要更好的静电控制。FinFET 从 22nm 用到 5nm，但短沟道效应加剧。GAA（Gate-All-Around）提供理论最优的栅控制力，但制造更复杂。需要量化评估两者在 5nm 的 PPA 权衡。

## Method

- TCAD 建模两种器件：横向 nanosheet GAA vs 缩放 FinFET
- 固定相同的 footprint 和电源电压
- 比较 Ion/Ioff, SS, DIBL, capacitance, delay

## Insights

- 此文 2017 年发表时 GAA 还是"未来技术"；到 2022 年 Samsung 3nm GAA 量产，验证了文中预测。
- Intel 选择在 20A/18A 同时引入 RibbonFET (GAA) + PowerVia (BSPDN)，是一步到位的策略。
- 对体系结构研究者的启示：GAA 带来更高 drive current density → 可以做更紧凑的标准单元 → 影响 accelerator 面积预算。

## Limitations

- 仅 TCAD 仿真，无 silicon 验证
- 未考虑制造良率差异
- 2017 年的预测参数与实际量产节点有偏差
