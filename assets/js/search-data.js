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
          description: "Notes and interpretations of research papers, organized by year/venue and topic.",
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
            },},{id: "paper_reading-1978-cmu-cs-report-systolic-arrays-for-vlsi",
          title: '(1978 CMU CS Report) Systolic Arrays (for VLSI)',
          description: "The seminal paper introducing systolic arrays - a foundational concept for all modern DNN accelerators",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/1978-cmu-cs-report-kung-leiserson/";
            },},{id: "paper_reading-2001-iccad-system-level-exploration-for-pareto-optimal-configurations-in-parameterized-systems-on-a-chip",
          title: '(2001 ICCAD) System-level exploration for Pareto-optimal configurations in parameterized systems-on-a-chip',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2001-ICCAD/system-level-exploration-for-pareto-optimal-configurations-i/";
            },},{id: "paper_reading-2002-codes-multi-objective-design-space-exploration-using-genetic-algorithms",
          title: '(2002 CODES) Multi-objective design space exploration using genetic algorithms',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2002-CODES/multi-objective-design-space-exploration-using-genetic-algor/";
            },},{id: "paper_reading-2006-ibm-j-res-dev-three-dimensional-integrated-circuits",
          title: '(2006 IBM J. Res. Dev.) Three-dimensional integrated circuits',
          description: "IBM&#39;s pioneering work on 3D IC fabrication using layer transfer, oxide fusion bonding, and high-aspect-ratio inter-layer vias",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2006-IBM/three-dimensional-integrated-circuits/";
            },},{id: "paper_reading-2006-micro-die-stacking-3d-microarchitecture",
          title: '(2006 MICRO) Die Stacking (3D) Microarchitecture',
          description: "Intel&#39;s exploration of 3D die stacking for Memory+Logic and Logic+Logic configurations, showing simultaneous power reduction and performance gain",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2006-MICRO/die-stacking-3d-microarchitecture/";
            },},{id: "paper_reading-2006-uc-berkeley-eecs-tr-the-landscape-of-parallel-computing-research-a-view-from-berkeley",
          title: '(2006 UC Berkeley EECS TR) The Landscape of Parallel Computing Research - A...',
          description: "Influential Berkeley report proposing the &#39;13 Dwarfs&#39; of parallel computing and arguing for a new approach to parallel hardware/software design",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/berkeleyview/";
            },},{id: "paper_reading-2007-ieee-micro-processor-design-in-3d-die-stacking-technologies",
          title: '(2007 IEEE Micro) Processor Design in 3D Die-Stacking Technologies',
          description: "Overview of processor design opportunities and challenges enabled by 3D die stacking technology",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2007-IEEE/processor-design-in-3d-die-stacking-technologies/";
            },},{id: "paper_reading-2007-isca-a-novel-dimensionally-decomposed-router-for-on-chip-communication-in-3d-architectures",
          title: '(2007 ISCA) A Novel Dimensionally-Decomposed Router for On-Chip Communication in 3D Architectures',
          description: "DimDe router decomposes 3D NoC traffic into X/Y/Z dimensions, achieving near-full-crossbar performance with dramatically reduced complexity",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2007-ISCA/a-novel-dimensionally-decomposed-router-for-on-chip-communic/";
            },},{id: "paper_reading-2008-isca-3d-stacked-memory-architectures-for-multi-core-processors",
          title: '(2008 ISCA) 3D-Stacked Memory Architectures for Multi-Core Processors',
          description: "Proposes aggressive 3D DRAM organizations achieving 1.75× speedup over prior 3D-DRAM approaches, plus a novel Vector Bloom Filter for scalable MSHR",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2008-ISCA/3d-stacked-memory-architectures-for-multi-core-processors/";
            },},{id: "paper_reading-2010-isca-debunking-the-100x-gpu-vs-cpu-myth-an-evaluation-of-throughput-computing-on-cpu-and-gpu",
          title: '(2010 ISCA) Debunking the 100X GPU vs CPU Myth - An Evaluation of...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2010-ISCA/debunking-the-100x-gpu-vs-cpu-myth---an-evaluation-of-throug/";
            },},{id: "paper_reading-2010-tcad-decision-theoretic-design-space-exploration-of-multiprocessor-platforms",
          title: '(2010 TCAD) Decision-Theoretic Design Space Exploration of Multiprocessor Platforms',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2010-TCAD/decision-theoretic-design-space-exploration-of-multiprocesso/";
            },},{id: "paper_reading-2010-tcad-design-space-exploration-acceleration-through-operation-clustering",
          title: '(2010 TCAD) Design Space Exploration Acceleration Through Operation Clustering',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2010-TCAD/design-space-exploration-acceleration-through-operation-clus/";
            },},{id: "paper_reading-2012-cacm-why-on-chip-cache-coherence-is-here-to-stay",
          title: '(2012 CACM) Why On-Chip Cache Coherence Is Here to Stay',
          description: "Argues that hardware cache coherence scales gracefully and should remain the default for multi-core processors",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory_Systems/cacm12-why-coherence/";
            },},{id: "paper_reading-2014-isscc-1-1-computings-energy-problem-and-what-we-can-do-about-it",
          title: '(2014 ISSCC) 1.1 Computings energy problem and what we can do about it...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2014-ISSCC/11-computings-energy-problem-and-what-we-can-do-about-it/";
            },},{id: "paper_reading-2015-isca-shidiannao-shifting-vision-processing-closer-to-the-sensor",
          title: '(2015 ISCA) ShiDianNao Shifting vision processing closer to the sensor',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2015-ISCA/shidiannao-shifting-vision-processing-closer-to-the-sensor/";
            },},{id: "paper_reading-2017-isca-in-datacenter-performance-analysis-of-a-tensor-processing-unit",
          title: '(2017 ISCA) In-Datacenter Performance Analysis of a Tensor Processing Unit',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2017-ISCA/in-datacenter-performance-analysis-of-a-tensor-processing-un/";
            },},{id: "paper_reading-2017-ispd-asap7-predictive-design-kit-development-and-cell-design-technology-co-optimization-invited-paper",
          title: '(2017 ISPD) ASAP7 predictive design kit development and cell design technology co-optimization Invited...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2017-ISPD/asap7-predictive-design-kit-development-and-cell-design-tech/";
            },},{id: "paper_reading-2017-isscc-14-5-envision-a-0-26-to-10tops-w-subword-parallel-dynamic-voltage-accuracy-frequency-scalable-convolutional-neural-network-processor-in-28nm-fdsoi",
          title: '(2017 ISSCC) 14.5 Envision A 0.26-to-10TOPS W subword-parallel dynamic-voltage-accuracy-frequency-scalable Convolutional Neural Network processor...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2017-ISSCC/145-envision-a-026-to-10tops-w-subword-parallel-dynamic-volt/";
            },},{id: "paper_reading-2017-tcad-tsv-based-3-d-ics-design-methods-and-tools",
          title: '(2017 TCAD) TSV-Based 3-D ICs: Design Methods and Tools',
          description: "Comprehensive survey of EDA challenges for TSV-based 3D ICs covering partitioning, placement, thermal, PDN, signal integrity, and reliability",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2017-TCAD/tsv-based-3-d-ics-design-methods-and-tools/";
            },},{id: "paper_reading-2017-ieee-jeds-gaafet-versus-pragmatic-finfet-at-the-5nm-si-based-cmos-technology-node",
          title: '(2017 IEEE JEDS) GAAFET Versus Pragmatic FinFET at the 5nm Si-Based CMOS Technology...',
          description: "TCAD comparison of GAA nanosheet vs scaled FinFET at 5nm, showing GAA advantages in electrostatics but FinFET remains competitive",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Technology/gaafet-versus-pragmatic-finfet-at-the-5nm-si-based-cmos-tech/";
            },},{id: "paper_reading-2019-iccad-accelergy-an-architecture-level-energy-estimation-methodology-for-accelerator-designs",
          title: '(2019 ICCAD) Accelergy An Architecture-Level Energy Estimation Methodology for Accelerator Designs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-ICCAD/accelergy-an-architecture-level-energy-estimation-methodolog/";
            },},{id: "paper_reading-2019-ispass-timeloop-a-systematic-approach-to-dnn-accelerator-evaluation",
          title: '(2019 ISPASS) Timeloop A Systematic Approach to DNN Accelerator Evaluation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-ISPASS/timeloop-a-systematic-approach-to-dnn-accelerator-evaluation/";
            },},{id: "paper_reading-2019-jssc-a-64-tile-2-4-mb-in-memory-computing-cnn-accelerator-employing-charge-domain-compute",
          title: '(2019 JSSC) A 64-Tile 2.4-Mb In-Memory-Computing CNN Accelerator Employing Charge-Domain Compute',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-JSSC/a-64-tile-24-mb-in-memory-computing-cnn-accelerator-employin/";
            },},{id: "paper_reading-2019-mascots-hypermapper-a-practical-design-space-exploration-framework",
          title: '(2019 MASCOTS) HyperMapper a Practical Design Space Exploration Framework',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-MASCOTS/hypermapper-a-practical-design-space-exploration-framework/";
            },},{id: "paper_reading-2019-micro-understanding-reuse-performance-and-hardware-cost-of-dnn-dataflows-a-data-centric-approach-using-maestro",
          title: '(2019 MICRO) Understanding Reuse, Performance, and Hardware Cost of DNN Dataflows A Data-Centric...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2019-MICRO/understanding-reuse-performance-and-hardware-cost-of-dnn-dat/";
            },},{id: "paper_reading-2020-asplos-interstellar-using-halide-s-scheduling-language-to-analyze-dnn-accelerators",
          title: '(2020 ASPLOS) Interstellar Using Halide’s Scheduling Language to Analyze DNN Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2020-ASPLOS/interstellar-using-halides-scheduling-language-to-analyze-dn/";
            },},{id: "paper_reading-2020-cacm-a-domain-specific-supercomputer-for-training-deep-neural-networks-tpuv2",
          title: '(2020 CACM) A Domain Specific Supercomputer for Training Deep Neural Networks (TPUv2)',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2020-CACM/a-domain-specific-supercomputer-for-training-deep-neural-net/";
            },},{id: "paper_reading-2020-hpca-a-deep-reinforcement-learning-framework-for-architectural-exploration-a-routerless-noc-case-study",
          title: '(2020 HPCA) A Deep Reinforcement Learning Framework for Architectural Exploration A Routerless NoC...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2020-HPCA/a-deep-reinforcement-learning-framework-for-architectural-ex/";
            },},{id: "paper_reading-2020-science-there-39-s-plenty-of-room-at-the-top",
          title: '(2020 Science) There&amp;#39;s Plenty of Room at the Top',
          description: "Argues that post-Moore&#39;s-Law performance gains will come from software, algorithms, and hardware specialization rather than transistor scaling",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/leiserson-et-al-theres-plenty-of-room-at-the-top/";
            },},{id: "paper_reading-2021-cicc-a-22-nm-1540-top-s-w-12-1-top-s-mm2-in-memory-analog-matrix-vector-multiplier-for-dnn-acceleration",
          title: '(2021 CICC) A 22 nm 1540 TOP s W 12.1 TOP s mm2...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-CICC/a-22-nm-1540-top-s-w-121-top-s-mm2-in-memory-analog-matrix-v/";
            },},{id: "paper_reading-2021-dac-tensorlib-a-spatial-accelerator-generation-framework-for-tensor-algebra",
          title: '(2021 DAC) TensorLib A Spatial Accelerator Generation Framework for Tensor Algebra',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-DAC/tensorlib-a-spatial-accelerator-generation-framework-for-ten/";
            },},{id: "paper_reading-2021-iccad-boom-explorer-risc-v-boom-microarchitecture-design-space-exploration-framework",
          title: '(2021 ICCAD) BOOM-Explorer RISC-V BOOM Microarchitecture Design Space Exploration Framework',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-ICCAD/boom-explorer-risc-v-boom-microarchitecture-design-space-exp/";
            },},{id: "paper_reading-2021-ieee-mico-the-design-process-for-googles-training-chips-tpuv2-and-tpuv3",
          title: '(2021 IEEE Mico) The Design Process for Googles Training Chips TPUv2 and TPUv3...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-IEEE/the-design-process-for-googles-training-chips-tpuv2-and-tpuv/";
            },},{id: "paper_reading-2021-isca-hardware-architecture-and-software-stack-for-pim-based-on-commercial-dram-technology-industrial-product",
          title: '(2021 ISCA) Hardware Architecture and Software Stack for PIM Based on Commercial DRAM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-ISCA/hardware-architecture-and-software-stack-for-pim-based-on-co/";
            },},{id: "paper_reading-2021-isca-ten-lessons-from-three-generations-shaped-googles-tpuv4i-industrial-product",
          title: '(2021 ISCA) Ten Lessons From Three Generations Shaped Googles TPUv4i Industrial Product',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-ISCA/ten-lessons-from-three-generations-shaped-googles-tpuv4i-ind/";
            },},{id: "paper_reading-2021-arxiv-2102-01723v1",
          title: '(2021 arXiv) 2102.01723v1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2021-arXiv/210201723v1/";
            },},{id: "paper_reading-2021-asplos-dnnfusion-accelerating-dnn-execution-with-advanced-operator-fusion",
          title: '(2021 ASPLOS) DNNFusion - Accelerating DNN Execution with Advanced Operator Fusion',
          description: "Compiler technique for aggressive operator fusion in DNN inference, reducing memory traffic on mobile/edge devices",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler_and_Software/34534833454083/";
            },},{id: "paper_reading-2022-dac-hammer-a-modular-and-reusable-physical-design-flow-tool",
          title: '(2022 DAC) Hammer A Modular and Reusable Physical Design Flow Tool',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-DAC/hammer-a-modular-and-reusable-physical-design-flow-tool/";
            },},{id: "paper_reading-2022-dac-invited-scalehls-a-scalable-high-level-synthesis-framework-with-multi-level-transformations-and-optimizations",
          title: '(2022 DAC) Invited ScaleHLS a Scalable High-Level Synthesis Framework with Multi-level Transformations and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-DAC/invited-scalehls-a-scalable-high-level-synthesis-framework-w/";
            },},{id: "paper_reading-2022-date-digamma-domain-aware-genetic-algorithm-for-hw-mapping-co-optimization-for-dnn-accelerators",
          title: '(2022 DATE) DiGamma Domain-aware Genetic Algorithm for HW-Mapping Co-optimization for DNN Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-DATE/digamma-domain-aware-genetic-algorithm-for-hw-mapping-co-opt/";
            },},{id: "paper_reading-2022-hpca-scalehls-a-new-scalable-high-level-synthesis-framework-on-multi-level-intermediate-representation",
          title: '(2022 HPCA) ScaleHLS A New Scalable High-Level Synthesis Framework on Multi-Level Intermediate Representation...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-HPCA/scalehls-a-new-scalable-high-level-synthesis-framework-on-mu/";
            },},{id: "paper_reading-2022-iclr-data-driven-offline-optimization-for-architecting-hardware-accelerators",
          title: '(2022 ICLR) DATA-DRIVEN OFFLINE OPTIMIZATION FOR ARCHITECTING HARDWARE ACCELERATORS',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-ICLR/data-driven-offline-optimization-for-architecting-hardware-a/";
            },},{id: "paper_reading-2022-ieee-micro-aquabolt-xl-hbm2-pim-lpddr5-pim-with-in-memory-processing-and-axdimm-with-acceleration-buffer",
          title: '(2022 IEEE Micro) Aquabolt-XL HBM2-PIM LPDDR5-PIM With In-Memory Processing and AXDIMM With Acceleration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-IEEE/aquabolt-xl-hbm2-pim-lpddr5-pim-with-in-memory-processing-an/";
            },},{id: "paper_reading-2022-ispass-learning-a-continuous-and-reconstructible-latent-space-for-hardware-accelerator-design",
          title: '(2022 ISPASS) Learning A Continuous and Reconstructible Latent Space for Hardware Accelerator Design...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-ISPASS/learning-a-continuous-and-reconstructible-latent-space-for-h/";
            },},{id: "paper_reading-2022-isscc-184qps-w-64mb-mm23d-logic-to-dram-hybrid-bonding-with-process-near-memory-engine-for-recommendation-system",
          title: '(2022 ISSCC) 184QPS W 64Mb mm23D Logic-to-DRAM Hybrid Bonding with Process-Near-Memory Engine for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-ISSCC/184qps-w-64mb-mm23d-logic-to-dram-hybrid-bonding-with-proces/";
            },},{id: "paper_reading-2022-isscc-a-1ynm-1-25v-8gb-16gb-s-pin-gddr6-based-accelerator-in-memory-supporting-1tflops-mac-operation-and-various-activation-functions-for-deep-learning-applications",
          title: '(2022 ISSCC) A 1ynm 1.25V 8Gb 16Gb s pin GDDR6-based Accelerator-in-Memory supporting 1TFLOPS...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2022-ISSCC/a-1ynm-125v-8gb-16gb-s-pin-gddr6-based-accelerator-in-memory/";
            },},{id: "paper_reading-2022-asplos-astitch-multi-dimensional-optimization-for-memory-intensive-ml-on-simt",
          title: '(2022 ASPLOS) AStitch - Multi-dimensional Optimization for Memory-Intensive ML on SIMT',
          description: "A compiler framework enabling cross-operator fusion and multi-dimensional tiling for memory-intensive ML workloads on GPUs",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler_and_Software/35032223507723/";
            },},{id: "paper_reading-2022-eth-lecture-decoupled-access-execute-dae-architecture",
          title: '(2022 ETH Lecture) Decoupled Access-Execute (DAE) Architecture',
          description: "Onur Mutlu&#39;s lecture on Decoupled Access-Execute architecture - separating memory access from computation for latency tolerance",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/onur-digitaldesign-comparch-2022-lecture19c-dae-beforelectur/";
            },},{id: "paper_reading-2023-asplos-fla-anoptimizeddataflowformitigatingattentionbottlenecks",
          title: '(2023 ASPLOS) FLA：AnOptimizedDataflowforMitigatingAttentionBottlenecks',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ASPLOS/flaanoptimizeddataflowformitigatingattentionbottlenecks/";
            },},{id: "paper_reading-2023-dac-graph-representation-learning-for-microarchitecture-design-space-exploration-final",
          title: '(2023 DAC) Graph Representation Learning for Microarchitecture Design Space Exploration - final',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-DAC/graph-representation-learning-for-microarchitecture-design-s-2/";
            },},{id: "paper_reading-2023-dac-graph-representation-learning-for-microarchitecture-design-space-exploration",
          title: '(2023 DAC) Graph Representation Learning for Microarchitecture Design Space Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-DAC/graph-representation-learning-for-microarchitecture-design-s/";
            },},{id: "paper_reading-2023-fpga-charm-composing-heterogeneous-accelerators-for-matrix-multiply-on-versal-acap-architecture",
          title: '(2023 FPGA) CHARM Composing Heterogeneous AcceleRators for Matrix Multiply on Versal ACAP Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-FPGA/charm-composing-heterogeneous-accelerators-for-matrix-multip/";
            },},{id: "paper_reading-2023-hpca-defines-enabling-fast-exploration-of-the-depth-first-scheduling-space-for-dnn-accelerators-through-analytical-modeling",
          title: '(2023 HPCA) DeFiNES Enabling Fast Exploration of the Depth-first Scheduling Space for DNN...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-HPCA/defines-enabling-fast-exploration-of-the-depth-first-schedul/";
            },},{id: "paper_reading-2023-hpca-isosceles-accelerating-sparse-cnns-through-inter-layer-pipelining",
          title: '(2023 HPCA) ISOSceles Accelerating Sparse CNNs through Inter-Layer Pipelining',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-HPCA/isosceles-accelerating-sparse-cnns-through-inter-layer-pipel/";
            },},{id: "paper_reading-2023-hpca-leveraging-domain-information-for-the-efficient-automated-design-of-deep-learning-accelerators",
          title: '(2023 HPCA) Leveraging Domain Information for the Efficient Automated Design of Deep Learning...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-HPCA/leveraging-domain-information-for-the-efficient-automated-de/";
            },},{id: "paper_reading-2023-iccad-ares-a-mapping-framework-of-dnns-towards-diverse-pims-with-general-abstractions",
          title: '(2023 ICCAD) ARES A Mapping Framework of DNNs Towards Diverse PIMs with General...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ICCAD/ares-a-mapping-framework-of-dnns-towards-diverse-pims-with-g/";
            },},{id: "paper_reading-2023-isca-archgym-an-open-source-gymnasium-for-machine-learning-assisted-architecture-design",
          title: '(2023 ISCA) ArchGym An Open-Source Gymnasium for Machine Learning Assisted Architecture Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISCA/archgym-an-open-source-gymnasium-for-machine-learning-assist/";
            },},{id: "paper_reading-2023-isca-tpuv4",
          title: '(2023 ISCA) TPUv4',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISCA/tpuv4/";
            },},{id: "paper_reading-2023-islped-a-comparative-study-on-front-side-buried-and-back-side-power-rail-topologies-in-3nm-technology-node",
          title: '(2023 ISLPED) A Comparative Study on Front Side Buried and Back Side Power...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISLPED/a-comparative-study-on-front-side-buried-and-back-side-power/";
            },},{id: "paper_reading-2023-ispass-looptree-enabling-exploration-of-fused-layer-dataflow-accelerators",
          title: '(2023 ISPASS) LoopTree Enabling Exploration of Fused-layer Dataflow Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISPASS/looptree-enabling-exploration-of-fused-layer-dataflow-accele/";
            },},{id: "paper_reading-2023-isscc-16-7-a-40-310tops-w-sram-based-all-digital-up-to-4b-in-memory-computing-multi-tiled-nn-accelerator-in-fd-soi-18nm-for-deep-learning-edge-applications",
          title: '(2023 ISSCC) 16.7 A 40-310TOPS W SRAM-Based All-Digital Up to 4b In-Memory Computing...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-ISSCC/167-a-40-310tops-w-sram-based-all-digital-up-to-4b-in-memory/";
            },},{id: "paper_reading-2023-jssc-a-charge-domain-sram-compute-in-memory-macro-with-c-2c-ladder-based-8-bit-mac-unit-in-22-nm-finfet-process-for-edge-inference",
          title: '(2023 JSSC) A Charge Domain SRAM Compute-in-Memory Macro With C-2C Ladder-Based 8-Bit MAC...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-JSSC/a-charge-domain-sram-compute-in-memory-macro-with-c-2c-ladde/";
            },},{id: "paper_reading-2023-micro-dosa-differentiable-model-based-one-loop-search-for-dnn-accelerators",
          title: '(2023 Micro) DOSA Differentiable Model-Based One Loop Search for DNN Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-MICRO/dosa-differentiable-model-based-one-loop-search-for-dnn-acce/";
            },},{id: "paper_reading-2023-micro-teaal-a-declarative-framework-for-modeling-sparse-tensor-accelerators",
          title: '(2023 MICRO) TeAAL A Declarative Framework for Modeling Sparse Tensor Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-MICRO/teaal-a-declarative-framework-for-modeling-sparse-tensor-acc/";
            },},{id: "paper_reading-2023-micro-tileflow-a-framework-for-modeling-fusion-dataflow-via-tree-based-analysis",
          title: '(2023 MICRO) TileFlow A Framework for Modeling Fusion Dataflow via Tree-based Analysis',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-MICRO/tileflow-a-framework-for-modeling-fusion-dataflow-via-tree-b/";
            },},{id: "paper_reading-2023-micro-unico-unified-hardware-software-co-optimization-for-robust-neural-network-acceleration",
          title: '(2023 MICRO) UNICO Unified Hardware Software Co-Optimization for Robust Neural Network Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2023-MICRO/unico-unified-hardware-software-co-optimization-for-robust-n/";
            },},{id: "paper_reading-2024-aaai-towards-automated-risc-v-microarchitecture-design-with-reinforcement-learning",
          title: '(2024 AAAI) Towards Automated RISC-V Microarchitecture Design with Reinforcement Learning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-AAAI/towards-automated-risc-v-microarchitecture-design-with-reinf/";
            },},{id: "paper_reading-2024-asplos-attacc-unleashing-the-power-of-pim-for-batched-transformer-based-generative-model-inference",
          title: '(2024 ASPLOS) AttAcc! Unleashing the Power of PIM for Batched Transformer-based Generative Model...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/attacc-unleashing-the-power-of-pim-for-batched-transformer-b/";
            },},{id: "paper_reading-2024-asplos-felix-optimizing-tensor-programs-with-gradient-descent",
          title: '(2024 ASPLOS) Felix Optimizing Tensor Programs with Gradient Descent',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/felix-optimizing-tensor-programs-with-gradient-descent/";
            },},{id: "paper_reading-2024-asplos-hida-a-hierarchical-dataflow-compiler-for-high-level-synthesis",
          title: '(2024 ASPLOS) HIDA A Hierarchical Dataflow Compiler for High-Level Synthesis',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/hida-a-hierarchical-dataflow-compiler-for-high-level-synthes/";
            },},{id: "paper_reading-2024-asplos-neupims-npu-pim-heterogeneous-acceleration-for-batched-llm-inferencing",
          title: '(2024 ASPLOS) NeuPIMs NPU-PIM Heterogeneous Acceleration for Batched LLM Inferencing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/neupims-npu-pim-heterogeneous-acceleration-for-batched-llm-i/";
            },},{id: "paper_reading-2024-asplos-specpim-accelerating-speculative-inference-on-pim-enabled-system-via-architecture-dataflow-co-exploration",
          title: '(2024 ASPLOS) SpecPIM Accelerating Speculative Inference on PIM-Enabled System via Architecture-Dataflow Co-Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ASPLOS/specpim-accelerating-speculative-inference-on-pim-enabled-sy/";
            },},{id: "paper_reading-2024-dac-chatcpu-an-agile-cpu-design-amp-verification-platform-with-llm",
          title: '(2024 DAC) ChatCPU An Agile CPU Design &amp;amp; Verification Platform with LLM',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-DAC/chatcpu-an-agile-cpu-design-verification-platform-with-llm/";
            },},{id: "paper_reading-2024-dac-explainable-fuzzy-neural-network-withmulti-fidelity-reinforcement-learning-for-micro-architecture-design-space-exploration",
          title: '(2024 DAC) Explainable Fuzzy Neural Network withMulti-Fidelity Reinforcement Learning for Micro-Architecture Design Space...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-DAC/explainable-fuzzy-neural-network-withmulti-fidelity-reinforc/";
            },},{id: "paper_reading-2024-iccad-is-vanilla-bayesian-optimization-enough-for-high-dimensional-architecture-design-optimization",
          title: '(2024 ICCAD) Is Vanilla Bayesian Optimization Enough for High Dimensional Architecture Design Optimization...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ICCAD/is-vanilla-bayesian-optimization-enough-for-high-dimensional/";
            },},{id: "paper_reading-2024-iccad-multi-objective-sw-hw-co-opt-hd-pim-noise-aware-bayesian-opt",
          title: '(2024 ICCAD) Multi-Objective SW-HW Co-Opt HD-PIM Noise-Aware Bayesian Opt',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ICCAD/multi-objective-sw-hw-co-opt-hd-pim-noise-aware-bayesian-opt/";
            },},{id: "paper_reading-2024-iccad-translib-an-extensible-graph-aware-library-framework-for-automated-generation-of-transformer-operators-on-fpga",
          title: '(2024 ICCAD) TransLib An Extensible Graph-Aware Library Framework for Automated Generation of Transformer...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ICCAD/translib-an-extensible-graph-aware-library-framework-for-aut/";
            },},{id: "paper_reading-2024-isca-a-tale-of-two-domains-exploring-efficient-architecture-design-for-truly-autonomous-things",
          title: '(2024 ISCA) A Tale of Two Domains Exploring Efficient Architecture Design for Truly...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/a-tale-of-two-domains-exploring-efficient-architecture-desig/";
            },},{id: "paper_reading-2024-isca-cambricon-d-full-network-differential-acceleration-for-diffusion-models",
          title: '(2024 ISCA) Cambricon-D Full-Network Differential Acceleration for Diffusion Models',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/cambricon-d-full-network-differential-acceleration-for-diffu/";
            },},{id: "paper_reading-2024-isca-exploiting-similarity-opportunities-of-emerging-vision-ai-models-on-hybrid-bonding-architecture",
          title: '(2024 ISCA) Exploiting Similarity Opportunities of Emerging Vision AI Models on Hybrid Bonding...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/exploiting-similarity-opportunities-of-emerging-vision-ai-mo-3/";
            },},{id: "paper_reading-2024-isca-feather-a-reconfigurable-accelerator-with-data-reordering-support-for-low-cost-on-chip-dataflow-switching",
          title: '(2024 ISCA) FEATHER A Reconfigurable Accelerator with Data Reordering Support for Low-Cost On-Chip...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/feather-a-reconfigurable-accelerator-with-data-reordering-su/";
            },},{id: "paper_reading-2024-isca-mind-the-gap-attainable-data-movement-and-operational-intensity-bounds-for-tensor-algorithms",
          title: '(2024 ISCA) Mind the Gap Attainable Data Movement and Operational Intensity Bounds for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/mind-the-gap-attainable-data-movement-and-operational-intens/";
            },},{id: "paper_reading-2024-isca-soter-analytical-tensor-architecture-modeling-and-automatic-tensor-program-tuning-for-spatial-accelerators",
          title: '(2024 ISCA) Soter Analytical Tensor-Architecture Modeling and Automatic Tensor Program Tuning for Spatial...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/soter-analytical-tensor-architecture-modeling-and-automatic/";
            },},{id: "paper_reading-2024-isca-the-dataflow-abstract-machine-simulator-framework",
          title: '(2024 ISCA) The Dataflow Abstract Machine Simulator Framework',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/the-dataflow-abstract-machine-simulator-framework/";
            },},{id: "paper_reading-2024-isca-trapezoid-a-versatile-accelerator-for-dense-and-sparse-matrix-multiplications",
          title: '(2024 ISCA) Trapezoid A Versatile Accelerator for Dense and Sparse Matrix Multiplications',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-ISCA/trapezoid-a-versatile-accelerator-for-dense-and-sparse-matri/";
            },},{id: "paper_reading-2024-micro-fusemax-leveraging-extended-einsums-to-optimize-attention-accelerator-design",
          title: '(2024 MICRO) FuseMax Leveraging Extended Einsums to Optimize Attention Accelerator Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-MICRO/fusemax-leveraging-extended-einsums-to-optimize-attention-ac/";
            },},{id: "paper_reading-2024-micro-scar-scheduling-multi-model-ai-workloads-on-heterogeneous-multi-chiplet-module-accelerators",
          title: '(2024 Micro) SCAR Scheduling Multi-Model AI Workloads on Heterogeneous Multi-Chiplet Module Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-MICRO/scar-scheduling-multi-model-ai-workloads-on-heterogeneous-mu/";
            },},{id: "paper_reading-2024-micro-sofa-a-compute-memory-optimized-sparsity-accelerator-via-cross-stage-coordinated-tiling",
          title: '(2024 MICRO) SOFA A Compute-Memory Optimized Sparsity Accelerator via Cross-Stage Coordinated Tiling',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-MICRO/sofa-a-compute-memory-optimized-sparsity-accelerator-via-cro/";
            },},{id: "paper_reading-2024-micro-stellar-an-automated-design-framework-for-dense-and-sparse-spatial-accelerators",
          title: '(2024 Micro) Stellar An Automated Design Framework for Dense and Sparse Spatial Accelerators...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-MICRO/stellar-an-automated-design-framework-for-dense-and-sparse-s/";
            },},{id: "paper_reading-2024-tcad-roi-hit-region-of-interest-driven-high-dimensional-microarchitecture-design-space-exploration",
          title: '(2024 TCAD) ROI-HIT Region of Interest-Driven High-Dimensional Microarchitecture Design Space Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-TCAD/roi-hit-region-of-interest-driven-high-dimensional-microarch/";
            },},{id: "paper_reading-2024-tcsa-looptree-exploring-the-fused-layer-dataflow-accelerator-design-space",
          title: '(2024 TCSA) LoopTree Exploring the Fused-Layer Dataflow Accelerator Design Space',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-TCSA/looptree-exploring-the-fused-layer-dataflow-accelerator-desi/";
            },},{id: "paper_reading-2024-arxiv-2409-01141v1",
          title: '(2024 arXiv) 2409.01141v1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2024-arXiv/240901141v1/";
            },},{id: "paper_reading-2024-iccad-hierarchical-power-co-optimization-and-management-for-llm-chiplet-designs",
          title: '(2024 ICCAD) Hierarchical Power Co-Optimization and Management for LLM Chiplet Designs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/hierarchical-power-co-optimization-and-management-for-llm-ch/";
            },},{id: "paper_reading-2025-aspdac-maco",
          title: '(2025 ASPDAC) MACO',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ASPDAC/maco/";
            },},{id: "paper_reading-2025-aspdac-tl-cse-microarchitecture-compiler-co-design-space-exploration-via-transfer-learning",
          title: '(2025 ASPDAC) TL-CSE Microarchitecture-Compiler Co-design Space Exploration via Transfer Learning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ASPDAC/tl-cse-microarchitecture-compiler-co-design-space-exploratio/";
            },},{id: "paper_reading-2025-asplos-using-analytical-performancepower-model-and-fine-grained-dvfs-to-enhance-ai-accelerator-energy-efficiency",
          title: '(2025 ASPLOS) Using Analytical PerformancePower Model and Fine-Grained DVFS to Enhance AI Accelerator...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ASPLOS/using-analytical-performancepower-model-and-fine-grained-dvf/";
            },},{id: "paper_reading-2025-asplos-virgo-cluster-level-matrix-unit-integration-in-gpus-for-scalability-and-energy-efficiency",
          title: '(2025 ASPLOS) Virgo - Cluster-level Matrix Unit Integration in GPUs for Scalability and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ASPLOS/virgo---cluster-level-matrix-unit-integration-in-gpus-for-sc/";
            },},{id: "paper_reading-2025-dac-from-flatland-to-forest-exploring-pareto-optimal-design-through-rtl-hierarchy-trees",
          title: '(2025 DAC) From Flatland to Forest Exploring Pareto-optimal Design through RTL Hierarchy Trees...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/from-flatland-to-forest-exploring-pareto-optimal-design-thro/";
            },},{id: "paper_reading-2025-dac-high-performance-computing-architecture-exploration-with-stage-enhanced-bayesian-optimization",
          title: '(2025 DAC) High-Performance Computing Architecture Exploration with Stage-Enhanced Bayesian Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/high-performance-computing-architecture-exploration-with-sta/";
            },},{id: "paper_reading-2025-dac-lemoe-llm-enhanced-multi-objective-bayesian-optimization-for-microarchitecture-exploration",
          title: '(2025 DAC) LEMOE LLM-Enhanced Multi-Objective Bayesian Optimization for Microarchitecture Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/lemoe-llm-enhanced-multi-objective-bayesian-optimization-for/";
            },},{id: "paper_reading-2025-dac-llmshare-optimizing-llm-inference-serving-with-hardware-architecture-exploration",
          title: '(2025 DAC) LLMShare Optimizing LLM Inference Serving with Hardware Architecture Exploration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/llmshare-optimizing-llm-inference-serving-with-hardware-arch/";
            },},{id: "paper_reading-2025-dac-look-before-you-leap-a-self-review-bayesian-optimization-method-for-constrained-high-dimensional-design-space-exploration",
          title: '(2025 DAC) Look Before You Leap A Self-Review Bayesian Optimization Method for Constrained...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/look-before-you-leap-a-self-review-bayesian-optimization-met/";
            },},{id: "paper_reading-2025-dac-swift-or-exact-boosting-efficient-microarchitecture-dse-via-multi-fidelity-partial-order-prediction",
          title: '(2025 DAC) Swift or Exact Boosting Efficient Microarchitecture DSE via Multi-fidelity Partial Order...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DAC/swift-or-exact-boosting-efficient-microarchitecture-dse-via/";
            },},{id: "paper_reading-2025-date-attentionlib-a-scalable-optimization-framework-for-automated-attention-acceleration-on-fpga",
          title: '(2025 DATE) AttentionLib A Scalable Optimization Framework for Automated Attention Acceleration on FPGA...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DATE/attentionlib-a-scalable-optimization-framework-for-automated/";
            },},{id: "paper_reading-2025-date-sega-dcim-design-space-exploration-guided-automatic-digital-cim-compiler-with-multiple-precision-support",
          title: '(2025 DATE) SEGA-DCIM Design Space Exploration-Guided Automatic Digital CIM Compiler with Multiple Precision...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-DATE/sega-dcim-design-space-exploration-guided-automatic-digital/";
            },},{id: "paper_reading-2025-glsvlsi-cadosys-cache-aware-dso-spatial-ml-accelerators",
          title: '(2025 GLSVLSI) CADOSys Cache Aware DSO Spatial ML Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-GLSVLSI/cadosys-cache-aware-dso-spatial-ml-accelerators/";
            },},{id: "paper_reading-2025-hpca-eda-energy-efficient-inter-layer-model-compilation-for-edge-dnn-inference-acceleration",
          title: '(2025 HPCA) EDA Energy-Efficient Inter-Layer Model Compilation for Edge DNN Inference Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-HPCA/eda-energy-efficient-inter-layer-model-compilation-for-edge/";
            },},{id: "paper_reading-2025-hpca-exploring-the-performance-improvement-of-tensor-processing-engines-through-transformation-in-the-bit-weight-dimension-of-macs",
          title: '(2025 HPCA) Exploring the Performance Improvement of Tensor Processing Engines through Transformation in...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-HPCA/exploring-the-performance-improvement-of-tensor-processing-e/";
            },},{id: "paper_reading-2025-hpca-soma-identifying-exploring-and-understanding-the-dram-communication-scheduling-space-for-dnn-accelerators",
          title: '(2025 HPCA) SoMa Identifying Exploring and Understanding the DRAM Communication Scheduling Space for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-HPCA/soma-identifying-exploring-and-understanding-the-dram-commun/";
            },},{id: "paper_reading-2025-iccad-accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelerators",
          title: '(2025 ICCAD) AccelStack A Cost-Driven Analysis of 3D-Stacked LLM Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ICCAD/accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelera-2/";
            },},{id: "paper_reading-2025-ieee-micro-from-teaal-to-fusemax-separation-of-concerns-for-attention-accelerator-design",
          title: '(2025 IEEE micro) From TeAAL to FuseMax Separation of Concerns for Attention Accelerator...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-IEEE/from-teaal-to-fusemax-separation-of-concerns-for-attention-a/";
            },},{id: "paper_reading-2025-isca-aim-software-and-hardware-co-design-for-architecture-level-ir-drop-mitigation-in-high-performance-pim",
          title: '(2025 ISCA) AIM Software and Hardware Co-design for Architecture-level IR-drop Mitigation in High-performance...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/aim-software-and-hardware-co-design-for-architecture-level-i/";
            },},{id: "paper_reading-2025-isca-amali-ananalytical-model-for-accurately-modeling-llm-inference-on-modern-gpus",
          title: '(2025 ISCA) AMALI AnAnalytical Model for Accurately Modeling LLM Inference on Modern GPUs...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/amali-ananalytical-model-for-accurately-modeling-llm-inferen/";
            },},{id: "paper_reading-2025-isca-atim-autotuning-tensor-programs-for-processing-in-dram",
          title: '(2025 ISCA) ATiM Autotuning Tensor Programs for Processing-in-DRAM',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/atim-autotuning-tensor-programs-for-processing-in-dram/";
            },},{id: "paper_reading-2025-isca-cambricon-sr-an-accelerator-for-neural-scene-representation",
          title: '(2025 ISCA) Cambricon-SR An Accelerator for Neural Scene Representation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/cambricon-sr-an-accelerator-for-neural-scene-representation/";
            },},{id: "paper_reading-2025-isca-h2-llm-hardware-dataflow-co-exploration-for-heterogeneous",
          title: '(2025 ISCA) H2-LLM Hardware-Dataflow Co-Exploration for Heterogeneous',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/h2-llm-hardware-dataflow-co-exploration-for-heterogeneous/";
            },},{id: "paper_reading-2025-isca-heterrag-heterogeneous-processing-in-memory-acceleration-for-retrieval-augmented-generation",
          title: '(2025 ISCA) HeterRAG Heterogeneous Processing-in-Memory Acceleration for Retrieval-augmented Generation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/heterrag-heterogeneous-processing-in-memory-acceleration-for/";
            },},{id: "paper_reading-2025-isca-optipim-optimizing-processing-in-memory-acceleration-using-integer-linear-programming",
          title: '(2025 ISCA) OptiPIM Optimizing Processing-in-Memory Acceleration Using Integer Linear Programming',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/optipim-optimizing-processing-in-memory-acceleration-using-i/";
            },},{id: "paper_reading-2025-isca-transitive-array-an-efficient-gemm-accelerator-with-result",
          title: '(2025 ISCA) Transitive Array An Efficient GEMM Accelerator with Result',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/transitive-array-an-efficient-gemm-accelerator-with-result/";
            },},{id: "paper_reading-2025-isca-wsc-llm-efficient-llm-service-and-architecture-co-exploration-for-wafer-scale-chips",
          title: '(2025 ISCA) WSC-LLM Efficient LLM Service and Architecture Co-exploration for Wafer-scale Chips',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISCA/wsc-llm-efficient-llm-service-and-architecture-co-exploratio/";
            },},{id: "paper_reading-2025-ispd-physical-design-for-advanced-3d-ics-challenges-and-solutions",
          title: '(2025 ISPD) Physical Design for Advanced 3D ICs: Challenges and Solutions',
          description: "Survey of physical design challenges for hybrid-bonding and monolithic 3D ICs, covering partitioning, PDN, placement, clock delivery, and routing",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-ISPD/physical-design-for-advanced-3d-ics-challenges-and-solutions/";
            },},{id: "paper_reading-2025-jssc-how-to-keep-pushing-ml-accelerator-performance-know-your-rooflines",
          title: '(2025 JSSC) How to Keep Pushing ML Accelerator Performance Know Your Rooflines',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-JSSC/how-to-keep-pushing-ml-accelerator-performance-know-your-roo/";
            },},{id: "paper_reading-2025-micro-crane-inter-layer-scheduling-framework-for-dnn-inference-and-training-co-support-on-tiled-architecture",
          title: '(2025 MICRO) Crane Inter-Layer Scheduling Framework for DNN Inference and Training Co-Support on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-MICRO/crane-inter-layer-scheduling-framework-for-dnn-inference-and/";
            },},{id: "paper_reading-2025-micro-elk-exploring-the-efficiency-of-inter-core-connected-ai-chips-with-deep-learning-compiler-techniques",
          title: '(2025 MICRO) Elk Exploring the Efficiency of Inter-core Connected AI Chips with Deep...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-MICRO/elk-exploring-the-efficiency-of-inter-core-connected-ai-chip/";
            },},{id: "paper_reading-2025-micro-heat-npu-ndpheterogeneous-architecture-for-transformer-empowered-graph-neural-networks",
          title: '(2025 MICRO) HEAT NPU-NDPHEterogeneous Architecture for Transformer-Empowered Graph Neural Networks',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-MICRO/heat-npu-ndpheterogeneous-architecture-for-transformer-empow/";
            },},{id: "paper_reading-2025-micro-streamtensor-make-tensors-stream-in-dataflow-accelerators-for-llms",
          title: '(2025 MICRO) StreamTensor Make Tensors Stream in Dataflow Accelerators for LLMs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-MICRO/streamtensor-make-tensors-stream-in-dataflow-accelerators-fo/";
            },},{id: "paper_reading-2025-tc-stream-design-space-exploration-of-layer-fused-dnns-on-heterogeneous-dataflow-accelerators",
          title: '(2025 TC) Stream Design Space Exploration of Layer-Fused DNNs on Heterogeneous Dataflow Accelerators...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-TC/stream-design-space-exploration-of-layer-fused-dnns-on-heter/";
            },},{id: "paper_reading-2025-tcad-apple-dse-asynchronous-parallel-pareto-set-learning-for-microarchitecture-design-space-exploration",
          title: '(2025 TCAD) APPLE-DSE Asynchronous Parallel Pareto Set Learning for Microarchitecture Design Space Exploration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-TCAD/apple-dse-asynchronous-parallel-pareto-set-learning-for-micr/";
            },},{id: "paper_reading-2025-tcad-prior-boosted-grl-microarchitecture-design-space-exploration-via-graph-representation-learning",
          title: '(2025 TCAD) Prior-Boosted GRL Microarchitecture Design Space Exploration via Graph Representation Learning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-TCAD/prior-boosted-grl-microarchitecture-design-space-exploration/";
            },},{id: "paper_reading-2025-arxiv-2506-16444v2",
          title: '(2025 arXiv) 2506.16444v2',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2025-arXiv/250616444v2/";
            },},{id: "paper_reading-2025-3d-v-cache-the-implementation-of-a-hybrid-bonded-64mb-stacked-cache-for-a-7nm-x86-64-cpu",
          title: '(2025) 3D V-Cache the Implementation of a Hybrid-Bonded 64MB Stacked Cache for a...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/3d-v-cache-the-implementation-of-a-hybrid-bonded-64mb-stacke/";
            },},{id: "paper_reading-2025-978-3-031-01747-6",
          title: '(2025) 978-3-031-01747-6',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/978-3-031-01747-6/";
            },},{id: "paper_reading-2025-a-1596-gb-s-48-gb-stacked-embedded-dram-384-core-soc-with-hybrid-bonding-integration",
          title: '(2025) A 1596-GB s 48-Gb Stacked Embedded DRAM 384-Core SoC With Hybrid Bonding...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/a-1596-gb-s-48-gb-stacked-embedded-dram-384-core-soc-with-hy/";
            },},{id: "paper_reading-2025-a-stacked-embedded-dram-array-for-lpddr4-4x-using-hybrid-bonding-3d-integration-with-34gb-s-1gb-0-88pj-b-logic-to-memory-interface",
          title: '(2025) A Stacked Embedded DRAM Array for LPDDR4 4X using Hybrid Bonding 3D...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/a-stacked-embedded-dram-array-for-lpddr4-4x-using-hybrid-bon/";
            },},{id: "paper_reading-2025-iccad-accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelerators",
          title: '(2025 ICCAD) AccelStack - A Cost-Driven Analysis of 3D-Stacked LLM Accelerators',
          description: "Cost-driven analysis framework for 3D-stacked LLM accelerators covering performance model and manufacturing cost for DoD/DoW/WoW hybrid bonding",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelera/";
            },},{id: "paper_reading-2025-active-interposer-technology-for-chiplet-based-advanced-3d-system-architectures",
          title: '(2025) Active Interposer Technology for Chiplet-Based Advanced 3D System Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/active-interposer-technology-for-chiplet-based-advanced-3d-s/";
            },},{id: "paper_reading-2025-exploiting-similarity-opportunities-of-emerging-vision-ai-models-on-hybrid-bonding-architecture",
          title: '(2025) Exploiting Similarity Opportunities of Emerging Vision AI Models on Hybrid Bonding Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/exploiting-similarity-opportunities-of-emerging-vision-ai-mo-2/";
            },},{id: "paper_reading-2025-exploiting-similarity-opportunities-of-emerging-vision-ai-models-on-hybrid-bonding-architecture",
          title: '(2025) Exploiting Similarity Opportunities of Emerging Vision AI Models on Hybrid Bonding Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/exploiting-similarity-opportunities-of-emerging-vision-ai-mo/";
            },},{id: "paper_reading-2025-hierarchical-power-co-optimization-and-management-for-llm-chiplet-designs",
          title: '(2025) Hierarchical Power Co-Optimization and Management for LLM Chiplet Designs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/hierarchical-power-co-optimization-and-management-for-llm-ch-2/";
            },},{id: "paper_reading-2025-keynote1",
          title: '(2025) keynote1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/keynote1/";
            },},{id: "paper_reading-2025-multi-chip-technologies-to-unleash-computing-performance-gains-over-the-next-decade",
          title: '(2025) Multi-chip technologies to unleash computing performance gains over the next decade',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/multi-chip-technologies-to-unleash-computing-performance-gai/";
            },},{id: "paper_reading-2025-pioneering-chiplet-technology-and-design-for-the-amd-epyc-and-ryzen-processor-families-industrial-product",
          title: '(2025) Pioneering Chiplet Technology and Design for the AMD EPYC and Ryzen Processor...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/pioneering-chiplet-technology-and-design-for-the-amd-epyc-an/";
            },},{id: "paper_reading-2025-the-survey-of-chiplet-based-integrated-architecture-an-eda-perspective",
          title: '(2025) The Survey of Chiplet-based Integrated Architecture An EDA perspective',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/the-survey-of-chiplet-based-integrated-architecture-an-eda-p/";
            },},{id: "paper_reading-2025-ucie",
          title: '(2025) UCIe',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC_and_Packaging/ucie/";
            },},{id: "paper_reading-2025-2021dac-gemmini",
          title: '(2025) (2021DAC) Gemmini',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/2021dac-gemmini/";
            },},{id: "paper_reading-2025-2024isca-orojensis-presentation",
          title: '(2025) 2024ISCA Orojensis Presentation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/2024isca-orojensis-presentation/";
            },},{id: "paper_reading-2025-2024micro-sophgo-bm1684x-a-commercial-high-performance-terminal-ai-processor-with-large-model-support",
          title: '(2025) (2024MICRO) SOPHGO BM1684X - A Commercial High Performance Terminal AI Processor with...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/2024micro-sophgo-bm1684x---a-commercial-high-performance-ter/";
            },},{id: "paper_reading-2025-2025micro-oasis-a-commercial-high-performance-terminal-ai-processor-supporting-risc-v-tensor-extension-instructions",
          title: '(2025) (2025MICRO) OASIS - A Commercial High Performance Terminal AI Processor Supporting RISC-V...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/2025micro-oasis---a-commercial-high-performance-terminal-ai/";
            },},{id: "paper_reading-2025-3613424-3623784",
          title: '(2025) 3613424.3623784',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/36134243623784/";
            },},{id: "paper_reading-2025-3649329-3657373",
          title: '(2025) 3649329.3657373',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/36493293657373/";
            },},{id: "paper_reading-2025-3676536-3676798",
          title: '(2025) 3676536.3676798',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/36765363676798/";
            },},{id: "paper_reading-2025-3695053-3731041",
          title: '(2025) 3695053.3731041',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/36950533731041-2/";
            },},{id: "paper_reading-2025-3695053-3731041",
          title: '(2025) 3695053.3731041',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/36950533731041/";
            },},{id: "paper_reading-2025-3695053-3731096",
          title: '(2025) 3695053.3731096',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/36950533731096/";
            },},{id: "paper_reading-2025-3725843-3756017",
          title: '(2025) 3725843.3756017',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/37258433756017/";
            },},{id: "paper_reading-2025-3725843-3756034",
          title: '(2025) 3725843.3756034',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/37258433756034/";
            },},{id: "paper_reading-2025-3725843-3756087",
          title: '(2025) 3725843.3756087',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/37258433756087/";
            },},{id: "paper_reading-2025-bit-separable-transformer-accelerator-leveraging-output-activation-sparsity-for-efficient-dram-access",
          title: '(2025) Bit-Separable Transformer Accelerator Leveraging Output Activation Sparsity for Efficient DRAM Access',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/bit-separable-transformer-accelerator-leveraging-output-acti/";
            },},{id: "paper_reading-2025-cellular-logic-in-memory-arrays",
          title: '(2025) cellular logic-in-memory arrays',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/cellular-logic-in-memory-arrays/";
            },},{id: "paper_reading-2025-corsairan-in-memory-computing-chipletarchitecture-for-inference-time-compute-acceleration",
          title: '(2025) CORSAIRAn In-Memory Computing ChipletArchitecture for Inference-Time Compute Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/corsairan-in-memory-computing-chipletarchitecture-for-infere/";
            },},{id: "paper_reading-2025-dip-a-scalable-energy-efficient-systolic-array-for-matrix-multiplication-acceleration",
          title: '(2025) DiP A Scalable Energy-Efficient Systolic Array for Matrix Multiplication Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/dip-a-scalable-energy-efficient-systolic-array-for-matrix-mu/";
            },},{id: "paper_reading-2025-eyeriss-v2-a-flexible-accelerator-for-emerging-deep-neural-networks-on-mobile-devices",
          title: '(2025) Eyeriss v2 A Flexible Accelerator for Emerging Deep Neural Networks on Mobile...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/eyeriss-v2-a-flexible-accelerator-for-emerging-deep-neural-n/";
            },},{id: "paper_reading-2025-fcdram",
          title: '(2025) fcdram',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/fcdram/";
            },},{id: "paper_reading-2025-graphp-reducing-communication-for-pim-based-graph-processing-with-efficient-data-partition",
          title: '(2025) GraphP Reducing Communication for PIM-Based Graph Processing with Efficient Data Partition',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/graphp-reducing-communication-for-pim-based-graph-processing/";
            },},{id: "paper_reading-2025-klima-low-latency-mixed-signal-in-memory-computing-accelerator-for-solving-arbitrary-order-boolean-satisfiability",
          title: '(2025) KLIMA Low-latency mixed-signal In-Memory Computing accelerator for solving arbitrary-order Boolean Satisfiability',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/klima-low-latency-mixed-signal-in-memory-computing-accelerat/";
            },},{id: "paper_reading-2025-mimdram",
          title: '(2025) mimdram',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/mimdram/";
            },},{id: "paper_reading-2025-redcim-reconfigurable-digital-computing-in-memory-processor-with-unified-fp-int-pipeline-for-cloud-ai-acceleration",
          title: '(2025) ReDCIM Reconfigurable Digital Computing- In -Memory Processor With Unified FP INT Pipeline...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/redcim-reconfigurable-digital-computing--in--memory-processo/";
            },},{id: "paper_reading-2025-samsung-pim-pnm-for-transfmer-based-ai-energy-efficiency-on-pim-pnm-cluster",
          title: '(2025) Samsung PIM PNM for Transfmer Based AI Energy Efficiency on PIM PNM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/samsung-pim-pnm-for-transfmer-based-ai-energy-efficiency-on/";
            },},{id: "paper_reading-2025-spcim-sparsity-balanced-practical-cim-accelerator-with-optimized-spatial-temporal-multi-macro-utilization",
          title: '(2025) SPCIM Sparsity-Balanced Practical CIM Accelerator With Optimized Spatial-Temporal Multi-Macro Utilization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/spcim-sparsity-balanced-practical-cim-accelerator-with-optim/";
            },},{id: "paper_reading-2025-stone-logic-in-memory-1970",
          title: '(2025) stone logic in memory 1970',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/stone-logic-in-memory-1970/";
            },},{id: "paper_reading-2025-the-true-processing-in-memory-accelerator",
          title: '(2025) The true Processing In Memory accelerator',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/the-true-processing-in-memory-accelerator/";
            },},{id: "paper_reading-2025-trancim-full-digital-bitline-transpose-cim-based-sparse-transformer-accelerator-with-pipeline-parallel-reconfigurable-modes",
          title: '(2025) TranCIM Full-Digital Bitline-Transpose CIM-based Sparse Transformer Accelerator With Pipeline Parallel Reconfigurable Modes...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/trancim-full-digital-bitline-transpose-cim-based-sparse-tran/";
            },},{id: "paper_reading-2025-using-shi-2020",
          title: '(2025) using shi 2020',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator_Design/using-shi-2020/";
            },},{id: "paper_reading-2025-3503222-3507767",
          title: '(2025) 3503222.3507767',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/35032223507767/";
            },},{id: "paper_reading-2025-3597931",
          title: '(2025) 3597931',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/3597931/";
            },},{id: "paper_reading-2025-3676536-3676746",
          title: '(2025) 3676536.3676746',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/36765363676746/";
            },},{id: "paper_reading-2025-3676536-3676782",
          title: '(2025) 3676536.3676782',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/36765363676782/";
            },},{id: "paper_reading-2025-airchitect-v2-learning-the-hardware-accelerator-design-space-through-unified-representations",
          title: '(2025) AIRCHITECT V2 Learning the Hardware Accelerator Design Space through Unified Representations',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/airchitect-v2-learning-the-hardware-accelerator-design-space/";
            },},{id: "paper_reading-2025-boosting-vlsi-design-flow-parameter-tuning-with-randomembedding-and-multi-objective-trust-region-bayesianoptimization",
          title: '(2025) Boosting VLSI Design Flow Parameter Tuning with RandomEmbedding and Multi-objective Trust-region BayesianOptimization...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/boosting-vlsi-design-flow-parameter-tuning-with-randomembedd/";
            },},{id: "paper_reading-2025-c187-iccad2023-klotski",
          title: '(2025) C187-ICCAD2023-Klotski',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/c187-iccad2023-klotski/";
            },},{id: "paper_reading-2025-deap-dnn-accelerator-parallelism-dse",
          title: '(2025) DEAP DNN Accelerator Parallelism DSE',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/deap-dnn-accelerator-parallelism-dse/";
            },},{id: "paper_reading-2025-dnnfuser-transformer-as-a-generalized-mapper-for-fusion-in-dnnaccelerators",
          title: '(2025) DNNFuser Transformer as a Generalized Mapper for Fusion in DNNAccelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/dnnfuser-transformer-as-a-generalized-mapper-for-fusion-in-d/";
            },},{id: "paper_reading-2025-dosa2023-micro-slides",
          title: '(2025) dosa2023-micro-slides',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/dosa2023-micro-slides/";
            },},{id: "paper_reading-2025-gem5-accesys-enabling-system-level-exploration-of-standard-interconnects-for-novel-accelerators",
          title: '(2025) Gem5-AcceSys Enabling System-Level Exploration of Standard Interconnects for Novel Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/gem5-accesys-enabling-system-level-exploration-of-standard-i/";
            },},{id: "paper_reading-2025-gemini-mapping-and-architecture-co-exploration-for-large-scale-dnn-chiplet-accelerators",
          title: '(2025) Gemini Mapping and Architecture Co-exploration for Large-scale DNN Chiplet Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/gemini-mapping-and-architecture-co-exploration-for-large-sca/";
            },},{id: "paper_reading-2025-klotski-v2-improved-dnn-model-orchestration-framework-for-dataflow-architecture-accelerators",
          title: '(2025) Klotski v2 Improved DNN Model Orchestration Framework for Dataflow Architecture Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/klotski-v2-improved-dnn-model-orchestration-framework-for-da/";
            },},{id: "paper_reading-2025-maestro-a-data-centric-approach-to-understand-reuse-performance-and-hardware-cost-of-dnn-mappings",
          title: '(2025) MAESTRO A Data-Centric Approach to Understand Reuse Performance and Hardware Cost of...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/maestro-a-data-centric-approach-to-understand-reuse-performa/";
            },},{id: "paper_reading-2025-magnet-a-modular-accelerator-generator-for-neural-networks",
          title: '(2025) MAGNet A Modular Accelerator Generator for Neural Networks',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/magnet-a-modular-accelerator-generator-for-neural-networks/";
            },},{id: "paper_reading-2025-mnsim-2-0-a-behavior-level-modeling-tool-for-processing-in-memory-architectures",
          title: '(2025) MNSIM 2.0 A Behavior-Level Modeling Tool for Processing-In-Memory Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/mnsim-20-a-behavior-level-modeling-tool-for-processing-in-me/";
            },},{id: "paper_reading-2025-naas-neural-accelerator-architecture-search",
          title: '(2025) NAAS Neural Accelerator Architecture Search',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/naas-neural-accelerator-architecture-search/";
            },},{id: "paper_reading-2025-neurips-2023-framework-and-benchmarks-for-combinatorial-and-mixed-variable-bayesian-optimization-paper-datasets-and-benchmarks",
          title: '(2025) NeurIPS-2023-framework-and-benchmarks-for-combinatorial-and-mixed-variable-bayesian-optimization-Paper-Datasets and Benchmarks',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/neurips-2023-framework-and-benchmarks-for-combinatorial-and/";
            },},{id: "paper_reading-2025-on-design-space-exploration-of-cache-system-in-multi-chiplet-systems",
          title: '(2025) On Design Space Exploration of Cache System in Multi-Chiplet Systems',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/on-design-space-exploration-of-cache-system-in-multi-chiplet/";
            },},{id: "paper_reading-2025-optimized-spatial-architecture-mapping-flow-for",
          title: '(2025) Optimized Spatial Architecture Mapping Flow for',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/optimized-spatial-architecture-mapping-flow-for/";
            },},{id: "paper_reading-2025-polaris-multi-fidelity-design-space-exploration-of-deep-learning-accelerators",
          title: '(2025) Polaris - Multi-Fidelity Design Space Exploration of Deep Learning Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/polaris---multi-fidelity-design-space-exploration-of-deep-le/";
            },},{id: "paper_reading-2025-ramulator2-arxiv23",
          title: '(2025) Ramulator2 arxiv23',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/ramulator2-arxiv23/";
            },},{id: "paper_reading-2025-scalable-global-optimization-via-local-bayesian-optimization",
          title: '(2025) Scalable Global Optimization via Local Bayesian Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/scalable-global-optimization-via-local-bayesian-optimization/";
            },},{id: "paper_reading-2025-unindp-a-unified-compilation-and-simulation-tool-for-near-dram-processing-architectures",
          title: '(2025) UniNDP A Unified Compilation and Simulation Tool for Near DRAM Processing Architectures...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Accelerator_Modeling_and_DSE/unindp-a-unified-compilation-and-simulation-tool-for-near-dr/";
            },},{id: "paper_reading-2025-data-oblivious-cpu-microarchitectural-side-channel-leakage-resilient-processor",
          title: '(2025) Data Oblivious CPU Microarchitectural Side-channel Leakage-Resilient Processor',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU_and_General_Architecture/data-oblivious-cpu-microarchitectural-side-channel-leakage-r/";
            },},{id: "paper_reading-2025-dual-issue-execution-of-mixed-integer-and-floating-point-workloads-on-energy-efficient-in-order-risc-v-cores",
          title: '(2025) Dual-Issue Execution of Mixed Integer and Floating-Point Workloads on Energy-Efficient In-Order RISC-V...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU_and_General_Architecture/dual-issue-execution-of-mixed-integer-and-floating-point-wor/";
            },},{id: "paper_reading-2025-meek-re-thinking-heterogeneous-parallel-error-detection-architecture-for-real-world-ooo-superscalar-processors",
          title: '(2025) MEEK Re-thinking Heterogeneous Parallel Error Detection Architecture for Real-World OoO Superscalar Processors...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU_and_General_Architecture/meek-re-thinking-heterogeneous-parallel-error-detection-arch/";
            },},{id: "paper_reading-2025-zen3-the-amd-2nd-generation-7nm-x86-64-microprocessor-core",
          title: '(2025) Zen3 The AMD 2nd-Generation 7nm x86-64 Microprocessor Core',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU_and_General_Architecture/zen3-the-amd-2nd-generation-7nm-x86-64-microprocessor-core/";
            },},{id: "paper_reading-2025-unknown-llm-aided-compilation-for-tensor-accelerators",
          title: '(2025 Unknown) LLM-Aided Compilation for Tensor Accelerators',
          description: "Using LLMs to assist compilation and code generation for domain-specific tensor accelerators",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler_and_Software/llm-aided-compilation-for-tensor-accelerators/";
            },},{id: "paper_reading-2025-08894429",
          title: '(2025) 08894429',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-EDA_and_Physical_Design/08894429/";
            },},{id: "paper_reading-2025-3676536-3676648",
          title: '(2025) 3676536.3676648',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-EDA_and_Physical_Design/36765363676648/";
            },},{id: "paper_reading-2025-3698364-3709127",
          title: '(2025) 3698364.3709127',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-EDA_and_Physical_Design/36983643709127/";
            },},{id: "paper_reading-2025-place-iccad2024-wang",
          title: '(2025) PLACE ICCAD2024 Wang',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-EDA_and_Physical_Design/place-iccad2024-wang/";
            },},{id: "paper_reading-2025-spec2rtl-agent",
          title: '(2025) Spec2RTL-Agent',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-EDA_and_Physical_Design/spec2rtl-agent/";
            },},{id: "paper_reading-2025-tcad24-sai",
          title: '(2025) tcad24-sai',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-EDA_and_Physical_Design/tcad24-sai/";
            },},{id: "paper_reading-2025-the-dawn-of-ai-native-eda-opportunities-and-challenges-of-large-circuit-models",
          title: '(2025) The Dawn of AI-Native EDA Opportunities and Challenges of Large Circuit Models...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-EDA_and_Physical_Design/the-dawn-of-ai-native-eda-opportunities-and-challenges-of-la/";
            },},{id: "paper_reading-2025-dpuv4e-high-throughput-dpu-architecture-design-for-cnn-on-versal-acap",
          title: '(2025) DPUV4E High-Throughput DPU Architecture Design for CNN on Versal ACAP',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/dpuv4e-high-throughput-dpu-architecture-design-for-cnn-on-ve/";
            },},{id: "paper_reading-2025-eq-vit-algorithm-hardware-co-design-for-end-to-end-acceleration-of-real-time-vision-transformer-inference-on-versal-acap-architecture",
          title: '(2025) EQ-ViT Algorithm-Hardware Co-Design for End-to-End Acceleration of Real-Time Vision Transformer Inference on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/eq-vit-algorithm-hardware-co-design-for-end-to-end-accelerat/";
            },},{id: "paper_reading-2025-esfa-an-efficient-scalable-fft-design-framework-on-versal-ai-engine",
          title: '(2025) ESFA An Efficient Scalable FFT Design Framework on Versal AI Engine',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/esfa-an-efficient-scalable-fft-design-framework-on-versal-ai/";
            },},{id: "paper_reading-2025-hasco-towards-agile-hardware-and-software-co-design-for-tensor-computation",
          title: '(2025) HASCO Towards Agile HArdware and Software CO-design for Tensor Computation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/hasco-towards-agile-hardware-and-software-co-design-for-tens/";
            },},{id: "paper_reading-2025-heterosvd-efficient-svd-accelerator-on-versal-acap-with-algorithm-hardware-co-design",
          title: '(2025) HeteroSVD Efficient SVD Accelerator on Versal ACAP with Algorithm-Hardware Co-Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/heterosvd-efficient-svd-accelerator-on-versal-acap-with-algo/";
            },},{id: "paper_reading-2025-high-performance-low-power-matrix-multiply-design-on-acap-from-architecture-design-challenges-and-dse-perspectives",
          title: '(2025) High Performance Low Power Matrix Multiply Design on ACAP from Architecture Design...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/high-performance-low-power-matrix-multiply-design-on-acap-fr/";
            },},{id: "paper_reading-2025-late-breaking-results-pyaie-a-python-based-programming-framework-for-versal-acap-platforms",
          title: '(2025) Late Breaking Results PyAIE A Python-based Programming Framework for Versal ACAP Platforms...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/late-breaking-results-pyaie-a-python-based-programming-frame/";
            },},{id: "paper_reading-2025-vspgemm-exploiting-versal-acap-for-high-performance-spgemm-acceleration",
          title: '(2025) VSpGEMM Exploiting Versal ACAP for High-Performance SpGEMM Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/vspgemm-exploiting-versal-acap-for-high-performance-spgemm-a/";
            },},{id: "paper_reading-2025-widesa-a-high-array-utilization-mapping-scheme-for-uniform-recurrences-on-acap",
          title: '(2025) WideSA A High Array Utilization Mapping Scheme for Uniform Recurrences on ACAP...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA_and_Reconfigurable/widesa-a-high-array-utilization-mapping-scheme-for-uniform-r/";
            },},{id: "paper_reading-2025-rvsc-talk-xsai-hardware-support-for-modern-llm-kernels-in-a-cpu-paradigm",
          title: '(2025 RVSC Talk) XSAI - Hardware Support for Modern LLM Kernels in a...',
          description: "BOSC&#39;s XSAI architecture extending XiangShan RISC-V with tensor extensions for LLM workloads in consumer and cloud SoCs",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/202507160718-rvsc-xsaicpullm-2/";
            },},{id: "paper_reading-2025-computers-13-00174-v2",
          title: '(2025) computers-13-00174-v2',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/computers-13-00174-v2/";
            },},{id: "paper_reading-2025-modernprimeronpim-springer-emerging-computing-bookchapter21",
          title: '(2025) ModernPrimerOnPIM springer-emerging-computing-bookchapter21',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/modernprimeronpim-springer-emerging-computing-bookchapter21-2/";
            },},{id: "paper_reading-2025-modernprimeronpim-springer-emerging-computing-bookchapter21-extended",
          title: '(2025) ModernPrimerOnPIM springer-emerging-computing-bookchapter21-extended',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/modernprimeronpim-springer-emerging-computing-bookchapter21/";
            },},{id: "paper_reading-2025-onur-seminarincomparch-memorycentriccomputing-25-september-2025-afterlecture",
          title: '(2025) onur-seminarincomparch-memorycentriccomputing-25-september-2025-afterlecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/onur-seminarincomparch-memorycentriccomputing-25-september-2/";
            },},{id: "paper_reading-2025-prim-upmem-tutorial-analysis-benchmarking-safari-live-seminar-2021-07-12-talk",
          title: '(2025) PrIM-UPMEM-Tutorial-Analysis-Benchmarking-SAFARI-Live-Seminar-2021-07-12-talk',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/prim-upmem-tutorial-analysis-benchmarking-safari-live-semina/";
            },},{id: "paper_reading-2025-processing-in-memory-workload-driven-perspective-ibmjrd19",
          title: '(2025) processing-in-memory workload-driven-perspective IBMjrd19',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/processing-in-memory-workload-driven-perspective-ibmjrd19/";
            },},{id: "paper_reading-2025-self-published-ten-lessons-learned-from-a-tenure-track-ap-39-s-first-two-years",
          title: '(2025 Self-published) Ten Lessons Learned from a Tenure-Track AP&amp;#39;s First Two Years',
          description: "Reflections on cold-start failures in academic research group building for new PIs in computer architecture",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Foundations/ten-lessons-learned-from-ttap/";
            },},{id: "paper_reading-2025-20250716-amp-0718-rvsc-xsai-以cpu的编程范式支持现代llm核函数",
          title: '(2025) 20250716&amp;amp;0718-RVSC-XSAI：以CPU的编程范式支持现代LLM核函数',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/202507160718-rvsc-xsaicpullm/";
            },},{id: "paper_reading-2025-3676641-3716009",
          title: '(2025) 3676641.3716009',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/36766413716009/";
            },},{id: "paper_reading-2025-3676641-3716267",
          title: '(2025) 3676641.3716267',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/36766413716267-2/";
            },},{id: "paper_reading-2025-3676641-3716267",
          title: '(2025) 3676641.3716267',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/36766413716267/";
            },},{id: "paper_reading-2025-3695053-3731089",
          title: '(2025) 3695053.3731089',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/36950533731089/";
            },},{id: "paper_reading-2025-3718487",
          title: '(2025) 3718487',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/3718487/";
            },},{id: "paper_reading-2025-3725843-3756020",
          title: '(2025) 3725843.3756020',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/37258433756020/";
            },},{id: "paper_reading-2025-3725843-3756043",
          title: '(2025) 3725843.3756043',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/37258433756043/";
            },},{id: "paper_reading-2025-3725843-3756062",
          title: '(2025) 3725843.3756062',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/37258433756062/";
            },},{id: "paper_reading-2025-3725843-3756071",
          title: '(2025) 3725843.3756071',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/37258433756071/";
            },},{id: "paper_reading-2025-3725843-3756117",
          title: '(2025) 3725843.3756117',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/37258433756117/";
            },},{id: "paper_reading-2025-3725843-3756121",
          title: '(2025) 3725843.3756121',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/37258433756121/";
            },},{id: "paper_reading-2025-adelia-a-4nm-llm-processor-for-efficient-generative-al-inference",
          title: '(2025) Adelia A 4nm LLM Processor for Efficient Generative Al Inference',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/adelia-a-4nm-llm-processor-for-efficient-generative-al-infer/";
            },},{id: "paper_reading-2025-calculon-a-methodology-and-tool-for-high-level-codesign-of-systems-and-large-language-models",
          title: '(2025) Calculon a Methodology and Tool for High-Level Codesign of Systems and Large...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/calculon-a-methodology-and-tool-for-high-level-codesign-of-s/";
            },},{id: "paper_reading-2025-delivering-the-future-of-high-performance-computing",
          title: '(2025) Delivering the Future of High-Performance Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/delivering-the-future-of-high-performance-computing/";
            },},{id: "paper_reading-2025-duplex-a-device-for-large-language-models-with-mixture-of-experts-grouped-query-attention-and-continuous-batching",
          title: '(2025) Duplex A Device for Large Language Models with Mixture of Experts Grouped...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/duplex-a-device-for-large-language-models-with-mixture-of-ex/";
            },},{id: "paper_reading-2025-lp-spec-leveraging-lpddr-pim-for-efficient-llm-mobile-speculative-inference-with-architecture-dataflow-co-optimization",
          title: '(2025) LP-Spec Leveraging LPDDR PIM for Efficient LLM Mobile Speculative Inference with Architecture-Dataflow...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/lp-spec-leveraging-lpddr-pim-for-efficient-llm-mobile-specul/";
            },},{id: "paper_reading-2025-mega-mini-a-npu-with-novel-heterogeneous-ai-processing-architecture-balancing-efficiency-performance-and-intelligence-for-the-era-of-generative-ai",
          title: '(2025) MEGA.mini A NPU with Novel Heterogeneous AI Processing Architecture Balancing Efficiency Performance...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-LLM_Systems/megamini-a-npu-with-novel-heterogeneous-ai-processing-archit/";
            },},{id: "paper_reading-2025-isca-folded-banks-3d-stacked-random-access-memory",
          title: '(2025 ISCA) Folded Banks - 3D-Stacked Random-Access Memory',
          description: "AMD&#39;s novel 3D DRAM bank organization that &#39;folds&#39; banks vertically to exploit TSV bandwidth while reducing area",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory_Systems/36950533731111/";
            },},{id: "paper_reading-2025-acm-survey-extending-silicon-lifetime-a-review-of-design-techniques-for-reliable-integrated-circuits",
          title: '(2025 ACM Survey) Extending Silicon Lifetime - A Review of Design Techniques for...',
          description: "Survey of circuit and architecture techniques for managing IC aging and reliability degradation",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Technology/extending-silicon-lifetime-a-review-of-design-techniques-for/";
            },},{id: "paper_reading-2025-iedm-intel-18a-platform-technology-featuring-ribbonfet-gaa-and-powervia",
          title: '(2025 IEDM) Intel 18A Platform Technology Featuring RibbonFET (GAA) and PowerVia',
          description: "Intel 18A process combining GAA transistors (RibbonFET) and backside power delivery (PowerVia) for next-gen high-performance computing",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Technology/intel-18a-platform-technology-featuring-ribbonfet-gaa-and-po/";
            },},{id: "paper_reading-2025-iedm-intel-powervia-technology-backside-power-delivery-for-high-density-and-high-performance-computing",
          title: '(2025 IEDM) Intel PowerVia Technology - Backside Power Delivery for High Density and...',
          description: "Intel&#39;s backside power delivery network (BSPDN) technology enabling decoupled signal and power routing for improved PPA",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Technology/intel-powervia-technology-backside-power-delivery-for-high-d/";
            },},{id: "paper_reading-2026-aspdac-deeppic-xpu-pim-cluster-architecture-with-adaptive-resource-aware-task-orchestration-for-deepseek-style-moe-inference",
          title: '(2026 ASPDAC) DeepPiC xPU-PIM Cluster Architecture with Adaptive Resource-Aware Task Orchestration for DeepSeek-Style...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ASPDAC/deeppic-xpu-pim-cluster-architecture-with-adaptive-resource/";
            },},{id: "paper_reading-2026-isca-m100-an-orchestrated-dataflow-architecture-powering-general-ai-computing",
          title: '(2026 ISCA) M100 An Orchestrated Dataflow Architecture Powering General AI Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/m100-an-orchestrated-dataflow-architecture-powering-general/";
            },},{id: "paper_reading-2026-isscc-a-hybrid-bonded-12-1tops-mm-56-core-dnn-processor-with-2-5tb-s-mm-3d-network-on-chip",
          title: '(2026 ISSCC) A Hybrid-Bonded 12.1TOPS/mm² 56-Core DNN Processor with 2.5Tb/s/mm² 3D Network on...',
          description: "Intel&#39;s manycore 3D DNN processor using hybrid bonding: 56 RISC-V cores + 56 DNN accelerators with 3D mesh NoC achieving 39% throughput improvement",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISSCC/106-a-hybrid-bonded-121tops-mm2-5-6-core-dnn-processor-with/";
            },},{id: "paper_reading-2026-micro-fast-and-fusiest-an-optimal-fusion-aware-mapper-for-accelerator-design",
          title: '(2026 MICRO) Fast and Fusiest An Optimal Fusion Aware Mapper for Accelerator Design...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-MICRO/fast-and-fusiest-an-optimal-fusion-aware-mapper-for-accelera/";
            },},{id: "paper_reading-2026-micro-the-turbo-charged-mapper-fast-and-optimal-mapping-for-energy-efficient-and-low-latency-accelerator-design",
          title: '(2026 MICRO) The Turbo Charged Mapper Fast and Optimal Mapping for Energy efficient...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-MICRO/the-turbo-charged-mapper-fast-and-optimal-mapping-for-energy/";
            },},{id: "paper_reading-2026-arxiv-2603-04797v1",
          title: '(2026 arXiv) 2603.04797v1',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-arXiv/260304797v1/";
            },},{id: "paper_reading-2026-arxiv-2603-28793v1",
          title: '(2026 arXiv) 2603.28793v1',
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
