import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Building2, CreditCard, Award } from 'lucide-react';

interface MarqueeStripProps {
  onSelectAction: () => void;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ onSelectAction }) => {
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);

  const keywords = [
    'CREDIT CARD OUTSOURCING',
    'PERSONAL FINANCE SALES',
    '9,500 SQ.FT FACILITY',
    'DUBAI ISLAMIC BANK',
    'SHARJAH ISLAMIC BANK',
    'EMIRATES ISLAMIC',
    'REEM FINANCE',
    'FIELD VIGILANCE DESK',
    'ISO-ALIGNED INFOSEC',
    'ZERO-ERROR DOCUMENTATION',
    '250+ CERTIFIED AGENTS',
  ];

  return (
    <section className="py-8 sm:py-12 overflow-hidden border-y border-slate-200/60 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        {/* The 4-Pill Interactive Bar matching Reference Image ("We", "Protect", arrow, "Nature") */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          
          {/* Pill 1: We */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white shadow-md border border-slate-200/80 cursor-default flex items-center justify-center transition-all"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 font-display">
              We
            </span>
          </motion.div>

          {/* Pill 2: Image Pill - Sourcing & Verification */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            onHoverStart={() => setHoveredPill('sourcing')}
            onHoverEnd={() => setHoveredPill(null)}
            className="relative px-7 sm:px-10 py-3.5 sm:py-4 rounded-full overflow-hidden shadow-md cursor-pointer group flex items-center justify-center min-w-[150px] sm:min-w-[190px]"
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
              alt="Verification and sales"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-purple-950/50 backdrop-blur-[2px] group-hover:bg-purple-900/60 transition-colors" />
            <span className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white font-display">
              Verify
            </span>
            {hoveredPill === 'sourcing' && (
              <motion.div
                layoutId="pillTooltip"
                className="absolute -top-9 px-2.5 py-1 rounded-lg bg-slate-950 text-[10px] font-semibold text-white whitespace-nowrap shadow-lg border border-white/10"
              >
                Zero-Error File SOPs
              </motion.div>
            )}
          </motion.div>

          {/* Pill 3: Vibrant Accent Action Button (Matching reference circular lime/yellow button with arrow) */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 45 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSelectAction}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E8F86E] text-slate-950 shadow-lg border border-lime-300 flex items-center justify-center transition-shadow hover:shadow-xl hover:shadow-lime-300/30"
            title="Accelerate Financial Sales"
          >
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </motion.button>

          {/* Pill 4: Image Pill - Banking Growth */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            onHoverStart={() => setHoveredPill('banking')}
            onHoverEnd={() => setHoveredPill(null)}
            className="relative px-7 sm:px-10 py-3.5 sm:py-4 rounded-full overflow-hidden shadow-md cursor-pointer group flex items-center justify-center min-w-[150px] sm:min-w-[190px]"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
              alt="Dubai banking"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] group-hover:bg-slate-950/60 transition-colors" />
            <span className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white font-display">
              Scale UAE Banks
            </span>
            {hoveredPill === 'banking' && (
              <motion.div
                layoutId="pillTooltip"
                className="absolute -top-9 px-2.5 py-1 rounded-lg bg-slate-950 text-[10px] font-semibold text-white whitespace-nowrap shadow-lg border border-white/10"
              >
                Consistent Monthly Volume
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>

      {/* Infinite Kinetic Ticker Tape */}
      <div className="relative flex overflow-x-hidden select-none py-2">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex whitespace-nowrap gap-8 items-center"
        >
          {[...keywords, ...keywords].map((word, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                {word}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
