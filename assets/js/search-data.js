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
          title: "Paper Reading",
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
            },},{id: "paper_reading-1966-ieee-trans-cellular-logic-in-memory-arrays",
          title: '(1966 IEEE Trans.) Cellular Logic-in-Memory Arrays',
          description: "First proposal of logic-in-memory arrays using cellular automaton",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/cellular-logic-in-memory-arrays/";
            },},{id: "paper_reading-1970-ieee-trans-computers-logic-in-memory-computer",
          title: '(1970 IEEE Trans. Computers) Logic-in-Memory Computer',
          description: "Early proposal for a computer with logic integrated directly in memory",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/stone-logic-in-memory-1970/";
            },},{id: "paper_reading-1978-cmu-cs-report-systolic-arrays-for-vlsi",
          title: '(1978 CMU CS Report) Systolic Arrays (for VLSI)',
          description: "The seminal paper introducing systolic arrays - a foundational concept for all modern DNN accelerators",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/1978-cmu-cs-report-kung-leiserson/";
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
              window.location.href = "/paper-reading/Topic-Fundamentals/berkeleyview/";
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
              window.location.href = "/paper-reading/Topic-Memory/cacm12-why-coherence/";
            },},{id: "paper_reading-2013-keynote-die-stacking-is-happening",
          title: '(2013 Keynote) Die Stacking Is Happening!',
          description: "2013 keynote declaring the arrival of die stacking technology",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/keynote1/";
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
              window.location.href = "/paper-reading/Topic-Process/gaafet-versus-pragmatic-finfet-at-the-5nm-si-based-cmos-tech/";
            },},{id: "paper_reading-2018-synthesis-lectures-on-computer-architecture-die-stacking-architecture",
          title: '(2018 Synthesis Lectures on Computer Architecture) Die-stacking Architecture',
          description: "Synthesis Lectures textbook on die-stacking architecture",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/978-3-031-01747-6/";
            },},{id: "paper_reading-2018-hpca-graphp-reducing-communication-for-pim-based-graph-processing-with-efficient-data-partition",
          title: '(2018 HPCA) GraphP: Reducing Communication for PIM-Based Graph Processing with Efficient Data Partition...',
          description: "Efficient graph partitioning for PIM-based graph processing to reduce inter-vault communication",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/graphp-reducing-communication-for-pim-based-graph-processing/";
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
            },},{id: "paper_reading-2019-ieee-jssc-active-interposer-technology-for-chiplet-based-advanced-3d-system-architectures",
          title: '(2019 IEEE JSSC) Active Interposer Technology for Chiplet-Based Advanced 3D System Architectures',
          description: "Active silicon interposer technology enabling advanced chiplet-based 3D systems",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/active-interposer-technology-for-chiplet-based-advanced-3d-s/";
            },},{id: "paper_reading-2019-jssc-eyeriss-v2-a-flexible-accelerator-for-emerging-deep-neural-networks-on-mobile-devices",
          title: '(2019 JSSC) Eyeriss v2: A Flexible Accelerator for Emerging Deep Neural Networks on...',
          description: "Flexible DNN accelerator supporting diverse neural network topologies for mobile deployment",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/eyeriss-v2-a-flexible-accelerator-for-emerging-deep-neural-n/";
            },},{id: "paper_reading-2019-neurips-scalable-global-optimization-via-local-bayesian-optimization-turbo",
          title: '(2019 NeurIPS) Scalable Global Optimization via Local Bayesian Optimization (TuRBO)',
          description: "TuRBO: trust-region BO that maintains multiple local models for scalable high-dimensional optimization",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/scalable-global-optimization-via-local-bayesian-optimization/";
            },},{id: "paper_reading-2019-ibm-jrd-processing-in-memory-a-workload-driven-perspective",
          title: '(2019 IBM JRD) Processing-in-Memory: A Workload-Driven Perspective',
          description: "IBM&#39;s workload-driven analysis of Processing-in-Memory opportunities",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/processing-in-memory-workload-driven-perspective-ibmjrd19/";
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
            },},{id: "paper_reading-2020-unknown-using-bayesian-optimization-for-hardware-software-co-design-of-neural-accelerators",
          title: '(2020 Unknown) Using Bayesian Optimization for Hardware/Software Co-Design of Neural Accelerators',
          description: "Bayesian optimization for joint hardware/software design space exploration of neural accelerators",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/using-shi-2020/";
            },},{id: "paper_reading-2020-ieee-micro-2019-ieee-micro-maestro-a-data-centric-approach-to-understand-reuse-performance-and-hardware-cost-of-dnn-mappings",
          title: '(2020 IEEE Micro) (2019 IEEE Micro) MAESTRO: A Data-Centric Approach to Understand Reuse,...',
          description: "Data-centric analytical model for understanding DNN dataflow/mapping reuse, performance, and cost",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/maestro-a-data-centric-approach-to-understand-reuse-performa/";
            },},{id: "paper_reading-2020-science-there-39-s-plenty-of-room-at-the-top",
          title: '(2020 Science) There&amp;#39;s Plenty of Room at the Top',
          description: "Argues that post-Moore&#39;s-Law performance gains will come from software, algorithms, and hardware specialization rather than transistor scaling",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/leiserson-et-al-theres-plenty-of-room-at-the-top/";
            },},{id: "paper_reading-2020-tcad-compact-2d-a-physical-design-methodology-to-build-two-tier-gate-level-3-d-ics",
          title: '(2020 TCAD) Compact-2D: A Physical Design Methodology to Build Two-Tier Gate-Level 3-D ICs...',
          description: "Physical design methodology for two-tier gate-level 3D ICs using 2D-like flow",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Physical_Design/08894429/";
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
            },},{id: "paper_reading-2021-isca-pioneering-chiplet-technology-and-design-for-the-amd-epyc-and-ryzen-processor-families",
          title: '(2021 ISCA) Pioneering Chiplet Technology and Design for the AMD EPYC and Ryzen...',
          description: "AMD&#39;s pioneering chiplet approach for EPYC and Ryzen processors (ISCA Industry Track)",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/pioneering-chiplet-technology-and-design-for-the-amd-epyc-an/";
            },},{id: "paper_reading-2021-dac-gemmini-enabling-systematic-deep-learning-architecture-evaluation-via-full-stack-integration",
          title: '(2021 DAC) Gemmini: Enabling Systematic Deep-Learning Architecture Evaluation via Full-Stack Integration',
          description: "Open-source systolic array accelerator generator integrated with RISC-V SoC for full-stack DNN evaluation",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/2021dac-gemmini/";
            },},{id: "paper_reading-2021-asplos-dnnfusion-accelerating-dnn-execution-with-advanced-operator-fusion",
          title: '(2021 ASPLOS) DNNFusion - Accelerating DNN Execution with Advanced Operator Fusion',
          description: "Compiler technique for aggressive operator fusion in DNN inference, reducing memory traffic on mobile/edge devices",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/34534833454083/";
            },},{id: "paper_reading-2021-dac-naas-neural-accelerator-architecture-search",
          title: '(2021 DAC) NAAS: Neural Accelerator Architecture Search',
          description: "Joint NAS + accelerator architecture search using hardware-aware neural architecture optimization",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/naas-neural-accelerator-architecture-search/";
            },},{id: "paper_reading-2021-dac-hasco-towards-agile-hardware-and-software-co-design-for-tensor-computation",
          title: '(2021 DAC) HASCO: Towards Agile Hardware and Software CO-design for Tensor Computation',
          description: "Agile HW/SW co-design framework for tensor computations on FPGA",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/hasco-towards-agile-hardware-and-software-co-design-for-tens/";
            },},{id: "paper_reading-2021-safari-seminar-understanding-a-modern-processing-in-memory-architecture-benchmarking-and-experimental-characterization",
          title: '(2021 SAFARI Seminar) Understanding a Modern Processing-in-Memory Architecture: Benchmarking and Experimental Characterization',
          description: "Experimental benchmarking and characterization of UPMEM PIM architecture",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/prim-upmem-tutorial-analysis-benchmarking-safari-live-semina/";
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
            },},{id: "paper_reading-2022-isscc-3d-v-cache-the-implementation-of-a-hybrid-bonded-64mb-stacked-cache-for-a-7nm-x86-64-cpu",
          title: '(2022 ISSCC) 3D V-Cache: The Implementation of a Hybrid-Bonded 64MB Stacked Cache for...',
          description: "AMD 3D V-Cache implementation using hybrid bonding for 64MB stacked L3 cache",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/3d-v-cache-the-implementation-of-a-hybrid-bonded-64mb-stacke/";
            },},{id: "paper_reading-2022-nature-electronics-multi-chip-technologies-to-unleash-computing-performance-gains-over-the-next-decade",
          title: '(2022 Nature Electronics) Multi-chip Technologies to Unleash Computing Performance Gains over the Next...',
          description: "Nature Electronics review of multi-chip technologies for future computing performance",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/multi-chip-technologies-to-unleash-computing-performance-gai/";
            },},{id: "paper_reading-2022-isscc-zen3-the-amd-2nd-generation-7nm-x86-64-microprocessor-core",
          title: '(2022 ISSCC) Zen3: The AMD 2nd-Generation 7nm x86-64 Microprocessor Core',
          description: "AMD Zen3 microprocessor core architecture details from ISSCC",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/zen3-the-amd-2nd-generation-7nm-x86-64-microprocessor-core/";
            },},{id: "paper_reading-2022-asplos-astitch-multi-dimensional-optimization-for-memory-intensive-ml-on-simt",
          title: '(2022 ASPLOS) AStitch - Multi-dimensional Optimization for Memory-Intensive ML on SIMT',
          description: "A compiler framework enabling cross-operator fusion and multi-dimensional tiling for memory-intensive ML workloads on GPUs",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/35032223507723/";
            },},{id: "paper_reading-2022-asplos-a-full-stack-search-for-domain-optimized-dl-accelerators",
          title: '(2022 ASPLOS) A Full-Stack Search for Domain Optimized DL Accelerators',
          description: "Full-stack search across SW (network) + HW (accelerator) + mapping for domain-specific DL",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/35032223507767/";
            },},{id: "paper_reading-2022-dac-optimized-spatial-architecture-mapping-flow",
          title: '(2022 DAC) Optimized Spatial Architecture Mapping Flow',
          description: "Optimized mapping flow for spatial DNN accelerator architectures",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/optimized-spatial-architecture-mapping-flow-for/";
            },},{id: "paper_reading-2022-springer-book-a-modern-primer-on-processing-in-memory",
          title: '(2022 Springer Book) A Modern Primer on Processing in Memory',
          description: "Comprehensive modern primer on Processing-in-Memory technologies",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/modernprimeronpim-springer-emerging-computing-bookchapter21-/";
            },},{id: "paper_reading-2022-springer-book-a-modern-primer-on-processing-in-memory-full-version",
          title: '(2022 Springer Book) A Modern Primer on Processing in Memory (Full Version)',
          description: "Full version of the PIM primer book chapter",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/modernprimeronpim-springer-emerging-computing-bookchapter21/";
            },},{id: "paper_reading-2022-eth-lecture-decoupled-access-execute-dae-architecture",
          title: '(2022 ETH Lecture) Decoupled Access-Execute (DAE) Architecture',
          description: "Onur Mutlu&#39;s lecture on Decoupled Access-Execute architecture - separating memory access from computation for latency tolerance",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/onur-digitaldesign-comparch-2022-lecture19c-dae-beforelectur/";
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
            },},{id: "paper_reading-2023-isscc-a-stacked-embedded-dram-array-for-lpddr4-4x-using-hybrid-bonding-3d-integration",
          title: '(2023 ISSCC) A Stacked Embedded DRAM Array for LPDDR4 4X using Hybrid Bonding...',
          description: "Stacked eDRAM with LPDDR4 4X interface using hybrid bonding",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/a-stacked-embedded-dram-array-for-lpddr4-4x-using-hybrid-bon/";
            },},{id: "paper_reading-2023-sc-calculon-a-methodology-and-tool-for-high-level-codesign-of-systems-and-large-language-models",
          title: '(2023 SC) Calculon: A Methodology and Tool for High-Level Codesign of Systems and...',
          description: "High-level methodology for co-designing systems and LLMs",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/calculon-a-methodology-and-tool-for-high-level-codesign-of-s/";
            },},{id: "paper_reading-2023-jssc-redcim-reconfigurable-digital-computing-in-memory-processor-with-unified-fp-int-pipeline-for-cloud-ai-acceleration",
          title: '(2023 JSSC) ReDCIM: Reconfigurable Digital Computing-In-Memory Processor With Unified FP/INT Pipeline for Cloud...',
          description: "Reconfigurable digital CIM processor supporting both FP and INT operations for cloud AI",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/redcim-reconfigurable-digital-computing--in--memory-processo/";
            },},{id: "paper_reading-2023-hotchips-samsung-pim-pnm-for-transformer-based-ai-energy-efficiency-on-pim-pnm-cluster",
          title: '(2023 HotChips) Samsung PIM/PNM for Transformer-Based AI: Energy Efficiency on PIM/PNM Cluster',
          description: "Samsung&#39;s industrial PIM/PNM solutions for Transformer workloads in HBM",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/samsung-pim-pnm-for-transfmer-based-ai-energy-efficiency-on-/";
            },},{id: "paper_reading-2023-hotchips-samsung-pim-pnm-for-transfmer-based-ai-energy-efficiency-on-pim-pnm-cluster",
          title: '(2023 HotChips) Samsung PIM PNM for Transfmer Based AI Energy Efficiency on PIM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/samsung-pim-pnm-for-transfmer-based-ai-energy-efficiency-on/";
            },},{id: "paper_reading-2023-tcad-spcim-sparsity-balanced-practical-cim-accelerator-with-optimized-spatial-temporal-multi-macro-utilization",
          title: '(2023 TCAD) SPCIM: Sparsity-Balanced Practical CIM Accelerator With Optimized Spatial-Temporal Multi-Macro Utilization',
          description: "Practical CIM accelerator with sparsity balancing across multiple macros",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/spcim-sparsity-balanced-practical-cim-accelerator-with-optim/";
            },},{id: "paper_reading-2023-jssc-the-true-processing-in-memory-accelerator",
          title: '(2023 JSSC) The True Processing In Memory Accelerator',
          description: "A true PIM accelerator with compute logic embedded directly in DRAM arrays",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/the-true-processing-in-memory-accelerator/";
            },},{id: "paper_reading-2023-jssc-trancim-full-digital-bitline-transpose-cim-based-sparse-transformer-accelerator-with-pipeline-parallel-reconfigurable-modes",
          title: '(2023 JSSC) TranCIM: Full-Digital Bitline-Transpose CIM-based Sparse Transformer Accelerator With Pipeline Parallel Reconfigurable...',
          description: "Digital CIM accelerator for sparse Transformer with bitline-transpose architecture",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/trancim-full-digital-bitline-transpose-cim-based-sparse-tran/";
            },},{id: "paper_reading-2023-iccad-klotski-dnn-model-orchestration-on-dataflow-architecture-accelerators",
          title: '(2023 ICCAD) Klotski: DNN Model Orchestration on Dataflow Architecture Accelerators',
          description: "DNN model orchestration framework for multi-layer scheduling on dataflow accelerators",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/c187-iccad2023-klotski/";
            },},{id: "paper_reading-2023-micro-deap-dnn-accelerator-parallelism-dse",
          title: '(2023 MICRO) DEAP: DNN Accelerator Parallelism DSE',
          description: "Design space exploration framework for DNN accelerator parallelism strategies",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/deap-dnn-accelerator-parallelism-dse/";
            },},{id: "paper_reading-2023-micro-dosa-differentiable-model-based-one-loop-search-for-dnn-accelerators",
          title: '(2023 MICRO) DOSA: Differentiable Model-Based One-Loop Search for DNN Accelerators',
          description: "Differentiable one-loop search method for jointly optimizing DNN accelerator architecture and mapping",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/dosa2023-micro-slides/";
            },},{id: "paper_reading-2023-iccad-magnet-a-modular-accelerator-generator-for-neural-networks",
          title: '(2023 ICCAD) MAGNet: A Modular Accelerator Generator for Neural Networks',
          description: "Modular accelerator generator producing synthesizable RTL from high-level specifications",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/magnet-a-modular-accelerator-generator-for-neural-networks/";
            },},{id: "paper_reading-2023-tcad-mnsim-2-0-a-behavior-level-modeling-tool-for-processing-in-memory-architectures",
          title: '(2023 TCAD) MNSIM 2.0: A Behavior-Level Modeling Tool for Processing-In-Memory Architectures',
          description: "Behavior-level simulator for PIM architectures supporting macro-level to system-level evaluation",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/mnsim-20-a-behavior-level-modeling-tool-for-processing-in-me/";
            },},{id: "paper_reading-2023-neurips-framework-and-benchmarks-for-combinatorial-and-mixed-variable-bayesian-optimization",
          title: '(2023 NeurIPS) Framework and Benchmarks for Combinatorial and Mixed-variable Bayesian Optimization',
          description: "Benchmark suite for BO methods handling combinatorial and mixed continuous-discrete variables",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/neurips-2023-framework-and-benchmarks-for-combinatorial-and/";
            },},{id: "paper_reading-2023-arxiv-ramulator-2-0-a-modern-modular-and-extensible-dram-simulator",
          title: '(2023 arXiv) Ramulator 2.0: A Modern, Modular, and Extensible DRAM Simulator',
          description: "Next-generation DRAM simulator with modular design supporting emerging memory technologies and PIM",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/ramulator2-arxiv23/";
            },},{id: "paper_reading-2023-fpl-dpuv4e-high-throughput-dpu-architecture-design-for-cnn-on-versal",
          title: '(2023 FPL) DPUV4E: High-Throughput DPU Architecture Design for CNN on Versal',
          description: "Xilinx DPU v4E architecture for CNN inference on Versal platform",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/dpuv4e-high-throughput-dpu-architecture-design-for-cnn-on-ve/";
            },},{id: "paper_reading-2023-fpga-high-performance-low-power-matrix-multiply-design-on-acap-from-algorithm-to-rtl",
          title: '(2023 FPGA) High Performance Low Power Matrix Multiply Design on ACAP from Algorithm...',
          description: "High-performance matrix multiply on Versal ACAP platform",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/high-performance-low-power-matrix-multiply-design-on-acap-fr/";
            },},{id: "paper_reading-2023-dac-pyaie-a-python-based-programming-framework-for-versal-ai-engine",
          title: '(2023 DAC) PyAIE: A Python-based Programming Framework for Versal AI Engine',
          description: "Python-based programming framework for Versal AI Engine",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/late-breaking-results-pyaie-a-python-based-programming-frame/";
            },},{id: "paper_reading-2023-dac-widesa-a-high-array-utilization-mapping-scheme-for-uniform-recurrence-on-fpga",
          title: '(2023 DAC) WideSA: A High Array Utilization Mapping Scheme for Uniform Recurrence on...',
          description: "High utilization mapping for systolic arrays on FPGA",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/widesa-a-high-array-utilization-mapping-scheme-for-uniform-r/";
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
            },},{id: "paper_reading-2024-isscc-a-1596-gb-s-48-gb-stacked-embedded-dram-384-core-soc-with-hybrid-bonding-integration",
          title: '(2024 ISSCC) A 1596-GB/s 48-Gb Stacked Embedded DRAM 384-Core SoC With Hybrid Bonding...',
          description: "384-core SoC with 48Gb stacked eDRAM using hybrid bonding achieving 1596 GB/s",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/a-1596-gb-s-48-gb-stacked-embedded-dram-384-core-soc-with-hy/";
            },},{id: "paper_reading-2024-isca-exploiting-similarity-opportunities-of-emerging-vision-ai-models-on-hybrid-bonding-architecture",
          title: '(2024 ISCA) Exploiting Similarity Opportunities of Emerging Vision AI Models on Hybrid Bonding...',
          description: "Exploiting model similarity for efficient vision AI on hybrid bonding architectures",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/exploiting-similarity-opportunities-of-emerging-vision-ai-mo/";
            },},{id: "paper_reading-2024-iccad-hierarchical-power-co-optimization-and-management-for-llm-chiplet-designs",
          title: '(2024 ICCAD) Hierarchical Power Co-Optimization and Management for LLM Chiplet Designs',
          description: "Hierarchical power optimization for LLM chiplet architectures",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/hierarchical-power-co-optimization-and-management-for-llm-ch/";
            },},{id: "paper_reading-2024-survey-the-survey-of-chiplet-based-integrated-architecture-an-eda-perspective",
          title: '(2024 Survey) The Survey of Chiplet-based Integrated Architecture: An EDA Perspective',
          description: "Comprehensive survey of chiplet architecture from EDA tool perspective",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/the-survey-of-chiplet-based-integrated-architecture-an-eda-p/";
            },},{id: "paper_reading-2024-isca-mind-the-gap-attainable-data-movement-and-operational-intensity-bounds-for-tensor-algorithms",
          title: '(2024 ISCA) Mind the Gap: Attainable Data Movement and Operational Intensity Bounds for...',
          description: "Theoretical framework for attainable data movement bounds in tensor computations",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/2024isca-orojensis-presentation/";
            },},{id: "paper_reading-2024-micro-sophgo-bm1684x-a-commercial-high-performance-terminal-ai-processor-with-large-model-support",
          title: '(2024 MICRO) SOPHGO BM1684X: A Commercial High Performance Terminal AI Processor with Large...',
          description: "Commercial AI processor for edge deployment supporting large model inference",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/2024micro-sophgo-bm1684x---a-commercial-high-performance-ter/";
            },},{id: "paper_reading-2024-isca-trapezoid-a-versatile-accelerator-for-dense-and-sparse-matrix-multiplications",
          title: '(2024 ISCA) Trapezoid: A Versatile Accelerator for Dense and Sparse Matrix Multiplications',
          description: "Versatile accelerator handling both dense and sparse matrix multiplications efficiently",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/36134243623784/";
            },},{id: "paper_reading-2024-micro-aig-cim-a-scalable-chiplet-module-with-tri-gear-heterogeneous-compute-in-memory-for-diffusion-acceleration",
          title: '(2024 MICRO) AIG-CIM: A Scalable Chiplet Module with Tri-Gear Heterogeneous Compute-in-Memory for Diffusion...',
          description: "Scalable CIM chiplet with three heterogeneous CIM gears for diffusion model acceleration",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/36493293657373/";
            },},{id: "paper_reading-2024-iccad-marca-mamba-accelerator-with-reconfigurable-architecture",
          title: '(2024 ICCAD) MARCA: Mamba Accelerator with ReConfigurable Architecture',
          description: "Reconfigurable accelerator for Mamba (State Space Model) inference",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/36765363676798/";
            },},{id: "paper_reading-2024-todaes-a-heterogeneous-chiplet-architecture-for-accelerating-end-to-end-transformer-models",
          title: '(2024 TODAES) A Heterogeneous Chiplet Architecture for Accelerating End-to-End Transformer Models',
          description: "Heterogeneous chiplet architecture optimized for end-to-end Transformer inference",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/3718487/";
            },},{id: "paper_reading-2024-isscc-bit-separable-transformer-accelerator-leveraging-output-activation-sparsity-for-efficient-dram-access",
          title: '(2024 ISSCC) Bit-Separable Transformer Accelerator Leveraging Output Activation Sparsity for Efficient DRAM Access...',
          description: "Transformer accelerator exploiting output activation sparsity to reduce DRAM bandwidth",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/bit-separable-transformer-accelerator-leveraging-output-acti/";
            },},{id: "paper_reading-2024-isscc-corsair-an-in-memory-computing-chiplet-architecture-for-inference",
          title: '(2024 ISSCC) CORSAIR: An In-Memory Computing Chiplet Architecture for Inference',
          description: "In-memory computing chiplet architecture for scalable DNN inference",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/corsairan-in-memory-computing-chipletarchitecture-for-infere/";
            },},{id: "paper_reading-2024-hotchips-delivering-the-future-of-high-performance-computing",
          title: '(2024 HotChips) Delivering the Future of High-Performance Computing',
          description: "Industry keynote on future HPC architecture directions",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/delivering-the-future-of-high-performance-computing/";
            },},{id: "paper_reading-2024-unknown-dip-a-scalable-energy-efficient-systolic-array-for-matrix-multiplication",
          title: '(2024 Unknown) DiP: A Scalable Energy-Efficient Systolic Array for Matrix Multiplication',
          description: "Scalable energy-efficient systolic array design for general matrix multiplication",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/dip-a-scalable-energy-efficient-systolic-array-for-matrix-mu/";
            },},{id: "paper_reading-2024-micro-duplex-a-device-for-large-language-models-with-mixture-of-experts",
          title: '(2024 MICRO) Duplex: A Device for Large Language Models with Mixture of Experts...',
          description: "Hardware device optimized for LLM inference with Mixture of Experts architecture",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/duplex-a-device-for-large-language-models-with-mixture-of-ex/";
            },},{id: "paper_reading-2024-micro-fcdram-dram-with-built-in-flexible-compute-capability",
          title: '(2024 MICRO) FCDRAM: DRAM with Built-in Flexible Compute Capability',
          description: "DRAM with flexible built-in compute capability beyond simple bitwise operations",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/fcdram/";
            },},{id: "paper_reading-2024-jssc-klima-low-latency-mixed-signal-in-memory-computing-accelerator",
          title: '(2024 JSSC) KLIMA: Low-latency Mixed-signal In-Memory Computing Accelerator',
          description: "Low-latency mixed-signal CIM accelerator for DNN inference",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/klima-low-latency-mixed-signal-in-memory-computing-accelerat/";
            },},{id: "paper_reading-2024-isca-mimdram-an-end-to-end-processing-using-dram-system-for-high-throughput-energy-efficient-and-programmer-transparent-computations",
          title: '(2024 ISCA) MIMDRAM: An End-to-End Processing-Using-DRAM System for High-Throughput, Energy-Efficient and Programmer-Transparent Computations...',
          description: "End-to-end Processing-Using-DRAM system with MIMD execution model",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/mimdram/";
            },},{id: "paper_reading-2024-isca-data-oblivious-cpu-microarchitectural-side-channel-leakage-resilient-processing",
          title: '(2024 ISCA) Data Oblivious CPU Microarchitectural Side-channel Leakage-Resilient Processing',
          description: "Data-oblivious CPU design to resist microarchitectural side-channel attacks",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/data-oblivious-cpu-microarchitectural-side-channel-leakage-r/";
            },},{id: "paper_reading-2024-unknown-dual-issue-execution-of-mixed-integer-and-floating-point-workloads",
          title: '(2024 Unknown) Dual-Issue Execution of Mixed Integer and Floating-Point Workloads',
          description: "Dual-issue execution scheme for mixed integer and FP workloads",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/dual-issue-execution-of-mixed-integer-and-floating-point-wor/";
            },},{id: "paper_reading-2024-todaes-boosting-vlsi-design-flow-parameter-tuning-with-random-embedding-and-multi-objective-trust-region-bo",
          title: '(2024 TODAES) Boosting VLSI Design Flow Parameter Tuning with Random Embedding and Multi-objective...',
          description: "Random embedding + multi-objective trust-region BO for high-dimensional VLSI design flow tuning",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/3597931/";
            },},{id: "paper_reading-2024-iccad-is-vanilla-bayesian-optimization-enough-for-high-dimensional-architecture-design-optimization",
          title: '(2024 ICCAD) Is Vanilla Bayesian Optimization Enough for High-Dimensional Architecture Design Optimization?',
          description: "Evaluates whether standard BO suffices for high-dimensional architecture DSE and proposes improvements",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/36765363676746/";
            },},{id: "paper_reading-2024-iccad-ranktuner-design-tool-parameter-tuning-with-preference-bayesian-optimization",
          title: '(2024 ICCAD) RankTuner: Design Tool Parameter Tuning with Preference Bayesian Optimization',
          description: "Preference-based BO for EDA tool parameter tuning without explicit objective function",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/36765363676782/";
            },},{id: "paper_reading-2024-dac-airchitect-v2-learning-the-hardware-accelerator-design-space-through-unified-representations",
          title: '(2024 DAC) AIRCHITECT V2: Learning the Hardware Accelerator Design Space through Unified Representations...',
          description: "Uses unified graph representations to learn across different accelerator design spaces for efficient DSE",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/airchitect-v2-learning-the-hardware-accelerator-design-space/";
            },},{id: "paper_reading-2024-todaes-boosting-vlsi-design-flow-parameter-tuning-with-random-embedding-and-mobo",
          title: '(2024 TODAES) Boosting VLSI Design Flow Parameter Tuning with Random Embedding and MOBO...',
          description: "Random embedding + multi-objective trust-region BO for VLSI design flow tuning",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/boosting-vlsi-design-flow-parameter-tuning-with-randomembedd/";
            },},{id: "paper_reading-2024-dac-dnnfuser-transformer-as-a-generalized-mapper-for-fusion-in-dnn-accelerators",
          title: '(2024 DAC) DNNFuser: Transformer as a Generalized Mapper for Fusion in DNN Accelerators...',
          description: "Uses Transformer model as a learned mapper for operator fusion decisions in DNN accelerators",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/dnnfuser-transformer-as-a-generalized-mapper-for-fusion-in-d/";
            },},{id: "paper_reading-2024-micro-gem5-accesys-enabling-system-level-exploration-of-standard-interconnects-for-novel-accelerators",
          title: '(2024 MICRO) Gem5-AcceSys: Enabling System-Level Exploration of Standard Interconnects for Novel Accelerators',
          description: "gem5-based framework for system-level simulation of accelerators with standard interconnects (CXL, PCIe)",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/gem5-accesys-enabling-system-level-exploration-of-standard-i/";
            },},{id: "paper_reading-2024-hpca-gemini-mapping-and-architecture-co-exploration-for-large-scale-dnn-chiplet-accelerators",
          title: '(2024 HPCA) Gemini: Mapping and Architecture Co-exploration for Large-scale DNN Chiplet Accelerators',
          description: "Joint exploration of mapping strategies and chiplet architecture for large-scale DNN accelerators",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/gemini-mapping-and-architecture-co-exploration-for-large-sca/";
            },},{id: "paper_reading-2024-tcad-klotski-v2-improved-dnn-model-orchestration-framework-for-dataflow-architecture-accelerators",
          title: '(2024 TCAD) Klotski v2: Improved DNN Model Orchestration Framework for Dataflow Architecture Accelerators...',
          description: "Improved version of Klotski with better fusion decisions and pipeline optimization",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/klotski-v2-improved-dnn-model-orchestration-framework-for-da/";
            },},{id: "paper_reading-2024-iccad-on-design-space-exploration-of-cache-system-in-multi-chiplet-systems",
          title: '(2024 ICCAD) On Design Space Exploration of Cache System in Multi-Chiplet Systems',
          description: "DSE framework for cache hierarchy design in multi-chiplet architectures",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/on-design-space-exploration-of-cache-system-in-multi-chiplet/";
            },},{id: "paper_reading-2024-iccad-polaris-multi-fidelity-design-space-exploration-of-deep-learning-accelerators",
          title: '(2024 ICCAD) Polaris: Multi-Fidelity Design Space Exploration of Deep Learning Accelerators',
          description: "Multi-fidelity DSE framework combining fast analytical models with expensive cycle-accurate simulation",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/polaris---multi-fidelity-design-space-exploration-of-deep-le/";
            },},{id: "paper_reading-2024-asplos-unindp-a-unified-compilation-and-simulation-tool-for-near-dram-processing-architectures",
          title: '(2024 ASPLOS) UniNDP: A Unified Compilation and Simulation Tool for Near DRAM Processing...',
          description: "Unified compilation and simulation tool for near-DRAM processing (NDP) architectures",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/unindp-a-unified-compilation-and-simulation-tool-for-near-dr/";
            },},{id: "paper_reading-2024-tcad-eq-vit-algorithm-hardware-co-design-for-end-to-end-acceleration-of-vision-transformers-on-fpga",
          title: '(2024 TCAD) EQ-ViT: Algorithm-Hardware Co-Design for End-to-End Acceleration of Vision Transformers on FPGA...',
          description: "Algorithm-hardware co-design for Vision Transformer acceleration on FPGA",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/eq-vit-algorithm-hardware-co-design-for-end-to-end-accelerat/";
            },},{id: "paper_reading-2024-tcad-esfa-an-efficient-scalable-fft-design-framework-on-versal-ai-engine",
          title: '(2024 TCAD) ESFA: An Efficient Scalable FFT Design Framework on Versal AI Engine...',
          description: "Scalable FFT design framework targeting Versal AI Engine",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/esfa-an-efficient-scalable-fft-design-framework-on-versal-ai/";
            },},{id: "paper_reading-2024-dac-heterosvd-efficient-svd-accelerator-on-versal-acap-with-algorithm-hardware-co-design",
          title: '(2024 DAC) HeteroSVD: Efficient SVD Accelerator on Versal ACAP with Algorithm-Hardware Co-Design',
          description: "SVD accelerator on Versal ACAP exploiting heterogeneous compute resources",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/heterosvd-efficient-svd-accelerator-on-versal-acap-with-algo/";
            },},{id: "paper_reading-2024-iccad-vspgemm-exploiting-versal-acap-for-high-performance-spgemm-acceleration",
          title: '(2024 ICCAD) VSpGEMM: Exploiting Versal ACAP for High-Performance SpGEMM Acceleration',
          description: "Sparse GEMM acceleration on Versal ACAP",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/vspgemm-exploiting-versal-acap-for-high-performance-spgemm-a/";
            },},{id: "paper_reading-2024-mdpi-computers-survey-on-processing-in-memory-architectures",
          title: '(2024 MDPI Computers) Survey on Processing-in-Memory Architectures',
          description: "2024 survey of PIM architecture landscape",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/computers-13-00174-v2/";
            },},{id: "paper_reading-2024-iccad-atplace2-5d-analytical-thermal-aware-chiplet-placement-framework-for-large-scale-2-5d-ic",
          title: '(2024 ICCAD) ATPlace2.5D: Analytical Thermal-Aware Chiplet Placement Framework for Large-Scale 2.5D-IC',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Physical_Design/place-iccad2024-wang/";
            },},{id: "paper_reading-2024-tcad-pin-3d-effective-physical-design-methodology-for-multi-die-co-optimization-in-monolithic-3-d-ics",
          title: '(2024 TCAD) Pin-3D: Effective Physical Design Methodology for Multi-Die Co-Optimization in Monolithic 3-D...',
          description: "Native 3D PnR methodology for monolithic 3D ICs with multi-die co-optimization",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Physical_Design/tcad24-sai/";
            },},{id: "paper_reading-2024-iccad-the-dawn-of-ai-native-eda-opportunities-and-challenges-of-large-circuit-models",
          title: '(2024 ICCAD) The Dawn of AI-Native EDA: Opportunities and Challenges of Large Circuit...',
          description: "Vision paper on AI-native EDA leveraging large circuit models",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Physical_Design/the-dawn-of-ai-native-eda-opportunities-and-challenges-of-la/";
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
            },},{id: "paper_reading-2025-iccad-accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelerators",
          title: '(2025 ICCAD) AccelStack - A Cost-Driven Analysis of 3D-Stacked LLM Accelerators',
          description: "Cost-driven analysis framework for 3D-stacked LLM accelerators covering performance model and manufacturing cost for DoD/DoW/WoW hybrid bonding",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/accelstack-a-cost-driven-analysis-of-3d-stacked-llm-accelera/";
            },},{id: "paper_reading-2025-notes-ucie-standard-package-module-amp-phy-结构笔记",
          title: '(2025 Notes) UCIe Standard Package Module &amp;amp; PHY 结构笔记',
          description: "Personal notes on UCIe standard package module and PHY structure",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/ucie/";
            },},{id: "paper_reading-2025-rvsc-talk-xsai-hardware-support-for-modern-llm-kernels-in-a-cpu-paradigm",
          title: '(2025 RVSC Talk) XSAI: Hardware Support for Modern LLM Kernels in a CPU...',
          description: "RISC-V extension for supporting modern LLM kernels using CPU programming paradigm",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/202507160718-rvsc-xsaicpullm/";
            },},{id: "paper_reading-2025-micro-oasis-a-commercial-high-performance-terminal-ai-processor-supporting-risc-v-tensor-extension-instructions",
          title: '(2025 MICRO) OASIS: A Commercial High Performance Terminal AI Processor Supporting RISC-V Tensor...',
          description: "Commercial AI processor with RISC-V tensor extension for edge deployment",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/2025micro-oasis---a-commercial-high-performance-terminal-ai/";
            },},{id: "paper_reading-2025-isca-papi-exploiting-dynamic-parallelism-in-large-language-model-decoding-with-a-processing-in-memory-enabled-computing-system",
          title: '(2025 ISCA) PAPI: Exploiting Dynamic Parallelism in Large Language Model Decoding with a...',
          description: "PIM system exploiting dynamic parallelism in LLM decoding phase",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/36766413716009/";
            },},{id: "paper_reading-2025-isca-pim-is-all-you-need-a-cxl-enabled-gpu-free-system-for-large-language-model-inference",
          title: '(2025 ISCA) PIM Is All You Need: A CXL-Enabled GPU-Free System for Large...',
          description: "CXL-based PIM system achieving GPU-free LLM inference",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/36766413716267/";
            },},{id: "paper_reading-2025-asplos-optipim-optimizing-processing-in-memory-via-integer-linear-programming",
          title: '(2025 ASPLOS) OptiPIM: Optimizing Processing-in-Memory via Integer Linear Programming',
          description: "ILP-based optimization framework for PIM workload mapping",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/36950533731041/";
            },},{id: "paper_reading-2025-asplos-heterrag-heterogeneous-processing-in-memory-acceleration-for-retrieval-augmented-generation",
          title: '(2025 ASPLOS) HeterRAG: Heterogeneous Processing-in-Memory Acceleration for Retrieval-augmented Generation',
          description: "Heterogeneous PIM acceleration for RAG (Retrieval-Augmented Generation) pipeline",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/36950533731089/";
            },},{id: "paper_reading-2025-asplos-atim-autotuning-tensor-programs-for-processing-in-memory",
          title: '(2025 ASPLOS) ATiM: Autotuning Tensor Programs for Processing-in-Memory',
          description: "Automatic tuning of tensor programs for PIM architectures",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/36950533731096/";
            },},{id: "paper_reading-2025-dac-compass-a-compatible-pim-scheduling-solution-for-processor-pim",
          title: '(2025 DAC) ComPASS: A Compatible PIM Scheduling Solution for Processor-PIM',
          description: "PIM scheduling solution for concurrent processor-PIM execution",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756017/";
            },},{id: "paper_reading-2025-dac-accelerating-retrieval-augmented-language-model-via-pim-and-pnm-integration",
          title: '(2025 DAC) Accelerating Retrieval Augmented Language Model via PIM and PNM Integration',
          description: "PIM+PNM integrated system for accelerating RAG-based language models",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756020/";
            },},{id: "paper_reading-2025-dac-pim-cca-an-efficient-pim-architecture-with-optimized-integration-of-configurable-functional-units",
          title: '(2025 DAC) PIM-CCA: An Efficient PIM Architecture with Optimized Integration of Configurable Functional...',
          description: "Efficient PIM with configurable functional units for diverse workloads",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756034/";
            },},{id: "paper_reading-2025-dac-stratum-system-hardware-co-design-with-tiered-monolithic-3d-stackable-dram-for-efficient-moe-serving",
          title: '(2025 DAC) Stratum: System-Hardware Co-Design with Tiered Monolithic 3D-Stackable DRAM for Efficient MoE...',
          description: "System-hardware co-design using tiered 3D DRAM for MoE LLM serving",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756043/";
            },},{id: "paper_reading-2025-dac-longsight-compute-enabled-large-context-llms",
          title: '(2025 DAC) LongSight: Compute-Enabled Large-Context LLMs',
          description: "Hardware architecture enabling efficient large-context LLM inference",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756062/";
            },},{id: "paper_reading-2025-dac-kelle-co-design-kv-caching-and-edram-for-efficient-llm-serving-in-edge-computing",
          title: '(2025 DAC) Kelle: Co-design KV Caching and eDRAM for Efficient LLM Serving in...',
          description: "Co-design of KV caching strategy and eDRAM architecture for edge LLM serving",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756071/";
            },},{id: "paper_reading-2025-dac-3d-path-a-hierarchy-lut-processing-in-memory-with-thermal-aware-hybrid",
          title: '(2025 DAC) 3D-PATH: A Hierarchy LUT Processing-in-Memory with Thermal-aware Hybrid',
          description: "Hierarchical LUT-based PIM with thermal-aware design in 3D stack",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756087/";
            },},{id: "paper_reading-2025-dac-heat-npu-ndp-heterogeneous-architecture-for-transformer-empowered-graph-neural-networks",
          title: '(2025 DAC) HEAT: NPU-NDP Heterogeneous Architecture for Transformer-Empowered Graph Neural Networks',
          description: "Heterogeneous NPU-NDP architecture for GNN with Transformer components",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756117/";
            },},{id: "paper_reading-2025-dac-pimba-a-processing-in-memory-acceleration-for-post-transformer-large-language-model-serving",
          title: '(2025 DAC) Pimba: A Processing-in-Memory Acceleration for Post-Transformer Large Language Model Serving',
          description: "PIM acceleration for post-Transformer models (Mamba/SSM) in LLM serving",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/37258433756121/";
            },},{id: "paper_reading-2025-isscc-adelia-a-4nm-llm-processor-for-efficient-generative-ai-inference",
          title: '(2025 ISSCC) Adelia: A 4nm LLM Processor for Efficient Generative AI Inference',
          description: "4nm LLM processor chip for efficient generative AI inference (ISSCC 2025)",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/adelia-a-4nm-llm-processor-for-efficient-generative-al-infer/";
            },},{id: "paper_reading-2025-dac-lp-spec-leveraging-lpddr-pim-for-efficient-llm-mobile-speculative-decoding",
          title: '(2025 DAC) LP-Spec: Leveraging LPDDR PIM for Efficient LLM Mobile Speculative Decoding',
          description: "LPDDR PIM for efficient speculative decoding of LLMs on mobile devices",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/lp-spec-leveraging-lpddr-pim-for-efficient-llm-mobile-specul/";
            },},{id: "paper_reading-2025-isscc-mega-mini-a-npu-with-novel-heterogeneous-ai-processing-architecture",
          title: '(2025 ISSCC) MEGA.mini: A NPU with Novel Heterogeneous AI Processing Architecture',
          description: "Novel heterogeneous NPU architecture for AI processing (ISSCC 2025)",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/megamini-a-npu-with-novel-heterogeneous-ai-processing-archit/";
            },},{id: "paper_reading-2025-dac-meek-re-thinking-heterogeneous-parallel-error-detection-architecture-for-real-world-ooo-superscalar-processors",
          title: '(2025 DAC) MEEK Re-thinking Heterogeneous Parallel Error Detection Architecture for Real-World OoO Superscalar...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/meek-re-thinking-heterogeneous-parallel-error-detection-arch/";
            },},{id: "paper_reading-2025-dac-meek-re-thinking-heterogeneous-parallel-error-detection-architecture",
          title: '(2025 DAC) MEEK: Re-thinking Heterogeneous Parallel Error Detection Architecture',
          description: "Heterogeneous parallel error detection architecture rethinking",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/meek-re-thinking-heterogeneous-parallel-error-detection-archi/";
            },},{id: "paper_reading-2025-unknown-llm-aided-compilation-for-tensor-accelerators",
          title: '(2025 Unknown) LLM-Aided Compilation for Tensor Accelerators',
          description: "Using LLMs to assist compilation and code generation for domain-specific tensor accelerators",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/llm-aided-compilation-for-tensor-accelerators/";
            },},{id: "paper_reading-2025-rvsc-talk-xsai-hardware-support-for-modern-llm-kernels-in-a-cpu-paradigm",
          title: '(2025 RVSC Talk) XSAI - Hardware Support for Modern LLM Kernels in a...',
          description: "BOSC&#39;s XSAI architecture extending XiangShan RISC-V with tensor extensions for LLM workloads in consumer and cloud SoCs",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/202507160718-rvsc-xsaicpullm-2/";
            },},{id: "paper_reading-2025-modernprimeronpim-springer-emerging-computing-bookchapter21",
          title: '(2025) ModernPrimerOnPIM springer-emerging-computing-bookchapter21',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/modernprimeronpim-springer-emerging-computing-bookchapter21-2/";
            },},{id: "paper_reading-2025-seminar-onur-seminarincomparch-memorycentriccomputing-25-september-2025-afterlecture",
          title: '(2025 Seminar) onur-seminarincomparch-memorycentriccomputing-25-september-2025-afterlecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/onur-seminarincomparch-memorycentriccomputing-25-september-2/";
            },},{id: "paper_reading-2025-seminar-memory-centric-computing",
          title: '(2025 Seminar) Memory-Centric Computing',
          description: "Onur Mutlu&#39;s seminar on memory-centric computing vision",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/onur-seminarincomparch-memorycentriccomputing-25-september-20/";
            },},{id: "paper_reading-2025-self-published-ten-lessons-learned-from-a-tenure-track-ap-39-s-first-two-years",
          title: '(2025 Self-published) Ten Lessons Learned from a Tenure-Track AP&amp;#39;s First Two Years',
          description: "Reflections on cold-start failures in academic research group building for new PIs in computer architecture",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Fundamentals/ten-lessons-learned-from-ttap/";
            },},{id: "paper_reading-2025-isca-folded-banks-3d-stacked-random-access-memory",
          title: '(2025 ISCA) Folded Banks - 3D-Stacked Random-Access Memory',
          description: "AMD&#39;s novel 3D DRAM bank organization that &#39;folds&#39; banks vertically to exploit TSV bandwidth while reducing area",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/36950533731111/";
            },},{id: "paper_reading-2025-ispd-physical-design-for-advanced-3d-ics-challenges-and-solutions",
          title: '(2025 ISPD) Physical Design for Advanced 3D ICs: Challenges and Solutions',
          description: "Challenges and solutions for physical design of advanced 3D ICs with hybrid bonding",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Physical_Design/36983643709127/";
            },},{id: "paper_reading-2025-arxiv-spec2rtl-agent",
          title: '(2025 arXiv) Spec2RTL-Agent',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Physical_Design/spec2rtl-agent/";
            },},{id: "paper_reading-2025-acm-survey-extending-silicon-lifetime-a-review-of-design-techniques-for-reliable-integrated-circuits",
          title: '(2025 ACM Survey) Extending Silicon Lifetime - A Review of Design Techniques for...',
          description: "Survey of circuit and architecture techniques for managing IC aging and reliability degradation",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Process/extending-silicon-lifetime-a-review-of-design-techniques-for/";
            },},{id: "paper_reading-2025-iedm-intel-18a-platform-technology-featuring-ribbonfet-gaa-and-powervia",
          title: '(2025 IEDM) Intel 18A Platform Technology Featuring RibbonFET (GAA) and PowerVia',
          description: "Intel 18A process combining GAA transistors (RibbonFET) and backside power delivery (PowerVia) for next-gen high-performance computing",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Process/intel-18a-platform-technology-featuring-ribbonfet-gaa-and-po/";
            },},{id: "paper_reading-2025-iedm-intel-powervia-technology-backside-power-delivery-for-high-density-and-high-performance-computing",
          title: '(2025 IEDM) Intel PowerVia Technology - Backside Power Delivery for High Density and...',
          description: "Intel&#39;s backside power delivery network (BSPDN) technology enabling decoupled signal and power routing for improved PPA",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Process/intel-powervia-technology-backside-power-delivery-for-high-d/";
            },},{id: "paper_reading-2026-aspdac-deeppic-xpu-pim-cluster-architecture-with-adaptive-resource-aware-task-orchestration-for-deepseek-style-moe-inference",
          title: '(2026 ASPDAC) DeepPiC xPU-PIM Cluster Architecture with Adaptive Resource-Aware Task Orchestration for DeepSeek-Style...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ASPDAC/deeppic-xpu-pim-cluster-architecture-with-adaptive-resource/";
            },},{id: "paper_reading-2026-isca-a-silicon-proven-unified-low-latency-cxl-controller-and-port-based-routing-switch-for-memory-centric-fabrics",
          title: '(2026 ISCA) A Silicon-Proven Unified Low-Latency CXL Controller and Port-Based Routing Switch for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/a-silicon-proven-unified-low-latency-cxl-controller-and/";
            },},{id: "paper_reading-2026-isca-a-streaming-architecture-for-quantum-error-syndrome-compression-at-4-kelvin",
          title: '(2026 ISCA) A Streaming Architecture for Quantum Error Syndrome Compression at 4 Kelvin...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/a-streaming-architecture-for-quantum-error-syndrome/";
            },},{id: "paper_reading-2026-isca-accelerating-moe-with-dynamic-in-switch-computing-on-multi-gpus",
          title: '(2026 ISCA) Accelerating MoE with Dynamic In-Switch Computing on Multi-GPUs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/accelerating-moe-with-dynamic-in-switch-computing-on-multi/";
            },},{id: "paper_reading-2026-isca-accelerator-polymorphism-transcending-domain-specific-architectures-with-robotics",
          title: '(2026 ISCA) Accelerator Polymorphism: Transcending Domain-Specific Architectures with Robotics',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/accelerator-polymorphism-transcending-domain-specific/";
            },},{id: "paper_reading-2026-isca-aesip-uarch-aware-asip-isa-co-design-via-program-synthesis-equality-saturation-and-external-dont-cares",
          title: '(2026 ISCA) aeSIP: uArch-aware ASIP-ISA Co-Design via Program Synthesis Equality Saturation and External...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/aesip-uarch-aware-asip-isa-co-design-via-program-synthesis/";
            },},{id: "paper_reading-2026-isca-approaching-shannon-bound-with-lossless-llm-weight-compression",
          title: '(2026 ISCA) Approaching Shannon Bound with Lossless LLM Weight Compression',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/approaching-shannon-bound-with-lossless-llm-weight/";
            },},{id: "paper_reading-2026-isca-aquant-repurposing-codec-for-vlm-acceleration-via-adaptive-quantization",
          title: '(2026 ISCA) AQuant: Repurposing CODEC for VLM Acceleration via Adaptive Quantization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/aquant-repurposing-codec-for-vlm-acceleration-via-adaptive/";
            },},{id: "paper_reading-2026-isca-atx-accelerator-task-extensions",
          title: '(2026 ISCA) ATX: Accelerator Task Extensions',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/atx-accelerator-task-extensions/";
            },},{id: "paper_reading-2026-isca-augmenting-the-branch-predictor-with-a-squashed-branch-reuse-buffer",
          title: '(2026 ISCA) Augmenting the Branch Predictor with a Squashed-Branch Reuse Buffer',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/augmenting-the-branch-predictor-with-a-squashed-branch/";
            },},{id: "paper_reading-2026-isca-autofhe-an-automatic-hardware-generation-framework-for-domain-specific-fhe-accelerators",
          title: '(2026 ISCA) AutoFHE: An Automatic Hardware Generation Framework for Domain-Specific FHE Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/autofhe-an-automatic-hardware-generation-framework-for/";
            },},{id: "paper_reading-2026-isca-axle-coordinated-offloading-with-asynchronous-back-streaming-in-computational-memory-systems",
          title: '(2026 ISCA) AXLE: Coordinated Offloading with Asynchronous Back-Streaming in Computational Memory Systems',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/axle-coordinated-offloading-with-asynchronous-back/";
            },},{id: "paper_reading-2026-isca-baap-coupling-compute-in-sram-with-dram-banks-for-near-memory-processing",
          title: '(2026 ISCA) BAAP: Coupling Compute-in-SRAM with DRAM Banks for Near-Memory Processing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/baap-coupling-compute-in-sram-with-dram-banks-for-near/";
            },},{id: "paper_reading-2026-isca-boostx-nti-fast-scalable-and-flexible-storage-architecture-with-nvme-tcp-initiator-acceleration",
          title: '(2026 ISCA) BoostX™-NTI: Fast, Scalable and Flexible Storage Architecture with NVMe/TCP Initiator Acceleration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/boostx-nti-fast-scalable-and-flexible-storage-architecture/";
            },},{id: "paper_reading-2026-isca-breaking-barriers-in-atomic-scaling-a-hardware-software-collaborated-framework-to-deconstruct-rdma-atomic",
          title: '(2026 ISCA) Breaking Barriers in Atomic Scaling: A Hardware-Software-Collaborated Framework to Deconstruct RDMA...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/breaking-barriers-in-atomic-scaling-a-hardware-software/";
            },},{id: "paper_reading-2026-isca-bridging-efficiency-and-scalability-in-llm-system-via-3d-hybrid-pim-with-2d-in-transit-computation",
          title: '(2026 ISCA) Bridging Efficiency and Scalability in LLM System via 3D Hybrid PIM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/bridging-efficiency-and-scalability-in-llm-system-via-3d/";
            },},{id: "paper_reading-2026-isca-bringing-near-data-processing-into-the-low-bit-floating-point-era",
          title: '(2026 ISCA) Bringing Near Data Processing into the Low-Bit Floating-Point Era',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/bringing-near-data-processing-into-the-low-bit-floating/";
            },},{id: "paper_reading-2026-isca-bullet-time-time-dilation-for-high-fidelity-tracing",
          title: '(2026 ISCA) BULLET TIME: Time Dilation for High-Fidelity Tracing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/bullet-time-time-dilation-for-high-fidelity-tracing/";
            },},{id: "paper_reading-2026-isca-bumper-hinting-instruction-usefulness-for-robust-unified-caches",
          title: '(2026 ISCA) Bumper: Hinting Instruction Usefulness for Robust Unified Caches',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/bumper-hinting-instruction-usefulness-for-robust-unified/";
            },},{id: "paper_reading-2026-isca-capa-manufacturing-carbon-estimation-for-advanced-packaged-architectures",
          title: '(2026 ISCA) CAPA: Manufacturing Carbon Estimation for Advanced-Packaged Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/capa-manufacturing-carbon-estimation-for-advanced-packaged/";
            },},{id: "paper_reading-2026-isca-cassandra-enabling-reasoning-llms-at-edge-via-self-speculative-decoding",
          title: '(2026 ISCA) Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/cassandra-enabling-reasoning-llms-at-edge-via-self/";
            },},{id: "paper_reading-2026-isca-cerberus-cross-layer-ecc-co-design-for-robust-and-efficient-memory-protection",
          title: '(2026 ISCA) Cerberus: Cross-Layer ECC Co-Design for Robust and Efficient Memory Protection',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/cerberus-cross-layer-ecc-co-design-for-robust-and-efficient/";
            },},{id: "paper_reading-2026-isca-chime-a-case-for-efficient-long-context-attention-fc-disaggregated-inference-with-dimm-pim",
          title: '(2026 ISCA) CHIME: A Case for Efficient Long-Context Attention-FC Disaggregated Inference with DIMM-PIM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/chime-a-case-for-efficient-long-context-attention-fc/";
            },},{id: "paper_reading-2026-isca-codo-an-automated-compiler-for-comprehensive-dataflow-optimization",
          title: '(2026 ISCA) CODO: An Automated Compiler for Comprehensive Dataflow Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/codo-an-automated-compiler-for-comprehensive-dataflow/";
            },},{id: "paper_reading-2026-isca-columnkeeper-efficient-solutions-in-dram-based-columndisturb-mitigation",
          title: '(2026 ISCA) ColumnKeeper: Efficient Solutions in DRAM-based ColumnDisturb Mitigation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/columnkeeper-efficient-solutions-in-dram-based/";
            },},{id: "paper_reading-2026-isca-combating-the-memory-walls-optimization-pathways-for-long-context-agentic-llm-inference",
          title: '(2026 ISCA) Combating the Memory Walls: Optimization Pathways for Long-Context Agentic LLM Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/combating-the-memory-walls-optimization-pathways-for-long/";
            },},{id: "paper_reading-2026-isca-conbin-a-performance-convergence-framework-for-wafer-scale-chip-binning",
          title: '(2026 ISCA) ConBin: A Performance-Convergence Framework for Wafer-Scale Chip Binning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/conbin-a-performance-convergence-framework-for-wafer-scale/";
            },},{id: "paper_reading-2026-isca-conserve-contiguity-preserving-memory-management-for-multi-turn-llm-serving",
          title: '(2026 ISCA) ConServe: Contiguity-Preserving Memory Management for Multi-Turn LLM Serving',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/conserve-contiguity-preserving-memory-management-for-multi/";
            },},{id: "paper_reading-2026-isca-coset-ensemble-decoder-for-quantum-error-correction-with-algorithm-hardware-co-design",
          title: '(2026 ISCA) Coset Ensemble Decoder for Quantum Error Correction with Algorithm–Hardware Co-Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/coset-ensemble-decoder-for-quantum-error-correction-with/";
            },},{id: "paper_reading-2026-isca-cosm-a-cooperative-scheduling-framework-for-concurrent-pim-and-cpu-execution-on-mobile-devices",
          title: '(2026 ISCA) COSM: A Cooperative Scheduling Framework for Concurrent PIM and CPU Execution...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/cosm-a-cooperative-scheduling-framework-for-concurrent-pim/";
            },},{id: "paper_reading-2026-isca-darkstream-exploiting-internal-throughput-contention-in-data-streaming-accelerator-for-timing-attacks",
          title: '(2026 ISCA) DarkStream: Exploiting Internal Throughput Contention in Data Streaming Accelerator for Timing...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/darkstream-exploiting-internal-throughput-contention-in/";
            },},{id: "paper_reading-2026-isca-dcc-data-centric-compilation-of-machine-learning-kernels-for-processing-in-memory-architectures",
          title: '(2026 ISCA) DCC: Data-Centric Compilation of Machine Learning Kernels for Processing-In-Memory Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/dcc-data-centric-compilation-of-machine-learning-kernels/";
            },},{id: "paper_reading-2026-isca-deduplication-later-duplication-centric-multi-gpu-memory",
          title: '(2026 ISCA) Deduplication Later: Duplication-Centric Multi-GPU Memory',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/deduplication-later-duplication-centric-multi-gpu-memory/";
            },},{id: "paper_reading-2026-isca-dejavu-why-you-should-write-to-your-dram-rows-twice-carefully",
          title: '(2026 ISCA) DejaVu: Why You Should Write to Your DRAM Rows Twice Carefully...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/dejavu-why-you-should-write-to-your-dram-rows-twice/";
            },},{id: "paper_reading-2026-isca-democratizing-and-accelerating-hardware-verification-with-software-native-optimization",
          title: '(2026 ISCA) Democratizing and Accelerating Hardware Verification with Software-Native Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/democratizing-and-accelerating-hardware-verification-with/";
            },},{id: "paper_reading-2026-isca-desscam-an-event-d-riven-architecture-with-in-sensor-epitopological-sparse-sampling-to-break-the-latency-power-tradeoff-in-eye-tracking",
          title: '(2026 ISCA) DESSCam: An Event-D riven Architecture with In-Sensor Epitopological Sparse Sampling to...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/desscam-an-event-d-riven-architecture-with-in-sensor/";
            },},{id: "paper_reading-2026-isca-diamond-dynamic-inference-for-adaptive-edge-moe-with-heterogeneous-in-nand-and-near-dram-compute-architecture",
          title: '(2026 ISCA) DIAMoND: Dynamic Inference for Adaptive Edge MoE with Heterogeneous In-NAND and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/diamond-dynamic-inference-for-adaptive-edge-moe-with/";
            },},{id: "paper_reading-2026-isca-dice-enabling-efficient-general-purpose-simt-execution-with-statically-scheduled-coarse-grained-reconfigurable-arrays",
          title: '(2026 ISCA) DICE: Enabling Efficient General-Purpose SIMT Execution with Statically Scheduled Coarse-Grained Reconfigurable...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/dice-enabling-efficient-general-purpose-simt-execution-with/";
            },},{id: "paper_reading-2026-isca-dice-detailed-inter-chiplet-end-to-end-phy-modeling-for-accurate-chiplet",
          title: '(2026 ISCA) DICE:Detailed Inter-Chiplet End-to-End PHY Modeling for Accurate Chiplet',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/dicedetailed-inter-chiplet-end-to-end-phy-modeling-for/";
            },},{id: "paper_reading-2026-isca-disdp-disaggregating-compute-network-and-storage-for-model-sharded-data-parallel-training",
          title: '(2026 ISCA) DisDP: Disaggregating Compute Network and Storage for Model-Sharded Data-Parallel Training',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/disdp-disaggregating-compute-network-and-storage-for-model/";
            },},{id: "paper_reading-2026-isca-distilling-magic-states-in-the-bicycle-architecture",
          title: '(2026 ISCA) Distilling Magic States in the Bicycle Architecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/distilling-magic-states-in-the-bicycle-architecture/";
            },},{id: "paper_reading-2026-isca-ditpa-a-dit-based-action-planner-accelerator",
          title: '(2026 ISCA) DiTPA: A DiT-based Action Planner Accelerator',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/ditpa-a-dit-based-action-planner-accelerator/";
            },},{id: "paper_reading-2026-isca-don-39-t-surrender-to-low-qps-dollar-fast-and-cost-efficient-anns-with-ridentt-ann",
          title: '(2026 ISCA) Don&amp;#39;t Surrender to Low QPS Dollar - Fast and Cost-Efficient ANNS...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/dont-surrender-to-low-qps-dollar-fast-and-cost-efficient/";
            },},{id: "paper_reading-2026-isca-dorado-clustered-hardware-cache-coherence-for-1-000-cores",
          title: '(2026 ISCA) Dorado: Clustered Hardware Cache Coherence for 1,000+ Cores',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/dorado-clustered-hardware-cache-coherence-for-1000plus-cores/";
            },},{id: "paper_reading-2026-isca-ds-isa-instruction-set-architecture-for-dynamical-system-units",
          title: '(2026 ISCA) DS-ISA: Instruction Set Architecture for Dynamical System Units',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/ds-isa-instruction-set-architecture-for-dynamical-system/";
            },},{id: "paper_reading-2026-isca-dynamic-scheduling-for-ai-accelerators-via-tisa",
          title: '(2026 ISCA) Dynamic Scheduling for AI Accelerators via TISA',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/dynamic-scheduling-for-ai-accelerators-via-tisa/";
            },},{id: "paper_reading-2026-isca-dynopipe-heterogeneous-edge-cloud-llm-serving-with-dynamically-orchestrated-pipeline-boundaries",
          title: '(2026 ISCA) DynoPipe: Heterogeneous Edge-Cloud LLM Serving with Dynamically Orchestrated Pipeline Boundaries',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/dynopipe-heterogeneous-edge-cloud-llm-serving-with/";
            },},{id: "paper_reading-2026-isca-early-silicon-of-raptor-the-first-3d-dram-accelerator-for-generative-inference",
          title: '(2026 ISCA) Early Silicon of Raptor: The First 3D-DRAM Accelerator for Generative Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/early-silicon-of-raptor-the-first-3d-dram-accelerator-for/";
            },},{id: "paper_reading-2026-isca-ecc-enabled-reliable-and-performant-processing-in-memory",
          title: '(2026 ISCA) ECC Enabled Reliable and Performant Processing-in-Memory',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/ecc-enabled-reliable-and-performant-processing-in-memory/";
            },},{id: "paper_reading-2026-isca-echo-efficient-head-orientation-guided-real-time-sound-spatialization-for-virtual-reality",
          title: '(2026 ISCA) ECHO: Efficient Head-Orientation-Guided Real-Time Sound Spatialization for Virtual Reality',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/echo-efficient-head-orientation-guided-real-time-sound/";
            },},{id: "paper_reading-2026-isca-efficient-3d-gaussian-splatting-with-axis-shared-rasterization-and-order-independent-transmittance",
          title: '(2026 ISCA) Efficient 3D Gaussian Splatting with Axis-Shared Rasterization and Order-independent Transmittance',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/efficient-3d-gaussian-splatting-with-axis-shared/";
            },},{id: "paper_reading-2026-isca-elsa-an-el-astic-snn-inference-a-rchitecture-for-efficient-neuromorphic-computing",
          title: '(2026 ISCA) ELSA: An EL astic SNN Inference A rchitecture for Efficient Neuromorphic...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/elsa-an-el-astic-snn-inference-a-rchitecture-for-efficient/";
            },},{id: "paper_reading-2026-isca-enabling-continuous-in-field-introspection-the-programmable-ipu-architecture",
          title: '(2026 ISCA) Enabling Continuous, In-Field Introspection: The Programmable IPU Architecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/enabling-continuous-in-field-introspection-the-programmable/";
            },},{id: "paper_reading-2026-isca-enec-a-lossless-ai-model-compression-method-enabling-fast-inference-on-ascend-npus",
          title: '(2026 ISCA) ENEC: A Lossless AI Model Compression Method Enabling Fast Inference on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/enec-a-lossless-ai-model-compression-method-enabling-fast/";
            },},{id: "paper_reading-2026-isca-enhancing-instruction-prefetching-via-cache-and-tlb-management",
          title: '(2026 ISCA) Enhancing Instruction Prefetching via Cache and TLB Management',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/enhancing-instruction-prefetching-via-cache-and-tlb/";
            },},{id: "paper_reading-2026-isca-eva-accelerating-llm-decoding-via-an-efficient-vector-quantization-architecture",
          title: '(2026 ISCA) EVA: Accelerating LLM Decoding via an Efficient Vector Quantization Architecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/eva-accelerating-llm-decoding-via-an-efficient-vector/";
            },},{id: "paper_reading-2026-isca-fenc-unifying-data-packing-for-efficient-private-inference-via-convolution-and-architecture-aware-fragment-encoding",
          title: '(2026 ISCA) FEnc: Unifying Data Packing for Efficient Private Inference via Convolution and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/fenc-unifying-data-packing-for-efficient-private-inference/";
            },},{id: "paper_reading-2026-isca-five-minute-rule-40-years-later-a-first-principles-revisit-for-modern-memory-hierarchy",
          title: '(2026 ISCA) Five-Minute Rule 40 Years Later: A First-Principles Revisit for Modern Memory...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/five-minute-rule-40-years-later-a-first-principles-revisit/";
            },},{id: "paper_reading-2026-isca-flashtfhe-a-scalable-architecture-for-efficient-multi-bit-fully-homomorphic-encryption",
          title: '(2026 ISCA) FlashTFHE: A Scalable Architecture for Efficient Multi-bit Fully Homomorphic Encryption',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/flashtfhe-a-scalable-architecture-for-efficient-multi-bit/";
            },},{id: "paper_reading-2026-isca-from-lab-to-fleet-building-and-deploying-a-practical-rowhammer-defense-in-cloud-socs",
          title: '(2026 ISCA) From Lab to Fleet: Building and Deploying a Practical Rowhammer Defense...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/from-lab-to-fleet-building-and-deploying-a-practical/";
            },},{id: "paper_reading-2026-isca-from-memorization-to-generalization-a-practical-neural-network-prefetching-framework",
          title: '(2026 ISCA) From Memorization to Generalization: A Practical Neural Network Prefetching Framework',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/from-memorization-to-generalization-a-practical-neural/";
            },},{id: "paper_reading-2026-isca-gautracer-extending-ray-tracing-accelerator-for-gaussian-based-scene-representation",
          title: '(2026 ISCA) GauTracer: Extending Ray Tracing Accelerator for Gaussian-based Scene Representation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/gautracer-extending-ray-tracing-accelerator-for-gaussian/";
            },},{id: "paper_reading-2026-isca-genza-a-general-and-efficient-accelerator-for-diverse-zero-knowledge-proof-protocols",
          title: '(2026 ISCA) GenZA: A General and Efficient Accelerator for Diverse Zero-Knowledge Proof Protocols...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/genza-a-general-and-efficient-accelerator-for-diverse-zero/";
            },},{id: "paper_reading-2026-isca-grains-enabling-high-performance-and-low-cost-via-storage-aware-graph-based-genome-analysis-algorithm-architecture-co-design",
          title: '(2026 ISCA) GRAINS: Enabling High-Performance and Low-Cost via Storage-Aware Graph-Based Genome Analysis Algorithm-Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/grains-enabling-high-performance-and-low-cost-via-storage/";
            },},{id: "paper_reading-2026-isca-graph-hls-a-compiler-framework-for-composable-graph-accelerator-design",
          title: '(2026 ISCA) Graph.hls: A Compiler Framework for Composable Graph Accelerator Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/graphhls-a-compiler-framework-for-composable-graph/";
            },},{id: "paper_reading-2026-isca-harmonia-a-unified-hierarchical-scheduling-framework-for-sparse-matrix-multiplication",
          title: '(2026 ISCA) Harmonia: A Unified Hierarchical Scheduling Framework for Sparse Matrix Multiplication',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/harmonia-a-unified-hierarchical-scheduling-framework-for/";
            },},{id: "paper_reading-2026-isca-hartbreaker-deterministic-fuzzing-of-multi-hart-risc-v-cpus-with-non-deterministic-programs",
          title: '(2026 ISCA) HARTBREAKER: Deterministic Fuzzing of Multi-Hart RISC-V CPUs with Non-Deterministic Programs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/hartbreaker-deterministic-fuzzing-of-multi-hart-risc-v-cpus/";
            },},{id: "paper_reading-2026-isca-hbm-caso-a-coordinated-approach-to-hbm-system-level-and-on-die-ecc",
          title: '(2026 ISCA) HBM-CASO: A Coordinated Approach to HBM System-Level and On-Die ECC',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/hbm-caso-a-coordinated-approach-to-hbm-system-level-and-on/";
            },},{id: "paper_reading-2026-isca-he2-a-communication-light-heterogeneous-architecture-for-efficient-fully-homomorphic-encryption",
          title: '(2026 ISCA) HE2: A Communication-Light Heterogeneous Architecture for Efficient Fully Homomorphic Encryption',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/he2-a-communication-light-heterogeneous-architecture-for/";
            },},{id: "paper_reading-2026-isca-helium-quantifying-microarchitectural-side-channel-leakage-with-probabilistic-guarantees",
          title: '(2026 ISCA) Helium: Quantifying Microarchitectural Side-Channel Leakage with Probabilistic Guarantees',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/helium-quantifying-microarchitectural-side-channel-leakage/";
            },},{id: "paper_reading-2026-isca-hierarchical-wakeup-logic-of-the-issue-queue-for-high-scalability",
          title: '(2026 ISCA) Hierarchical Wakeup Logic of the Issue Queue for High Scalability',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/hierarchical-wakeup-logic-of-the-issue-queue-for-high/";
            },},{id: "paper_reading-2026-isca-hit-a-unified-sparsity-adaptive-architecture-for-high-throughput-matrix-multiplication",
          title: '(2026 ISCA) HiT: A Unified Sparsity-Adaptive Architecture for High-Throughput Matrix Multiplication',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/hit-a-unified-sparsity-adaptive-architecture-for-high/";
            },},{id: "paper_reading-2026-isca-hybridspec-exploiting-hybrid-bonding-memory-to-accelerate-llm-serving-through-heterogeneous-architecture-and-speculative-decoding",
          title: '(2026 ISCA) HybridSpec: Exploiting Hybrid-Bonding Memory to Accelerate LLM Serving through Heterogeneous Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/hybridspec-exploiting-hybrid-bonding-memory-to-accelerate/";
            },},{id: "paper_reading-2026-isca-hyperdrive-hierarchical-exploitation-of-memory-efficiency-for-gpu-based-fhe-acceleration",
          title: '(2026 ISCA) HyperDrive: Hierarchical Exploitation of Memory Efficiency for GPU-Based FHE Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/hyperdrive-hierarchical-exploitation-of-memory-efficiency/";
            },},{id: "paper_reading-2026-isca-icp-exploiting-instruction-correlation-for-prefetching-irregular-memory-accesses",
          title: '(2026 ISCA) ICP: Exploiting Instruction Correlation for Prefetching Irregular Memory Accesses',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/icp-exploiting-instruction-correlation-for-prefetching/";
            },},{id: "paper_reading-2026-isca-intermittence-aware-speculative-page-coloring-for-secure-nvm",
          title: '(2026 ISCA) Intermittence-Aware Speculative Page Coloring for Secure NVM',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/intermittence-aware-speculative-page-coloring-for-secure-nvm/";
            },},{id: "paper_reading-2026-isca-iroknight-ownership-preserving-neural-acceleration-for-inference-serving",
          title: '(2026 ISCA) IroKnight: Ownership-Preserving Neural Acceleration for Inference Serving',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/iroknight-ownership-preserving-neural-acceleration-for/";
            },},{id: "paper_reading-2026-isca-kernelevolve-scaling-agentic-kernel-coding-for-heterogeneous-ai-accelerators-at-meta",
          title: '(2026 ISCA) KernelEvolve: Scaling Agentic Kernel Coding for Heterogeneous AI Accelerators at Meta...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/kernelevolve-scaling-agentic-kernel-coding-for/";
            },},{id: "paper_reading-2026-isca-kernpiler-compiler-optimization-for-quantum-hamiltonian-simulation-with-partial-trotterization",
          title: '(2026 ISCA) Kernpiler: Compiler Optimization for Quantum Hamiltonian Simulation with Partial Trotterization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/kernpiler-compiler-optimization-for-quantum-hamiltonian/";
            },},{id: "paper_reading-2026-isca-l-pcn-a-point-cloud-accelerator-exploiting-spatial-locality-through-octree-based-islandization",
          title: '(2026 ISCA) L-PCN: A Point Cloud Accelerator Exploiting Spatial Locality through Octree-based Islandization...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/l-pcn-a-point-cloud-accelerator-exploiting-spatial-locality/";
            },},{id: "paper_reading-2026-isca-laegis-pinpointing-and-addressing-performance-overheads-of-gpu-based-confidential-computing",
          title: '(2026 ISCA) LAEGIS: Pinpointing and Addressing Performance Overheads of GPU-based Confidential Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/laegis-pinpointing-and-addressing-performance-overheads-of/";
            },},{id: "paper_reading-2026-isca-lembas-cost-efficient-genome-alignment-with-external-memory-and-fpga-acceleration",
          title: '(2026 ISCA) Lembas: Cost-Efficient Genome Alignment with External Memory and FPGA Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/lembas-cost-efficient-genome-alignment-with-external-memory/";
            },},{id: "paper_reading-2026-isca-leveraging-phase-polynomials-for-quantum-circuit-optimization",
          title: '(2026 ISCA) Leveraging Phase Polynomials for Quantum Circuit Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/leveraging-phase-polynomials-for-quantum-circuit/";
            },},{id: "paper_reading-2026-isca-libra-a-high-accuracy-cost-aware-and-coordinated-multi-gpu-page-prefetcher",
          title: '(2026 ISCA) LIBRA: A High-Accuracy Cost-Aware and Coordinated Multi-GPU Page Prefetcher',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/libra-a-high-accuracy-cost-aware-and-coordinated-multi-gpu/";
            },},{id: "paper_reading-2026-isca-lippen-a-lightweight-in-place-pointer-encryption-architecture-for-pointer-integrity",
          title: '(2026 ISCA) LIPPEN: A Lightweight In-Place Pointer Encryption Architecture for Pointer Integrity',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/lippen-a-lightweight-in-place-pointer-encryption/";
            },},{id: "paper_reading-2026-isca-lit-silicon-a-case-where-thermal-imbalance-couples-concurrent-execution-in-multiple-gpus",
          title: '(2026 ISCA) Lit Silicon: A Case Where Thermal Imbalance Couples Concurrent Execution in...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/lit-silicon-a-case-where-thermal-imbalance-couples/";
            },},{id: "paper_reading-2026-isca-loaded-dice-solving-the-non-selection-problem-for-scalable-probabilistic-rowhammer-defense",
          title: '(2026 ISCA) Loaded Dice: Solving the Non-Selection Problem for Scalable Probabilistic RowHammer Defense...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/loaded-dice-solving-the-non-selection-problem-for-scalable/";
            },},{id: "paper_reading-2026-isca-loka-low-precision-kernel-applications-for-recommendation-models-at-scale",
          title: '(2026 ISCA) LoKA: Low-precision Kernel Applications for Recommendation Models At Scale',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/loka-low-precision-kernel-applications-for-recommendation/";
            },},{id: "paper_reading-2026-isca-loong-utilizing-long-stride-reprogramming-to-enhance-the-performance-of-ssds",
          title: '(2026 ISCA) LOONG: Utilizing Long-Stride Reprogramming to Enhance the Performance of SSDs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/loong-utilizing-long-stride-reprogramming-to-enhance-the/";
            },},{id: "paper_reading-2026-isca-lora-towards-improved-applicability-of-reconfigurable-architecture-for-versatile-nonlinear-functions",
          title: '(2026 ISCA) LoRA: Towards Improved Applicability of Reconfigurable Architecture for Versatile Nonlinear Functions...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/lora-towards-improved-applicability-of-reconfigurable/";
            },},{id: "paper_reading-2026-isca-lotus-a-multi-fpga-task-dataflow-architecture-to-accelerate",
          title: '(2026 ISCA) Lotus: A Multi-FPGA Task Dataflow Architecture to Accelerate',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/lotus-a-multi-fpga-task-dataflow-architecture-to-accelerate/";
            },},{id: "paper_reading-2026-isca-m100-an-orchestrated-dataflow-architecture-powering-general-ai-computing",
          title: '(2026 ISCA) M100: An Orchestrated Dataflow Architecture Powering General AI Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/m100-an-orchestrated-dataflow-architecture-powering-general/";
            },},{id: "paper_reading-2026-isca-mapping-and-communication-optimizations-with-fault-tolerance-for-wafer-scale-llm-inference",
          title: '(2026 ISCA) Mapping and Communication Optimizations with Fault Tolerance for Wafer-Scale LLM Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/mapping-and-communication-optimizations-with-fault/";
            },},{id: "paper_reading-2026-isca-mc-oram-a-mask-assisted-and-counter-based-non-deterministic-oram-inside-vm-based-tees",
          title: '(2026 ISCA) MC-ORAM: A Mask-Assisted and Counter-Based Non-Deterministic ORAM inside VM-Based TEEs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/mc-oram-a-mask-assisted-and-counter-based-non-deterministic/";
            },},{id: "paper_reading-2026-isca-meridian-in-memory-acceleration-for-rag-with-document-attention",
          title: '(2026 ISCA) MERIDIAN: In-Memory Acceleration for RAG with Document Attention',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/meridian-in-memory-acceleration-for-rag-with-document/";
            },},{id: "paper_reading-2026-isca-mnemos-a-gpu-based-tfhe-acceleration-framework-with-memory-access-optimization",
          title: '(2026 ISCA) MNEMOS: A GPU-based TFHE Acceleration Framework with Memory Access Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/mnemos-a-gpu-based-tfhe-acceleration-framework-with-memory/";
            },},{id: "paper_reading-2026-isca-moe-hub-taming-software-complexity-for-seamless-moe-overlap-with-hardware-accelerated-communication-on-multi-gpu-systems",
          title: '(2026 ISCA) MoE-Hub: Taming Software Complexity for Seamless MoE Overlap with Hardware-Accelerated Communication...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/moe-hub-taming-software-complexity-for-seamless-moe-overlap/";
            },},{id: "paper_reading-2026-isca-mtia-300-meta-39-s-first-training-chip-featuring-built-in-nics-and-collective-offloading-engines",
          title: '(2026 ISCA) MTIA 300: Meta&amp;#39;s First Training Chip Featuring Built-in NICs and Collective...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/mtia-300-metas-first-training-chip-featuring-built-in-nics/";
            },},{id: "paper_reading-2026-isca-mxffp-microscaling-flexible-floating-point-format-for-large-scale-ai-model-acceleration",
          title: '(2026 ISCA) MXFFP: Microscaling Flexible Floating Point Format for Large-Scale AI Model Acceleration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/mxffp-microscaling-flexible-floating-point-format-for-large/";
            },},{id: "paper_reading-2026-isca-naszip-software-and-hardware-co-design-to-accelerate-approximate-nearest-neighbor-search-with-dimm-based-near-data-processing",
          title: '(2026 ISCA) NasZip: Software and Hardware Co-Design to Accelerate Approximate Nearest Neighbor Search...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/naszip-software-and-hardware-co-design-to-accelerate/";
            },},{id: "paper_reading-2026-isca-nerarch-sim-a-unified-simulator-for-benchmarking-and-dse-of-neural-rendering-accelerators",
          title: '(2026 ISCA) NeRArch-Sim: A Unified Simulator for Benchmarking and DSE of Neural Rendering...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/nerarch-sim-a-unified-simulator-for-benchmarking-and-dse-of/";
            },},{id: "paper_reading-2026-isca-ns-fps-accelerating-farthest-point-sampling-via-neighbor-search-in-large-scale-point-clouds",
          title: '(2026 ISCA) NS-FPS: Accelerating Farthest Point Sampling via Neighbor Search in Large-Scale Point...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/ns-fps-accelerating-farthest-point-sampling-via-neighbor/";
            },},{id: "paper_reading-2026-isca-o3ls-optimizing-lattice-surgery-via-automatic-layout-searching-and-loose-scheduling",
          title: '(2026 ISCA) O3LS: Optimizing Lattice Surgery via Automatic Layout Searching and Loose Scheduling...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/o3ls-optimizing-lattice-surgery-via-automatic-layout/";
            },},{id: "paper_reading-2026-isca-oasis-outlier-aware-lut-based-gemm-with-dual-side-quantization-for-llm-inference-acceleration",
          title: '(2026 ISCA) OASIS: Outlier-Aware LUT-Based GEMM with Dual-Side Quantization for LLM Inference Acceleration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/oasis-outlier-aware-lut-based-gemm-with-dual-side/";
            },},{id: "paper_reading-2026-isca-observability-aided-gpu-memory-oversubscription",
          title: '(2026 ISCA) Observability-aided GPU Memory Oversubscription',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/observability-aided-gpu-memory-oversubscription/";
            },},{id: "paper_reading-2026-isca-omelet-a-packaging-aware-hierarchical-interconnect-simulator-for-2-5d-3d-chiplet-architectures",
          title: '(2026 ISCA) Omelet: A Packaging-Aware Hierarchical Interconnect Simulator for 2.5D-3D Chiplet Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/omelet-a-packaging-aware-hierarchical-interconnect/";
            },},{id: "paper_reading-2026-isca-omni-lut-energy-efficient-lut-based-accelerator-with-hardware-aware-kv-cache-quantization",
          title: '(2026 ISCA) Omni-LUT: Energy-Efficient LUT-based Accelerator with Hardware-Aware KV Cache Quantization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/omni-lut-energy-efficient-lut-based-accelerator-with/";
            },},{id: "paper_reading-2026-isca-optimized-memory-tagging-on-ampereone-processors",
          title: '(2026 ISCA) Optimized Memory Tagging on AmpereOne Processors',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/optimized-memory-tagging-on-ampereone-processors/";
            },},{id: "paper_reading-2026-isca-optimizing-spatial-data-structure-with-near-cache-acceleration-by-exploiting-physical-locality",
          title: '(2026 ISCA) Optimizing Spatial Data Structure with Near-Cache Acceleration by Exploiting Physical Locality...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/optimizing-spatial-data-structure-with-near-cache/";
            },},{id: "paper_reading-2026-isca-p-llm-an-integrated-npu-pim-accelerator-for-edge-llm-inference",
          title: '(2026 ISCA) P-LLM: An Integrated NPU-PIM Accelerator for Edge LLM Inference',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/p-llm-an-integrated-npu-pim-accelerator-for-edge-llm/";
            },},{id: "paper_reading-2026-isca-paretoes-hardware-accelerated-sparse-embedding-similarity-via-pareto-optimal-pruning",
          title: '(2026 ISCA) ParetoES: Hardware-Accelerated Sparse Embedding Similarity via Pareto-Optimal Pruning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/paretoes-hardware-accelerated-sparse-embedding-similarity/";
            },},{id: "paper_reading-2026-isca-patterns-behind-chaos-forecasting-data-movement-for-efficient-large-scale-moe-llm-inference",
          title: '(2026 ISCA) Patterns behind Chaos: Forecasting Data Movement for Efficient Large-Scale MoE LLM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/patterns-behind-chaos-forecasting-data-movement-for/";
            },},{id: "paper_reading-2026-isca-phaseweave-phase-aware-execution-on-heterogeneous-chiplet-architectures-for-datacenters",
          title: '(2026 ISCA) PhaseWeave: Phase-Aware Execution on Heterogeneous Chiplet Architectures for Datacenters',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/phaseweave-phase-aware-execution-on-heterogeneous-chiplet/";
            },},{id: "paper_reading-2026-isca-photonic-quantum-computing-on-spin-memory-architecture-with-tree-encoded-fusion",
          title: '(2026 ISCA) Photonic Quantum Computing on Spin Memory Architecture with Tree-Encoded Fusion',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/photonic-quantum-computing-on-spin-memory-architecture-with/";
            },},{id: "paper_reading-2026-isca-pipe-weave-synergizing-analytical-and-learning-models-for-unified-gpu-performance-prediction",
          title: '(2026 ISCA) PIPE WEAVE: Synergizing Analytical and Learning Models for Unified GPU Performance...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/pipe-weave-synergizing-analytical-and-learning-models-for/";
            },},{id: "paper_reading-2026-isca-pipecomm-maximizing-link-utilization-through-pipeline-aware-collective-communication-synthesis",
          title: '(2026 ISCA) PipeComm: Maximizing Link Utilization through Pipeline-Aware Collective Communication Synthesis',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/pipecomm-maximizing-link-utilization-through-pipeline-aware/";
            },},{id: "paper_reading-2026-isca-pipeimc-a-pipelined-in-sram-computing-architecture",
          title: '(2026 ISCA) PipeIMC: a Pipelined In-SRAM Computing Architecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/pipeimc-a-pipelined-in-sram-computing-architecture/";
            },},{id: "paper_reading-2026-isca-power-sloshing-in-compound-servers-for-large-scale-ai-inference-workloads",
          title: '(2026 ISCA) Power Sloshing in Compound Servers for Large-Scale AI Inference Workloads',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/power-sloshing-in-compound-servers-for-large-scale-ai/";
            },},{id: "paper_reading-2026-isca-powergrad-hierarchical-power-management-for-power-limited-ml-inference-clusters",
          title: '(2026 ISCA) PowerGrad: Hierarchical Power Management for Power-Limited ML Inference Clusters',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/powergrad-hierarchical-power-management-for-power-limited/";
            },},{id: "paper_reading-2026-isca-powerweave-unlocking-energy-efficient-ml-on-gpus-with-os-level-spatial-power-management",
          title: '(2026 ISCA) PowerWeave: Unlocking Energy-Efficient ML on GPUs with OS-Level Spatial Power Management...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/powerweave-unlocking-energy-efficient-ml-on-gpus-with-os/";
            },},{id: "paper_reading-2026-isca-prometheus-toward-resilient-data-centers-through-optimized-cooling-infrastructure",
          title: '(2026 ISCA) Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/prometheus-toward-resilient-data-centers-through-optimized/";
            },},{id: "paper_reading-2026-isca-prowhammer-propagating-bit-flips-from-cpu-to-gpu",
          title: '(2026 ISCA) PRowhammer: Propagating Bit-flips from CPU to GPU',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/prowhammer-propagating-bit-flips-from-cpu-to-gpu/";
            },},{id: "paper_reading-2026-isca-pudghost-experimental-analysis-of-computation-result-corruption-in-processing-using-dram-operations-on-real-dram-chips-and-implications-for-future-systems",
          title: '(2026 ISCA) PuDGhost: Experimental Analysis of Computation Result Corruption in Processing-using-DRAM Operations on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/pudghost-experimental-analysis-of-computation-result/";
            },},{id: "paper_reading-2026-isca-pvac-a-rowhammer-mitigation-architecture-exploiting-per-victim-row-counting",
          title: '(2026 ISCA) PVAC: A RowHammer Mitigation Architecture Exploiting Per-victim-row Counting',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/pvac-a-rowhammer-mitigation-architecture-exploiting-per/";
            },},{id: "paper_reading-2026-isca-qed-scalable-consistency-verification-of-memory-instruction-reordering-in-hardware",
          title: '(2026 ISCA) QED: Scalable Consistency Verification of Memory Instruction Reordering in Hardware',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/qed-scalable-consistency-verification-of-memory-instruction/";
            },},{id: "paper_reading-2026-isca-qimeng-tensify-scaling-up-tensor-computation-optimization-via-architecture-aware-llm-guided-mcts",
          title: '(2026 ISCA) QiMeng-Tensify: Scaling up Tensor Computation Optimization via Architecture-Aware LLM-Guided MCTS',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/qimeng-tensify-scaling-up-tensor-computation-optimization/";
            },},{id: "paper_reading-2026-isca-r-max-extending-belady-39-s-min-with-prefetching-to-bound-realistic-cache-performance",
          title: '(2026 ISCA) R-Max: Extending Belady&amp;#39;s MIN with Prefetching to Bound Realistic Cache Performance...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/r-max-extending-beladys-min-with-prefetching-to-bound/";
            },},{id: "paper_reading-2026-isca-r2d2-robotized-reconfigurable-network-for-disaggregated-datacenters",
          title: '(2026 ISCA) R2D2: Robotized Reconfigurable Network for Disaggregated Datacenters',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/r2d2-robotized-reconfigurable-network-for-disaggregated/";
            },},{id: "paper_reading-2026-isca-random-access-hardware-sequence-compression",
          title: '(2026 ISCA) Random-Access Hardware Sequence Compression',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/random-access-hardware-sequence-compression/";
            },},{id: "paper_reading-2026-isca-rangeguard-efficient-bounded-approximate-error-correction-for-reliable-dnns",
          title: '(2026 ISCA) RangeGuard: Efficient, Bounded Approximate Error Correction for Reliable DNNs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/rangeguard-efficient-bounded-approximate-error-correction/";
            },},{id: "paper_reading-2026-isca-rearchitecting-the-datacenter-lifecycle-for-ai",
          title: '(2026 ISCA) Rearchitecting the Datacenter Lifecycle for AI',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/rearchitecting-the-datacenter-lifecycle-for-ai/";
            },},{id: "paper_reading-2026-isca-reducing-page-faults-via-invalidation-based-mapping-propagation-in-multi-gpu-systems",
          title: '(2026 ISCA) Reducing Page Faults via Invalidation-based Mapping Propagation in Multi-GPU Systems',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/reducing-page-faults-via-invalidation-based-mapping/";
            },},{id: "paper_reading-2026-isca-revelator-rapid-data-fetching-via-system-software-guided-hash-based-speculative-address-translation",
          title: '(2026 ISCA) Revelator: Rapid Data Fetching via System-Software-Guided Hash-based Speculative Address Translation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/revelator-rapid-data-fetching-via-system-software-guided/";
            },},{id: "paper_reading-2026-isca-revisiting-global-value-prediction-a-resurgent-complement-to-local-predictors",
          title: '(2026 ISCA) Revisiting Global Value Prediction: A Resurgent Complement to Local Predictors',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/revisiting-global-value-prediction-a-resurgent-complement/";
            },},{id: "paper_reading-2026-isca-rhodes-robust-optimization-for-uncertainty-aware-design-of-co2-efficient-computing-systems",
          title: '(2026 ISCA) RHODES: Robust Optimization for Uncertainty-Aware Design of CO2-Efficient Computing Systems',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/rhodes-robust-optimization-for-uncertainty-aware-design-of/";
            },},{id: "paper_reading-2026-isca-rocc-harnessing-raster-operations-pipeline-for-efficient-tensor-collective-communication",
          title: '(2026 ISCA) RoCC: Harnessing Raster Operations Pipeline for Efficient Tensor Collective Communication',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/rocc-harnessing-raster-operations-pipeline-for-efficient/";
            },},{id: "paper_reading-2026-isca-runlts-branch-prediction-with-register-value-correlations-and-hierarchical-table-orchestration",
          title: '(2026 ISCA) RUNLTS: Branch Prediction with Register-Value Correlations and Hierarchical Table Orchestration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/runlts-branch-prediction-with-register-value-correlations/";
            },},{id: "paper_reading-2026-isca-satic-an-optimizing-ising-compiler-for-sat-isfiability",
          title: '(2026 ISCA) SATIC: An Optimizing Ising Compiler for SAT(isfiability)',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/satic-an-optimizing-ising-compiler-for-satisfiability/";
            },},{id: "paper_reading-2026-isca-scalable-synthesis-of-distributed-llm-workloads-through-symbolic-tensor-graphs",
          title: '(2026 ISCA) Scalable Synthesis of distributed LLM workloads through Symbolic Tensor Graphs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/scalable-synthesis-of-distributed-llm-workloads-through/";
            },},{id: "paper_reading-2026-isca-scrooge-circuit-level-design-and-optimization-framework-for-r-isc-v-out-of-order-gpus",
          title: '(2026 ISCA) sCROOGe: Circuit-level Design and Optimization Framework for R ISC-V Out-of-Order GPUs...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/scrooge-circuit-level-design-and-optimization-framework-for/";
            },},{id: "paper_reading-2026-isca-segfold-accelerating-sparse-gemm-with-a-fine-grained-dynamic-dataflow",
          title: '(2026 ISCA) SegFold: Accelerating Sparse GEMM with a Fine-Grained Dynamic Dataflow',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/segfold-accelerating-sparse-gemm-with-a-fine-grained/";
            },},{id: "paper_reading-2026-isca-shining-light-on-silicon-photonic-dnn-accelerators",
          title: '(2026 ISCA) Shining Light on Silicon Photonic DNN Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/shining-light-on-silicon-photonic-dnn-accelerators/";
            },},{id: "paper_reading-2026-isca-shyla-3d-stacked-nvm-dram-hybrid-llm-inference-architecture-exploiting-data-and-memory-heterogeneity",
          title: '(2026 ISCA) SHyLA: 3D-Stacked NVM-DRAM Hybrid LLM-Inference Architecture Exploiting Data and Memory Heterogeneity...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/shyla-3d-stacked-nvm-dram-hybrid-llm-inference-architecture/";
            },},{id: "paper_reading-2026-isca-singularbit-exploiting-synergy-of-singular-value-decomposition-and-low-bit-quantization-for-weight-and-kv-compression-in-llm-inference",
          title: '(2026 ISCA) SingularBit: Exploiting Synergy of Singular Value Decomposition and Low-Bit Quantization for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/singularbit-exploiting-synergy-of-singular-value/";
            },},{id: "paper_reading-2026-isca-slice-a-selective-local-inference-framework-with-codec-exploitation-for-accelerating-video-super-resolution",
          title: '(2026 ISCA) SLICE: A Selective Local Inference Framework with Codec Exploitation for Accelerating...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/slice-a-selective-local-inference-framework-with-codec/";
            },},{id: "paper_reading-2026-isca-smoe-an-algorithm-system-co-design-for-pushing-moe-to-the-edge-via-expert-substitution",
          title: '(2026 ISCA) SMoE: An Algorithm-System Co-Design for Pushing MoE to the Edge via...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/smoe-an-algorithm-system-co-design-for-pushing-moe-to-the/";
            },},{id: "paper_reading-2026-isca-smooth-hardware-assisted-fine-grained-on-chip-memory-management-for-efficient-on-device-llm-inference",
          title: '(2026 ISCA) SMOOTH: Hardware-Assisted Fine-Grained On-Chip Memory Management for Efficient On-Device LLM Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/smooth-hardware-assisted-fine-grained-on-chip-memory/";
            },},{id: "paper_reading-2026-isca-spec-cpu-the-next-generation",
          title: '(2026 ISCA) SPEC CPU: The Next Generation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/spec-cpu-the-next-generation/";
            },},{id: "paper_reading-2026-isca-ssbench-automated-characterization-of-memory-dependence-predictors-on-modern-cpus",
          title: '(2026 ISCA) SSBench: Automated Characterization of Memory Dependence Predictors on Modern CPUs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/ssbench-automated-characterization-of-memory-dependence/";
            },},{id: "paper_reading-2026-isca-step-adaptive-s-patio-temporal-expert-prefetching-for-low-latency-and-memory-efficient-moe-inference",
          title: '(2026 ISCA) STEP: Adaptive S patio-Temporal Expert Prefetching for Low-Latency and Memory-Efficient MoE...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/step-adaptive-s-patio-temporal-expert-prefetching-for-low/";
            },},{id: "paper_reading-2026-isca-step-spatial-footprint-prefetcher-with-multi-point-temporal-triggers",
          title: '(2026 ISCA) STEP: Spatial Footprint Prefetcher with Multi-Point Temporal Triggers',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/step-spatial-footprint-prefetcher-with-multi-point-temporal/";
            },},{id: "paper_reading-2026-isca-symbiotic-mllm-serving-dynamically-balancing-parallelism-across-gpus-and-resources-within-gpus",
          title: '(2026 ISCA) Symbiotic MLLM Serving: Dynamically Balancing Parallelism Across GPUs and Resources Within...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/symbiotic-mllm-serving-dynamically-balancing-parallelism/";
            },},{id: "paper_reading-2026-isca-tagt-an-efficient-graph-transformer-accelerator-with-topology-aware-sparsification-and-merging",
          title: '(2026 ISCA) TAGT: An Efficient Graph Transformer Accelerator with Topology-aware Sparsification and Merging...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/tagt-an-efficient-graph-transformer-accelerator-with/";
            },},{id: "paper_reading-2026-isca-taking-analytic-databases-to-the-bank",
          title: '(2026 ISCA) Taking Analytic Databases to the Bank',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/taking-analytic-databases-to-the-bank/";
            },},{id: "paper_reading-2026-isca-takoformal-enabling-robust-software-for-programmable-memory-hierarchies",
          title: '(2026 ISCA) takoFormal: Enabling Robust Software for Programmable Memory Hierarchies',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/takoformal-enabling-robust-software-for-programmable-memory/";
            },},{id: "paper_reading-2026-isca-tdmsim-enabling-high-density-and-energy-efficient-gpu-dram-caches-with-2d-materials-for-data-intensive-applications",
          title: '(2026 ISCA) TDMSim: Enabling High-Density and Energy-Efficient GPU DRAM Caches with 2D-Materials for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/tdmsim-enabling-high-density-and-energy-efficient-gpu-dram/";
            },},{id: "paper_reading-2026-isca-tensorprism-rethinking-sparse-high-order-tensor-acceleration-via-co-occurrence-graph",
          title: '(2026 ISCA) TensorPrism: Rethinking Sparse High-order Tensor Acceleration via Co-occurrence Graph',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/tensorprism-rethinking-sparse-high-order-tensor/";
            },},{id: "paper_reading-2026-isca-tetris-efficient-long-context-llm-serving-with-chunkwise-dynamic-sequence-parallelism",
          title: '(2026 ISCA) Tetris: Efficient Long-context LLM Serving with Chunkwise Dynamic Sequence Parallelism',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/tetris-efficient-long-context-llm-serving-with-chunkwise/";
            },},{id: "paper_reading-2026-isca-timegaps-channels-exploiting-cpu-halted-time-for-fun-and-profit",
          title: '(2026 ISCA) TimeGaps Channels: Exploiting CPU Halted Time for Fun and Profit',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/timegaps-channels-exploiting-cpu-halted-time-for-fun-and/";
            },},{id: "paper_reading-2026-isca-towards-practical-interrupt-side-channel-attacks-on-macos-for-apple-silicon",
          title: '(2026 ISCA) Towards Practical Interrupt Side-Channel Attacks on macOS for Apple Silicon',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/towards-practical-interrupt-side-channel-attacks-on-macos/";
            },},{id: "paper_reading-2026-isca-transpiler-architecture-co-design-to-curb-clifford-costs-in-fault-tolerant-quantum-computing",
          title: '(2026 ISCA) Transpiler-Architecture Co-Design to Curb Clifford Costs in Fault-Tolerant Quantum Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/transpiler-architecture-co-design-to-curb-clifford-costs-in/";
            },},{id: "paper_reading-2026-isca-triage-an-adaptive-parallel-window-decoding-scheduler-for-real-time-fault-tolerant-quantum-computation",
          title: '(2026 ISCA) Triage: An Adaptive Parallel Window Decoding Scheduler for Real-time Fault-Tolerant Quantum...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/triage-an-adaptive-parallel-window-decoding-scheduler-for/";
            },},{id: "paper_reading-2026-isca-ttp-a-hardware-efficient-design-for-precise-prefetching-in-ray-tracing",
          title: '(2026 ISCA) TTP: A Hardware-Efficient Design for Precise Prefetching in Ray Tracing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/ttp-a-hardware-efficient-design-for-precise-prefetching-in/";
            },},{id: "paper_reading-2026-isca-tusq-tracking-uncomputation-and-sampling-for-noisy-quantum-simulation",
          title: '(2026 ISCA) TUSQ: Tracking Uncomputation and Sampling for Noisy Quantum Simulation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/tusq-tracking-uncomputation-and-sampling-for-noisy-quantum/";
            },},{id: "paper_reading-2026-isca-understanding-inference-scaling-for-llms-bottlenecks-trade-offs-and-performance-principles",
          title: '(2026 ISCA) Understanding Inference Scaling for LLMs: Bottlenecks, Trade-offs, and Performance Principles',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/understanding-inference-scaling-for-llms-bottlenecks-trade/";
            },},{id: "paper_reading-2026-isca-unicore-a-bit-width-scalable-gemm-unit-for-unified-llm-inference",
          title: '(2026 ISCA) UniCore: A Bit-Width Scalable GEMM Unit for Unified LLM Inference',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/unicore-a-bit-width-scalable-gemm-unit-for-unified-llm/";
            },},{id: "paper_reading-2026-isca-unifying-qubit-routing-across-diverse-quantum-isas-via-canonical-representation",
          title: '(2026 ISCA) Unifying Qubit Routing Across Diverse Quantum ISAs via Canonical Representation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/unifying-qubit-routing-across-diverse-quantum-isas-via/";
            },},{id: "paper_reading-2026-isca-unlocking-pipeline-parallelism-for-bootstrapping-a-pipelined-multi-chiplet-tfhe-accelerator",
          title: '(2026 ISCA) Unlocking Pipeline Parallelism for Bootstrapping: A Pipelined Multi-Chiplet TFHE Accelerator',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/unlocking-pipeline-parallelism-for-bootstrapping-a/";
            },},{id: "paper_reading-2026-isca-urng-a-framework-for-assessing-randomness-in-intermittent-computing-devices",
          title: '(2026 ISCA) uRNG: A Framework for Assessing Randomness in Intermittent Computing Devices',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/urng-a-framework-for-assessing-randomness-in-intermittent/";
            },},{id: "paper_reading-2026-isca-vistara-making-cxl-real-full-path-from-asic-design-and-os-support-to-hyperscale-deployment",
          title: '(2026 ISCA) Vistara: Making CXL Real—Full Path from ASIC Design and OS Support...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/vistara-making-cxl-real-full-path-from-asic-design-and-os/";
            },},{id: "paper_reading-2026-isca-waferbrain-whole-brain-scale-neuromorphic-architecture-based-on-wafer-scale-integration",
          title: '(2026 ISCA) WaferBRAIN: Whole-Brain Scale Neuromorphic Architecture Based on Wafer-Scale Integration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/waferbrain-whole-brain-scale-neuromorphic-architecture/";
            },},{id: "paper_reading-2026-isca-xtramac-an-efficient-mac-architecture-for-mixed-precision-llm-inference-on-fpga",
          title: '(2026 ISCA) XtraMAC: An Efficient MAC Architecture for Mixed-Precision LLM Inference on FPGA...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/2026-ISCA/xtramac-an-efficient-mac-architecture-for-mixed-precision/";
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
            },},{id: "paper_reading-2026-isca-capa-manufacturing-carbon-estimation-for-advanced-packaged-architectures",
          title: '(2026 ISCA) CAPA: Manufacturing Carbon Estimation for Advanced-Packaged Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/capa-manufacturing-carbon-estimation-for-advanced-packaged/";
            },},{id: "paper_reading-2026-isca-dice-detailed-inter-chiplet-end-to-end-phy-modeling-for-accurate-chiplet",
          title: '(2026 ISCA) DICE:Detailed Inter-Chiplet End-to-End PHY Modeling for Accurate Chiplet',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/dicedetailed-inter-chiplet-end-to-end-phy-modeling-for/";
            },},{id: "paper_reading-2026-isca-phaseweave-phase-aware-execution-on-heterogeneous-chiplet-architectures-for-datacenters",
          title: '(2026 ISCA) PhaseWeave: Phase-Aware Execution on Heterogeneous Chiplet Architectures for Datacenters',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/phaseweave-phase-aware-execution-on-heterogeneous-chiplet/";
            },},{id: "paper_reading-2026-isca-unlocking-pipeline-parallelism-for-bootstrapping-a-pipelined-multi-chiplet-tfhe-accelerator",
          title: '(2026 ISCA) Unlocking Pipeline Parallelism for Bootstrapping: A Pipelined Multi-Chiplet TFHE Accelerator',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/unlocking-pipeline-parallelism-for-bootstrapping-a/";
            },},{id: "paper_reading-2026-isca-waferbrain-whole-brain-scale-neuromorphic-architecture-based-on-wafer-scale-integration",
          title: '(2026 ISCA) WaferBRAIN: Whole-Brain Scale Neuromorphic Architecture Based on Wafer-Scale Integration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-3DIC/waferbrain-whole-brain-scale-neuromorphic-architecture/";
            },},{id: "paper_reading-2026-isca-accelerating-moe-with-dynamic-in-switch-computing-on-multi-gpus",
          title: '(2026 ISCA) Accelerating MoE with Dynamic In-Switch Computing on Multi-GPUs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/accelerating-moe-with-dynamic-in-switch-computing-on-multi/";
            },},{id: "paper_reading-2026-isca-accelerator-polymorphism-transcending-domain-specific-architectures-with-robotics",
          title: '(2026 ISCA) Accelerator Polymorphism: Transcending Domain-Specific Architectures with Robotics',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/accelerator-polymorphism-transcending-domain-specific/";
            },},{id: "paper_reading-2026-isca-approaching-shannon-bound-with-lossless-llm-weight-compression",
          title: '(2026 ISCA) Approaching Shannon Bound with Lossless LLM Weight Compression',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/approaching-shannon-bound-with-lossless-llm-weight/";
            },},{id: "paper_reading-2026-isca-aquant-repurposing-codec-for-vlm-acceleration-via-adaptive-quantization",
          title: '(2026 ISCA) AQuant: Repurposing CODEC for VLM Acceleration via Adaptive Quantization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/aquant-repurposing-codec-for-vlm-acceleration-via-adaptive/";
            },},{id: "paper_reading-2026-isca-atx-accelerator-task-extensions",
          title: '(2026 ISCA) ATX: Accelerator Task Extensions',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/atx-accelerator-task-extensions/";
            },},{id: "paper_reading-2026-isca-axle-coordinated-offloading-with-asynchronous-back-streaming-in-computational-memory-systems",
          title: '(2026 ISCA) AXLE: Coordinated Offloading with Asynchronous Back-Streaming in Computational Memory Systems',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/axle-coordinated-offloading-with-asynchronous-back/";
            },},{id: "paper_reading-2026-isca-baap-coupling-compute-in-sram-with-dram-banks-for-near-memory-processing",
          title: '(2026 ISCA) BAAP: Coupling Compute-in-SRAM with DRAM Banks for Near-Memory Processing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/baap-coupling-compute-in-sram-with-dram-banks-for-near/";
            },},{id: "paper_reading-2026-isca-bridging-efficiency-and-scalability-in-llm-system-via-3d-hybrid-pim-with-2d-in-transit-computation",
          title: '(2026 ISCA) Bridging Efficiency and Scalability in LLM System via 3D Hybrid PIM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/bridging-efficiency-and-scalability-in-llm-system-via-3d/";
            },},{id: "paper_reading-2026-isca-bringing-near-data-processing-into-the-low-bit-floating-point-era",
          title: '(2026 ISCA) Bringing Near Data Processing into the Low-Bit Floating-Point Era',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/bringing-near-data-processing-into-the-low-bit-floating/";
            },},{id: "paper_reading-2026-isca-cassandra-enabling-reasoning-llms-at-edge-via-self-speculative-decoding",
          title: '(2026 ISCA) Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/cassandra-enabling-reasoning-llms-at-edge-via-self/";
            },},{id: "paper_reading-2026-isca-chime-a-case-for-efficient-long-context-attention-fc-disaggregated-inference-with-dimm-pim",
          title: '(2026 ISCA) CHIME: A Case for Efficient Long-Context Attention-FC Disaggregated Inference with DIMM-PIM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/chime-a-case-for-efficient-long-context-attention-fc/";
            },},{id: "paper_reading-2026-isca-combating-the-memory-walls-optimization-pathways-for-long-context-agentic-llm-inference",
          title: '(2026 ISCA) Combating the Memory Walls: Optimization Pathways for Long-Context Agentic LLM Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/combating-the-memory-walls-optimization-pathways-for-long/";
            },},{id: "paper_reading-2026-isca-cosm-a-cooperative-scheduling-framework-for-concurrent-pim-and-cpu-execution-on-mobile-devices",
          title: '(2026 ISCA) COSM: A Cooperative Scheduling Framework for Concurrent PIM and CPU Execution...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/cosm-a-cooperative-scheduling-framework-for-concurrent-pim/";
            },},{id: "paper_reading-2026-isca-dcc-data-centric-compilation-of-machine-learning-kernels-for-processing-in-memory-architectures",
          title: '(2026 ISCA) DCC: Data-Centric Compilation of Machine Learning Kernels for Processing-In-Memory Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/dcc-data-centric-compilation-of-machine-learning-kernels/";
            },},{id: "paper_reading-2026-isca-diamond-dynamic-inference-for-adaptive-edge-moe-with-heterogeneous-in-nand-and-near-dram-compute-architecture",
          title: '(2026 ISCA) DIAMoND: Dynamic Inference for Adaptive Edge MoE with Heterogeneous In-NAND and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/diamond-dynamic-inference-for-adaptive-edge-moe-with/";
            },},{id: "paper_reading-2026-isca-ditpa-a-dit-based-action-planner-accelerator",
          title: '(2026 ISCA) DiTPA: A DiT-based Action Planner Accelerator',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/ditpa-a-dit-based-action-planner-accelerator/";
            },},{id: "paper_reading-2026-isca-dynamic-scheduling-for-ai-accelerators-via-tisa",
          title: '(2026 ISCA) Dynamic Scheduling for AI Accelerators via TISA',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/dynamic-scheduling-for-ai-accelerators-via-tisa/";
            },},{id: "paper_reading-2026-isca-dynopipe-heterogeneous-edge-cloud-llm-serving-with-dynamically-orchestrated-pipeline-boundaries",
          title: '(2026 ISCA) DynoPipe: Heterogeneous Edge-Cloud LLM Serving with Dynamically Orchestrated Pipeline Boundaries',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/dynopipe-heterogeneous-edge-cloud-llm-serving-with/";
            },},{id: "paper_reading-2026-isca-early-silicon-of-raptor-the-first-3d-dram-accelerator-for-generative-inference",
          title: '(2026 ISCA) Early Silicon of Raptor: The First 3D-DRAM Accelerator for Generative Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/early-silicon-of-raptor-the-first-3d-dram-accelerator-for/";
            },},{id: "paper_reading-2026-isca-ecc-enabled-reliable-and-performant-processing-in-memory",
          title: '(2026 ISCA) ECC Enabled Reliable and Performant Processing-in-Memory',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/ecc-enabled-reliable-and-performant-processing-in-memory/";
            },},{id: "paper_reading-2026-isca-elsa-an-el-astic-snn-inference-a-rchitecture-for-efficient-neuromorphic-computing",
          title: '(2026 ISCA) ELSA: An EL astic SNN Inference A rchitecture for Efficient Neuromorphic...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/elsa-an-el-astic-snn-inference-a-rchitecture-for-efficient/";
            },},{id: "paper_reading-2026-isca-enec-a-lossless-ai-model-compression-method-enabling-fast-inference-on-ascend-npus",
          title: '(2026 ISCA) ENEC: A Lossless AI Model Compression Method Enabling Fast Inference on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/enec-a-lossless-ai-model-compression-method-enabling-fast/";
            },},{id: "paper_reading-2026-isca-eva-accelerating-llm-decoding-via-an-efficient-vector-quantization-architecture",
          title: '(2026 ISCA) EVA: Accelerating LLM Decoding via an Efficient Vector Quantization Architecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/eva-accelerating-llm-decoding-via-an-efficient-vector/";
            },},{id: "paper_reading-2026-isca-fenc-unifying-data-packing-for-efficient-private-inference-via-convolution-and-architecture-aware-fragment-encoding",
          title: '(2026 ISCA) FEnc: Unifying Data Packing for Efficient Private Inference via Convolution and...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/fenc-unifying-data-packing-for-efficient-private-inference/";
            },},{id: "paper_reading-2026-isca-hit-a-unified-sparsity-adaptive-architecture-for-high-throughput-matrix-multiplication",
          title: '(2026 ISCA) HiT: A Unified Sparsity-Adaptive Architecture for High-Throughput Matrix Multiplication',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/hit-a-unified-sparsity-adaptive-architecture-for-high/";
            },},{id: "paper_reading-2026-isca-hybridspec-exploiting-hybrid-bonding-memory-to-accelerate-llm-serving-through-heterogeneous-architecture-and-speculative-decoding",
          title: '(2026 ISCA) HybridSpec: Exploiting Hybrid-Bonding Memory to Accelerate LLM Serving through Heterogeneous Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/hybridspec-exploiting-hybrid-bonding-memory-to-accelerate/";
            },},{id: "paper_reading-2026-isca-iroknight-ownership-preserving-neural-acceleration-for-inference-serving",
          title: '(2026 ISCA) IroKnight: Ownership-Preserving Neural Acceleration for Inference Serving',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/iroknight-ownership-preserving-neural-acceleration-for/";
            },},{id: "paper_reading-2026-isca-loka-low-precision-kernel-applications-for-recommendation-models-at-scale",
          title: '(2026 ISCA) LoKA: Low-precision Kernel Applications for Recommendation Models At Scale',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/loka-low-precision-kernel-applications-for-recommendation/";
            },},{id: "paper_reading-2026-isca-lora-towards-improved-applicability-of-reconfigurable-architecture-for-versatile-nonlinear-functions",
          title: '(2026 ISCA) LoRA: Towards Improved Applicability of Reconfigurable Architecture for Versatile Nonlinear Functions...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/lora-towards-improved-applicability-of-reconfigurable/";
            },},{id: "paper_reading-2026-isca-m100-an-orchestrated-dataflow-architecture-powering-general-ai-computing",
          title: '(2026 ISCA) M100: An Orchestrated Dataflow Architecture Powering General AI Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/m100-an-orchestrated-dataflow-architecture-powering-general/";
            },},{id: "paper_reading-2026-isca-meridian-in-memory-acceleration-for-rag-with-document-attention",
          title: '(2026 ISCA) MERIDIAN: In-Memory Acceleration for RAG with Document Attention',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/meridian-in-memory-acceleration-for-rag-with-document/";
            },},{id: "paper_reading-2026-isca-mtia-300-meta-39-s-first-training-chip-featuring-built-in-nics-and-collective-offloading-engines",
          title: '(2026 ISCA) MTIA 300: Meta&amp;#39;s First Training Chip Featuring Built-in NICs and Collective...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/mtia-300-metas-first-training-chip-featuring-built-in-nics/";
            },},{id: "paper_reading-2026-isca-mxffp-microscaling-flexible-floating-point-format-for-large-scale-ai-model-acceleration",
          title: '(2026 ISCA) MXFFP: Microscaling Flexible Floating Point Format for Large-Scale AI Model Acceleration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/mxffp-microscaling-flexible-floating-point-format-for-large/";
            },},{id: "paper_reading-2026-isca-oasis-outlier-aware-lut-based-gemm-with-dual-side-quantization-for-llm-inference-acceleration",
          title: '(2026 ISCA) OASIS: Outlier-Aware LUT-Based GEMM with Dual-Side Quantization for LLM Inference Acceleration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/oasis-outlier-aware-lut-based-gemm-with-dual-side/";
            },},{id: "paper_reading-2026-isca-omni-lut-energy-efficient-lut-based-accelerator-with-hardware-aware-kv-cache-quantization",
          title: '(2026 ISCA) Omni-LUT: Energy-Efficient LUT-based Accelerator with Hardware-Aware KV Cache Quantization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/omni-lut-energy-efficient-lut-based-accelerator-with/";
            },},{id: "paper_reading-2026-isca-p-llm-an-integrated-npu-pim-accelerator-for-edge-llm-inference",
          title: '(2026 ISCA) P-LLM: An Integrated NPU-PIM Accelerator for Edge LLM Inference',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/p-llm-an-integrated-npu-pim-accelerator-for-edge-llm/";
            },},{id: "paper_reading-2026-isca-paretoes-hardware-accelerated-sparse-embedding-similarity-via-pareto-optimal-pruning",
          title: '(2026 ISCA) ParetoES: Hardware-Accelerated Sparse Embedding Similarity via Pareto-Optimal Pruning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/paretoes-hardware-accelerated-sparse-embedding-similarity/";
            },},{id: "paper_reading-2026-isca-patterns-behind-chaos-forecasting-data-movement-for-efficient-large-scale-moe-llm-inference",
          title: '(2026 ISCA) Patterns behind Chaos: Forecasting Data Movement for Efficient Large-Scale MoE LLM...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/patterns-behind-chaos-forecasting-data-movement-for/";
            },},{id: "paper_reading-2026-isca-pipeimc-a-pipelined-in-sram-computing-architecture",
          title: '(2026 ISCA) PipeIMC: a Pipelined In-SRAM Computing Architecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/pipeimc-a-pipelined-in-sram-computing-architecture/";
            },},{id: "paper_reading-2026-isca-segfold-accelerating-sparse-gemm-with-a-fine-grained-dynamic-dataflow",
          title: '(2026 ISCA) SegFold: Accelerating Sparse GEMM with a Fine-Grained Dynamic Dataflow',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/segfold-accelerating-sparse-gemm-with-a-fine-grained/";
            },},{id: "paper_reading-2026-isca-shining-light-on-silicon-photonic-dnn-accelerators",
          title: '(2026 ISCA) Shining Light on Silicon Photonic DNN Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/shining-light-on-silicon-photonic-dnn-accelerators/";
            },},{id: "paper_reading-2026-isca-shyla-3d-stacked-nvm-dram-hybrid-llm-inference-architecture-exploiting-data-and-memory-heterogeneity",
          title: '(2026 ISCA) SHyLA: 3D-Stacked NVM-DRAM Hybrid LLM-Inference Architecture Exploiting Data and Memory Heterogeneity...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/shyla-3d-stacked-nvm-dram-hybrid-llm-inference-architecture/";
            },},{id: "paper_reading-2026-isca-singularbit-exploiting-synergy-of-singular-value-decomposition-and-low-bit-quantization-for-weight-and-kv-compression-in-llm-inference",
          title: '(2026 ISCA) SingularBit: Exploiting Synergy of Singular Value Decomposition and Low-Bit Quantization for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/singularbit-exploiting-synergy-of-singular-value/";
            },},{id: "paper_reading-2026-isca-smoe-an-algorithm-system-co-design-for-pushing-moe-to-the-edge-via-expert-substitution",
          title: '(2026 ISCA) SMoE: An Algorithm-System Co-Design for Pushing MoE to the Edge via...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/smoe-an-algorithm-system-co-design-for-pushing-moe-to-the/";
            },},{id: "paper_reading-2026-isca-smooth-hardware-assisted-fine-grained-on-chip-memory-management-for-efficient-on-device-llm-inference",
          title: '(2026 ISCA) SMOOTH: Hardware-Assisted Fine-Grained On-Chip Memory Management for Efficient On-Device LLM Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/smooth-hardware-assisted-fine-grained-on-chip-memory/";
            },},{id: "paper_reading-2026-isca-step-adaptive-s-patio-temporal-expert-prefetching-for-low-latency-and-memory-efficient-moe-inference",
          title: '(2026 ISCA) STEP: Adaptive S patio-Temporal Expert Prefetching for Low-Latency and Memory-Efficient MoE...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/step-adaptive-s-patio-temporal-expert-prefetching-for-low/";
            },},{id: "paper_reading-2026-isca-symbiotic-mllm-serving-dynamically-balancing-parallelism-across-gpus-and-resources-within-gpus",
          title: '(2026 ISCA) Symbiotic MLLM Serving: Dynamically Balancing Parallelism Across GPUs and Resources Within...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/symbiotic-mllm-serving-dynamically-balancing-parallelism/";
            },},{id: "paper_reading-2026-isca-tagt-an-efficient-graph-transformer-accelerator-with-topology-aware-sparsification-and-merging",
          title: '(2026 ISCA) TAGT: An Efficient Graph Transformer Accelerator with Topology-aware Sparsification and Merging...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/tagt-an-efficient-graph-transformer-accelerator-with/";
            },},{id: "paper_reading-2026-isca-tensorprism-rethinking-sparse-high-order-tensor-acceleration-via-co-occurrence-graph",
          title: '(2026 ISCA) TensorPrism: Rethinking Sparse High-order Tensor Acceleration via Co-occurrence Graph',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/tensorprism-rethinking-sparse-high-order-tensor/";
            },},{id: "paper_reading-2026-isca-tetris-efficient-long-context-llm-serving-with-chunkwise-dynamic-sequence-parallelism",
          title: '(2026 ISCA) Tetris: Efficient Long-context LLM Serving with Chunkwise Dynamic Sequence Parallelism',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/tetris-efficient-long-context-llm-serving-with-chunkwise/";
            },},{id: "paper_reading-2026-isca-understanding-inference-scaling-for-llms-bottlenecks-trade-offs-and-performance-principles",
          title: '(2026 ISCA) Understanding Inference Scaling for LLMs: Bottlenecks, Trade-offs, and Performance Principles',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/understanding-inference-scaling-for-llms-bottlenecks-trade/";
            },},{id: "paper_reading-2026-isca-unicore-a-bit-width-scalable-gemm-unit-for-unified-llm-inference",
          title: '(2026 ISCA) UniCore: A Bit-Width Scalable GEMM Unit for Unified LLM Inference',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/unicore-a-bit-width-scalable-gemm-unit-for-unified-llm/";
            },},{id: "paper_reading-2026-isca-xtramac-an-efficient-mac-architecture-for-mixed-precision-llm-inference-on-fpga",
          title: '(2026 ISCA) XtraMAC: An Efficient MAC Architecture for Mixed-Precision LLM Inference on FPGA...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-AI_Accelerator/xtramac-an-efficient-mac-architecture-for-mixed-precision/";
            },},{id: "paper_reading-2026-isca-augmenting-the-branch-predictor-with-a-squashed-branch-reuse-buffer",
          title: '(2026 ISCA) Augmenting the Branch Predictor with a Squashed-Branch Reuse Buffer',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/augmenting-the-branch-predictor-with-a-squashed-branch/";
            },},{id: "paper_reading-2026-isca-bullet-time-time-dilation-for-high-fidelity-tracing",
          title: '(2026 ISCA) BULLET TIME: Time Dilation for High-Fidelity Tracing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/bullet-time-time-dilation-for-high-fidelity-tracing/";
            },},{id: "paper_reading-2026-isca-dorado-clustered-hardware-cache-coherence-for-1-000-cores",
          title: '(2026 ISCA) Dorado: Clustered Hardware Cache Coherence for 1,000+ Cores',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/dorado-clustered-hardware-cache-coherence-for-1000plus-cores/";
            },},{id: "paper_reading-2026-isca-enhancing-instruction-prefetching-via-cache-and-tlb-management",
          title: '(2026 ISCA) Enhancing Instruction Prefetching via Cache and TLB Management',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/enhancing-instruction-prefetching-via-cache-and-tlb/";
            },},{id: "paper_reading-2026-isca-from-lab-to-fleet-building-and-deploying-a-practical-rowhammer-defense-in-cloud-socs",
          title: '(2026 ISCA) From Lab to Fleet: Building and Deploying a Practical Rowhammer Defense...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/from-lab-to-fleet-building-and-deploying-a-practical/";
            },},{id: "paper_reading-2026-isca-from-memorization-to-generalization-a-practical-neural-network-prefetching-framework",
          title: '(2026 ISCA) From Memorization to Generalization: A Practical Neural Network Prefetching Framework',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/from-memorization-to-generalization-a-practical-neural/";
            },},{id: "paper_reading-2026-isca-hierarchical-wakeup-logic-of-the-issue-queue-for-high-scalability",
          title: '(2026 ISCA) Hierarchical Wakeup Logic of the Issue Queue for High Scalability',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/hierarchical-wakeup-logic-of-the-issue-queue-for-high/";
            },},{id: "paper_reading-2026-isca-icp-exploiting-instruction-correlation-for-prefetching-irregular-memory-accesses",
          title: '(2026 ISCA) ICP: Exploiting Instruction Correlation for Prefetching Irregular Memory Accesses',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/icp-exploiting-instruction-correlation-for-prefetching/";
            },},{id: "paper_reading-2026-isca-optimizing-spatial-data-structure-with-near-cache-acceleration-by-exploiting-physical-locality",
          title: '(2026 ISCA) Optimizing Spatial Data Structure with Near-Cache Acceleration by Exploiting Physical Locality...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/optimizing-spatial-data-structure-with-near-cache/";
            },},{id: "paper_reading-2026-isca-revisiting-global-value-prediction-a-resurgent-complement-to-local-predictors",
          title: '(2026 ISCA) Revisiting Global Value Prediction: A Resurgent Complement to Local Predictors',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/revisiting-global-value-prediction-a-resurgent-complement/";
            },},{id: "paper_reading-2026-isca-runlts-branch-prediction-with-register-value-correlations-and-hierarchical-table-orchestration",
          title: '(2026 ISCA) RUNLTS: Branch Prediction with Register-Value Correlations and Hierarchical Table Orchestration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/runlts-branch-prediction-with-register-value-correlations/";
            },},{id: "paper_reading-2026-isca-spec-cpu-the-next-generation",
          title: '(2026 ISCA) SPEC CPU: The Next Generation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/spec-cpu-the-next-generation/";
            },},{id: "paper_reading-2026-isca-ssbench-automated-characterization-of-memory-dependence-predictors-on-modern-cpus",
          title: '(2026 ISCA) SSBench: Automated Characterization of Memory Dependence Predictors on Modern CPUs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/ssbench-automated-characterization-of-memory-dependence/";
            },},{id: "paper_reading-2026-isca-step-spatial-footprint-prefetcher-with-multi-point-temporal-triggers",
          title: '(2026 ISCA) STEP: Spatial Footprint Prefetcher with Multi-Point Temporal Triggers',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-CPU/step-spatial-footprint-prefetcher-with-multi-point-temporal/";
            },},{id: "paper_reading-2026-isca-dice-enabling-efficient-general-purpose-simt-execution-with-statically-scheduled-coarse-grained-reconfigurable-arrays",
          title: '(2026 ISCA) DICE: Enabling Efficient General-Purpose SIMT Execution with Statically Scheduled Coarse-Grained Reconfigurable...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/dice-enabling-efficient-general-purpose-simt-execution-with/";
            },},{id: "paper_reading-2026-isca-ds-isa-instruction-set-architecture-for-dynamical-system-units",
          title: '(2026 ISCA) DS-ISA: Instruction Set Architecture for Dynamical System Units',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/ds-isa-instruction-set-architecture-for-dynamical-system/";
            },},{id: "paper_reading-2026-isca-harmonia-a-unified-hierarchical-scheduling-framework-for-sparse-matrix-multiplication",
          title: '(2026 ISCA) Harmonia: A Unified Hierarchical Scheduling Framework for Sparse Matrix Multiplication',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/harmonia-a-unified-hierarchical-scheduling-framework-for/";
            },},{id: "paper_reading-2026-isca-lotus-a-multi-fpga-task-dataflow-architecture-to-accelerate",
          title: '(2026 ISCA) Lotus: A Multi-FPGA Task Dataflow Architecture to Accelerate',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/lotus-a-multi-fpga-task-dataflow-architecture-to-accelerate/";
            },},{id: "paper_reading-2026-isca-pipecomm-maximizing-link-utilization-through-pipeline-aware-collective-communication-synthesis",
          title: '(2026 ISCA) PipeComm: Maximizing Link Utilization through Pipeline-Aware Collective Communication Synthesis',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/pipecomm-maximizing-link-utilization-through-pipeline-aware/";
            },},{id: "paper_reading-2026-isca-rocc-harnessing-raster-operations-pipeline-for-efficient-tensor-collective-communication",
          title: '(2026 ISCA) RoCC: Harnessing Raster Operations Pipeline for Efficient Tensor Collective Communication',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/rocc-harnessing-raster-operations-pipeline-for-efficient/";
            },},{id: "paper_reading-2026-isca-scrooge-circuit-level-design-and-optimization-framework-for-r-isc-v-out-of-order-gpus",
          title: '(2026 ISCA) sCROOGe: Circuit-level Design and Optimization Framework for R ISC-V Out-of-Order GPUs...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Compiler/scrooge-circuit-level-design-and-optimization-framework-for/";
            },},{id: "paper_reading-2026-isca-aesip-uarch-aware-asip-isa-co-design-via-program-synthesis-equality-saturation-and-external-dont-cares",
          title: '(2026 ISCA) aeSIP: uArch-aware ASIP-ISA Co-Design via Program Synthesis Equality Saturation and External...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/aesip-uarch-aware-asip-isa-co-design-via-program-synthesis/";
            },},{id: "paper_reading-2026-isca-codo-an-automated-compiler-for-comprehensive-dataflow-optimization",
          title: '(2026 ISCA) CODO: An Automated Compiler for Comprehensive Dataflow Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/codo-an-automated-compiler-for-comprehensive-dataflow/";
            },},{id: "paper_reading-2026-isca-conbin-a-performance-convergence-framework-for-wafer-scale-chip-binning",
          title: '(2026 ISCA) ConBin: A Performance-Convergence Framework for Wafer-Scale Chip Binning',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/conbin-a-performance-convergence-framework-for-wafer-scale/";
            },},{id: "paper_reading-2026-isca-graph-hls-a-compiler-framework-for-composable-graph-accelerator-design",
          title: '(2026 ISCA) Graph.hls: A Compiler Framework for Composable Graph Accelerator Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/graphhls-a-compiler-framework-for-composable-graph/";
            },},{id: "paper_reading-2026-isca-kernelevolve-scaling-agentic-kernel-coding-for-heterogeneous-ai-accelerators-at-meta",
          title: '(2026 ISCA) KernelEvolve: Scaling Agentic Kernel Coding for Heterogeneous AI Accelerators at Meta...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/kernelevolve-scaling-agentic-kernel-coding-for/";
            },},{id: "paper_reading-2026-isca-mapping-and-communication-optimizations-with-fault-tolerance-for-wafer-scale-llm-inference",
          title: '(2026 ISCA) Mapping and Communication Optimizations with Fault Tolerance for Wafer-Scale LLM Inference...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/mapping-and-communication-optimizations-with-fault/";
            },},{id: "paper_reading-2026-isca-nerarch-sim-a-unified-simulator-for-benchmarking-and-dse-of-neural-rendering-accelerators",
          title: '(2026 ISCA) NeRArch-Sim: A Unified Simulator for Benchmarking and DSE of Neural Rendering...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/nerarch-sim-a-unified-simulator-for-benchmarking-and-dse-of/";
            },},{id: "paper_reading-2026-isca-omelet-a-packaging-aware-hierarchical-interconnect-simulator-for-2-5d-3d-chiplet-architectures",
          title: '(2026 ISCA) Omelet: A Packaging-Aware Hierarchical Interconnect Simulator for 2.5D-3D Chiplet Architectures',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/omelet-a-packaging-aware-hierarchical-interconnect/";
            },},{id: "paper_reading-2026-isca-pipe-weave-synergizing-analytical-and-learning-models-for-unified-gpu-performance-prediction",
          title: '(2026 ISCA) PIPE WEAVE: Synergizing Analytical and Learning Models for Unified GPU Performance...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/pipe-weave-synergizing-analytical-and-learning-models-for/";
            },},{id: "paper_reading-2026-isca-qimeng-tensify-scaling-up-tensor-computation-optimization-via-architecture-aware-llm-guided-mcts",
          title: '(2026 ISCA) QiMeng-Tensify: Scaling up Tensor Computation Optimization via Architecture-Aware LLM-Guided MCTS',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/qimeng-tensify-scaling-up-tensor-computation-optimization/";
            },},{id: "paper_reading-2026-isca-scalable-synthesis-of-distributed-llm-workloads-through-symbolic-tensor-graphs",
          title: '(2026 ISCA) Scalable Synthesis of distributed LLM workloads through Symbolic Tensor Graphs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-DSE/scalable-synthesis-of-distributed-llm-workloads-through/";
            },},{id: "paper_reading-2026-isca-lembas-cost-efficient-genome-alignment-with-external-memory-and-fpga-acceleration",
          title: '(2026 ISCA) Lembas: Cost-Efficient Genome Alignment with External Memory and FPGA Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-FPGA/lembas-cost-efficient-genome-alignment-with-external-memory/";
            },},{id: "paper_reading-2026-isca-a-silicon-proven-unified-low-latency-cxl-controller-and-port-based-routing-switch-for-memory-centric-fabrics",
          title: '(2026 ISCA) A Silicon-Proven Unified Low-Latency CXL Controller and Port-Based Routing Switch for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/a-silicon-proven-unified-low-latency-cxl-controller-and/";
            },},{id: "paper_reading-2026-isca-boostx-nti-fast-scalable-and-flexible-storage-architecture-with-nvme-tcp-initiator-acceleration",
          title: '(2026 ISCA) BoostX™-NTI: Fast, Scalable and Flexible Storage Architecture with NVMe/TCP Initiator Acceleration...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/boostx-nti-fast-scalable-and-flexible-storage-architecture/";
            },},{id: "paper_reading-2026-isca-bumper-hinting-instruction-usefulness-for-robust-unified-caches",
          title: '(2026 ISCA) Bumper: Hinting Instruction Usefulness for Robust Unified Caches',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/bumper-hinting-instruction-usefulness-for-robust-unified/";
            },},{id: "paper_reading-2026-isca-cerberus-cross-layer-ecc-co-design-for-robust-and-efficient-memory-protection",
          title: '(2026 ISCA) Cerberus: Cross-Layer ECC Co-Design for Robust and Efficient Memory Protection',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/cerberus-cross-layer-ecc-co-design-for-robust-and-efficient/";
            },},{id: "paper_reading-2026-isca-columnkeeper-efficient-solutions-in-dram-based-columndisturb-mitigation",
          title: '(2026 ISCA) ColumnKeeper: Efficient Solutions in DRAM-based ColumnDisturb Mitigation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/columnkeeper-efficient-solutions-in-dram-based/";
            },},{id: "paper_reading-2026-isca-conserve-contiguity-preserving-memory-management-for-multi-turn-llm-serving",
          title: '(2026 ISCA) ConServe: Contiguity-Preserving Memory Management for Multi-Turn LLM Serving',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/conserve-contiguity-preserving-memory-management-for-multi/";
            },},{id: "paper_reading-2026-isca-deduplication-later-duplication-centric-multi-gpu-memory",
          title: '(2026 ISCA) Deduplication Later: Duplication-Centric Multi-GPU Memory',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/deduplication-later-duplication-centric-multi-gpu-memory/";
            },},{id: "paper_reading-2026-isca-dejavu-why-you-should-write-to-your-dram-rows-twice-carefully",
          title: '(2026 ISCA) DejaVu: Why You Should Write to Your DRAM Rows Twice Carefully...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/dejavu-why-you-should-write-to-your-dram-rows-twice/";
            },},{id: "paper_reading-2026-isca-five-minute-rule-40-years-later-a-first-principles-revisit-for-modern-memory-hierarchy",
          title: '(2026 ISCA) Five-Minute Rule 40 Years Later: A First-Principles Revisit for Modern Memory...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/five-minute-rule-40-years-later-a-first-principles-revisit/";
            },},{id: "paper_reading-2026-isca-hbm-caso-a-coordinated-approach-to-hbm-system-level-and-on-die-ecc",
          title: '(2026 ISCA) HBM-CASO: A Coordinated Approach to HBM System-Level and On-Die ECC',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/hbm-caso-a-coordinated-approach-to-hbm-system-level-and-on/";
            },},{id: "paper_reading-2026-isca-intermittence-aware-speculative-page-coloring-for-secure-nvm",
          title: '(2026 ISCA) Intermittence-Aware Speculative Page Coloring for Secure NVM',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/intermittence-aware-speculative-page-coloring-for-secure-nvm/";
            },},{id: "paper_reading-2026-isca-libra-a-high-accuracy-cost-aware-and-coordinated-multi-gpu-page-prefetcher",
          title: '(2026 ISCA) LIBRA: A High-Accuracy Cost-Aware and Coordinated Multi-GPU Page Prefetcher',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/libra-a-high-accuracy-cost-aware-and-coordinated-multi-gpu/";
            },},{id: "paper_reading-2026-isca-loaded-dice-solving-the-non-selection-problem-for-scalable-probabilistic-rowhammer-defense",
          title: '(2026 ISCA) Loaded Dice: Solving the Non-Selection Problem for Scalable Probabilistic RowHammer Defense...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/loaded-dice-solving-the-non-selection-problem-for-scalable/";
            },},{id: "paper_reading-2026-isca-loong-utilizing-long-stride-reprogramming-to-enhance-the-performance-of-ssds",
          title: '(2026 ISCA) LOONG: Utilizing Long-Stride Reprogramming to Enhance the Performance of SSDs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/loong-utilizing-long-stride-reprogramming-to-enhance-the/";
            },},{id: "paper_reading-2026-isca-naszip-software-and-hardware-co-design-to-accelerate-approximate-nearest-neighbor-search-with-dimm-based-near-data-processing",
          title: '(2026 ISCA) NasZip: Software and Hardware Co-Design to Accelerate Approximate Nearest Neighbor Search...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/naszip-software-and-hardware-co-design-to-accelerate/";
            },},{id: "paper_reading-2026-isca-observability-aided-gpu-memory-oversubscription",
          title: '(2026 ISCA) Observability-aided GPU Memory Oversubscription',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/observability-aided-gpu-memory-oversubscription/";
            },},{id: "paper_reading-2026-isca-optimized-memory-tagging-on-ampereone-processors",
          title: '(2026 ISCA) Optimized Memory Tagging on AmpereOne Processors',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/optimized-memory-tagging-on-ampereone-processors/";
            },},{id: "paper_reading-2026-isca-prowhammer-propagating-bit-flips-from-cpu-to-gpu",
          title: '(2026 ISCA) PRowhammer: Propagating Bit-flips from CPU to GPU',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/prowhammer-propagating-bit-flips-from-cpu-to-gpu/";
            },},{id: "paper_reading-2026-isca-pudghost-experimental-analysis-of-computation-result-corruption-in-processing-using-dram-operations-on-real-dram-chips-and-implications-for-future-systems",
          title: '(2026 ISCA) PuDGhost: Experimental Analysis of Computation Result Corruption in Processing-using-DRAM Operations on...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/pudghost-experimental-analysis-of-computation-result/";
            },},{id: "paper_reading-2026-isca-pvac-a-rowhammer-mitigation-architecture-exploiting-per-victim-row-counting",
          title: '(2026 ISCA) PVAC: A RowHammer Mitigation Architecture Exploiting Per-victim-row Counting',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/pvac-a-rowhammer-mitigation-architecture-exploiting-per/";
            },},{id: "paper_reading-2026-isca-r-max-extending-belady-39-s-min-with-prefetching-to-bound-realistic-cache-performance",
          title: '(2026 ISCA) R-Max: Extending Belady&amp;#39;s MIN with Prefetching to Bound Realistic Cache Performance...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/r-max-extending-beladys-min-with-prefetching-to-bound/";
            },},{id: "paper_reading-2026-isca-random-access-hardware-sequence-compression",
          title: '(2026 ISCA) Random-Access Hardware Sequence Compression',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/random-access-hardware-sequence-compression/";
            },},{id: "paper_reading-2026-isca-reducing-page-faults-via-invalidation-based-mapping-propagation-in-multi-gpu-systems",
          title: '(2026 ISCA) Reducing Page Faults via Invalidation-based Mapping Propagation in Multi-GPU Systems',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/reducing-page-faults-via-invalidation-based-mapping/";
            },},{id: "paper_reading-2026-isca-revelator-rapid-data-fetching-via-system-software-guided-hash-based-speculative-address-translation",
          title: '(2026 ISCA) Revelator: Rapid Data Fetching via System-Software-Guided Hash-based Speculative Address Translation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/revelator-rapid-data-fetching-via-system-software-guided/";
            },},{id: "paper_reading-2026-isca-tdmsim-enabling-high-density-and-energy-efficient-gpu-dram-caches-with-2d-materials-for-data-intensive-applications",
          title: '(2026 ISCA) TDMSim: Enabling High-Density and Energy-Efficient GPU DRAM Caches with 2D-Materials for...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/tdmsim-enabling-high-density-and-energy-efficient-gpu-dram/";
            },},{id: "paper_reading-2026-isca-vistara-making-cxl-real-full-path-from-asic-design-and-os-support-to-hyperscale-deployment",
          title: '(2026 ISCA) Vistara: Making CXL Real—Full Path from ASIC Design and OS Support...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Memory/vistara-making-cxl-real-full-path-from-asic-design-and-os/";
            },},{id: "paper_reading-2026-isca-a-streaming-architecture-for-quantum-error-syndrome-compression-at-4-kelvin",
          title: '(2026 ISCA) A Streaming Architecture for Quantum Error Syndrome Compression at 4 Kelvin...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/a-streaming-architecture-for-quantum-error-syndrome/";
            },},{id: "paper_reading-2026-isca-coset-ensemble-decoder-for-quantum-error-correction-with-algorithm-hardware-co-design",
          title: '(2026 ISCA) Coset Ensemble Decoder for Quantum Error Correction with Algorithm–Hardware Co-Design',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/coset-ensemble-decoder-for-quantum-error-correction-with/";
            },},{id: "paper_reading-2026-isca-distilling-magic-states-in-the-bicycle-architecture",
          title: '(2026 ISCA) Distilling Magic States in the Bicycle Architecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/distilling-magic-states-in-the-bicycle-architecture/";
            },},{id: "paper_reading-2026-isca-kernpiler-compiler-optimization-for-quantum-hamiltonian-simulation-with-partial-trotterization",
          title: '(2026 ISCA) Kernpiler: Compiler Optimization for Quantum Hamiltonian Simulation with Partial Trotterization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/kernpiler-compiler-optimization-for-quantum-hamiltonian/";
            },},{id: "paper_reading-2026-isca-leveraging-phase-polynomials-for-quantum-circuit-optimization",
          title: '(2026 ISCA) Leveraging Phase Polynomials for Quantum Circuit Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/leveraging-phase-polynomials-for-quantum-circuit/";
            },},{id: "paper_reading-2026-isca-o3ls-optimizing-lattice-surgery-via-automatic-layout-searching-and-loose-scheduling",
          title: '(2026 ISCA) O3LS: Optimizing Lattice Surgery via Automatic Layout Searching and Loose Scheduling...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/o3ls-optimizing-lattice-surgery-via-automatic-layout/";
            },},{id: "paper_reading-2026-isca-photonic-quantum-computing-on-spin-memory-architecture-with-tree-encoded-fusion",
          title: '(2026 ISCA) Photonic Quantum Computing on Spin Memory Architecture with Tree-Encoded Fusion',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/photonic-quantum-computing-on-spin-memory-architecture-with/";
            },},{id: "paper_reading-2026-isca-transpiler-architecture-co-design-to-curb-clifford-costs-in-fault-tolerant-quantum-computing",
          title: '(2026 ISCA) Transpiler-Architecture Co-Design to Curb Clifford Costs in Fault-Tolerant Quantum Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/transpiler-architecture-co-design-to-curb-clifford-costs-in/";
            },},{id: "paper_reading-2026-isca-triage-an-adaptive-parallel-window-decoding-scheduler-for-real-time-fault-tolerant-quantum-computation",
          title: '(2026 ISCA) Triage: An Adaptive Parallel Window Decoding Scheduler for Real-time Fault-Tolerant Quantum...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/triage-an-adaptive-parallel-window-decoding-scheduler-for/";
            },},{id: "paper_reading-2026-isca-tusq-tracking-uncomputation-and-sampling-for-noisy-quantum-simulation",
          title: '(2026 ISCA) TUSQ: Tracking Uncomputation and Sampling for Noisy Quantum Simulation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/tusq-tracking-uncomputation-and-sampling-for-noisy-quantum/";
            },},{id: "paper_reading-2026-isca-unifying-qubit-routing-across-diverse-quantum-isas-via-canonical-representation",
          title: '(2026 ISCA) Unifying Qubit Routing Across Diverse Quantum ISAs via Canonical Representation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Quantum/unifying-qubit-routing-across-diverse-quantum-isas-via/";
            },},{id: "paper_reading-2026-isca-darkstream-exploiting-internal-throughput-contention-in-data-streaming-accelerator-for-timing-attacks",
          title: '(2026 ISCA) DarkStream: Exploiting Internal Throughput Contention in Data Streaming Accelerator for Timing...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/darkstream-exploiting-internal-throughput-contention-in/";
            },},{id: "paper_reading-2026-isca-he2-a-communication-light-heterogeneous-architecture-for-efficient-fully-homomorphic-encryption",
          title: '(2026 ISCA) HE2: A Communication-Light Heterogeneous Architecture for Efficient Fully Homomorphic Encryption',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/he2-a-communication-light-heterogeneous-architecture-for/";
            },},{id: "paper_reading-2026-isca-helium-quantifying-microarchitectural-side-channel-leakage-with-probabilistic-guarantees",
          title: '(2026 ISCA) Helium: Quantifying Microarchitectural Side-Channel Leakage with Probabilistic Guarantees',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/helium-quantifying-microarchitectural-side-channel-leakage/";
            },},{id: "paper_reading-2026-isca-hyperdrive-hierarchical-exploitation-of-memory-efficiency-for-gpu-based-fhe-acceleration",
          title: '(2026 ISCA) HyperDrive: Hierarchical Exploitation of Memory Efficiency for GPU-Based FHE Acceleration',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/hyperdrive-hierarchical-exploitation-of-memory-efficiency/";
            },},{id: "paper_reading-2026-isca-laegis-pinpointing-and-addressing-performance-overheads-of-gpu-based-confidential-computing",
          title: '(2026 ISCA) LAEGIS: Pinpointing and Addressing Performance Overheads of GPU-based Confidential Computing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/laegis-pinpointing-and-addressing-performance-overheads-of/";
            },},{id: "paper_reading-2026-isca-lippen-a-lightweight-in-place-pointer-encryption-architecture-for-pointer-integrity",
          title: '(2026 ISCA) LIPPEN: A Lightweight In-Place Pointer Encryption Architecture for Pointer Integrity',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/lippen-a-lightweight-in-place-pointer-encryption/";
            },},{id: "paper_reading-2026-isca-mc-oram-a-mask-assisted-and-counter-based-non-deterministic-oram-inside-vm-based-tees",
          title: '(2026 ISCA) MC-ORAM: A Mask-Assisted and Counter-Based Non-Deterministic ORAM inside VM-Based TEEs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/mc-oram-a-mask-assisted-and-counter-based-non-deterministic/";
            },},{id: "paper_reading-2026-isca-mnemos-a-gpu-based-tfhe-acceleration-framework-with-memory-access-optimization",
          title: '(2026 ISCA) MNEMOS: A GPU-based TFHE Acceleration Framework with Memory Access Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/mnemos-a-gpu-based-tfhe-acceleration-framework-with-memory/";
            },},{id: "paper_reading-2026-isca-timegaps-channels-exploiting-cpu-halted-time-for-fun-and-profit",
          title: '(2026 ISCA) TimeGaps Channels: Exploiting CPU Halted Time for Fun and Profit',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/timegaps-channels-exploiting-cpu-halted-time-for-fun-and/";
            },},{id: "paper_reading-2026-isca-towards-practical-interrupt-side-channel-attacks-on-macos-for-apple-silicon",
          title: '(2026 ISCA) Towards Practical Interrupt Side-Channel Attacks on macOS for Apple Silicon',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Security/towards-practical-interrupt-side-channel-attacks-on-macos/";
            },},{id: "paper_reading-2026-isca-autofhe-an-automatic-hardware-generation-framework-for-domain-specific-fhe-accelerators",
          title: '(2026 ISCA) AutoFHE: An Automatic Hardware Generation Framework for Domain-Specific FHE Accelerators',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/autofhe-an-automatic-hardware-generation-framework-for/";
            },},{id: "paper_reading-2026-isca-breaking-barriers-in-atomic-scaling-a-hardware-software-collaborated-framework-to-deconstruct-rdma-atomic",
          title: '(2026 ISCA) Breaking Barriers in Atomic Scaling: A Hardware-Software-Collaborated Framework to Deconstruct RDMA...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/breaking-barriers-in-atomic-scaling-a-hardware-software/";
            },},{id: "paper_reading-2026-isca-democratizing-and-accelerating-hardware-verification-with-software-native-optimization",
          title: '(2026 ISCA) Democratizing and Accelerating Hardware Verification with Software-Native Optimization',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/democratizing-and-accelerating-hardware-verification-with/";
            },},{id: "paper_reading-2026-isca-desscam-an-event-d-riven-architecture-with-in-sensor-epitopological-sparse-sampling-to-break-the-latency-power-tradeoff-in-eye-tracking",
          title: '(2026 ISCA) DESSCam: An Event-D riven Architecture with In-Sensor Epitopological Sparse Sampling to...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/desscam-an-event-d-riven-architecture-with-in-sensor/";
            },},{id: "paper_reading-2026-isca-disdp-disaggregating-compute-network-and-storage-for-model-sharded-data-parallel-training",
          title: '(2026 ISCA) DisDP: Disaggregating Compute Network and Storage for Model-Sharded Data-Parallel Training',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/disdp-disaggregating-compute-network-and-storage-for-model/";
            },},{id: "paper_reading-2026-isca-don-39-t-surrender-to-low-qps-dollar-fast-and-cost-efficient-anns-with-ridentt-ann",
          title: '(2026 ISCA) Don&amp;#39;t Surrender to Low QPS Dollar - Fast and Cost-Efficient ANNS...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/dont-surrender-to-low-qps-dollar-fast-and-cost-efficient/";
            },},{id: "paper_reading-2026-isca-echo-efficient-head-orientation-guided-real-time-sound-spatialization-for-virtual-reality",
          title: '(2026 ISCA) ECHO: Efficient Head-Orientation-Guided Real-Time Sound Spatialization for Virtual Reality',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/echo-efficient-head-orientation-guided-real-time-sound/";
            },},{id: "paper_reading-2026-isca-efficient-3d-gaussian-splatting-with-axis-shared-rasterization-and-order-independent-transmittance",
          title: '(2026 ISCA) Efficient 3D Gaussian Splatting with Axis-Shared Rasterization and Order-independent Transmittance',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/efficient-3d-gaussian-splatting-with-axis-shared/";
            },},{id: "paper_reading-2026-isca-enabling-continuous-in-field-introspection-the-programmable-ipu-architecture",
          title: '(2026 ISCA) Enabling Continuous, In-Field Introspection: The Programmable IPU Architecture',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/enabling-continuous-in-field-introspection-the-programmable/";
            },},{id: "paper_reading-2026-isca-flashtfhe-a-scalable-architecture-for-efficient-multi-bit-fully-homomorphic-encryption",
          title: '(2026 ISCA) FlashTFHE: A Scalable Architecture for Efficient Multi-bit Fully Homomorphic Encryption',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/flashtfhe-a-scalable-architecture-for-efficient-multi-bit/";
            },},{id: "paper_reading-2026-isca-gautracer-extending-ray-tracing-accelerator-for-gaussian-based-scene-representation",
          title: '(2026 ISCA) GauTracer: Extending Ray Tracing Accelerator for Gaussian-based Scene Representation',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/gautracer-extending-ray-tracing-accelerator-for-gaussian/";
            },},{id: "paper_reading-2026-isca-genza-a-general-and-efficient-accelerator-for-diverse-zero-knowledge-proof-protocols",
          title: '(2026 ISCA) GenZA: A General and Efficient Accelerator for Diverse Zero-Knowledge Proof Protocols...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/genza-a-general-and-efficient-accelerator-for-diverse-zero/";
            },},{id: "paper_reading-2026-isca-grains-enabling-high-performance-and-low-cost-via-storage-aware-graph-based-genome-analysis-algorithm-architecture-co-design",
          title: '(2026 ISCA) GRAINS: Enabling High-Performance and Low-Cost via Storage-Aware Graph-Based Genome Analysis Algorithm-Architecture...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/grains-enabling-high-performance-and-low-cost-via-storage/";
            },},{id: "paper_reading-2026-isca-hartbreaker-deterministic-fuzzing-of-multi-hart-risc-v-cpus-with-non-deterministic-programs",
          title: '(2026 ISCA) HARTBREAKER: Deterministic Fuzzing of Multi-Hart RISC-V CPUs with Non-Deterministic Programs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/hartbreaker-deterministic-fuzzing-of-multi-hart-risc-v-cpus/";
            },},{id: "paper_reading-2026-isca-l-pcn-a-point-cloud-accelerator-exploiting-spatial-locality-through-octree-based-islandization",
          title: '(2026 ISCA) L-PCN: A Point Cloud Accelerator Exploiting Spatial Locality through Octree-based Islandization...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/l-pcn-a-point-cloud-accelerator-exploiting-spatial-locality/";
            },},{id: "paper_reading-2026-isca-lit-silicon-a-case-where-thermal-imbalance-couples-concurrent-execution-in-multiple-gpus",
          title: '(2026 ISCA) Lit Silicon: A Case Where Thermal Imbalance Couples Concurrent Execution in...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/lit-silicon-a-case-where-thermal-imbalance-couples/";
            },},{id: "paper_reading-2026-isca-moe-hub-taming-software-complexity-for-seamless-moe-overlap-with-hardware-accelerated-communication-on-multi-gpu-systems",
          title: '(2026 ISCA) MoE-Hub: Taming Software Complexity for Seamless MoE Overlap with Hardware-Accelerated Communication...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/moe-hub-taming-software-complexity-for-seamless-moe-overlap/";
            },},{id: "paper_reading-2026-isca-ns-fps-accelerating-farthest-point-sampling-via-neighbor-search-in-large-scale-point-clouds",
          title: '(2026 ISCA) NS-FPS: Accelerating Farthest Point Sampling via Neighbor Search in Large-Scale Point...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/ns-fps-accelerating-farthest-point-sampling-via-neighbor/";
            },},{id: "paper_reading-2026-isca-power-sloshing-in-compound-servers-for-large-scale-ai-inference-workloads",
          title: '(2026 ISCA) Power Sloshing in Compound Servers for Large-Scale AI Inference Workloads',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/power-sloshing-in-compound-servers-for-large-scale-ai/";
            },},{id: "paper_reading-2026-isca-powergrad-hierarchical-power-management-for-power-limited-ml-inference-clusters",
          title: '(2026 ISCA) PowerGrad: Hierarchical Power Management for Power-Limited ML Inference Clusters',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/powergrad-hierarchical-power-management-for-power-limited/";
            },},{id: "paper_reading-2026-isca-powerweave-unlocking-energy-efficient-ml-on-gpus-with-os-level-spatial-power-management",
          title: '(2026 ISCA) PowerWeave: Unlocking Energy-Efficient ML on GPUs with OS-Level Spatial Power Management...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/powerweave-unlocking-energy-efficient-ml-on-gpus-with-os/";
            },},{id: "paper_reading-2026-isca-prometheus-toward-resilient-data-centers-through-optimized-cooling-infrastructure",
          title: '(2026 ISCA) Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/prometheus-toward-resilient-data-centers-through-optimized/";
            },},{id: "paper_reading-2026-isca-qed-scalable-consistency-verification-of-memory-instruction-reordering-in-hardware",
          title: '(2026 ISCA) QED: Scalable Consistency Verification of Memory Instruction Reordering in Hardware',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/qed-scalable-consistency-verification-of-memory-instruction/";
            },},{id: "paper_reading-2026-isca-r2d2-robotized-reconfigurable-network-for-disaggregated-datacenters",
          title: '(2026 ISCA) R2D2: Robotized Reconfigurable Network for Disaggregated Datacenters',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/r2d2-robotized-reconfigurable-network-for-disaggregated/";
            },},{id: "paper_reading-2026-isca-rangeguard-efficient-bounded-approximate-error-correction-for-reliable-dnns",
          title: '(2026 ISCA) RangeGuard: Efficient, Bounded Approximate Error Correction for Reliable DNNs',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/rangeguard-efficient-bounded-approximate-error-correction/";
            },},{id: "paper_reading-2026-isca-rearchitecting-the-datacenter-lifecycle-for-ai",
          title: '(2026 ISCA) Rearchitecting the Datacenter Lifecycle for AI',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/rearchitecting-the-datacenter-lifecycle-for-ai/";
            },},{id: "paper_reading-2026-isca-rhodes-robust-optimization-for-uncertainty-aware-design-of-co2-efficient-computing-systems",
          title: '(2026 ISCA) RHODES: Robust Optimization for Uncertainty-Aware Design of CO2-Efficient Computing Systems',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/rhodes-robust-optimization-for-uncertainty-aware-design-of/";
            },},{id: "paper_reading-2026-isca-satic-an-optimizing-ising-compiler-for-sat-isfiability",
          title: '(2026 ISCA) SATIC: An Optimizing Ising Compiler for SAT(isfiability)',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/satic-an-optimizing-ising-compiler-for-satisfiability/";
            },},{id: "paper_reading-2026-isca-slice-a-selective-local-inference-framework-with-codec-exploitation-for-accelerating-video-super-resolution",
          title: '(2026 ISCA) SLICE: A Selective Local Inference Framework with Codec Exploitation for Accelerating...',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/slice-a-selective-local-inference-framework-with-codec/";
            },},{id: "paper_reading-2026-isca-taking-analytic-databases-to-the-bank",
          title: '(2026 ISCA) Taking Analytic Databases to the Bank',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/taking-analytic-databases-to-the-bank/";
            },},{id: "paper_reading-2026-isca-takoformal-enabling-robust-software-for-programmable-memory-hierarchies",
          title: '(2026 ISCA) takoFormal: Enabling Robust Software for Programmable Memory Hierarchies',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/takoformal-enabling-robust-software-for-programmable-memory/";
            },},{id: "paper_reading-2026-isca-ttp-a-hardware-efficient-design-for-precise-prefetching-in-ray-tracing",
          title: '(2026 ISCA) TTP: A Hardware-Efficient Design for Precise Prefetching in Ray Tracing',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/ttp-a-hardware-efficient-design-for-precise-prefetching-in/";
            },},{id: "paper_reading-2026-isca-urng-a-framework-for-assessing-randomness-in-intermittent-computing-devices",
          title: '(2026 ISCA) uRNG: A Framework for Assessing Randomness in Intermittent Computing Devices',
          description: "TODO: One-sentence summary",
          section: "Paper_reading",handler: () => {
              window.location.href = "/paper-reading/Topic-Systems/urng-a-framework-for-assessing-randomness-in-intermittent/";
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
