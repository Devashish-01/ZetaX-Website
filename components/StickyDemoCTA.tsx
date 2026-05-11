import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, X } from 'lucide-react';

interface StickyDemoCTAProps {
  productName: string;
  scrollThreshold?: number;
}

const StickyDemoCTA: React.FC<StickyDemoCTAProps> = ({
  productName,
  scrollThreshold = 500,
}) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed, scrollThreshold]);

  if (dismissed) return null;

  const waText = encodeURIComponent(
    `Hi ZetaX, I'm interested in the ${productName}. Can we schedule a demo?`
  );

  return (
    <div
      className={`fixed bottom-20 sm:bottom-6 left-0 right-0 z-30 flex justify-center px-4 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <div className="w-full max-w-2xl bg-brand-900 text-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 border border-white/10">
        {/* Text */}
        <div className="flex-grow min-w-0">
          <p className="text-sm font-bold leading-tight truncate">Interested in {productName}?</p>
          <p className="text-xs text-white/50 mt-0.5 hidden sm:block">Book a free 30-min demo — no commitment.</p>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={`https://wa.me/919589781311?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#1DA851] transition-colors"
          >
            <MessageCircle size={14} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-1.5 bg-brand-accent text-brand-900 text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-white transition-colors"
          >
            Book a Demo <ArrowRight size={13} />
          </Link>
        </div>

        {/* Dismiss */}
        <button
          onClick={() => { setDismissed(true); setVisible(false); }}
          className="flex-shrink-0 p-1.5 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Dismiss"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
};

export default StickyDemoCTA;
