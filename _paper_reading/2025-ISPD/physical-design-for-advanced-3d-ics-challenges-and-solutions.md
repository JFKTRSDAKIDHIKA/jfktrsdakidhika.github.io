---
layout: post
title: "(2025 ISPD) Physical Design for Advanced 3D ICs: Challenges and Solutions"
date: 2025-01-01
description: "Survey of physical design challenges for hybrid-bonding and monolithic 3D ICs, covering partitioning, PDN, placement, clock delivery, and routing"
published: ISPD 2025
tags: paper-reading 3DIC physical-design EDA hybrid-bonding monolithic
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Physical Design for Advanced 3D ICs: Challenges and Solutions"
  authors: "Yuxuan Zhao, Lancheng Zou, Bei Yu"
  venue: "ISPD, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%282025%20ISPD%29%20Physical_Design_for_Advanced_3D_ICs_Challenges_and_Solutions.pdf"
---

## TL;DR

- 聚焦 **advanced 3D ICs**（hybrid bonding 和 monolithic 3D），而非传统 TSV-based 3D，梳理物理设计五大阶段的挑战。
- 三种 3D IC 类型对比：TSV (~10μm pitch), Hybrid Bonding (~1μm pitch), Monolithic MIV (~nm pitch)。
- 关键发现：commercial EDA 工具（Innovus, ICC）缺乏原生 3D P&R 支持；pseudo-3D flow 无法充分利用 fine-grain 3D interconnect。
- M3D 的 PDN 问题尤为严峻：逐层功率传递路径更长，power MIV 受 cell blocking 影响导致 IR drop 远高于 2D。

## Paper Info

- **Title:** {{ page.paper.title }}
- **Authors:** {{ page.paper.authors }}
- **Venue:** {{ page.paper.venue }}
- **Paper:** [PDF]({{ page.paper.pdf }})

## Problem

随着 More-Moore scaling 放缓，3D stacking 成为提升 PPA 的关键路径。但 EDA 工具链严重滞后：
1. 商业工具无原生 3D P&R 支持
2. Pseudo-3D flow（缩放 → 2D P&R → partition → 恢复）无法利用 fine-grain 3D 互连
3. Hybrid bonding 和 M3D 的设计约束与 TSV-based 有本质区别

## Method (Survey Structure)

### Five Design Stages:

**1. Partitioning**
- 挑战：min-cut ≠ min 3D connections；需考虑 z-direction 分布
- 现有方案：hMETIS, TritonPart 等 2D partitioner 适配
- 未解决：timing-aware 3D-native partitioning

**2. Power Delivery**
- TSV-based: power TSV 面积大但路径短
- M3D: power MIV 小但路径长（bottom metal → top tier）
- 实验显示 M3D dynamic IR drop 比 2D 高 7.3%
- 需要 decap insertion + PDN co-optimization

**3. Placement**
- True 3D placers: 考虑 z-direction 最小化 wirelength
- 关键方案：Shrunk-2D flow, 3D-CRAFT, analytical 3D placement
- ML-based placement 开始出现

**4. Clock Delivery**
- 跨层 clock skew 是关键挑战
- 方案：post-silicon de-skewing, forwarded clock (如 ISSCC 2026)

**5. Routing**
- 3D 互连在 routing 阶段的处理
- Signal MIV/HBT insertion

## Insights

- **Hybrid bonding 是当前最实际的 advanced 3D 方案**：1μm pitch 的 HBT 比 TSV 密度高 100×，但不如 M3D 的 nanoscale MIV。AMD Zen4, Meta AR SoC 已商用。
- **M3D 的根本困难在 PDN**：与 TSV-based 3D（power TSV 可直接穿层）不同，M3D 的 power 必须通过 thin metal layers 逐层传递，IR drop 问题严重。
- **Native 3D EDA 工具仍是 open problem**：尽管学界有很多 3D placer/router 原型，但距商用还有很大差距。
- **设计流程的根本矛盾**：利用 mature 2D 工具（pseudo-3D）vs. 开发 native 3D 工具。前者可用但次优，后者最优但不成熟。

## Limitations

- 主要是 survey，没有新的工具或算法贡献
- 对 thermal 讨论较少（2017 TCAD survey 更详细）
- 缺少 real chip tapeout 的 case study
- 对 AI workload-specific 3D design 缺少讨论

## Follow-up

- Cadence/Synopsys 3D IC 工具路线图
- ML-assisted 3D physical design
- Power-thermal co-optimization for M3D
