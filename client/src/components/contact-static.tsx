import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github, GraduationCap, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactStatic() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For GitHub Pages, create a mailto link with the form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:mohini15oct@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email client opened!",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Ready to bring academic rigor and practical insights to your data science team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="text-emerald-400 mr-4 h-5 w-5" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-blue-200">mohini15oct@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-emerald-400 mr-4 h-5 w-5" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-blue-200">Glendale, AZ</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/mohini-agarwal-phd-080025191" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/AgMohini/machine_learning_projects" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://scholar.google.com/citations?hl=en&user=oNopg-QAAAAJ" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 transition-colors"
              >
                <GraduationCap className="h-6 w-6" />
              </a>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-emerald-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-emerald-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-emerald-400 resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </form>
              <p className="text-sm text-blue-200 mt-4 text-center">
                Opens your email client with the message pre-filled
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}