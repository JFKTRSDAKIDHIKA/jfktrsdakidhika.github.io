// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-paper-reading",
          title: "paper reading",
          description: "Notes and interpretations of research papers, organized by year and venue.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/paper-reading/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "paper_reading-paper-reading-system-level-exploration-for-pareto-optimal-configurations-in-parameterized-systems-on-a-chip",
          title: 'Paper Reading: System-level exploration for Pareto-optimal configurations in parameterized systems-on-a-chip',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2001-ICCAD/system-level-exploration-for-pareto-optimal-configurations-i/";
            },},{id: "paper_reading-paper-reading-multi-objective-design-space-exploration-using-genetic-algorithms",
          title: 'Paper Reading: Multi-objective design space exploration using genetic algorithms',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2002-CODES/multi-objective-design-space-exploration-using-genetic-algor/";
            },},{id: "paper_reading-paper-reading-three-dimensional-integrated-circuits",
          title: 'Paper Reading: Three-dimensional integrated circuits',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2006-IBM/three-dimensional-integrated-circuits/";
            },},{id: "paper_reading-paper-reading-die-stacking-3d-microarchitecture",
          title: 'Paper Reading: Die Stacking 3D Microarchitecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2006-MICRO/die-stacking-3d-microarchitecture/";
            },},{id: "paper_reading-paper-reading-processor-design-in-3d-die-stacking-technologies",
          title: 'Paper Reading: Processor Design in 3D Die-Stacking Technologies',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2007-IEEE/processor-design-in-3d-die-stacking-technologies/";
            },},{id: "paper_reading-paper-reading-a-novel-dimensionally-decomposed-router-for-on-chip-communication-in-3d-architectures",
          title: 'Paper Reading: A Novel Dimensionally-Decomposed Router for On-Chip Communication in 3D Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2007-ISCA/a-novel-dimensionally-decomposed-router-for-on-chip-communic/";
            },},{id: "paper_reading-paper-reading-3d-stacked-memory-architectures-for-multi-core-processors",
          title: 'Paper Reading: 3D-Stacked Memory Architectures for Multi-Core Processors',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2008-ISCA/3d-stacked-memory-architectures-for-multi-core-processors/";
            },},{id: "paper_reading-paper-reading-debunking-the-100x-gpu-vs-cpu-myth-an-evaluation-of-throughput-computing-on-cpu-and-gpu",
          title: 'Paper Reading: Debunking the 100X GPU vs CPU Myth - An Evaluation of...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2010-ISCA/debunking-the-100x-gpu-vs-cpu-myth---an-evaluation-of-throug/";
            },},{id: "paper_reading-paper-reading-decision-theoretic-design-space-exploration-of-multiprocessor-platforms",
          title: 'Paper Reading: Decision-Theoretic Design Space Exploration of Multiprocessor Platforms',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2010-TCAD/decision-theoretic-design-space-exploration-of-multiprocesso/";
            },},{id: "paper_reading-paper-reading-design-space-exploration-acceleration-through-operation-clustering",
          title: 'Paper Reading: Design Space Exploration Acceleration Through Operation Clustering',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2010-TCAD/design-space-exploration-acceleration-through-operation-clus/";
            },},{id: "paper_reading-paper-reading-1-1-computings-energy-problem-and-what-we-can-do-about-it",
          title: 'Paper Reading: 1.1 Computings energy problem and what we can do about it...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2014-ISSCC/11-computings-energy-problem-and-what-we-can-do-about-it/";
            },},{id: "paper_reading-paper-reading-shidiannao-shifting-vision-processing-closer-to-the-sensor",
          title: 'Paper Reading: ShiDianNao Shifting vision processing closer to the sensor',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2015-ISCA/shidiannao-shifting-vision-processing-closer-to-the-sensor/";
            },},{id: "paper_reading-paper-reading-in-datacenter-performance-analysis-of-a-tensor-processing-unit",
          title: 'Paper Reading: In-Datacenter Performance Analysis of a Tensor Processing Unit',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2017-ISCA/in-datacenter-performance-analysis-of-a-tensor-processing-un/";
            },},{id: "paper_reading-paper-reading-asap7-predictive-design-kit-development-and-cell-design-technology-co-optimization-invited-paper",
          title: 'Paper Reading: ASAP7 predictive design kit development and cell design technology co-optimization Invited...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2017-ISPD/asap7-predictive-design-kit-development-and-cell-design-tech/";
            },},{id: "paper_reading-paper-reading-14-5-envision-a-0-26-to-10tops-w-subword-parallel-dynamic-voltage-accuracy-frequency-scalable-convolutional-neural-network-processor-in-28nm-fdsoi",
          title: 'Paper Reading: 14.5 Envision A 0.26-to-10TOPS W subword-parallel dynamic-voltage-accuracy-frequency-scalable Convolutional Neural Network processor...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2017-ISSCC/145-envision-a-026-to-10tops-w-subword-parallel-dynamic-volt/";
            },},{id: "paper_reading-paper-reading-tsv-based-3-d-ics-design-methods-and-tools",
          title: 'Paper Reading: TSV-Based 3-D ICs Design Methods and Tools',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2017-TCAD/tsv-based-3-d-ics-design-methods-and-tools/";
            },},{id: "paper_reading-paper-reading-accelergy-an-architecture-level-energy-estimation-methodology-for-accelerator-designs",
          title: 'Paper Reading: Accelergy An Architecture-Level Energy Estimation Methodology for Accelerator Designs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-ICCAD/accelergy-an-architecture-level-energy-estimation-methodolog/";
            },},{id: "paper_reading-paper-reading-timeloop-a-systematic-approach-to-dnn-accelerator-evaluation",
          title: 'Paper Reading: Timeloop A Systematic Approach to DNN Accelerator Evaluation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-ISPASS/timeloop-a-systematic-approach-to-dnn-accelerator-evaluation/";
            },},{id: "paper_reading-paper-reading-a-64-tile-2-4-mb-in-memory-computing-cnn-accelerator-employing-charge-domain-compute",
          title: 'Paper Reading: A 64-Tile 2.4-Mb In-Memory-Computing CNN Accelerator Employing Charge-Domain Compute',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-JSSC/a-64-tile-24-mb-in-memory-computing-cnn-accelerator-employin/";
            },},{id: "paper_reading-paper-reading-hypermapper-a-practical-design-space-exploration-framework",
          title: 'Paper Reading: HyperMapper a Practical Design Space Exploration Framework',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-MASCOTS/hypermapper-a-practical-design-space-exploration-framework/";
            },},{id: "paper_reading-paper-reading-understanding-reuse-performance-and-hardware-cost-of-dnn-dataflows-a-data-centric-approach-using-maestro",
          title: 'Paper Reading: Understanding Reuse, Performance, and Hardware Cost of DNN Dataflows A Data-Centric...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-MICRO/understanding-reuse-performance-and-hardware-cost-of-dnn-dat/";
            },},{id: "paper_reading-paper-reading-interstellar-using-halide-s-scheduling-language-to-analyze-dnn-accelerators",
          title: 'Paper Reading: Interstellar Using Halide’s Scheduling Language to Analyze DNN Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2020-ASPLOS/interstellar-using-halides-scheduling-language-to-analyze-dn/";
            },},{id: "paper_reading-paper-reading-a-domain-specific-supercomputer-for-training-deep-neural-networks-tpuv2",
          title: 'Paper Reading: A Domain Specific Supercomputer for Training Deep Neural Networks (TPUv2)',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2020-CACM/a-domain-specific-supercomputer-for-training-deep-neural-net/";
            },},{id: "paper_reading-paper-reading-a-deep-reinforcement-learning-framework-for-architectural-exploration-a-routerless-noc-case-study",
          title: 'Paper Reading: A Deep Reinforcement Learning Framework for Architectural Exploration A Routerless NoC...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2020-HPCA/a-deep-reinforcement-learning-framework-for-architectural-ex/";
            },},{id: "paper_reading-paper-reading-a-22-nm-1540-top-s-w-12-1-top-s-mm2-in-memory-analog-matrix-vector-multiplier-for-dnn-acceleration",
          title: 'Paper Reading: A 22 nm 1540 TOP s W 12.1 TOP s mm2...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-CICC/a-22-nm-1540-top-s-w-121-top-s-mm2-in-memory-analog-matrix-v/";
            },},{id: "paper_reading-paper-reading-tensorlib-a-spatial-accelerator-generation-framework-for-tensor-algebra",
          title: 'Paper Reading: TensorLib A Spatial Accelerator Generation Framework for Tensor Algebra',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-DAC/tensorlib-a-spatial-accelerator-generation-framework-for-ten/";
            },},{id: "paper_reading-paper-reading-boom-explorer-risc-v-boom-microarchitecture-design-space-exploration-framework",
          title: 'Paper Reading: BOOM-Explorer RISC-V BOOM Microarchitecture Design Space Exploration Framework',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-ICCAD/boom-explorer-risc-v-boom-microarchitecture-design-space-exp/";
            },},{id: "paper_reading-paper-reading-the-design-process-for-googles-training-chips-tpuv2-and-tpuv3",
          title: 'Paper Reading: The Design Process for Googles Training Chips TPUv2 and TPUv3',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-IEEE/the-design-process-for-googles-training-chips-tpuv2-and-tpuv/";
            },},{id: "paper_reading-paper-reading-hardware-architecture-and-software-stack-for-pim-based-on-commercial-dram-technology-industrial-product",
          title: 'Paper Reading: Hardware Architecture and Software Stack for PIM Based on Commercial DRAM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-ISCA/hardware-architecture-and-software-stack-for-pim-based-on-co/";
            },},{id: "paper_reading-paper-reading-ten-lessons-from-three-generations-shaped-googles-tpuv4i-industrial-product",
          title: 'Paper Reading: Ten Lessons From Three Generations Shaped Googles TPUv4i Industrial Product',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-ISCA/ten-lessons-from-three-generations-shaped-googles-tpuv4i-ind/";
            },},{id: "paper_reading-paper-reading-2102-01723v1",
          title: 'Paper Reading: 2102.01723v1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-arXiv/210201723v1/";
            },},{id: "paper_reading-paper-reading-hammer-a-modular-and-reusable-physical-design-flow-tool",
          title: 'Paper Reading: Hammer A Modular and Reusable Physical Design Flow Tool',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-DAC/hammer-a-modular-and-reusable-physical-design-flow-tool/";
            },},{id: "paper_reading-paper-reading-invited-scalehls-a-scalable-high-level-synthesis-framework-with-multi-level-transformations-and-optimizations",
          title: 'Paper Reading: Invited ScaleHLS a Scalable High-Level Synthesis Framework with Multi-level Transformations and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-DAC/invited-scalehls-a-scalable-high-level-synthesis-framework-w/";
            },},{id: "paper_reading-paper-reading-digamma-domain-aware-genetic-algorithm-for-hw-mapping-co-optimization-for-dnn-accelerators",
          title: 'Paper Reading: DiGamma Domain-aware Genetic Algorithm for HW-Mapping Co-optimization for DNN Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-DATE/digamma-domain-aware-genetic-algorithm-for-hw-mapping-co-opt/";
            },},{id: "paper_reading-paper-reading-scalehls-a-new-scalable-high-level-synthesis-framework-on-multi-level-intermediate-representation",
          title: 'Paper Reading: ScaleHLS A New Scalable High-Level Synthesis Framework on Multi-Level Intermediate Representation...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-HPCA/scalehls-a-new-scalable-high-level-synthesis-framework-on-mu/";
            },},{id: "paper_reading-paper-reading-data-driven-offline-optimization-for-architecting-hardware-accelerators",
          title: 'Paper Reading: DATA-DRIVEN OFFLINE OPTIMIZATION FOR ARCHITECTING HARDWARE ACCELERATORS',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-ICLR/data-driven-offline-optimization-for-architecting-hardware-a/";
            },},{id: "paper_reading-paper-reading-aquabolt-xl-hbm2-pim-lpddr5-pim-with-in-memory-processing-and-axdimm-with-acceleration-buffer",
          title: 'Paper Reading: Aquabolt-XL HBM2-PIM LPDDR5-PIM With In-Memory Processing and AXDIMM With Acceleration Buffer...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-IEEE/aquabolt-xl-hbm2-pim-lpddr5-pim-with-in-memory-processing-an/";
            },},{id: "paper_reading-paper-reading-learning-a-continuous-and-reconstructible-latent-space-for-hardware-accelerator-design",
          title: 'Paper Reading: Learning A Continuous and Reconstructible Latent Space for Hardware Accelerator Design...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-ISPASS/learning-a-continuous-and-reconstructible-latent-space-for-h/";
            },},{id: "paper_reading-paper-reading-184qps-w-64mb-mm23d-logic-to-dram-hybrid-bonding-with-process-near-memory-engine-for-recommendation-system",
          title: 'Paper Reading: 184QPS W 64Mb mm23D Logic-to-DRAM Hybrid Bonding with Process-Near-Memory Engine for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-ISSCC/184qps-w-64mb-mm23d-logic-to-dram-hybrid-bonding-with-proces/";
            },},{id: "paper_reading-paper-reading-a-1ynm-1-25v-8gb-16gb-s-pin-gddr6-based-accelerator-in-memory-supporting-1tflops-mac-operation-and-various-activation-functions-for-deep-learning-applications",
          title: 'Paper Reading: A 1ynm 1.25V 8Gb 16Gb s pin GDDR6-based Accelerator-in-Memory supporting 1TFLOPS...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-ISSCC/a-1ynm-125v-8gb-16gb-s-pin-gddr6-based-accelerator-in-memory/";
            },},{id: "paper_reading-paper-reading-fla-anoptimizeddataflowformitigatingattentionbottlenecks",
          title: 'Paper Reading: FLA：AnOptimizedDataflowforMitigatingAttentionBottlenecks',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ASPLOS/flaanoptimizeddataflowformitigatingattentionbottlenecks/";
            },},{id: "paper_reading-paper-reading-graph-representation-learning-for-microarchitecture-design-space-exploration-final",
          title: 'Paper Reading: Graph Representation Learning for Microarchitecture Design Space Exploration - final',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-DAC/graph-representation-learning-for-microarchitecture-design-s-2/";
            },},{id: "paper_reading-paper-reading-graph-representation-learning-for-microarchitecture-design-space-exploration",
          title: 'Paper Reading: Graph Representation Learning for Microarchitecture Design Space Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-DAC/graph-representation-learning-for-microarchitecture-design-s/";
            },},{id: "paper_reading-paper-reading-charm-composing-heterogeneous-accelerators-for-matrix-multiply-on-versal-acap-architecture",
          title: 'Paper Reading: CHARM Composing Heterogeneous AcceleRators for Matrix Multiply on Versal ACAP Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-FPGA/charm-composing-heterogeneous-accelerators-for-matrix-multip/";
            },},{id: "paper_reading-paper-reading-defines-enabling-fast-exploration-of-the-depth-first-scheduling-space-for-dnn-accelerators-through-analytical-modeling",
          title: 'Paper Reading: DeFiNES Enabling Fast Exploration of the Depth-first Scheduling Space for DNN...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-HPCA/defines-enabling-fast-exploration-of-the-depth-first-schedul/";
            },},{id: "paper_reading-paper-reading-isosceles-accelerating-sparse-cnns-through-inter-layer-pipelining",
          title: 'Paper Reading: ISOSceles Accelerating Sparse CNNs through Inter-Layer Pipelining',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-HPCA/isosceles-accelerating-sparse-cnns-through-inter-layer-pipel/";
            },},{id: "paper_reading-paper-reading-leveraging-domain-information-for-the-efficient-automated-design-of-deep-learning-accelerators",
          title: 'Paper Reading: Leveraging Domain Information for the Efficient Automated Design of Deep Learning...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-HPCA/leveraging-domain-information-for-the-efficient-automated-de/";
            },},{id: "paper_reading-paper-reading-ares-a-mapping-framework-of-dnns-towards-diverse-pims-with-general-abstractions",
          title: 'Paper Reading: ARES A Mapping Framework of DNNs Towards Diverse PIMs with General...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ICCAD/ares-a-mapping-framework-of-dnns-towards-diverse-pims-with-g/";
            },},{id: "paper_reading-paper-reading-archgym-an-open-source-gymnasium-for-machine-learning-assisted-architecture-design",
          title: 'Paper Reading: ArchGym An Open-Source Gymnasium for Machine Learning Assisted Architecture Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISCA/archgym-an-open-source-gymnasium-for-machine-learning-assist/";
            },},{id: "paper_reading-paper-reading-tpuv4",
          title: 'Paper Reading: TPUv4',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISCA/tpuv4/";
            },},{id: "paper_reading-paper-reading-a-comparative-study-on-front-side-buried-and-back-side-power-rail-topologies-in-3nm-technology-node",
          title: 'Paper Reading: A Comparative Study on Front Side Buried and Back Side Power...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISLPED/a-comparative-study-on-front-side-buried-and-back-side-power/";
            },},{id: "paper_reading-paper-reading-looptree-enabling-exploration-of-fused-layer-dataflow-accelerators",
          title: 'Paper Reading: LoopTree Enabling Exploration of Fused-layer Dataflow Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISPASS/looptree-enabling-exploration-of-fused-layer-dataflow-accele/";
            },},{id: "paper_reading-paper-reading-16-7-a-40-310tops-w-sram-based-all-digital-up-to-4b-in-memory-computing-multi-tiled-nn-accelerator-in-fd-soi-18nm-for-deep-learning-edge-applications",
          title: 'Paper Reading: 16.7 A 40-310TOPS W SRAM-Based All-Digital Up to 4b In-Memory Computing...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISSCC/167-a-40-310tops-w-sram-based-all-digital-up-to-4b-in-memory/";
            },},{id: "paper_reading-paper-reading-a-charge-domain-sram-compute-in-memory-macro-with-c-2c-ladder-based-8-bit-mac-unit-in-22-nm-finfet-process-for-edge-inference",
          title: 'Paper Reading: A Charge Domain SRAM Compute-in-Memory Macro With C-2C Ladder-Based 8-Bit MAC...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-JSSC/a-charge-domain-sram-compute-in-memory-macro-with-c-2c-ladde/";
            },},{id: "paper_reading-paper-reading-dosa-differentiable-model-based-one-loop-search-for-dnn-accelerators",
          title: 'Paper Reading: DOSA Differentiable Model-Based One Loop Search for DNN Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-MICRO/dosa-differentiable-model-based-one-loop-search-for-dnn-acce/";
            },},{id: "paper_reading-paper-reading-teaal-a-declarative-framework-for-modeling-sparse-tensor-accelerators",
          title: 'Paper Reading: TeAAL A Declarative Framework for Modeling Sparse Tensor Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-MICRO/teaal-a-declarative-framework-for-modeling-sparse-tensor-acc/";
            },},{id: "paper_reading-paper-reading-tileflow-a-framework-for-modeling-fusion-dataflow-via-tree-based-analysis",
          title: 'Paper Reading: TileFlow A Framework for Modeling Fusion Dataflow via Tree-based Analysis',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-MICRO/tileflow-a-framework-for-modeling-fusion-dataflow-via-tree-b/";
            },},{id: "paper_reading-paper-reading-unico-unified-hardware-software-co-optimization-for-robust-neural-network-acceleration",
          title: 'Paper Reading: UNICO Unified Hardware Software Co-Optimization for Robust Neural Network Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-MICRO/unico-unified-hardware-software-co-optimization-for-robust-n/";
            },},{id: "paper_reading-paper-reading-towards-automated-risc-v-microarchitecture-design-with-reinforcement-learning",
          title: 'Paper Reading: Towards Automated RISC-V Microarchitecture Design with Reinforcement Learning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-AAAI/towards-automated-risc-v-microarchitecture-design-with-reinf/";
            },},{id: "paper_reading-paper-reading-attacc-unleashing-the-power-of-pim-for-batched-transformer-based-generative-model-inference",
          title: 'Paper Reading: AttAcc! Unleashing the Power of PIM for Batched Transformer-based Generative Model...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/attacc-unleashing-the-power-of-pim-for-batched-transformer-b/";
            },},{id: "paper_reading-paper-reading-felix-optimizing-tensor-programs-with-gradient-descent",
          title: 'Paper Reading: Felix Optimizing Tensor Programs with Gradient Descent',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/felix-optimizing-tensor-programs-with-gradient-descent/";
            },},{id: "paper_reading-paper-reading-hida-a-hierarchical-dataflow-compiler-for-high-level-synthesis",
          title: 'Paper Reading: HIDA A Hierarchical Dataflow Compiler for High-Level Synthesis',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/hida-a-hierarchical-dataflow-compiler-for-high-level-synthes/";
            },},{id: "paper_reading-paper-reading-neupims-npu-pim-heterogeneous-acceleration-for-batched-llm-inferencing",
          title: 'Paper Reading: NeuPIMs NPU-PIM Heterogeneous Acceleration for Batched LLM Inferencing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/neupims-npu-pim-heterogeneous-acceleration-for-batched-llm-i/";
            },},{id: "paper_reading-paper-reading-specpim-accelerating-speculative-inference-on-pim-enabled-system-via-architecture-dataflow-co-exploration",
          title: 'Paper Reading: SpecPIM Accelerating Speculative Inference on PIM-Enabled System via Architecture-Dataflow Co-Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/specpim-accelerating-speculative-inference-on-pim-enabled-sy/";
            },},{id: "paper_reading-paper-reading-chatcpu-an-agile-cpu-design-amp-verification-platform-with-llm",
          title: 'Paper Reading: ChatCPU An Agile CPU Design &amp;amp; Verification Platform with LLM',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-DAC/chatcpu-an-agile-cpu-design-verification-platform-with-llm/";
            },},{id: "paper_reading-paper-reading-explainable-fuzzy-neural-network-withmulti-fidelity-reinforcement-learning-for-micro-architecture-design-space-exploration",
          title: 'Paper Reading: Explainable Fuzzy Neural Network withMulti-Fidelity Reinforcement Learning for Micro-Architecture Design Space...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-DAC/explainable-fuzzy-neural-network-withmulti-fidelity-reinforc/";
            },},{id: "paper_reading-paper-reading-hierarchical-power-co-optimization-and-management-for-llm-chiplet-designs",
          title: 'Paper Reading: Hierarchical Power Co-Optimization and Management for LLM Chiplet Designs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ICCAD/hierarchical-power-co-optimization-and-management-for-llm-ch/";
            },},{id: "paper_reading-paper-reading-is-vanilla-bayesian-optimization-enough-for-high-dimensional-architecture-design-optimization",
          title: 'Paper Reading: Is Vanilla Bayesian Optimization Enough for High Dimensional Architecture Design Optimization...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ICCAD/is-vanilla-bayesian-optimization-enough-for-high-dimensional/";
            },},{id: "paper_reading-paper-reading-multi-objective-sw-hw-co-opt-hd-pim-noise-aware-bayesian-opt",
          title: 'Paper Reading: Multi-Objective SW-HW Co-Opt HD-PIM Noise-Aware Bayesian Opt',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ICCAD/multi-objective-sw-hw-co-opt-hd-pim-noise-aware-bayesian-opt/";
            },},{id: "paper_reading-paper-reading-translib-an-extensible-graph-aware-library-framework-for-automated-generation-of-transformer-operators-on-fpga",
          title: 'Paper Reading: TransLib An Extensible Graph-Aware Library Framework for Automated Generation of Transformer...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ICCAD/translib-an-extensible-graph-aware-library-framework-for-aut/";
            },},{id: "paper_reading-paper-reading-a-tale-of-two-domains-exploring-efficient-architecture-design-for-truly-autonomous-things",
          title: 'Paper Reading: A Tale of Two Domains Exploring Efficient Architecture Design for Truly...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/a-tale-of-two-domains-exploring-efficient-architecture-desig/";
            },},{id: "paper_reading-paper-reading-cambricon-d-full-network-differential-acceleration-for-diffusion-models",
          title: 'Paper Reading: Cambricon-D Full-Network Differential Acceleration for Diffusion Models',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/cambricon-d-full-network-differential-acceleration-for-diffu/";
            },},{id: "paper_reading-paper-reading-exploiting-similarity-opportunities-of-emerging-vision-ai-models-on-hybrid-bonding-architecture",
          title: 'Paper Reading: Exploiting Similarity Opportunities of Emerging Vision AI Models on Hybrid Bonding...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/exploiting-similarity-opportunities-of-emerging-vision-ai-mo-3/";
            },},{id: "paper_reading-paper-reading-feather-a-reconfigurable-accelerator-with-data-reordering-support-for-low-cost-on-chip-dataflow-switching",
          title: 'Paper Reading: FEATHER A Reconfigurable Accelerator with Data Reordering Support for Low-Cost On-Chip...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/feather-a-reconfigurable-accelerator-with-data-reordering-su/";
            },},{id: "paper_reading-paper-reading-mind-the-gap-attainable-data-movement-and-operational-intensity-bounds-for-tensor-algorithms",
          title: 'Paper Reading: Mind the Gap Attainable Data Movement and Operational Intensity Bounds for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/mind-the-gap-attainable-data-movement-and-operational-intens/";
            },},{id: "paper_reading-paper-reading-soter-analytical-tensor-architecture-modeling-and-automatic-tensor-program-tuning-for-spatial-accelerators",
          title: 'Paper Reading: Soter Analytical Tensor-Architecture Modeling and Automatic Tensor Program Tuning for Spatial...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/soter-analytical-tensor-architecture-modeling-and-automatic/";
            },},{id: "paper_reading-paper-reading-the-dataflow-abstract-machine-simulator-framework",
          title: 'Paper Reading: The Dataflow Abstract Machine Simulator Framework',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/the-dataflow-abstract-machine-simulator-framework/";
            },},{id: "paper_reading-paper-reading-trapezoid-a-versatile-accelerator-for-dense-and-sparse-matrix-multiplications",
          title: 'Paper Reading: Trapezoid A Versatile Accelerator for Dense and Sparse Matrix Multiplications',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/trapezoid-a-versatile-accelerator-for-dense-and-sparse-matri/";
            },},{id: "paper_reading-paper-reading-fusemax-leveraging-extended-einsums-to-optimize-attention-accelerator-design",
          title: 'Paper Reading: FuseMax Leveraging Extended Einsums to Optimize Attention Accelerator Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-MICRO/fusemax-leveraging-extended-einsums-to-optimize-attention-ac/";
            },},{id: "paper_reading-paper-reading-scar-scheduling-multi-model-ai-workloads-on-heterogeneous-multi-chiplet-module-accelerators",
          title: 'Paper Reading: SCAR Scheduling Multi-Model AI Workloads on Heterogeneous Multi-Chiplet Module Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-MICRO/scar-scheduling-multi-model-ai-workloads-on-heterogeneous-mu/";
            },},{id: "paper_reading-paper-reading-sofa-a-compute-memory-optimized-sparsity-accelerator-via-cross-stage-coordinated-tiling",
          title: 'Paper Reading: SOFA A Compute-Memory Optimized Sparsity Accelerator via Cross-Stage Coordinated Tiling',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-MICRO/sofa-a-compute-memory-optimized-sparsity-accelerator-via-cro/";
            },},{id: "paper_reading-paper-reading-stellar-an-automated-design-framework-for-dense-and-sparse-spatial-accelerators",
          title: 'Paper Reading: Stellar An Automated Design Framework for Dense and Sparse Spatial Accelerators...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-MICRO/stellar-an-automated-design-framework-for-dense-and-sparse-s/";
            },},{id: "paper_reading-paper-reading-roi-hit-region-of-interest-driven-high-dimensional-microarchitecture-design-space-exploration",
          title: 'Paper Reading: ROI-HIT Region of Interest-Driven High-Dimensional Microarchitecture Design Space Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-TCAD/roi-hit-region-of-interest-driven-high-dimensional-microarch/";
            },},{id: "paper_reading-paper-reading-looptree-exploring-the-fused-layer-dataflow-accelerator-design-space",
          title: 'Paper Reading: LoopTree Exploring the Fused-Layer Dataflow Accelerator Design Space',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-TCSA/looptree-exploring-the-fused-layer-dataflow-accelerator-desi/";
            },},{id: "paper_reading-paper-reading-2409-01141v1",
          title: 'Paper Reading: 2409.01141v1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-arXiv/240901141v1/";
            },},{id: "paper_reading-paper-reading-maco",
          title: 'Paper Reading: MACO',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ASPDAC/maco/";
            },},{id: "paper_reading-paper-reading-tl-cse-microarchitecture-compiler-co-design-space-exploration-via-transfer-learning",
          title: 'Paper Reading: TL-CSE Microarchitecture-Compiler Co-design Space Exploration via Transfer Learning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ASPDAC/tl-cse-microarchitecture-compiler-co-design-space-exploratio/";
            },},{id: "paper_reading-paper-reading-using-analytical-performancepower-model-and-fine-grained-dvfs-to-enhance-ai-accelerator-energy-efficiency",
          title: 'Paper Reading: Using Analytical PerformancePower Model and Fine-Grained DVFS to Enhance AI Accelerator...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ASPLOS/using-analytical-performancepower-model-and-fine-grained-dvf/";
            },},{id: "paper_reading-paper-reading-virgo-cluster-level-matrix-unit-integration-in-gpus-for-scalability-and-energy-efficiency",
          title: 'Paper Reading: Virgo - Cluster-level Matrix Unit Integration in GPUs for Scalability and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ASPLOS/virgo---cluster-level-matrix-unit-integration-in-gpus-for-sc/";
            },},{id: "paper_reading-paper-reading-from-flatland-to-forest-exploring-pareto-optimal-design-through-rtl-hierarchy-trees",
          title: 'Paper Reading: From Flatland to Forest Exploring Pareto-optimal Design through RTL Hierarchy Trees...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/from-flatland-to-forest-exploring-pareto-optimal-design-thro/";
            },},{id: "paper_reading-paper-reading-high-performance-computing-architecture-exploration-with-stage-enhanced-bayesian-optimization",
          title: 'Paper Reading: High-Performance Computing Architecture Exploration with Stage-Enhanced Bayesian Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/high-performance-computing-architecture-exploration-with-sta/";
            },},{id: "paper_reading-paper-reading-lemoe-llm-enhanced-multi-objective-bayesian-optimization-for-microarchitecture-exploration",
          title: 'Paper Reading: LEMOE LLM-Enhanced Multi-Objective Bayesian Optimization for Microarchitecture Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/lemoe-llm-enhanced-multi-objective-bayesian-optimization-for/";
            },},{id: "paper_reading-paper-reading-llmshare-optimizing-llm-inference-serving-with-hardware-architecture-exploration",
          title: 'Paper Reading: LLMShare Optimizing LLM Inference Serving with Hardware Architecture Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/llmshare-optimizing-llm-inference-serving-with-hardware-arch/";
            },},{id: "paper_reading-paper-reading-look-before-you-leap-a-self-review-bayesian-optimization-method-for-constrained-high-dimensional-design-space-exploration",
          title: 'Paper Reading: Look Before You Leap A Self-Review Bayesian Optimization Method for Constrained...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/look-before-you-leap-a-self-review-bayesian-optimization-met/";
            },},{id: "paper_reading-paper-reading-swift-or-exact-boosting-efficient-microarchitecture-dse-via-multi-fidelity-partial-order-prediction",
          title: 'Paper Reading: Swift or Exact Boosting Efficient Microarchitecture DSE via Multi-fidelity Partial Order...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/swift-or-exact-boosting-efficient-microarchitecture-dse-via/";
            },},{id: "paper_reading-paper-reading-attentionlib-a-scalable-optimization-framework-for-automated-attention-acceleration-on-fpga",
          title: 'Paper Reading: AttentionLib A Scalable Optimization Framework for Automated Attention Acceleration on FPGA...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DATE/attentionlib-a-scalable-optimization-framework-for-automated/";
            },},{id: "paper_reading-paper-reading-sega-dcim-design-space-exploration-guided-automatic-digital-cim-compiler-with-multiple-precision-support",
          title: 'Paper Reading: SEGA-DCIM Design Space Exploration-Guided Automatic Digital CIM Compiler with Multiple Precision...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DATE/sega-dcim-design-space-exploration-guided-automatic-digital/";
            },},{id: "paper_reading-paper-reading-cadosys-cache-aware-dso-spatial-ml-accelerators",
          title: 'Paper Reading: CADOSys Cache Aware DSO Spatial ML Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-GLSVLSI/cadosys-cache-aware-dso-spatial-ml-accelerators/";
            },},{id: "paper_reading-paper-reading-eda-energy-efficient-inter-layer-model-compilation-for-edge-dnn-inference-acceleration",
          title: 'Paper Reading: EDA Energy-Efficient Inter-Layer Model Compilation for Edge DNN Inference Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-HPCA/eda-energy-efficient-inter-layer-model-compilation-for-edge/";
            },},{id: "paper_reading-paper-reading-exploring-the-performance-improvement-of-tensor-processing-engines-through-transformation-in-the-bit-weight-dimension-of-macs",
          title: 'Paper Reading: Exploring the Performance Improvement of Tensor Processing Engines through Transformation in...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-HPCA/exploring-the-performance-improvement-of-tensor-processing-e/";
            },},{id: "paper_reading-paper-reading-soma-identifying-exploring-and-understanding-the-dram-communication-scheduling-space-for-dnn-accelerators",
          title: 'Paper Reading: SoMa Identifying Exploring and Understanding the DRAM Communication Scheduling Space for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-HPCA/soma-identifying-exploring-and-understanding-the-dram-commun/";
            },},{id: "paper_reading-paper-reading-accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelerators",
          title: 'Paper Reading: AccelStack A Cost-Driven Analysis of 3D-Stacked LLM Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ICCAD/accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelera-2/";
            },},{id: "paper_reading-paper-reading-from-teaal-to-fusemax-separation-of-concerns-for-attention-accelerator-design",
          title: 'Paper Reading: From TeAAL to FuseMax Separation of Concerns for Attention Accelerator Design...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-IEEE/from-teaal-to-fusemax-separation-of-concerns-for-attention-a/";
            },},{id: "paper_reading-paper-reading-aim-software-and-hardware-co-design-for-architecture-level-ir-drop-mitigation-in-high-performance-pim",
          title: 'Paper Reading: AIM Software and Hardware Co-design for Architecture-level IR-drop Mitigation in High-performance...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/aim-software-and-hardware-co-design-for-architecture-level-i/";
            },},{id: "paper_reading-paper-reading-amali-ananalytical-model-for-accurately-modeling-llm-inference-on-modern-gpus",
          title: 'Paper Reading: AMALI AnAnalytical Model for Accurately Modeling LLM Inference on Modern GPUs...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/amali-ananalytical-model-for-accurately-modeling-llm-inferen/";
            },},{id: "paper_reading-paper-reading-atim-autotuning-tensor-programs-for-processing-in-dram",
          title: 'Paper Reading: ATiM Autotuning Tensor Programs for Processing-in-DRAM',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/atim-autotuning-tensor-programs-for-processing-in-dram/";
            },},{id: "paper_reading-paper-reading-cambricon-sr-an-accelerator-for-neural-scene-representation",
          title: 'Paper Reading: Cambricon-SR An Accelerator for Neural Scene Representation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/cambricon-sr-an-accelerator-for-neural-scene-representation/";
            },},{id: "paper_reading-paper-reading-h2-llm-hardware-dataflow-co-exploration-for-heterogeneous",
          title: 'Paper Reading: H2-LLM Hardware-Dataflow Co-Exploration for Heterogeneous',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/h2-llm-hardware-dataflow-co-exploration-for-heterogeneous/";
            },},{id: "paper_reading-paper-reading-heterrag-heterogeneous-processing-in-memory-acceleration-for-retrieval-augmented-generation",
          title: 'Paper Reading: HeterRAG Heterogeneous Processing-in-Memory Acceleration for Retrieval-augmented Generation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/heterrag-heterogeneous-processing-in-memory-acceleration-for/";
            },},{id: "paper_reading-paper-reading-optipim-optimizing-processing-in-memory-acceleration-using-integer-linear-programming",
          title: 'Paper Reading: OptiPIM Optimizing Processing-in-Memory Acceleration Using Integer Linear Programming',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/optipim-optimizing-processing-in-memory-acceleration-using-i/";
            },},{id: "paper_reading-paper-reading-transitive-array-an-efficient-gemm-accelerator-with-result",
          title: 'Paper Reading: Transitive Array An Efficient GEMM Accelerator with Result',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/transitive-array-an-efficient-gemm-accelerator-with-result/";
            },},{id: "paper_reading-paper-reading-wsc-llm-efficient-llm-service-and-architecture-co-exploration-for-wafer-scale-chips",
          title: 'Paper Reading: WSC-LLM Efficient LLM Service and Architecture Co-exploration for Wafer-scale Chips',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/wsc-llm-efficient-llm-service-and-architecture-co-exploratio/";
            },},{id: "paper_reading-paper-reading-physical-design-for-advanced-3d-ics-challenges-and-solutions",
          title: 'Paper Reading: Physical Design for Advanced 3D ICs Challenges and Solutions',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISPD/physical-design-for-advanced-3d-ics-challenges-and-solutions/";
            },},{id: "paper_reading-paper-reading-how-to-keep-pushing-ml-accelerator-performance-know-your-rooflines",
          title: 'Paper Reading: How to Keep Pushing ML Accelerator Performance Know Your Rooflines',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-JSSC/how-to-keep-pushing-ml-accelerator-performance-know-your-roo/";
            },},{id: "paper_reading-paper-reading-crane-inter-layer-scheduling-framework-for-dnn-inference-and-training-co-support-on-tiled-architecture",
          title: 'Paper Reading: Crane Inter-Layer Scheduling Framework for DNN Inference and Training Co-Support on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-MICRO/crane-inter-layer-scheduling-framework-for-dnn-inference-and/";
            },},{id: "paper_reading-paper-reading-elk-exploring-the-efficiency-of-inter-core-connected-ai-chips-with-deep-learning-compiler-techniques",
          title: 'Paper Reading: Elk Exploring the Efficiency of Inter-core Connected AI Chips with Deep...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-MICRO/elk-exploring-the-efficiency-of-inter-core-connected-ai-chip/";
            },},{id: "paper_reading-paper-reading-heat-npu-ndpheterogeneous-architecture-for-transformer-empowered-graph-neural-networks",
          title: 'Paper Reading: HEAT NPU-NDPHEterogeneous Architecture for Transformer-Empowered Graph Neural Networks',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-MICRO/heat-npu-ndpheterogeneous-architecture-for-transformer-empow/";
            },},{id: "paper_reading-paper-reading-streamtensor-make-tensors-stream-in-dataflow-accelerators-for-llms",
          title: 'Paper Reading: StreamTensor Make Tensors Stream in Dataflow Accelerators for LLMs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-MICRO/streamtensor-make-tensors-stream-in-dataflow-accelerators-fo/";
            },},{id: "paper_reading-paper-reading-stream-design-space-exploration-of-layer-fused-dnns-on-heterogeneous-dataflow-accelerators",
          title: 'Paper Reading: Stream Design Space Exploration of Layer-Fused DNNs on Heterogeneous Dataflow Accelerators...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-TC/stream-design-space-exploration-of-layer-fused-dnns-on-heter/";
            },},{id: "paper_reading-paper-reading-apple-dse-asynchronous-parallel-pareto-set-learning-for-microarchitecture-design-space-exploration",
          title: 'Paper Reading: APPLE-DSE Asynchronous Parallel Pareto Set Learning for Microarchitecture Design Space Exploration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-TCAD/apple-dse-asynchronous-parallel-pareto-set-learning-for-micr/";
            },},{id: "paper_reading-paper-reading-prior-boosted-grl-microarchitecture-design-space-exploration-via-graph-representation-learning",
          title: 'Paper Reading: Prior-Boosted GRL Microarchitecture Design Space Exploration via Graph Representation Learning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-TCAD/prior-boosted-grl-microarchitecture-design-space-exploration/";
            },},{id: "paper_reading-paper-reading-2506-16444v2",
          title: 'Paper Reading: 2506.16444v2',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-arXiv/250616444v2/";
            },},{id: "paper_reading-paper-reading-08894429",
          title: 'Paper Reading: 08894429',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/08894429/";
            },},{id: "paper_reading-paper-reading-3613424-3623784",
          title: 'Paper Reading: 3613424.3623784',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36134243623784/";
            },},{id: "paper_reading-paper-reading-3676536-3676798",
          title: 'Paper Reading: 3676536.3676798',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36765363676798/";
            },},{id: "paper_reading-paper-reading-3676641-3716009",
          title: 'Paper Reading: 3676641.3716009',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36766413716009/";
            },},{id: "paper_reading-paper-reading-3676641-3716267",
          title: 'Paper Reading: 3676641.3716267',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36766413716267-2/";
            },},{id: "paper_reading-paper-reading-3676641-3716267",
          title: 'Paper Reading: 3676641.3716267',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36766413716267/";
            },},{id: "paper_reading-paper-reading-3695053-3731041",
          title: 'Paper Reading: 3695053.3731041',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36950533731041-2/";
            },},{id: "paper_reading-paper-reading-3695053-3731041",
          title: 'Paper Reading: 3695053.3731041',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36950533731041/";
            },},{id: "paper_reading-paper-reading-3695053-3731089",
          title: 'Paper Reading: 3695053.3731089',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36950533731089/";
            },},{id: "paper_reading-paper-reading-3695053-3731096",
          title: 'Paper Reading: 3695053.3731096',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36950533731096/";
            },},{id: "paper_reading-paper-reading-3695053-3731111",
          title: 'Paper Reading: 3695053.3731111',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36950533731111/";
            },},{id: "paper_reading-paper-reading-3698364-3709127",
          title: 'Paper Reading: 3698364.3709127',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/36983643709127/";
            },},{id: "paper_reading-paper-reading-3718487",
          title: 'Paper Reading: 3718487',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/3718487/";
            },},{id: "paper_reading-paper-reading-3725843-3756017",
          title: 'Paper Reading: 3725843.3756017',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756017/";
            },},{id: "paper_reading-paper-reading-3725843-3756020",
          title: 'Paper Reading: 3725843.3756020',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756020/";
            },},{id: "paper_reading-paper-reading-3725843-3756034",
          title: 'Paper Reading: 3725843.3756034',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756034/";
            },},{id: "paper_reading-paper-reading-3725843-3756043",
          title: 'Paper Reading: 3725843.3756043',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756043/";
            },},{id: "paper_reading-paper-reading-3725843-3756062",
          title: 'Paper Reading: 3725843.3756062',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756062/";
            },},{id: "paper_reading-paper-reading-3725843-3756071",
          title: 'Paper Reading: 3725843.3756071',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756071/";
            },},{id: "paper_reading-paper-reading-3725843-3756087",
          title: 'Paper Reading: 3725843.3756087',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756087/";
            },},{id: "paper_reading-paper-reading-3725843-3756117",
          title: 'Paper Reading: 3725843.3756117',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756117/";
            },},{id: "paper_reading-paper-reading-3725843-3756121",
          title: 'Paper Reading: 3725843.3756121',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/37258433756121/";
            },},{id: "paper_reading-paper-reading-3d-v-cache-the-implementation-of-a-hybrid-bonded-64mb-stacked-cache-for-a-7nm-x86-64-cpu",
          title: 'Paper Reading: 3D V-Cache the Implementation of a Hybrid-Bonded 64MB Stacked Cache for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/3d-v-cache-the-implementation-of-a-hybrid-bonded-64mb-stacke/";
            },},{id: "paper_reading-paper-reading-978-3-031-01747-6",
          title: 'Paper Reading: 978-3-031-01747-6',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/978-3-031-01747-6/";
            },},{id: "paper_reading-paper-reading-a-1596-gb-s-48-gb-stacked-embedded-dram-384-core-soc-with-hybrid-bonding-integration",
          title: 'Paper Reading: A 1596-GB s 48-Gb Stacked Embedded DRAM 384-Core SoC With Hybrid...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/a-1596-gb-s-48-gb-stacked-embedded-dram-384-core-soc-with-hy/";
            },},{id: "paper_reading-paper-reading-a-stacked-embedded-dram-array-for-lpddr4-4x-using-hybrid-bonding-3d-integration-with-34gb-s-1gb-0-88pj-b-logic-to-memory-interface",
          title: 'Paper Reading: A Stacked Embedded DRAM Array for LPDDR4 4X using Hybrid Bonding...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/a-stacked-embedded-dram-array-for-lpddr4-4x-using-hybrid-bon/";
            },},{id: "paper_reading-paper-reading-active-interposer-technology-for-chiplet-based-advanced-3d-system-architectures",
          title: 'Paper Reading: Active Interposer Technology for Chiplet-Based Advanced 3D System Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/active-interposer-technology-for-chiplet-based-advanced-3d-s/";
            },},{id: "paper_reading-paper-reading-adelia-a-4nm-llm-processor-for-efficient-generative-al-inference",
          title: 'Paper Reading: Adelia A 4nm LLM Processor for Efficient Generative Al Inference',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/adelia-a-4nm-llm-processor-for-efficient-generative-al-infer/";
            },},{id: "paper_reading-paper-reading-bit-separable-transformer-accelerator-leveraging-output-activation-sparsity-for-efficient-dram-access",
          title: 'Paper Reading: Bit-Separable Transformer Accelerator Leveraging Output Activation Sparsity for Efficient DRAM Access...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/bit-separable-transformer-accelerator-leveraging-output-acti/";
            },},{id: "paper_reading-paper-reading-computers-13-00174-v2",
          title: 'Paper Reading: computers-13-00174-v2',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/computers-13-00174-v2/";
            },},{id: "paper_reading-paper-reading-corsairan-in-memory-computing-chipletarchitecture-for-inference-time-compute-acceleration",
          title: 'Paper Reading: CORSAIRAn In-Memory Computing ChipletArchitecture for Inference-Time Compute Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/corsairan-in-memory-computing-chipletarchitecture-for-infere/";
            },},{id: "paper_reading-paper-reading-delivering-the-future-of-high-performance-computing",
          title: 'Paper Reading: Delivering the Future of High-Performance Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/delivering-the-future-of-high-performance-computing/";
            },},{id: "paper_reading-paper-reading-duplex-a-device-for-large-language-models-with-mixture-of-experts-grouped-query-attention-and-continuous-batching",
          title: 'Paper Reading: Duplex A Device for Large Language Models with Mixture of Experts...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/duplex-a-device-for-large-language-models-with-mixture-of-ex/";
            },},{id: "paper_reading-paper-reading-exploiting-similarity-opportunities-of-emerging-vision-ai-models-on-hybrid-bonding-architecture",
          title: 'Paper Reading: Exploiting Similarity Opportunities of Emerging Vision AI Models on Hybrid Bonding...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/exploiting-similarity-opportunities-of-emerging-vision-ai-mo-2/";
            },},{id: "paper_reading-paper-reading-exploiting-similarity-opportunities-of-emerging-vision-ai-models-on-hybrid-bonding-architecture",
          title: 'Paper Reading: Exploiting Similarity Opportunities of Emerging Vision AI Models on Hybrid Bonding...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/exploiting-similarity-opportunities-of-emerging-vision-ai-mo/";
            },},{id: "paper_reading-paper-reading-fcdram",
          title: 'Paper Reading: fcdram',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/fcdram/";
            },},{id: "paper_reading-paper-reading-gemini-mapping-and-architecture-co-exploration-for-large-scale-dnn-chiplet-accelerators",
          title: 'Paper Reading: Gemini Mapping and Architecture Co-exploration for Large-scale DNN Chiplet Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/gemini-mapping-and-architecture-co-exploration-for-large-sca/";
            },},{id: "paper_reading-paper-reading-graphp-reducing-communication-for-pim-based-graph-processing-with-efficient-data-partition",
          title: 'Paper Reading: GraphP Reducing Communication for PIM-Based Graph Processing with Efficient Data Partition...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/graphp-reducing-communication-for-pim-based-graph-processing/";
            },},{id: "paper_reading-paper-reading-keynote1",
          title: 'Paper Reading: keynote1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/keynote1/";
            },},{id: "paper_reading-paper-reading-klima-low-latency-mixed-signal-in-memory-computing-accelerator-for-solving-arbitrary-order-boolean-satisfiability",
          title: 'Paper Reading: KLIMA Low-latency mixed-signal In-Memory Computing accelerator for solving arbitrary-order Boolean Satisfiability...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/klima-low-latency-mixed-signal-in-memory-computing-accelerat/";
            },},{id: "paper_reading-paper-reading-mega-mini-a-npu-with-novel-heterogeneous-ai-processing-architecture-balancing-efficiency-performance-and-intelligence-for-the-era-of-generative-ai",
          title: 'Paper Reading: MEGA.mini A NPU with Novel Heterogeneous AI Processing Architecture Balancing Efficiency...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/megamini-a-npu-with-novel-heterogeneous-ai-processing-archit/";
            },},{id: "paper_reading-paper-reading-mimdram",
          title: 'Paper Reading: mimdram',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/mimdram/";
            },},{id: "paper_reading-paper-reading-modernprimeronpim-springer-emerging-computing-bookchapter21-extended",
          title: 'Paper Reading: ModernPrimerOnPIM springer-emerging-computing-bookchapter21-extended',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/modernprimeronpim-springer-emerging-computing-bookchapter21/";
            },},{id: "paper_reading-paper-reading-multi-chip-technologies-to-unleash-computing-performance-gains-over-the-next-decade",
          title: 'Paper Reading: Multi-chip technologies to unleash computing performance gains over the next decade...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/multi-chip-technologies-to-unleash-computing-performance-gai/";
            },},{id: "paper_reading-paper-reading-onur-digitaldesign-comparch-2022-lecture19c-dae-beforelecture",
          title: 'Paper Reading: onur-digitaldesign comparch-2022-lecture19c-dae-beforelecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/onur-digitaldesign-comparch-2022-lecture19c-dae-beforelectur/";
            },},{id: "paper_reading-paper-reading-onur-seminarincomparch-memorycentriccomputing-25-september-2025-afterlecture",
          title: 'Paper Reading: onur-seminarincomparch-memorycentriccomputing-25-september-2025-afterlecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/onur-seminarincomparch-memorycentriccomputing-25-september-2/";
            },},{id: "paper_reading-paper-reading-pioneering-chiplet-technology-and-design-for-the-amd-epyc-and-ryzen-processor-families-industrial-product",
          title: 'Paper Reading: Pioneering Chiplet Technology and Design for the AMD EPYC and Ryzen...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/pioneering-chiplet-technology-and-design-for-the-amd-epyc-an/";
            },},{id: "paper_reading-paper-reading-samsung-pim-pnm-for-transfmer-based-ai-energy-efficiency-on-pim-pnm-cluster",
          title: 'Paper Reading: Samsung PIM PNM for Transfmer Based AI Energy Efficiency on PIM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/samsung-pim-pnm-for-transfmer-based-ai-energy-efficiency-on/";
            },},{id: "paper_reading-paper-reading-tcad24-sai",
          title: 'Paper Reading: tcad24-sai',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/tcad24-sai/";
            },},{id: "paper_reading-paper-reading-the-true-processing-in-memory-accelerator",
          title: 'Paper Reading: The true Processing In Memory accelerator',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/the-true-processing-in-memory-accelerator/";
            },},{id: "paper_reading-paper-reading-ucie",
          title: 'Paper Reading: UCIe',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/ucie/";
            },},{id: "paper_reading-paper-reading-unindp-a-unified-compilation-and-simulation-tool-for-near-dram-processing-architectures",
          title: 'Paper Reading: UniNDP A Unified Compilation and Simulation Tool for Near DRAM Processing...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/unindp-a-unified-compilation-and-simulation-tool-for-near-dr/";
            },},{id: "paper_reading-paper-reading-zen3-the-amd-2nd-generation-7nm-x86-64-microprocessor-core",
          title: 'Paper Reading: Zen3 The AMD 2nd-Generation 7nm x86-64 Microprocessor Core',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/To_Read/zen3-the-amd-2nd-generation-7nm-x86-64-microprocessor-core/";
            },},{id: "paper_reading-paper-reading-accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelerators",
          title: 'Paper Reading: AccelStack A Cost-Driven Analysis of 3D-Stacked LLM Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelera/";
            },},{id: "paper_reading-paper-reading-2021dac-gemmini",
          title: 'Paper Reading: (2021DAC) Gemmini',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/2021dac-gemmini/";
            },},{id: "paper_reading-paper-reading-2024isca-orojensis-presentation",
          title: 'Paper Reading: 2024ISCA Orojensis Presentation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/2024isca-orojensis-presentation/";
            },},{id: "paper_reading-paper-reading-2024micro-sophgo-bm1684x-a-commercial-high-performance-terminal-ai-processor-with-large-model-support",
          title: 'Paper Reading: (2024MICRO) SOPHGO BM1684X - A Commercial High Performance Terminal AI Processor...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/2024micro-sophgo-bm1684x---a-commercial-high-performance-ter/";
            },},{id: "paper_reading-paper-reading-20250716-amp-0718-rvsc-xsai-以cpu的编程范式支持现代llm核函数",
          title: 'Paper Reading: 20250716&amp;amp;0718-RVSC-XSAI：以CPU的编程范式支持现代LLM核函数',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/202507160718-rvsc-xsaicpullm/";
            },},{id: "paper_reading-paper-reading-2025micro-oasis-a-commercial-high-performance-terminal-ai-processor-supporting-risc-v-tensor-extension-instructions",
          title: 'Paper Reading: (2025MICRO) OASIS - A Commercial High Performance Terminal AI Processor Supporting...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/2025micro-oasis---a-commercial-high-performance-terminal-ai/";
            },},{id: "paper_reading-paper-reading-3453483-3454083",
          title: 'Paper Reading: 3453483.3454083',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/34534833454083/";
            },},{id: "paper_reading-paper-reading-3503222-3507723",
          title: 'Paper Reading: 3503222.3507723',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/35032223507723/";
            },},{id: "paper_reading-paper-reading-3503222-3507767",
          title: 'Paper Reading: 3503222.3507767',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/35032223507767/";
            },},{id: "paper_reading-paper-reading-3649329-3657373",
          title: 'Paper Reading: 3649329.3657373',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/36493293657373/";
            },},{id: "paper_reading-paper-reading-3676536-3676648",
          title: 'Paper Reading: 3676536.3676648',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/36765363676648/";
            },},{id: "paper_reading-paper-reading-airchitect-v2-learning-the-hardware-accelerator-design-space-through-unified-representations",
          title: 'Paper Reading: AIRCHITECT V2 Learning the Hardware Accelerator Design Space through Unified Representations...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/airchitect-v2-learning-the-hardware-accelerator-design-space/";
            },},{id: "paper_reading-paper-reading-deap-dnn-accelerator-parallelism-dse",
          title: 'Paper Reading: DEAP DNN Accelerator Parallelism DSE',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/deap-dnn-accelerator-parallelism-dse/";
            },},{id: "paper_reading-paper-reading-dip-a-scalable-energy-efficient-systolic-array-for-matrix-multiplication-acceleration",
          title: 'Paper Reading: DiP A Scalable Energy-Efficient Systolic Array for Matrix Multiplication Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/dip-a-scalable-energy-efficient-systolic-array-for-matrix-mu/";
            },},{id: "paper_reading-paper-reading-dnnfuser-transformer-as-a-generalized-mapper-for-fusion-in-dnnaccelerators",
          title: 'Paper Reading: DNNFuser Transformer as a Generalized Mapper for Fusion in DNNAccelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/dnnfuser-transformer-as-a-generalized-mapper-for-fusion-in-d/";
            },},{id: "paper_reading-paper-reading-dosa2023-micro-slides",
          title: 'Paper Reading: dosa2023-micro-slides',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/dosa2023-micro-slides/";
            },},{id: "paper_reading-paper-reading-dpuv4e-high-throughput-dpu-architecture-design-for-cnn-on-versal-acap",
          title: 'Paper Reading: DPUV4E High-Throughput DPU Architecture Design for CNN on Versal ACAP',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/dpuv4e-high-throughput-dpu-architecture-design-for-cnn-on-ve/";
            },},{id: "paper_reading-paper-reading-eq-vit-algorithm-hardware-co-design-for-end-to-end-acceleration-of-real-time-vision-transformer-inference-on-versal-acap-architecture",
          title: 'Paper Reading: EQ-ViT Algorithm-Hardware Co-Design for End-to-End Acceleration of Real-Time Vision Transformer Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/eq-vit-algorithm-hardware-co-design-for-end-to-end-accelerat/";
            },},{id: "paper_reading-paper-reading-esfa-an-efficient-scalable-fft-design-framework-on-versal-ai-engine",
          title: 'Paper Reading: ESFA An Efficient Scalable FFT Design Framework on Versal AI Engine...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/esfa-an-efficient-scalable-fft-design-framework-on-versal-ai/";
            },},{id: "paper_reading-paper-reading-extending-silicon-lifetime-a-review-of-design-techniques-for-reliable-integrated-circuits",
          title: 'Paper Reading: Extending Silicon Lifetime A Review of Design Techniques for Reliable Integrated...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/extending-silicon-lifetime-a-review-of-design-techniques-for/";
            },},{id: "paper_reading-paper-reading-eyeriss-v2-a-flexible-accelerator-for-emerging-deep-neural-networks-on-mobile-devices",
          title: 'Paper Reading: Eyeriss v2 A Flexible Accelerator for Emerging Deep Neural Networks on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/eyeriss-v2-a-flexible-accelerator-for-emerging-deep-neural-n/";
            },},{id: "paper_reading-paper-reading-hasco-towards-agile-hardware-and-software-co-design-for-tensor-computation",
          title: 'Paper Reading: HASCO Towards Agile HArdware and Software CO-design for Tensor Computation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/hasco-towards-agile-hardware-and-software-co-design-for-tens/";
            },},{id: "paper_reading-paper-reading-heterosvd-efficient-svd-accelerator-on-versal-acap-with-algorithm-hardware-co-design",
          title: 'Paper Reading: HeteroSVD Efficient SVD Accelerator on Versal ACAP with Algorithm-Hardware Co-Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/heterosvd-efficient-svd-accelerator-on-versal-acap-with-algo/";
            },},{id: "paper_reading-paper-reading-hierarchical-power-co-optimization-and-management-for-llm-chiplet-designs",
          title: 'Paper Reading: Hierarchical Power Co-Optimization and Management for LLM Chiplet Designs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/hierarchical-power-co-optimization-and-management-for-llm-ch-2/";
            },},{id: "paper_reading-paper-reading-high-performance-low-power-matrix-multiply-design-on-acap-from-architecture-design-challenges-and-dse-perspectives",
          title: 'Paper Reading: High Performance Low Power Matrix Multiply Design on ACAP from Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/high-performance-low-power-matrix-multiply-design-on-acap-fr/";
            },},{id: "paper_reading-paper-reading-late-breaking-results-pyaie-a-python-based-programming-framework-for-versal-acap-platforms",
          title: 'Paper Reading: Late Breaking Results PyAIE A Python-based Programming Framework for Versal ACAP...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/late-breaking-results-pyaie-a-python-based-programming-frame/";
            },},{id: "paper_reading-paper-reading-llm-aided-compilation-for-tensor-accelerators",
          title: 'Paper Reading: LLM-Aided Compilation for Tensor Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/llm-aided-compilation-for-tensor-accelerators/";
            },},{id: "paper_reading-paper-reading-maestro-a-data-centric-approach-to-understand-reuse-performance-and-hardware-cost-of-dnn-mappings",
          title: 'Paper Reading: MAESTRO A Data-Centric Approach to Understand Reuse Performance and Hardware Cost...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/maestro-a-data-centric-approach-to-understand-reuse-performa/";
            },},{id: "paper_reading-paper-reading-magnet-a-modular-accelerator-generator-for-neural-networks",
          title: 'Paper Reading: MAGNet A Modular Accelerator Generator for Neural Networks',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/magnet-a-modular-accelerator-generator-for-neural-networks/";
            },},{id: "paper_reading-paper-reading-naas-neural-accelerator-architecture-search",
          title: 'Paper Reading: NAAS Neural Accelerator Architecture Search',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/naas-neural-accelerator-architecture-search/";
            },},{id: "paper_reading-paper-reading-optimized-spatial-architecture-mapping-flow-for",
          title: 'Paper Reading: Optimized Spatial Architecture Mapping Flow for',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/optimized-spatial-architecture-mapping-flow-for/";
            },},{id: "paper_reading-paper-reading-place-iccad2024-wang",
          title: 'Paper Reading: PLACE ICCAD2024 Wang',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/place-iccad2024-wang/";
            },},{id: "paper_reading-paper-reading-polaris-multi-fidelity-design-space-exploration-of-deep-learning-accelerators",
          title: 'Paper Reading: Polaris - Multi-Fidelity Design Space Exploration of Deep Learning Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/polaris---multi-fidelity-design-space-exploration-of-deep-le/";
            },},{id: "paper_reading-paper-reading-spec2rtl-agent",
          title: 'Paper Reading: Spec2RTL-Agent',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/spec2rtl-agent/";
            },},{id: "paper_reading-paper-reading-the-dawn-of-ai-native-eda-opportunities-and-challenges-of-large-circuit-models",
          title: 'Paper Reading: The Dawn of AI-Native EDA Opportunities and Challenges of Large Circuit...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/the-dawn-of-ai-native-eda-opportunities-and-challenges-of-la/";
            },},{id: "paper_reading-paper-reading-the-survey-of-chiplet-based-integrated-architecture-an-eda-perspective",
          title: 'Paper Reading: The Survey of Chiplet-based Integrated Architecture An EDA perspective',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/the-survey-of-chiplet-based-integrated-architecture-an-eda-p/";
            },},{id: "paper_reading-paper-reading-using-shi-2020",
          title: 'Paper Reading: using shi 2020',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/using-shi-2020/";
            },},{id: "paper_reading-paper-reading-vspgemm-exploiting-versal-acap-for-high-performance-spgemm-acceleration",
          title: 'Paper Reading: VSpGEMM Exploiting Versal ACAP for High-Performance SpGEMM Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/vspgemm-exploiting-versal-acap-for-high-performance-spgemm-a/";
            },},{id: "paper_reading-paper-reading-widesa-a-high-array-utilization-mapping-scheme-for-uniform-recurrences-on-acap",
          title: 'Paper Reading: WideSA A High Array Utilization Mapping Scheme for Uniform Recurrences on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Architecture/widesa-a-high-array-utilization-mapping-scheme-for-uniform-r/";
            },},{id: "paper_reading-paper-reading-3597931",
          title: 'Paper Reading: 3597931',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/3597931/";
            },},{id: "paper_reading-paper-reading-3676536-3676746",
          title: 'Paper Reading: 3676536.3676746',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/36765363676746/";
            },},{id: "paper_reading-paper-reading-3676536-3676782",
          title: 'Paper Reading: 3676536.3676782',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/36765363676782/";
            },},{id: "paper_reading-paper-reading-boosting-vlsi-design-flow-parameter-tuning-with-randomembedding-and-multi-objective-trust-region-bayesianoptimization",
          title: 'Paper Reading: Boosting VLSI Design Flow Parameter Tuning with RandomEmbedding and Multi-objective Trust-region...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/boosting-vlsi-design-flow-parameter-tuning-with-randomembedd/";
            },},{id: "paper_reading-paper-reading-data-oblivious-cpu-microarchitectural-side-channel-leakage-resilient-processor",
          title: 'Paper Reading: Data Oblivious CPU Microarchitectural Side-channel Leakage-Resilient Processor',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/data-oblivious-cpu-microarchitectural-side-channel-leakage-r/";
            },},{id: "paper_reading-paper-reading-dual-issue-execution-of-mixed-integer-and-floating-point-workloads-on-energy-efficient-in-order-risc-v-cores",
          title: 'Paper Reading: Dual-Issue Execution of Mixed Integer and Floating-Point Workloads on Energy-Efficient In-Order...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/dual-issue-execution-of-mixed-integer-and-floating-point-wor/";
            },},{id: "paper_reading-paper-reading-gem5-accesys-enabling-system-level-exploration-of-standard-interconnects-for-novel-accelerators",
          title: 'Paper Reading: Gem5-AcceSys Enabling System-Level Exploration of Standard Interconnects for Novel Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/gem5-accesys-enabling-system-level-exploration-of-standard-i/";
            },},{id: "paper_reading-paper-reading-meek-re-thinking-heterogeneous-parallel-error-detection-architecture-for-real-world-ooo-superscalar-processors",
          title: 'Paper Reading: MEEK Re-thinking Heterogeneous Parallel Error Detection Architecture for Real-World OoO Superscalar...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/meek-re-thinking-heterogeneous-parallel-error-detection-arch/";
            },},{id: "paper_reading-paper-reading-neurips-2023-framework-and-benchmarks-for-combinatorial-and-mixed-variable-bayesian-optimization-paper-datasets-and-benchmarks",
          title: 'Paper Reading: NeurIPS-2023-framework-and-benchmarks-for-combinatorial-and-mixed-variable-bayesian-optimization-Paper-Datasets and Benchmarks',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/neurips-2023-framework-and-benchmarks-for-combinatorial-and/";
            },},{id: "paper_reading-paper-reading-on-design-space-exploration-of-cache-system-in-multi-chiplet-systems",
          title: 'Paper Reading: On Design Space Exploration of Cache System in Multi-Chiplet Systems',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/on-design-space-exploration-of-cache-system-in-multi-chiplet/";
            },},{id: "paper_reading-paper-reading-scalable-global-optimization-via-local-bayesian-optimization",
          title: 'Paper Reading: Scalable Global Optimization via Local Bayesian Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/scalable-global-optimization-via-local-bayesian-optimization/";
            },},{id: "paper_reading-paper-reading-c187-iccad2023-klotski",
          title: 'Paper Reading: C187-ICCAD2023-Klotski',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Dataflow_and_Mapping/c187-iccad2023-klotski/";
            },},{id: "paper_reading-paper-reading-klotski-v2-improved-dnn-model-orchestration-framework-for-dataflow-architecture-accelerators",
          title: 'Paper Reading: Klotski v2 Improved DNN Model Orchestration Framework for Dataflow Architecture Accelerators...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Dataflow_and_Mapping/klotski-v2-improved-dnn-model-orchestration-framework-for-da/";
            },},{id: "paper_reading-paper-reading-1978-cmu-cs-report-kung-leiserson",
          title: 'Paper Reading: 1978-cmu-cs-report-kung-leiserson',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Other/1978-cmu-cs-report-kung-leiserson/";
            },},{id: "paper_reading-paper-reading-20250716-amp-0718-rvsc-xsai-以cpu的编程范式支持现代llm核函数",
          title: 'Paper Reading: 20250716&amp;amp;0718-RVSC-XSAI：以CPU的编程范式支持现代LLM核函数',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Other/202507160718-rvsc-xsaicpullm-2/";
            },},{id: "paper_reading-paper-reading-berkeleyview",
          title: 'Paper Reading: BerkeleyView',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Other/berkeleyview/";
            },},{id: "paper_reading-paper-reading-cacm12-why-coherence",
          title: 'Paper Reading: cacm12 why coherence',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Other/cacm12-why-coherence/";
            },},{id: "paper_reading-paper-reading-leiserson-et-al-theres-plenty-of-room-at-the-top",
          title: 'Paper Reading: Leiserson-et-al-Theres-plenty-of-room-at-the-top',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Other/leiserson-et-al-theres-plenty-of-room-at-the-top/";
            },},{id: "paper_reading-paper-reading-ten-lessons-learned-from-ttap",
          title: 'Paper Reading: Ten Lessons Learned from TTAP',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Other/ten-lessons-learned-from-ttap/";
            },},{id: "paper_reading-paper-reading-calculon-a-methodology-and-tool-for-high-level-codesign-of-systems-and-large-language-models",
          title: 'Paper Reading: Calculon a Methodology and Tool for High-Level Codesign of Systems and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/calculon-a-methodology-and-tool-for-high-level-codesign-of-s/";
            },},{id: "paper_reading-paper-reading-cellular-logic-in-memory-arrays",
          title: 'Paper Reading: cellular logic-in-memory arrays',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/cellular-logic-in-memory-arrays/";
            },},{id: "paper_reading-paper-reading-lp-spec-leveraging-lpddr-pim-for-efficient-llm-mobile-speculative-inference-with-architecture-dataflow-co-optimization",
          title: 'Paper Reading: LP-Spec Leveraging LPDDR PIM for Efficient LLM Mobile Speculative Inference with...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/lp-spec-leveraging-lpddr-pim-for-efficient-llm-mobile-specul/";
            },},{id: "paper_reading-paper-reading-mnsim-2-0-a-behavior-level-modeling-tool-for-processing-in-memory-architectures",
          title: 'Paper Reading: MNSIM 2.0 A Behavior-Level Modeling Tool for Processing-In-Memory Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/mnsim-20-a-behavior-level-modeling-tool-for-processing-in-me/";
            },},{id: "paper_reading-paper-reading-modernprimeronpim-springer-emerging-computing-bookchapter21",
          title: 'Paper Reading: ModernPrimerOnPIM springer-emerging-computing-bookchapter21',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/modernprimeronpim-springer-emerging-computing-bookchapter21-2/";
            },},{id: "paper_reading-paper-reading-prim-upmem-tutorial-analysis-benchmarking-safari-live-seminar-2021-07-12-talk",
          title: 'Paper Reading: PrIM-UPMEM-Tutorial-Analysis-Benchmarking-SAFARI-Live-Seminar-2021-07-12-talk',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/prim-upmem-tutorial-analysis-benchmarking-safari-live-semina/";
            },},{id: "paper_reading-paper-reading-processing-in-memory-workload-driven-perspective-ibmjrd19",
          title: 'Paper Reading: processing-in-memory workload-driven-perspective IBMjrd19',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/processing-in-memory-workload-driven-perspective-ibmjrd19/";
            },},{id: "paper_reading-paper-reading-ramulator2-arxiv23",
          title: 'Paper Reading: Ramulator2 arxiv23',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/ramulator2-arxiv23/";
            },},{id: "paper_reading-paper-reading-redcim-reconfigurable-digital-computing-in-memory-processor-with-unified-fp-int-pipeline-for-cloud-ai-acceleration",
          title: 'Paper Reading: ReDCIM Reconfigurable Digital Computing- In -Memory Processor With Unified FP INT...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/redcim-reconfigurable-digital-computing--in--memory-processo/";
            },},{id: "paper_reading-paper-reading-spcim-sparsity-balanced-practical-cim-accelerator-with-optimized-spatial-temporal-multi-macro-utilization",
          title: 'Paper Reading: SPCIM Sparsity-Balanced Practical CIM Accelerator With Optimized Spatial-Temporal Multi-Macro Utilization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/spcim-sparsity-balanced-practical-cim-accelerator-with-optim/";
            },},{id: "paper_reading-paper-reading-stone-logic-in-memory-1970",
          title: 'Paper Reading: stone logic in memory 1970',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/stone-logic-in-memory-1970/";
            },},{id: "paper_reading-paper-reading-trancim-full-digital-bitline-transpose-cim-based-sparse-transformer-accelerator-with-pipeline-parallel-reconfigurable-modes",
          title: 'Paper Reading: TranCIM Full-Digital Bitline-Transpose CIM-based Sparse Transformer Accelerator With Pipeline Parallel Reconfigurable...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-PIM_CIM/trancim-full-digital-bitline-transpose-cim-based-sparse-tran/";
            },},{id: "paper_reading-paper-reading-gaafet-versus-pragmatic-finfet-at-the-5nm-si-based-cmos-technology-node",
          title: 'Paper Reading: GAAFET Versus Pragmatic FinFET at the 5nm Si-Based CMOS Technology Node...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Technology/gaafet-versus-pragmatic-finfet-at-the-5nm-si-based-cmos-tech/";
            },},{id: "paper_reading-paper-reading-intel-18a-platform-technology-featuring-ribbonfet-gaa-and-powervia-for-advanced-high-performance-computing",
          title: 'Paper Reading: Intel 18A Platform Technology Featuring RibbonFET GAA and PowerVia for Advanced...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Technology/intel-18a-platform-technology-featuring-ribbonfet-gaa-and-po/";
            },},{id: "paper_reading-paper-reading-intel-powervia-technology-backside-power-delivery-for-high-density-and-high-performance-computing",
          title: 'Paper Reading: Intel PowerVia Technology Backside Power Delivery for High Density and High-Performance...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Technology/intel-powervia-technology-backside-power-delivery-for-high-d/";
            },},{id: "paper_reading-paper-reading-deeppic-xpu-pim-cluster-architecture-with-adaptive-resource-aware-task-orchestration-for-deepseek-style-moe-inference",
          title: 'Paper Reading: DeepPiC xPU-PIM Cluster Architecture with Adaptive Resource-Aware Task Orchestration for DeepSeek-Style...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ASPDAC/deeppic-xpu-pim-cluster-architecture-with-adaptive-resource/";
            },},{id: "paper_reading-paper-reading-m100-an-orchestrated-dataflow-architecture-powering-general-ai-computing",
          title: 'Paper Reading: M100 An Orchestrated Dataflow Architecture Powering General AI Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/m100-an-orchestrated-dataflow-architecture-powering-general/";
            },},{id: "paper_reading-paper-reading-10-6-a-hybrid-bonded-12-1tops-mm2-5-6-core-dnn-processor-with-2-5tb-s-mm2-3d-network-on-chip",
          title: 'Paper Reading: 10.6 A Hybrid-Bonded 12.1Tops mm2 5 6-Core DNN Processor with 2.5Tb...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISSCC/106-a-hybrid-bonded-121tops-mm2-5-6-core-dnn-processor-with/";
            },},{id: "paper_reading-paper-reading-fast-and-fusiest-an-optimal-fusion-aware-mapper-for-accelerator-design",
          title: 'Paper Reading: Fast and Fusiest An Optimal Fusion Aware Mapper for Accelerator Design...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-MICRO/fast-and-fusiest-an-optimal-fusion-aware-mapper-for-accelera/";
            },},{id: "paper_reading-paper-reading-the-turbo-charged-mapper-fast-and-optimal-mapping-for-energy-efficient-and-low-latency-accelerator-design",
          title: 'Paper Reading: The Turbo Charged Mapper Fast and Optimal Mapping for Energy efficient...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-MICRO/the-turbo-charged-mapper-fast-and-optimal-mapping-for-energy/";
            },},{id: "paper_reading-paper-reading-2603-04797v1",
          title: 'Paper Reading: 2603.04797v1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-arXiv/260304797v1/";
            },},{id: "paper_reading-paper-reading-2603-28793v1",
          title: 'Paper Reading: 2603.28793v1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-arXiv/260328793v1/";
            },},{id: "paper_reading-paper-reading-fast-and-fusiest-an-optimal-fusion-aware-mapper-for-accelerator-design",
          title: 'Paper Reading: Fast and Fusiest: An Optimal Fusion-Aware Mapper for Accelerator Design',
          description: "One-sentence summary of the paper and why it matters.",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/paper-reading-template/";
            },},{id: "projects-golden-apple-corelet",
          title: 'Golden Apple Corelet',
          description: "A compact, in-order RISC-V microarchitecture optimized for embedded systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
