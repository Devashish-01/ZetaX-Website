import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Users, Globe, ShoppingBag, ArrowRight } from 'lucide-react';

const Enterprise: React.FC = () => {
  return (
    <div className="bg-white pt-24 pb-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl font-bold text-brand-900 mb-6">Enterprise Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Scalable, secure, and custom-architected systems for large organizations. We build the backbone of your digital operations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
             <Server className="text-brand-900 mb-6" size={40} />
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom ERP Systems</h3>
             <p className="text-gray-600 mb-6">
               Streamline resource planning with bespoke software tailored to your specific manufacturing or operational workflows.
             </p>
             <ul className="space-y-2 mb-6 text-sm text-gray-500">
                <li>• Inventory Management</li>
                <li>• HR & Payroll Modules</li>
                <li>• Supply Chain Tracking</li>
             </ul>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
             <Users className="text-brand-900 mb-6" size={40} />
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced CRM</h3>
             <p className="text-gray-600 mb-6">
               Go beyond standard tools. Get a CRM that fits your unique sales cycle, integrated with your existing data lakes.
             </p>
             <ul className="space-y-2 mb-6 text-sm text-gray-500">
                <li>• Custom Funnel Stages</li>
                <li>• Automated Reporting</li>
                <li>• Role-Based Access Control</li>
             </ul>
          </div>

           <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
             <Globe className="text-brand-900 mb-6" size={40} />
             <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS Platform Development</h3>
             <p className="text-gray-600 mb-6">
               Building a new product? We handle the entire engineering lifecycle for multi-tenant SaaS applications.
             </p>
          </div>

           <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
             <ShoppingBag className="text-brand-900 mb-6" size={40} />
             <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Marketplaces</h3>
             <p className="text-gray-600 mb-6">
               Complex multi-vendor platforms with integrated payment splitting, wallet systems, and vendor portals.
             </p>
          </div>
        </div>
      </div>

      <div className="bg-brand-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-4">Let's Discuss Requirements</h2>
           <p className="text-lg text-gray-300 mb-8">
             Enterprise systems are handled after detailed requirement discussion and architectural planning.
           </p>
           <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-brand-accent text-brand-900 font-bold rounded-lg hover:bg-white transition-colors">
             Schedule Consultation <ArrowRight className="ml-2" size={20} />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;