"use client";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";





const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];


const skillsData = {
  Programming: ["Python","SQL","R","JavaScript","MATLAB","HTML/CSS"],
  "Machine Learning": [
    "Machine Learning",
    "Data Mining",
    "A/B Testing",
    "Hypothesis Testing",
    "Multivariate Analysis",
    "Quantitative Analysis",
    "Data Visualization",
    "Feature Engineering",
    "Model Evaluation",
  ],
  "Data Tools": [
    "Snowflake",
    "BigQuery",
    "MySQL",
    "Pandas",
    "NumPy",
    "SciPy",
    "Spark",
    "Tableau",
    "Power BI",
    "Alteryx",
    "Azure DevOps",
  ],
  "Cloud & Other": [
    "AWS",
    "Azure",
    "GCP",
    "Git",
    "Salesforce",
    "Bloomberg",
    "Excel (Pivot Tables, VLOOKUP)",
  ],
  Certificates: [
    "Google Data Analytics Professional Certificate",
    "AWS Cloud Solutions Architect",
    "JavaScript Algorithms and Data Structures",
  ],
};


export default function Home() {
  const [activeTab, setActiveTab] = useState("Programming");
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Nav */}
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-semibold tracking-tight text-slate-900">Lucy Xu</div>

          <nav className="hidden gap-12 text-2base text-slate-800 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5 text-slate-600">
            <a
              href="https://linkedin.com/in/luxu66"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-lg hover:text-slate-900 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="hover:text-slate-900"
              href="https://github.com/luucyxu"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-slate-900"
              href="mailto:lucyxu521@gmail.com"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#eef1f5] via-[#f4f6fa] to-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 py-16 md:grid-cols-[1.9fr_1fr] md:py-24">
          <div className="space-y-6">
            <h1 className="text-6xl font-semibold tracking-tight md:text-7xl">
              Lucy Xu
            </h1>
              
            <p className="ml-1 text-2xl font-medium text-slate-800 md:text-3xl">
              Data Scientist | Data Analyst | Business Intelligence Engineer | Fraud and Risk Analyst
            </p>

            <p className="text-lg leading-7 text-slate-600 md:text-xl">
              Northwestern University graduate with a focus on machine learning, data science, and product management. Experienced in building end-to-end AI pipelines, SQL workflows, and analytical models to support financial and data-driven decision insightst for PACCAR, TransUnion, Monster Energy, and PwC.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
  <a
    href="#contact"
    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
  >
    Contact Me
  </a>

  <a
    href="#projects"
    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
  >
    View Projects
  </a>

  <a
    href="/Lu_Xu_DS.Resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
  >
    <span className="text-base leading-none">📄</span>
    View Resume
  </a>



              



            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="h-[320px] w-[320px] rounded-full border-[10px] border-white shadow-xl overflow-hidden">
              <Image
                src="/Profile_photo.JPG"
                alt="Lucy Xu"
                width={320}
                height={320}
                className="object-cover [object-position:50%_22%]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="h-10 w-full bg-white" />
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-semibold">Professional Experience</h2>
        <p className="mt-3 text-xl font-medium text-slate-600">My work experience in the industry</p>

          <div className="mt-10 space-y-8">


    {/* PACCAR */}
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
        {/* Logo */}
        <div className="flex items-center justify-center bg-slate-50 p-9">
          <Image
            src="/logos/paccar.png"
            alt="PACCAR"
            width={400}
            height={260}
            className="w-full max-w-[360px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Data Analyst Intern
              </h3>
              <p className="text-base font-medium text-slate-600">
                PACCAR · Lewisville, TX
              </p>
            </div>

            <span className="inline-flex items-center rounded-full border-slate-200 bg-slate-200 px-4 py-1 text-m font-semibold text-slate-700">
              Jun 2025 to Sep 2025
            </span>
          </div>

          <ul className="mt-6 list-disc space-y-4 pl-6 text-xl leading-8 text-slate-800">
            <li>
              Orchestrated ETL pipelines in Azure DevOps to ingest and process
              350K plus ECU fault logs, improving data accessibility and reducing
              per vehicle startup time by ～20% through streamlined flow and
              monitoring automation.
            </li>
            <li>
              Designed time series forecasting models to identify early fault
              signals and detect anomalous system behaviors, reducing diagnostic
              time by 78% and improving operational reliability.
            </li>
          </ul>
        </div>
      </div>
    </div>
        {/* TransUnion */}
    {/* TransUnion */}
<div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
    {/* Logo */}
    <div className="flex items-center justify-center bg-slate-50 p-9">
      <Image
        src="/logos/transunion.png"
        alt="TransUnion"
        width={400}
        height={260}
        className="w-full max-w-[360px] object-contain"
      />
    </div>

    {/* Content */}
    <div className="p-8 md:p-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Data Science and Analytics, Industrial Practicum
          </h3>
          <p className="text-base font-medium text-slate-600">
            TransUnion · Chicago, IL
          </p>
        </div>

        <span className="inline-flex items-center rounded-full bg-slate-200 px-4 py-1 text-m font-semibold text-slate-700">
          Sep 2024 to Jun 2025
        </span>
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-6 text-xl leading-8 text-slate-800">
        <li>
          Created an end to end AI pipeline to optimize CNN architectures and
          reduced model risk by 22%
        </li>
        <li>
          Leveraged soft ordering 1D CNN and convolutional autoencoders for
          feature extraction on large scale structured data.
        </li>
        <li>
          Automated PyTorch based CNN pipelines and converted tabular data into
          multi channel inputs, cutting model development cycle by 43% and
          reducing fraud detection decision latency across risk teams.
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* Monster Energy */}
<div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
    {/* Logo */}
    <div className="flex items-center justify-center bg-slate-50 p-9">
      <Image
        src="/logos/Monsterenergy.png"
        alt="Monster Energy"
        width={400}
        height={260}
        className="w-full max-w-[360px] object-contain"
      />
    </div>

    {/* Content */}
    <div className="p-8 md:p-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Financial Data Analyst, Full Time
          </h3>
          <p className="text-base font-medium text-slate-600">
            Monster Energy · Corona, CA
          </p>
        </div>

        <span className="inline-flex items-center rounded-full bg-slate-200 px-4 py-1 text-m font-semibold text-slate-700">
          Apr 2024 to Aug 2024
        </span>
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-6 text-xl leading-8 text-slate-800">
        <li>
          Implemented A/B testing and regression models in Python to test pricing
          hypotheses and quantify variance drivers, reducing forecast error by 12% and improving generalization across product lines.
        </li>
        <li>
          Built risk management models including logistic regression and decision
          trees to streamline amortization workflow, reducing time by 23%.
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* PwC */}
<div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
    {/* Logo */}
    <div className="flex items-center justify-center bg-slate-50 p-9">
      <Image
        src="/logos/pwc.png"
        alt="PwC"
        width={400}
        height={260}
        className="w-full max-w-[360px] object-contain"
      />
    </div>

    {/* Content */}
    <div className="p-8 md:p-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Financial Assurance Associate, Full Time
          </h3>
          <p className="text-base font-medium text-slate-600">
            PricewaterhouseCoopers, LLP · Los Angeles, CA
          </p>
        </div>

        <span className="inline-flex items-center rounded-full bg-slate-200 px-4 py-1 text-m font-semibold text-slate-700">
          Oct 2022 to Jul 2023
        </span>
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-6 text-xl leading-8 text-slate-800">
        <li>
          Awarded PwC’s Data Driven Achievement Award for creating ML pipelines
          that automated audit exception detection. Applied Isolation Forests,
          VAEs, and NLP to uncover risk signals, raising detection precision by
          25 percent and reducing close cycles by 38 percent.
        </li>
        <li>
          Analyzed 10M plus financial transactions to identify anomalies and
          reconciliation gaps. Engineered features and applied Z score detection,
          reducing review workload by 40 percent and enhancing audit accuracy
          under PCAOB standards.
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* Astra Solutions */}
<div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
      {/* Logo */}
    <div className="flex items-center justify-center bg-slate-50 p-9">
      <Image
        src="/logos/astrasolution.png"
        alt="PwC"
        width={400}
        height={260}
        className="w-full max-w-[360px] object-contain"
      />
    </div>


    {/* Content */}
    <div className="p-8 md:p-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Data Science Intern
          </h3>
          <p className="text-base font-medium text-slate-600">
            Astra Solutions, Inc(Global IT Consulting & Business Solution Company) San Diego, CA
          </p>
        </div>

        <span className="inline-flex items-center rounded-full bg-slate-200 px-4 py-1 text-m font-semibold text-slate-700">
          Jun 2021 to Sep 2021
        </span>
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-6 text-xl leading-8 text-slate-800">
        <li>
          Engineered REST API pipelines to automate competitor pricing extraction,
          improving accessibility and refining benchmarks.
        </li>
        <li>
          Leveraged unsupervised clustering and XGBoost models in Looker to segment
          high value users & identify retention drivers, increasing campaign ROI
          by 32%.
        </li>
        <li>
          Developed regression and ensemble models with cross validation and
          hyperparameter tuning, boosting ROC-AUC by 12% and reducing
          portfolio risk by 50K through improved rental pricing predictions.
        </li>
      </ul>
    </div>
  </div>
</div>
  </div>
    {/* Hoolihome */}
<div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
    
     <div className="flex items-center justify-center bg-slate-50 p-9">
      <Image
        src="/logos/hoolihome.png"
        alt="hoolihome"
        width={400}
        height={260}
        className="w-full max-w-[360px] object-contain"
      />
    </div>

    {/* Content */}
    <div className="p-8 md:p-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Marketing Analyst Intern
          </h3>
          <p className="text-base font-medium text-slate-600">
            Hoolihome · Irvine, CA
          </p>
        </div>

        <span className="inline-flex items-center rounded-full bg-slate-200 px-4 py-1 text-m font-semibold text-slate-700">
          Jun 2019 to Aug 2019
        </span>
      </div>

      <ul className="mt-6 list-disc space-y-4 pl-6 text-xl leading-8 text-slate-800">
        <li>
          Clustered users to improve campaign targeting and customer acquisition,
          generating over 1,200 new signups within three months.
        </li>
        <li>
          Forecasted rental pricing trends using time series models and flagged
          underperforming listings, informing bidding strategy adjustments and
          reducing financial exposure by 50K.
        </li>
      </ul>
    </div>
  </div>
</div>

</section>

      {/* Projects */}
<section id="projects" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-4xl font-semibold">Projects</h2>
  <p className="mt-2 text-slate-600">
    Highlighting my key technical work and research
  </p>

  <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">

    {/* Mintel Project */}
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Image */}
      <div className="relative h-56 w-full bg-slate-100">
        <Image
          src="/logos/Mintel.png"
          alt="Mintel GNPD Project"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xl font-semibold text-slate-900">
  Product Search NLP Evaluation
</div>
<div className="mt-1 text-m font-medium text-slate-600">
  Multi-Agent Enrichment and Pre-Tagging Normalization
</div>

        <p className="mt-4 text-m leading-6 text-slate-700">
          Evaluated and redesigned a natural language product search pipeline for Mintel GNPD, focusing on how vocabulary mismatch between user queries and indexing tags degrades retrieval quality. Benchmarked query-time enrichment against offline pre-tagging enrichment to assess ranking quality, recall, and latency tradeoffs at scale.
        </p>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Python",
            "NLP",
            "Information Retrieval",
            "Hybrid Search (BM25 + Embeddings)",
            "Evaluation Metrics",
            "KeyBERT",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-slate-200 px-3 py-1 text-s font-medium text-slate-900"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Outcomes */}
        <div className="mt-5">
          <div className="text-m font-semibold text-slate-900">
            Outcomes:
          </div>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-m leading-6 text-slate-700">
            <li>
              Built a claim-level offline evaluation framework across 24 high-prevalence product claims.
            </li>
            <li>
              Identified that query-time enrichment increases latency by over 10× while degrading early ranking quality.
            </li>
            <li>
              Validated pre-tagging enrichment as a production-viable solution, improving Precision, Recall, and F1 by approximately 35%.
            </li>
          </ul>
        </div>

        {/* View Project */}
        <a
  href="/projects/Mintel%20Capstone.pdf"
  target="_blank"
  rel="noreferrer"
  className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
>
<span className="flex items-center gap-2">
  View Project
  <FiExternalLink className="text-sm text-slate-1000" />
</span>

</a>

      </div>
    </div>

        {/* Snowflake ERM Project */}
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Image */}
      <div className="relative h-56 w-full bg-slate-50 flex items-center justify-center p-8">
        <Image
          src="/logos/Snowflake.png"
          alt="Snowflake ERM Project"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xl font-semibold text-slate-900">
          Snowflake Public Risk Disclosure Analytics
        </div>
        <div className="mt-1 text-m font-medium text-slate-600">
          Enterprise Risk Management and Internal Audit Analytics
        </div>

        <p className="mt-4 text-m leading-6 text-slate-700">
          Designed an enterprise risk analytics framework using publicly disclosed 10-K risk factors to support internal audit and ERM decision-making. Leveraged Snowflake and Snowsight to transform unstructured risk disclosures into structured governance signals, enabling risk trend analysis, concentration assessment, and executive-level visibility into emerging risk themes across reporting periods.
        </p>

        

        {/* Tools Used */}
        <div className="mt-4">
          <div className="mt-2 flex flex-wrap gap-2">
            {[
              "SQL",
              "Snowflake",
              "Snowsight",
              "Python",
              "Tableau",
              "ETL",
              "Public 10-K Filings",
              "Enterprise Risk Management (ERM)",
              "Information Retrieval and Text Analytics",
            "Risk and Governance Analytics",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-slate-200 px-3 py-1 text-s font-medium text-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-5">
          <div className="text-m font-semibold text-slate-900">
            Outcomes:
          </div>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-m leading-6 text-slate-700">
            <li>
              Built a structured risk analytics framework converting unstructured public risk disclosures into actionable ERM insights for audit planning.
            </li>
            <li>
              Identified shifts in risk concentration and expansion across reporting periods to support proactive audit prioritization.
            </li>
            <li>
              Developed executive-facing dashboards in Snowsight to surface governance signals and enable risk-informed decision-making.
            </li>
          </ul>
        </div>

        {/* View Project */}
        <a
          href="/projects/CASE_Presentation_ERM_10k.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          <span className="flex items-center gap-2">
            View Project
            <FiExternalLink className="text-sm text-slate-900" />
          </span>
        </a>
      </div>
    </div>

{/* YouTube Trending Analytics Project */}
<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  {/* Image */}
  <div className="relative h-56 w-full bg-slate-50 flex items-center justify-center p-8">
    <Image
      src="/logos/youtube.png"
      alt="YouTube Trending Analytics Dashboard"
      fill
      className="object-contain"
    />
  </div>

  {/* Content */}
  <div className="p-6">
    <div className="text-xl font-semibold text-slate-900">
      YouTube Trending Analytics
    </div>
    <div className="mt-1 text-m font-medium text-slate-600">
      End to End Data Pipeline and Analytics Dashboard
    </div>

    <p className="mt-4 text-m leading-6 text-slate-700">
      Built an end to end analytics pipeline to analyze YouTube trending video
      behavior across countries and time. Implemented a Python based ingestion
      workflow to collect daily trending data from an external API, modeled and
      transformed the data in Snowflake using dbt, and delivered Tableau
      dashboards to support cross country comparison, seasonality analysis, and
      trend monitoring.
    </p>


    {/* Skills */}
    <div className="mt-4 flex flex-wrap gap-2">
      {[
        "Python",
        "External API Ingestion",
        "Snowflake",
        "dbt",
        "SQL Modeling",
        "Tableau",
        "Analytics Engineering",
        "Power BI",
        "Cloud Data Warehousing",
        "Airflow"
      ].map((skill) => (
        <span
          key={skill}
          className="rounded-md bg-slate-200 px-3 py-1 text-s font-medium text-slate-900"
        >
          {skill}
        </span>
      ))}
    </div>

    {/* Outcomes */}
    <div className="mt-5">
      <div className="text-m font-semibold text-slate-900">
        Outcomes:
      </div>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-m leading-6 text-slate-700">
        <li>
          Processed daily trending video data across 10 countries, enabling
          consistent cross regional and time based analysis in a cloud data
          warehouse.
        </li>
        <li>
          Designed dbt staging and aggregation models to clean semi structured
          data, standardize schemas, and support country by month trend analysis.
        </li>
        <li>
          Built interactive Tableau dashboards using stacked bar charts and
          heatmaps to compare trending volume and seasonality across regions.
        </li>
      </ul>
    </div>

    {/* View Project */}
    <a
      href="https://github.com/luucyxu/youtube-trending-analytics"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
    >
      <span className="flex items-center gap-2">
        View Project
        <FiExternalLink className="text-sm text-slate-900" />
      </span>
    </a>
  </div>
</div>



  </div>
</section>


      {/* Skills */}
<section id="skills" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-4xl font-semibold">Skills</h2>
  <p className="mt-2 text-slate-600">Technical skills and tools</p>

  <div className="mt-6 flex rounded-xl bg-slate-100 p-1">
    {Object.keys(skillsData).map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
          activeTab === tab
            ? "bg-slate-900 text-white"
            : "text-slate-700 hover:bg-slate-200"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-5">
    {skillsData[activeTab].map((skill) => (
      <div
        key={skill}
        className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white py-8 shadow-sm"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold text-slate-700">
          {skill[0]}
        </div>
        <div className="mt-3 px-2 text-center text-sm text-slate-900">
          {skill}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Education */}
<section id="education" className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-4xl font-semibold">Education</h2>
  <p className="mt-2 text-slate-600">My academic background</p>

  <div className="mt-8 space-y-6">

    {/* Northwestern */}
    <div className="flex items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-42 w-54 items-center justify-center rounded-xl">
        <Image
    src="/logos/Northwestern.png"
    alt="Northwestern Logo"
    width={240}
    height={120}
    className="object-contain"
  />
      </div>

      <div className="flex-1">
        <div className="text-lg font-semibold text-slate-900">
          Northwestern University, McCormick School of Engineering
        </div>
        <div className="text-sm font-medium text-slate-600">
          M.S. in Machine Learning and Data Science. Minor in Engineering Management
        </div>

        <div className="mt-3 text-m leading-6 text-slate-700">
          <span className="font-semibold">Relevant coursework:</span>{" "}
          Machine Learning I and II, Deep Learning, Generative AI, Data Mining,
          Text Analytics, Databases and Information Retrieval, Analytics for Big Data,
          Cloud Engineering, Data Visualization, Interpretable Machine Learning,
          Advanced Algorithms for Machine Learning
        </div>
      </div>

      <div className="text-right text-sm text-slate-600">
        <div className="rounded-full bg-slate-200 px-3 py-1 font-semibold">
          Dec 2025
        </div>
        <div className="mt-2">GPA:3.7/4.0</div>
      </div>
    </div>

    {/* UC San Diego */}
    <div className="flex items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-42 w-54 items-center justify-center rounded-xl">
        <Image
    src="/logos/ucsd.png"
    alt="UC San Diego Logo"
    width={240}
    height={120}
    className="object-contain"
  />
      </div>

      <div className="flex-1">
        <div className="text-lg font-semibold text-slate-900">
          University of California, San Diego
        </div>
        <div className="text-sm font-medium text-slate-600">
          B.S. in Mathematics and Economics. Minor in Accounting
        </div>

        <div className="mt-3 text-m
         leading-6 text-slate-700">
          <span className="font-semibold">Relevant coursework:</span>{" "}
          Probability and Statistics, Linear Algebra. Mathematical Statistics,
          Differential Equations, Econometrics, Data Analysis and Inference
        </div>
     

      {/* Awards */}
    <div className="mt-2 text-m leading-6 text-slate-700">
      <span className="font-semibold">Awards and Honors:</span>{" "}
      Provost Honors (Fall 2021, Winter 2021, Spring 2021, Spring 2022),
      International Peer Assistant (IPA) Certificate
    </div>
  </div>

      <div className="text-right text-sm text-slate-600">
        <div className="rounded-full bg-slate-200 px-3 py-1 font-semibold">
          Jun 2022
        </div>
        <div className="mt-2">GPA:3.7/4.0</div>
      </div>
    </div>

  </div>
</section>


      {/* Contact */}
<section
  id="contact"
  className="mx-auto max-w-7xl px-6 pb-24 pt-20"
>
  <h2 className="text-4xl font-semibold">Contact Me</h2>
  <p className="mt-2 text-slate-600">Get in touch for opportunities</p >

  <div className="mt-12 grid grid-cols-1 gap-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:grid-cols-2">

    {/* Left */}
    <div className="flex flex-col justify-center">
      <h3 className="text-6xl font-bold text-slate-1200">
        Let’s connect!
      </h3>
      <p className="mt-4 max-w-md text-slate-600 leading-7">
        I’m open to full-time roles and collaborative projects in
        data science, analytics, and risk-focused domains.  
        Feel free to reach out.
      </p >

    </div>

    {/* Right */}
    <form className="rounded-2xl bg-white p-6 shadow-sm space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="First name"
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
        <input
          type="text"
          placeholder="Last name"
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
      </div>

      <input
        type="email"
        placeholder="Email address"
        className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
      />

      <textarea
        placeholder="Message"
        rows={4}
        className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
      />

      <button
        type="submit"
        className="rounded-lg bg-slate-900 px-46 py-2 text-m font-semibold text-white hover:bg-slate-800"
      >
        Send message
      </button>
    </form>
  </div>
</section>

      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Lucy Xu. All rights reserved.
      </footer>
    </main>
  );
}


