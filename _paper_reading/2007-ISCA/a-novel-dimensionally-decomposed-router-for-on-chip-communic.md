---
layout: post
title: "Paper Reading: A Novel Dimensionally-Decomposed Router for On-Chip Communication in 3D Architectures"
date: 2007-01-01
description: "DimDe router decomposes 3D NoC traffic into X/Y/Z dimensions, achieving near-full-crossbar performance with dramatically reduced complexity"
published: ISCA 2007
tags: paper-reading 3DIC NoC router network-on-chip
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "A Novel Dimensionally-Decomposed Router for On-Chip Communication in 3D Architectures"
  authors: "Jongman Kim, Chrysostomos Nicopoulos, Dongkook Park, Reetuparna Das, Yuan Xie, N. Vijaykrishnan, Mazin S. Yousif, Chita R. Das"
  venue: "ISCA, 2007"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%282007%20ISCA%29%20A%20Novel%20Dimensionally-Decomposed%20Router%20for%20On-Chip%20Communication%20in%203D%20Architectures.pdf"
---

## TL;DR

- 提出 **3D Dimensionally-Decomposed (DimDe) Router**：将 3D NoC 流量按 X（East-West）、Y（North-South）、Z（inter-layer）三个维度分解处理。
- DimDe 将同一垂直列的所有 router 融合为统一的 3D crossbar 实体，支持层间单跳通信。
- 性能接近 full 3D crossbar（差 ~5%），但 **Energy-Delay Product 优于所有方案（包括 full crossbar）26%**。
- 吞吐量比其他 3D 设计平均提升 18-20%。

## Paper Info

- **Title:** {{ page.paper.title }}
- **Authors:** {{ page.paper.authors }}
- **Venue:** {{ page.paper.venue }}
- **Paper:** [PDF]({{ page.paper.pdf }})

## Problem

3D 芯片中垂直互连（~几十μm）比水平互连（~几千μm）快得多，存在固有的延迟不对称性。直接将传统 2D NoC 扩展到 3D（每层加 router）会让 router 延迟主导快速垂直链路的通信。需要一种高效的 3D router 架构来：
1. 利用快速垂直互连
2. 控制仲裁复杂度
3. 支持层间并发通信

## Method

DimDe 的核心设计：

1. **维度分解**：受 2D RoCo（Row-Column decoupled）router 启发，将流量分为 E-W（Row Module）、N-S（Column Module）和 inter-layer（Vertical Module）三个独立模块。
2. **Partially-connected 3D crossbar**：
   - 同一垂直列的所有层共享一个 unified crossbar
   - 支持 2 个垂直互连（在 bus 和 full crossbar 之间取平衡）
   - Segmented vertical links 支持层间并发传输
3. **Hierarchical arbitration**：
   - 第一级：每层内部选出垂直通信请求
   - 第二级：跨层协调同时传输
4. **Vertical Module 双重角色**：既"粘合"所有层，又将 inter-layer 流量与 intra-layer 流量无缝融合。

## Experiments

**评估平台**：
- Stand-alone cycle-accurate 3D NoC simulator（synthetic workloads）
- Hybrid 3D NoC/cache simulator（real workloads, 8-CPU CMP with shared NUCA L2）

**结果**：
| Metric | DimDe vs. Symmetric/Bus-Hybrid | DimDe vs. Full 3D Crossbar |
|--------|-------------------------------|---------------------------|
| Throughput | +18% avg | -3% |
| Latency (real workloads) | +27% improvement | -4% |
| EDP | **+26% better** | **+26% better** |

- 3D NoC-Bus Hybrid 在高流量时表现最差（bus 饱和）
- DimDe 在 90nm 综合实现中面积和功耗远低于 full crossbar

## Insights

- **设计哲学**："不对称问题需要不对称解决方案"。DimDe 成功的关键在于识别到 3D 芯片中垂直 vs 水平方向的固有不对称性，并用针对性的架构来利用它。
- **Partial connectivity 的智慧**：2个垂直连接已经足够接近 full crossbar 性能，但复杂度降低数个数量级。
- **对现代 3D NoC 的影响**：DimDe 的"维度分解+分层仲裁"思想影响了后续所有 3D NoC 设计。
- **EDP 作为 metric 的重要性**：单看性能，full crossbar 略好；但考虑能效（EDP），DimDe 是明确赢家。

## Limitations

- 只评估了 uniform random 和 NUCA 两类 traffic pattern
- 假设 Face-to-Back bonding（pitch 4×4μm），未考虑更密集的 hybrid bonding
- 层数固定（4层），未探索更多层时的可扩展性
- 未建模 thermal-aware routing

## Follow-up

- 3D mesh/torus 拓扑的 adaptive routing 研究
- Hybrid bonding 时代的 3D NoC 设计（如 2026 ISSCC M3DProc）
- Thermally-aware 3D NoC routing
