
import { useEffect } from "react";
import { ArrowLeft, Lightbulb, CheckCircle2, TrendingUp, Zap, Database, Brain } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function AIAnalyticsService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: Brain,
      title: "Machine Learning Implementation",
      description: "Custom ML models tailored to your business needs, from predictive analytics to natural language processing. We develop supervised, unsupervised, and reinforcement learning solutions that adapt to your specific use cases, including classification, regression, clustering, and recommendation systems."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends, identify patterns, and make data-driven decisions with advanced predictive modeling. Our solutions leverage time series analysis, forecasting algorithms, and statistical models to predict customer behavior, market trends, demand patterns, and business outcomes with high accuracy."
    },
    {
      icon: Database,
      title: "Business Intelligence Dashboards",
      description: "Interactive dashboards that transform raw data into actionable insights for stakeholders at all levels. We create intuitive, real-time visualizations using Power BI, Tableau, and custom solutions that consolidate data from multiple sources, enabling executive decision-making and operational monitoring."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows using AI-powered solutions to increase efficiency. Our intelligent automation combines RPA (Robotic Process Automation) with AI/ML to handle document processing, data entry, customer service, and complex decision-making processes with minimal human intervention."
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40% through intelligent automation and optimization",
    "Improve decision-making accuracy with data-driven insights and predictive models",
    "Gain competitive advantage through advanced analytics and market intelligence",
    "Accelerate time-to-market for new initiatives with rapid prototyping and testing",
    "Scale operations without proportional cost increases using AI-powered solutions",
    "Enhance customer experience with personalization and intelligent recommendations",
    "Identify new revenue opportunities through pattern recognition and trend analysis",
    "Mitigate risks with early warning systems and anomaly detection",
    "Optimize resource allocation and workforce planning with predictive analytics",
    "Achieve ROI within 6-12 months with measurable business impact"
  ];

  const useCases = [
    {
      title: "Customer Behavior Analysis",
      description: "Understand customer patterns and preferences to optimize marketing strategies and improve retention rates. Our advanced analytics solutions track customer journeys, segment audiences, predict churn, and provide personalized recommendations that increase engagement and lifetime value by up to 35%."
    },
    {
      title: "Fraud Detection & Prevention",
      description: "Identify anomalies and suspicious activities in real-time to protect your business and customers. Using advanced machine learning algorithms, we detect fraudulent transactions, account takeovers, and security threats with 99%+ accuracy while minimizing false positives, saving millions in potential losses."
    },
    {
      title: "Supply Chain Optimization",
      description: "Predict demand, optimize inventory, and streamline logistics with AI-powered forecasting. Our solutions analyze historical data, market trends, and external factors to optimize stock levels, reduce waste by 25%, improve delivery times, and ensure products are available when and where customers need them."
    },
    {
      title: "Predictive Maintenance",
      description: "Reduce downtime and maintenance costs by predicting equipment failures before they occur. Our IoT-enabled AI models monitor equipment health in real-time, schedule proactive maintenance, extend asset lifespan by 20%, and reduce unplanned downtime by up to 50%, ensuring continuous operations."
    },
    {
      title: "Sentiment Analysis & Social Listening",
      description: "Monitor brand reputation and customer sentiment across social media, reviews, and feedback channels. Our NLP-powered solutions analyze thousands of conversations in real-time, identify trending topics, detect crises early, and provide actionable insights to improve products and customer service."
    },
    {
      title: "Revenue Forecasting & Pricing Optimization",
      description: "Maximize revenue with dynamic pricing strategies and accurate sales forecasting. Our AI models analyze market conditions, competitor pricing, demand patterns, and customer willingness to pay to recommend optimal pricing that increases margins by 10-15% while maintaining customer satisfaction."
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
                  <Lightbulb className="w-10 h-10 text-blue-300" />
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-[#dfeef1]/10 backdrop-blur-md rounded-full border border-[#dfeef1]/20 text-[#dfeef1]/90 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Advanced AI Solutions
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold font-poppins text-white mb-6 leading-tight">
                AI and Analytics Services
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Harness the power of artificial intelligence and data analytics to unlock insights, automate processes, and drive intelligent decision-making across your organization.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">ML-Powered Insights</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Real-time Analytics</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Automated Workflows</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                  alt="AI Analytics Dashboard" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122458]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#dfeef1]/95 backdrop-blur-xl rounded-xl p-4 border border-[#dfeef1]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#122458] rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-[#dfeef1]" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">AI-Driven Analytics</div>
                          <div className="text-xs text-slate-500">Predictive Intelligence</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">+245%</div>
                        <div className="text-xs text-slate-500">Growth Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-blue-100 hidden lg:block">
                <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-xs text-slate-600">Accuracy Rate</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-2 border-teal-100 hidden lg:block">
                <div className="text-3xl font-bold text-teal-600 mb-1">24/7</div>
                <div className="text-xs text-slate-600">AI Monitoring</div>
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
                <Brain className="w-4 h-4 mr-2" />
                Strategic Intelligence
              </div>
              <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-6">
                Transform Data Into Strategic Advantage
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                In today's data-driven world, organizations that effectively leverage AI and analytics gain a significant competitive edge. Our AI and Analytics services help you extract meaningful insights from your data, automate complex processes, and make informed decisions that drive business growth.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine cutting-edge machine learning algorithms with deep industry expertise to deliver solutions that are not only technically advanced but also aligned with your business objectives.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium shadow-md">Deep Learning</span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium shadow-md">NLP</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium shadow-md">Computer Vision</span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium shadow-md">Predictive Models</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="w-12 h-12 mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-blue-100 font-medium">Prediction Accuracy</div>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
                  <Zap className="w-12 h-12 mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">40%</div>
                  <div className="text-teal-100 font-medium">Cost Reduction</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
                  <Database className="w-12 h-12 mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">3x</div>
                  <div className="text-blue-100 font-medium">Faster Insights</div>
                </div>
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-300">
                  <Brain className="w-12 h-12 mb-4 opacity-80" />
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-teal-100 font-medium">Automated Analysis</div>
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" 
                  alt="Data Visualization" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Interactive Dashboards</h3>
                <p className="text-slate-600">Real-time data visualization that turns complex metrics into actionable insights.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop" 
                  alt="Machine Learning" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">ML Models</h3>
                <p className="text-slate-600">Custom-trained machine learning models tailored to your specific business needs.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
                  alt="Analytics Platform" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Analytics</h3>
                <p className="text-slate-600">Sophisticated analysis tools that uncover hidden patterns and opportunities.</p>
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
              Our Core Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI and analytics solutions tailored to your unique business challenges
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
              Business Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Measurable impact on your bottom line and operational efficiency
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
              Industry Applications
            </div>
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how AI and analytics can transform different aspects of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const images = [
                "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
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
                        <Brain className="w-6 h-6 text-white" />
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
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our AI and Analytics services can drive innovation and growth for your business.
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
