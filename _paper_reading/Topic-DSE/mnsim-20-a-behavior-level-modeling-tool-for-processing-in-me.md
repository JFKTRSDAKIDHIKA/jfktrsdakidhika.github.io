---
layout: post
title: "(2023 TCAD) MNSIM 2.0: A Behavior-Level Modeling Tool for Processing-In-Memory Architectures"
date: 2023-01-01
description: "Behavior-level simulator for PIM architectures supporting macro-level to system-level evaluation"
published: TCAD 2023
tags: paper-reading DSE PIM modeling simulation tool
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "MNSIM 2.0: A Behavior-Level Modeling Tool for Processing-In-Memory Architectures"
  authors: "Unknown"
  venue: "TCAD, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/MNSIM_2.0_A_Behavior-Level_Modeling_Tool_for_Processing-In-Memory_Architectures.pdf"
---

## TL;DR

- MNSIM 2.0：PIM 架构的行为级建模工具，支持从 macro 到 system 的多层次评估。
- 建模 CIM macro 的非理想性（ADC 噪声、cell 变异）和系统级性能。
- 快速评估不同 PIM 架构配置的 accuracy-efficiency tradeoff。

## Problem

PIM/CIM 架构的评估需要考虑 analog 非理想性对 DNN accuracy 的影响，传统 digital simulator 无法建模。

## Method

1. Macro-level: 建模 crossbar array 的 analog 行为（noise, variation, ADC precision）
2. Architecture-level: PE 组织、buffer hierarchy、data movement
3. Accuracy evaluation: 将 hardware noise 注入 DNN inference

## Insights

- PIM DSE 的独特挑战：accuracy 和 efficiency 强耦合。
- MNSIM 类似于 Timeloop 在 digital accelerator 中的角色 — PIM 生态的基础工具。
