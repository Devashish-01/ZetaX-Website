import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Smartphone, Search, BarChart, MessageCircle, ArrowRight, Check } from 'lucide-react';

const WebsiteDevelopment: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-brand-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">High-Performance Website Development</h1>
            <p className="text-xl text-gray-300 mb-8">
              We build more than just websites. We build digital assets that capture leads, rank high on search engines, and drive real business growth.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-brand-accent text-brand-900 font-bold rounded-lg hover:bg-white transition-colors">
              Get a Quote <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { icon: Layout, title: 'Responsive UI/UX', desc: 'Pixel-perfect designs that look stunning on desktops, tablets, and mobile devices.' },
            { icon: Smartphone, title: 'Mobile First', desc: 'Optimized for the 70% of traffic that comes from mobile devices.' },
            { icon: Search, title: 'SEO Ready', desc: 'Built with semantic HTML and technical SEO best practices to help you rank.' },
            { icon: MessageCircle, title: 'WhatsApp Integration', desc: 'Direct chat integration to convert visitors into conversations instantly.' },
            { icon: BarChart, title: 'Advanced Analytics', desc: 'Integrated Google Analytics 4 and custom event tracking dashboards.' },
            { icon: Layout, title: 'Lead Capture Forms', desc: 'High-conversion forms connected directly to your CRM or email.' },
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-900 mb-3">Transparent Website Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Honest, India-friendly pricing. Pick a starting point — we'll customise the scope to your exact business.</p>
            <p className="text-xs text-gray-400 mt-3">All prices in INR, exclusive of 18% GST. One-time project pricing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹15,000',
                priceSuffix: 'onwards',
                desc: 'For solo professionals and local shops.',
                features: ['3–5 page responsive website', 'Mobile-first design', 'WhatsApp & contact form', 'Domain + hosting (Year 1)', 'Basic SEO setup', '30 days support'],
                cta: 'Get Quote',
                highlight: false,
              },
              {
                name: 'Business',
                price: '₹50,000',
                priceSuffix: 'onwards',
                desc: 'For growing SMEs and service brands.',
                features: ['8–15 page custom site', 'CMS for self-editing', 'Blog + SEO optimisation', 'Lead capture & CRM hook', 'Speed + analytics setup', '90 days support'],
                cta: 'Most Popular',
                highlight: true,
              },
              {
                name: 'Custom Web App',
                price: '₹1,50,000',
                priceSuffix: 'onwards',
                desc: 'For SaaS, marketplaces, and dashboards.',
                features: ['Custom UI/UX design', 'User auth & dashboards', 'Payment + API integrations', 'Admin panel', 'Scalable cloud deployment', '6 months support'],
                cta: 'Talk to Sales',
                highlight: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 border flex flex-col ${
                  pkg.highlight
                    ? 'bg-brand-900 border-brand-900 text-white shadow-2xl scale-105'
                    : 'bg-white border-gray-200 text-brand-900'
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${pkg.highlight ? 'text-brand-accent' : 'text-gray-400'}`}>
                  {pkg.name}
                </p>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-3xl font-black">{pkg.price}</span>
                  <span className={`text-xs mb-1 ${pkg.highlight ? 'text-gray-300' : 'text-gray-400'}`}>{pkg.priceSuffix}</span>
                </div>
                <p className={`text-sm mb-6 ${pkg.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{pkg.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={14} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-brand-accent' : 'text-green-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                    pkg.highlight
                      ? 'bg-brand-accent text-brand-900 hover:bg-white'
                      : 'bg-brand-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who is it for */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Who is this for?</h2>
              <ul className="space-y-4">
                {[
                  'Startups needing a robust MVP launch',
                  'SMEs looking to digitize their catalog',
                  'Real Estate agencies requiring property listings',
                  'Consultants and Service Providers'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-900 mb-2">Ready to start?</h3>
              <p className="text-gray-600 mb-6">Get a custom proposal within 24 hours.</p>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none" />
                <input type="email" placeholder="Business Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none" />
                 <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none text-gray-600">
                    <option>Select Budget Range</option>
                    <option>₹15,000 - ₹50,000 (Basic 5-page site)</option>
                    <option>₹50,000 - ₹1,50,000 (Business + SEO)</option>
                    <option>₹1,50,000 - ₹4,00,000 (Custom Web App)</option>
                    <option>₹4,00,000+ (Enterprise / SaaS)</option>
                </select>
                <button className="w-full bg-brand-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Request Proposal
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;