import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I will get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy text-white">
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
                <Mail className="text-emerald mr-4 h-5 w-5" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-blue-200">mohinideep0305@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-emerald mr-4 h-5 w-5" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-blue-200">(623) 274-7601</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-emerald mr-4 h-5 w-5" />
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
                className="text-white hover:text-emerald transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/AgMohini/machine_learning_projects" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://scholar.google.com/citations?hl=en&user=oNopg-QAAAAJ" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald transition-colors"
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
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-emerald"
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
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-emerald"
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
                    className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:border-emerald resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald hover:bg-emerald-light text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
