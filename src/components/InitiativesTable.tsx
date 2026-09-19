import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { INITIATIVES } from '../data/amafhData';
import { InitiativeItem } from '../types';

export const InitiativesTable: React.FC = () => {
  const [activeInitiative, setActiveInitiative] = useState<InitiativeItem>(INITIATIVES[0]);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header matching reference image layout */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-purple-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Roadmap 2025–2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            Our Key Operational Initiatives
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          Discover the high-standard compliance mechanisms, technological upgrades, and facility improvements AMAFH implements across the UAE.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Table matching Reference Image */}
        <div className="lg:col-span-8 overflow-x-auto">
          <div className="min-w-[540px]">
            {/* Table Header */}
            <div className="grid grid-cols-12 pb-3 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600 px-3">
              <div className="col-span-5">Initiative &amp; Focus</div>
              <div className="col-span-4">Category &amp; Tags</div>
              <div className="col-span-2">Timeline</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {INITIATIVES.map((item, idx) => {
                const isSelected = activeInitiative.id === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    onMouseEnter={() => setActiveInitiative(item)}
                    onClick={() => setActiveInitiative(item)}
                    whileHover={{ x: 4 }}
                    className={`grid grid-cols-12 items-center py-4 px-3 rounded-2xl cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-purple-50/80 shadow-sm border border-purple-200/60'
                        : 'hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    {/* Title */}
                    <div className="col-span-5 pr-2">
                      <h3 className={`text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? 'text-purple-900' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                        {item.category}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="col-span-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white text-slate-700 border border-slate-200/80 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Date */}
                    <div className="col-span-2 text-xs font-semibold text-slate-600">
                      {item.date}
                    </div>

                    {/* Action Arrow */}
                    <div className="col-span-1 flex justify-end">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-purple-700 text-white shadow-md'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Floating Interactive Preview Card (Directly from Reference Image) */}
        <div className="lg:col-span-4 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInitiative.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full max-w-sm rounded-[2rem] p-4 bg-white shadow-2xl border border-slate-200/80 relative overflow-hidden group"
            >
              {/* Image Preview */}
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={activeInitiative.imageUrl}
                  alt={activeInitiative.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Top Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                  {activeInitiative.status}
                </div>

                {/* Circular Badge matching reference image */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#E8F86E] text-slate-950 flex items-center justify-center text-xs font-extrabold shadow-lg border border-lime-300">
                  100%
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">
                    {activeInitiative.category}
                  </span>
                  <p className="text-sm font-bold leading-snug line-clamp-1">
                    {activeInitiative.title}
                  </p>
                </div>
              </div>

              {/* Description & Details */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {activeInitiative.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-purple-700" />
                  <span>Delivery: {activeInitiative.date}</span>
                </div>
                <span className="text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-1">
                  Active SOP <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
