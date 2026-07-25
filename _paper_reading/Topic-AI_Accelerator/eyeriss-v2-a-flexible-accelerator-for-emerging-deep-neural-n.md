---
layout: post
title: "(2019 JSSC) Eyeriss v2: A Flexible Accelerator for Emerging Deep Neural Networks on Mobile Devices"
date: 2019-01-01
description: "Flexible DNN accelerator supporting diverse neural network topologies for mobile deployment"
published: JSSC 2019
tags: paper-reading accelerator DNN mobile dataflow
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Eyeriss v2: A Flexible Accelerator for Emerging Deep Neural Networks on Mobile Devices"
  authors: "Yu-Hsin Chen, Tien-Ju Yang, Joel Emer, Vivienne Sze"
  venue: "JSSC, 2019"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Eyeriss_v2_A_Flexible_Accelerator_for_Emerging_Deep_Neural_Networks_on_Mobile_Devices.pdf"
---

## TL;DR

- Eyeriss v2 解决了 v1 只适合 CNN 的局限，支持各种 DNN 拓扑。
- 引入 hierarchical mesh NoC 支持灵活的 multicast 和 unicast。
- Row-stationary+ dataflow 适应不同 layer shape。
- MIT Sze 组的标志性工作。

## Problem

DNN 模型多样化（depthwise conv, MobileNet, attention），固定 dataflow 加速器无法高效处理所有 layer。

## Method

1. 灵活 PE array 支持多种 dataflow mapping
2. Hierarchical mesh: Global (cluster间) + Local (PE间) 两级互连
3. Sparse processing: skip zero activations
4. 支持 compact models (MobileNet-v2, ShuffleNet)

## Insights

- Eyeriss 系列定义了 "DNN accelerator" 的研究范式。
- "Flexibility vs. Efficiency" 是核心 tradeoff — 越灵活、单位面积效率越低。
- Hierarchical interconnect 是解决 scalability 的关键。
