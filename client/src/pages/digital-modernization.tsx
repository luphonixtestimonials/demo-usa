
import { ArrowLeft, Zap, CheckCircle2, Lightbulb } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const features = [
  "Legacy system assessment and planning - Comprehensive analysis of existing systems, technical debt evaluation, dependency mapping, and detailed modernization roadmap with risk mitigation strategies",
  "Microservices architecture design - Transform monolithic applications into scalable microservices with proper domain boundaries, service mesh implementation, and event-driven architecture patterns",
  "API-first development approach - Design RESTful and GraphQL APIs with OpenAPI specifications, versioning strategies, rate limiting, and comprehensive documentation for seamless integration",
  "Cloud-native application migration - Refactor legacy applications for cloud platforms using 12-factor app principles, containerization, and cloud-native services for optimal performance",
  "Mobile-first responsive design - Create adaptive interfaces that work seamlessly across devices with progressive enhancement, accessibility compliance, and optimal mobile user experiences",
  "Progressive web applications (PWA) - Build fast, reliable, and engaging web apps with offline capabilities, push notifications, and app-like experiences that work on any platform"
];

const benefits = [
  "Reduce technical debt by 60% through systematic refactoring and modern architecture patterns",
  "Improve system performance by 3x with optimized code, caching strategies, and modern frameworks",
  "Enhance user experience and satisfaction with intuitive interfaces and sub-second response times",
  "Lower maintenance costs by 40-50% with cleaner code, automated testing, and reduced complexity",
  "Enable faster feature deployment with continuous delivery and modular architecture",
  "Future-proof your technology stack with modern languages, frameworks, and cloud-native services",
  "Increase developer productivity by 50% with modern tools and streamlined development workflows",
  "Improve system scalability to handle 10x traffic growth without architecture changes",
  "Reduce security vulnerabilities by 70% with modern security practices and automated scanning",
  "Accelerate innovation with ability to adopt new technologies and integrate third-party services"
];

export default function DigitalModernization() {
  return (
    <div className="min-h-screen bg-[#dfeef1]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#122458] via-[#164070] to-[#122458] relative overflow-hidden">
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
                  <Zap className="w-10 h-10 text-blue-300" />
                </div>
                <h1 className="text-5xl font-bold text-white font-poppins">Digital Modernization</h1>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform legacy systems into modern, efficient digital platforms that drive business growth and competitive advantage.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                  Start Modernizing
                </button>
                <button className="px-8 py-4 border-2 border-blue-300/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Modernization Assessment
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl backdrop-blur-sm border border-blue-400/20 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop" 
                  alt="Digital Transformation" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Modernization Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive approach to transforming your technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#dfeef1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Business Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tangible results that drive business value
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
              <Lightbulb className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Modernization in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real transformations delivering real results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
                  alt="Legacy Migration" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Legacy Migration</h3>
                <p className="text-slate-600">Successfully migrated 20-year-old mainframe systems to modern cloud architecture.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" 
                  alt="API Development" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">API Integration</h3>
                <p className="text-slate-600">Built modern API layer enabling seamless third-party integrations.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop" 
                  alt="Mobile First" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile-First Design</h3>
                <p className="text-slate-600">Transformed desktop-only applications into responsive mobile experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Ready to Modernize Your Systems?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's transform your legacy infrastructure into a modern digital platform
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Request Modernization Roadmap
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
