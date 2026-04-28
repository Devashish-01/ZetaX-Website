import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Smartphone, Search, BarChart, MessageCircle, ArrowRight } from 'lucide-react';

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

      {/* Who is it for */}
      <div className="bg-gray-50 py-24">
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
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
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