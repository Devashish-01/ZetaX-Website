import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search, Compass, MessageCircle } from 'lucide-react';

const popularLinks = [
  { name: 'All Products', path: '/products' },
  { name: 'Lead Generator', path: '/product/zetax-lead-generator' },
  { name: 'Doctor Management', path: '/product/doctor-management' },
  { name: 'Virtual Try-On', path: '/product/virtual-tryon' },
  { name: 'Custom Business Solutions', path: '/product/custom-business' },
  { name: 'How We Work', path: '/how-we-work' },
  { name: 'Contact Us', path: '/contact' },
];

const NotFound: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Big 404 */}
        <div className="relative inline-block mb-8">
          <h1 className="text-[140px] sm:text-[200px] font-black text-brand-900/5 leading-none select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="text-brand-accent" size={64} strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 mb-4">
          Hmm, this page took a wrong turn
        </h2>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
          The page you're looking for doesn't exist, has moved, or the link is broken. Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-900 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <Home size={16} /> Go to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-900 border border-gray-200 font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <MessageCircle size={16} /> Contact Support
          </Link>
        </div>

        {/* Popular links */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-left">
          <div className="flex items-center gap-2 mb-5">
            <Search size={18} className="text-brand-900" />
            <h3 className="font-bold text-brand-900">Popular pages</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {popularLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all text-sm text-gray-700 hover:text-brand-900 group"
              >
                <span className="font-medium">{link.name}</span>
                <ArrowRight size={14} className="text-gray-400 group-hover:text-brand-900 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
