import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Database, CheckCircle, Zap, Shield, Stethoscope, Briefcase, Shirt, Star, Quote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-900/5 skew-x-12 transform origin-top translate-x-32 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-900/5 text-brand-900 text-xs font-semibold tracking-wide uppercase mb-6 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-accent mr-2"></span>
            Reimagining Enterprise Growth
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold text-brand-900 tracking-tight mb-6 leading-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Build Faster. Automate Smarter.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 to-blue-600">Scale Without Limits.</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            ZetaX provides the complete technology stack for modern businesses. 
            From high-performance websites to AI-driven lead automation and verified data products.
          </p>
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Get Demo <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-900 border border-gray-200 rounded-lg font-semibold hover:border-brand-900 hover:bg-gray-50 transition-all flex items-center justify-center">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Bar */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Trusted by businesses across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 sm:gap-x-14 opacity-70">
            {[
              'Healthcare',
              'D2C Retail',
              'Real Estate',
              'EdTech',
              'Manufacturing',
              'Fashion',
              'Hospitality',
            ].map((sector) => (
              <span
                key={sector}
                className="text-sm sm:text-base font-bold text-gray-500 tracking-tight"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Our Core Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine engineering excellence with business intelligence to deliver solutions that drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-brand-900 group-hover:text-brand-accent transition-colors">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Website Development</h3>
              <p className="text-gray-600 mb-6">
                High-performance, SEO-optimized web applications built with Next.js and React. Designed to convert visitors into customers.
              </p>
              <Link to="/services/website-development" className="text-brand-900 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-brand-900 group-hover:text-brand-accent transition-colors">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Integration</h3>
              <p className="text-gray-600 mb-6">
                Deploy intelligent chatbots and automated workflows powered by Gemini and GPT-4 to handle support and sales 24/7.
              </p>
              <Link to="/services/ai-integration" className="text-brand-900 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore AI <ArrowRight size={16} />
              </Link>
            </div>

            <div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600 group-hover:bg-brand-900 group-hover:text-brand-accent transition-colors">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Automation</h3>
              <p className="text-gray-600 mb-6">
                Automate your sales funnel with WhatsApp, Email, and SMS sequences. Never lose a lead to slow follow-up again.
              </p>
              <Link to="/services/lead-automation" className="text-brand-900 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Automate Sales <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-brand-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-sm font-semibold mb-6">
              Our Products
            </div>
            <h2 className="text-4xl font-bold mb-4">Ready-to-use products built in India</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Four powerful SaaS products solving real business problems — lead generation, healthcare, fashion, and custom workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, name: 'Lead Generator', desc: 'Verified B2B database with city & category filters.', path: '/product/zetax-lead-generator', tag: 'Sales' },
              { icon: Stethoscope, name: 'Doctor Management', desc: 'Complete clinic & hospital management system.', path: '/product/doctor-management', tag: 'Healthcare' },
              { icon: Briefcase, name: 'Custom Business', desc: 'Bespoke ERP, CRM & automation built for you.', path: '/product/custom-business', tag: 'Enterprise' },
              { icon: Shirt, name: 'Virtual Try-On', desc: 'AI clothing fit for e-commerce stores.', path: '/product/virtual-tryon', tag: 'AI' },
            ].map((product) => (
              <Link
                key={product.name}
                to={product.path}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-brand-accent/40 transition-all backdrop-blur-sm flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="bg-brand-accent/20 p-3 rounded-xl group-hover:bg-brand-accent group-hover:text-brand-900 transition-colors">
                    <product.icon size={22} className="text-brand-accent group-hover:text-brand-900" />
                  </div>
                  <span className="text-[10px] font-bold bg-white/10 px-2 py-1 rounded-full text-white/70 uppercase tracking-wider">{product.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">{product.desc}</p>
                <div className="flex items-center gap-1 text-brand-accent text-sm font-semibold group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center px-6 py-3 bg-brand-accent text-brand-900 rounded-lg font-bold hover:bg-white transition-colors">
              View All Products <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-brand-accent/20 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Customer Stories
            </span>
            <h2 className="text-3xl font-bold text-brand-900 mb-3">What our customers say</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Real feedback from Indian businesses using ZetaX products and custom solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "ZetaX rebuilt our clinic management from scratch in 5 weeks. Patient bookings went up 40% just from the WhatsApp reminders alone.",
                name: 'Dr. R. Sharma',
                role: 'Owner, Multi-Speciality Clinic',
                city: 'Indore',
                rating: 5,
              },
              {
                quote: "We tried 3 lead-data providers before ZetaX. This is the only one with accurate Indian phone numbers and clean exports straight to our CRM.",
                name: 'A. Verma',
                role: 'Founder, B2B Agency',
                city: 'Mumbai',
                rating: 5,
              },
              {
                quote: "Their custom inventory dashboard saved my team 15+ hours every week. The dedicated team model gave us senior devs without the senior overhead.",
                name: 'N. Patel',
                role: 'COO, D2C Fashion Brand',
                city: 'Ahmedabad',
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl transition-shadow relative"
              >
                <Quote className="absolute top-5 right-5 text-brand-accent/20" size={36} />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-brand-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.role} · {t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZETAX */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Why Businesses Trust ZetaX</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
                { title: 'Enterprise Security', desc: 'Bank-grade encryption and compliance for all data handling.', icon: Shield },
                { title: 'Scalable Architecture', desc: 'Built on next-gen tech stacks that grow with your business.', icon: Cpu },
                { title: '24/7 Expert Support', desc: 'Direct access to engineers, not just support tickets.', icon: CheckCircle },
                { title: 'Result Driven', desc: 'We focus on ROI. If it doesn\'t add value, we don\'t build it.', icon: Zap }
             ].map((item, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                     <item.icon className="text-brand-900 mb-4" size={32} />
                     <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-brand-900 mb-6">Ready to transform your business?</h2>
          <p className="text-gray-600 mb-8 text-lg">Indian businesses across healthcare, retail, and SaaS trust ZetaX to automate operations and drive revenue.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-brand-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
              Start Your Project
            </Link>
            <Link to="/products" className="px-8 py-3 bg-white text-brand-900 border border-gray-200 rounded-lg font-semibold hover:border-brand-900 transition-colors">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;