---
layout: post
title: "(2024 DAC) DNNFuser: Transformer as a Generalized Mapper for Fusion in DNN Accelerators"
date: 2024-01-01
description: "Uses Transformer model as a learned mapper for operator fusion decisions in DNN accelerators"
published: DAC 2024
tags: paper-reading DSE dataflow fusion mapping transformer
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "DNNFuser: Transformer as a Generalized Mapper for Fusion in DNN Accelerators"
  authors: "Unknown"
  venue: "DAC, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/DNNFuser_Transformer%20as%20a%20Generalized%20Mapper%20for%20Fusion%20in%20DNNAccelerators.pdf"
---

## TL;DR

- 用 Transformer 模型作为通用的 fusion mapper：输入 DNN graph，输出 fusion decisions + mappings。
- 相比 rule-based 和 heuristic fusion，learned approach 能发现更优的融合模式。
- 在多种加速器配置上泛化。

## Problem

Fusion 决策的空间随 DNN 层数指数增长，heuristic 方法只能找到 local optima。

## Method

1. 将 DNN computation graph 编码为 sequence
2. Transformer encoder 学习 graph 的 structural features
3. Decoder 生成 fusion group assignment
4. 用 RL 或 supervised learning 训练

## Insights

- "AI for AI hardware" 趋势：用 ML 来优化 ML 硬件的设计和编译。
- Transformer 的优势在于处理变长、结构化的输入（DNN graphs 天然是 graphs）。
