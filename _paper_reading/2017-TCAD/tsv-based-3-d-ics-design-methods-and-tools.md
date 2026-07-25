---
layout: post
title: "(2017 TCAD) TSV-Based 3-D ICs: Design Methods and Tools"
date: 2017-01-01
description: "Comprehensive survey of EDA challenges for TSV-based 3D ICs covering partitioning, placement, thermal, PDN, signal integrity, and reliability"
published: TCAD 2017
tags: paper-reading 3DIC TSV EDA survey physical-design
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "TSV-Based 3-D ICs: Design Methods and Tools"
  authors: "Tiantao Lu, Caleb Serafy, Zhiyuan Yang, Sandeep Kumar Samal, Sung Kyu Lim, Ankur Srivastava"
  venue: "TCAD, 2017"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%282017%20TCAD%29%20TSV-Based_3-D_ICs_Design_Methods_and_Tools.pdf"
---

## TL;DR

- 全面综述了 TSV-based 3D IC 的 **EDA 设计方法与工具**挑战，涵盖制造、物理设计、热管理、电源完整性、信号完整性、可靠性和架构探索。
- 梳理了两大物理设计路线：（1）复用 2D 工具 + 分区算法；（2）原生 3D placer/router。
- 深入讨论了 8 大设计挑战：3D partitioning, placement, CDN, thermal, PDN, signal integrity, TSV reliability, chip/package interaction。
- 也涵盖了 Monolithic 3D (M3D) IC 作为 TSV-based 3D 的替代方案。

## Paper Info

- **Title:** {{ page.paper.title }}
- **Authors:** {{ page.paper.authors }}
- **Venue:** {{ page.paper.venue }}
- **Paper:** [PDF]({{ page.paper.pdf }})

## Problem

3D IC 虽然能解决互连功耗/延迟瓶颈并提供异构集成，但带来全新的设计挑战：
- 功耗密度随层数线性增加，传统风冷不足
- 电源逐层传递，存在 "planar supply vs. volumetric demand" 的根本矛盾
- TSV 大寄生电容导致信号串扰
- TSV 电迁移、热机械应力等可靠性新失效模式
- 设计空间爆炸式扩大，需要新的 DSE 方法

## Method (Survey Structure)

### 1. 3D Fabrication (Section II)
- Wafer stacking: W2W vs. D2W
- Face-to-face vs. face-to-back bonding
- TSV manufacturing: laser drilling / plasma etching

### 2. Physical Design (Section III)
- **Partitioning**: Min-cut 不等于 min vias；需考虑 z-direction 分布
- **Placement**: TSV 位置显著影响面积、线长、应力、热分布
- **CDN**: clock TSV 的数量和位置约束；需考虑 TSV RC 特性
- 两大路线：Pseudo-3D (复用2D工具) vs. True 3D (原生工具)

### 3. Thermal (Section IV)
- 3D stacking 使功耗密度线性增加
- "Dark silicon" 问题在 3D 中加剧
- 需要主动冷却（microfluidic channels 等）

### 4. PDN (Section V)
- 层间逐层传递功耗 → 上层电压降更大
- PDN impedance 约束随 VDD 降低而更严格
- 需要 co-optimization of power and thermal

### 5. Architecture (Section VI)
- Memory-on-logic: 高带宽低延迟
- 3D memories for memory wall problem
- DSE for 3D multi-core architectures

## Key Findings

- Native 3D physical design tools（如 3D-CRAFT, Shrunk-2D flow）比简单复用 2D 工具能获得更好的 PPA
- Thermal-aware placement 对 3D IC 至关重要（blind placement 可导致 >20°C hotspot）
- TSV reliability 需要多物理场耦合建模（thermal + mechanical + electrical）
- M3D (Monolithic 3D) 用 nanoscale MIV 替代 μm-scale TSV，密度更高但制造更贵

## Insights

- **3D IC EDA 的核心困境**：设计维度从 2D 扩展到 3D，工具链需要几乎重写，但商业工具演进缓慢。这导致学界和业界采用 "pseudo-3D" 过渡方案。
- **Co-design 的必要性**：thermal、power、signal integrity、reliability 在 3D 中高度耦合，不能独立优化。
- **对现在的意义**：2017 年的 survey 中 M3D 还被视为"far future"，但到 2025 年 hybrid bonding 已商业化（AMD 3D V-Cache, ISSCC 2026 M3DProc），TSV-based 3D IC 已进入主流。
- **缺失的系统级视角**：Survey 侧重 EDA 工具层面，缺少对 architecture-EDA co-optimization 的深入讨论。

## Limitations

- 作为 2017 年的 survey，缺少 hybrid bonding 技术（2020+ 才成熟）
- 未充分讨论 chiplet + 3D 的组合范式
- 对 AI/ML workload-driven 的 3D 设计没有涉及
- 缺少实际 tapeout 的案例研究

## Follow-up

- (2025 ISPD) Physical Design for Advanced 3D ICs — 更新到 hybrid bonding 和 M3D 时代
- Cadence/Synopsys 的 3D IC 商业工具近期进展
- (2025 ICCAD) AccelStack — 3D stacked LLM accelerator 的 cost-driven 分析
