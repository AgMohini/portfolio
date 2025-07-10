export default function Education() {
  const educationData = [
    {
      degree: "Ph.D. in Operations Research and Statistics",
      period: "2013 - 2018",
      description: "Specialization in mathematical modeling, optimization, and statistical analysis with focus on practical business applications.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      degree: "M.S. in Data Science",
      period: "2024 - Present (Expected 2026)",
      description: "Advanced coursework in machine learning, big data analytics, and artificial intelligence with emphasis on industry applications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Education</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Strong academic foundation with focus on practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <img 
                src={edu.image} 
                alt={edu.degree}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-navy mb-2">{edu.degree}</h3>
              <p className="text-emerald font-medium mb-2">{edu.period}</p>
              <p className="text-slate">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
