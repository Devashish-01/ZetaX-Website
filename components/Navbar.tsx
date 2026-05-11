import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown,
  Rocket, Bot, Zap,
  Database, Stethoscope, Briefcase, Shirt,
  Users, Info, Briefcase as BriefcaseIcon,
} from 'lucide-react';

const services = [
  { name: 'Website Development', path: '/services/website-development', icon: Rocket, desc: 'SEO-optimised web apps' },
  { name: 'AI Integration', path: '/services/ai-integration', icon: Bot, desc: 'Chatbots & automation' },
  { name: 'Lead Automation', path: '/services/lead-automation', icon: Zap, desc: 'WhatsApp & email funnels' },
];

const products = [
  { name: 'Lead Generator', path: '/product/zetax-lead-generator', icon: Database, desc: 'Verified B2B database' },
  { name: 'Doctor Management', path: '/product/doctor-management', icon: Stethoscope, desc: 'Clinic & hospital platform' },
  { name: 'Custom Business', path: '/product/custom-business', icon: Briefcase, desc: 'Bespoke ERP & CRM' },
  { name: 'Virtual Try-On', path: '/product/virtual-tryon', icon: Shirt, desc: 'AI fashion for e-commerce' },
];

const company = [
  { name: 'About Us', path: '/about', icon: Info, desc: 'Our story & team' },
  { name: 'How We Work', path: '/how-we-work', icon: BriefcaseIcon, desc: 'Our 6-step process' },
  { name: 'Enterprise', path: '/enterprise', icon: Users, desc: 'Large-scale builds' },
  { name: 'Careers', path: '/careers', icon: Users, desc: 'Join the team' },
];

type DropdownKey = 'services' | 'products' | 'company' | null;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Add shadow/border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isInSection = (prefix: string) => location.pathname.startsWith(prefix);

  return (
    <nav className={`bg-white/95 backdrop-blur-md fixed w-full z-50 transition-all duration-200 ${
      scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setIsOpen(false)}>
            <span className="font-black text-xl sm:text-2xl tracking-tight text-brand-900">
              Zetax<span className="text-brand-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">

            {/* Services dropdown */}
            <DesktopDropdown
              label="Services"
              isActive={isInSection('/services')}
              items={services}
              footer={null}
            />

            {/* Products dropdown */}
            <DesktopDropdown
              label="Products"
              isActive={isInSection('/product')}
              items={products}
              footer={{ label: 'View all products →', path: '/products' }}
            />

            {/* Company dropdown */}
            <DesktopDropdown
              label="Company"
              isActive={isInSection('/about') || isInSection('/how-we-work') || isInSection('/enterprise') || isInSection('/careers')}
              items={company}
              footer={null}
            />

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50 ${
                location.pathname === '/contact' ? 'text-brand-900' : 'text-gray-500 hover:text-brand-900'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="ml-2 bg-brand-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-px"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-brand-900 hover:bg-gray-50 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute w-full left-0 top-16 bg-white border-b border-gray-100 h-[calc(100vh-4rem)] overflow-y-auto z-40">
          <div className="px-4 py-6 space-y-1">

            {/* Services */}
            <MobileSection label="Services" items={services} />

            <div className="my-3 border-t border-gray-100" />

            {/* Products */}
            <Link
              to="/products"
              className="block px-3 py-2 text-xs font-black uppercase tracking-widest text-brand-accent"
            >
              All Products →
            </Link>
            <MobileSection label="Products" items={products} hideLabel />

            <div className="my-3 border-t border-gray-100" />

            {/* Company */}
            <MobileSection label="Company" items={company} />

            <div className="my-3 border-t border-gray-100" />

            <Link
              to="/contact"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-900 hover:bg-gray-50 rounded-xl"
            >
              Contact
            </Link>

            <div className="pt-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-brand-900 text-white py-4 rounded-xl text-base font-bold hover:bg-gray-800 transition-colors shadow-lg"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

/* ─── Desktop Dropdown ─────────────────────────────────────────────────────── */
interface DropdownItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  desc: string;
}

const DesktopDropdown: React.FC<{
  label: string;
  isActive: boolean;
  items: DropdownItem[];
  footer: { label: string; path: string } | null;
}> = ({ label, isActive, items, footer }) => (
  <div className="relative group">
    <button
      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors relative hover:bg-gray-50 ${
        isActive ? 'text-brand-900' : 'text-gray-500 hover:text-brand-900'
      }`}
    >
      {label}
      <ChevronDown size={13} className="transition-transform group-hover:rotate-180 duration-200" />
      {/* Active underline */}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-accent rounded-full" />
      )}
    </button>

    {/* Dropdown panel */}
    <div className="absolute left-0 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
        {footer && (
          <Link
            to={footer.path}
            className="flex items-center px-4 py-3 bg-brand-900/5 text-xs font-bold text-brand-900 hover:bg-brand-900/10 transition-colors border-b border-gray-100"
          >
            {footer.label}
          </Link>
        )}
        <div className="p-2">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
            >
              <div className="w-9 h-9 bg-brand-900/5 group-hover/item:bg-brand-900 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                <item.icon size={16} className="text-brand-900 group-hover/item:text-brand-accent transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ─── Mobile Section ────────────────────────────────────────────────────────── */
const MobileSection: React.FC<{
  label: string;
  items: DropdownItem[];
  hideLabel?: boolean;
}> = ({ label, items, hideLabel }) => (
  <div>
    {!hideLabel && (
      <p className="px-3 py-2 text-xs font-black uppercase tracking-widest text-gray-400">{label}</p>
    )}
    {items.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div className="w-9 h-9 bg-brand-900/5 rounded-lg flex items-center justify-center flex-shrink-0">
          <item.icon size={16} className="text-brand-900" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{item.name}</p>
          <p className="text-xs text-gray-400">{item.desc}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default Navbar;
