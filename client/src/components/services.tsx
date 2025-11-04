
import React, { useEffect, useState } from "react";
import { 
  Lightbulb, 
  Shield, 
  Cloud, 
  Zap, 
  Database, 
  Users, 
  Phone, 
  LifeBuoy, 
  BarChart3, 
  Clipboard, 
  Settings, 
  UserCheck,
  X,
  CheckCircle2
} from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const services = [
  {
    id: 1,
    title: "AI & Analytics Services",
    description: "Harness the power of artificial intelligence and data analytics to unlock insights and automate processes.",
    icon: Lightbulb,
    link: "/ai-analytics-service",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    features: [
      "Machine Learning Implementation",
      "Predictive Analytics",
      "Business Intelligence Dashboards"
    ],
    detailedInfo: {
      overview: "Transform your business with cutting-edge AI and analytics solutions that turn data into actionable insights. Our comprehensive services help you leverage machine learning, predictive modeling, and advanced analytics to gain competitive advantages.",
      capabilities: [
        "Custom ML models tailored to your business needs",
        "Advanced predictive analytics and forecasting",
        "Interactive dashboards with real-time insights",
        "Natural language processing and text analytics",
        "Computer vision and image recognition",
        "Automated decision-making systems"
      ],
      benefits: [
        "Reduce operational costs by up to 40%",
        "Improve decision-making accuracy",
        "Gain competitive advantage through insights",
        "Scale operations without proportional cost increases",
        "Identify new revenue opportunities"
      ],
      useCases: [
        "Customer behavior analysis and segmentation",
        "Fraud detection and prevention",
        "Supply chain optimization",
        "Predictive maintenance",
        "Sentiment analysis and social listening"
      ]
    }
  },
  {
    id: 2,
    title: "Cloud Services",
    description: "Scale your operations with robust cloud infrastructure and modern deployment strategies.",
    icon: Cloud,
    link: "/cloud-services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    features: [
      "Cloud Migration & Strategy",
      "DevOps Implementation",
      "Infrastructure Monitoring"
    ],
    detailedInfo: {
      overview: "Accelerate your digital transformation with enterprise-grade cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and implement modern DevOps practices for maximum agility and cost efficiency.",
      capabilities: [
        "Multi-cloud and hybrid cloud architecture",
        "Cloud-native application development",
        "Kubernetes and container orchestration",
        "Serverless architecture implementation",
        "CI/CD pipeline automation",
        "Cloud cost optimization strategies"
      ],
      benefits: [
        "Reduce infrastructure costs by up to 40%",
        "Scale resources on-demand automatically",
        "Improve application reliability to 99.99% uptime",
        "Accelerate deployment cycles from weeks to hours",
        "Enhanced disaster recovery capabilities"
      ],
      useCases: [
        "Legacy system migration to cloud",
        "DevOps automation and CI/CD implementation",
        "Microservices architecture design",
        "Multi-cloud strategy and implementation",
        "Cloud security and compliance"
      ]
    }
  },
  {
    id: 3,
    title: "Digital Modernization",
    description: "Transform legacy systems into modern, efficient digital platforms that drive business growth.",
    icon: Zap,
    link: "/digital-modernization",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    features: [
      "Legacy System Migration",
      "API Development & Integration",
      "User Experience Optimization"
    ],
    detailedInfo: {
      overview: "Modernize your technology landscape with our comprehensive digital transformation services. We help you migrate from legacy systems to modern platforms, improve user experiences, and accelerate innovation.",
      capabilities: [
        "Legacy system assessment and migration planning",
        "Microservices architecture design",
        "API-first development approach",
        "Progressive web applications (PWA)",
        "Mobile-first responsive design",
        "Cloud-native application refactoring"
      ],
      benefits: [
        "Reduce technical debt by 60%",
        "Improve system performance by 3x",
        "Lower maintenance costs by 40-50%",
        "Enable faster feature deployment",
        "Future-proof your technology stack"
      ],
      useCases: [
        "Monolith to microservices transformation",
        "Legacy application modernization",
        "API ecosystem development",
        "Mobile app development",
        "UI/UX redesign and optimization"
      ]
    }
  },
  {
    id: 4,
    title: "Data Management Services",
    description: "Organize, secure, and leverage your data assets for strategic business advantages.",
    icon: Database,
    link: "/data-management-services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    features: [
      "Data Architecture Design",
      "Database Optimization",
      "Data Governance & Privacy"
    ],
    detailedInfo: {
      overview: "Unlock the full potential of your data with comprehensive data management solutions. We help you organize, govern, and leverage your data assets to drive business value and ensure compliance.",
      capabilities: [
        "Data architecture and modeling",
        "Master data management (MDM)",
        "Data quality and cleansing",
        "Data governance frameworks",
        "GDPR and compliance management",
        "Data warehouse and lake design"
      ],
      benefits: [
        "Improve data accuracy from 60% to 95%+",
        "Reduce data redundancy by 40%",
        "Enable faster data-driven decisions",
        "Ensure regulatory compliance",
        "Create single source of truth"
      ],
      useCases: [
        "Enterprise data warehouse implementation",
        "Master data management initiatives",
        "Data quality improvement programs",
        "Data governance framework setup",
        "GDPR compliance implementation"
      ]
    }
  },
  {
    id: 5,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with comprehensive security solutions and threat management.",
    icon: Shield,
    link: "/cybersecurity-services",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    features: [
      "Security Audits & Assessments",
      "Incident Response Planning",
      "Compliance Management"
    ],
    detailedInfo: {
      overview: "Protect your business with enterprise-grade cybersecurity solutions. Our comprehensive services help you identify vulnerabilities, prevent attacks, and maintain compliance with industry regulations.",
      capabilities: [
        "Security audits and penetration testing",
        "24/7 threat detection and response",
        "Security Operations Center (SOC)",
        "Compliance and regulatory support",
        "Identity and access management (IAM)",
        "Security awareness training"
      ],
      benefits: [
        "Reduce security incidents by 80%",
        "Achieve compliance certification",
        "24/7 threat monitoring and response",
        "Protect sensitive data and IP",
        "Build customer trust and confidence"
      ],
      useCases: [
        "SOC 2 and ISO 27001 certification",
        "Penetration testing and vulnerability assessments",
        "Incident response and recovery",
        "Security awareness training programs",
        "Zero-trust architecture implementation"
      ]
    }
  },
  {
    id: 6,
    title: "Professional Services",
    description: "Expert consulting and program management to ensure successful delivery of technology initiatives.",
    icon: Settings,
    link: "/professional-services",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    features: [
      "Technology Strategy Planning",
      "Program & Project Management",
      "Organizational Change Management"
    ],
    detailedInfo: {
      overview: "Drive successful technology initiatives with expert consulting and program management. Our experienced professionals help you navigate complex transformations, align technology with business goals, and ensure successful adoption.",
      capabilities: [
        "Technology strategy and planning",
        "Program and project management",
        "Organizational change management",
        "Business process optimization",
        "Vendor selection and management",
        "Digital transformation consulting"
      ],
      benefits: [
        "Accelerate project delivery by 40%",
        "Reduce project risks and cost overruns by 60%",
        "Ensure stakeholder alignment",
        "Maximize ROI on technology investments",
        "Build internal capabilities"
      ],
      useCases: [
        "Enterprise transformation programs",
        "Technology roadmap development",
        "PMO setup and optimization",
        "Change management for large initiatives",
        "Vendor evaluation and selection"
      ]
    }
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleLearnMore = (service: typeof services[0], e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#dfeef1] to-[#dfeef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Enterprise Solutions Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 mb-6 leading-tight" data-testid="services-title">
            Technology Services That
            <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              Drive Innovation
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-inter leading-relaxed" data-testid="services-description">
            From AI-powered analytics to enterprise security, we deliver cutting-edge solutions that transform businesses and accelerate growth in the digital economy.
          </p>
        </div>
        
        {/* Professional Services Grid with 3D Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <CardContainer
                key={service.id}
                className="inter-var"
                containerClassName="py-2"
              >
                <CardBody className="relative group/card bg-[#d7e4ea] rounded-2xl border border-[#c2d3da] hover:border-blue-400 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 w-auto sm:w-[26rem] h-auto hover:bg-[#164070]">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0.5 bg-[#d7e4ea] group-hover/card:bg-[#164070] rounded-2xl transition-colors duration-500"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    {/* Service Image */}
                    <CardItem translateZ="100" className="mb-6 rounded-xl overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover/card:scale-105 transition-transform duration-500"
                      />
                    </CardItem>
                    
                    {/* Icon with professional styling */}
                    <CardItem translateZ="50" className="mb-6">
                      <CardItem translateZ="60" className="flex items-center justify-center w-14 h-14 bg-[hsl(220,91%,15%)] rounded-xl shadow-lg transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-[#dfeef1]" />
                      </CardItem>
                    </CardItem>
                    
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold font-poppins text-slate-800 mb-3 group-hover/card:text-blue-300 transition-colors duration-300"
                      data-testid={`service-title-${service.id}`}
                    >
                      {service.title}
                    </CardItem>
                    
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-slate-600 font-inter mb-6 leading-relaxed text-sm group-hover/card:text-slate-100"
                      data-testid={`service-description-${service.id}`}
                    >
                      {service.description}
                    </CardItem>
                    
                    {/* Feature list with checkmarks */}
                    <CardItem translateZ="70" data-testid={`service-features-${service.id}`}>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <svg className="w-3 h-3 text-[#dfeef1]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-slate-600 font-inter text-sm group-hover/card:text-slate-100 transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardItem>
                    
                    {/* Learn more button to open dialog */}
                    <CardItem translateZ="80" className="mt-6 pt-6 border-t border-slate-600 group-hover/card:border-slate-500">
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={(e) => handleLearnMore(service, e)}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover/card:translate-x-1 transition-all duration-300"
                        >
                          Learn more
                          <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
        
        {/* Bottom CTA section */}
        <div className="mt-20 text-center fade-in">
          <div className="bg-[hsl(220,91%,15%)] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold font-poppins mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can accelerate your digital transformation journey.
            </p>
            <button className="px-8 py-4 bg-[#dfeef1] text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-slate-200 shadow-2xl">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#122458] rounded-xl flex items-center justify-center shadow-md">
                    {React.createElement(selectedService.icon, { className: "w-7 h-7 text-[#dfeef1]" })}
                  </div>
                  <DialogTitle className="text-3xl font-bold font-poppins text-slate-900">
                    {selectedService.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-lg text-slate-600 leading-relaxed">
                  {selectedService.detailedInfo.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Capabilities */}
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <h3 className="text-xl font-bold font-poppins text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
                    Core Capabilities
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedService.detailedInfo.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold font-poppins text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                    Business Benefits
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedService.detailedInfo.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-200">
                  <h3 className="text-xl font-bold font-poppins text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
                    Use Cases
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedService.detailedInfo.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-6 border-t-2 border-slate-200 mt-6">
                  <a 
                    href={selectedService.link}
                    className="flex-1 px-6 py-3 bg-[#122458] text-white rounded-xl font-semibold text-center hover:bg-[#164070] hover:shadow-lg transition-all duration-300"
                  >
                    View Full Details
                  </a>
                  <a 
                    href="/#contact"
                    className="flex-1 px-6 py-3 border-2 border-[#122458] text-[#122458] rounded-xl font-semibold text-center hover:bg-[#122458] hover:text-white transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
