---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 😉 About Me
I am an undergraduate student pursuing dual degrees in Information Engineering and Public Administration at Shandong University. My research interests lie in the intersection of **Large Language Models (LLMs) and Software Engineering**, particularly in **code translation, automated program repair, and automated program understanding**.  

I have led multiple research projects in collaboration with **Shandong University's Research Center for Architecture and Embedded Systems** and **Shandong University's Smart National Governance Laboratory**, under the guidance of [**Dr. Zhen Yang**](https://yz1019117968.github.io/mark.github.io/) and [**Prof. Liguo Fei**](https://faculty.sdu.edu.cn/feiliguo/zh_CN/index.htm). Additionally, my work has been fortunate to receive guidance from [**Prof. Zhi Jin**](https://scholar.google.com.hk/citations?user=ZC7SObAAAAAJ&hl=zh-CN&oi=ao) and [**Prof. Ge Li**](https://scholar.google.com.hk/citations?user=PPqcVRwAAAAJ&hl=zh-CN) at [**Key Laboratory of High Confidence Software Technologies, Ministry of Education (Peking University)**](https://hcst.pku.edu.cn/). I will soon begin my Master's studies at Peking University, advised by [**Prof. Dan Hao**](https://scholar.google.com.hk/citations?hl=zh-CN&user=34W2ZrMAAAAJ)

I have published in **top-tier venues** including *IEEE Transactions on Software Engineering* (CCF-A), and the ACM SIGSOFT International Symposium on Software Testing and Analysis *(ISSTA 2025)* (CCF-A). 

<span style="color:red">🔥 I am actively looking for a Internship position in AI/LLM/AI4SE. 🔥</span>

# 📖 Education
**Shandong University** (ARWU Top 101-150)  
*B.Eng in Information Engineering & B.A in Public Administration*  
Sept 2021 - Present

# 🔥 News
- *2025.03*: &nbsp;🎉🎉 One paper accepted to *the ACM SIGSOFT International Symposium on Software Testing and Analysis (ISSTA'25)*!
- *2024.10*: &nbsp;🎉🎉 One paper accepted at *IEEE Transactions on Software Engineering (TSE 2024)*!

# 📝 Publications 

<sup>*</sup> Equal contribution

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TSE 2024</div><img src='images/tse.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**Automated commit message generation with large language models: An empirical study and beyond**  
Pengyu Xue*, <ins>**Linhao Wu***</ins>, Zhongxing Yu, Zhi Jin, Zhen Yang, Xinyi Li, Zhenyu Yang, Yue Tan.

*IEEE Transactions on Software Engineering* (CCF-A Journal), 2024  
[[PDF](https://ieeexplore.ieee.org/document/10713474)] | [[Code](https://github.com/Pengyu03/LLM-Commit-Message-Generation)]
- Curated high-quality dataset through multi-step filtering
- Led first comprehensive evaluation of LLMs for commit message generation
- A context-learning framework based on retrieval, ERICommiter, was developed to significantly improve efficiency and performance in CMG tasks
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ISSTA 2025</div><img src='images/ClassT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**ClassEval-T: Evaluating Large Language Models in Class-Level Code Translation**  
Pengyu Xue*, <ins>**Linhao Wu***</ins>, Zhen Yang, Chengyi Wang, Xiang Li, Yuxiang Zhang, Jia Li, Ruikai Jin, Yifei Pei, Zhaoyan Shen, Xiran Lyu, Jacky Wai Keung.

*ISSTA 2025* (CCF-A Conference)， 2025
[[PDF](https://arxiv.org/pdf/2411.06145.pdf)] | [[Code](https://github.com/wLinHoo/ClassEval-T)]
- Built ClassEval-T benchmark covering Python/Java/C++ (360+ person-hours)
- Designed three novel translation strategies for real-world scenarios
- A manual analysis of more than 1200 failure cases summarizes the common types of errors that LLMs makes in class-level code translation tasks
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv preprint 2024</div><img src='images/icsme.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**Exploring and lifting the robustness of LLM-powered automated program repair with metamorphic testing**  
Pengyu Xue*, <ins>**Linhao Wu***</ins>, Zhen Yang, Zhongxing Yu, Zhi Jin, Ge Li, Yan Xiao, Shuo Liu, Xinyi Li, Hongyi Lin, and Jingwen Wu.

*arXiv preprint arXiv:2410.07516*, 2024 [[PDF](https://arxiv.org/pdf/2410.07516.pdf)]

- Created MT-LAPR testing framework with 9 metamorphic relations
- Tested LLMs and ultimately revealed their robustness deficiencies in the APR task.
- Integrated CodeT5-based model improving code readability and LLMs' robustness by 49.32%
</div>
</div>


# 🏆 Honors and Awards
- *2024* ICM Honorable Mention - Interdisciplinary Contest in Modeling
- *2022-2023* New 120th Anniversary Social Scholarship, Shandong University (Top 0.5%)
- *2022-2023* First-Class Outstanding Student Award, Shandong University (Top 0.8%)

# 🏢 Internship Experience
- ### **Shandong University – Research Center for Architecture and Embedded Systems**  
  - **Position**: Research Assistant  
  - **Project**: Automated Commit Message Generation with Large Language Models; Class-Level Code Translation Benchmark: ClassEval-T  

- ### **Shandong University – Smart National Governance Laboratory**  
  - **Position**: Research Assistant  
  - **Project**: AI-Driven Dynamic Decision-Making for Catastrophic Emergency Response  

# 📊 Academic Activities
- **Oral Presentation**: China Information Fusion Conference 2023
- **Poster Presentation**: National Big Data & Social Computing Conference 2024

<div align="center" style="width:180px; height:180px;">
  <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=VyKDMn16TYZSW5UsOLr1LSBU4S3mAARf2IDYDV0u0ew"></script>
</div>
