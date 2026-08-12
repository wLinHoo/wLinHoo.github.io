---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="research-home">
  <section class="home-section home-section--about" id="about-me" aria-labelledby="about-title">
    <div class="section-heading">
      <h2 id="about-title">About Me</h2>
    </div>
    <div class="about-copy">
      <p>I am an incoming M.S. student in Computer Science and Technology at Peking University. My research interests lie at the intersection of <strong>Large Language Models (LLMs) and Software Engineering</strong>, particularly in <strong>code translation, automated program repair, and automated program understanding</strong>.</p>
      <p>I have led multiple research projects in collaboration with <strong>Shandong University's Research Center for Architecture and Embedded Systems</strong> and <strong>Shandong University's Smart National Governance Laboratory</strong>, under the guidance of <a href="https://yz1019117968.github.io/mark.github.io/" target="_blank" rel="noopener noreferrer"><strong>Dr. Zhen Yang</strong></a> and <a href="https://faculty.sdu.edu.cn/feiliguo/zh_CN/index.htm" target="_blank" rel="noopener noreferrer"><strong>Prof. Liguo Fei</strong></a>.</p>
      <p>My work has also been fortunate to receive guidance from <a href="https://scholar.google.com.hk/citations?user=ZC7SObAAAAAJ&amp;hl=zh-CN&amp;oi=ao" target="_blank" rel="noopener noreferrer"><strong>Prof. Zhi Jin</strong></a> and <a href="https://scholar.google.com.hk/citations?user=PPqcVRwAAAAJ&amp;hl=zh-CN" target="_blank" rel="noopener noreferrer"><strong>Prof. Ge Li</strong></a> at the <a href="https://hcst.pku.edu.cn/" target="_blank" rel="noopener noreferrer"><strong>Key Laboratory of High Confidence Software Technologies, Ministry of Education (Peking University)</strong></a>. At Peking University, I will be advised by <a href="https://scholar.google.com.hk/citations?hl=zh-CN&amp;user=34W2ZrMAAAAJ" target="_blank" rel="noopener noreferrer"><strong>Prof. Dan Hao</strong></a>.</p>
      <p>I have published in <strong>top-tier venues</strong>, including <em>IEEE Transactions on Software Engineering</em> and the ACM SIGSOFT International Symposium on Software Testing and Analysis.</p>
    </div>
    <aside class="availability-note" aria-label="Internship availability">
      I am actively looking for an internship position in AI, LLM, or AI4SE.
    </aside>
  </section>

  <section class="home-section" id="news" aria-labelledby="news-title">
    <div class="section-heading">
      <h2 id="news-title">News</h2>
    </div>
    <ol class="news-list">
      <li><time datetime="2026-06">2026.06</time><span>One paper accepted to the ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA '26).</span></li>
      <li><time datetime="2025-12">2025.12</time><span>One paper accepted to the ACM International Conference on the Foundations of Software Engineering (FSE '26).</span></li>
      <li><time datetime="2025-03">2025.03</time><span>One paper accepted to the ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA '25).</span></li>
      <li><time datetime="2024-10">2024.10</time><span>One paper accepted at IEEE Transactions on Software Engineering (TSE 2024).</span></li>
    </ol>
  </section>

  <section class="home-section" id="education" aria-labelledby="education-title">
    <div class="section-heading">
      <h2 id="education-title">Education</h2>
    </div>
    <div class="resume-list">
      <article class="resume-row">
        <time datetime="2026">2026 — Present</time>
        <div class="resume-row__body">
          <h3>Peking University</h3>
          <p>M.S. in Computer Science and Technology</p>
        </div>
      </article>
      <article class="resume-row">
        <time datetime="2021">2021 — 2026</time>
        <div class="resume-row__body">
          <h3>Shandong University</h3>
          <p>B.Eng in Information Engineering &amp; B.A in Public Administration</p>
        </div>
      </article>
    </div>
  </section>

  <section class="home-section publications-section" id="publications" aria-labelledby="publications-title">
    <div class="section-heading">
      <h2 id="publications-title">Publications</h2>
    </div>

    <details class="publication-category" open>
      <summary class="publication-category__summary">
        <span class="publication-category__icon" aria-hidden="true">▤</span>
        <span>Main Work</span>
        <span class="publication-category__count" aria-label="5 publications">5</span>
        <span class="publication-category__chevron" aria-hidden="true">›</span>
      </summary>
      <div class="publication-category__body">
        <p class="contribution-note"><sup>*</sup> Equal contribution</p>
        <div class="publication-list">
      <article class="publication-card">
        <figure class="publication-visual">
          <img src="{{ '/images/causalrepair.png' | relative_url }}" alt="Overview of the CausalRepair dual-slicing repair framework">
        </figure>
        <div class="publication-content">
          <div class="tag-row"><span class="venue-tag">ISSTA '26</span><span class="tag--ccf">CCF-A</span></div>
          <h4>CausalRepair: Bridging the Causality Gap in Large Language Model-Based Automated Program Repair via Dual-Slicing</h4>
          <p class="publication-authors"><strong class="self-author">Linhao Wu</strong>, Yizhou Chen, Zhen Yang, Pengyu Xue, Dan Hao.</p>
          <p class="publication-venue">ACM SIGSOFT International Symposium on Software Testing and Analysis, 2026</p>
          <div class="publication-links"><a href="https://arxiv.org/pdf/2608.10613" target="_blank" rel="noopener noreferrer">PDF</a><a href="https://github.com/wLinHoo/CausalRepair" target="_blank" rel="noopener noreferrer">Code</a></div>
        </div>
      </article>

      <article class="publication-card">
        <figure class="publication-visual">
          <img src="{{ '/images/tse.png' | relative_url }}" alt="Workflow of the ERICommiter commit message generation framework">
        </figure>
        <div class="publication-content">
          <div class="tag-row"><span class="venue-tag">TSE '24</span><span class="tag--ccf">CCF-A</span></div>
          <h4>Automated Commit Message Generation with Large Language Models: An Empirical Study and Beyond</h4>
          <p class="publication-authors">Pengyu Xue<sup>*</sup>, <strong class="self-author">Linhao Wu<sup>*</sup></strong>, Zhongxing Yu, Zhi Jin, Zhen Yang, Xinyi Li, Zhenyu Yang, Yue Tan.</p>
          <p class="publication-venue">IEEE Transactions on Software Engineering, 2024</p>
          <div class="publication-links"><a href="https://ieeexplore.ieee.org/document/10713474" target="_blank" rel="noopener noreferrer">PDF</a><a href="https://github.com/Pengyu03/LLM-Commit-Message-Generation" target="_blank" rel="noopener noreferrer">Code</a></div>
        </div>
      </article>

      <article class="publication-card">
        <figure class="publication-visual">
          <img src="{{ '/images/ClassT.png' | relative_url }}" alt="ClassEval-T benchmark and class-level code translation strategies">
        </figure>
        <div class="publication-content">
          <div class="tag-row"><span class="venue-tag">ISSTA '25</span><span class="tag--ccf">CCF-A</span></div>
          <h4>ClassEval-T: Evaluating Large Language Models in Class-Level Code Translation</h4>
          <p class="publication-authors">Pengyu Xue<sup>*</sup>, <strong class="self-author">Linhao Wu<sup>*</sup></strong>, Zhen Yang, Chengyi Wang, Xiang Li, Yuxiang Zhang, Jia Li, Ruikai Jin, Yifei Pei, Zhaoyan Shen, Xiran Lyu, Jacky Wai Keung.</p>
          <p class="publication-venue">ACM SIGSOFT International Symposium on Software Testing and Analysis, 2025</p>
          <div class="publication-links"><a href="https://dl.acm.org/doi/pdf/10.1145/3728940" target="_blank" rel="noopener noreferrer">PDF</a><a href="https://github.com/wLinHoo/ClassEval-T" target="_blank" rel="noopener noreferrer">Code</a></div>
        </div>
      </article>

      <article class="publication-card">
        <figure class="publication-visual">
          <img src="{{ '/images/debugrepair.png' | relative_url }}" alt="DebugRepair self-directed debugging and patch refinement pipeline">
        </figure>
        <div class="publication-content">
          <div class="tag-row"><span class="venue-tag venue-tag--preprint">Preprint '26</span></div>
          <h4>DebugRepair: Enhancing LLM-Based Automated Program Repair via Self-Directed Debugging</h4>
          <p class="publication-authors"><strong class="self-author">Linhao Wu</strong>, Yifei Pei, Zhen Yang, Kainan Li, Zhonghang Lu, Hao Tan, Xiran Lyu, Jia Li, Yizhou Chen, Pengyu Xue, Kunwu Zheng, Dan Hao.</p>
          <p class="publication-venue">arXiv:2604.19305, 2026</p>
          <div class="publication-links"><a href="https://arxiv.org/pdf/2604.19305" target="_blank" rel="noopener noreferrer">PDF</a></div>
        </div>
      </article>

      <article class="publication-card">
        <figure class="publication-visual">
          <img src="{{ '/images/icsme.png' | relative_url }}" alt="Metamorphic testing framework for evaluating LLM-powered program repair">
        </figure>
        <div class="publication-content">
          <div class="tag-row"><span class="venue-tag venue-tag--preprint">Preprint '24</span></div>
          <h4>Exploring and Lifting the Robustness of LLM-Powered Automated Program Repair with Metamorphic Testing</h4>
          <p class="publication-authors">Pengyu Xue<sup>*</sup>, <strong class="self-author">Linhao Wu<sup>*</sup></strong>, Zhen Yang, Zhongxing Yu, Zhi Jin, Ge Li, Yan Xiao, Shuo Liu, Xinyi Li, Hongyi Lin, Jingwen Wu.</p>
          <p class="publication-venue">arXiv:2410.07516, 2024</p>
          <div class="publication-links"><a href="https://arxiv.org/pdf/2410.07516.pdf" target="_blank" rel="noopener noreferrer">PDF</a></div>
        </div>
      </article>
        </div>
      </div>
    </details>

    <details class="publication-category">
      <summary class="publication-category__summary">
        <span class="publication-category__icon" aria-hidden="true">▤</span>
        <span>Other Work</span>
        <span class="publication-category__count" aria-label="7 publications">7</span>
        <span class="publication-category__chevron" aria-hidden="true">›</span>
      </summary>
      <div class="publication-category__body publication-category__body--archive">
        <p class="archive-intro">A compact record of recent publications and preprints.</p>

        <div class="archive-year-group">
      <p class="archive-year">2026</p>
      <div class="archive-list">
        <article class="archive-work">
          <div class="archive-title-line"><h4>TransLibEval: Demystify Large Language Models’ Capability in Third-Party Library-Targeted Code Translation</h4><div class="archive-meta"><span class="archive-status">FSE '26</span><span class="tag--ccf">CCF-A</span></div></div>
          <a class="archive-link" href="https://arxiv.org/pdf/2509.12087" target="_blank" rel="noopener noreferrer">PDF <span aria-hidden="true">↗</span></a>
        </article>
        <article class="archive-work">
          <div class="archive-title-line"><h4>Toward Executable Repository-Level Code Generation via Environment Alignment</h4><div class="archive-meta"><span class="archive-status">Preprint</span></div></div>
          <a class="archive-link" href="https://arxiv.org/pdf/2604.03622" target="_blank" rel="noopener noreferrer">PDF <span aria-hidden="true">↗</span></a>
        </article>
        <article class="archive-work">
          <div class="archive-title-line"><h4>Persistent Cross-Attempt State Optimization for Repository-Level Code Generation</h4><div class="archive-meta"><span class="archive-status">Preprint</span></div></div>
          <a class="archive-link" href="https://arxiv.org/pdf/2604.03632" target="_blank" rel="noopener noreferrer">PDF <span aria-hidden="true">↗</span></a>
        </article>
        <article class="archive-work">
          <div class="archive-title-line"><h4>Fixturize: Bridging the Fixture Gap in Test Generation</h4><div class="archive-meta"><span class="archive-status">Preprint</span></div></div>
          <a class="archive-link" href="https://arxiv.org/pdf/2601.06615" target="_blank" rel="noopener noreferrer">PDF <span aria-hidden="true">↗</span></a>
        </article>
        <article class="archive-work">
          <div class="archive-title-line"><h4>Porting Declarative UI to HarmonyOS: A Heuristic-guided LLM Approach</h4><div class="archive-meta"><span class="archive-status">Preprint</span></div></div>
          <a class="archive-link" href="https://arxiv.org/pdf/2606.07085" target="_blank" rel="noopener noreferrer">PDF <span aria-hidden="true">↗</span></a>
        </article>
        <article class="archive-work">
          <div class="archive-title-line"><h4>Rescue plan intelligent generation for natural disasters: an integrated approach based on Large Language Models</h4><div class="archive-meta"><span class="archive-status">npj Natural Hazards '26</span></div></div>
          <a class="archive-link" href="https://doi.org/10.1038/s44304-026-00232-5" target="_blank" rel="noopener noreferrer">Paper <span aria-hidden="true">↗</span></a>
        </article>
      </div>
        </div>

        <div class="archive-year-group">
      <p class="archive-year">2025</p>
      <div class="archive-list">
        <article class="archive-work">
          <div class="archive-title-line"><h4>DISTINCT: A Description-Guided Branch-Consistency Analysis Framework for Non-Regressive Test Case Generation</h4><div class="archive-meta"><span class="archive-status">Preprint</span></div></div>
          <a class="archive-link" href="https://arxiv.org/pdf/2506.07486" target="_blank" rel="noopener noreferrer">PDF <span aria-hidden="true">↗</span></a>
        </article>
      </div>
        </div>
      </div>
    </details>
  </section>

  <section class="home-section" id="honors-and-awards" aria-labelledby="honors-title">
    <div class="section-heading">
      <h2 id="honors-title">Honors and Awards</h2>
    </div>
    <div class="honors-list">
      <article class="honor-row"><time>2026</time><p>Honorary Bachelor's Degree, Shandong University</p></article>
      <article class="honor-row"><time>2026</time><p>Outstanding Graduate, Shandong University</p></article>
      <article class="honor-row"><time>2025</time><p>Presidential Scholarship Candidate – Research Innovation Category, Shandong University <span>Top 0.1%</span></p></article>
      <article class="honor-row"><time>2024</time><p>ICM Honorable Mention – Interdisciplinary Contest in Modeling</p></article>
      <article class="honor-row"><time>2022–2023</time><p>New 120th Anniversary Social Scholarship, Shandong University <span>Top 0.5%</span></p></article>
      <article class="honor-row"><time>2022–2023</time><p>First-Class Outstanding Student Award, Shandong University <span>Top 0.8%</span></p></article>
    </div>
  </section>

  <section class="home-section" id="internship-experience" aria-labelledby="experience-title">
    <div class="section-heading">
      <h2 id="experience-title">Internship &amp; Research Experience</h2>
    </div>
    <div class="experience-list">
      <article>
        <p class="experience-role">Research Assistant</p>
        <h3>Shandong University – Research Center for Architecture and Embedded Systems</h3>
        <p>Automated Commit Message Generation with Large Language Models; Class-Level Code Translation Benchmark: ClassEval-T</p>
      </article>
      <article>
        <p class="experience-role">Research Assistant</p>
        <h3>Shandong University – Smart National Governance Laboratory</h3>
        <p>AI-Driven Dynamic Decision-Making for Catastrophic Emergency Response</p>
      </article>
    </div>
  </section>

  <section class="home-section" id="academic-activities" aria-labelledby="activities-title">
    <div class="section-heading">
      <h2 id="activities-title">Academic Activities</h2>
    </div>
    <div class="activities-list">
      <article class="activity-row"><span>Oral Presentation</span><p>China Information Fusion Conference 2023</p></article>
      <article class="activity-row"><span>Poster Presentation</span><p>National Big Data &amp; Social Computing Conference 2024</p></article>
    </div>
  </section>

  <footer class="visitor-map" aria-label="Visitor map">
    <p>Visitors around the world</p>
    <div class="visitor-map__globe">
      <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=VyKDMn16TYZSW5UsOLr1LSBU4S3mAARf2IDYDV0u0ew"></script>
    </div>
  </footer>
</div>
