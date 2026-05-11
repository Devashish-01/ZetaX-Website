import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code, Cpu, Database, Zap, Shield,
  Stethoscope, Briefcase, Shirt, Star, Quote, CheckCircle,
  TrendingUp, Clock, Users,
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════════════
          HERO — dark, premium, motto front and centre
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-brand-900 text-white min-h-screen flex items-center overflow-hidden">

        {/* Background decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#a3e635 1px, transparent 1px), linear-gradient(90deg, #a3e635 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Giant background motto — watermark effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[180px] sm:text-[240px] lg:text-[320px] font-black text-white/[0.025] leading-none tracking-tighter whitespace-nowrap">
            ×∞
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-8 opacity-0 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              Multiply by Infinite
            </div>

            {/* Main headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Your business,<br />
              <span className="text-brand-accent">multiplied</span>
              <span className="text-white/40 mx-3">×</span>
              <span className="text-white">infinite.</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              ZetaX builds software that doesn't just help you work — it multiplies what you're capable of.
              From a clinic in Indore to a D2C brand in Mumbai, every product we ship carries one promise: <span className="text-white/90 font-semibold">infinite scale, zero wasted effort.</span>
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-lg shadow-brand-accent/20 text-base"
              >
                Get a Free Demo <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/15 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-base"
              >
                Browse Products
              </Link>
            </div>

            {/* Quick stat pills */}
            <div
              className="flex flex-wrap gap-4 mt-14 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {[
                { value: '80+', label: 'Projects delivered' },
                { value: '4', label: 'SaaS products live' },
                { value: 'PAN India', label: 'Serving businesses' },
                { value: '100%', label: 'Client satisfaction' },
              ].map((s) => (
                <div key={s.label} className="border border-white/10 bg-white/5 rounded-xl px-5 py-3">
                  <span className="block text-xl font-black text-brand-accent">{s.value}</span>
                  <span className="text-xs text-white/50 mt-0.5 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-8 bg-white/50 rounded-full" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MANIFESTO STRIP — "Multiply by Infinite" explained
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-accent overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-brand-900/50 mb-4">Our philosophy</p>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-900 leading-tight mb-6">
                Not just tools.<br />
                <em className="not-italic">Multipliers.</em>
              </h2>
              <p className="text-brand-900/70 text-lg leading-relaxed">
                The Greek letter <strong>Zeta (Z)</strong> represents an unknown multiplier. The <strong>X</strong> is multiplication itself.
                Together, <strong>ZetaX = multiply by anything</strong> — your leads, your patients, your revenue, your reach.
                <br /><br />
                We don't build software that does a task. We build software that multiplies what a human can do in a day — then does it <em>infinitely.</em>
              </p>
            </div>

            {/* Visual: ×∞ equation */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="text-center">
                <div className="text-8xl sm:text-9xl font-black text-brand-900 leading-none tracking-tighter">
                  Z × ∞
                </div>
                <div className="mt-4 border-t-2 border-brand-900/20 pt-4">
                  <p className="text-sm font-bold text-brand-900/60 uppercase tracking-widest">
                    Zeta × Infinite = ZetaX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TRUSTED BY
      ══════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Trusted by businesses across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 sm:gap-x-14">
            {['Healthcare', 'D2C Retail', 'Real Estate', 'EdTech', 'Manufacturing', 'Fashion', 'Hospitality'].map((sector) => (
              <span key={sector} className="text-sm font-bold text-gray-400 uppercase tracking-wider hover:text-brand-900 transition-colors cursor-default">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT WE DO — 3 capabilities
      ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 block">What we do</span>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-900 leading-tight">
                Three services.<br />One obsession.
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              We engineer technology that multiplies the output of every team member, every hour of the day — so your business grows even while you sleep.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                label: '01',
                title: 'Website Development',
                desc: 'High-performance, SEO-optimised web apps built to convert visitors into customers. From landing pages to full SaaS platforms.',
                link: '/services/website-development',
                cta: 'Learn more',
                color: 'group-hover:bg-blue-600',
              },
              {
                icon: Cpu,
                label: '02',
                title: 'AI Integration',
                desc: 'Deploy intelligent chatbots, lead qualifiers, and reply assistants powered by GPT-4 and Gemini — working 24/7 so your team doesn\'t have to.',
                link: '/services/ai-integration',
                cta: 'Explore AI',
                color: 'group-hover:bg-purple-600',
              },
              {
                icon: Zap,
                label: '03',
                title: 'Lead Automation',
                desc: 'WhatsApp, Email, and SMS sequences triggered the moment a lead enters your funnel. Never lose a prospect to slow follow-up again.',
                link: '/services/lead-automation',
                cta: 'Automate Sales',
                color: 'group-hover:bg-green-600',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-brand-accent transition-colors duration-300" />
                <span className="text-xs font-black text-gray-200 mb-6 block tracking-widest">{s.label}</span>
                <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-600 ${s.color} group-hover:text-white transition-all duration-300`}>
                  <s.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link to={s.link} className="text-brand-900 font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  {s.cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRODUCTS SHOWCASE
      ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-brand-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/8 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 block">Our Products</span>
              <h2 className="text-4xl sm:text-5xl font-black leading-tight">
                Ready-to-deploy.<br />Built for India.
              </h2>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              Four SaaS products solving real problems for Indian clinics, retailers, sales teams, and fashion brands. Priced in INR, supported in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Database, name: 'Lead Generator', desc: 'Verified B2B database. Filter by city, category, size. Export to CRM in one click.', path: '/product/zetax-lead-generator', tag: 'Sales', price: 'From ₹1,999/mo' },
              { icon: Stethoscope, name: 'Doctor Management', desc: 'Complete clinic & hospital platform — appointments, prescriptions, billing, labs.', path: '/product/doctor-management', tag: 'Healthcare', price: 'From ₹1,999/mo' },
              { icon: Briefcase, name: 'Custom Business', desc: 'Your workflow, your rules. Bespoke ERP, CRM, and automation built around your process.', path: '/product/custom-business', tag: 'Enterprise', price: 'From ₹1,50,000' },
              { icon: Shirt, name: 'Virtual Try-On', desc: 'AI clothing fit for e-commerce. Let shoppers try before they buy. Reduce returns 28%.', path: '/product/virtual-tryon', tag: 'AI', price: 'From ₹2,499/mo' },
            ].map((product) => (
              <Link
                key={product.name}
                to={product.path}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-white/10 group-hover:bg-brand-accent p-3 rounded-xl transition-colors duration-300">
                    <product.icon size={20} className="text-white group-hover:text-brand-900 transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold bg-white/10 px-2 py-1 rounded-full text-white/50 uppercase tracking-wider">{product.tag}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5 flex-grow">{product.desc}</p>
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="text-xs text-brand-accent font-semibold">{product.price}</span>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY ZETAX — 4 pillars with icons
      ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 block">Why ZetaX</span>
            <h2 className="text-4xl font-black text-brand-900 mb-4">The ZetaX difference</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Four reasons 80+ Indian businesses chose us over bigger names.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: 'Results, not hours', desc: 'We measure every engagement by the ROI it delivers — not the time it takes.', color: 'text-blue-600 bg-blue-50' },
              { icon: Shield, title: 'Enterprise security', desc: 'Bank-grade encryption, HIPAA-aligned architecture, and role-based access on every product.', color: 'text-green-600 bg-green-50' },
              { icon: Clock, title: '24/7 support', desc: 'Direct WhatsApp line to engineers — not a helpdesk bot, not a ticket queue.', color: 'text-purple-600 bg-purple-50' },
              { icon: Users, title: 'Owned by you', desc: '100% source code ownership on custom builds. No vendor lock-in, ever.', color: 'text-rose-600 bg-rose-50' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section className="py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 block">Customer Stories</span>
            <h2 className="text-4xl font-black text-brand-900 mb-4">What our customers say</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Real feedback from Indian businesses using ZetaX.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "ZetaX rebuilt our clinic management in 5 weeks. Patient bookings went up 40% just from the WhatsApp reminders alone.",
                name: 'Dr. R. Sharma', role: 'Owner, Multi-Speciality Clinic', city: 'Indore',
              },
              {
                quote: "We tried 3 lead-data providers before ZetaX. This is the only one with accurate Indian numbers and clean CRM exports.",
                name: 'A. Verma', role: 'Founder, B2B Agency', city: 'Mumbai',
              },
              {
                quote: "Their custom inventory dashboard saved my team 15+ hours every week. Senior devs without the senior overhead.",
                name: 'N. Patel', role: 'COO, D2C Fashion Brand', city: 'Ahmedabad',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow relative group">
                <Quote className="absolute top-6 right-6 text-brand-accent/15 group-hover:text-brand-accent/25 transition-colors" size={40} />
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-7 text-[15px]">"{t.quote}"</p>
                <div className="border-t border-gray-100 pt-5">
                  <p className="font-bold text-brand-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role} · {t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA — dark, full-width
      ══════════════════════════════════════════════════ */}
      <section className="bg-brand-900 text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(#a3e635 1px, transparent 1px), linear-gradient(90deg, #a3e635 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4 block">Ready?</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            Start multiplying<br />
            <span className="text-brand-accent">your potential</span> today.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Free 30-minute discovery call. No commitment. Just a clear plan for how ZetaX can multiply what your team is already doing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-900 font-bold px-10 py-4 rounded-xl hover:bg-white transition-colors shadow-lg shadow-brand-accent/20 text-base"
            >
              Book a Free Demo <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919589781311?text=Hi%20ZetaX%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/15 font-semibold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
