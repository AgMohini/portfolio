import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsPortfolio() {
  const projects = [
    {
      title: "CNN Image Classification (AWS Deployed)",
      description: "Convolutional Neural Network for image classification deployed on AWS Free Tier, showcasing end-to-end deep learning pipeline from model training to production deployment.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "CNN", "TensorFlow", "AWS", "Deep Learning"],
      github: "https://github.com/AgMohini/machine_learning_projects",
      featured: true
    },
    {
      title: "Artificial Neural Networks (ANN)",
      description: "Deep neural network implementation using TensorFlow and Keras for predictive modeling on structured datasets with hyperparameter tuning and cross-validation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "ANN", "TensorFlow", "Keras", "Deep Learning"],
      github: "https://github.com/AgMohini/machine_learning_projects/blob/main/ANN_Mohini.ipynb",
      featured: true
    },
    {
      title: "News Text Classification with Model Governance",
      description: "Multi-label classification using SVM and Logistic Regression with LIME interpretability, drift detection using Cohen's H, and comprehensive model governance metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "SVM", "LIME", "NLP", "Model Governance"],
      github: "https://github.com/AgMohini/machine_learning_projects/blob/main/news_classifier_with_model_governance_metrics.ipynb",
      featured: true
    },
    {
      title: "Semantic Analysis with Sentence Transformers",
      description: "Deep learning-based text embeddings using Sentence Transformers to categorize and compare research abstracts with advanced NLP techniques.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "NLP", "Transformers", "Deep Learning"],
      github: "https://github.com/AgMohini/machine_learning_projects/blob/main/semantic_analysis.ipynb",
      featured: true
    },
    {
      title: "Apple Stock Price Prediction",
      description: "Time series forecasting using ARIMA and advanced regression models with comprehensive model diagnostics and evaluation metrics.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "ARIMA", "Time Series", "Finance"],
      github: "https://github.com/AgMohini/machine_learning_projects/blob/main/Apple%20Stock%20Price%20Prediction.ipynb"
    },
    {
      title: "Anomaly Detection with Multiple Techniques",
      description: "Advanced anomaly detection using Isolation Forest and One-Class SVM to detect anomalies in network traffic with dimensionality reduction visualization.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Isolation Forest", "SVM", "Anomaly Detection"],
      github: "https://github.com/AgMohini/machine_learning_projects/blob/main/anomaly-detection-multiple-techniques.ipynb"
    },
    {
      title: "Credit Approval System",
      description: "Classification model for loan approval decisions using ensemble methods with feature importance analysis and model interpretability.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Classification", "Finance", "Ensemble Methods"],
      github: "https://github.com/AgMohini/machine_learning_projects/blob/main/CreditApproval.ipynb"
    },
    {
      title: "Collaborative Filtering Recommendation System",
      description: "Personalized recommendation system using collaborative filtering with user-based and item-based approaches for enhanced user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Collaborative Filtering", "Recommender Systems"],
      github: "https://github.com/AgMohini/machine_learning_projects/blob/main/Collaborative_Filtering_Model.ipynb"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Featured Projects</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Comprehensive portfolio of 17 machine learning projects showcasing practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{project.title}</h3>
                <p className="text-slate mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-navy/10 text-navy px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald hover:text-emerald-light font-medium flex items-center"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-navy hover:bg-navy-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <a 
              href="https://github.com/AgMohini/machine_learning_projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
