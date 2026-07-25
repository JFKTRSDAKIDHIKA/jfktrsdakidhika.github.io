---
layout: post
title: "(2023 DAC) PyAIE: A Python-based Programming Framework for Versal AI Engine"
date: 2023-01-01
description: "Python-based programming framework for Versal AI Engine"
published: DAC 2023
tags: paper-reading FPGA Versal AIE Python programming
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "PyAIE: A Python-based Programming Framework for Versal AI Engine"
  authors: "Unknown"
  venue: "DAC, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Late_Breaking_Results_PyAIE_A_Python-based_Programming_Framework_for_Versal_ACAP_Platforms.pdf"
---

## TL;DR

- PyAIE：用 Python 编程 Versal AI Engine 的框架。
- 降低 AIE 的编程门槛（原生 C++ 编程复杂）。
- Python → AIE kernel code generation。

## Problem

AI Engine 编程需要深入了解底层架构，门槛太高。

## Method

Python DSL → 编译为 AIE C++ kernel + 自动内存管理 + dataflow scheduling。

## Insights

- 编程框架是新硬件普及的关键。
- 类似于 Triton (GPU) 对 CUDA 的简化。
