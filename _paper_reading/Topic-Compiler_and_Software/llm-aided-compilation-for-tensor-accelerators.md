---
layout: post
title: "(2025 Unknown) LLM-Aided Compilation for Tensor Accelerators"
date: 2025-01-01
description: "Using LLMs to assist compilation and code generation for domain-specific tensor accelerators"
published: Unknown 2025
tags: paper-reading compiler LLM tensor-accelerator code-generation
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "LLM-Aided Compilation for Tensor Accelerators"
  authors: "Charles Hong, Sahil Bhatia, Altan Haan, Shengjun Kris Dong, Dima Nikiforov, Alvin Cheung, Yakun Sophia Shao"
  venue: "UC Berkeley, 2025"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/LLM-Aided_Compilation_for_Tensor_Accelerators.pdf"
---

## TL;DR

- 探索使用 LLM（大语言模型）辅助 tensor accelerator 的编译流程。
- 目标：减少手动编写 schedule/mapping 的工程负担，让 LLM 生成或优化编译器中间表示。
- 展示了 LLM 在理解硬件约束和生成有效映射方面的潜力与局限。

## Insights

- "AI for chip design" 的一个新方向：不是用 ML 做 DSE，而是用 LLM 做编译（更接近 software engineering 的角色）。
- 与传统 autotuning (TVM, Halide) 互补：LLM 提供初始方案，autotuner 做 fine-tune。
- 局限性：LLM 对硬件约束的理解仍然不够精确，需要 verification loop。
