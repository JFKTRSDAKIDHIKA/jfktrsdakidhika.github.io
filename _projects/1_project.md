---
layout: page
title: Golden Apple Corelet
description: A compact, in-order RISC-V microarchitecture optimized for embedded systems.
img: assets/ysyx/architecture_overview.jpg
importance: 1
category: work
---

The **Golden Apple Corelet** is a compact, in-order RISC-V microarchitecture specifically optimized for embedded systems. Developed using the **Chisel3** hardware construction language, this project implements the RV32E instruction set with a custom 2+5 stage pipeline design.

The core features a decoupled fetch unit with a dual-stage Instruction Cache for high throughput, alongside a classic 5-stage execution pipeline with full bypassing and hazard detection.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/ysyx/pipeline_diagram.jpg" title="Pipeline Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The 2+5 Stage Pipeline Design: Decoupled Fetch & Classic Execution.
</div>

### Agile Development & Verification

The project adopted an agile development methodology using Chisel3 to create parameterized and reusable modules. To ensure robustness, a **Differential Testing (DiffTest)** mechanism was implemented.

* **DUT (Design Under Test):** The core written in Chisel, simulated by Verilator.
* **REF (Reference):** The NEMU C functional simulator.
* **Method:** The architectural state (GPR & PC) is compared every cycle, allowing bugs to be caught automatically during test program execution and OS booting.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/ysyx/agile_dev_flow.jpg" title="Agile Development Flow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### System Integration: Booting RT-Thread

System bring-up involved integrating the core into an SoC environment with AXI bus, UART, GPIO, and SDRAM support. The ultimate stress test for architectural correctness was booting **RT-Thread**, a real-time operating system. This required implementing CSRs for exception handling, timer interrupts, and context switching.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/ysyx/rt_thread_boot.jpg" title="RT-Thread Interactive Shell" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Successfully entered the interactive shell of RT-Thread.
</div>

### Performance Evaluation

Through an iterative optimization process, the microarchitecture evolved significantly. The optimization roadmap included adding Branch Prediction, ICache pipelining, and AXI Burst support.

* **IPC Improvement:** Significant trajectory from the Base Core (0.02) to a Peak of **0.158**.
* **Bottleneck Migration:** Addressed bottlenecks shifting from Memory Bound (84.6%) to Fetch Bound, and finally to IDU Stall Bound.
* **Final Speedup:** Achieved an **11.0x** total speedup over the baseline implementation.

<div class="row">
    <div class="col-12 mt-3">
        {% include figure.liquid path="assets/ysyx/ipc_trajectory.jpg" title="IPC Trajectory" class="img-fluid rounded z-depth-1" %}
    </div>

    <div class="col-12 mt-3">
        {% include figure.liquid path="assets/ysyx/speedup_chart.jpg" title="Speedup Evolution" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Top: IPC/CPI Trajectory showing bottleneck migration. Bottom: Final 11.0x Speedup achieved.
</div>

### Future Work
The project aims to advance to tape-out verification (Stage B) and silicon validation, as well as exploring Out-of-Order (OoO) execution in future iterations.
