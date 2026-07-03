export const profile = {
  name: 'Eunjin (Eugene) Ahn',
  role: 'Data Science Portfolio',
  location: 'Fort Lee, NJ',
  email: 'eunjin7714@gmail.com',
  phone: '+1 (206) 887-4095',
  github: 'https://github.com/euenjin',
  linkedin: 'https://www.linkedin.com/in/eunjin-eugene-ahn/',
  resume: '/Resume_Eunjin_Ahn.pdf',
  headline:
    'NYU data science student building health analytics, clinical ML, survival analysis, and automation tools across cancer screening, Medicare pharmacy data, and longitudinal clinical records.',
  highlights: [
    { value: '349K+', label: 'Medicare pharmacy records extracted' },
    { value: '200K+', label: 'longitudinal clinical records processed' },
    { value: '83%', label: 'delivery file processing time reduced' },
    { value: '5 years', label: 'of Apple Health trends supported' },
  ],
}

export const keywords = [
  'Cancer Screening',
  'Medicare Part D',
  'Clinical ML',
  'Health ETL',
  'Survival Analysis',
  'Cox Proportional Hazards',
  'Kaplan-Meier Analysis',
  'Streamlit Automation',
  'Power BI Analytics',
  'Interpretability',
  'Real-World Health Data',
]

export const projects = [
  {
    slug: 'glp1-medicare-pharmacy-analytics',
    title: 'GLP-1 Medicare Pharmacy Analytics',
    period: 'May 2026 - June 2026',
    type: 'Health Data Engineering',
    summary:
      'A Python ETL and Power BI analytics project using CMS Medicare Part D Prescribers data to study GLP-1 and incretin therapy prescription patterns, utilization, and cost signals.',
    metrics: [
      { value: '349K+', label: 'GLP-1 and incretin records extracted' },
      { value: 'CMS API', label: 'Medicare Part D Prescribers source' },
      { value: '3 cost metrics', label: 'claim, 30-day fill, beneficiary views' },
    ],
    results: [
      'Built a Python ETL pipeline using the CMS Medicare Part D Prescribers API with checkpointing for reliable large-record extraction.',
      'Standardized brand, generic, and drug-class mappings for GLP-1 and incretin therapy records.',
      'Engineered utilization and cost metrics including cost per claim, cost per 30-day fill, and claims per beneficiary.',
      'Prepared a structured analytics layer for Power BI exploration of drug class, cost, and prescribing patterns.',
    ],
    tools: ['Python', 'CMS Medicare API', 'Pandas', 'ETL', 'Power BI', 'Healthcare Analytics'],
    github: '',
    preview: 'glp1-medicare',
    impact:
      'Makes large-scale Medicare pharmacy data easier to analyze for utilization, cost, and therapy-class trends.',
  },
  {
    slug: 'apple-health-dashboard',
    title: 'Apple Health Personal Dashboard',
    period: 'April 2026',
    type: 'Health Analytics App',
    summary:
      'A privacy-centered Streamlit dashboard that parses local Apple Health ZIP exports and visualizes activity, workout, and heart-rate trends without cloud storage.',
    metrics: [
      { value: '5 years', label: 'of local health history supported' },
      { value: '3 import modes', label: '30-day, 90-day, full history' },
      { value: 'Local only', label: 'privacy-centered processing' },
    ],
    results: [
      'Built a manual Apple Health sync flow that uploads a ZIP export and parses activity, workout, and heart-rate records locally.',
      'Added 30-day, 90-day, and full-history import options to support fast refreshes or deeper personal health review.',
      'Normalized exported records into dashboard-ready datasets for daily trends, workout history, and recent activity snapshots.',
      'Kept the workflow local so personal health analytics can be refreshed without cloud storage.',
    ],
    tools: ['Python', 'Streamlit', 'Apple Health Export', 'Data Parsing', 'Local Analytics'],
    github: 'https://github.com/euenjin/AppleHealth_Streamlit_Dashboard',
    preview: 'apple-health',
    impact:
      'Makes personal health data review practical without cloud sync, keeping the workflow local, private, and easy to refresh manually.',
  },
]

export const experience = [
  {
    slug: 'ncc-gastric-cancer-screening',
    role: 'Cancer Screening Division Research Intern',
    organization: 'National Cancer Center Korea',
    location: 'Goyang, KR',
    period: 'June 2026 - Current',
    focus:
      'Retrospective gastric cancer cohort study using screening history, insurance status, socioeconomic factors, and comorbidity categories to evaluate predictors of advanced-stage diagnosis.',
    logoText: 'NCC',
    visual: 'cancer-screening',
    metrics: [
      { value: '3 ML models', label: 'logistic regression, random forest, XGBoost' },
      { value: 'SHAP', label: 'planned interpretability analysis' },
      { value: 'Survival', label: 'post-diagnosis mortality modeling' },
    ],
    bullets: [
      'Designed a retrospective gastric cancer cohort study to evaluate predictors of advanced-stage diagnosis.',
      'Built a Python-based simulation pipeline to benchmark logistic regression, random forest, and XGBoost models on runtime, memory usage, and feasibility.',
      'Planned SHAP analysis to explain model outputs and support interpretable screening-risk evidence.',
      'Planned post-diagnosis survival analysis with Kaplan-Meier curves and Cox proportional hazards models adjusted for demographic and comorbidity covariates.',
    ],
    tags: ['Cancer Screening', 'Python', 'XGBoost', 'SHAP', 'Cox PH', 'Kaplan-Meier'],
  },
  {
    slug: 'furniture-smart-automation',
    role: 'Data Automation Intern',
    organization: 'Furniture Smart',
    location: 'Seoul, KR',
    period: 'April 2026 - June 2026',
    focus:
      'Python and Streamlit automation for SmartStore order exports, delivery-ready Excel generation, public-data lookup, and revenue dashboarding.',
    logoText: 'FS',
    visual: 'automation',
    metrics: [
      { value: '83%', label: 'processing time reduction' },
      { value: 'ETL', label: 'bundled order and option handling' },
      { value: 'API', label: 'public-data elevator lookup' },
    ],
    bullets: [
      'Built a Python and Streamlit tool to convert Naver SmartStore exports into standardized delivery-ready Excel files, reducing processing time by 83%.',
      'Designed rule-based ETL workflows for bundled orders, add-on options, quantity expansion, duplicate handling, and validation checks.',
      'Automated elevator lookup with a public-data API to improve delivery preparation workflows.',
      'Created a Streamlit dashboard to track settlement revenue, order channels, and top-selling products.',
    ],
    tags: ['Python', 'Streamlit', 'ETL', 'Excel Automation', 'Public Data API'],
  },
  {
    slug: 'snu-alzheimer-risk-modeling',
    role: 'Undergraduate Data Science Research Intern',
    organization: 'Seoul National University',
    location: 'Seoul, KR',
    period: 'June 2025 - August 2025',
    focus: 'Alzheimer risk modeling from longitudinal clinical records',
    logo: 'snu',
    visual: 'alzheimer',
    metrics: [
      { value: '200K+', label: 'longitudinal clinical records' },
      { value: 'MICE', label: 'clinical missing-data imputation' },
      { value: 'Cox PH', label: 'survival modeling' },
    ],
    bullets: [
      'Processed 200K+ longitudinal clinical records using MICE imputation and patient-level restructuring to prepare reliable datasets for Alzheimer\'s risk modeling.',
      'Developed predictive and survival analysis models including logistic regression, DNN, and Cox regression.',
      'Identified risk factors and compared disease progression patterns across age groups.',
      'Used survival analysis methods to connect longitudinal clinical history with disease progression evidence.',
    ],
    tags: ['MICE', 'Logistic Regression', 'DNN', 'Cox PH', 'Longitudinal Data'],
  },
]

export const leadership = []

export const techStack = {
  'Programming + Data': ['Python', 'SQL', 'Pandas', 'NumPy', 'Seaborn'],
  'Machine Learning': ['Scikit-learn', 'PyTorch', 'Logistic Regression', 'MLP', 'DNN', 'XGBoost'],
  'Health Modeling': ['Classification', 'Survival Analysis', 'Cox Proportional Hazards', 'Kaplan-Meier', 'SHAP'],
  'Analytics + Delivery': ['Streamlit', 'Tableau', 'Power BI', 'GitHub', 'Excel Automation'],
  Languages: ['English', 'Korean'],
}

export const education = {
  school: 'New York University',
  degree: 'Bachelor\'s Degree in Data Science',
  expected: 'Expected May 2028',
  gpa: '3.722',
  awards: ['Presidential Honors Scholar (24F, 25S, 25F)', 'Dean\'s List (24F, 25S, 25F)'],
  coursework: ['Data Structures', 'Data Management', 'Probability and Statistics', 'Behavioral Statistics'],
}
