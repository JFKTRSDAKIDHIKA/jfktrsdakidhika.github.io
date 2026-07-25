---
layout: post
title: "(2024 MICRO) Gem5-AcceSys: Enabling System-Level Exploration of Standard Interconnects for Novel Accelerators"
date: 2024-01-01
description: "gem5-based framework for system-level simulation of accelerators with standard interconnects (CXL, PCIe)"
published: MICRO 2024
tags: paper-reading DSE gem5 simulation system-level interconnect
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Gem5-AcceSys: Enabling System-Level Exploration of Standard Interconnects for Novel Accelerators"
  authors: "Unknown"
  venue: "MICRO, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Gem5-AcceSys_Enabling_System-Level_Exploration_of_Standard_Interconnects_for_Novel_Accelerators.pdf"
---

## TL;DR

- 基于 gem5 的系统级仿真框架，支持将新型加速器接入标准互连（CXL, PCIe, AXI）。
- 解决了 accelerator DSE 中 "只看加速器本身，忽略系统集成" 的问题。
- 能评估 host-accelerator 交互的 overhead（DMA setup, interrupt, cache flush）。

## Problem

很多加速器 DSE 只看 isolated throughput/latency，忽略了与 host CPU 交互的 system-level overhead。

## Method

在 gem5 full-system 模式中集成 accelerator model + standard bus protocols + memory coherence。

## Insights

- System-level 视角对实际部署至关重要 — roofline model 不考虑 host overhead。
- CXL 时代尤其重要：CXL-attached accelerator 的 latency 与 coherence 开销影响巨大。
