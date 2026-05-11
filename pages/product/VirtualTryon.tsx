import React from 'react';
import { Link } from 'react-router-dom';
import { Shirt, Camera, Sparkles, ShoppingBag, BarChart2, RefreshCw, ArrowRight, Check, Zap, Globe } from 'lucide-react';
import StickyDemoCTA from '../../components/StickyDemoCTA';

const features = [
  {
    icon: Camera,
    title: 'Real Photo Mode',
    desc: 'Shoppers upload their photo and our AI maps garments onto their actual body shape, skin tone, and posture.',
  },
  {
    icon: Sparkles,
    title: 'AI Body-Fit Mapping',
    desc: 'Our model analyzes body proportions and drapes garments with realistic fabric physics — no awkward overlays.',
  },
  {
    icon: ShoppingBag,
    title: 'Live Catalog Integration',
    desc: 'Connect directly to your Shopify, WooCommerce, or custom store. Any product with an image is instantly try-onable.',
  },
  {
    icon: RefreshCw,
    title: 'Mix & Match Outfits',
    desc: 'Customers can combine tops, bottoms, and accessories to build complete looks and save their favourites.',
  },
  {
    icon: BarChart2,
    title: 'Conversion Analytics',
    desc: 'Track try-on engagement, items saved, and add-to-cart rates. See exactly which products benefit most.',
  },
  {
    icon: Globe,
    title: 'Plugin or API',
    desc: 'Drop our widget onto any e-commerce page in minutes, or integrate via REST API for full control.',
  },
];

const steps = [
  { num: '01', title: 'Connect your catalog', desc: 'Link your store or upload a product CSV. All garment images are automatically processed.' },
  { num: '02', title: 'Add the widget', desc: 'Embed our try-on button with two lines of code. Works on any platform — no redesign needed.' },
  { num: '03', title: 'Shoppers try, then buy', desc: 'Customers see items on themselves before checkout, dramatically reducing uncertainty and returns.' },
];

const plans = [
  {
    name: 'Starter',
    price: '₹2,499',
    per: '/mo',
    desc: 'For small boutiques.',
    features: ['Up to 200 SKUs', '500 try-ons/month', 'Shopify & WooCommerce', '1 domain', 'Email support'],
    cta: 'Request Access',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹7,999',
    per: '/mo',
    desc: 'For scaling e-commerce brands.',
    features: ['Unlimited SKUs', '5,000 try-ons/month', 'Mix & match outfits', 'Analytics dashboard', '3 domains', 'Priority WhatsApp support'],
    cta: 'Book a Demo',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    desc: 'For marketplaces & fashion platforms.',
    features: ['Unlimited try-ons', 'Custom AI model tuning', 'White-label widget', 'Full API access', 'Dedicated SLA'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const VirtualTryon: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">AI / Fashion</span>
            <span className="text-gray-400 text-sm">Virtual Try-On</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand-900 mb-5 leading-tight">
                See it <span className="underline decoration-rose-400 decoration-4">on you</span> before you buy it
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                AI-powered virtual clothing fitting for your e-commerce store. Let shoppers try outfits instantly — reduce returns, increase confidence, and boost conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-rose-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-rose-700 transition-colors"
                >
                  Get a Demo <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-brand-900 border border-gray-200 font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  See Pricing
                </Link>
              </div>
            </div>

            {/* Visual mockup */}
            <div className="bg-gradient-to-br from-rose-600 to-rose-900 rounded-2xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-2 mb-5">
                <Shirt size={18} className="text-rose-200" />
                <span className="text-sm font-semibold">Virtual Try-On</span>
                <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Zap size={10} className="text-yellow-300" /> AI Active
                </span>
              </div>
              {/* Mock try-on interface */}
              <div className="bg-white/10 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                    <Camera size={20} className="text-white/60" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-1">Your photo</p>
                    <div className="w-20 h-2 bg-white/20 rounded mb-1"></div>
                    <div className="w-14 h-2 bg-white/20 rounded"></div>
                  </div>
                  <ArrowRight size={16} className="text-white/40 mx-2" />
                  <div className="w-16 h-20 bg-rose-400/40 rounded-lg flex items-center justify-center border border-rose-300/30">
                    <Shirt size={20} className="text-rose-200" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 mb-1">AI result</p>
                    <div className="w-20 h-2 bg-white/20 rounded mb-1"></div>
                    <div className="w-14 h-2 bg-white/20 rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['Top', 'Dress', 'Jacket', 'Jeans'].map((label, i) => (
                    <div
                      key={label}
                      className={`rounded-lg p-2 text-center text-xs ${i === 0 ? 'bg-rose-400/40 border border-rose-300/50' : 'bg-white/10'}`}
                    >
                      <Shirt size={14} className="mx-auto mb-1 text-white/70" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                {[{ v: '↓28%', l: 'Return Rate' }, { v: '+41%', l: 'Conversions' }, { v: '2.3×', l: 'Time on Page' }].map((s) => (
                  <div key={s.l} className="bg-white/10 rounded-lg p-3">
                    <p className="text-lg font-bold">{s.v}</p>
                    <p className="text-white/50 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 bg-rose-50 rounded-2xl p-8">
          {[
            { value: '28%', label: 'Avg. Return Reduction' },
            { value: '41%', label: 'Conversion Uplift' },
            { value: '2.3×', label: 'Time on Product Page' },
            { value: '<2s', label: 'Try-On Generation Time' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-rose-600">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Powered by cutting-edge AI</h2>
          <p className="text-gray-500 mb-10">Every feature is designed to get shoppers from browsing to buying faster.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="bg-rose-50 p-3 rounded-lg inline-block mb-4">
                    <Icon className="text-rose-600" size={22} />
                  </div>
                  <h3 className="font-bold text-brand-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-20 bg-gray-50 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Live in 15 minutes</h2>
          <p className="text-gray-500 mb-10">Seriously — no redesign, no dev sprint required.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col">
                <span className="text-5xl font-black text-rose-200 mb-3">{step.num}</span>
                <h3 className="font-bold text-brand-900 text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-brand-900 mb-2">Pricing</h2>
          <p className="text-gray-500 mb-2">Try free for 7 days. No credit card required.</p>
          <p className="text-xs text-gray-400 mb-10">All prices in INR, exclusive of 18% GST. Billed monthly.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border flex flex-col ${
                  plan.highlight
                    ? 'bg-rose-600 border-rose-600 text-white shadow-2xl scale-105'
                    : 'bg-white border-gray-200 text-brand-900'
                }`}
              >
                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${plan.highlight ? 'text-rose-200' : 'text-gray-400'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-rose-200' : 'text-gray-400'}`}>{plan.per}</span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.highlight ? 'text-rose-100' : 'text-gray-500'}`}>{plan.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check size={14} className={plan.highlight ? 'text-rose-200' : 'text-green-500'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                    plan.highlight
                      ? 'bg-white text-rose-600 hover:bg-rose-50'
                      : 'bg-rose-600 text-white hover:bg-rose-700'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-900 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to reduce returns and boost sales?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join fashion brands already using ZetaX Virtual Try-On to give shoppers the confidence to buy.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-900 font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors text-sm"
          >
            Book a Free Demo <ArrowRight size={16} />
          </Link>
        </div>

      </div>
      <StickyDemoCTA productName="Virtual Try-On" />
    </div>
  );
};

export default VirtualTryon;
