---
layout: post
title: "(2025 IEDM) Intel PowerVia Technology - Backside Power Delivery for High Density and High-Performance Computing"
date: 2025-01-01
description: "Intel's backside power delivery network (BSPDN) technology enabling decoupled signal and power routing for improved PPA"
published: IEDM 2023
tags: paper-reading technology power-delivery BSPDN Intel
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Intel PowerVia Technology: Backside Power Delivery for High Density and High-Performance Computing"
  authors: "W. Hafez et al. (Intel)"
  venue: "IEDM, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Intel_PowerVia_Technology_Backside_Power_Delivery_for_High_Density_and_High-Performance_Computing.pdf"
---

## TL;DR

- Intel PowerVia 是业界首个 **backside power delivery network (BSPDN)** 商用技术，将电源网络从芯片正面移到背面。
- 通过 nano-TSV 将电源从芯片背面直接连接到晶体管，正面只走信号线。
- 实现信号与电源完全解耦，正面布线密度提升，IR drop 降低，性能和面积同时优化。
- 已在 Intel 20A 及后续节点量产验证。

## Problem

传统 FEOL+BEOL 结构中，电源线和信号线共享正面金属层，导致：(1) 布线拥塞；(2) IR drop 随面积缩减加剧；(3) 信号线需绕开电源轨。BSPDN 将电源移到背面，从根本上解决这一矛盾。

## Method

1. 在晶圆正面完成器件和信号互连制造
2. 翻转晶圆，从背面刻蚀 nano-TSV 直达晶体管 source/drain
3. 在背面构建完整的电源分配网络（粗金属）
4. 正面信号层更自由地布线

## Insights

- BSPDN 是 More-than-Moore 时代的关键使能技术，直接影响标准单元设计和 PnR 流程。
- 与 GAA (RibbonFET) 结合，构成 Intel 18A 的两大支柱技术。
- 对 3D IC 尤其有意义：上层 die 可通过背面接收电源，简化 3D PDN 设计。

## Limitations

- 额外的背面工艺步骤增加制造成本和良率风险
- Nano-TSV 的热阻可能影响散热路径
- 需要全新的 EDA 流程支持 BSPDN 设计
