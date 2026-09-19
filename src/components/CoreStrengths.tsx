import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  CheckCircle2,
  Users,
  Award,
  Cpu,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Lock
} from 'lucide-react';
import { CORE_STRENGTHS } from '../data/amafhData';

export const CoreStrengths: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-5 h-5 text-purple-700" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
    Users: <Users className="w-5 h-5 text-indigo-600" />,
    Award: <Award className="w-5 h-5 text-amber-600" />,
    Cpu: <Cpu className="w-5 h-5 text-cyan-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-purple-700" />,
  };

  return (
    <section id="strengths" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-purple-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Institutional Reliability</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            Our 6 Pillars of Banking Excellence
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          Key pillars that define AMAFH’s capability to deliver smooth, compliant, and high-performance financial sales operations for UAE banking partners.
        </p>
      </div>

      {/* 6 Pillars Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {CORE_STRENGTHS.map((pillar, idx) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            className="p-6 sm:p-7 rounded-[2rem] bg-white shadow-lg shadow-purple-950/5 border border-slate-200/80 flex flex-col justify-between group transition-all hover:border-purple-300 hover:shadow-xl"
          >
            <div>
              {/* Header: Number & Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-extrabold text-purple-900/40 font-display group-hover:text-purple-700 transition-colors">
                  {pillar.number}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 group-hover:bg-[#E8F86E] group-hover:text-slate-950 transition-colors">
                  {pillar.badge}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMap[pillar.iconName] || <Building2 className="w-5 h-5 text-purple-700" />}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-1.5">
                {pillar.title}
              </h3>
              <h4 className="text-xs font-semibold text-purple-700 mb-3">
                {pillar.subtitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Bottom micro indicator */}
            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Standard Operating Procedure</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                Verified <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
