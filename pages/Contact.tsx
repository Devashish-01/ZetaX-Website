import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ContactService } from '../services/api';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    requirement: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await ContactService.submitForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', requirement: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-brand-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-12">
              Have a project in mind? Looking for a demo of our lead generator? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-brand-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Visit Us</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=215-216+Sapna+Sangeeta+Rd+Agarwal+Nagar+Navlakha+Indore+Madhya+Pradesh+452001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-900 transition-colors"
                  >
                    215-216, Sapna Sangeeta Rd,<br />Agarwal Nagar, Navlakha,<br />Indore, Madhya Pradesh 452001
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-brand-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <a href="mailto:zetax.buisness@gmail.com" className="text-gray-600 hover:text-brand-900 transition-colors block">
                    zetax.buisness@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg text-brand-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call / WhatsApp</h3>
                  <a 
                    href="https://wa.me/919589781311"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-brand-900 transition-colors block"
                  >
                    +91 95897 81311
                  </a>
                  <p className="text-gray-500 text-sm">Mon-Sat, 10am - 7pm IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for reaching out. We will be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-900 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Requirement</label>
                  <select 
                    name="requirement"
                    required
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none bg-white"
                  >
                    <option value="">Select Requirement</option>
                    <option value="Website Development">Website Development</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Lead Automation">Lead Automation</option>
                    <option value="Product Demo">Product Demo (Lead Generator)</option>
                    <option value="Enterprise Solution">Enterprise Solution</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-900 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-900 text-white font-bold py-3.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;