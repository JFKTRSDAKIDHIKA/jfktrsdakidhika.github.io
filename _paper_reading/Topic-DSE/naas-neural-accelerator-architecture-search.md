---
layout: post
title: "(2021 DAC) NAAS: Neural Accelerator Architecture Search"
date: 2021-01-01
description: "Joint NAS + accelerator architecture search using hardware-aware neural architecture optimization"
published: DAC 2021
tags: paper-reading DSE NAS hardware-aware co-design
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "NAAS: Neural Accelerator Architecture Search"
  authors: "Yujun Lin, Mengtian Yang, Song Han"
  venue: "DAC, 2021"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/NAAS_Neural_Accelerator_Architecture_Search.pdf"
---

## TL;DR

- 联合搜索神经网络架构和加速器架构 (HW-SW co-search)。
- 不是先固定网络再设计硬件，也不是先固定硬件再搜网络，而是同时优化两者。
- 在 Pareto front (accuracy vs. latency/energy) 上找到比独立优化更好的解。

## Problem

NAS 只优化 accuracy，忽略硬件效率；HW DSE 只优化给定网络的硬件。两者割裂导致 suboptimal。

## Method

1. 定义联合搜索空间：NN architecture choices × HW architecture choices
2. 用 predictor-based approach 估算 latency/energy（避免每次都做 full simulation）
3. 多目标搜索算法寻找 Pareto-optimal (accuracy, latency, energy) 三维解

## Insights

- HW-SW co-design 是 "正确" 的方法，但搜索空间爆炸是核心挑战。
- Predictor 的准确度决定搜索质量 — 如果 predictor 有系统偏差，搜出的设计可能不实际。
- Song Han 组后续的 MCUNet, TinyML 工作延续了这一思路。
