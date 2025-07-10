export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  description: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    id: "data-analytics-bi",
    title: "Data Analytics and Business Intelligence",
    authors: "V Charles, P Garg, N Gupta, M Agarwal",
    journal: "Data Analytics and Business Intelligence",
    year: 2023,
    citations: 47,
    description: "Comprehensive analysis of data analytics applications in business intelligence and decision-making processes.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:pqnbT2bcN3wC"
  },
  {
    id: "software-patching",
    title: "Economic impact of software patching and optimal release scheduling",
    authors: "A Anand, M Agarwal, Y Tamura, S Yamada",
    journal: "Quality and Reliability Engineering International",
    year: 2017,
    citations: 38,
    description: "Optimization models for software release scheduling considering economic impacts and reliability requirements.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:zYLM7Y9cAGgC"
  },
  {
    id: "innovation-adoption",
    title: "Unified approach for modeling innovation adoption and optimal model selection for the diffusion process",
    authors: "A Anand, M Agarwal, D Aggrawal, O Singh",
    journal: "Journal of Advances in Management Research",
    year: 2016,
    citations: 30,
    description: "Mathematical modeling of innovation diffusion processes with practical applications in technology adoption.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:TQgYirikUcIC"
  },
  {
    id: "multi-generation-innovation",
    title: "Modeling multi-generation innovation adoption based on conjoint effect of awareness process",
    authors: "M Agarwal, D Aggrawal, A Anand, O Singh",
    journal: "International Journal of Mathematical, Engineering and Management Sciences",
    year: 2017,
    citations: 29,
    description: "Advanced modeling of multi-generational technology adoption with awareness-based diffusion mechanisms.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:LkGwnXOMwfcC"
  },
  {
    id: "mcdm-methods",
    title: "Multiple criteria decision-making methods: applications for managerial discretion",
    authors: "A Anand, M Agarwal, D Aggrawal",
    journal: "Walter de Gruyter GmbH & Co KG",
    year: 2022,
    citations: 26,
    description: "Comprehensive study of MCDM methods for complex business decision-making scenarios.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:NaGl4SEjCO4C"
  },
  {
    id: "innovation-diffusion-ranking",
    title: "Generalized innovation diffusion modeling & weighted criteria based ranking",
    authors: "A Anand, PK Kapur, M Agarwal, D Aggrawal",
    journal: "Proceedings of 3rd International Conference on Reliability, Infocom Technologies",
    year: 2014,
    citations: 24,
    description: "Novel approach to innovation diffusion modeling with weighted criteria-based ranking systems.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:2osOgNQ5qMEC"
  },
  {
    id: "adoption-awareness-motivation",
    title: "Modeling adoption process based on awareness and motivation of consumers",
    authors: "A Anand, O Singh, M Agarwal, R Aggarwal",
    journal: "Proceedings of 3rd International Conference on Reliability, Infocom Technologies",
    year: 2014,
    citations: 18,
    description: "Consumer behavior modeling in technology adoption with psychological factors integration.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:9yKSN-GCB0IC"
  },
  {
    id: "market-assessment-or",
    title: "Market assessment with OR applications",
    authors: "A Anand, D Aggrawal, M Agarwal",
    journal: "CRC Press",
    year: 2019,
    citations: 16,
    description: "Operations research applications in market assessment and business strategy development.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:4DMP91E08xMC"
  },
  {
    id: "introduction-timing-policy",
    title: "Optimal introduction timing policy for a successive generational product",
    authors: "D Aggrawal, O Singh, A Anand, M Agarwal",
    journal: "International Journal of Technology Diffusion (IJTD)",
    year: 2014,
    citations: 16,
    description: "Strategic timing models for product introduction in competitive markets.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:qjMakFHDy7sC"
  },
  {
    id: "software-patch-scheduling",
    title: "Software patch scheduling policy incorporating functional safety standards",
    authors: "A Anand, M Agrawal, N Bhatt, M Ram",
    journal: "Advances in System Reliability Engineering",
    year: 2019,
    citations: 15,
    description: "Integration of functional safety standards in software patch scheduling optimization.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=oNopg-QAAAAJ&citation_for_view=oNopg-QAAAAJ:_kc_bZDykSQC"
  }
];

export const getTopPublications = () => publications.slice(0, 5);
export const getAllPublications = () => publications;

export const academicMetrics = {
  totalCitations: 412,
  citationsSince2020: 328,
  hIndex: 12,
  hIndexSince2020: 10,
  i10Index: 14,
  i10IndexSince2020: 10,
  researchAreas: [
    "Artificial Intelligence",
    "Decision Science", 
    "Marketing Management",
    "Software Reliability",
    "Operations Research"
  ]
};
