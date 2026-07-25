---
layout: post
title: "(2023 FPL) DPUV4E: High-Throughput DPU Architecture Design for CNN on Versal"
date: 2023-01-01
description: "Xilinx DPU v4E architecture for CNN inference on Versal platform"
published: FPL 2023
tags: paper-reading FPGA Versal DPU CNN Xilinx
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "DPUV4E: High-Throughput DPU Architecture Design for CNN on Versal"
  authors: "Xilinx/AMD"
  venue: "FPL, 2023"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/DPUV4E_%20High-Throughput%20DPU%20Architecture%20Design%20for%20CNN%20on%20Versal%20ACAP.pdf"
---

## TL;DR

- DPUV4E：Xilinx 官方 DPU (Deep Processing Unit) 在 Versal 上的新版本。
- 面向 CNN 推理的高吞吐架构。
- 利用 AIE + PL 实现混合精度 CNN 加速。

## Problem

如何在 Versal 上设计统一的 CNN inference IP（供客户直接使用）？

## Method

DPU 架构：固定的 CNN datapath + 可配置参数（PE 数量、buffer 大小）。

## Insights

- DPU 是 Xilinx/AMD 的商业 IP — 了解它有助于在其上做研究。
