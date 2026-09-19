import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, ChevronRight, X, Sparkles, Shield, Layers, FileCheck } from 'lucide-react';
import { SERVICES } from '../data/amafhData';
import { ServiceItem } from '../types';

interface ServiceCardsProps {
  onConsultationRequest: (serviceName?: string) => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({ onConsultationRequest }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Take the top 4 services to match the 4 cards in the reference image
  const displayServices = SERVICES.slice(0, 4);

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-purple-800 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Service Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            Comprehensive Financial Sourcing Solutions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          Structured, compliant, and performance-driven outsourced services helping UAE financial institutions scale volume with zero processing bottlenecks.
        </p>
      </div>

      {/* 4 Vertical Cards Grid - Direct Match with Reference Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {displayServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative h-[440px] sm:h-[480px] rounded-[2.2rem] overflow-hidden shadow-xl border border-slate-200/80 flex flex-col justify-between p-6 cursor-pointer bg-slate-900"
            onClick={() => setSelectedService(service)}
          >
            {/* Background Image */}
            <img
              src={service.imageUrl}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40 group-hover:via-slate-950/50 transition-colors" />

            {/* Top Bar inside Card */}
            <div className="relative z-10 flex items-center justify-between">
              {/* Category Pill */}
              <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white">
                {service.tag}
              </div>

              {/* Action Circle Button (matching reference) */}
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#E8F86E] group-hover:text-slate-950 group-hover:border-lime-300 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Content inside Card */}
            <div className="relative z-10">
              <span className="text-[11px] uppercase font-bold tracking-wider text-amber-300 mb-1.5 block">
                {service.category}
              </span>
              <h3 className="text-xl font-bold text-white font-display mb-2.5 leading-snug">
                {service.title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2 mb-5 leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Bottom Pill Button - Matching Reference Card "EXPLORE PROBLEM >" */}
              <div className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-between text-xs font-semibold text-white transition-all group-hover:bg-white group-hover:text-slate-950 group-hover:border-transparent">
                <span>EXPLORE SERVICE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Detail Modal when Card is Clicked */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                  {selectedService.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  {selectedService.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mb-3">
                {selectedService.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              {/* Core Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Service Deliverables &amp; SOPs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs text-slate-700 font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics & CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-100">
                <div>
                  <span className="text-[11px] text-slate-600 block">Performance Benchmark</span>
                  <span className="text-sm font-bold text-purple-800">{selectedService.metrics}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const name = selectedService.title;
                      setSelectedService(null);
                      onConsultationRequest(name);
                    }}
                    className="px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 flex items-center gap-1.5"
                  >
                    <span>Request Sourcing Deployment</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
