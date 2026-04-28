import React, { useState, useEffect } from 'react';
import { Search, MapPin, Filter, Download, Lock, Check, AlertCircle } from 'lucide-react';
import { LeadService } from '../../services/api';
import { Lead } from '../../types';

const ZetaxLeadGenerator: React.FC = () => {
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city || !category) return;
    
    setLoading(true);
    setHasSearched(true);
    try {
      const data = await LeadService.getLeads(city, category);
      setLeads(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    if (leads.length === 0) return;
    alert("This feature is available in the paid plan. Contact us for access.");
    // In real app: await LeadService.exportLeads(leads.map(l => l.id));
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-accent/20 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Product</span>
            <span className="text-gray-400 text-sm">v2.0.1 (Live)</span>
          </div>
          <h1 className="text-4xl font-bold text-brand-900 mb-4">ZetaX Lead Generator</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Access verified business data instantly. Our engine crawls, verifies, and organizes millions of business records to help you find your next customer.
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <form onSubmit={handleSearch} className="grid md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">City / Region</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. New York, London" 
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Category</label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="">Select Category</option>
                  <option value="Real Estate">Real Estate Agencies</option>
                  <option value="Software">Software Companies</option>
                  <option value="Restaurants">Restaurants & Cafes</option>
                  <option value="Legal">Legal Firms</option>
                  <option value="Construction">Construction</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-900 text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? 'Searching...' : <><Search size={18} /> Find Leads</>}
                </button>
            </div>
             <div className="md:col-span-2">
                <button 
                  type="button"
                  onClick={handleExport} 
                  className="w-full bg-white text-brand-900 border border-brand-900 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={18} /> Export
                </button>
            </div>
          </form>
        </div>

        {/* Results Area */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-[400px]">
              <div className="w-12 h-12 border-4 border-brand-900 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500">Scanning database...</p>
            </div>
          ) : hasSearched && leads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Business Name</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Website</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{lead.businessName}</td>
                      <td className="px-6 py-4 text-gray-600">{lead.category}</td>
                      <td className="px-6 py-4 text-gray-600">{lead.location}</td>
                      <td className="px-6 py-4 text-gray-600 font-mono text-sm">{lead.phone}</td>
                      <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer text-sm truncate max-w-[150px]">{lead.website}</td>
                      <td className="px-6 py-4">
                        {lead.verified ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Check size={12} /> Verified
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Unverified
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
                 <p className="text-sm text-gray-500">Showing {leads.length} results. <span className="text-brand-900 font-semibold cursor-pointer hover:underline">Upgrade to Pro</span> to see more.</p>
              </div>
            </div>
          ) : hasSearched && leads.length === 0 ? (
             <div className="flex flex-col items-center justify-center h-[400px] text-gray-400">
               <AlertCircle size={48} className="mb-4 text-gray-300" />
               <p>No results found for these criteria.</p>
             </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px] bg-gray-50/50">
              <Search size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-500">Select a city and category to start searching.</p>
            </div>
          )}
        </div>

        {/* Pricing & Compliance */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
           <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg text-brand-900 mb-4">Security & Compliance</h3>
              <div className="flex items-start gap-3">
                 <Lock className="text-green-500 mt-1" size={20} />
                 <p className="text-sm text-gray-600">
                    All data is sourced from public records and compliant with GDPR/CCPA regulations. 
                    We do not sell private personal data. Usage of this data for marketing must comply with your local laws.
                 </p>
              </div>
           </div>
           <div className="bg-brand-900 p-6 rounded-xl text-white">
              <h3 className="font-bold text-lg mb-2">Enterprise API Access</h3>
              <p className="text-sm text-gray-300 mb-4">
                 Need to integrate this data directly into your CRM or SaaS product?
              </p>
              <button className="bg-brand-accent text-brand-900 text-sm font-bold px-4 py-2 rounded hover:bg-white transition-colors">
                 View API Documentation
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ZetaxLeadGenerator;