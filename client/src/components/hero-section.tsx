import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-gradient-to-r from-navy to-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Bridging Academia & Industry Through Data Science
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              PhD in Operations Research with 8+ years of experience in machine learning and deep learning. Expertise in CNN, neural networks, and AWS deployment. Ready to drive data-driven innovation in corporate environments.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">412</div>
                <div className="text-sm text-blue-200">Citations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-blue-200">h-index</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">17</div>
                <div className="text-sm text-blue-200">ML Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
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
                className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
              alt="Professional data scientist" 
              className="rounded-2xl shadow-2xl max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
