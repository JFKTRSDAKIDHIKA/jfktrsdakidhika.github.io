---
layout: post
title: "(2025 ICCAD) AccelStack - A Cost-Driven Analysis of 3D-Stacked LLM Accelerators"
date: 2025-01-01
description: "Cost-driven analysis framework for 3D-stacked LLM accelerators covering performance model and manufacturing cost for DoD/DoW/WoW hybrid bonding"
published: ICCAD 2025
tags: paper-reading 3DIC LLM accelerator cost-analysis hybrid-bonding chiplet
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "AccelStack: A Cost-Driven Analysis of 3D-Stacked LLM Accelerators"
  authors: "Chen Bai, Xin Fan, Zhenhua Zhu, Wei Zhang, Yuan Xie"
  venue: "ICCAD, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/AccelStack_A_Cost-Driven_Analysis_of_3D-Stacked_LLM_Accelerators.pdf"
---

## TL;DR

- 提出 **AccelStack** 框架：针对 3D-stacked LLM accelerator 的性能-成本联合分析。
- 架构方案：memory-on-logic，多层 DRAM die 通过 hybrid bonding 堆叠在 computing die 上方。
- 性能模型 + 成本模型（支持 DoD/DoW/WoW 三种 hybrid bonding 制造流程）。
- 结果：3D-stacked accelerator 比 A100(FP16) 快 **7.17×**，比 H100(FP8) 快 **2.09×**；chiplet 方案降低 RE cost **38.09%**。

## Paper Info

- **Title:** {{ page.paper.title }}
- **Authors:** {{ page.paper.authors }}
- **Venue:** {{ page.paper.venue }}
- **Paper:** [PDF]({{ page.paper.pdf }})

## Problem

LLM inference 有巨大的计算和 memory bandwidth 需求（prefill compute-bound, decode memory-bound）。现有方案（HBM + 2.5D packaging）受限于：
1. Microbump pitch 大（几十 μm）→ 带宽天花板
2. 2.5D interposer 距离较长 → 延迟和能耗

Hybrid bonding（pitch 5-30× 小于 microbump）开启了新的 3D-stacked accelerator 机会，但缺乏系统的 performance-cost tradeoff 分析。

## Method

### Architecture Landscape
- **Monolithic design**: 多层 DRAM + computing die + package substrate
- **3D chiplet design**: 拆分为 4 个 3D chiplets（无 interposer）
- **3.5D chiplet design**: 3D chiplets on silicon interposer (CoWoS/EMIB)
- Memory-on-logic（而非 logic-on-memory）避免 TSV 为 logic 供电的面积开销

### Performance Model
- Software level: LLM parallelization strategies (TP/PP/DP), scheduling, mapping
- Hardware level:
  - MatMul model (roofline-based)
  - 3D DRAM bandwidth model（hybrid bonding pitch → achievable BW）
  - NoC model for chiplet interconnection
  - Scale-up system model

### Cost Model
- **RE cost**: wafer fabrication + packaging + testing
- **NRE cost**: design, verification, mask (amortized over volume)
- 支持三种 hybrid bonding 流程：
  - DoD (Die-on-Die): 灵活但尚未量产
  - DoW (Die-on-Wafer): 中间方案
  - WoW (Wafer-on-Wafer): 高产量，适合相同尺寸 die

## Experiments

| 配置 | Speedup vs A100(FP16) | Speedup vs H100(FP8) |
|------|----------------------|---------------------|
| 3D monolithic | **7.17×** | **2.09×** |
| 3D chiplet | 略低 | 略低 |
| Cost reduction (chiplet vs monolithic) | - | **-38.09% RE cost** |

- 测试 LLM：GPT-3, LLaMA 等多种规模
- Hybrid bonding 带宽优势在 decode stage（memory-bound）最显著
- Chiplet 方案在良率和成本上有显著优势（小 die 良率高）

## Insights

- **3D 对 LLM 的核心价值是 memory bandwidth**：decode stage 是 memory-bound，hybrid bonding 提供比 HBM 更高带宽是杀手级优势。
- **Cost 视角的重要性**：纯看性能 3D monolithic 最好，但考虑 yield 和 cost，chiplet 方案更实际（die size → yield 的非线性关系）。
- **3.5D = 3D + 2.5D 的组合**：对于超大规模系统（需要多个 3D stack 互连），3.5D chiplet 是最实际的方案。
- **DoD/DoW/WoW 的选择取决于规模**：小批量用 DoD（灵活），大批量用 WoW（throughput 高）。

## Limitations

- Hybrid bonding DoD 尚未量产（文中注明）
- 性能模型基于 analytical roofline，不是 cycle-accurate simulation
- 未考虑 thermal throttling 对实际性能的影响
- 缺少与 real silicon (H100/B200) 的 apples-to-apples 比较
- NoC model 较简化

## Follow-up

- 实际的 3D-stacked LLM accelerator tapeout
- Thermal-aware scheduling for 3D LLM inference
- 3D + chiplet 的 EDA 工具链
- Cost model 扩展到考虑 advanced packaging yield learning curve
