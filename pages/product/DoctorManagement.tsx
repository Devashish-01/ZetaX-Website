import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Calendar, FileText, CreditCard, Users, Bell, ShieldCheck, ArrowRight, Check, Activity } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Patient Records',
    desc: 'Maintain complete digital health records including history, allergies, lab results, and visit notes — all in one searchable profile.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Manage appointments with drag-and-drop ease. Automated SMS/email reminders cut no-shows by up to 40%.',
  },
  {
    icon: FileText,
    title: 'Prescriptions & Notes',
    desc: 'Generate digital prescriptions, referral letters, and discharge summaries with one click. Fully printable and signable.',
  },
  {
    icon: CreditCard,
    title: 'Billing & Insurance',
    desc: 'Automate invoicing, process insurance claims, and track outstanding payments from a single billing dashboard.',
  },
  {
    icon: Activity,
    title: 'Lab & Diagnostic Integration',
    desc: 'Connect with diagnostic labs to receive results directly in the patient record. Eliminate manual data entry.',
  },
  {
    icon: Bell,
    title: 'Staff & Notifications',
    desc: 'Manage doctor schedules, nurse assignments, and ward allocations. Real-time alerts keep every team member in sync.',
  },
];

const modules = [
  { name: 'Outpatient (OPD)', included: true },
  { name: 'Inpatient (IPD)', included: true },
  { name: 'Emergency Department', included: true },
  { name: 'Pharmacy Management', included: true },
  { name: 'Lab & Radiology', included: true },
  { name: 'Telemedicine Module', included: true },
  { name: 'Multi-Branch Support', included: true },
  { name: 'Custom Workflows', included: true },
];

const plans = [
  {
    name: 'Clinic',
    price: '₹1,999',
    per: '/mo',
    desc: 'For single-doctor practices.',
    features: ['Up to 2 doctors', 'Patient records & scheduling', 'Digital prescriptions', 'WhatsApp reminders', 'Email support'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Hospital',
    price: '₹4,999',
    per: '/mo',
    desc: 'For multi-department facilities.',
    features: ['Unlimited doctors & staff', 'OPD + IPD + Pharmacy', 'Insurance claim automation', 'Lab integration', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    desc: 'For hospital chains & networks.',
    features: ['Multi-branch management', 'Custom module development', 'ABDM / HL7 integration', 'Dedicated support & SLA'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const DoctorManagement: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Healthcare</span>
            <span className="text-gray-400 text-sm">Doctor Management System</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand-900 mb-5 leading-tight">
                Run your clinic <span className="underline decoration-teal-400 decoration-4">smarter</span>, not harder
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                A complete hospital and clinic management platform built for modern healthcare providers. Cut paperwork, reduce errors, and focus on what matters — patient care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Book a Demo <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-brand-900 border border-gray-200 font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  See Pricing
                </Link>
              </div>
            </div>

            {/* Visual mockup */}
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-2 mb-5">
                <Stethoscope size={18} className="text-teal-300" />
                <span className="text-sm font-semibold">Patient Dashboard</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Rahul Mehta', age: 34, status: 'Appointment Today', color: 'bg-yellow-400/20 text-yellow-200' },
                  { name: 'Priya Sharma', age: 28, status: 'Lab Results Ready', color: 'bg-green-400/20 text-green-200' },
                  { name: 'James Wilson', age: 52, status: 'Follow-up Due', color: 'bg-blue-400/20 text-blue-200' },
                  { name: 'Aisha Khan', age: 41, status: 'Prescription Sent', color: 'bg-teal-400/20 text-teal-200' },
                ].map((p) => (
                  <div key={p.name} className="bg-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">{p.name}</p>
                      <p className="text-xs text-white/50">Age {p.age}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${p.color}`}>{p.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[{ v: '124', l: 'Patients Today' }, { v: '6', l: 'Pending Labs' }, { v: '3', l: 'Urgent Cases' }].map((s) => (
                  <div key={s.l} className="bg-white/10 rounded-lg p-3">
                    <p className="text-xl font-bold">{s.v}</p>
                    <p className="text-xs text-white/50 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 bg-teal-50 rounded-2xl p-8">
          {[
            { value: '500+', label: 'Clinics & Hospitals' },
            { value: '40%', label: 'Fewer No-Shows' },
            { value: '3×', label: 'Faster Billing' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-teal-700">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Everything your team needs</h2>
          <p className="text-gray-500 mb-10">From reception to discharge — one platform handles it all.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="bg-teal-50 p-3 rounded-lg inline-block mb-4">
                    <Icon className="text-teal-700" size={22} />
                  </div>
                  <h3 className="font-bold text-brand-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modules */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Included modules</h2>
          <p className="text-gray-500 mb-8">Every plan includes access to all core modules. No feature gating.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m) => (
              <div key={m.name} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                <Check size={16} className="text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{m.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Pricing</h2>
          <p className="text-gray-500 mb-2">Designed for clinics of every size. 14-day free trial included.</p>
          <p className="text-xs text-gray-400 mb-10">All prices in INR, exclusive of 18% GST. Billed monthly.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border flex flex-col ${
                  plan.highlight
                    ? 'bg-teal-700 border-teal-700 text-white shadow-2xl scale-105'
                    : 'bg-white border-gray-200 text-brand-900'
                }`}
              >
                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${plan.highlight ? 'text-teal-200' : 'text-gray-400'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-teal-200' : 'text-gray-400'}`}>{plan.per}</span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.highlight ? 'text-teal-100' : 'text-gray-500'}`}>{plan.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={14} className={plan.highlight ? 'text-teal-200' : 'text-green-500'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                    plan.highlight
                      ? 'bg-white text-teal-700 hover:bg-teal-50'
                      : 'bg-teal-700 text-white hover:bg-teal-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-teal-50 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6">
          <ShieldCheck className="text-teal-600 flex-shrink-0 mt-1" size={28} />
          <div>
            <h3 className="font-bold text-lg text-brand-900 mb-2">HIPAA & Data Security</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
              Patient data is encrypted at rest and in transit. Our infrastructure is HIPAA-aligned and regularly audited. Role-based access controls ensure only authorized staff can view sensitive records.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorManagement;
