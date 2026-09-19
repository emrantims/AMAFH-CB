import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  CheckCircle2,
  Phone,
  Building,
  User,
  Sparkles,
  HelpCircle,
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LiveChatBubbleProps {
  onOpenPdfModal?: () => void;
}

export const LiveChatBubble: React.FC<LiveChatBubbleProps> = ({ onOpenPdfModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState('Credit Cards');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasUnreadNotice, setHasUnreadNotice] = useState(true);

  const topics = [
    'Credit Cards',
    'Personal Loan (ST)',
    'Non-Salary Loan (NST)',
    'Bank Partnership',
    'Sales Agent Career',
  ];

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setHasUnreadNotice(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { x: 0.85, y: 0.85 },
          colors: ['#7E22CE', '#E8F86E', '#10B981'],
        });
      } catch (e) {
        // ignore
      }
    }, 800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Floating Chat Modal Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 25, scale: 0.92, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto w-[calc(100vw-2.5rem)] sm:w-96 rounded-3xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden mb-3.5 flex flex-col"
            style={{ maxHeight: 'min(580px, calc(100vh - 110px))' }}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F86E] text-slate-950 flex items-center justify-center font-black text-xs shadow-md">
                    AM
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-purple-900" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm font-display leading-tight">
                      AMAFH Quick Inquiry
                    </h3>
                  </div>
                  <p className="text-[11px] text-purple-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Dubai Desk • Avg reply: ~5 mins
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close live chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 overflow-y-auto flex-1 text-xs">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-extrabold text-slate-900 font-display">
                      Inquiry Dispatched!
                    </h4>
                    <p className="text-slate-600 text-xs max-w-xs mx-auto leading-relaxed">
                      Thank you <strong className="text-slate-950">{formData.name}</strong>. An AMAFH senior consultant will WhatsApp/call you on <strong className="text-purple-700">{formData.phone}</strong> shortly.
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-purple-50 border border-purple-100 text-[11px] text-purple-900 flex items-center gap-2 text-left">
                    <Clock className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>Business Village Operations SLA: Active until 8:00 PM GST</span>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/971500000000?text=Hello%20AMAFH%20Operations,%20I%20have%20an%20inquiry%20regarding%20${encodeURIComponent(topic)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Continue via WhatsApp</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="w-full py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] transition-colors"
                    >
                      Ask Another Question
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Topic selection pills */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1.5">
                      What can our team assist you with?
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {topics.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTopic(t)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                            topic === t
                              ? 'bg-purple-700 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Omar Farooq"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      UAE Mobile / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 5X XXX XXXX"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Your Question or Monthly Salary (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Salary is AED 12,000. Looking for best cashback card with DIB or Emirates Islamic."
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-purple-900/20 active:scale-[0.98] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Start Quick Chat</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" /> ISO Data Privacy
                    </span>
                    <span>Direct WhatsApp Handover</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button (Clean Entrance & Pulsing Ping Badge) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 260, delay: 0.6 }}
        className="pointer-events-auto relative group"
      >
        {/* Pulsing Attention Badge when collapsed */}
        {!isOpen && hasUnreadNotice && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/90 text-white text-xs font-semibold backdrop-blur-md shadow-xl border border-white/10 whitespace-nowrap cursor-pointer hover:bg-slate-900 transition-colors"
            onClick={handleOpen}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Have a question? Chat with us</span>
          </motion.div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          onClick={handleOpen}
          aria-label={isOpen ? 'Close live chat' : 'Open live chat'}
          className={`relative p-3.5 sm:p-4 rounded-full flex items-center gap-2.5 shadow-2xl transition-all duration-300 focus:outline-none select-none ${
            isOpen
              ? 'bg-slate-900 text-white hover:bg-slate-800 scale-95'
              : 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:shadow-purple-900/40 hover:scale-105 active:scale-95'
          }`}
        >
          {/* Online green indicator dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
            </span>
          )}

          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="hidden md:inline font-bold text-xs tracking-tight pr-1">
                Live Chat
              </span>
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
};
