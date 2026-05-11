import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Shield, FileText, ArrowRight } from 'lucide-react';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    desc: 'Required for the website to function. They enable basic features like page navigation, form submissions, and security. The site won\'t work properly without these.',
    canDisable: false,
  },
  {
    name: 'Analytics Cookies',
    desc: 'Help us understand how visitors use the site (e.g. Google Analytics 4, Microsoft Clarity). Data is aggregated and anonymised. We use this to improve the user experience.',
    canDisable: true,
  },
  {
    name: 'Functional Cookies',
    desc: 'Remember your preferences such as language or region, providing a personalised experience. These are non-essential but improve usability.',
    canDisable: true,
  },
  {
    name: 'Advertising Cookies',
    desc: 'We do NOT currently use advertising or cross-site tracking cookies.',
    canDisable: true,
  },
];

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-brand-900/5 p-3 rounded-xl">
              <Lock className="text-brand-900" size={22} />
            </div>
            <span className="text-xs font-bold bg-brand-accent/20 text-brand-900 px-3 py-1 rounded-full uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-brand-900 mb-3">Cookie Policy</h1>
          <p className="text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy explains what cookies are, how <strong>ZetaX</strong> uses them, and how you can control them. Cookies are small text files placed on your device when you visit a website.
          </p>
        </div>

        <h2 className="text-xl font-bold text-brand-900 mb-6">Types of cookies we use</h2>

        <div className="space-y-4 mb-12">
          {cookieTypes.map((c) => (
            <div key={c.name} className="border border-gray-200 rounded-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="font-bold text-brand-900">{c.name}</h3>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    c.canDisable ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {c.canDisable ? 'Optional' : 'Always Active'}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-brand-900 mb-4">How to control cookies</h2>
        <div className="space-y-3 text-gray-600 leading-relaxed mb-12">
          <p>
            You can control or delete cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing ones, or be notified when new ones are set.
          </p>
          <p>
            Here are quick links for popular browsers:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-900 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-brand-900 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-900 hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-brand-900 hover:underline">Microsoft Edge</a></li>
          </ul>
          <p className="text-sm bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <strong>Note:</strong> Disabling cookies may affect the functionality of our website. Some forms or features may not work as expected.
          </p>
        </div>

        <div className="bg-brand-900 rounded-2xl p-8 text-white">
          <h3 className="font-bold text-xl mb-2">Questions?</h3>
          <p className="text-gray-300 mb-4">If you have any questions about our use of cookies, please reach out.</p>
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
          <Link to="/terms" className="text-brand-900 hover:underline flex items-center gap-1.5">
            <FileText size={14} /> Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
