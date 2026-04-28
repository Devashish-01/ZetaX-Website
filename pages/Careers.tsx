import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Heart, Globe, Zap, Coffee, Users, ArrowRight, MapPin, Clock } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    { icon: Globe, title: 'Remote First', desc: 'Work from anywhere in the world. We believe in output, not hours in a chair.' },
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical coverage for you and your family, plus a wellness stipend.' },
    { icon: Zap, title: 'Latest Tech', desc: 'We provide top-tier equipment (MacBook Pro/M-Series) and a home office budget.' },
    { icon: Coffee, title: 'Work-Life Balance', desc: 'Unlimited PTO policy and mandatory disconnect days to recharge.' },
  ];

  const openings = [
    {
      id: 1,
      role: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote (US/EU)',
      type: 'Full-time',
      desc: 'We are looking for a React/Next.js expert to lead our core product dashboard team. You will drive architectural decisions and build high-performance UIs.'
    },
    {
      id: 2,
      role: 'AI Solutions Architect',
      department: 'AI Research',
      location: 'San Francisco / Remote',
      type: 'Full-time',
      desc: 'Design and deploy custom LLM solutions using Gemini and OpenAI APIs for our enterprise clients. Strong Python and RAG experience required.'
    },
    {
      id: 3,
      role: 'Enterprise Sales Executive',
      department: 'Sales',
      location: 'New York / Hybrid',
      type: 'Full-time',
      desc: 'Close high-ticket SaaS deals with Fortune 500 companies. You have a proven track record of exceeding quotas in the B2B space.'
    },
    {
      id: 4,
      role: 'Product Designer (UI/UX)',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
      desc: 'Shape the visual identity of ZetaX. We need someone who bridges the gap between complex data and intuitive user interfaces.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-brand-900 text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top translate-x-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold tracking-wide uppercase mb-6">
            We are hiring
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Build the Future of <br />
            <span className="text-brand-accent">Enterprise Automation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join a team of visionaries, engineers, and builders. At ZetaX, we are solving complex problems with cutting-edge technology.
          </p>
          <a href="#openings" className="inline-block bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-lg hover:bg-white transition-colors">
            View Open Positions
          </a>
        </div>
      </div>

      {/* Values & Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Why Join ZetaX?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We care about our people as much as our product. Here is what you can expect when you join the team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-brand-900 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid (Culture Placeholder) */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">Team Retreat '23</div>
             <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">Hackathon</div>
             <div className="h-48 bg-brand-900/10 rounded-lg flex items-center justify-center text-brand-900/50">Remote Setup</div>
             <div className="h-48 bg-brand-accent/20 rounded-lg flex items-center justify-center text-brand-900/50">Brainstorming</div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Open Positions</h2>
          <p className="text-gray-600">Find your place in our growing team.</p>
        </div>

        <div className="space-y-4">
          {openings.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-900 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-brand-900 group-hover:text-blue-600 transition-colors">{job.role}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="px-6 py-2.5 bg-gray-50 text-brand-900 font-semibold rounded-lg hover:bg-brand-900 hover:text-white transition-all whitespace-nowrap text-center"
                >
                  Apply Now
                </Link>
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {job.desc}
              </p>
            </div>
          ))}
        </div>

        {/* General Application */}
        <div className="mt-16 bg-brand-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't see the right role?</h3>
            <p className="text-gray-300 mb-8">
              We are always looking for talented individuals. Send us your resume and tell us how you can make an impact at ZetaX.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-brand-900 font-bold rounded-lg hover:bg-brand-accent transition-colors">
              Contact Recruiting <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;