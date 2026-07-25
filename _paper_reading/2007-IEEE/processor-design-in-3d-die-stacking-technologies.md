---
layout: post
title: "(2007 IEEE Micro) Processor Design in 3D Die-Stacking Technologies"
date: 2007-01-01
description: "Overview of processor design opportunities and challenges enabled by 3D die stacking technology"
published: IEEE Micro 2007
tags: paper-reading 3DIC die-stacking processor-design
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Processor Design in 3D Die-Stacking Technologies"
  authors: "Bryan Black et al. (Intel)"
  venue: "IEEE Micro, 2007"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/%282007%20IEEE%20Micro%29%20Processor_Design_in_3D_Die-Stacking_Technologies.pdf"
---

## TL;DR

- Intel 团队从处理器设计角度全面阐述 3D die stacking 的机遇与挑战。
- 延续 MICRO 2006 论文的思路，更详细地讨论了 Memory+Logic 和 Logic+Logic stacking 的设计考量。
- 深入探讨了热管理、电源传输、测试等实际工程挑战。
- 提供了 3D 技术在处理器设计中的路线图和设计指南。

## Paper Info

- **Title:** {{ page.paper.title }}
- **Authors:** {{ page.paper.authors }}
- **Venue:** {{ page.paper.venue }}
- **Paper:** [PDF]({{ page.paper.pdf }})

## Problem

3D die stacking 技术成熟后，处理器设计需要回答：
1. 如何利用垂直维度来优化性能和功耗？
2. 热限制是否真的阻碍 3D 处理器设计？
3. 什么样的微架构分割策略对 3D 最有利？

## Method

1. **Memory+Logic stacking 分析**：量化大容量 3D cache 对 processor performance 的收益（延续 MICRO'06）
2. **Logic+Logic stacking 分析**：微架构 block 的 3D floorplanning 策略
3. **Thermal modeling**：完整的封装级热模型，评估 3D 可行性
4. **Design guidelines**：为 3D 处理器设计提供工程指导

## Insights

- 本文是 MICRO 2006 论文的扩展版本（IEEE Micro 属于 magazine，面向更广受众）
- 增加了更多工程实践细节和设计指南
- 强调了 "3D thinking" — 设计早期就需要考虑垂直维度，而不是后期简单堆叠
- 对热管理给出了更具体的建议：利用 3D 本身减少总功耗来 offset 热密度增加

## Limitations

- 相比 MICRO 2006 论文，技术贡献增量较小
- 更多是综述和指南性质，缺少新实验数据
- 2007 年的技术假设（TSV pitch, bonding 工艺）现在已过时

## Follow-up

- 后续 Intel 的实际 3D 产品（如 Foveros, ISSCC 2026 M3DProc）
- 3D-aware microarchitecture design 研究
