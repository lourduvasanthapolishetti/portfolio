import {
  SkillItem,
  ExperienceItem,
  ProjectItem,
  CertificateItem,
  EducationItem
} from '../types';

/**
 * Resolves a file inside /public against Vite's base path.
 * GitHub Pages serves this app from /portfolio/ (the repository name), so a
 * hardcoded '/projects/x.jpg' would 404 — it must be '/portfolio/projects/x.jpg'.
 * In dev, BASE_URL is '/' and this is a no-op.
 */
const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const PERSONAL_INFO = {
  name: 'Lourdu Vasantha Polishetti',
  role: 'Data Analyst',
  location: 'Hyderabad, Telangana',
  email: 'plvasantha1990@gmail.com',
  phone: '+91 93466 35987',
  phoneRaw: '919346635987',
  whatsappMessage: 'Hi Lourdu Vasantha, I saw your Data Analyst portfolio and would like to discuss an opportunity.',
  get whatsappUrl() {
    return `https://wa.me/${this.phoneRaw}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  linkedin: 'https://www.linkedin.com/in/lourdu-vasantha-polishetti/',
  tableauPublic: 'https://public.tableau.com/app/profile/lourdu.vasantha.polishetti',
  availabilityStatus: 'Open to Work — Immediate Joiner',
  /**
   * Contact form delivery endpoint.
   *
   * Leave EMPTY to use the built-in fallback, which opens the visitor's email
   * client with a pre-filled draft (works today, but needs a mail app).
   *
   * To get real one-click delivery, create a free form at https://formspree.io
   * and paste the endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
   */
  contactFormEndpoint: ''
};

export const SKILLS: SkillItem[] = [
  {
    id: 'sql',
    code: '01',
    title: 'SQL & MySQL',
    category: 'core',
    description: 'Querying relational databases with complex joins, subqueries, CTEs, window functions, and aggregations. Hands-on MySQL experience from the Aivariant data analyst internship.',
    proficiency: 85,
    tags: ['MySQL', 'Joins', 'CTEs', 'Window Functions', 'Aggregations', 'Filtering']
  },
  {
    id: 'excel',
    code: '02',
    title: 'Advanced Excel',
    category: 'core',
    description: 'Advanced lookup formulas, Pivot Tables, Power Query for data cleaning, and KPI modelling across large transaction and loan datasets.',
    proficiency: 90,
    tags: ['XLOOKUP', 'Pivot Tables', 'Power Query', 'Data Cleaning', 'KPI Modelling']
  },
  {
    id: 'powerbi',
    code: '03',
    title: 'Microsoft Power BI',
    category: 'bi',
    description: 'Star-schema data models, DAX calculated measures, interactive drill-through pages, KPI reporting, and automated refresh-ready reports.',
    proficiency: 85,
    tags: ['DAX Measures', 'Star Schema', 'KPI Reporting', 'Slicers', 'Drill-downs']
  },
  {
    id: 'tableau',
    code: '04',
    title: 'Tableau',
    category: 'bi',
    description: 'Interactive analytical dashboards using filters, KPI cards, and visual comparisons for regional and category-level analysis.',
    proficiency: 85,
    tags: ['Interactive Dashboards', 'Filters', 'KPI Cards', 'LOD Expressions', 'Geospatial Mapping']
  },
  {
    id: 'dataviz',
    code: '05',
    title: 'Dashboard Design & Data Visualization',
    category: 'bi',
    description: 'Designing clear, decision-ready dashboards that surface KPIs, trends, and business insights. Core competency from every dashboard project delivered.',
    proficiency: 85,
    tags: ['Dashboard Design', 'Data Visualization', 'KPI Reporting', 'Trend Analysis', 'Business Insights']
  },
  {
    id: 'etl',
    code: '06',
    title: 'ETL & Data Cleaning',
    category: 'data',
    description: 'Extract, Transform and Load workflows, data cleaning, validation, and preparing raw records for analysis and reporting.',
    proficiency: 80,
    tags: ['ETL Tools', 'Data Cleaning', 'Power Query', 'Data Validation', 'Preparation']
  },
  {
    id: 'python',
    code: '07',
    title: 'Python & R',
    category: 'data',
    description: 'Data wrangling and exploratory analysis with pandas and NumPy, plus statistical scripting in R for data exploration and reporting.',
    proficiency: 70,
    tags: ['Pandas', 'NumPy', 'R Programming', 'Data Wrangling', 'Exploratory Analysis']
  },
  {
    id: 'stats',
    code: '08',
    title: 'Statistical Data Analysis',
    category: 'data',
    description: 'Statistical techniques applied to uncover insights, including trend analysis, sampling, variance checks, and hypothesis-driven comparison.',
    proficiency: 75,
    tags: ['Statistical Analysis', 'Trend Analysis', 'Sampling', 'Variance Analysis', 'Insight Discovery']
  },
  {
    id: 'domain',
    code: '09',
    title: 'Quality Systems, LIMS & SAP HANA',
    category: 'domain',
    description: 'Three years in pharmaceutical quality control: Labware LIMS data integrity, SAP HANA, GMP/GLP/GDP/ICH compliance, and OOS/OOT investigation.',
    proficiency: 95,
    tags: ['Labware LIMS', 'SAP HANA', 'GMP / GLP / ICH', 'Regulatory Compliance', 'OOS / OOT Investigation']
  },
  {
    id: 'lab',
    code: '10',
    title: 'Analytical R&D Techniques',
    category: 'domain',
    description: 'Hands-on wet chemistry and instrumental analysis from Analytical R&D at Aragen Life Sciences, supporting a rigorous approach to data accuracy.',
    proficiency: 80,
    tags: ['HPLC', 'IR Spectroscopy', 'Karl Fischer Titration', 'Wet Analysis', 'Loss On Drying']
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-aivariant',
    yearShort: '26',
    dateRange: '10 Apr 2026 — 11 Jul 2026',
    duration: '3 mos',
    role: 'Data Analyst Intern',
    organization: 'Aivariant',
    employmentType: 'Internship',
    category: 'analytics',
    workMode: 'On-site',
    location: 'Hyderabad, Telangana',
    summary: 'Completed a Data Analyst internship focused on data visualization, SQL querying, and dashboard creation using Power BI and Tableau. Gained hands-on experience in cleaning, analyzing, and presenting data insights to support business decisions.',
    highlights: [
      'Used SQL and MySQL to query and prepare datasets for analysis and reporting.',
      'Cleaned and transformed raw data to make it ready for visualization.',
      'Built interactive dashboards in Power BI and Tableau covering key performance indicators.',
      'Presented data insights and findings to support business decision-making.'
    ],
    techStack: ['Microsoft Power BI', 'Tableau', 'Microsoft Excel', 'MySQL', 'Dashboard Building'],
    certificate: {
      title: 'Data Analyst Internship Certificate',
      credentialId: 'AIV/25-26/Q3/07/19670',
      issuedOn: '12 Jul 2026',
      image: asset('certificates/aivariant-certificate.jpg'),
      imageAlt: 'Aivariant Certificate of Internship awarded to Polishetti Lourdu Vasantha for completing the Data Analyst internship from 10 Apr 2026 to 11 Jul 2026, code AIV/25-26/Q3/07/19670'
    }
  },
  {
    id: 'exp-transition',
    yearShort: '25',
    dateRange: 'Apr 2025 — Apr 2026',
    duration: '1 yr 1 mo',
    role: 'Data Analytics & BI Upskilling',
    organization: 'Self-Directed',
    employmentType: 'Career Break',
    category: 'upskilling',
    workMode: 'Remote',
    location: 'Hyderabad, Telangana',
    summary: 'Upskilling in Data Analytics and Business Intelligence tools (Excel, Power BI, Tableau, SQL, Python, R). Building interactive dashboards, analyzing datasets, and applying statistical techniques to uncover insights. Actively preparing for a Data Analyst role through hands-on projects, certifications, and continuous learning.',
    highlights: [
      'Built hands-on portfolio projects in Power BI, Tableau, and SQL against real-world datasets.',
      'Completed Data Analyst certifications with NASSCOM FutureSkills and ExcelR.',
      'Practised data cleaning, KPI analysis, dashboard design, and exploratory analysis.',
      'Focused on Python and R for data wrangling and statistical exploration.'
    ],
    techStack: ['Excel', 'Power BI', 'Tableau', 'SQL', 'Python', 'R']
  },
  {
    id: 'exp-drreddys',
    yearShort: '22',
    dateRange: 'Feb 2022 — Apr 2025',
    duration: '3 yrs 3 mos',
    role: 'Quality Control Analyst',
    organization: "Dr. Reddy's Laboratories",
    employmentType: 'Full-time',
    category: 'pharma',
    workMode: 'On-site',
    location: 'Bachupally, Telangana',
    highlights: [
      'Handled complete analysis of raw materials (excipients) in Labware LIMS, alongside day-to-day laboratory activities.',
      'Managed laboratory non-conformances including OOS, OOT, and incidents.',
      'Maintained awareness of GLP, GDP, GMP, and ICH guidelines, and data integrity requirements.',
      'Performed sampling and testing of primary, secondary, and tertiary packing materials.',
      'Reduced testing initiation turnaround and prepared trend data.',
      'Prepared trend reports and managed non-conformance documentation (OOS, OOT, incidents), ensuring data integrity and audit readiness.'
    ],
    techStack: ['Labware LIMS', 'SAP HANA', 'GMP', 'GLP', 'Regulatory Compliance', 'Compliance Management', 'Standards Compliance']
  },
  {
    id: 'exp-aragen',
    yearShort: '21',
    dateRange: 'Aug 2021 — Nov 2021',
    duration: '4 mos',
    role: 'Project Trainee',
    organization: 'Aragen Life Sciences',
    employmentType: 'Apprenticeship',
    category: 'pharma',
    workMode: 'On-site',
    location: 'Nacharam, Hyderabad',
    highlights: [
      'Worked as a project trainee in Analytical R&D (API) for three months in 2021.',
      'Carried out wet analysis including halogen moisture analysis, loss on drying, residue on ignition, and Karl Fischer titration for water content.',
      'Performed IR spectroscopy and assisted with HPLC operation.'
    ],
    techStack: ['Analytical R&D', 'Wet Analysis', 'IR Spectroscopy', 'HPLC', 'Karl Fischer Titration']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-financial-analysis',
    title: 'Financial Analysis Dashboard – Power BI',
    subtitle: 'Sales & Profit Trends',
    projectDate: 'May 2026 – Present',
    stack: ['POWER BI', 'DAX', 'EXCEL'],
    skills: [
      'Microsoft Power BI',
      'Data Visualization',
      'Data Cleaning',
      'Dashboard Building',
      'Business Intelligence (BI)',
      'Exploratory Data Analysis',
      'DAX'
    ],
    summary: 'Interactive Power BI dashboard analyzing financial performance across products, countries, and segments. Highlights KPIs such as total sales, cost of goods sold, profit, and discounts. Designed to help stakeholders visualize trends, compare profitability, and make data-driven decisions using dynamic filters and visuals.',
    highlightMetric: '118.73M sales · 16.89M profit',
    image: asset('projects/financial-analysis-dashboard.jpg'),
    imageAlt: 'Financial Analysis Power BI dashboard showing total sales 118.73M, profit 16.89M, units sold 1.13M, COGS 101.83M and discounts 9.21M with country, year and segment filters',
    visualType: 'financial',
    problemStatement: 'Financial performance needed to be evaluated across products, countries, and segments in a single view, so stakeholders could see where sales, cost, and profit were actually being generated.',
    solution: 'Built an interactive Power BI dashboard with KPI cards for total sales, profit, cost of goods sold, units sold, and discounts, combined with country, year, and segment slicers, a profit trend line, a units-sold treemap, and discount-by-product and sales-by-segment charts.',
    keyInsights: [
      'Total sales of 118.73M against 101.83M cost of goods sold put overall profit at 16.89M.',
      'Canada led units sold at 247.43K, ahead of the United States at 232.63K and Mexico at 203.33K.',
      'Government was the largest segment at 52.5M sales, ahead of Small Business at 42.43M and Enterprise at 19.61M.',
      'Discounts totalled 9.21M, with Paseo the most heavily discounted product at 2.6M.'
    ],
    datasetSize: 'Multi-country sales dataset (2013–2014)',
    toolsUsed: ['Power BI', 'Excel'],
    daxSnippet: `Profit Margin % =
DIVIDE([Total Profit], [Total Sales], 0)

Total COGS =
SUM( 'Financials'[Cost of Goods Sold] )`,
    metrics: [
      { label: 'Total Sales', value: '118.73M' },
      { label: 'Profit', value: '16.89M' },
      { label: 'Units Sold', value: '1.13M' },
      { label: 'COGS', value: '101.83M' }
    ]
  },
  {
    id: 'proj-banking-loan',
    title: 'Banking Loan Performance Dashboard – Excel Project',
    subtitle: 'Loan disbursement, repayment, and branch-wise performance',
    projectDate: 'Apr 2026 – Jul 2026',
    stack: ['EXCEL', 'PIVOT TABLES'],
    skills: [
      'Microsoft Excel',
      'Data Visualization',
      'Financial Data Analytics',
      'Dashboard Building',
      'Business Intelligence (BI)'
    ],
    summary: 'Developed an interactive Excel dashboard to analyze banking loan performance metrics, including client activity, loan disbursement, repayment efficiency, and branch-wise performance. Used pivot tables, charts, and formulas to visualize KPIs such as default rate, delinquency rate, on-time repayment percentage, and loan distribution by branch. This project demonstrates proficiency in data cleaning, visualization, and financial analytics using Excel.',
    highlightMetric: '1,000 clients · 5% default rate',
    image: asset('projects/banking-loan-dashboard.jpg'),
    imageAlt: 'Banking loan performance Excel dashboard showing 1000 total clients, 324 active clients, 5% default rate, 10.4% delinquency rate, 71.1% on-time repayment and 99.1% principal recovery rate',
    visualType: 'loan',
    problemStatement: 'Loan performance across disbursement, repayment, default, delinquency, and recovery needed to be tracked consistently across a large number of branches and products.',
    solution: 'Cleaned and organized the loan data in Excel, then built an interactive dashboard using pivot tables, charts, and formulas to present client summary, loan volume summary, repayment summary, branch performance, product-wise loan volume, and loan distribution by branch.',
    keyInsights: [
      'Portfolio health tracked a 5% default rate against a 10.4% delinquency rate.',
      'On-time repayment stood at 71.1% with a 99.1% principal recovery rate.',
      'Total loan disbursed was 5,23,61,121 across 1,000 clients, of which 324 were active.',
      'New client acquisition grew steadily from 212 in 2015 to 260 in 2021 before dipping to 219 in 2022.'
    ],
    datasetSize: '1,000 client loan records',
    toolsUsed: ['Excel', 'Pivot Tables'],
    metrics: [
      { label: 'Total Clients', value: '1,000' },
      { label: 'Default Rate', value: '5%' },
      { label: 'Delinquency', value: '10.4%' },
      { label: 'On-Time Repay', value: '71.1%' }
    ]
  },
  {
    id: 'proj-debit-credit-part1',
    title: 'Debit & Credit Banking Data Analytics – Power BI (Part 1)',
    subtitle: 'Transaction volumes, credit-to-debit ratio, and risk flags',
    projectDate: 'Apr 2026 – Jul 2026',
    stack: ['POWER BI', 'DAX'],
    skills: [
      'Microsoft Power BI',
      'DAX',
      'Data Visualization',
      'Financial Data Analytics',
      'Business Intelligence (BI)'
    ],
    summary: 'Developed interactive Power BI dashboards to analyze debit and credit banking transactions. Visualized key metrics such as credit/debit ratios, transaction volumes, branch performance, risk flags, and growth trends using dynamic charts and DAX measures. This project demonstrates proficiency in data modeling, visualization, and financial analytics with Power BI.',
    highlightMetric: '127.60M credit · 127.29M debit',
    image: asset('projects/debit-credit-powerbi-part1.jpg'),
    imageAlt: 'Debit and credit banking Power BI dashboard showing total credit amount 127.60M, total debit amount 127.29M, credit to debit ratio 1.0025, net transaction amount 318.12K and account activity ratio 19.0086',
    visualType: 'transaction',
    problemStatement: 'Credit and debit banking activity needed to be analyzed together to evaluate transaction volumes, cash flow, branch performance, and transaction risk across a large ledger of records.',
    solution: 'Modeled the transaction data and built interactive Power BI dashboards using DAX measures to show total credit amount, total debit amount, credit-to-debit ratio, net transaction amount, account activity ratio, weekly and daily transaction trends, and a high-risk transaction flag split.',
    keyInsights: [
      'Credit of 127.60M against debit of 127.29M produced a credit-to-debit ratio of 1.0025.',
      'Net transaction amount came to 318.12K, indicating broadly balanced inflow and outflow.',
      'Weekly transaction volume held steady near 2.0K–2.2K before dropping sharply to 0.3K in the final week.',
      'High-risk transactions accounted for 5.3K against 94.7K normal transactions.'
    ],
    datasetSize: '100,000 transaction records',
    toolsUsed: ['Power BI', 'DAX'],
    daxSnippet: `Credit to Debit Ratio =
DIVIDE([Total Credit Amount], [Total Debit Amount], 0)

High Risk Transaction Flag =
IF( [Risk Score] > 0.7, "High Risk", "Normal" )`,
    metrics: [
      { label: 'Total Credit', value: '127.60M' },
      { label: 'Total Debit', value: '127.29M' },
      { label: 'Credit:Debit', value: '1.0025' },
      { label: 'Net Amount', value: '318.12K' }
    ]
  },
  {
    id: 'proj-debit-credit-part2',
    title: 'Debit & Credit Banking Data Analytics – Power BI (Part 2)',
    subtitle: 'Branch, bank, and payment-method breakdown with risk flags',
    projectDate: 'Apr 2026 – Jul 2026',
    stack: ['POWER BI', 'DAX'],
    skills: [
      'Microsoft Power BI',
      'DAX',
      'Financial Data Analytics',
      'Data Visualization',
      'Business Intelligence (BI)'
    ],
    summary: 'Developed interactive Power BI dashboards to analyze debit and credit banking transactions. Visualized key metrics such as credit/debit ratios, transaction volumes, branch performance, risk flags, and growth trends using dynamic charts and DAX measures. This project highlights my skills in data modeling, visualization, and financial analytics with Power BI.',
    highlightMetric: '42.91M top branch · 3 payment methods',
    image: asset('projects/debit-credit-powerbi-part2.jpg'),
    imageAlt: 'Debit and credit banking Power BI dashboard part 2 showing transaction method distribution, transaction volume by bank, total amount by branch, suspicious transaction frequency and branch month-on-month growth',
    visualType: 'transaction',
    problemStatement: 'With the credit-to-debit totals established in Part 1, the analysis needed to break activity down by payment method, bank, and branch, and to surface suspicious transaction patterns for review.',
    solution: 'Built a second Power BI dashboard covering transaction method distribution, transaction volume across six banks, total transaction amount by branch, a high-risk transaction frequency flag by month, and a branch-level month-on-month growth trend, driven by DAX measures.',
    keyInsights: [
      'Payment methods split almost evenly at Debit Card 33.35%, Bank Transfer 33.34%, and Credit Card 33.31% of 100,000 records.',
      'City Center Branch led total transaction amount at 42.91M, narrowly ahead of Main Branch at 42.84M, with North Branch lowest at 41.68M.',
      'Bank volumes were tightly clustered, from Kotak Mahindra Bank at 42.83M down to HDFC Bank at 41.87M.',
      'High-risk flagged transactions held between 0.43K and 0.52K per month against 8.15K–8.78K normal transactions.'
    ],
    datasetSize: '100,000 transaction records',
    toolsUsed: ['Power BI', 'DAX'],
    daxSnippet: `MoM Growth % =
VAR CurrentMonth = [Total Transaction Amount]
VAR PreviousMonth =
    CALCULATE(
        [Total Transaction Amount],
        DATEADD( 'Date'[MonthStart], -1, MONTH )
    )
RETURN
DIVIDE( CurrentMonth - PreviousMonth, PreviousMonth, 0 )`,
    metrics: [
      { label: 'Top Branch', value: '42.91M' },
      { label: 'Branches', value: '6' },
      { label: 'Banks', value: '6' },
      { label: 'Records', value: '100,000' }
    ]
  },
  {
    id: 'proj-superstore-sales',
    title: 'Superstore Sales Dashboard – Tableau',
    subtitle: 'Sales, profit margin, and return rate by region and category',
    projectDate: 'May 2026 – May 2026',
    stack: ['TABLEAU', 'EXCEL'],
    skills: [
      'Tableau',
      'Data Visualization',
      'Business Intelligence (BI)',
      'Dashboard Building'
    ],
    summary: 'Interactive Tableau dashboard analyzing Superstore sales across categories, states, and segments. Highlights KPIs like total sales, profit margin, and return rate. Built to explore regional performance and uncover actionable business insights using dynamic filters and visual storytelling.',
    highlightMetric: '₹2.30M sales · 12.47% margin',
    liveUrl: 'https://public.tableau.com/app/profile/lourdu.vasantha.polishetti',
    image: asset('projects/superstore-tableau-dashboard.jpg'),
    imageAlt: 'Superstore Tableau analytics report showing sales of 2.30M, profit margin 12.47%, return rate 5.91%, category and sub-category bars, a US sales map, segment donut and monthly sales trend',
    visualType: 'superstore',
    problemStatement: 'Sales and profit performance needed to be compared across categories, states, and segments to identify where the business was performing strongly and where returns were eroding margin.',
    solution: 'Built an interactive Tableau dashboard with a metric selector for Sales, Profit, and Orders, a region filter, a year-of-order-date filter, and coordinated visuals covering category and sub-category bars, a filled US map, a segment donut, top products, and a monthly sales trend with forecast.',
    keyInsights: [
      'Total sales of ₹2.30M carried a 12.47% profit margin and a 5.91% return rate.',
      'Technology led sales by category at 36.40%, ahead of Furniture at 32.30% and Office Supplies at 31.30%.',
      'Consumer was the dominant segment at 50.56% of sales, with Corporate at 30.74% and Home Office at 18.70%.',
      'The top-selling product was the Canon imageCLASS 2200 Advanced Copier at 61,600 units.'
    ],
    datasetSize: 'Superstore sales dataset (2014–2017)',
    toolsUsed: ['Tableau', 'Excel'],
    metrics: [
      { label: 'Sales', value: '₹2.30M' },
      { label: 'Profit Margin', value: '12.47%' },
      { label: 'Return Rate', value: '5.91%' },
      { label: 'Top Category', value: 'Technology' }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-msc',
    degree: "Master's degree, Organic Chemistry",
    institution: 'Osmania University',
    cgpa: 'CGPA: 7.91',
    period: 'Sep 2019 — Oct 2021',
    activities: [
      "Best academic award of the year 2021.",
      "Best NSS volunteer of the year 2021."
    ]
  },
  {
    id: 'edu-bsc',
    degree: 'B.Sc. MPC — Mathematics, Physics, Chemistry',
    institution: 'St. Pious X Degree & PG College for Women',
    cgpa: 'CGPA: 9.89',
    period: 'Jun 2016 — Jun 2019',
    activities: [
      "Awarded 'The Best Outgoing Student of the Academic Year 2016-19' during undergraduate studies.",
      "Student Co-ordinator for 'SPUGER' (St. Pious Under Graduate Environmental Research)."
    ]
  },
  {
    id: 'edu-inter',
    degree: 'Intermediate MPC — Mathematics, Physics, Chemistry',
    institution: 'Little Flower Girls Junior College',
    cgpa: '984 / 1000',
    period: 'Jun 2014 — Jun 2016',
    activities: [
      'Awarded Best Student of the Year and Topper in MPC for the academic year 2016.'
    ]
  },
  {
    id: 'edu-school',
    degree: 'SSC (Secondary School Certificate)',
    institution: 'Vidya Jyothi English Medium High School',
    cgpa: 'CGPA: 9.7',
    period: 'Jun 2013 — Jun 2014',
    activities: [
      'Awarded Best Student of the Year and Topper in SSC for the academic year 2014.'
    ]
  }
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: 'cert-nasscom',
    title: 'NASSCOM Data Analyst Certificate – Silver Badge',
    issuer: 'Sector Skill Council NASSCOM',
    issueDate: '05 Jul 2026',
    credentialId: 'FSP/2026/7/10326662',
    description: 'Awarded by the IT-ITeS Sector Skills Council NASSCOM for clearing the assessment in the Certificate Program in Data Analyst. Aligned to competency standards developed with industry and approved by the Government of India.',
    skills: ['Data Analysis', 'Microsoft Power BI', 'Tableau', 'MySQL', 'Microsoft Excel', 'Data Visualization'],
    image: asset('certificates/nasccom-silver-badge.jpg'),
    imageAlt: 'NASSCOM Silver Certificate awarded to Polishetti Lourdu Vasantha for clearing the Certificate Program in Data Analyst, credential FSP/2026/7/10326662, dated 05/07/2026'
  },
  {
    id: 'cert-excelr',
    title: 'ExcelR Certificate of Excellence – Data Analyst Programme',
    issuer: 'ExcelR',
    issueDate: 'Nov 2025',
    expiry: 'Expired Jun 2026',
    credentialId: '35284/EXCELR/05062026',
    description: 'Successfully completed the Data Analyst programme at ExcelR with distinction, demonstrating outstanding performance and fulfilling all mandated requirements. Completed 05 June 2026.',
    skills: ['Data Analytics', 'Microsoft Power BI', 'Tableau', 'MySQL', 'Microsoft Excel', 'Data Visualization', 'ETL Tools', 'Python', 'R', 'Statistical Data Analysis', 'Dashboard Building'],
    image: asset('certificates/excelr-certificate-of-excellence.jpg'),
    imageAlt: 'ExcelR Certificate of Excellence awarded to Polishetti Lourdu Vasantha for completing the Data Analyst programme with distinction, certificate ID 35284/EXCELR/05062026'
  },
  {
    id: 'cert-aivariant',
    title: 'Data Analyst Internship Certificate',
    issuer: 'Aivariant',
    issueDate: 'Apr 2026',
    expiry: 'Expired Jul 2026',
    credentialId: 'AIV/25-26/Q3/07/19670',
    description: 'Successfully completed a Data Analyst internship with Aivariant, gaining hands-on experience in data visualization, SQL querying, and dashboard creation using Power BI and Tableau.',
    skills: ['Microsoft Power BI', 'Tableau', 'MySQL', 'Microsoft Excel', 'Dashboard Building', 'ETL'],
    image: asset('certificates/aivariant-certificate.jpg'),
    imageAlt: 'Aivariant Certificate of Internship awarded to Polishetti Lourdu Vasantha for completing the Data Analyst internship from 10 Apr 2026 to 11 Jul 2026, code AIV/25-26/Q3/07/19670'
  }
];

/**
 * Data powering the recruiter quick-fit modal.
 * Keep this lean and in sync with what's actually rendered — fields that no
 * component reads become a second source of truth and silently drift.
 */
export const RECRUITER_BRIEF = {
  targetRoles: ['Data Analyst', 'Power BI Developer', 'Business Intelligence Analyst', 'SQL Developer'],
  techHighlights: [
    { tech: 'SQL', desc: 'Complex Joins, Window Functions, CTEs, Aggregations, Performance Tuning' },
    { tech: 'Power BI', desc: 'Star Schema Modeling, Advanced DAX, Interactive Drilldowns, Row-Level Security' },
    { tech: 'Advanced Excel', desc: 'Power Query ETL, Dynamic Arrays, XLOOKUP, Pivot Scenario Modeling' },
    { tech: 'Tableau', desc: 'Interactive Dashboards, Calculated Fields, Parameterized Visualizations' },
    { tech: 'Data Governance', desc: 'ICH, GLP, GDP and GMP Compliance, Labware LIMS Records, Root Cause Analysis' }
  ]
};
