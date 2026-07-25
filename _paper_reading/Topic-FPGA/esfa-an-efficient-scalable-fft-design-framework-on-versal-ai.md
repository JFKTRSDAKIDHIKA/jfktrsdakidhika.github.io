---
layout: post
title: "(2024 TCAD) ESFA: An Efficient Scalable FFT Design Framework on Versal AI Engine"
date: 2024-01-01
description: "Scalable FFT design framework targeting Versal AI Engine"
published: TCAD 2024
tags: paper-reading FPGA Versal AIE FFT scalable
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "ESFA: An Efficient Scalable FFT Design Framework on Versal AI Engine"
  authors: "Unknown"
  venue: "TCAD, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/ESFA_An_Efficient_Scalable_FFT_Design_Framework_on_Versal_AI_Engine.pdf"
---

## TL;DR

- ESFA：面向 Versal AI Engine 的可扩展 FFT 设计框架。
- 支持任意 FFT size 的自动映射到 AIE array。
- 优化数据搬运减少 AIE 间通信。

## Problem

FFT 在 AIE 上的映射涉及复杂的蝶形运算分配和数据 shuffle。

## Method

自动化框架：FFT size → 分解策略 → AIE kernel 分配 → 通信优化。

## Insights

- FFT 是 5G/雷达的核心运算。
- AIE 的确定性执行模型适合 FFT 的规则计算。
