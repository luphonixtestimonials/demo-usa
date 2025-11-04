
import { ArrowLeft, Settings, CheckCircle2, Zap } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const features = [
  "Technology strategy and planning - Develop comprehensive IT roadmaps aligned with business objectives, including technology assessments, architecture planning, investment prioritization, and multi-year transformation strategies",
  "Program and project management - Expert PMO leadership using Agile, Scrum, and traditional methodologies to deliver complex initiatives on-time and on-budget with full risk management and stakeholder coordination",
  "Organizational change management - Drive successful adoption of new technologies and processes with structured change management, training programs, communication strategies, and resistance management",
  "Business process optimization - Analyze and redesign workflows using Lean Six Sigma and process mining to eliminate waste, reduce cycle times by 40%, and improve quality",
  "Vendor selection and management - Navigate complex RFP processes, evaluate vendors objectively, negotiate favorable contracts, and manage vendor performance throughout engagement lifecycle",
  "Digital transformation consulting - Guide end-to-end transformation journeys from strategy through execution, leveraging cloud, AI, automation, and modern practices to achieve business outcomes"
];

const benefits = [
  "Accelerate project delivery by 40% with experienced program management and proven methodologies",
  "Reduce project risks and cost overruns by 60% with proactive risk management and governance",
  "Ensure stakeholder alignment across business units with effective communication and collaboration",
  "Maximize ROI on technology investments with strategic planning and value-focused execution",
  "Build internal capabilities through knowledge transfer, training, and embedded consulting approaches",
  "Drive successful adoption with change management achieving 85%+ user adoption rates",
  "Avoid costly mistakes with expert guidance and industry best practices",
  "Access specialized skills without long-term hiring commitments",
  "Accelerate time-to-value from 18 months to 6-9 months for major initiatives",
  "Maintain business continuity during transformations with minimal disruption"
];

export default function ProfessionalServices() {
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
                  <Settings className="w-10 h-10 text-blue-300" />
                </div>
                <h1 className="text-5xl font-bold text-white font-poppins">Professional Services</h1>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Expert consulting and program management to ensure successful delivery of complex technology initiatives and digital transformation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                  Engage Our Experts
                </button>
                <button className="px-8 py-4 border-2 border-blue-300/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Strategic Assessment
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl backdrop-blur-sm border border-blue-400/20 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop" 
                  alt="Professional Consulting" 
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
              Expert Consulting Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strategic guidance to align technology with business objectives
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
              Consulting Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deliver successful outcomes with expert guidance
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
              Engagement Models
            </div>
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              How We Deliver Value
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible engagement models tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop" 
                  alt="Technology Strategy and Roadmap Development" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy Consulting</h3>
                <p className="text-slate-600 mb-3">Develop comprehensive 3-5 year technology roadmaps using frameworks like TOGAF, Zachman, and value stream mapping to align IT investments with business objectives and competitive strategy.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Current state assessment & gap analysis</li>
                  <li>• Technology trend analysis & impact</li>
                  <li>• Business capability modeling</li>
                  <li>• Investment prioritization & TCO analysis</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop" 
                  alt="Enterprise Program and Project Management" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Program Management</h3>
                <p className="text-slate-600 mb-3">Expert PMO leadership using Agile (SAFe, Scrum), Waterfall, and hybrid methodologies with tools like Jira, Azure DevOps, and MS Project ensuring on-time, on-budget delivery.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Portfolio & resource management</li>
                  <li>• Risk & issue tracking (RAID logs)</li>
                  <li>• Stakeholder communication plans</li>
                  <li>• Quality assurance & governance</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" 
                  alt="Organizational Change Management and Adoption" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Change Management</h3>
                <p className="text-slate-600 mb-3">Drive successful adoption using ADKAR and Prosci methodologies with comprehensive training programs, communication strategies, and resistance management achieving 85%+ user adoption.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Impact assessment & stakeholder analysis</li>
                  <li>• Training needs analysis & delivery</li>
                  <li>• Change champion networks</li>
                  <li>• Adoption metrics & feedback loops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Ready to Drive Success?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with our experts to deliver exceptional technology outcomes
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Schedule Strategy Session
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
