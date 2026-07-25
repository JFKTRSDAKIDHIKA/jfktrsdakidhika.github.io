---
layout: post
title: "(2023 NeurIPS) Framework and Benchmarks for Combinatorial and Mixed-variable Bayesian Optimization"
date: 2023-01-01
description: "Benchmark suite for BO methods handling combinatorial and mixed continuous-discrete variables"
published: NeurIPS 2023
tags: paper-reading DSE Bayesian-optimization combinatorial mixed-variable benchmark
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Framework and Benchmarks for Combinatorial and Mixed-variable Bayesian Optimization"
  authors: "Unknown"
  venue: "NeurIPS, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/NeurIPS-2023-framework-and-benchmarks-for-combinatorial-and-mixed-variable-bayesian-optimization-Paper-Datasets_and_Benchmarks.pdf"
---

## TL;DR

- 提供处理 **组合和混合变量** BO 的统一框架和 benchmark suite。
- 架构 DSE 的参数通常是 mixed（连续: 电压/频率；离散: PE 数量/buffer 级数；categorical: dataflow 类型）。
- 评估了主流 mixed-variable BO 方法的优劣。

## Problem

标准 BO 假设连续空间；但 hardware DSE 的设计空间是 mixed（continuous + integer + categorical）。缺乏统一评估。

## Method

1. 定义 mixed-variable BO 的 benchmark suite（含合成函数和真实问题）
2. 统一接口评估各种方法（SMAC, TPE, CoCaBO, Casmopolitan）
3. 分析不同 variable 组合下各方法的表现

## Insights

- 对 architecture DSE 极其相关：设计空间通常包含整数参数（PE数）、连续参数（电压）和 categorical（dataflow type）。
- 选择 BO method 时应根据变量类型分布来决定。
