import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Search, Filter, Download, Lock, ArrowRight, Check, MapPin, Building2, FileDown, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Search Engine',
    desc: 'Query millions of business records by city, region, or industry vertical. Results return in under a second.',
  },
  {
    icon: Filter,
    title: 'Granular Filters',
    desc: 'Narrow results by business size, employee count, revenue range, and verified contact availability.',
  },
  {
    icon: Download,
    title: 'One-Click Export',
    desc: 'Download clean CSV or push directly to HubSpot, Salesforce, or any CRM via our REST API.',
  },
  {
    icon: Lock,
    title: 'GDPR & CCPA Compliant',
    desc: 'All data is sourced from public records and audited regularly. Safe for outreach in any market.',
  },
  {
    icon: RefreshCw,
    title: 'Always Fresh Data',
    desc: 'Our crawler updates records continuously. Dead numbers and closed businesses are removed automatically.',
  },
  {
    icon: Building2,
    title: 'Enterprise API',
    desc: 'Embed lead data directly into your own SaaS product, pipeline tool, or internal dashboard.',
  },
];

const steps = [
  { num: '01', title: 'Choose your target', desc: 'Select the city or region and the business category you want to reach.' },
  { num: '02', title: 'Apply filters', desc: 'Narrow by size, revenue, or verified contact status to get the highest-quality leads.' },
  { num: '03', title: 'Export & reach out', desc: 'Download your list or push it straight to your CRM and start your campaign.' },
];

const plans = [
  {
    name: 'Starter',
    price: '₹1,999',
    per: '/mo',
    desc: 'For freelancers and solo reps.',
    features: ['500 lead exports/month', 'City & category filters', 'CSV export', 'Email support'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹5,999',
    per: '/mo',
    desc: 'For growing sales teams.',
    features: ['5,000 lead exports/month', 'Advanced filters', 'CRM integrations', 'Priority WhatsApp support', 'Verified contacts only'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    desc: 'For agencies and large orgs.',
    features: ['Unlimited exports', 'Full API access', 'Dedicated account manager', 'Custom data fields', 'SLA guarantee'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const ZetaxLeadGenerator: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-accent/20 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Product</span>
            <span className="text-gray-400 text-sm">ZetaX Lead Generator</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand-900 mb-5 leading-tight">
                Find your next customer <span className="underline decoration-brand-accent decoration-4">in seconds</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Access a continuously updated database of millions of verified businesses. Filter, export, and integrate — the fastest way to fill your pipeline.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Request a Demo <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-brand-900 border border-gray-200 font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            {/* Visual mockup */}
            <div className="bg-gradient-to-br from-brand-900 to-slate-700 rounded-2xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs text-white/40">ZetaX Lead Generator</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 mb-3 flex items-center gap-3">
                <MapPin size={16} className="text-brand-accent" />
                <span className="text-sm text-white/80">New York, NY</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 mb-4 flex items-center gap-3">
                <Filter size={16} className="text-brand-accent" />
                <span className="text-sm text-white/80">Software Companies</span>
              </div>
              <div className="space-y-2">
                {['Acme Corp', 'TechStream Inc', 'BlueWave Solutions', 'Nova Digital'].map((name, i) => (
                  <div key={name} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">{name}</p>
                      <p className="text-xs text-white/40">+1 (555) 0{10 + i}0-000{i}</p>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">Verified</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                <span>Showing 4 of 2,847 results</span>
                <div className="flex items-center gap-1 text-brand-accent cursor-pointer">
                  <FileDown size={12} /> Export CSV
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 bg-gray-50 rounded-2xl p-8">
          {[
            { value: '12M+', label: 'Business Records' },
            { value: '40+', label: 'Countries Covered' },
            { value: '98%', label: 'Data Accuracy' },
            { value: '<1s', label: 'Average Query Time' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Everything you need to prospect faster</h2>
          <p className="text-gray-500 mb-10">Built for sales teams, recruiters, and agencies who can't afford bad data.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="bg-brand-900/5 p-3 rounded-lg inline-block mb-4">
                    <Icon className="text-brand-900" size={22} />
                  </div>
                  <h3 className="font-bold text-brand-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">How it works</h2>
          <p className="text-gray-500 mb-10">Three steps from setup to outreach.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col">
                <span className="text-5xl font-black text-brand-accent/40 mb-3">{step.num}</span>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Simple, transparent pricing</h2>
          <p className="text-gray-500 mb-2">No hidden fees. Cancel any time.</p>
          <p className="text-xs text-gray-400 mb-10">All prices in INR, exclusive of 18% GST. Billed monthly.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border flex flex-col ${
                  plan.highlight
                    ? 'bg-brand-900 border-brand-900 text-white shadow-2xl scale-105'
                    : 'bg-white border-gray-200 text-brand-900'
                }`}
              >
                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${plan.highlight ? 'text-brand-accent' : 'text-gray-400'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-gray-300' : 'text-gray-400'}`}>{plan.per}</span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={14} className={plan.highlight ? 'text-brand-accent' : 'text-green-500'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                    plan.highlight
                      ? 'bg-brand-accent text-brand-900 hover:bg-white'
                      : 'bg-brand-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Compare plans in detail</h2>
          <p className="text-gray-500 mb-8">Full feature breakdown so you can pick the right tier.</p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-5 text-sm font-semibold text-gray-500">Feature</th>
                  <th className="px-6 py-5 text-sm font-bold text-brand-900 text-center">Starter<br /><span className="text-xs font-normal text-gray-400">₹1,999/mo</span></th>
                  <th className="px-6 py-5 text-sm font-bold text-center bg-brand-900 text-white">Pro<br /><span className="text-xs font-normal text-brand-accent">₹5,999/mo</span></th>
                  <th className="px-6 py-5 text-sm font-bold text-brand-900 text-center">Enterprise<br /><span className="text-xs font-normal text-gray-400">Custom</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {[
                  { feature: 'Monthly lead exports', starter: '500', pro: '5,000', enterprise: 'Unlimited' },
                  { feature: 'City & category filters', starter: true, pro: true, enterprise: true },
                  { feature: 'Advanced filters (size, revenue)', starter: false, pro: true, enterprise: true },
                  { feature: 'Verified contacts only', starter: false, pro: true, enterprise: true },
                  { feature: 'CSV export', starter: true, pro: true, enterprise: true },
                  { feature: 'CRM integrations (HubSpot, Zoho)', starter: false, pro: true, enterprise: true },
                  { feature: 'REST API access', starter: false, pro: 'Limited', enterprise: 'Full' },
                  { feature: 'Custom data fields', starter: false, pro: false, enterprise: true },
                  { feature: 'Team members', starter: '1', pro: '5', enterprise: 'Unlimited' },
                  { feature: 'Support channel', starter: 'Email', pro: 'WhatsApp Priority', enterprise: 'Dedicated Manager' },
                  { feature: 'SLA guarantee', starter: false, pro: false, enterprise: true },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-700">{row.feature}</td>
                    {(['starter', 'pro', 'enterprise'] as const).map((tier) => {
                      const val = row[tier];
                      const isPro = tier === 'pro';
                      return (
                        <td
                          key={tier}
                          className={`px-6 py-4 text-center ${isPro ? 'bg-brand-900/5' : ''}`}
                        >
                          {val === true ? (
                            <Check size={18} className="text-green-500 inline" />
                          ) : val === false ? (
                            <span className="text-gray-300">—</span>
                          ) : (
                            <span className="text-gray-700 font-medium">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">All prices in INR, exclusive of 18% GST.</p>
        </div>

        {/* Compliance */}
        <div className="bg-gray-50 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6">
          <Lock className="text-green-500 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="font-bold text-lg text-brand-900 mb-2">Security & Compliance</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              All data is sourced from public records and is fully compliant with GDPR and CCPA regulations. We do not store or sell private personal data. You are responsible for ensuring your outreach methods comply with local marketing laws.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ZetaxLeadGenerator;
