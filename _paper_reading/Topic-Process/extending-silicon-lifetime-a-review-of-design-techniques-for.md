---
layout: post
title: "(2025 ACM Survey) Extending Silicon Lifetime - A Review of Design Techniques for Reliable Integrated Circuits"
date: 2025-01-01
description: "Survey of circuit and architecture techniques for managing IC aging and reliability degradation"
published: ACM Survey 2025
tags: paper-reading technology reliability aging NBTI EM
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Extending Silicon Lifetime: A Review of Design Techniques for Reliable Integrated Circuits"
  authors: "Shaik Jani Babu, Fan Hu, Linyu Zhu, Sonal Singhal, Xinfei Guo"
  venue: "ACM, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Extending%20Silicon%20Lifetime%20A%20Review%20of%20Design%20Techniques%20for%20Reliable%20Integrated%20Circuits.pdf"
---

## TL;DR

- 综述 IC 可靠性退化机制（NBTI, HCI, TDDB, EM）及对应的设计层面缓解技术。
- 覆盖电路级（guard-banding, adaptive voltage）、架构级（redundancy, graceful degradation）和系统级（lifetime management）策略。
- 随着工艺缩放和 3D 堆叠，可靠性问题加剧，需要 design-for-reliability 成为标准流程。

## Problem

先进工艺中晶体管和互连的退化加速（更薄氧化层→NBTI/TDDB，更细金属→EM），导致芯片性能随时间下降甚至失效。传统 guard-band 方法浪费面积和性能。

## Insights

- 对 accelerator 设计的启示：PIM/CIM 器件（RRAM, SRAM CIM）面临独特的可靠性挑战（写入疲劳、drift）。
- 3D IC 热密度增加会加速所有退化机制 → 需要 thermal-reliability co-design。
- 未来方向：ML-based lifetime prediction + runtime adaptation。
