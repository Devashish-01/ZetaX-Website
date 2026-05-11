import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import AiIntegration from './pages/services/AiIntegration';
import LeadAutomation from './pages/services/LeadAutomation';
import Products from './pages/Products';
import ZetaxLeadGenerator from './pages/product/ZetaxLeadGenerator';
import DoctorManagement from './pages/product/DoctorManagement';
import CustomBusiness from './pages/product/CustomBusiness';
import VirtualTryon from './pages/product/VirtualTryon';
import HowWeWork from './pages/HowWeWork';
import Enterprise from './pages/Enterprise';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import NotFound from './pages/NotFound';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Services */}
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/ai-integration" element={<AiIntegration />} />
            <Route path="/services/lead-automation" element={<LeadAutomation />} />

            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/product/zetax-lead-generator" element={<ZetaxLeadGenerator />} />
            <Route path="/product/doctor-management" element={<DoctorManagement />} />
            <Route path="/product/custom-business" element={<CustomBusiness />} />
            <Route path="/product/virtual-tryon" element={<VirtualTryon />} />

            {/* General */}
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legal */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />

            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
