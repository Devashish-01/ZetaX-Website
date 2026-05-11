import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Lightbulb, PenTool, Code, Layers, Truck, Headphones,
  ChevronDown, ArrowRight, CheckCircle, Shield, Clock, Users, Star
} from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    num: '01',
    title: 'Discovery & Requirements',
    time: '3–5 days',
    color: 'bg-amber-50 text-amber-600',
    desc: 'We sit down with you (in person or on a call) to understand your business goals, current pain points, and technical requirements.',
    details: [
      'Structured questionnaire & stakeholder interviews',
      'Competitor and market analysis',
      'Detailed requirements document (SRS) delivered',
      'Project scope, timeline, and cost estimate agreed',
    ],
  },
  {
    icon: PenTool,
    num: '02',
    title: 'UI/UX Design',
    time: '5–10 days',
    color: 'bg-blue-50 text-blue-600',
    desc: 'Our designers create wireframes and high-fidelity Figma prototypes. Nothing gets built until you approve the design.',
    details: [
      'Low-fidelity wireframes for layout approval',
      'Brand-consistent high-fidelity UI in Figma',
      'Mobile, tablet and desktop breakpoints',
      'Two free design revision rounds included',
    ],
  },
  {
    icon: Code,
    num: '03',
    title: 'Agile Development',
    time: '2–10 weeks',
    color: 'bg-purple-50 text-purple-600',
    desc: 'Two-week sprints with a demo at the end of each. You stay in complete control with full visibility into progress.',
    details: [
      'React / Next.js frontend, Node.js / Python backend',
      'Bi-weekly sprint demos on a live staging link',
      'Daily progress updates on WhatsApp',
      'Version-controlled code on private Git repository',
    ],
  },
  {
    icon: Layers,
    num: '04',
    title: 'Integration',
    time: '3–7 days',
    color: 'bg-teal-50 text-teal-600',
    desc: 'We connect your new system with every tool in your existing stack — CRM, ERP, payment gateways, third-party APIs.',
    details: [
      'Payment gateways (Razorpay, Paytm, Stripe)',
      'WhatsApp Business API & SMS (MSG91)',
      'Google Analytics, HubSpot, Zoho, Salesforce',
      'Custom REST / GraphQL API connections',
    ],
  },
  {
    icon: Truck,
    num: '05',
    title: 'QA & Delivery',
    time: '3–5 days',
    color: 'bg-green-50 text-green-600',
    desc: 'Rigorous manual and automated testing across devices, browsers and user flows before we go live.',
    details: [
      'Cross-browser and mobile device testing',
      'Performance audit (Lighthouse ≥ 90)',
      'Security scan and vulnerability check',
      'Full deployment to production with zero downtime',
    ],
  },
  {
    icon: Headphones,
    num: '06',
    title: 'Support & Growth',
    time: 'Ongoing',
    color: 'bg-rose-50 text-rose-600',
    desc: '30 days of free post-launch support for every project. Paid maintenance and feature development packages available.',
    details: [
      '30-day free bug-fix warranty post-launch',
      'Monthly maintenance retainer from ₹8,000/mo',
      'Priority WhatsApp support channel',
      'Quarterly performance and SEO reviews',
    ],
  },
];

const guarantees = [
  { icon: Shield, title: 'Fixed-Price Promise', desc: 'Scope is agreed in writing before we start. No surprise invoices at the end.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We meet agreed timelines or we work overtime at no extra cost to you.' },
  { icon: CheckCircle, title: '30-Day Bug Warranty', desc: 'Any bug found within 30 days of launch is fixed free. No questions asked.' },
  { icon: Users, title: 'Dedicated Manager', desc: 'One point of contact who knows your project inside out, from kickoff to support.' },
  { icon: Star, title: 'Code Ownership', desc: 'You own 100% of the source code. We hand over a clean GitHub repository at delivery.' },
];

const faqs = [
  {
    q: 'How do I get started?',
    a: 'Fill the form on our Contact page or reach out on WhatsApp. We schedule a 30-minute discovery call and send you a detailed proposal within 48 hours.',
  },
  {
    q: 'How much does a project cost?',
    a: 'A basic 5-page business website starts at ₹15,000. A full custom web app or SaaS product typically ranges ₹1,50,000–₹5,00,000 depending on scope. We provide a detailed quote after the discovery call.',
  },
  {
    q: 'Do you sign an NDA?',
    a: 'Absolutely. We sign a mutual NDA before any technical discussion. Your idea is protected from day one.',
  },
  {
    q: 'Can I see progress before the project is complete?',
    a: 'Yes. You get a live staging URL from day one and bi-weekly sprint demo calls. You review and approve at every stage.',
  },
  {
    q: 'What happens after launch?',
    a: 'All projects come with 30 days of free post-launch support. After that, we offer monthly maintenance retainers starting at ₹8,000/mo for updates, security patches, and new features.',
  },
  {
    q: 'Do you offer EMI or milestone-based payments?',
    a: 'Yes. We split payments into milestones tied to deliverables — typically 30% upfront, 40% at design approval, 30% on delivery.',
  },
];

const Faq: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

const HowWeWork: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-brand-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top translate-x-48 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              From your idea to a<br />live product — transparently
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              No black boxes. No surprise costs. Every step is clearly defined, and you stay in control throughout the entire project.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { value: '80+', label: 'Projects Delivered' },
                { value: '4 wks', label: 'Average Launch Time' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-brand-accent">{s.value}</p>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">How every project runs</h2>
            <p className="text-gray-500">Six clear phases, zero ambiguity.</p>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow grid md:grid-cols-[auto_1fr] gap-8 items-start"
                >
                  {/* Left: number + icon */}
                  <div className="flex flex-col items-center gap-3">
                    <div className={`${step.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-black text-gray-300 tracking-widest">{step.num}</span>
                  </div>
                  {/* Right: content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-brand-900">{step.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">{step.time}</span>
                    </div>
                    <p className="text-gray-600 mb-5 leading-relaxed">{step.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">Our commitments to you</h2>
            <p className="text-gray-500">Every project comes with these promises — in writing.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {guarantees.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-brand-900 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon size={22} className="text-brand-accent" />
                  </div>
                  <h4 className="font-bold text-brand-900 mb-2 text-sm">{g.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA — after guarantees, before FAQ */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="font-black text-xl mb-1">Convinced? Let's start your project.</p>
              <p className="text-white/50 text-sm">Free 30-min discovery call. No commitment required.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="https://wa.me/919589781311?text=Hi%20ZetaX%2C%20I%27d%20like%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="bg-brand-accent text-brand-900 text-sm font-bold px-5 py-3 rounded-xl hover:bg-white transition-colors flex items-center gap-2"
              >
                Book a Demo <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know before getting started.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <Faq key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-gray-300 mb-8">Share your idea — even a rough one. We'll get back within 24 hours with a plan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919589781311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
