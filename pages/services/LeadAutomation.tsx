import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Clock, ArrowRight } from 'lucide-react';

const LeadAutomation: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-brand-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Stop Losing Leads to Slow Follow-ups</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Automate your entire sales funnel. Reach customers instantly on WhatsApp, Email, and SMS the moment they express interest.
          </p>
          <Link to="/contact" className="inline-block bg-brand-accent text-brand-900 px-8 py-3 rounded-lg font-bold hover:bg-white transition-colors">
            Automate My Sales
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Visual Flow Diagram */}
        <div className="mb-24">
           <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-brand-900">How It Works</h2>
               <p className="text-gray-600">The 24/7 automated sales machine</p>
           </div>
           
           <div className="relative">
             {/* Connection Lines (Desktop) */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>

             <div className="grid md:grid-cols-4 gap-8">
                 <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg relative z-10 text-center group hover:-translate-y-2 transition-transform duration-300">
                     <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4 font-bold text-gray-500 group-hover:bg-brand-900 group-hover:text-brand-accent transition-colors">1</div>
                     <h3 className="font-bold text-lg mb-2">Lead Entry</h3>
                     <p className="text-sm text-gray-600">Customer fills form on website or Facebook ad.</p>
                 </div>

                 <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg relative z-10 text-center group hover:-translate-y-2 transition-transform duration-300">
                     <div className="w-12 h-12 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4 text-green-600 group-hover:bg-brand-900 group-hover:text-brand-accent transition-colors">
                        <MessageCircle size={24} />
                     </div>
                     <h3 className="font-bold text-lg mb-2">Instant WhatsApp</h3>
                     <p className="text-sm text-gray-600">System sends personalized welcome message in &lt; 5 seconds.</p>
                 </div>

                 <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg relative z-10 text-center group hover:-translate-y-2 transition-transform duration-300">
                     <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4 text-blue-600 group-hover:bg-brand-900 group-hover:text-brand-accent transition-colors">
                        <Mail size={24} />
                     </div>
                     <h3 className="font-bold text-lg mb-2">Drip Sequence</h3>
                     <p className="text-sm text-gray-600">Educational emails sent over 7 days to nurture trust.</p>
                 </div>

                 <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg relative z-10 text-center group hover:-translate-y-2 transition-transform duration-300">
                     <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4 text-purple-600 group-hover:bg-brand-900 group-hover:text-brand-accent transition-colors">
                        <Phone size={24} />
                     </div>
                     <h3 className="font-bold text-lg mb-2">Sales Alert</h3>
                     <p className="text-sm text-gray-600">When lead replies, your sales team gets an instant notification.</p>
                 </div>
             </div>
           </div>
        </div>

        {/* Channels */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500 text-white rounded-lg">
                    <MessageCircle size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">WhatsApp Automation</h3>
            </div>
            <ul className="space-y-4">
                <li className="flex gap-3 text-gray-700">
                    <Clock size={20} className="text-green-600 shrink-0" />
                    <span>Send automated brochures and pricing PDFs instantly.</span>
                </li>
                 <li className="flex gap-3 text-gray-700">
                    <Clock size={20} className="text-green-600 shrink-0" />
                    <span>Recover abandoned carts with gentle reminders.</span>
                </li>
                 <li className="flex gap-3 text-gray-700">
                    <Clock size={20} className="text-green-600 shrink-0" />
                    <span>Schedule appointments without human intervention.</span>
                </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 text-white rounded-lg">
                    <Mail size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Email & Call Assist</h3>
            </div>
            <ul className="space-y-4">
                <li className="flex gap-3 text-gray-700">
                    <Clock size={20} className="text-blue-600 shrink-0" />
                    <span>AI-written personalized email follow-ups.</span>
                </li>
                 <li className="flex gap-3 text-gray-700">
                    <Clock size={20} className="text-blue-600 shrink-0" />
                    <span>Auto-dialer integration for your sales team.</span>
                </li>
                 <li className="flex gap-3 text-gray-700">
                    <Clock size={20} className="text-blue-600 shrink-0" />
                    <span>Track open rates, clicks, and engagement.</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadAutomation;