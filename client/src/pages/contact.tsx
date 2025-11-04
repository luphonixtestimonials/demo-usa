import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. Our team will respond within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[hsl(220,91%,15%)] to-[hsl(220,91%,20%)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#dfeef1]/10 backdrop-blur-md rounded-full border border-[#dfeef1]/20 text-[#dfeef1]/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              We're Here to Help
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-[#dfeef1] mb-6 leading-tight" data-testid="contact-hero-title">
              Let's Start a
              <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-[#dfeef1]/80 max-w-4xl mx-auto leading-relaxed" data-testid="contact-hero-description">
              Have a project in mind? Our team of experts is ready to help you transform your business with enterprise technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-[#dfeef1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-6" data-testid="contact-info-title">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-700 mb-10 leading-relaxed">
                Whether you're looking to modernize your infrastructure, enhance security, or leverage AI and analytics, we're here to guide you every step of the way.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group" data-testid="contact-email">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(220,91%,15%)] mb-1">Email Us</h3>
                    <a href="mailto:contact@6vcconsulting.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      contact@6vcconsulting.com
                    </a>
                    <p className="text-sm text-slate-600 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(220,91%,15%)] mb-1">Call Us</h3>
                    <a href="tel:+1-888-6VC-TECH" className="text-blue-600 hover:text-blue-700 transition-colors">
                      +1 (888) 6VC-TECH
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group" data-testid="contact-address">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(220,91%,15%)] mb-1">Visit Us</h3>
                    <p className="text-slate-700">
                      123 Innovation Drive, Suite 500<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(220,91%,15%)] mb-1">Business Hours</h3>
                    <p className="text-slate-700">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed<br />
                      24/7 Support available for enterprise clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200" data-testid="info-consultation">
                  <MessageSquare className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-[hsl(220,91%,15%)] mb-2">Free Consultation</h4>
                  <p className="text-sm text-slate-600">Get expert advice on your technology needs</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200" data-testid="info-response">
                  <Calendar className="w-8 h-8 text-teal-600 mb-3" />
                  <h4 className="font-bold text-[hsl(220,91%,15%)] mb-2">Quick Response</h4>
                  <p className="text-sm text-slate-600">24-hour response time guaranteed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-8" data-testid="form-title">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full"
                      data-testid="input-firstname"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full"
                      data-testid="input-lastname"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    data-testid="input-company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Service Interest *
                  </label>
                  <Select value={formData.service} onValueChange={handleServiceChange} required>
                    <SelectTrigger className="w-full" data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-analytics">AI & Analytics Services</SelectItem>
                      <SelectItem value="cloud">Cloud Services</SelectItem>
                      <SelectItem value="digital-modernization">Digital Modernization</SelectItem>
                      <SelectItem value="data-management">Data Management Services</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity Services</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="other">Other / General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your project or inquiry..."
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-4" data-testid="offices-title">
              Our Global Presence
            </h2>
            <p className="text-xl text-slate-700">
              With offices and teams across the globe, we're always close to our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#dfeef1] rounded-2xl border border-slate-200" data-testid="office-us">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(220,91%,15%)] mb-2">North America</h3>
              <p className="text-slate-700">
                San Francisco, CA<br />
                New York, NY<br />
                Toronto, Canada
              </p>
            </div>

            <div className="text-center p-8 bg-[#dfeef1] rounded-2xl border border-slate-200" data-testid="office-eu">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(220,91%,15%)] mb-2">Europe</h3>
              <p className="text-slate-700">
                London, UK<br />
                Berlin, Germany<br />
                Dublin, Ireland
              </p>
            </div>

            <div className="text-center p-8 bg-[#dfeef1] rounded-2xl border border-slate-200" data-testid="office-apac">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(220,91%,15%)] mb-2">Asia Pacific</h3>
              <p className="text-slate-700">
                Singapore<br />
                Sydney, Australia<br />
                Tokyo, Japan
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
