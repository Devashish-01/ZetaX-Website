import React from 'react';
import { Lightbulb, PenTool, Code, Layers, Truck, Headphones } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const steps = [
    { icon: Lightbulb, title: "1. Discovery", desc: "We sit down with you to understand your business goals, pain points, and technical requirements." },
    { icon: PenTool, title: "2. Design", desc: "Our UX/UI experts create wireframes and high-fidelity mockups for your approval." },
    { icon: Code, title: "3. Build", desc: "Agile development using the latest tech stack (React, Next.js, Node.js)." },
    { icon: Layers, title: "4. Integrate", desc: "Connecting your new system with existing tools (CRM, ERP, Payment Gateways)." },
    { icon: Truck, title: "5. Deliver", desc: "Rigorous testing (QA) followed by a smooth deployment to production servers." },
    { icon: Headphones, title: "6. Support", desc: "30 days of free post-launch support and ongoing maintenance packages." }
  ];

  return (
    <div className="bg-white pt-24 pb-12">
      <div className="bg-gray-50 py-20 mb-16">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-brand-900 mb-6">Our Process</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
               We believe in transparency and structure. Here is how we take your idea from concept to reality.
            </p>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="relative">
             {/* Vertical Line */}
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 hidden md:block"></div>

             <div className="space-y-12">
                 {steps.map((step, idx) => (
                     <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                         <div className="flex-1 w-full">
                             <div className={`bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                 <h3 className="text-2xl font-bold text-brand-900 mb-3">{step.title}</h3>
                                 <p className="text-gray-600">{step.desc}</p>
                             </div>
                         </div>
                         
                         <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-brand-900 border-4 border-white shadow-lg shrink-0">
                             <step.icon className="text-brand-accent" size={24} />
                         </div>

                         <div className="flex-1 w-full hidden md:block"></div>
                     </div>
                 ))}
             </div>
         </div>
      </div>
    </div>
  );
};

export default HowWeWork;