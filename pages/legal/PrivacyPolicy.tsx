import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Lock, FileText, ArrowRight } from 'lucide-react';

const sections = [
  {
    title: 'Information We Collect',
    body: [
      'We collect the information you provide when you contact us, request a demo, apply for a job, or use our products. This typically includes your name, email address, phone number, company name, and any details in the message field.',
      'We also collect basic technical information like your IP address, browser type, device type, and pages visited via standard web analytics tools. This data is anonymised and used only to improve the website experience.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'To respond to your enquiry, schedule demos, and send you proposals related to our products and services.',
      'To improve our website, products, and overall customer experience.',
      'To comply with legal obligations and respond to lawful requests from public authorities.',
      'We will never sell or rent your personal data to third parties.',
    ],
  },
  {
    title: 'Data Storage & Security',
    body: [
      'Your data is stored on secured servers hosted with reputed cloud providers (AWS / Vercel) located in India and globally.',
      'We use industry-standard encryption (TLS/HTTPS) for data in transit and encryption at rest for sensitive information.',
      'Access to your data within ZetaX is strictly limited to authorised team members on a need-to-know basis.',
    ],
  },
  {
    title: 'Cookies & Tracking',
    body: [
      'We use minimal cookies for essential website functionality, analytics (Google Analytics 4), and performance monitoring.',
      'You can disable cookies through your browser settings, but parts of the site may not work correctly.',
      'We do not use cookies for advertising or cross-site tracking.',
    ],
  },
  {
    title: 'Third-Party Services',
    body: [
      'We use third-party tools such as Formspree (for contact forms), Google Analytics, WhatsApp Business, and email delivery services. Each has its own privacy policy.',
      'When you click an external link or submit a form, the receiving service may collect additional data per their own terms.',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'You have the right to request a copy of the personal data we hold about you.',
      'You can ask us to correct or delete your data at any time by emailing us.',
      'You can opt out of marketing communications at any time by replying "unsubscribe" to any email from us.',
    ],
  },
  {
    title: 'Children\'s Privacy',
    body: [
      'Our services are intended for businesses and adults. We do not knowingly collect data from anyone under the age of 18.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The latest version will always be available on this page with an updated "Last Updated" date.',
    ],
  },
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-brand-900/5 p-3 rounded-xl">
              <Shield className="text-brand-900" size={22} />
            </div>
            <span className="text-xs font-bold bg-brand-accent/20 text-brand-900 px-3 py-1 rounded-full uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-brand-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            At <strong>ZetaX</strong>, your privacy matters. This Privacy Policy explains what information we collect when you visit our website or use our products, how we use it, and the rights you have over your data.
          </p>
        </div>

        {/* Sections */}
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

        {/* Contact callout */}
        <div className="bg-brand-900 rounded-2xl p-8 mt-16 text-white">
          <div className="flex items-start gap-4">
            <Mail className="text-brand-accent flex-shrink-0 mt-1" size={24} />
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2">Questions about your data?</h3>
              <p className="text-gray-300 mb-4">
                Email us at <a href="mailto:zetax.buisness@gmail.com" className="text-brand-accent hover:underline">zetax.buisness@gmail.com</a> or reach out on WhatsApp. We'll respond within 48 hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-white transition-colors"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Cross-link to Terms */}
        <div className="flex flex-wrap gap-4 mt-8 text-sm">
          <Link to="/terms" className="text-brand-900 hover:underline flex items-center gap-1.5">
            <FileText size={14} /> Terms of Service
          </Link>
          <Link to="/cookies" className="text-brand-900 hover:underline flex items-center gap-1.5">
            <Lock size={14} /> Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
