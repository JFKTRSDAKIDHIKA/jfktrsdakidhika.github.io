---
layout: post
title: "(2024 ICCAD) Hierarchical Power Co-Optimization and Management for LLM Chiplet Designs"
date: 2024-01-01
description: "Hierarchical power optimization for LLM chiplet architectures"
published: ICCAD 2024
tags: paper-reading 3DIC chiplet LLM power-management
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Hierarchical Power Co-Optimization and Management for LLM Chiplet Designs"
  authors: "Unknown"
  venue: "ICCAD, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%2824%20ICCAD%29%20Hierarchical%20Power%20Co-Optimization%20and%20Management%20for%20LLM%20Chiplet%20Designs.pdf"
---

## TL;DR

- 面向 LLM chiplet 架构的分层功耗优化和管理。
- 多 chiplet 系统的功耗分配不均 → 需要层次化管理。
- Co-optimization：架构设计阶段就考虑功耗分配。

## Problem

LLM chiplet 系统的总功耗可达数百瓦，不同 chiplet 负载不均导致热点和浪费。

## Method

Hierarchical: chip-level DVFS + chiplet-level power gating + workload-aware scheduling。

## Insights

- 功耗管理是大规模 chiplet 系统的实际挑战。
- LLM workload 的动态性（prefill vs decode）使功耗管理更复杂。
