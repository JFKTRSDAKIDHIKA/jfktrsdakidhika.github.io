---
layout: post
title: "(2025 DAC) LP-Spec: Leveraging LPDDR PIM for Efficient LLM Mobile Speculative Decoding"
date: 2025-01-01
description: "LPDDR PIM for efficient speculative decoding of LLMs on mobile devices"
published: DAC 2025
tags: paper-reading PIM LLM mobile LPDDR speculative-decoding
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "LP-Spec: Leveraging LPDDR PIM for Efficient LLM Mobile Speculative Decoding"
  authors: "Unknown"
  venue: "DAC, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/LP-Spec%20Leveraging%20LPDDR%20PIM%20for%20Efficient%20LLM%20Mobile%20Speculative%20Inference%20with%20Architecture-Dataflow%20Co-Optimization.pdf"
---

## TL;DR

- LP-Spec：利用 LPDDR PIM 在移动端做 LLM speculative decoding。
- Speculative decoding 需要同时运行 draft + target model。
- PIM 处理 draft model（小模型、memory-bound），CPU/NPU 处理 target model。

## Problem

移动端 LLM 推理太慢。Speculative decoding 能加速但需要同时运行两个模型。

## Method

LPDDR5-PIM 运行 draft model (并行推测) + NPU 验证 target model output。

## Insights

- Mobile LLM + PIM 是一个新兴且实际的研究方向。
- LPDDR PIM 比 HBM-PIM 更贴近移动端现实。
- Speculative decoding 是提速的有效手段。
