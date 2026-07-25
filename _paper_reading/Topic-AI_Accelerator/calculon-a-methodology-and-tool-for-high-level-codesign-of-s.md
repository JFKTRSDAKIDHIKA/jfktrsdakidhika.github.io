---
layout: post
title: "(2023 SC) Calculon: A Methodology and Tool for High-Level Codesign of Systems and Large Language Models"
date: 2023-01-01
description: "High-level methodology for co-designing systems and LLMs"
published: SC 2023
tags: paper-reading DSE LLM system-design codesign tool
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Calculon: A Methodology and Tool for High-Level Codesign of Systems and Large Language Models"
  authors: "Unknown"
  venue: "SC, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Calculon_a_Methodology_and_Tool_for_High-Level_Codesign_of_Systems_and_Large_Language_Models.pdf"
---

## TL;DR

- Calculon：LLM 系统设计的高层分析工具。
- 建模 LLM training/inference 对系统资源的需求。
- 帮助回答：给定 model 需要多少 GPU/memory/network？

## Problem

LLM 规模快速增长，如何在设计阶段预估系统需求（不用搭建真实集群）？

## Method

Analytical model: model parallelism (TP/PP/DP) × hardware config → performance/cost prediction。

## Insights

- System-level 分析工具对超大规模 AI 部署至关重要。
- 类似于 accelerator DSE 但在更高抽象层。
