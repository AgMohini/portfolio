import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TechnicalSkills from "@/components/technical-skills";
import ExperienceTimeline from "@/components/experience-timeline";
import ProjectsPortfolio from "@/components/projects-portfolio";
import PublicationsResearch from "@/components/publications-research";
import Education from "@/components/education";
import ContactStatic from "@/components/contact-static";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />
      <HeroSection />
      <TechnicalSkills />
      <ExperienceTimeline />
      <ProjectsPortfolio />
      <PublicationsResearch />
      <Education />
      <ContactStatic />
      
      {/* Footer */}
      <footer className="bg-charcoal text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">&copy; 2024 Dr. Mohini Agarwal. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Transforming data into actionable insights for business growth</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
