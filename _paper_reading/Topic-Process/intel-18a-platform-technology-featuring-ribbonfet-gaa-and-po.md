---
layout: post
title: "(2025 IEDM) Intel 18A Platform Technology Featuring RibbonFET (GAA) and PowerVia"
date: 2025-01-01
description: "Intel 18A process combining GAA transistors (RibbonFET) and backside power delivery (PowerVia) for next-gen high-performance computing"
published: IEDM 2024
tags: paper-reading technology Intel-18A GAA RibbonFET PowerVia
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Intel 18A Platform Technology Featuring RibbonFET (GAA) and PowerVia for Advanced High-Performance Computing"
  authors: "K. Fischer et al. (Intel)"
  venue: "IEDM, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Intel_18A_Platform_Technology_Featuring_RibbonFET_GAA_and_PowerVia_for_Advanced_High-Performance_Computing.pdf"
---

## TL;DR

- Intel 18A 同时引入两项突破性技术：**RibbonFET**（GAA nanosheet 晶体管）+ **PowerVia**（背面电源）。
- RibbonFET 提供更好的静电控制和驱动电流密度。
- PowerVia 解耦信号/电源布线，提升正面布线效率。
- 两者结合实现了显著的 PPA 提升，是 Intel 重回工艺领先的关键节点。

## Problem

摩尔定律放缓背景下，单靠 EUV 缩减 pitch 已不够。需要同时从器件结构（FinFET→GAA）和互连架构（frontside→backside power）两个维度突破。

## Method

1. **RibbonFET**: 水平 nanosheet stack (4层)，全包围栅极，优于 FinFET 的静电控制
2. **PowerVia**: nano-TSV 从背面直连 transistor source/drain，正面只走信号
3. 两者协同：GAA 的紧凑 cell + BSPDN 的 congestion-free routing

## Insights

- Intel 18A 已用于 ISSCC 2026 M3DProc 的 top die → 直接支撑了 12.1 TOPS/mm² 的计算密度。
- 对 3D IC 的影响：PowerVia 天然适配 face-to-back 堆叠（背面已有电源基础设施）。
- "一步到位"策略的风险与回报：同时引入两项新技术增加了良率挑战，但 PPA 收益最大化。

## Limitations

- 良率数据未公开
- 成本（EUV 层数、背面工艺）显著增加
- 生态建设：需要 EDA 工具完全支持 BSPDN 设计规则
