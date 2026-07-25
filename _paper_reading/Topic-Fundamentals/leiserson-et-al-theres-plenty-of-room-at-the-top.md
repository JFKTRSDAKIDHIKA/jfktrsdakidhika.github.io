---
layout: post
title: "(2020 Science) There's Plenty of Room at the Top"
date: 2020-01-01
description: "Argues that post-Moore's-Law performance gains will come from software, algorithms, and hardware specialization rather than transistor scaling"
published: Science 2020
tags: paper-reading foundations performance specialization
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "There's Plenty of Room at the Top: What Will Drive Computer Performance After Moore's Law?"
  authors: "Charles E. Leiserson, Neil C. Thompson, Joel S. Emer, Bradley C. Kuszmaul, Butler W. Lampson, Daniel Sanchez, Tao B. Schardl"
  venue: "Science, 2020"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/Leiserson-et-al-Theres-plenty-of-room-at-the-top.pdf"
---

## TL;DR

- 摩尔定律放缓后，性能提升将主要来自三个"上层"：**软件优化**、**算法改进**、**硬件特化**（domain-specific accelerators）。
- 历史数据表明：软件层面的优化空间常常大于硬件改进（如排序算法进步 >10000× vs. 硬件 ~1000×）。
- 呼吁回归"performance engineering"文化，而非仅依赖工艺进步。
- Leiserson 的名字同时出现在 1978 systolic array 和 2020 这篇 —— 跨越 40+ 年的系统观。

## Insights

- 这篇论文是 DSE 研究的哲学基础：为什么我们需要 hardware specialization + co-design。
- "Room at the top" = 软件/算法/架构层的优化空间 >> "Room at the bottom" = 继续缩放晶体管。
- 对 DNN accelerator 研究的直接指导：不是只做硬件，要 SW-HW co-design。
