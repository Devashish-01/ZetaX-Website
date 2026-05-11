import React, { useState } from 'react';
import { Briefcase, Heart, Globe, Zap, Coffee, Users, ArrowRight, MapPin, Clock, CheckCircle, Loader2, AlertCircle, X } from 'lucide-react';
import { CareerService } from '../services/api';
import { CareerApplicationData } from '../types';

const benefits = [
  { icon: Globe, title: 'Hybrid & Remote', desc: 'Work from our Indore office or remotely from anywhere in India. Output matters, not seat time.' },
  { icon: Heart, title: 'Health Insurance', desc: 'Group medical insurance up to ₹5L for you and your family, plus a wellness allowance.' },
  { icon: Zap, title: 'Latest Tech', desc: 'High-spec laptop, dual monitors, and a work-from-home setup allowance on day one.' },
  { icon: Coffee, title: 'Learning Budget', desc: 'Annual learning stipend for courses, books, and conferences. Fridays are for upskilling.' },
];

const openings = [
  {
    id: 1,
    role: 'Frontend Engineer (React / Next.js)',
    department: 'Engineering',
    location: 'Indore / Remote (India)',
    type: 'Full-time',
    desc: 'Build the dashboards behind our SaaS products — Lead Generator, Doctor Management, Virtual Try-On. 1–4 years experience in React/TypeScript expected.',
  },
  {
    id: 2,
    role: 'AI / Python Developer',
    department: 'AI & Data',
    location: 'Indore / Hybrid',
    type: 'Full-time',
    desc: 'Build and integrate LLM workflows using Gemini, OpenAI, and custom models. Hands-on Python, FastAPI, and RAG experience preferred.',
  },
  {
    id: 3,
    role: 'Business Development Executive',
    department: 'Sales',
    location: 'Indore (On-site)',
    type: 'Full-time',
    desc: 'Reach out to clinics, retail brands, and SMEs across India. Pitch our products, close deals, and own your pipeline. Fresher to 2 years experience welcome.',
  },
  {
    id: 4,
    role: 'UI / UX Designer',
    department: 'Design',
    location: 'Remote (India)',
    type: 'Full-time / Contract',
    desc: 'Shape the visual identity of ZetaX. Figma fluency and a portfolio that shows clean SaaS/dashboard work required.',
  },
  {
    id: 5,
    role: 'Digital Marketing Intern',
    department: 'Marketing',
    location: 'Indore / Remote',
    type: 'Internship (6 months)',
    desc: 'Help us grow on LinkedIn, Instagram and via SEO. Stipend ₹8,000–₹15,000/month with full-time conversion potential.',
  },
];

const emptyForm: CareerApplicationData = {
  fullName: '',
  email: '',
  phone: '',
  role: '',
  experience: '',
  portfolioUrl: '',
  whyZetax: '',
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Careers: React.FC = () => {
  const [applyRole, setApplyRole] = useState<string | null>(null);
  const [formData, setFormData] = useState<CareerApplicationData>(emptyForm);
  const [status, setStatus] = useState<FormStatus>('idle');

  const openForm = (role: string) => {
    setFormData({ ...emptyForm, role });
    setStatus('idle');
    setApplyRole(role);
    setTimeout(() => {
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const closeForm = () => {
    setApplyRole(null);
    setStatus('idle');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await CareerService.submitApplication(formData);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden bg-brand-900 text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-semibold tracking-wide uppercase mb-6">
            We're hiring in Indore & Remote
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Build India's Next <br />
            <span className="text-brand-accent">SaaS Success Story</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join a fast-moving team in Indore building real products that are used by clinics, retailers, and businesses across India.
          </p>
          <a href="#openings" className="inline-block bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors">
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
              We care about our people as much as our product. Here's what you can expect when you join the team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-900/5 text-brand-900 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture visual */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-44 bg-brand-900 rounded-xl flex flex-col items-center justify-center text-white gap-2 shadow-lg">
              <span className="text-3xl font-black text-brand-accent">4+</span>
              <span className="text-sm text-gray-300">Products Launched</span>
            </div>
            <div className="h-44 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex flex-col items-center justify-center text-white gap-2 shadow-lg">
              <span className="text-3xl font-black">80+</span>
              <span className="text-sm text-teal-100">Projects Delivered</span>
            </div>
            <div className="h-44 bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl flex flex-col items-center justify-center text-white gap-2 shadow-lg">
              <span className="text-3xl font-black">Indore</span>
              <span className="text-sm text-violet-200">Headquarters, MP</span>
            </div>
            <div className="h-44 bg-gradient-to-br from-rose-500 to-rose-800 rounded-xl flex flex-col items-center justify-center text-white gap-2 shadow-lg">
              <span className="text-3xl font-black text-rose-200">🇮🇳</span>
              <span className="text-sm text-rose-100">Built for India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Open Positions</h2>
          <p className="text-gray-600">Find your place in our growing team. Click "Apply" on any role to submit directly.</p>
        </div>

        <div className="space-y-4">
          {openings.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-900/30 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-brand-900">{job.role}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                  </div>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{job.desc}</p>
                </div>
                <button
                  onClick={() => openForm(job.role)}
                  className="shrink-0 px-6 py-2.5 bg-brand-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap flex items-center gap-2"
                >
                  Apply Now <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form — slides in when a role is selected */}
        {applyRole && (
          <div id="apply-form" className="mt-12 bg-white border-2 border-brand-900/20 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-brand-900 px-8 py-5 flex items-center justify-between text-white">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Applying for</p>
                <h3 className="text-lg font-bold">{applyRole}</h3>
              </div>
              <button onClick={closeForm} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                  <p className="text-gray-500 mb-2 max-w-md">
                    Thank you for applying. Our team reviews every application and will reach out within 3–5 business days if there's a match.
                  </p>
                  <p className="text-sm text-gray-400 mb-8">Keep an eye on your inbox at <span className="font-medium">{formData.email}</span>.</p>
                  <button
                    onClick={closeForm}
                    className="text-brand-900 font-semibold border border-brand-900/20 px-6 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    View Other Roles
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience <span className="text-red-500">*</span></label>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select experience</option>
                      <option value="Fresher (0–6 months)">Fresher (0–6 months)</option>
                      <option value="0–1 year">0–1 year</option>
                      <option value="1–2 years">1–2 years</option>
                      <option value="2–4 years">2–4 years</option>
                      <option value="4–7 years">4–7 years</option>
                      <option value="7+ years">7+ years</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio / LinkedIn / GitHub URL</label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourname"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you want to join ZetaX? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="whyZetax"
                      required
                      rows={4}
                      value={formData.whyZetax}
                      onChange={handleChange}
                      placeholder="Tell us about yourself, what excites you about this role, and any relevant experience or projects..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="md:col-span-2 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}

                  <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto bg-brand-900 text-white font-bold px-10 py-3.5 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <><Loader2 className="animate-spin" size={20} /> Submitting…</>
                      ) : (
                        <>Submit Application <ArrowRight size={16} /></>
                      )}
                    </button>
                    <p className="text-xs text-gray-400">
                      Your details are sent securely to our team. We never share your information.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* General Application */}
        <div className="mt-16 bg-brand-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't see the right role?</h3>
            <p className="text-gray-300 mb-8">
              We're always looking for talented people. Click below to send us an open application and we'll keep you in mind for future openings.
            </p>
            <button
              onClick={() => openForm('Open Application')}
              className="inline-flex items-center px-6 py-3 bg-white text-brand-900 font-bold rounded-xl hover:bg-brand-accent transition-colors"
            >
              Send Open Application <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
