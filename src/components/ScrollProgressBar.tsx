import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const rounded = Math.round(latest * 100);
      setPercent(rounded);
      setIsVisible(rounded > 2);
    });
  }, [scrollYProgress]);

  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 right-0 z-[100] pointer-events-none h-[3.5px]"
    >
      {/* Background Track */}
      <div className="w-full h-full bg-slate-200/40 backdrop-blur-xs" />

      {/* Dynamic Animated Scroll Depth Fill Bar */}
      <motion.div
        className="absolute top-0 left-0 bottom-0 right-0 h-full origin-left bg-gradient-to-r from-purple-800 via-purple-600 via-amber-400 to-[#E8F86E]"
        style={{ scaleX }}
      />

      {/* Leading Edge Glow Pulse */}
      <motion.div
        className="absolute top-0 bottom-0 w-3 -mr-1.5 h-full origin-left bg-[#E8F86E] shadow-[0_0_10px_2px_rgba(232,248,110,0.9)]"
        style={{
          left: `${percent}%`,
          opacity: isVisible && percent < 99 ? 1 : 0,
        }}
      />

      {/* Optional Micro Percentage Pill (Appears while scrolling past hero) */}
      {isVisible && percent < 98 && (
        <div
          className="fixed top-2 right-3 z-[101] px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-white/10 shadow-sm transition-opacity duration-200"
        >
          {percent}%
        </div>
      )}
    </div>
  );
};
