export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Instructor – Data Science",
      company: "Grand Canyon University, AZ",
      period: "2023 - Present",
      description: [
        "Teaching Python, ML, and data visualization to graduate students",
        "Developing real-world case studies for logistics and optimization",
        "Mentoring student projects with industry applications"
      ],
      active: true
    },
    {
      title: "Assistant Professor",
      company: "Amity University, India",
      period: "2019 - 2022",
      description: [
        "Led ML-based research for logistics optimization",
        "Collaborated with industry partners on transport systems",
        "Published peer-reviewed research on predictive modeling"
      ],
      active: false
    },
    {
      title: "Assistant Professor",
      company: "Galgotias University, India",
      period: "2017 - 2019",
      description: [
        "Developed statistical methods and optimization models",
        "Supervised predictive analytics projects",
        "Mentored research in time-series forecasting"
      ],
      active: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Professional Journey</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            8+ years of progressive experience in academia with focus on practical applications
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-navy"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 timeline-dot ${exp.active ? 'active' : 'inactive'}`}></div>
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-navy">{exp.title}</h3>
                      <span className="text-sm text-slate">{exp.period}</span>
                    </div>
                    <p className="text-emerald font-medium mb-3">{exp.company}</p>
                    <ul className="text-slate space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
