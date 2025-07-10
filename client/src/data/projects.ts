export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "news-classifier",
    title: "News Text Classification",
    description: "Multi-label classification using SVM and Logistic Regression with LIME interpretability and drift detection using Cohen's H. Implemented hyperparameter tuning and evaluated with F1, Accuracy, and ROC-AUC metrics.",
    technologies: ["Python", "SVM", "Logistic Regression", "LIME", "NLP", "Model Interpretability"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/news_classifier_with_model_governance_metrics.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: true
  },
  {
    id: "apple-stock-prediction",
    title: "Apple Stock Price Prediction",
    description: "Time series forecasting using ARIMA and regression models with comprehensive model diagnostics and forecast evaluation. Applied to financial datasets for market trend analysis.",
    technologies: ["Python", "ARIMA", "Time Series", "Regression", "Finance", "Forecasting"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/Apple%20Stock%20Price%20Prediction.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: true
  },
  {
    id: "time-series-forecasting",
    title: "Apple Stock Time Series Forecasting",
    description: "Advanced time series analysis using statistical and machine learning models to understand temporal behavior of stock data with seasonal decomposition and trend analysis.",
    technologies: ["Python", "Time Series", "Statistical Modeling", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/Apple%20Stock%20Time%20Forecasting.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "collaborative-filtering",
    title: "Collaborative Filtering Recommendation System",
    description: "Built a recommendation system using collaborative filtering for personalized item suggestions with user-based and item-based approaches. Implemented matrix factorization techniques.",
    technologies: ["Python", "Collaborative Filtering", "Matrix Factorization", "Pandas", "NumPy"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/Collaborative_Filtering_Model.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: true
  },
  {
    id: "credit-approval",
    title: "Credit Approval Classification System",
    description: "Classification model for loan approval decisions using ensemble methods with comprehensive feature importance analysis and risk assessment metrics.",
    technologies: ["Python", "Classification", "Ensemble Methods", "Feature Engineering", "Finance"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/CreditApproval.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: true
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction Model",
    description: "Regression analysis to model and predict house prices using multiple features including location, size, and amenities with feature selection and regularization techniques.",
    technologies: ["Python", "Regression", "Feature Selection", "Real Estate", "Data Analysis"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/House%20Price%20Predictive%20Model.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "anomaly-detection",
    title: "Anomaly Detection in Network Traffic",
    description: "Implemented multiple anomaly detection techniques including Isolation Forest and One-Class SVM to detect anomalies in network flows. Reduced false positives using dimensionality reduction.",
    technologies: ["Python", "Isolation Forest", "One-Class SVM", "Anomaly Detection", "Network Security"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/anomaly-detection-multiple-techniques.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: true
  },
  {
    id: "semantic-analysis",
    title: "Semantic Analysis with Sentence Transformers",
    description: "Applied deep learning-based text embeddings using Sentence Transformers to categorize and compare research abstracts with semantic similarity analysis.",
    technologies: ["Python", "NLP", "Sentence Transformers", "Deep Learning", "Text Mining"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/semantic_analysis.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: true
  },
  {
    id: "spam-classifier",
    title: "Spam Classification Analysis",
    description: "Developed a spam classifier using text preprocessing and supervised learning methods with feature extraction and model evaluation techniques.",
    technologies: ["Python", "Text Processing", "Classification", "NLP", "Feature Engineering"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/spam_classifier_analysis.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "survival-analysis",
    title: "Survival Analysis for Business Applications",
    description: "Performed survival analysis to estimate event durations, useful in customer retention, equipment maintenance, and health analytics applications.",
    technologies: ["Python", "Survival Analysis", "Statistical Modeling", "Business Analytics"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/SurvivalAnalysis_Mohini.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "ann-neural-networks",
    title: "Applied Neural Networks for Predictive Modeling",
    description: "Developed, trained, and evaluated feedforward neural networks on large structured datasets using TensorFlow and Keras with hyperparameter tuning and regularization.",
    technologies: ["Python", "TensorFlow", "Keras", "Neural Networks", "Deep Learning"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/ANN_Mohini.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "duckdb-rag",
    title: "DuckDB RAG Implementation",
    description: "Integrated DuckDB in a machine learning workflow to efficiently process data, demonstrating Retrieval-Augmented Generation patterns for data analytics.",
    technologies: ["Python", "DuckDB", "RAG", "Data Processing", "SQL"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/duckdb-rag-sample-ipynb.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "knn-classification",
    title: "K-Nearest Neighbors Classification",
    description: "Implementation of KNN algorithm for classification tasks with distance metrics comparison and performance optimization techniques.",
    technologies: ["Python", "KNN", "Classification", "Distance Metrics", "scikit-learn"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/Classification_KNN.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "multiple-regression",
    title: "Multiple Linear Regression Analysis",
    description: "Applied multiple linear regression to understand relationships between independent and dependent variables with statistical significance testing.",
    technologies: ["Python", "Linear Regression", "Statistical Analysis", "Feature Selection"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/Multiple%20Linear%20Regression.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "naive-bayes",
    title: "Probabilistic Classifier with Naive Bayes",
    description: "Implementation of Naive Bayes classifier for probabilistic classification with text and numerical data preprocessing.",
    technologies: ["Python", "Naive Bayes", "Probabilistic Classification", "Text Mining"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/ProbClassifierNB_Mohini.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "data-visualization",
    title: "Advanced Data Visualization",
    description: "Comprehensive data visualization techniques to uncover patterns and communicate insights effectively using modern plotting libraries.",
    technologies: ["Python", "Matplotlib", "Seaborn", "Plotly", "Data Visualization"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/Topic4_Data_Visualization_Mohini.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  },
  {
    id: "anova-linear-models",
    title: "ANOVA and Linear Models",
    description: "Conducted ANOVA and linear modeling to examine the effect of categorical variables on numerical responses with hypothesis testing.",
    technologies: ["Python", "ANOVA", "Linear Models", "Statistical Testing", "R"],
    githubUrl: "https://github.com/AgMohini/machine_learning_projects/blob/main/Topic7_ANOVA_LinearModels_Mohini.ipynb",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getAllProjects = () => projects;
