
import { ArrowLeft, Cloud, CheckCircle2, Zap } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const features = [
  "AWS, Azure, and Google Cloud expertise - Certified architects and engineers with deep experience across all major cloud platforms, including advanced services like AWS Lambda, Azure Functions, Google Cloud Run, and proprietary offerings",
  "Cloud-native application development - Build modern, scalable applications using microservices, containerization, and cloud-native patterns that leverage platform capabilities for maximum performance and reliability",
  "Kubernetes and container orchestration - Deploy and manage containerized applications with Kubernetes (K8s), including EKS, AKS, GKE, service mesh implementation, auto-scaling, and advanced deployment strategies",
  "Serverless architecture implementation - Design event-driven, serverless solutions that scale automatically, reduce costs by 60%, and eliminate infrastructure management overhead",
  "Multi-cloud and hybrid cloud strategies - Avoid vendor lock-in with multi-cloud architectures, integrate on-premise systems with cloud resources, and implement disaster recovery across multiple providers",
  "Cloud cost optimization - Reduce cloud spending by 30-50% through rightsizing, reserved instances, spot instances, auto-scaling policies, and continuous cost monitoring"
];

const benefits = [
  "Reduce infrastructure costs by up to 40% with optimized cloud architecture and pay-as-you-go pricing",
  "Scale resources on-demand automatically to handle traffic spikes without manual intervention",
  "Improve application reliability to 99.99% uptime with multi-zone deployments and auto-healing",
  "Accelerate deployment cycles from weeks to hours with CI/CD pipelines and infrastructure as code",
  "Enhanced disaster recovery with automated backups, multi-region replication, and RTO under 1 hour",
  "Global reach with edge computing and CDN integration for sub-50ms response times worldwide",
  "Increase development velocity by 3x with managed services and serverless computing",
  "Improve security posture with cloud-native security tools, compliance certifications, and encryption",
  "Enable innovation with access to cutting-edge services like AI/ML, IoT, and big data analytics",
  "Reduce time-to-market for new features from months to weeks with cloud agility"
];

export default function CloudServices() {
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
                  <Cloud className="w-10 h-10 text-blue-300" />
                </div>
                <h1 className="text-5xl font-bold text-white font-poppins">Cloud Services</h1>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Scale your operations with robust cloud infrastructure and modern deployment strategies that enable business agility and innovation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-blue-300/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl backdrop-blur-sm border border-blue-400/20 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop" 
                  alt="Cloud Infrastructure" 
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
              Comprehensive Cloud Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
              From migration to optimization, we handle every aspect of your cloud journey with expertise across AWS, Azure, and Google Cloud Platform
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-semibold">AWS Certified</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold">Azure Expert</span>
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold">Google Cloud Partner</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-semibold">Kubernetes Certified</span>
            </div>
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
              Cloud Solutions Showcase
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how cloud infrastructure transforms different aspects of your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop" 
                  alt="Cloud Migration Strategy and Execution" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Migration</h3>
                <p className="text-slate-600 mb-3">Seamless transition from on-premise to cloud infrastructure with zero downtime using lift-and-shift, re-platforming, or cloud-native refactoring strategies.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• AWS Migration Hub & Azure Migrate</li>
                  <li>• Database migration (DMS, Dataflow)</li>
                  <li>• Application dependency mapping</li>
                  <li>• Rollback & disaster recovery plans</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop" 
                  alt="DevOps and CI/CD Automation" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">DevOps Automation</h3>
                <p className="text-slate-600 mb-3">Streamline deployments with comprehensive CI/CD pipelines using Jenkins, GitLab CI, GitHub Actions, and infrastructure as code with Terraform and CloudFormation.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Automated testing & quality gates</li>
                  <li>• Blue-green & canary deployments</li>
                  <li>• Container orchestration (K8s, ECS)</li>
                  <li>• Monitoring & observability (Prometheus)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop" 
                  alt="Cloud Security and Compliance" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Security</h3>
                <p className="text-slate-600 mb-3">Enterprise-grade security with compliance frameworks including SOC 2, ISO 27001, HIPAA, and PCI DSS using cloud-native security tools and best practices.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• IAM & zero-trust architecture</li>
                  <li>• Encryption at rest & in transit</li>
                  <li>• Security groups & network policies</li>
                  <li>• Automated compliance scanning</li>
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts guide your cloud transformation journey
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Schedule a Cloud Assessment
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
