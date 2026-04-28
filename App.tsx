import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import AiIntegration from './pages/services/AiIntegration';
import LeadAutomation from './pages/services/LeadAutomation';
import ZetaxLeadGenerator from './pages/product/ZetaxLeadGenerator';
import HowWeWork from './pages/HowWeWork';
import Enterprise from './pages/Enterprise';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

// ScrollToTop Component to fix scroll position on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Services */}
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/ai-integration" element={<AiIntegration />} />
            <Route path="/services/lead-automation" element={<LeadAutomation />} />
            
            {/* Product */}
            <Route path="/product/zetax-lead-generator" element={<ZetaxLeadGenerator />} />
            
            {/* General */}
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;