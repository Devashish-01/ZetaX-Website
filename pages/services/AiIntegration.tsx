import React, { useState } from 'react';
import { Bot, MessageSquare, Brain, BarChart, Send, User } from 'lucide-react';
import { AiService } from '../../services/api';

const AiIntegration: React.FC = () => {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hello! I am the ZetaX AI Assistant. How can I help optimize your business today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsTyping(true);

    try {
      const response = await AiService.sendMessage(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

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
            Deploy next-generation chatbots, automated lead qualification, and predictive analytics engines.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
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
                      24/7 customer support that understands context, handles complex queries, and escalates to humans when necessary.
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

          {/* Live Demo UI */}
          <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20"></div>
             <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[600px]">
                <div className="bg-brand-900 p-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="font-semibold">ZetaX AI Demo</span>
                    </div>
                    <Bot size={20} className="text-brand-accent" />
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                                msg.role === 'user' 
                                ? 'bg-blue-600 text-white rounded-br-none' 
                                : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                            }`}>
                                <p className="text-sm leading-relaxed">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 bg-white border-t border-gray-100">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input 
                            type="text" 
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Ask me about lead generation..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-900"
                        />
                        <button type="submit" className="bg-brand-900 text-white p-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                            <Send size={20} />
                        </button>
                    </form>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiIntegration;