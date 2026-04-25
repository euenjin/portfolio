export const profile = {
  name: 'Eunjin (Eugene) Ahn',
  role: 'Health Data Science Portfolio',
  location: 'Fort Lee, NJ',
  email: 'eunjin7714@gmail.com',
  phone: '+1 (206) 887-4095',
  github: 'https://github.com/euenjin',
  linkedin: 'https://www.linkedin.com/in/eunjin-eugene-ahn/',
  resume: '/Resume_Eunjin_Ahn.pdf',
  headline:
    'NYU data science student building interpretable clinical ML systems for longitudinal health data, Alzheimer risk, diabetes screening, and recall-first risk prediction.',
  highlights: [
    { value: '200K+', label: 'clinical records processed' },
    { value: '0.89', label: 'DNN recall on Alzheimer risk baseline' },
    { value: '0.82', label: 'MLP recall for diabetes screening' },
    { value: '1,417 days', label: 'of Apple Health data visualized' },
  ],
}

export const keywords = [
  'Clinical Prediction',
  'Longitudinal Data',
  'Alzheimer Risk',
  'Diabetes Screening',
  'Survival Analysis',
  'Recall-First Modeling',
  'Health Equity Signals',
  'Automated Pipelines',
  'Interpretability',
  'Real-World Data',
]

export const projects = [
  {
    slug: 'apple-health-dashboard',
    title: 'Apple Health Personal Dashboard',
    period: 'April 2026',
    type: 'Health Analytics App',
    summary:
      'A privacy-centered Streamlit dashboard that turns an Apple Health ZIP export into local activity, workout, and heart-rate trend views.',
    metrics: [
      { value: '1,417 tracked days', label: 'range for analysis' },
      { value: '4 daily variables visualized', label: 'steps, distance, exercise, HR' },
      { value: '24 workouts imported', label: 'workout history' },
    ],
    results: [
      'Built a manual Apple Health sync flow that uploads a ZIP export and parses it locally.',
      'Normalized exported records into local datasets for daily trends, workouts, and heart-rate analysis.',
      'Added import options for 30 days, 90 days, or all available history with progress feedback during long ZIP parsing tasks.',
      'Created dashboard pages for recent activity snapshots, daily trends, workout history, and fresh data sync.',
    ],
    tools: ['Python', 'Streamlit', 'Apple Health Export', 'Data Parsing', 'Local Analytics'],
    github: 'https://github.com/euenjin/AppleHealth_Streamlit_Dashboard',
    preview: 'apple-health',
    impact:
      'Makes personal health data review practical without cloud sync, keeping the workflow local, private, and easy to refresh manually.',
  },
  {
    slug: 'public-health-news-pipeline',
    title: 'Automated Public Health News Pipeline',
    period: 'February 2026 - April 2026',
    type: 'Data Engineering',
    summary:
      'A scheduled Python pipeline that extracts, filters, ranks, archives, and emails public health, medical, and clinical research news every weekday.',
    metrics: [
      { value: '10 daily articles', label: 'weekday digest size' },
      { value: '1-2 day recency', label: 'freshness filter' },
      { value: '~3 min daily runtime', label: 'scheduled execution' },
    ],
    results: [
      'Integrated NewsAPI extraction with health topic relevance, recency, and source relevance ranking.',
      'Scheduled weekday execution through Windows Task Scheduler to reduce manual monitoring work.',
      'Added logging, timestamped file saving, and email delivery so public health digests can be audited and reused.',
      'Includes a clear note that the digest is for public health monitoring and research awareness, not medical decision-making.',
    ],
    tools: ['Python', 'NewsAPI', 'Task Scheduler', 'Automation', 'Logging', 'Public Health', 'Clinical Research'],
    github: 'https://github.com/euenjin/News_Pipeline',
    preview: 'news-pipeline',
    impact:
      'Supports lightweight monitoring of public health updates across topics like Alzheimer\'s, diabetes, CDC updates, clinical AI, digital health, epidemiology, and health policy.',
  },
]

export const experience = [
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
      { value: '0.89', label: 'DNN recall' },
      { value: '0.76', label: 'Cox model C-index' },
    ],
    bullets: [
      'Processed 200K+ longitudinal clinical records using MICE imputation for reliable predictive modeling.',
      'Built a deep neural network baseline classifier with 0.89 recall and 0.72 precision using class reweighting.',
      'Improved recall by 8 percentage points with a 10-visit LSTM sequence model.',
      'Used Cox proportional hazards and Kaplan-Meier analysis to compare age-group survival differences, reaching a 0.76 C-index.',
    ],
    tags: ['MICE', 'DNN', 'LSTM', 'Cox PH', 'Kaplan-Meier'],
  },
  {
    slug: 'gachon-diabetes-risk-modeling',
    role: 'Data Science Research Intern',
    organization: 'Gachon University',
    location: 'Seoul, KR',
    period: 'June 2023 - September 2023',
    focus: 'Diabetes risk modeling with CDC BRFSS 2015 survey data',
    logo: 'gachon',
    visual: 'diabetes',
    metrics: [
      { value: '0.77', label: 'logistic regression recall' },
      { value: '0.82', label: 'MLP recall' },
      { value: 'BRFSS', label: 'public health survey data' },
    ],
    bullets: [
      'Modeled diabetes risk using demographic, health, and lifestyle features from BRFSS survey data.',
      'Built an interpretable logistic regression baseline with 0.77 recall and 0.74 precision.',
      'Improved sensitivity to 0.82 recall with an MLP classifier for high-risk identification.',
      'Identified high blood pressure, self-reported health status, income, and education as important risk signals.',
    ],
    tags: ['BRFSS', 'Logistic Regression', 'MLP', 'Public Health', 'Risk Factors'],
  },
]

export const leadership = [
  {
    role: 'Member of Data Team',
    organization: 'NYU LIKELION US',
    period: 'August 2025 - Current',
    detail:
      'Participates in weekly SQL discussions and ideation work for an event platform using AI scheduling and recommendation logic.',
  },
  {
    role: 'Executive Member',
    organization: 'KISO NYU',
    period: 'January 2024 - Current',
    detail:
      'Organizes cultural exchange events and led a 50+ attendee networking event connecting students with industry professionals.',
  },
]

export const techStack = {
  'Programming + Data': ['Python', 'SQL', 'Pandas', 'NumPy', 'Seaborn'],
  'Machine Learning': ['Scikit-learn', 'PyTorch', 'Logistic Regression', 'MLP', 'DNN'],
  'Health Modeling': ['LSTM Time Series', 'MICE Imputation', 'Cox Models', 'Kaplan-Meier', 'Classification'],
  'Analytics + Delivery': ['Streamlit', 'Tableau', 'Power BI', 'GitHub', 'Automated Logging'],
}

export const education = {
  school: 'New York University',
  degree: 'Bachelor\'s Degree in Data Science',
  expected: 'Expected May 2028',
  gpa: '3.722',
  awards: ['Presidential Honors Scholar', 'Dean\'s List'],
  coursework: ['Data Structures', 'Data Management and Analysis', 'Linear Algebra', 'Probability and Statistics'],
}
