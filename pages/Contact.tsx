import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, MessageCircle, ArrowRight, Clock } from 'lucide-react';
import { ContactService } from '../services/api';
import { ContactFormData } from '../types';

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  company: '',
  requirement: '',
  message: '',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await ContactService.submitForm(formData);
      setStatus('success');
      setFormData(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-brand-900 text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Let's build something great</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tell us about your project. Our team responds within 24 hours with a clear proposal — no jargon, no pressure.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left: contact details */}
          <div className="lg:col-span-2 space-y-8">

            {/* WhatsApp — highlighted as primary channel */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-xl text-white flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp (Fastest Response)</h3>
                  <a
                    href="https://wa.me/919589781311?text=Hi%20ZetaX%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-semibold text-lg hover:underline block"
                  >
                    +91 95897 81311
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon–Sat, 10 AM – 7 PM IST</p>
                  <a
                    href="https://wa.me/919589781311?text=Hi%20ZetaX%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors"
                  >
                    Open WhatsApp <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-xl text-brand-900 flex-shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                <a href="mailto:zetax.buisness@gmail.com" className="text-gray-600 hover:text-brand-900 transition-colors">
                  zetax.buisness@gmail.com
                </a>
                <p className="text-xs text-gray-400 mt-1">Replies within 24 hours</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-xl text-brand-900 flex-shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                <a href="tel:+919589781311" className="text-gray-600 hover:text-brand-900 transition-colors">
                  +91 95897 81311
                </a>
                <p className="text-xs text-gray-400 mt-1">Mon–Sat, 10 AM – 7 PM IST</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-xl text-brand-900 flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=215-216+Sapna+Sangeeta+Rd+Agarwal+Nagar+Navlakha+Indore+Madhya+Pradesh+452001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-900 transition-colors leading-relaxed"
                >
                  215-216, Sapna Sangeeta Rd,<br />
                  Agarwal Nagar, Navlakha,<br />
                  Indore, Madhya Pradesh – 452001
                </a>
              </div>
            </div>

            {/* Response Promise */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <h4 className="font-bold text-brand-900 mb-3 text-sm uppercase tracking-wider">What happens next?</h4>
              <div className="space-y-3">
                {[
                  { step: '1', text: 'We review your requirement within 24 hours' },
                  { step: '2', text: 'We schedule a free 30-min discovery call' },
                  { step: '3', text: 'You receive a detailed proposal & quote' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-brand-900 text-brand-accent text-xs font-bold flex items-center justify-center flex-shrink-0">{s.step}</span>
                    {s.text}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                <Clock size={13} />
                No commitment required to get a quote.
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-brand-900 mb-2">Send us a message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill in the details below and we'll get back to you with a tailored proposal.</p>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-2">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                  <p className="text-sm text-gray-400 mb-8">For faster response, message us on WhatsApp.</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-brand-900 font-semibold border border-gray-200 px-5 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Send Another
                    </button>
                    <a
                      href="https://wa.me/919589781311"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2"
                    >
                      <MessageCircle size={16} /> WhatsApp Us
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rajesh@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company / Business Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Pvt. Ltd."
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">What do you need? <span className="text-red-500">*</span></label>
                      <select
                        name="requirement"
                        required
                        value={formData.requirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none bg-white"
                      >
                        <option value="">Select requirement</option>
                        <optgroup label="Products — Demo Request">
                          <option value="Demo: Lead Generator">Lead Generator Demo</option>
                          <option value="Demo: Doctor Management">Doctor Management Demo</option>
                          <option value="Demo: Virtual Try-On">Virtual Try-On Demo</option>
                          <option value="Demo: Custom Business">Custom Business Solution</option>
                        </optgroup>
                        <optgroup label="Services">
                          <option value="Website Development">Website Development</option>
                          <option value="AI Integration / Chatbot">AI Integration / Chatbot</option>
                          <option value="Lead Automation">Lead Automation (WhatsApp/Email)</option>
                        </optgroup>
                        <optgroup label="Enterprise">
                          <option value="Enterprise ERP/CRM">Enterprise ERP / CRM</option>
                          <option value="SaaS Development">SaaS Platform Development</option>
                          <option value="Enterprise Consultation">Enterprise Consultation</option>
                        </optgroup>
                        <option value="Other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Describe your project / requirement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us what you want to build, your budget range, timeline expectations, and any other details that will help us prepare a better proposal..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again or reach out via WhatsApp.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-base"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="animate-spin" size={20} /> Sending…</>
                    ) : (
                      <>Send Message — We'll Reply in 24 hrs <ArrowRight size={18} /></>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Or reach us instantly on{' '}
                    <a
                      href="https://wa.me/919589781311"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
