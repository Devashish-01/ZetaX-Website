import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '919589781311';
const PREFILLED_MESSAGE = encodeURIComponent("Hi ZetaX, I'd like to know more about your products and services.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`;

const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Tooltip / Mini message */}
      {showTooltip && (
        <div className="relative bg-white shadow-2xl rounded-2xl p-4 max-w-[240px] border border-gray-100 animate-fade-in-up">
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-0.5 transition-colors"
          >
            <X size={12} className="text-gray-600" />
          </button>
          <p className="text-sm font-semibold text-brand-900 mb-1">Need help? 👋</p>
          <p className="text-xs text-gray-500 leading-snug">
            Chat with us on WhatsApp — we reply within minutes.
          </p>
          {/* Tail */}
          <div className="absolute bottom-[-6px] right-7 w-3 h-3 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
        </div>
      )}

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        onMouseEnter={() => !dismissed && setShowTooltip(true)}
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"></span>

        <MessageCircle size={26} fill="currentColor" strokeWidth={0} className="relative z-10" />

        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
