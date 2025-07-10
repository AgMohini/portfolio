import { Code, Brain, BarChart3 } from "lucide-react";

export default function TechnicalSkills() {
  const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
    return (
      <div className="flex justify-between items-center">
        <span>{skill}</span>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div 
              key={dot} 
              className={`skill-dot ${dot <= level ? 'active' : 'inactive'}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Technical Expertise</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Comprehensive skill set spanning machine learning, statistical modeling, and data engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Code className="text-navy text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Programming Languages</h3>
            </div>
            <div className="space-y-3">
              <SkillBar skill="Python" level={5} />
              <SkillBar skill="R" level={4} />
              <SkillBar skill="SQL" level={4} />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Brain className="text-navy text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">TensorFlow</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Scikit-learn</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">XGBoost</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Keras</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Neural Networks</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">SVM</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="text-navy text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Analytics & Visualization</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Matplotlib</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Seaborn</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Plotly</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Time Series</span>
              <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Predictive Modeling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
