import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Lock, ArrowRight } from 'lucide-react';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: [
      'By accessing or using the ZetaX website and any of its products or services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.',
    ],
  },
  {
    title: 'Services Provided',
    body: [
      'ZetaX provides software products (such as Lead Generator, Doctor Management, Virtual Try-On) and custom development services (web, AI, automation, ERP/CRM).',
      'We reserve the right to modify, suspend, or discontinue any product or service at any time, with reasonable notice.',
    ],
  },
  {
    title: 'Pricing & Payment',
    body: [
      'All product subscription prices on this website are listed in Indian Rupees (INR) and are exclusive of 18% GST.',
      'Custom project pricing is agreed in writing through a Statement of Work (SoW) before any work begins.',
      'Payments for projects are typically split into milestones (e.g. 30% upfront, 40% at design approval, 30% on delivery).',
      'All payments are non-refundable once work has commenced, unless otherwise specified in your SoW.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'For custom development projects, all source code, designs, and deliverables become your property upon full payment.',
      'For our SaaS products (Lead Generator, Doctor Management, Virtual Try-On, etc.), ZetaX retains all intellectual property rights. You receive a non-exclusive licence to use the product as per your subscription plan.',
      'You may not copy, resell, sublicense, or reverse-engineer any of our SaaS products.',
    ],
  },
  {
    title: 'Acceptable Use',
    body: [
      'You agree not to use our products or services for any illegal, fraudulent, or harmful activity.',
      'You agree not to send spam, conduct unsolicited bulk outreach, or violate any local privacy or marketing laws (including DPDP Act 2023, GDPR, CCPA) using our products.',
      'We reserve the right to suspend or terminate accounts found to be in violation of these terms.',
    ],
  },
  {
    title: 'Service Availability',
    body: [
      'We aim for 99.9% uptime on our hosted SaaS products. Scheduled maintenance will be communicated in advance.',
      'We are not liable for downtime caused by third-party service providers (cloud hosting, email gateways, payment processors) outside our reasonable control.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'To the maximum extent permitted by law, ZetaX is not liable for any indirect, incidental, or consequential damages arising from your use of our products or services.',
      'Our total liability under any subscription or project will not exceed the total amount paid by you in the preceding 12 months.',
    ],
  },
  {
    title: 'Termination',
    body: [
      'You may cancel a subscription at any time from your account settings or by contacting us. Refunds for unused periods are not provided unless required by law.',
      'We reserve the right to terminate or suspend access to our products or services for violation of these terms.',
    ],
  },
  {
    title: 'Governing Law & Jurisdiction',
    body: [
      'These Terms of Service are governed by the laws of India.',
      'Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Indore, Madhya Pradesh.',
    ],
  },
  {
    title: 'Changes to Terms',
    body: [
      'We may update these Terms of Service from time to time. Material changes will be notified via email or a notice on this website. Continued use of our services constitutes acceptance of the updated terms.',
    ],
  },
];

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-brand-900/5 p-3 rounded-xl">
              <FileText className="text-brand-900" size={22} />
            </div>
            <span className="text-xs font-bold bg-brand-accent/20 text-brand-900 px-3 py-1 rounded-full uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-brand-900 mb-3">Terms of Service</h1>
          <p className="text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            Welcome to <strong>ZetaX</strong>. These Terms of Service set out the rules for using our website, products, and services. Please read them carefully — by using ZetaX, you agree to be bound by them.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-accent font-black text-sm">{String(idx + 1).padStart(2, '0')}.</span>
                <h2 className="text-xl font-bold text-brand-900">{section.title}</h2>
              </div>
              <div className="space-y-3 pl-8">
                {section.body.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-900 rounded-2xl p-8 mt-16 text-white">
          <h3 className="font-bold text-xl mb-2">Need clarification?</h3>
          <p className="text-gray-300 mb-4">If anything in these terms is unclear, please contact us before using our services.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-white transition-colors"
          >
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 mt-8 text-sm">
          <Link to="/privacy" className="text-brand-900 hover:underline flex items-center gap-1.5">
            <Shield size={14} /> Privacy Policy
          </Link>
          <Link to="/cookies" className="text-brand-900 hover:underline flex items-center gap-1.5">
            <Lock size={14} /> Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
