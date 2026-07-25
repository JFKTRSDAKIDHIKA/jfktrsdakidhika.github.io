---
layout: post
title: "(2026 ISSCC) A Hybrid-Bonded 12.1TOPS/mm² 56-Core DNN Processor with 2.5Tb/s/mm² 3D Network on Chip"
date: 2026-01-01
description: "Intel's manycore 3D DNN processor using hybrid bonding: 56 RISC-V cores + 56 DNN accelerators with 3D mesh NoC achieving 39% throughput improvement"
published: ISSCC 2026
tags: paper-reading 3DIC hybrid-bonding DNN-accelerator NoC manycore
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "A Hybrid-Bonded 12.1TOPS/mm² 56-Core DNN Processor with 2.5Tb/s/mm² 3D Network on Chip"
  authors: "Phil C. Knag, Gregory K. Chen, Shanshan Xie, Satish Yada, Wei Wu, Yu-Shiang Lin, Alexander Kashirin, Xiemei Meng, Russell Criss, Ana Sonia Leon, Carlos Tokunaga, Ram K. Krishnamurthy, James W. Tschanz"
  venue: "ISSCC, 2026"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%282026%20ISSCC%29%2010.6_A_Hybrid-Bonded_12.1Tops_mm2_5_6-Core_DNN_Processor_with_2.5Tb_s_mm2_3D_Network_on_Chip.pdf"
---

## TL;DR

- Intel 实现了 **M3DProc**：使用 hybrid bonding 将 Intel 18A top die（56个 DNN accelerator tiles）堆叠在 Intel 3 bottom die（56个 RISC-V cores）上。
- **14×4×2 mesh 3D NoC (M3DNoC)** 提供 2.5Tb/s/mm² 跨 HBI 吞吐量，比等价 2D NoC 提升 **39%** memory throughput。
- 峰值性能密度 **12.1 TOPS/mm²**，能效 **16.1 TOPS/W**（0.5V, 280MHz），MLPerf Tiny 图像分类 53ms。
- **设计可扩展性**：bottom die 作为通用 manycore base，可配对不同 application-specific top die。

## Paper Info

- **Title:** {{ page.paper.title }}
- **Authors:** {{ page.paper.authors }}
- **Venue:** {{ page.paper.venue }}
- **Paper:** [PDF]({{ page.paper.pdf }})

## Problem

AI/ML 工作负载的核心特征是大量数据搬移和高带宽通信。随着 die 面积增大，片上通信成为瓶颈。需要：
1. 核心与 memory 间的高带宽低延迟互连
2. 设计可扩展性（base die 复用）
3. 利用 3D stacking 同时提升计算密度和通信带宽

## Method

### Architecture
- **Bottom die (Intel 3)**：56 个 tile，每个含 32-bit RISC-V core + 小 cache (4-entry D$/I$)
- **Top die (Intel 18A)**：56 个 tile，每个含 16×16 INT8 systolic array DNN accelerator
- **Shared memory**：5.25MB SRAM 分布在两个 die 上，作为 partitioned global address space
- **HBI (Hybrid-Bonded Interconnect)**：9mm² bonding area

### 3D NoC (M3DNoC)
- **14×4×2 3D mesh** 拓扑
- Dimension-order routing，两个物理 channel（request/response）
- Wormhole flow control，单周期 router latency
- **Forwarded clock design**：简化跨 die timing closure（允许 clock delay 随 data 一起 scale）
- 8-entry async FIFO 实现跨 3D 接口的 full bandwidth

### DNN Accelerator
- 16×16 INT8 systolic array
- Conv with bias addition, batch normalization, activation
- 支持 4×4 output feature map patches, 16 output channels
- Memory-mapped communication + IRQ completion

### DMA Engine
- 每个 tile 含 DMA engine，支持 2kB burst transfers
- 支持 core-to-core interrupt 实现硬件线程和 barrier synchronization

## Experiments

| Metric | Value |
|--------|-------|
| Peak Performance | 33.0 TOPS (1.1V, 1.205GHz) |
| Peak Energy Efficiency | 16.1 TOPS/W (0.5V, 280MHz) |
| Performance Density | 12.1 TOPS/mm² |
| 3D NoC Throughput | 2.5 Tb/s/mm² |
| 3D vs 2D throughput | **+39%** |
| 3D DMA energy | No penalty vs 2D |
| MLPerf Tiny image classification | 53ms |

- 3D 通信受益于更高的 bisection bandwidth
- 2D traffic 在较小 transfer size 时因 NoC congestion 饱和

## Insights

- **"通用 base die + 可替换 top die" 是杀手级设计范式**：一个 RISC-V manycore base die 可以配对不同 application-specific top die，极大降低 NRE cost。
- **Forwarded clock 解决了 3D timing 最大痛点**：跨 die process variation 导致 clock skew，forwarded clock 让 clock delay 和 data delay 一起变化，用 latency 换 design simplicity。这对 throughput-oriented workload（如 DNN）是好 tradeoff。
- **3D 的本质收益是 bisection bandwidth**：39% throughput 提升不是来自"距离更短"，而是 3D 拓扑提供了更多并行通信路径。
- **异构工艺集成的实际体现**：Intel 3 (bottom) + Intel 18A (top) 是 3D IC 早期论文预言的"异构集成"的真实落地。

## Limitations

- Shared power rail（无法独立测量 top/bottom die 功耗）
- INT8 only，未支持更灵活的精度
- 56 cores 的编程模型较原始（explicit DMA + interrupt）
- 没有 coherent shared memory → 编程复杂度高
- Forwarded clock 有 latency penalty（虽对 DNN 可接受）

## Follow-up

- Scalable 3D manycore with coherent memory
- 更大规模的 hybrid-bonded AI accelerators
- 3D NoC thermal-aware dynamic routing
- Chiplet + 3D hybrid packaging
