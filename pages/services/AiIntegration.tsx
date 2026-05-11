import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageSquare, Brain, BarChart, User, ArrowRight } from 'lucide-react';

const AiIntegration: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-900 to-brand-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-brand-accent text-xs font-semibold tracking-wide uppercase mb-6">
            Powered by Gemini & GPT-4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Intelligent AI Solutions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Deploy next-generation chatbots, automated lead qualification, and predictive analytics engines tailored for Indian businesses.
          </p>
          <Link to="/contact" className="inline-flex items-center px-7 py-3 bg-brand-accent text-brand-900 font-bold rounded-lg hover:bg-white transition-colors">
            Book a Consultation <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Transform Customer Experience</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-purple-100 p-2 rounded-lg text-purple-600 h-fit">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI Website Chatbot</h3>
                    <p className="text-gray-600 mt-2">
                      24/7 customer support that understands context in English and Hindi, handles complex queries, and escalates to humans when needed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 h-fit">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI Lead Qualification</h3>
                    <p className="text-gray-600 mt-2">
                      Automatically score leads based on interactions and data points before they reach your sales team.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600 h-fit">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Reply Assistant</h3>
                    <p className="text-gray-600 mt-2">
                      Draft smart email responses and WhatsApp replies instantly, saving hours of manual work for your team.
                    </p>
                  </div>
                </div>

                 <div className="flex gap-4">
                  <div className="mt-1 bg-orange-100 p-2 rounded-lg text-orange-600 h-fit">
                    <BarChart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Analytics Summary</h3>
                    <p className="text-gray-600 mt-2">
                      Turn raw data tables into executive summaries written in plain English by AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
               <h4 className="font-bold text-brand-900 mb-2">Supported Engines</h4>
               <p className="text-sm text-gray-600">
                 We integrate directly with industry leaders like <span className="font-semibold text-purple-600">OpenAI (ChatGPT)</span> and <span className="font-semibold text-blue-600">Google Gemini</span> to ensure you get the best performance for your specific use case.
               </p>
            </div>
          </div>

          {/* Static Showcase (no live demo) */}
          <div className="relative lg:sticky lg:top-28">
             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20"></div>
             <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-brand-900 p-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="font-semibold">ZetaX AI Assistant</span>
                    </div>
                    <Bot size={20} className="text-brand-accent" />
                </div>

                <div className="p-4 space-y-4 bg-gray-50 min-h-[480px]">
                    {/* Static conversation showcase */}
                    <div className="flex justify-start">
                        <div className="max-w-[80%] bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                            <p className="text-sm leading-relaxed text-gray-800">
                                Hello! I'm the ZetaX AI Assistant. I can help with product info, pricing, and booking demos. How may I help you today?
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="max-w-[80%] bg-blue-600 text-white rounded-2xl rounded-br-none px-4 py-3">
                            <p className="text-sm leading-relaxed">
                                Do you have a clinic management system?
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="max-w-[80%] bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                            <p className="text-sm leading-relaxed text-gray-800">
                                Yes! Our <span className="font-semibold text-brand-900">Doctor Management System</span> covers patient records, scheduling, billing, prescriptions and pharmacy. Plans start at ₹1,999/month. Want me to book a free demo?
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="max-w-[80%] bg-blue-600 text-white rounded-2xl rounded-br-none px-4 py-3">
                            <p className="text-sm leading-relaxed">
                                Yes, this Saturday at 11 AM works.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="max-w-[80%] bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                            <p className="text-sm leading-relaxed text-gray-800">
                                Done! Your demo is booked for Saturday 11 AM IST. I've also sent a calendar invite to your email. A specialist will reach out 10 minutes before.
                            </p>
                            <p className="text-xs text-green-600 font-semibold mt-2 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span> Lead auto-logged in CRM
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-3 bg-white border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400">
                    This is a sample conversation. Want this on your website? <Link to="/contact" className="text-brand-900 font-semibold hover:underline">Book a demo →</Link>
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiIntegration;
