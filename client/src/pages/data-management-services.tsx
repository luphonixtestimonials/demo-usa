
import { ArrowLeft, Database, CheckCircle2, Zap } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const features = [
  "Data architecture and modeling - Design scalable data architectures with logical and physical data models, normalization strategies, and optimal database schema for performance and maintainability",
  "Master data management (MDM) - Create single sources of truth for critical business entities (customers, products, locations) with data synchronization, deduplication, and golden record creation",
  "Data quality and cleansing - Implement automated data validation, standardization, and enrichment processes that improve data accuracy from 60% to 95%+ with continuous monitoring",
  "Data governance frameworks - Establish policies, procedures, and controls for data ownership, stewardship, lifecycle management, and access controls across the enterprise",
  "GDPR and compliance management - Ensure regulatory compliance with data privacy laws (GDPR, CCPA, HIPAA) through data classification, consent management, and automated audit trails",
  "Data warehouse and lake design - Build modern data platforms combining structured warehouses and unstructured data lakes with ETL/ELT pipelines, data cataloging, and analytics capabilities"
];

const benefits = [
  "Improve data accuracy from 60% to 95%+ with automated validation and quality monitoring",
  "Reduce data redundancy and storage costs by 40% through deduplication and efficient architecture",
  "Enable faster data-driven decisions with centralized, trusted data accessible in real-time",
  "Ensure regulatory compliance and avoid fines up to 4% of revenue with proactive governance",
  "Enhance data security and privacy with encryption, access controls, and audit logging",
  "Create single source of truth eliminating conflicting reports and enabling enterprise-wide analytics",
  "Reduce time spent searching for data by 60% with comprehensive data catalogs and metadata",
  "Improve customer experience with 360-degree views and accurate, up-to-date information",
  "Increase operational efficiency by 35% with automated data workflows and self-service access",
  "Enable advanced analytics and AI initiatives with clean, well-organized, governed data"
];

export default function DataManagementServices() {
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
                  <Database className="w-10 h-10 text-blue-300" />
                </div>
                <h1 className="text-5xl font-bold text-white font-poppins">Data Management Services</h1>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Organize, secure, and leverage your data assets for strategic business advantages with comprehensive data management solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-blue-300/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Data Assessment
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl backdrop-blur-sm border border-blue-400/20 p-8">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop" 
                  alt="Data Management" 
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
              Comprehensive Data Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end data management capabilities to maximize your data value
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
              Business Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform data chaos into strategic assets
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
              Solutions in Action
            </div>
            <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
              Data Management Use Cases
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how proper data management transforms business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
                  alt="Data Quality Management and Cleansing" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Quality Management</h3>
                <p className="text-slate-600 mb-3">Implement automated data cleansing, validation, standardization, and enrichment using tools like Informatica, Talend, and custom Python/Spark pipelines.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Data profiling & quality scorecards</li>
                  <li>• Deduplication & matching algorithms</li>
                  <li>• Real-time validation rules</li>
                  <li>• Data quality monitoring dashboards</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" 
                  alt="Data Governance Framework and Policies" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Governance</h3>
                <p className="text-slate-600 mb-3">Establish comprehensive governance frameworks with data catalogs (Collibra, Alation), metadata management, data lineage tracking, and privacy compliance (GDPR, CCPA).</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Data stewardship & ownership models</li>
                  <li>• Access control & classification</li>
                  <li>• Automated audit trails & compliance</li>
                  <li>• Data lifecycle management</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" 
                  alt="Modern Data Warehouse and Lake Architecture" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data Platforms</h3>
                <p className="text-slate-600 mb-3">Design modern data warehouses (Snowflake, Redshift, BigQuery) and data lakes (S3, ADLS, GCS) with ELT/ETL pipelines using Airflow, dbt, and Databricks.</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Dimensional modeling & star schemas</li>
                  <li>• Real-time streaming (Kafka, Kinesis)</li>
                  <li>• Data lake house architecture (Delta Lake)</li>
                  <li>• Performance optimization & partitioning</li>
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
            Ready to Master Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build a comprehensive data management strategy for your organization
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Schedule Data Assessment
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
