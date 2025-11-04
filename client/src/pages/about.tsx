import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Users, Target, Award, Globe, TrendingUp, Shield, Lightbulb, Heart } from "lucide-react";

export default function About() {
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
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              About 6VC Consulting
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-[#dfeef1] mb-6 leading-tight" data-testid="about-hero-title">
              Empowering Businesses Through
              <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Technology Excellence
              </span>
            </h1>
            <p className="text-xl text-[#dfeef1]/80 max-w-4xl mx-auto leading-relaxed" data-testid="about-hero-description">
              For over 15 years, we've been at the forefront of enterprise technology solutions, helping Fortune 100 companies transform their vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#dfeef1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-6" data-testid="our-story-title">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p data-testid="story-paragraph-1">
                  Founded in 2010, 6VC Consulting emerged from a simple yet powerful vision: to bridge the gap between cutting-edge technology and business transformation. What started as a small team of passionate technologists has grown into a trusted partner for enterprises worldwide.
                </p>
                <p data-testid="story-paragraph-2">
                  Our journey has been defined by our unwavering commitment to excellence, innovation, and client success. From early cloud migration projects to today's AI-powered solutions, we've consistently stayed ahead of the technology curve, ensuring our clients gain a competitive advantage in their industries.
                </p>
                <p data-testid="story-paragraph-3">
                  Today, we're proud to serve Fortune 100 companies across multiple sectors, delivering solutions that drive measurable growth, enhance security, and unlock new possibilities through technology.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300" data-testid="milestone-founded">
                <div className="text-4xl font-bold text-blue-600 mb-2">2010</div>
                <p className="text-slate-600 font-medium">Company Founded</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300" data-testid="milestone-projects">
                <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                <p className="text-slate-600 font-medium">Projects Delivered</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300" data-testid="milestone-clients">
                <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                <p className="text-slate-600 font-medium">Enterprise Clients</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300" data-testid="milestone-team">
                <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
                <p className="text-slate-600 font-medium">Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center" data-testid="mission-card">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-4">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To empower businesses with enterprise-grade technology solutions that drive innovation, enhance security, and deliver measurable results through strategic consulting and implementation excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center" data-testid="vision-card">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-4">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To be the world's most trusted technology partner, recognized for transforming enterprises through innovative solutions, exceptional service, and lasting partnerships that stand the test of time.
              </p>
            </div>

            {/* Values */}
            <div className="text-center" data-testid="values-card">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-4">Our Values</h3>
              <p className="text-slate-700 leading-relaxed">
                Excellence, integrity, innovation, and client success form the foundation of everything we do. We believe in transparent partnerships and delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-[#dfeef1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-6" data-testid="differentiators-title">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our unique approach combines technical expertise, industry knowledge, and a client-first mindset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-testid="differentiator-expertise">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-4">Proven Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                15+ years of experience delivering complex enterprise solutions across industries with certified professionals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-testid="differentiator-innovation">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-4">Innovation First</h3>
              <p className="text-slate-600 leading-relaxed">
                We leverage cutting-edge technologies including AI, cloud, and automation to keep you ahead of the curve.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-testid="differentiator-global">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-4">Global Reach</h3>
              <p className="text-slate-600 leading-relaxed">
                24/7 support with teams across multiple time zones, ensuring seamless service delivery worldwide.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" data-testid="differentiator-security">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-4">Security Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                ISO 27001 certified with enterprise-grade security standards built into every solution we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Leadership
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-6" data-testid="leadership-title">
              Led by Industry Veterans
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in technology, business transformation, and strategic consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center group" data-testid="leader-sarah">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl font-bold text-white">SC</span>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-2">Sarah Chen</h3>
              <p className="text-blue-600 font-medium mb-3">CEO & Co-Founder</p>
              <p className="text-slate-600 leading-relaxed">
                Former VP of Technology at Fortune 500 companies with 20+ years in enterprise solutions and digital transformation.
              </p>
            </div>

            <div className="text-center group" data-testid="leader-michael">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl font-bold text-white">MR</span>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-2">Michael Rodriguez</h3>
              <p className="text-purple-600 font-medium mb-3">CTO & Co-Founder</p>
              <p className="text-slate-600 leading-relaxed">
                AI and cloud architecture expert with extensive experience scaling technology platforms for global enterprises.
              </p>
            </div>

            <div className="text-center group" data-testid="leader-emily">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl font-bold text-white">EP</span>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-[hsl(220,91%,15%)] mb-2">Emily Patel</h3>
              <p className="text-orange-600 font-medium mb-3">VP of Cybersecurity</p>
              <p className="text-slate-600 leading-relaxed">
                Certified security expert with 15+ years protecting enterprise infrastructure and leading compliance initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[hsl(220,91%,15%)] to-[hsl(220,91%,20%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.2)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-[#dfeef1] mb-6" data-testid="cta-title">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#dfeef1]/80 mb-10 leading-relaxed">
            Join hundreds of enterprise clients who trust 6VC Consulting to accelerate their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              data-testid="button-contact"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
