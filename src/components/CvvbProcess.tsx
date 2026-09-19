import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Clock, ShieldCheck, FileCheck, ArrowRight, UserCheck, Landmark, Send, Sparkles } from 'lucide-react';
import { CVVB_PROCESS } from '../data/amafhData';

export const CvvbProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStage = CVVB_PROCESS[activeStep];

  return (
    <section id="cvvb-process" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-slate-900 text-white relative overflow-hidden rounded-[3rem] max-w-7xl mx-auto my-12 shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-3 border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Proprietary CVVB Approval Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            The 4-Stage Document Approval Lifecycle
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            From initial field contact to final bank card dispatch, our rigorous CVVB system eliminates errors, ensures total compliance with UAE Central Bank standards, and accelerates booking times.
          </p>
        </div>

        {/* The 4 Stage Selector Cards (C - V - V - B) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {CVVB_PROCESS.map((stage, idx) => {
            const isSelected = activeStep === idx;
            return (
              <motion.button
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'bg-purple-950/80 border-purple-400/80 shadow-lg shadow-purple-900/30 ring-2 ring-purple-500/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  {/* The Big Letter C, V, V, B from the PDF */}
                  <span className={`text-3xl sm:text-4xl font-extrabold font-display ${
                    isSelected ? 'text-amber-300' : 'text-slate-400'
                  }`}>
                    {stage.letter}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                    {stage.step}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-1">
                  {stage.actor}
                </p>
                {isSelected && (
                  <motion.div
                    layoutId="activeCvvbIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-purple-500"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Description & Checklist */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-amber-400 flex items-center justify-center font-extrabold text-2xl text-white font-display shadow-md">
                    {currentStage.letter}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                      {currentStage.step} • {currentStage.actor}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {currentStage.description}
                </p>

                {/* Sub-steps Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {currentStage.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 leading-snug">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Turnaround Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-900/60 border border-purple-500/30 text-xs font-semibold text-purple-200">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>SOP SLA Turnaround: {currentStage.duration}</span>
                </div>
              </div>

              {/* Right Column: Visual Verification Simulator */}
              <div className="lg:col-span-5">
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-white/10 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Live Pipeline Status
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Compliant
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Target Segment</span>
                      <span className="text-white font-medium">UAE Salaried &amp; Affluent</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Documentation Verification</span>
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        100% In-Person Verified
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">InfoSec Protocol</span>
                      <span className="text-purple-300 font-medium">AES-256 Encrypted Transfer</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Bank Portal Integration</span>
                      <span className="text-amber-300 font-medium">Direct Underwriting Handoff</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                      className="px-3.5 py-1.5 rounded-lg bg-[#E8F86E] text-slate-950 font-bold text-xs hover:bg-lime-200 transition-colors flex items-center gap-1"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
