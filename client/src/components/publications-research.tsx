import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, TrendingUp, Users, Award } from "lucide-react";

export default function PublicationsResearch() {
  const featuredPublications = [
    {
      title: "Data Analytics and Business Intelligence",
      authors: "V Charles, P Garg, N Gupta, M Agarwal",
      year: "2023",
      citations: "47",
      description: "Comprehensive analysis of data analytics applications in business intelligence and decision-making processes."
    },
    {
      title: "Economic impact of software patching and optimal release scheduling",
      authors: "A Anand, M Agarwal, Y Tamura, S Yamada",
      year: "2017",
      citations: "38",
      description: "Optimization models for software release scheduling considering economic impacts and reliability requirements."
    },
    {
      title: "Unified approach for modeling innovation adoption and optimal model selection",
      authors: "A Anand, M Agarwal, D Aggrawal, O Singh",
      year: "2016",
      citations: "30",
      description: "Mathematical modeling of innovation diffusion processes with practical applications in technology adoption."
    }
  ];

  const researchAreas = [
    { icon: BookOpen, name: "Artificial Intelligence" },
    { icon: TrendingUp, name: "Decision Science" },
    { icon: Users, name: "Marketing Management" },
    { icon: Award, name: "Software Reliability" },
    { icon: TrendingUp, name: "Operations Research" }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy mb-4">Research & Publications</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Published research with 412 citations spanning AI, decision science, and operations research
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Academic Impact */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-navy mb-6">Academic Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald mb-2">412</div>
                <div className="text-slate">Total Citations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald mb-2">328</div>
                <div className="text-slate">Citations Since 2020</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald mb-2">12</div>
                <div className="text-slate">h-index</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald mb-2">14</div>
                <div className="text-slate">i10-index</div>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                asChild
                variant="outline" 
                className="text-emerald hover:text-emerald-light font-medium"
              >
                <a 
                  href="https://scholar.google.com/citations?hl=en&user=oNopg-QAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Google Scholar Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Research Areas */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-navy mb-6">Research Areas</h3>
            <div className="space-y-4">
              {researchAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <area.icon className="text-emerald mr-3 h-5 w-5" />
                  <span className="text-lg">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Publications */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-navy mb-6">Featured Publications</h3>
          <div className="space-y-6">
            {featuredPublications.map((pub, index) => (
              <div key={index} className="border-l-4 border-emerald pl-6">
                <h4 className="text-lg font-semibold text-navy mb-2">{pub.title}</h4>
                <p className="text-slate mb-2">{pub.authors}</p>
                <p className="text-sm text-slate mb-2">
                  {pub.year} • <span className="text-emerald font-medium">{pub.citations} citations</span>
                </p>
                <p className="text-sm text-slate">{pub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
