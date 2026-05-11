import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Linkedin, Mail, ArrowRight, Target, Heart, Award, Compass } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Outcomes over output',
    desc: 'We don\'t bill for hours wasted on bloated features. Every line of code we ship has to move a business metric.',
  },
  {
    icon: Heart,
    title: 'Honest pricing',
    desc: 'No padded quotes. No hidden charges. The number we agree at kickoff is the number you pay at delivery.',
  },
  {
    icon: Award,
    title: 'Ownership mindset',
    desc: 'Every project gets a dedicated lead who treats your business like their own — from kickoff to long after launch.',
  },
  {
    icon: Compass,
    title: 'Built for India',
    desc: 'INR pricing, GST invoicing, WhatsApp-first communication, Hindi support. We build for the way Indian businesses actually work.',
  },
];

const timeline = [
  { year: '2023', title: 'ZetaX founded in Indore', desc: 'Started as a 2-person team building custom websites and automation tools for local SMEs.' },
  { year: '2024', title: 'First SaaS product launched', desc: 'Built and launched ZetaX Lead Generator — our first scalable subscription product.' },
  { year: '2025', title: 'Expanded into healthcare & retail', desc: 'Released Doctor Management System and Virtual Try-On, serving clinics and D2C brands across India.' },
  { year: '2026', title: 'Growing the team', desc: 'Hiring across engineering, AI, design, and sales. Building the next wave of products for Indian businesses.' },
];

// Replace these with real founder/team details when you're ready.
const team = [
  {
    name: 'Founder & CEO',
    role: 'Product & Strategy',
    bio: 'Leads product vision, client relationships, and overall company direction. Background in business operations and SaaS go-to-market.',
    placeholder: 'F',
    color: 'from-brand-900 to-slate-700',
  },
  {
    name: 'Co-Founder & CTO',
    role: 'Engineering & Architecture',
    bio: 'Heads engineering across all products. Full-stack architect with deep expertise in React, Node.js, Python, and AI integration.',
    placeholder: 'C',
    color: 'from-blue-700 to-blue-900',
  },
  {
    name: 'Head of Design',
    role: 'UX & Brand',
    bio: 'Owns design systems, user experience, and brand consistency across all products and client work.',
    placeholder: 'D',
    color: 'from-violet-700 to-violet-900',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-brand-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top translate-x-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5">
              About ZetaX
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We build software<br />
              <span className="text-brand-accent">Indian businesses actually use</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              ZetaX is an Indore-based product studio. We build SaaS tools and custom software that solve real problems for Indian clinics, retailers, D2C brands, and growing companies.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} className="text-brand-accent" /> Headquartered in Indore, MP
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award size={16} className="text-brand-accent" /> Bootstrapped since 2023
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-3 block">Our Mission</span>
              <h2 className="text-3xl font-bold text-brand-900 mb-5 leading-tight">
                Replace manual work<br />with smart software
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most Indian businesses still run on spreadsheets, paper, and WhatsApp groups. The "software solutions" available are either too expensive (foreign SaaS priced in USD) or too generic (one-size-fits-nobody templates).
              </p>
              <p className="text-gray-600 leading-relaxed">
                We sit in the middle: fast, affordable, India-priced products that actually fit the way local businesses work — plus custom builds when the standard products aren't enough.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-900 to-slate-700 rounded-2xl p-8 text-white">
              <div className="space-y-5">
                {[
                  { value: '80+', label: 'Projects delivered' },
                  { value: '4', label: 'SaaS products live' },
                  { value: '15+', label: 'Industries served' },
                  { value: 'PAN India', label: 'Customers served' },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-3xl font-black text-brand-accent">{s.value}</span>
                    <span className="text-sm text-white/70">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">What we believe</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that shape every project, every product, every conversation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-brand-900 p-3 rounded-xl w-fit mb-5">
                    <Icon size={22} className="text-brand-accent" />
                  </div>
                  <h3 className="font-bold text-brand-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">Our journey</h2>
            <p className="text-gray-500">From a 2-person team to a multi-product studio.</p>
          </div>
          <div className="relative">
            <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 sm:-translate-x-1/2"></div>
            <div className="space-y-10">
              {timeline.map((t, idx) => (
                <div key={t.year} className={`relative flex sm:items-center gap-6 sm:gap-12 ${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className="relative z-10 w-6 h-6 rounded-full bg-brand-accent border-4 border-white shadow flex-shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2"></div>
                  <div className="flex-grow sm:w-1/2 pl-8 sm:pl-0">
                    <div className={`bg-white border border-gray-100 rounded-xl p-5 shadow-sm ${idx % 2 === 0 ? 'sm:mr-12 sm:text-right' : 'sm:ml-12 sm:text-left'}`}>
                      <span className="text-xs font-bold text-brand-accent">{t.year}</span>
                      <h3 className="font-bold text-brand-900 text-lg mt-1 mb-1.5">{t.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">The team behind ZetaX</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Small, senior, and entirely accountable. No middlemen — you talk directly to the people building your product.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.role} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`bg-gradient-to-br ${m.color} h-32 flex items-end justify-center pb-2 relative`}>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white p-1.5 shadow-lg">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-2xl font-bold`}>
                      {m.placeholder}
                    </div>
                  </div>
                </div>
                <div className="pt-12 pb-6 px-6 text-center">
                  <h3 className="font-bold text-brand-900">{m.name}</h3>
                  <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">{m.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{m.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-brand-900 transition-colors" aria-label="LinkedIn">
                      <Linkedin size={16} />
                    </a>
                    <a href="mailto:zetax.buisness@gmail.com" className="text-gray-400 hover:text-brand-900 transition-colors" aria-label="Email">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 mb-4">Want to join us?</p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-brand-900 font-semibold hover:underline"
            >
              See open positions <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-4">Let's build together</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Whether you want a ready product or something built from scratch — start with a free 30-minute chat. No commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors"
            >
              Talk to Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
