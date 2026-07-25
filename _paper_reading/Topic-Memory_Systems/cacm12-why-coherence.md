---
layout: post
title: "(2012 CACM) Why On-Chip Cache Coherence Is Here to Stay"
date: 2012-01-01
description: "Argues that hardware cache coherence scales gracefully and should remain the default for multi-core processors"
published: CACM 2012
tags: paper-reading memory-systems cache-coherence multi-core
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "Why On-Chip Cache Coherence Is Here to Stay"
  authors: "Milo M.K. Martin, Mark D. Hill, Daniel J. Sorin"
  venue: "CACM, 2012"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/cacm12_why_coherence.pdf"
---

## TL;DR

- 反驳"cache coherence 无法扩展到多核"的观点，论证硬件 coherence 可以优雅地 scale。
- 关键论据：directory-based coherence 的 storage overhead 和 traffic 随核心数增长是可控的。
- 软件管理的 scratchpad/message-passing 替代方案在通用计算中编程复杂度过高。
- 结论：对绝大多数 workload，hardware coherence 仍是最佳选择。

## Insights

- 2012 年的结论在 2025 年仍然成立：主流 CPU/GPU 都用硬件 coherence。
- 但对 DNN accelerator，情况不同：规则的数据访问模式使得 explicit DMA + scratchpad 成为更优方案。
- ISSCC 2026 M3DProc 就选择了 non-coherent + explicit DMA 方案，说明 accelerator 域可以绕过 coherence。
- 对 PIM 的启示：PIM 通常不需要细粒度 coherence，但 host-PIM 一致性是挑战。
