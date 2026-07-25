---
layout: post
title: "(2024 Unknown) DiP: A Scalable Energy-Efficient Systolic Array for Matrix Multiplication"
date: 2024-01-01
description: "Scalable energy-efficient systolic array design for general matrix multiplication"
published: Unknown 2024
tags: paper-reading accelerator systolic-array energy-efficient scalable
toc:
  sidebar: left
related_posts: false
giscus_comments: true
paper:
  title: "DiP: A Scalable Energy-Efficient Systolic Array for Matrix Multiplication"
  authors: "Unknown"
  venue: "Unknown, 2024"
  url: ""
  code: ""
  pdf: "/assets/pdf/papers/DiP_A_Scalable_Energy-Efficient_Systolic_Array_for_Matrix_Multiplication_Acceleration.pdf"
---

## TL;DR

- DiP：可扩展、高能效的 systolic array 设计。
- 优化数据通路减少冗余寄存器传输。
- 支持大规模 GEMM 的高效 tiling。

## Problem

传统 systolic array 随规模增大，数据 pipeline 的寄存器开销和功耗线性增长。

## Method

优化 PE 间数据传输路径 + 减少不必要的数据复制。

## Insights

- Systolic array 的能效优化仍有空间。
- 关注点从 "peak performance" 转向 "energy per operation"。
