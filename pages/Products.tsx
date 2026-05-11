import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Stethoscope, Briefcase, Shirt, Check } from 'lucide-react';

const products = [
  {
    id: 'zetax-lead-generator',
    icon: Database,
    badge: 'Sales & Growth',
    name: 'ZetaX Lead Generator',
    tagline: 'Find your next customer in seconds.',
    description:
      'Access millions of verified business records filtered by city, industry, and size. Power your outreach with clean, GDPR-compliant data exported directly to your CRM.',
    highlights: ['Verified business database', 'City & category filters', 'CRM-ready CSV export', 'Enterprise API access'],
    color: 'from-brand-900 to-slate-700',
    accentColor: 'bg-brand-accent',
    path: '/product/zetax-lead-generator',
  },
  {
    id: 'doctor-management',
    icon: Stethoscope,
    badge: 'Healthcare',
    name: 'Doctor Management System',
    tagline: 'Run your clinic smarter, not harder.',
    description:
      'A complete clinic and hospital management platform. Handle patient records, appointments, billing, prescriptions, and staff schedules from one unified dashboard.',
    highlights: ['Patient records & history', 'Appointment scheduling', 'Prescription & billing', 'Staff & role management'],
    color: 'from-teal-700 to-teal-900',
    accentColor: 'bg-teal-400',
    path: '/product/doctor-management',
  },
  {
    id: 'custom-business',
    icon: Briefcase,
    badge: 'Enterprise',
    name: 'Custom Business Solutions',
    tagline: 'Software built around your workflow.',
    description:
      "Every business is unique. We design and build bespoke ERP, CRM, and automation tools tailored to your exact processes — so your team spends less time on admin and more time on results.",
    highlights: ['Full requirements discovery', 'Custom ERP & CRM builds', 'Third-party integrations', 'Ongoing support & SLA'],
    color: 'from-violet-700 to-violet-900',
    accentColor: 'bg-violet-300',
    path: '/product/custom-business',
  },
  {
    id: 'virtual-tryon',
    icon: Shirt,
    badge: 'AI / Fashion',
    name: 'Virtual Try-On',
    tagline: 'See it on you before you buy it.',
    description:
      'AI-powered virtual clothing fitting for e-commerce stores. Let shoppers upload a photo or use our avatar system to try outfits instantly — reducing returns and boosting conversions.',
    highlights: ['AI body-fit mapping', 'Live e-commerce plugin', 'Avatar or real-photo mode', 'Analytics & conversion boost'],
    color: 'from-rose-600 to-rose-900',
    accentColor: 'bg-rose-300',
    path: '/product/virtual-tryon',
  },
];

const Products: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-accent/20 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-900 mb-5 leading-tight">
            Tools that move your business <span className="text-brand-900 underline decoration-brand-accent decoration-4">forward</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From AI-powered lead generation to smart clinic management — every ZetaX product is built to replace manual effort with intelligent automation.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${product.color} p-8 text-white`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${product.accentColor} p-3 rounded-xl`}>
                      <Icon className="text-brand-900" size={24} />
                    </div>
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{product.badge}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  <p className="text-white/70 text-sm font-medium">{product.tagline}</p>
                </div>

                {/* Card Body */}
                <div className="bg-white p-8 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

                  <ul className="space-y-2 mb-8 flex-grow">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-green-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={product.path}
                    className="inline-flex items-center justify-between w-full bg-brand-900 text-white font-semibold px-5 py-3.5 rounded-xl hover:bg-gray-800 transition-colors group"
                  >
                    <span>Explore {product.name}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-brand-900 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Don't see exactly what you need?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            We build fully custom software solutions. Tell us your challenge and we'll scope a product around it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors text-sm"
          >
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
