import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Rocket, Bot, Zap, Database } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product/zetax-lead-generator' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Enterprise', path: '/enterprise' },
    { name: 'Careers', path: '/careers' },
  ];

  const services = [
    { name: 'Website Development', path: '/services/website-development', icon: Rocket },
    { name: 'AI Integration', path: '/services/ai-integration', icon: Bot },
    { name: 'Lead Automation', path: '/services/lead-automation', icon: Zap },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-brand-900">Zetax.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className={`text-sm font-medium hover:text-brand-900 transition-colors ${isActive('/') ? 'text-brand-900' : 'text-gray-500'}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 text-sm font-medium hover:text-brand-900 transition-colors ${location.pathname.includes('/services') ? 'text-brand-900' : 'text-gray-500'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services <ChevronDown size={14} />
              </button>
              
              <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-900 rounded-md transition-colors"
                  >
                    <service.icon className="w-5 h-5 text-brand-900" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium hover:text-brand-900 transition-colors ${isActive(link.path) ? 'text-brand-900' : 'text-gray-500'}`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-brand-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-transparent hover:border-brand-accent/30"
            >
              Get Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-900"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-40">
          <div className="px-4 pt-4 pb-8 space-y-2">
             <Link
                to="/"
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-900 hover:bg-gray-50 border-b border-gray-50"
              >
                Home
              </Link>
            <div className="px-3 pt-4 pb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Services</div>
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block pl-3 pr-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-brand-900 hover:bg-gray-50 flex items-center gap-3"
              >
                <div className="p-1.5 bg-brand-900/5 rounded-md text-brand-900">
                  <service.icon size={18} />
                </div>
                {service.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-4"></div>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-900 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 pb-2 px-3">
              <Link
                to="/contact"
                className="block w-full text-center bg-brand-900 text-white px-5 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;