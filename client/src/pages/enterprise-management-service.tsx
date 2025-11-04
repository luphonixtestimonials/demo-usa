
import { useEffect } from "react";
import { ArrowLeft, Settings, CheckCircle2, TrendingUp, Zap, Users, BarChart3, Shield } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function EnterpriseManagementService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: Settings,
      title: "IT Service Management",
      description: "Comprehensive ITSM solutions including incident, problem, and change management to optimize IT operations."
    },
    {
      icon: Users,
      title: "Workforce Management",
      description: "Streamline employee scheduling, time tracking, and resource allocation with intelligent management systems."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time dashboards and KPI tracking to monitor enterprise performance and drive data-driven decisions."
    },
    {
      icon: Shield,
      title: "Risk & Compliance Management",
      description: "Ensure regulatory compliance and mitigate risks with automated monitoring and reporting frameworks."
    }
  ];

  const benefits = [
    "Increase operational efficiency by up to 50%",
    "Reduce management overhead and costs",
    "Improve employee productivity and satisfaction",
    "Ensure compliance with industry regulations",
    "Gain real-time visibility into operations",
    "Scale management processes seamlessly"
  ];

  const useCases = [
    {
      title: "Digital Workplace Management",
      description: "Create a modern, integrated digital workplace that empowers employees and enhances collaboration across the enterprise."
    },
    {
      title: "Asset & License Management",
      description: "Track, manage, and optimize IT assets and software licenses to reduce costs and ensure compliance."
    },
    {
      title: "Service Desk Automation",
      description: "Automate ticket routing, resolution, and escalation to improve service delivery and customer satisfaction."
    },
    {
      title: "Business Process Optimization",
      description: "Streamline and automate business processes to eliminate bottlenecks and accelerate time-to-value."
    }
  ];

  return (
    <div className="min-h-screen bg-[#dfeef1]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#122458] via-[#164070] to-[#122458] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <a 
            href="/#services" 
            className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </a>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-blue-400/20">
                  <Settings className="w-10 h-10 text-blue-300" />
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-[#dfeef1]/10 backdrop-blur-md rounded-full border border-[#dfeef1]/20 text-[#dfeef1]/90 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Enterprise Solutions
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold font-poppins text-white mb-6 leading-tight">
                Enterprise Management Services
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Transform your enterprise operations with integrated management solutions that optimize workflows, enhance productivity, and drive organizational excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Unified Platform</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Automated Workflows</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Real-time Insights</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                  alt="Enterprise Management Dashboard" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122458]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#dfeef1]/95 backdrop-blur-xl rounded-xl p-4 border border-[#dfeef1]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#122458] rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-[#dfeef1]" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">Enterprise Dashboard</div>
                          <div className="text-xs text-slate-500">Unified Management</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">+180%</div>
                        <div className="text-xs text-slate-500">Efficiency Gain</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-blue-100 hidden lg:block">
                <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-xs text-slate-600">Enterprises Served</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-teal-100 hidden lg:block">
                <div className="text-3xl font-bold text-teal-600 mb-1">99.9%</div>
                <div className="text-xs text-slate-600">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#dfeef1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                <Settings className="w-4 h-4 mr-2" />
                Integrated Management
              </div>
              <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-6">
                Streamline Enterprise Operations at Scale
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Modern enterprises require sophisticated management systems to coordinate complex operations, optimize resources, and maintain competitive advantage. Our Enterprise Management Services provide the tools and expertise to orchestrate every aspect of your business seamlessly.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From IT service management to workforce optimization, we deliver integrated solutions that break down silos, improve visibility, and empower your teams to work more effectively.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium shadow-md">ITSM</span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium shadow-md">Workflow Automation</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium shadow-md">Asset Management</span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium shadow-md">Performance Tracking</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="w-12 h-12 mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">50%</div>
                  <div className="text-blue-100 font-medium">Faster Resolution</div>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
                  <Zap className="w-12 h-12 mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">35%</div>
                  <div className="text-teal-100 font-medium">Cost Savings</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
                  <Users className="w-12 h-12 mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">10K+</div>
                  <div className="text-blue-100 font-medium">Users Managed</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
                  <Shield className="w-12 h-12 mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-teal-100 font-medium">Compliance Rate</div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          {/* Visual Showcase */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Workforce Optimization</h3>
                <p className="text-slate-600">Maximize team productivity with intelligent scheduling and resource allocation.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Analytics</h3>
                <p className="text-slate-600">Track KPIs and metrics in real-time to drive continuous improvement.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" 
                  alt="Process Management" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Process Automation</h3>
                <p className="text-slate-600">Automate repetitive tasks and streamline workflows for maximum efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Comprehensive Management Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end solutions designed to optimize every aspect of your enterprise operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div 
                  key={index} 
                  className="bg-[#dfeef1] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-14 h-14 bg-[#122458] rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[#dfeef1]" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#dfeef1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Transform Your Enterprise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Achieve measurable results with solutions built for enterprise scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start space-x-4"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Industry Solutions
            </div>
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Proven Use Cases
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world applications transforming enterprise management across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const images = [
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              ];
              
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={images[index]} 
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#122458] via-[#122458]/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#122458] via-[#164070] to-[#122458]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-poppins text-white mb-6">
            Ready to Optimize Your Enterprise?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our Enterprise Management Services can streamline your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="px-8 py-4 bg-[#dfeef1] text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="/#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
