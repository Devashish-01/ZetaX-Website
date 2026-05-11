import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ClipboardList, Cpu, Plug, Headphones, BarChart2, ArrowRight, Check, Users, Layers } from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Deep Requirements Discovery',
    desc: 'We start with structured workshops to map your workflows, pain points, and goals before writing a single line of code.',
  },
  {
    icon: Cpu,
    title: 'Custom ERP & CRM',
    desc: 'Purpose-built resource planning and customer management tools that fit your exact process — not the other way around.',
  },
  {
    icon: Plug,
    title: 'Third-Party Integrations',
    desc: 'Connect to any existing tool — payment gateways, accounting software, logistics APIs, or internal legacy systems.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    desc: 'Custom dashboards that surface the metrics your team actually uses. Real-time data, role-specific views.',
  },
  {
    icon: Users,
    title: 'Role & Access Management',
    desc: 'Granular permission systems ensure the right people see the right data — from field staff to C-suite executives.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support & SLA',
    desc: 'Dedicated account manager, guaranteed response times, and proactive monitoring long after launch.',
  },
];

const process = [
  {
    num: '01',
    title: 'Discovery & Scoping',
    desc: 'We meet your team, map current processes, and define clear deliverables, timelines, and success metrics.',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'Interactive wireframes and architecture diagrams are reviewed and approved before development begins.',
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints with regular demos. You stay in control at every stage with full transparency into progress.',
  },
  {
    num: '04',
    title: 'Launch & Handover',
    desc: 'Full deployment, staff training, documentation, and a dedicated support period to ensure smooth adoption.',
  },
];

const useCases = [
  'Inventory & Warehouse Management',
  'Custom CRM for Sales Teams',
  'Field Service Management',
  'Fleet & Logistics Tracking',
  'HR & Payroll Automation',
  'Franchise Management Platform',
  'Customer Portal & Self-Service',
  'Multi-Location Retail Systems',
];

const CustomBusiness: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Enterprise</span>
            <span className="text-gray-400 text-sm">Custom Business Solutions</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand-900 mb-5 leading-tight">
                Software built around <span className="underline decoration-violet-400 decoration-4">your workflow</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Off-the-shelf tools force you to adapt your process to theirs. We flip that. ZetaX designs and builds bespoke software that fits your team exactly — so you move faster with less friction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-violet-700 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-violet-800 transition-colors"
                >
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link
                  to="/how-we-work"
                  className="inline-flex items-center gap-2 bg-white text-brand-900 border border-gray-200 font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  How We Work
                </Link>
              </div>
            </div>

            {/* Visual mockup */}
            <div className="bg-gradient-to-br from-violet-700 to-violet-900 rounded-2xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-2 mb-5">
                <Layers size={18} className="text-violet-300" />
                <span className="text-sm font-semibold">Your Custom Dashboard</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Active Orders', value: '1,247', color: 'bg-violet-500/30' },
                  { label: 'Revenue MTD', value: '₹24.6L', color: 'bg-violet-500/30' },
                  { label: 'Open Tickets', value: '18', color: 'bg-yellow-400/20' },
                  { label: 'Team Members', value: '62', color: 'bg-green-400/20' },
                ].map((s) => (
                  <div key={s.label} className={`${s.color} rounded-lg p-4`}>
                    <p className="text-xs text-white/60 mb-1">{s.label}</p>
                    <p className="text-2xl font-bold">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-xs text-white/50 mb-3">Recent Activity</p>
                <div className="space-y-2">
                  {[
                    'Order #4821 dispatched',
                    'Invoice #1092 paid',
                    'New support ticket opened',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-300 flex-shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 bg-violet-50 rounded-2xl p-8">
          {[
            { value: '80+', label: 'Projects Delivered' },
            { value: '15+', label: 'Industries Served' },
            { value: '4–12', label: 'Week Delivery Range' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-violet-700">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">What we deliver</h2>
          <p className="text-gray-500 mb-10">End-to-end ownership — from whiteboard to production.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="bg-violet-50 p-3 rounded-lg inline-block mb-4">
                    <Icon className="text-violet-700" size={22} />
                  </div>
                  <h3 className="font-bold text-brand-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Our process</h2>
          <p className="text-gray-500 mb-10">Transparent, iterative, and built around your feedback.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.num} className="flex flex-col">
                <span className="text-4xl font-black text-violet-200 mb-3">{step.num}</span>
                <h3 className="font-bold text-brand-900 text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Common use cases</h2>
          <p className="text-gray-500 mb-8">We've built for these — and plenty more.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((u) => (
              <div key={u} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-gray-100 hover:border-violet-200 hover:shadow-sm transition-all">
                <Briefcase size={16} className="text-violet-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{u}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Engagement models</h2>
          <p className="text-gray-500 mb-2">We adapt to how your team works best.</p>
          <p className="text-xs text-gray-400 mb-8">All prices in INR, exclusive of 18% GST.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: 'Fixed-Price Project',
                price: 'From ₹1,50,000',
                desc: 'Ideal for well-defined requirements. Agreed scope, timeline, and cost — no surprises.',
                features: ['Clear deliverables upfront', 'Milestone-based payments', 'Change request process'],
              },
              {
                name: 'Dedicated Team',
                price: 'From ₹80,000/mo',
                desc: 'A ZetaX team embedded in your organization. Scales up or down as needed.',
                features: ['Full-time devs & designers', 'Direct Slack/Teams access', 'Monthly billing'],
                highlight: true,
              },
              {
                name: 'Retainer & Support',
                price: 'From ₹25,000/mo',
                desc: 'Ongoing development, maintenance, and feature additions after your initial launch.',
                features: ['Guaranteed hours/month', 'Bug fixes & updates', 'Priority response SLA'],
              },
            ].map((model) => (
              <div
                key={model.name}
                className={`rounded-2xl p-8 border flex flex-col ${
                  model.highlight
                    ? 'bg-violet-700 border-violet-700 text-white shadow-2xl scale-105'
                    : 'bg-white border-gray-200 text-brand-900'
                }`}
              >
                <h3 className={`font-bold text-lg mb-1 ${model.highlight ? 'text-white' : 'text-brand-900'}`}>{model.name}</h3>
                <p className={`text-2xl font-black mb-3 ${model.highlight ? 'text-brand-accent' : 'text-violet-700'}`}>{model.price}</p>
                <p className={`text-sm mb-6 ${model.highlight ? 'text-violet-200' : 'text-gray-500'}`}>{model.desc}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={14} className={model.highlight ? 'text-violet-200' : 'text-green-500'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                    model.highlight
                      ? 'bg-white text-violet-700 hover:bg-violet-50'
                      : 'bg-violet-700 text-white hover:bg-violet-800'
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-900 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to build something great?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Share your idea — even a rough one. Our team will scope it out and get back to you within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors text-sm"
          >
            Start the Conversation <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CustomBusiness;
