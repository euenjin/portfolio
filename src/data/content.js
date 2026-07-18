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
    'NYU data science student applying machine learning, healthcare analytics, and automation to clinical research and real-world business problems.',
  highlights: [
    { value: '349K+', label: 'Medicare prescribing records' },
    { value: '180K+', label: 'gastric cancer patients' },
    { value: '83%', label: 'reduction in processing time' },
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
    slug: 'knhanes-mental-health-risk-modeling',
    title: 'Mental Health Risk Modeling with KNHANES',
    subtitle: 'Depressive Symptom Prediction Using National Health Survey Data',
    period: '2026 - Current',
    type: 'Independent Health Data Science Project',
    summary:
      'A population-based health analytics study using five waves of the Korea National Health and Nutrition Examination Survey to examine whether demographic, behavioral, sleep, physical activity, and cardiometabolic factors can predict clinically relevant depressive symptoms.',
    metrics: [
      { value: '36K+ Records', label: 'Survey participants across five KNHANES waves' },
      { value: '5 Survey Waves', label: '2016, 2018, 2020, 2022, and 2024' },
      { value: 'PHQ-9 Outcome', label: 'Depressive symptom risk classification' },
    ],
    workflow: [
      {
        title: 'Multi-Year Data Integration',
        description: 'Combined KNHANES survey waves from 2016, 2018, 2020, 2022, and 2024 while accounting for differences in variable names and survey structures across years.',
      },
      {
        title: 'Outcome Definition',
        description: 'Used the Patient Health Questionnaire-9 as the primary outcome and defined clinically relevant depressive symptoms using a consistent PHQ-9 classification threshold.',
      },
      {
        title: 'Variable Harmonization',
        description: 'Standardized demographic, socioeconomic, sleep, physical activity, blood pressure, fasting glucose, pulse, and health-behavior variables across survey waves.',
      },
      {
        title: 'Feature Engineering',
        description: 'Converted year-specific sleep and physical-activity responses into comparable measures, including sleep duration and weekly activity minutes.',
      },
      {
        title: 'Data Quality Control',
        description: 'Handled nonresponse codes, inapplicable values, missing observations, inconsistent data types, and implausible physiological or behavioral values.',
      },
      {
        title: 'Risk Modeling',
        description: 'Designed classification models to evaluate whether demographic, behavioral, and clinical characteristics can predict elevated depressive symptoms.',
      },
      {
        title: 'Model Evaluation',
        description: 'Planned cross-validation and class-imbalance-aware evaluation using ROC-AUC, recall, precision, F1-score, and confusion-matrix results.',
      },
      {
        title: 'Model Interpretation',
        description: 'Planned SHAP-based interpretation to identify factors contributing to depressive symptom predictions while retaining adjustment variables in the model.',
      },
    ],
    methodGroups: [
      {
        title: 'Data Processing',
        items: ['Python', 'Pandas', 'SPSS', 'Multi-Year Data Integration', 'Feature Engineering', 'Data Validation'],
      },
      {
        title: 'Modeling & Interpretation',
        items: ['Logistic Regression', 'Random Forest', 'XGBoost', 'Cross-Validation', 'Class-Imbalance Evaluation', 'SHAP'],
      },
    ],
    analysis: {
      status: 'In Progress',
      description: 'Model performance, feature-importance results, and subgroup analyses will be added after completion of the final modeling workflow.',
    },
    scopeNote:
      'KNHANES is a repeated cross-sectional national health survey. Analyses are designed for population-level association and prediction rather than individual clinical diagnosis.',
    tools: ['Python', 'Pandas', 'SPSS', 'Logistic Regression', 'Random Forest', 'XGBoost', 'SHAP'],
    results: [],
    github: '',
    image: '/knhanes-mental-health-analytics.png',
    imageAlt: 'Population health analytics illustration connecting sleep, physical activity, cardiometabolic health, and predictive modeling signals',
    impact:
      'Supports responsible, interpretable population-level modeling of depressive symptom risk across harmonized national survey waves.',
  },
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
]

export const experience = [
  {
    slug: 'ncc-gastric-cancer-screening',
    role: 'Cancer Screening Division Research Intern',
    subtitle: 'Gastric Cancer Stage and Survival Modeling',
    organization: 'National Cancer Center Korea',
    location: 'Goyang, KR',
    period: 'June 2026 - Current',
    focus:
      'Retrospective gastric cancer cohort study using screening history, insurance status, socioeconomic factors, and comorbidity categories to evaluate predictors of advanced-stage diagnosis.',
    detailFocus:
      'A retrospective gastric cancer cohort study comparing machine learning performance and SHAP-based interpretability for advanced-stage diagnosis, alongside post-diagnosis survival analysis.',
    logoText: 'NCC',
    visual: 'cancer-screening',
    thumbnail: '/national-cancer-center-stages.png',
    thumbnailFit: 'contain',
    thumbnailPadding: true,
    metrics: [
      { value: '180K+ Patients', label: 'Population-based gastric cancer cohort' },
      { value: '3 ML Models', label: 'Logistic regression, random forest, and XGBoost' },
      { value: '2 Outcomes', label: 'Advanced-stage diagnosis and five-year mortality' },
    ],
    workflow: [
      {
        title: 'Cohort Construction',
        description: 'Identified patients newly diagnosed with gastric cancer between 2012 and 2017 and defined the earliest recorded diagnosis as the index date.',
      },
      {
        title: 'Cohort Exclusion',
        description: 'Excluded patients diagnosed with another primary cancer within one year before the index gastric cancer diagnosis.',
      },
      {
        title: 'Feature Engineering',
        description: 'Derived five-year pre-diagnosis screening history, socioeconomic characteristics, insurance status, treatment indicators, and claims-based comorbidity categories.',
      },
      {
        title: 'Stage Prediction',
        description: 'Developed logistic regression, random forest, and XGBoost models to predict advanced-stage gastric cancer at diagnosis.',
      },
      {
        title: 'Performance and Interpretation',
        description: 'Designed a cross-validation framework to compare classification performance and apply SHAP to interpret predictor contributions.',
      },
      {
        title: 'Survival Analysis',
        description: 'Designed post-diagnosis survival analyses using stage, comorbidities, treatment, and patient characteristics.',
      },
    ],
    methodGroups: [
      {
        title: 'Data & Modeling',
        items: ['SAS', 'Python', 'Logistic Regression', 'Random Forest', 'XGBoost'],
      },
      {
        title: 'Interpretation & Survival',
        items: ['Cross-Validation', 'SHAP', 'Kaplan–Meier', 'Cox Proportional Hazards'],
      },
    ],
    analysis: {
      status: 'In Progress',
      description: 'Model performance, SHAP interpretation, and survival-analysis findings will be added after completion of the final analysis.',
    },
    tags: ['Cancer Screening', 'Python', 'XGBoost', 'SHAP', 'Cox PH', 'Kaplan-Meier'],
  },
  {
    slug: 'furniture-smart-automation',
    role: 'Data Automation Intern',
    subtitle: 'Order Processing and Workflow Automation',
    organization: 'Furniture Smart',
    location: 'Seoul, KR',
    period: 'April 2026 - June 2026',
    focus:
      'Python and Streamlit automation for SmartStore order exports, delivery-ready Excel generation, public-data lookup, and revenue dashboarding.',
    detailFocus:
      'An end-to-end workflow automation project that transformed raw Naver SmartStore order exports into standardized vendor and delivery files, integrated public-data lookups, and delivered the workflow through an internal Streamlit application.',
    logoText: 'FS',
    visual: 'automation',
    thumbnail: '/furniture-smart-file-converter-home.png',
    thumbnailFit: 'contain',
    thumbnailZoom: true,
    metrics: [
      { value: '83% Faster', label: 'Reduction in recurring order-processing time' },
      { value: 'Rule-Based ETL', label: 'Bundled orders, options, quantities, and validation' },
      { value: 'Internal App', label: 'File conversion, API lookup, and operational reporting' },
    ],
    expandedDetail: true,
    workflowTitle: 'Automation Workflow',
    workflow: [
      {
        title: 'Process Mapping',
        description: 'Mapped the existing manual workflow for converting Naver SmartStore order exports into vendor-management and delivery-ready files.',
      },
      {
        title: 'Transformation Rules',
        description: 'Defined field-mapping and standardization rules for order identifiers, product names, option values, recipients, addresses, quantities, and required vendor fields.',
      },
      {
        title: 'Exception Handling',
        description: 'Implemented logic for bundled orders, add-on options, multi-quantity purchases, duplicate records, missing values, and validation checks.',
      },
      {
        title: 'File Automation',
        description: 'Built a Python and Pandas pipeline that converted raw order exports into standardized Excel files for vendor processing and delivery operations.',
      },
      {
        title: 'Internal Application',
        description: 'Developed a Streamlit interface that allowed nontechnical employees to upload order files and generate the required outputs through a simple application.',
      },
      {
        title: 'Data Enrichment',
        description: 'Integrated a Korean public-data API to automate elevator availability lookup and support delivery preparation.',
      },
      {
        title: 'Operational Reporting',
        description: 'Added Streamlit-based reporting views for settlement revenue, order channels, and top-selling products.',
      },
      {
        title: 'Business Impact',
        description: 'Reduced recurring order-processing time by 83% while improving consistency and reducing manual data entry.',
      },
    ],
    methodGroups: [
      {
        title: 'Automation & Data Processing',
        items: ['Python', 'Pandas', 'Excel', 'Rule-Based ETL', 'Data Validation'],
      },
      {
        title: 'Application & Integration',
        items: ['Streamlit', 'API Integration', 'Workflow Automation', 'Operational Reporting'],
      },
    ],
    internalApplications: [
      {
        image: '/furniture-smart-converter-result.png',
        alt: 'Furniture Smart SmartStore order converter showing an uploaded workbook and vendor-ready output preview',
        caption: 'SmartStore order converter that validates uploaded workbooks, separates vendor and delivery records, previews the transformed output, and exports a standardized Excel file.',
      },
      {
        image: '/furniture-smart-file-converter.png',
        alt: 'Furniture Smart sales dashboard showing settlement revenue, order channels, products, order status, and product categories',
        caption: 'Operational dashboard for monitoring estimated settlement revenue, acquisition channels, top-selling products, order status, and product-category performance.',
      },
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
