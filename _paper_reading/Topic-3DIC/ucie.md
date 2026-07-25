---
layout: post
title: "(2025 Notes) UCIe Standard Package Module & PHY 结构笔记"
date: 2025-01-01
description: "Personal notes on UCIe standard package module and PHY structure"
published: Notes 2025
tags: paper-reading 3DIC chiplet UCIe standard interface
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "UCIe Standard Package Module & PHY 结构笔记"
  authors: "Shuao Jia"
  venue: "Notes, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/UCIe.pdf"
---

## TL;DR

- UCIe (Universal Chiplet Interconnect Express) 标准笔记。
- 定义了 chiplet 间的标准物理接口和协议。
- Package module 规格 + PHY layer 结构。

## Problem

Chiplet 生态需要标准化的 die-to-die 互连接口（类似于 PCIe 对 board-level 的意义）。

## Method

UCIe 定义了 PHY (物理层)、adapter (适配层)、protocol (协议层) 三层。

## Insights

- UCIe 是 chiplet 生态的基础设施标准。
- Intel, AMD, TSMC, Samsung 等共同推动。
- 对 chiplet 研究者是必读材料。
