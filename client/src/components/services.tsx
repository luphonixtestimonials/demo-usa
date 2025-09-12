import { useEffect } from "react";
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
  UserCheck
} from "lucide-react";

// Helper function to get unique card styles
const getCardStyle = (index: number): string => {
  const styles = [
    // Card 1 - Hexagonal with tilt
    "rounded-3xl border-2 border-blue-200 hover:border-blue-400 p-8 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 hover:rotate-1 transform-gpu",
    // Card 2 - Outlined with glow effect
    "rounded-2xl border border-slate-300 hover:border-transparent p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm",
    // Card 3 - Floating card with shadow
    "rounded-xl border-0 p-8 shadow-lg hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-4 hover:rotate-[-1deg] transform-gpu"
  ];
  return styles[index % styles.length];
};

// Helper function for dynamic background effects
const getBackgroundEffect = (index: number) => {
  const effects = [
    // Card 1 - Gradient border with corner accents
    <div key="bg-1">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      <div className="absolute top-3 right-3 w-8 h-8 bg-blue-400/20 rounded-full group-hover:scale-150 group-hover:bg-blue-400/30 transition-all duration-500"></div>
      <div className="absolute bottom-3 left-3 w-6 h-6 bg-teal-400/20 rounded-full group-hover:scale-150 group-hover:bg-teal-400/30 transition-all duration-500"></div>
    </div>,
    // Card 2 - Animated border with particles
    <div key="bg-2">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
        <div className="absolute inset-[2px] bg-[#dfeef1] rounded-2xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-blue-400/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
    </div>,
    // Card 3 - Mesh gradient background
    <div key="bg-3">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  ];
  return effects[index % effects.length];
};

// Helper function for unique card layouts
const getCardLayout = (service: any, IconComponent: any, index: number) => {
  const layouts = [
    // Layout 1 - Header with side icon
    <div key="layout-1" className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="text-xs text-blue-500 font-bold mb-2 tracking-wider">SERVICE #{String(service.id).padStart(2, '0')}</div>
          <h3 className="text-2xl font-bold text-[hsl(220,91%,15%)] mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl transition-all duration-500">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
      </div>
      <p className="text-slate-600 mb-8 text-base leading-relaxed flex-1">{service.description}</p>
      <div className="space-y-4">
        {service.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start space-x-3 group/item">
            <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-700 text-sm font-medium group-hover/item:text-slate-900 transition-colors duration-300">{feature}</span>
          </div>
        ))}
      </div>
    </div>,

    // Layout 2 - Centered with floating icon
    <div key="layout-2" className="text-center h-full flex flex-col">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full w-20 h-20 mx-auto opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"></div>
        <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-2xl mx-auto group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
          <IconComponent className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-slate-800 group-hover:scale-125 transition-transform duration-300">
          {service.id}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-[hsl(220,91%,15%)] mb-4 group-hover:text-purple-700 transition-colors duration-300">{service.title}</h3>
      <p className="text-slate-600 mb-8 leading-relaxed flex-1">{service.description}</p>
      <div className="grid grid-cols-1 gap-3">
        {service.features.map((feature: string, idx: number) => (
          <div key={idx} className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-3 border border-slate-200 group-hover:border-blue-300 group-hover:shadow-sm transition-all duration-300">
            <span className="text-slate-700 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>,

    // Layout 3 - Modern minimal with left accent
    <div key="layout-3" className="relative h-full flex flex-col">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-green-500 rounded-full group-hover:w-2 transition-all duration-500"></div>
      <div className="pl-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-xl group-hover:bg-teal-200 group-hover:scale-110 transition-all duration-300">
            <IconComponent className="w-6 h-6 text-teal-600" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-teal-600 font-semibold mb-1">ENTERPRISE GRADE</div>
            <h3 className="text-xl font-bold text-[hsl(220,91%,15%)] group-hover:text-teal-700 transition-colors duration-300">{service.title}</h3>
          </div>
        </div>
        <p className="text-slate-600 mb-8 leading-relaxed flex-1">{service.description}</p>
        <div className="space-y-3">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-teal-50 transition-colors duration-200">
              <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-slate-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ];
  return layouts[index % layouts.length];
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: "AI and Analytics Services",
      description: "Harness the power of artificial intelligence and data analytics to unlock insights and automate processes.",
      icon: Lightbulb,
      features: [
        "Machine Learning Implementation",
        "Predictive Analytics",
        "Business Intelligence Dashboards"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security solutions and threat management.",
      icon: Shield,
      features: [
        "Security Audits & Assessments",
        "Incident Response Planning",
        "Compliance Management"
      ]
    },
    {
      id: 3,
      title: "Infrastructure and Cloud Services",
      description: "Scale your operations with robust cloud infrastructure and modern deployment strategies.",
      icon: Cloud,
      features: [
        "Cloud Migration & Strategy",
        "DevOps Implementation",
        "Infrastructure Monitoring"
      ]
    },
    {
      id: 4,
      title: "Digital Modernization",
      description: "Transform legacy systems into modern, efficient digital platforms that drive business growth.",
      icon: Zap,
      features: [
        "Legacy System Migration",
        "API Development & Integration",
        "User Experience Optimization"
      ]
    },
    {
      id: 5,
      title: "Data Management Services",
      description: "Organize, secure, and leverage your data assets for strategic business advantages.",
      icon: Database,
      features: [
        "Data Architecture Design",
        "Database Optimization",
        "Data Governance & Privacy"
      ]
    },
    {
      id: 6,
      title: "Customer Experience",
      description: "Enhance customer satisfaction with personalized experiences and seamless digital touchpoints.",
      icon: Users,
      features: [
        "CX Strategy Development",
        "Omnichannel Implementation",
        "Customer Journey Mapping"
      ]
    },
    {
      id: 7,
      title: "Contact Center Solutions",
      description: "Modern contact center technologies that improve agent productivity and customer satisfaction.",
      icon: Phone,
      features: [
        "Cloud Contact Centers",
        "AI-Powered Routing",
        "Performance Analytics"
      ]
    },
    {
      id: 8,
      title: "Managed Helpdesk Services",
      description: "24/7 technical support and IT helpdesk services to keep your business running smoothly.",
      icon: LifeBuoy,
      features: [
        "Multi-tier Support Structure",
        "Ticket Management Systems",
        "SLA-driven Response Times"
      ]
    },
    {
      id: 9,
      title: "Consulting and Advisory Services",
      description: "Strategic technology consulting to align your IT initiatives with business objectives.",
      icon: BarChart3,
      features: [
        "Technology Strategy Planning",
        "Digital Transformation Roadmaps",
        "Vendor Selection & Management"
      ]
    },
    {
      id: 10,
      title: "Case Management",
      description: "Streamline workflows with intelligent case management systems that improve efficiency.",
      icon: Clipboard,
      features: [
        "Workflow Automation",
        "Case Tracking & Analytics",
        "Integration Capabilities"
      ]
    },
    {
      id: 11,
      title: "Program Management",
      description: "Expert program management services to ensure successful delivery of complex technology initiatives.",
      icon: Settings,
      features: [
        "Agile & Waterfall Methodologies",
        "Resource Allocation & Planning",
        "Risk Management & Mitigation"
      ]
    },
    {
      id: 12,
      title: "Organizational Change Management",
      description: "Navigate technology transitions smoothly with comprehensive change management strategies.",
      icon: UserCheck,
      features: [
        "Change Strategy Development",
        "Training & Communication Plans",
        "Adoption Measurement & Support"
      ]
    }
  ];

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

        {/* Professional Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-[#dfeef1] ${getCardStyle(index)}`}
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`service-card-${service.id}`}
              >
                {getBackgroundEffect(index)}

                {/* Card content */}
                <div className="relative z-10">
                  {getCardLayout(service, IconComponent, index)}

                  {/* Learn more link */}
                  <div className="mt-8 pt-6 border-t border-slate-200 group-hover:border-slate-300">
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      Learn more
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
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
    </section>
  );
}