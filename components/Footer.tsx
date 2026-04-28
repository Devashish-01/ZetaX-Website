import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl text-white tracking-tight">Zetax.</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering businesses with next-gen AI automation, custom web solutions, and verified lead generation data.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-accent transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/product/zetax-lead-generator" className="hover:text-brand-accent transition-colors">Lead Generator</Link></li>
              <li><Link to="/services/ai-integration" className="hover:text-brand-accent transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services/website-development" className="hover:text-brand-accent transition-colors">Web Development</Link></li>
              <li><Link to="/how-we-work" className="hover:text-brand-accent transition-colors">How We Work</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/enterprise" className="hover:text-brand-accent transition-colors">Enterprise</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-accent mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=215-216+Sapna+Sangeeta+Rd+Agarwal+Nagar+Navlakha+Indore+Madhya+Pradesh+452001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors leading-snug"
                >
                  215-216, Sapna Sangeeta Rd,<br/>Agarwal Nagar, Indore, MP 452001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-accent" />
                <a 
                  href="https://wa.me/919589781311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  +91 95897 81311
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-accent" />
                <a href="mailto:zetax.buisness@gmail.com" className="hover:text-brand-accent transition-colors">
                  zetax.buisness@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ZetaX Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;