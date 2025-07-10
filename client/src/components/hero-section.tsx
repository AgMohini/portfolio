import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import profileImage from "@assets/citations_1752118126741.jpeg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Bridging Academia & Industry Through Data Science
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              PhD in Operations Research with 8+ years of teaching and academic experience in machine learning and deep learning. Strong theoretical foundation with expertise in CNN, neural networks, and AWS deployment. Eager to transition from academia to corporate environments and apply my analytical skillset to drive data-driven business innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-white">412</div>
                <div className="text-sm text-gray-300">Citations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-sm text-gray-300">h-index</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-white">17</div>
                <div className="text-sm text-gray-300">ML Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-emerald hover:bg-emerald-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={profileImage} 
              alt="Dr. Mohini Agarwal - Data Scientist" 
              className="rounded-2xl shadow-2xl max-w-sm w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
