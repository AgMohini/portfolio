import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-navy text-xl">Dr. Mohini Agarwal</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate hover:text-navy transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate hover:text-navy transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate hover:text-navy transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('publications')} className="text-slate hover:text-navy transition-colors">
              Publications
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate hover:text-navy transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate hover:text-navy p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('about')} className="text-slate hover:text-navy transition-colors py-2 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate hover:text-navy transition-colors py-2 text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate hover:text-navy transition-colors py-2 text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('publications')} className="text-slate hover:text-navy transition-colors py-2 text-left">
                Publications
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate hover:text-navy transition-colors py-2 text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
