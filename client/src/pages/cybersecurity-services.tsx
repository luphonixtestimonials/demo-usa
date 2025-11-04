
import { ArrowLeft, Shield, CheckCircle2, Zap } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const features = [
  "Security audits and penetration testing - Comprehensive vulnerability assessments, ethical hacking, and security audits following OWASP, NIST, and industry best practices to identify and remediate vulnerabilities before attackers exploit them",
  "Threat detection and response - 24/7 monitoring with SIEM, EDR, and advanced threat intelligence to detect, analyze, and respond to security incidents in real-time with mean time to response under 15 minutes",
  "Security Operations Center (SOC) - Dedicated team of security analysts monitoring your infrastructure 24/7/365, correlating events, investigating threats, and coordinating incident response",
  "Compliance and regulatory support - Achieve and maintain SOC 2, ISO 27001, PCI DSS, HIPAA, and other certifications with gap assessments, remediation planning, and continuous compliance monitoring",
  "Identity and access management (IAM) - Implement zero-trust security with MFA, SSO, role-based access control, privileged access management, and identity governance to prevent unauthorized access",
  "Security awareness training - Reduce human error by 70% with engaging security training, phishing simulations, and continuous education programs that build a security-conscious culture"
];

const benefits = [
  "Reduce security incidents by 80% with proactive monitoring and threat prevention",
  "Achieve compliance certification (SOC 2, ISO 27001) and avoid regulatory fines",
  "24/7 threat monitoring and response with average detection time under 5 minutes",
  "Protect sensitive data and intellectual property with encryption and access controls",
  "Minimize downtime from attacks with incident response plans and disaster recovery",
  "Build customer trust and confidence with visible security certifications and practices",
  "Prevent data breaches averaging $4.45M per incident with comprehensive security controls",
  "Reduce cyber insurance premiums by 20-30% with demonstrable security posture",
  "Protect brand reputation and avoid headline-making security incidents",
  "Enable secure digital transformation and cloud adoption with confidence"
];

export default function CybersecurityServices() {
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
                  <Shield className="w-10 h-10 text-blue-300" />
                </div>
                <h1 className="text-5xl font-bold text-white font-poppins">Cybersecurity Services</h1>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Protect your digital assets with comprehensive security solutions and threat management that safeguard your business 24/7.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                  Secure Your Business
                </button>
                <button className="px-8 py-4 border-2 border-blue-300/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Security Audit
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl backdrop-blur-sm border border-blue-400/20 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=600&fit=crop" 
                  alt="Cybersecurity" 
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
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multi-layered security approach to protect against evolving threats
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
              Security Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Protect your business and build trust with customers
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
              Security Solutions
            </div>
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Protection in Practice
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world security implementations keeping businesses safe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop" 
                  alt="AI-Powered Threat Detection and Response" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Threat Detection</h3>
                <p className="text-slate-600 mb-3">AI-powered threat detection using SIEM (Splunk, QRadar), EDR (CrowdStrike, SentinelOne), and advanced threat intelligence to identify and neutralize attacks in real-time.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Machine learning anomaly detection</li>
                  <li>• Behavioral analytics & user profiling</li>
                  <li>• Automated threat hunting</li>
                  <li>• Mean time to detect: &lt;5 minutes</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop" 
                  alt="Compliance and Regulatory Frameworks" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Management</h3>
                <p className="text-slate-600 mb-3">Achieve and maintain SOC 2 Type II, ISO 27001, PCI DSS, HIPAA, GDPR compliance with comprehensive security controls, documentation, and continuous monitoring.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Gap assessments & remediation plans</li>
                  <li>• Policy & procedure development</li>
                  <li>• Automated compliance scanning</li>
                  <li>• Annual audits & certifications</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" 
                  alt="Incident Response and Forensics" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Incident Response</h3>
                <p className="text-slate-600 mb-3">Rapid incident response teams with mean time to response under 15 minutes, minimizing impact through containment, eradication, and recovery procedures.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 24/7 SOC monitoring & response</li>
                  <li>• Forensic investigation & analysis</li>
                  <li>• Playbook-driven response workflows</li>
                  <li>• Post-incident reporting & lessons learned</li>
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
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our security experts protect your business from cyber threats
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Schedule Security Assessment
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
