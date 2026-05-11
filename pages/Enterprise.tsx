import React from 'react';
import { Link } from 'react-router-dom';
import {
  Server, Users, Globe, ShoppingBag, ArrowRight, CheckCircle,
  Shield, Zap, Database, Lock, BarChart2, Plug
} from 'lucide-react';

const capabilities = [
  {
    icon: Server,
    title: 'Custom ERP Systems',
    desc: 'Purpose-built resource planning software tailored to your manufacturing, distribution, or service workflows.',
    highlights: ['Inventory & warehouse management', 'HR & payroll modules', 'Supply chain & procurement', 'Multi-branch consolidation'],
  },
  {
    icon: Users,
    title: 'Advanced CRM',
    desc: 'Go beyond off-the-shelf CRMs. Get a system that mirrors your exact sales cycle with deep data integration.',
    highlights: ['Custom pipeline & deal stages', 'Automated follow-up sequences', 'Role-based access control', 'Lead scoring & analytics'],
  },
  {
    icon: Globe,
    title: 'SaaS Platform Development',
    desc: 'Full engineering lifecycle for multi-tenant SaaS applications — from MVP to scale, with auth, billing, and usage metering.',
    highlights: ['Multi-tenant architecture', 'Subscription & billing engine', 'Admin & analytics dashboards', 'White-label capabilities'],
  },
  {
    icon: ShoppingBag,
    title: 'B2B Marketplace & Portals',
    desc: 'Complex multi-vendor platforms with integrated payment splitting, wallet systems, and dedicated vendor portals.',
    highlights: ['Vendor onboarding & KYC', 'Split payment & settlement', 'Buyer portal with order tracking', 'Commission & fee management'],
  },
  {
    icon: BarChart2,
    title: 'Data & Analytics Platforms',
    desc: 'Custom dashboards and BI tools that surface the metrics your leadership team actually needs, in real time.',
    highlights: ['Real-time data pipelines', 'Executive dashboards', 'AI-powered forecasting', 'PDF report generation'],
  },
  {
    icon: Plug,
    title: 'Legacy System Integration',
    desc: 'Connect old on-premise software with modern cloud tools, APIs, and mobile apps without replacing everything.',
    highlights: ['API bridge development', 'Data migration & cleansing', 'SAP / Tally / ERP connectors', 'Automated sync & reconciliation'],
  },
];

const trustPoints = [
  { icon: Shield, label: 'NDA signed before first call' },
  { icon: Lock, label: 'Code escrow & IP handover' },
  { icon: CheckCircle, label: 'SLA-backed support contracts' },
  { icon: Zap, label: 'Dedicated account manager' },
  { icon: Database, label: 'VAPT & security audits' },
  { icon: Users, label: 'Onsite team available (Indore + PAN India)' },
];

const engagements = [
  {
    name: 'Project-Based',
    price: 'From ₹1,50,000',
    desc: 'For well-scoped, time-bound builds.',
    features: ['Fixed price & timeline', 'Milestone payments', 'Full source code ownership', '30-day warranty'],
    highlight: false,
  },
  {
    name: 'Dedicated Team',
    price: 'From ₹80,000/mo',
    desc: 'Your engineering team, managed by us.',
    features: ['2–10 developers & designers', 'Daily standups & sprint demos', 'Direct Slack access', 'Scale up/down any month'],
    highlight: true,
  },
  {
    name: 'Retainer',
    price: 'From ₹25,000/mo',
    desc: 'Ongoing features, fixes & support.',
    features: ['Guaranteed hours each month', 'Bug fixes & patches', 'New feature development', 'Priority response SLA'],
    highlight: false,
  },
];

const Enterprise: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-brand-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top translate-x-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                Enterprise Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Custom software for<br />organizations that need<br />
                <span className="text-brand-accent">more than a template</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Scalable, secure, and purpose-built systems for large businesses and institutions. We architect the digital backbone of your operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 font-bold px-7 py-4 rounded-xl hover:bg-white transition-colors"
                >
                  Schedule Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/919589781311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-semibold px-7 py-4 rounded-xl hover:bg-white/20 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Stats block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '80+', label: 'Enterprise Projects Delivered', bg: 'bg-white/5 border border-white/10' },
                { value: '15+', label: 'Industries Served', bg: 'bg-brand-accent/10 border border-brand-accent/20' },
                { value: '₹2Cr+', label: 'Revenue Enabled for Clients', bg: 'bg-white/5 border border-white/10' },
                { value: '99.9%', label: 'Uptime on Hosted Systems', bg: 'bg-white/5 border border-white/10' },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} rounded-xl p-6`}>
                  <p className="text-3xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-gray-400 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">What we build for enterprises</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Each system is architected from scratch to match your exact requirements — no forced feature sets.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group">
                  <div className="w-14 h-14 bg-brand-900/5 group-hover:bg-brand-900 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <Icon size={26} className="text-brand-900 group-hover:text-brand-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-3">{cap.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{cap.desc}</p>
                  <ul className="space-y-2">
                    {cap.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">Enterprise-grade trust & compliance</h2>
            <p className="text-gray-500">We work to the standards that large organizations demand.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {trustPoints.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4">
                  <div className="bg-brand-900 p-2.5 rounded-lg">
                    <Icon size={18} className="text-brand-accent" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{t.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-accent rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-black text-xl text-brand-900 mb-1">Ready to discuss your project?</p>
              <p className="text-brand-900/60 text-sm">We scope enterprise projects within 48 hours.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="https://wa.me/919589781311?text=Hi%20ZetaX%2C%20I%27d%20like%20to%20discuss%20an%20enterprise%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-900/10 border border-brand-900/20 text-brand-900 text-sm font-semibold px-5 py-3 rounded-xl hover:bg-brand-900/20 transition-colors"
              >
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="bg-brand-900 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                Schedule Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">Flexible engagement models</h2>
            <p className="text-gray-500 mb-2">We adapt to how your procurement and ops teams work.</p>
            <p className="text-xs text-gray-400 mb-12">All prices in INR, exclusive of 18% GST.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {engagements.map((e) => (
              <div
                key={e.name}
                className={`rounded-2xl p-8 border flex flex-col ${
                  e.highlight
                    ? 'bg-brand-900 border-brand-900 text-white shadow-2xl scale-105'
                    : 'bg-white border-gray-200 text-brand-900'
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${e.highlight ? 'text-brand-accent' : 'text-gray-400'}`}>{e.name}</p>
                <p className={`text-2xl font-black mb-1 ${e.highlight ? 'text-white' : 'text-brand-900'}`}>{e.price}</p>
                <p className={`text-sm mb-6 ${e.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{e.desc}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {e.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${e.highlight ? 'text-brand-accent' : 'text-green-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                    e.highlight
                      ? 'bg-brand-accent text-brand-900 hover:bg-white'
                      : 'bg-brand-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-brand-900 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-4">Let's discuss your requirements</h2>
          <p className="text-gray-300 text-lg mb-8">
            Enterprise systems are handled after a detailed requirement workshop and architecture planning session. Book a free 45-minute consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors"
            >
              Schedule Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919589781311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
