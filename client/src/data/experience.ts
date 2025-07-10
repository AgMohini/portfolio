export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "instructor-gcu",
    title: "Instructor – Statistics and Mathematics",
    company: "Grand Canyon University",
    location: "AZ",
    startDate: "2023",
    endDate: "Present",
    current: true,
    description: [
      "Teaching Statistical and Mathematical modeling to graduate and undergraduate students",
      "Developing real-world case studies for statistical analysis and mathematical optimization",
      "Guiding student projects focused on practical applications of statistical methods",
      "Delivering comprehensive sessions on statistical inference and mathematical modeling"
    ],
    highlights: [
      "Improved student engagement through hands-on statistical projects",
      "Developed industry-relevant curriculum for statistics and mathematics programs",
      "Mentored 50+ students in practical statistical applications"
    ]
  },
  {
    id: "assistant-prof-amity",
    title: "Assistant Professor – Data Science & Statistics",
    company: "Amity University",
    location: "India",
    startDate: "2019",
    endDate: "2022",
    current: false,
    description: [
      "Led ML-based research initiatives for logistics and multi-criteria optimization",
      "Collaborated with academic and industrial teams to improve operational models for transport systems",
      "Published peer-reviewed research on predictive modeling and supply chain analytics",
      "Supervised graduate student research projects in machine learning applications"
    ],
    highlights: [
      "Published 8 research papers with 200+ citations",
      "Secured research funding for logistics optimization projects",
      "Established industry partnerships for practical research applications"
    ]
  },
  {
    id: "assistant-prof-galgotias",
    title: "Assistant Professor – Data Science & Statistics",
    company: "Galgotias University",
    location: "India",
    startDate: "2017",
    endDate: "2019",
    current: false,
    description: [
      "Developed and taught statistical methods and optimization models courses",
      "Mentored applied research in logistics analytics and time-series forecasting",
      "Supervised student-led predictive analytics projects using R and Python",
      "Established foundational curriculum for data science programs"
    ],
    highlights: [
      "Designed comprehensive data science curriculum",
      "Achieved 95% student satisfaction in course evaluations",
      "Launched analytics lab for hands-on learning"
    ]
  }
];

export const education = [
  {
    id: "phd-or-stats",
    degree: "Ph.D. in Operations Research and Statistics",
    period: "2013 – 2018",
    description: "Specialized in mathematical modeling, optimization, and statistical analysis with focus on practical business applications. Dissertation on multi-criteria decision making in supply chain management.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "ms-data-science",
    degree: "M.S. in Data Science",
    period: "2024 – Present (Expected 2026)",
    description: "Advanced coursework in machine learning, big data analytics, and artificial intelligence with emphasis on industry applications. Focusing on deep learning and cloud computing technologies.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "ms-or-stats",
    degree: "M.S. in Operations Research and Statistics",
    period: "2010 – 2012",
    description: "Advanced study in operations research methodologies, statistical modeling, and optimization techniques for business applications."
  },
  {
    id: "bs-math",
    degree: "B.S. in Mathematics",
    period: "2007 – 2010",
    description: "Strong foundation in mathematical principles, statistical analysis, and computational methods."
  }
];

export const technicalSkills = {
  languages: [
    { name: "Python", level: 5 },
    { name: "R", level: 4 },
    { name: "SQL", level: 4 },
    { name: "Git", level: 3 }
  ],
  machineLearning: [
    "TensorFlow",
    "scikit-learn", 
    "XGBoost",
    "Keras",
    "Neural Networks",
    "SVM",
    "Logistic Regression",
    "Random Forest",
    "Ensemble Methods"
  ],
  visualization: [
    "Matplotlib",
    "Seaborn", 
    "Plotly",
    "Tableau",
    "Excel",
    "Power BI"
  ],
  techniques: [
    "Predictive Modeling",
    "Time Series Analysis",
    "Anomaly Detection",
    "Drift Detection",
    "Optimization",
    "Statistical Modeling",
    "Feature Engineering",
    "Model Interpretability"
  ],
  communication: [
    "Data Storytelling",
    "Cross-Functional Collaboration",
    "Technical Writing",
    "Research Presentation",
    "Remote Team Leadership"
  ]
};
