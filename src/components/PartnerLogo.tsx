import React from 'react';

interface PartnerLogoProps {
  id: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({ id, name, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8 text-xs',
    md: 'h-11 text-sm',
    lg: 'h-14 text-base',
  };

  switch (id.toLowerCase()) {
    case 'dib':
    case 'dubai islamic bank':
      return (
        <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#007A3D]/5 border border-[#007A3D]/20 ${className}`}>
          {/* Authentic DIB Islamic Star / Geometric Mark */}
          <div className="w-8 h-8 rounded-lg bg-[#007A3D] flex items-center justify-center shrink-0 shadow-xs relative overflow-hidden">
            <svg viewBox="0 0 36 36" className="w-5 h-5 text-white fill-current">
              {/* Islamic Octagram Pattern */}
              <rect x="7" y="7" width="22" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <rect x="7" y="7" width="22" height="22" rx="2" transform="rotate(45 18 18)" fill="none" stroke="#D4AF37" strokeWidth="2.2" />
              <circle cx="18" cy="18" r="3" fill="#D4AF37" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-[#007A3D] tracking-tight block text-sm font-display">
              Dubai Islamic Bank
            </span>
            <span className="text-[10px] font-semibold text-slate-500 block -mt-0.5 tracking-wider">
              بنك دبي الإسلامي
            </span>
          </div>
        </div>
      );

    case 'sib':
    case 'sharjah islamic bank':
      return (
        <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#003B71]/5 border border-[#003B71]/20 ${className}`}>
          {/* Authentic SIB Blue & Gold Palm Roundel */}
          <div className="w-8 h-8 rounded-lg bg-[#003B71] flex items-center justify-center shrink-0 shadow-xs">
            <svg viewBox="0 0 36 36" className="w-5 h-5 text-[#E5A823] fill-current">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#E5A823" strokeWidth="2" />
              {/* Twin Palm Leaves */}
              <path d="M18 9 C14 14 14 24 18 27 C22 24 22 14 18 9 Z" fill="#E5A823" opacity="0.9" />
              <circle cx="18" cy="18" r="3" fill="#ffffff" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-[#003B71] tracking-tight block text-sm font-display">
              Sharjah Islamic Bank
            </span>
            <span className="text-[10px] font-semibold text-slate-500 block -mt-0.5 tracking-wider">
              مصرف الشارقة الإسلامي
            </span>
          </div>
        </div>
      );

    case 'emirates-islamic':
    case 'emirates islamic':
      return (
        <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#5B2182]/5 border border-[#5B2182]/20 ${className}`}>
          {/* Authentic Emirates Islamic Diamond Mark */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#421463] to-[#7B2CBF] flex items-center justify-center shrink-0 shadow-xs">
            <svg viewBox="0 0 36 36" className="w-5 h-5 text-white fill-current">
              {/* Overlapping Crystal Facets */}
              <polygon points="18,4 32,18 18,32 4,18" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <polygon points="18,9 27,18 18,27 9,18" fill="#F72585" opacity="0.8" />
              <circle cx="18" cy="18" r="2.5" fill="#ffffff" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-[#421463] tracking-tight block text-sm font-display">
              EMIRATES ISLAMIC
            </span>
            <span className="text-[10px] font-semibold text-slate-500 block -mt-0.5 tracking-wider">
              الإمارات الإسلامي
            </span>
          </div>
        </div>
      );

    case 'reem-finance':
    case 'reem finance':
      return (
        <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#C49A45]/5 border border-[#C49A45]/25 ${className}`}>
          {/* Authentic Reem Finance Desert Gold Crown / Emblem */}
          <div className="w-8 h-8 rounded-lg bg-[#C49A45] flex items-center justify-center shrink-0 shadow-xs text-white font-bold">
            <svg viewBox="0 0 36 36" className="w-5 h-5 text-white fill-current">
              <path d="M7 12 L18 4 L29 12 L25 28 L11 28 Z" fill="none" stroke="white" strokeWidth="2.5" />
              <path d="M14 18 L18 14 L22 18 L18 24 Z" fill="white" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-[#8D6B23] tracking-tight block text-sm font-display">
              REEM FINANCE
            </span>
            <span className="text-[10px] font-semibold text-slate-500 block -mt-0.5 tracking-wider">
              تمويل ريم • Abu Dhabi
            </span>
          </div>
        </div>
      );

    case 'mashreq':
    case 'mashreq bank':
      return (
        <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#E35205]/5 border border-[#E35205]/20 ${className}`}>
          {/* Authentic Mashreq Orange Sunburst */}
          <div className="w-8 h-8 rounded-lg bg-[#E35205] flex items-center justify-center shrink-0 shadow-xs">
            <svg viewBox="0 0 36 36" className="w-5 h-5 text-white fill-current">
              <circle cx="18" cy="18" r="6" fill="white" />
              <path d="M18 4 L18 9 M18 27 L18 32 M4 18 L9 18 M27 18 L32 18 M8 8 L12 12 M24 24 L28 28 M8 28 L12 24 M24 12 L28 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-[#E35205] tracking-tight block text-sm font-display">
              mashreq
            </span>
            <span className="text-[10px] font-semibold text-slate-500 block -mt-0.5 tracking-wider">
              المشرق • UAE
            </span>
          </div>
        </div>
      );

    case 'deem':
    case 'deem finance':
      return (
        <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#2E1A47]/5 border border-[#2E1A47]/20 ${className}`}>
          {/* Authentic Deem Loop */}
          <div className="w-8 h-8 rounded-lg bg-[#2E1A47] flex items-center justify-center shrink-0 shadow-xs">
            <svg viewBox="0 0 36 36" className="w-5 h-5 text-[#00E5FF] fill-current">
              <circle cx="14" cy="18" r="6" fill="none" stroke="#00E5FF" strokeWidth="2.5" />
              <circle cx="22" cy="18" r="6" fill="none" stroke="#FF4081" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-[#2E1A47] tracking-tight block text-sm font-display">
              deem finance
            </span>
            <span className="text-[10px] font-semibold text-slate-500 block -mt-0.5 tracking-wider">
              Digital Financial Services
            </span>
          </div>
        </div>
      );

    // Corporate Logos
    case 'radisson blu':
    case 'radisson':
      return (
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-md bg-[#0C2340] text-white font-serif font-black text-xs tracking-wider flex items-center gap-1">
            <span>RADISSON</span>
            <span className="text-[#00A3E0] font-sans italic font-bold">BLU</span>
          </div>
        </div>
      );

    case 'alec':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#E11925] text-white flex items-center justify-center font-black text-[11px] tracking-tighter">
            A
          </div>
          <span className="font-extrabold text-slate-900 tracking-tight text-xs font-display">
            ALEC
          </span>
        </div>
      );

    case 'habtoor leighton group (hlg)':
    case 'hlg':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#8A1538] text-white flex items-center justify-center font-black text-[9px] tracking-tighter">
            HLG
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            Habtoor Leighton
          </span>
        </div>
      );

    case 'larsen & toubro':
    case 'l&t':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-[#005A9C] text-white flex items-center justify-center font-extrabold text-[9px] border border-white shadow-xs">
            L&amp;T
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            Larsen &amp; Toubro
          </span>
        </div>
      );

    case 'saudi binladin group':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#1B5E20] text-white flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M12 2L4 10H8V20H16V10H20L12 2Z" />
            </svg>
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            Saudi Binladin Group
          </span>
        </div>
      );

    case 'rotana':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#7A1C3C] text-[#E5A823] flex items-center justify-center font-serif font-bold text-[10px]">
            R
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            Rotana Hotels
          </span>
        </div>
      );

    case 'fibrex':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#009688] text-white flex items-center justify-center font-black text-[9px]">
            FBX
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            FIBREX Group
          </span>
        </div>
      );

    case 'pivot engineering':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#F57C00] text-white flex items-center justify-center font-black text-[9px]">
            PVT
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            PIVOT Engineering
          </span>
        </div>
      );

    case 'dce dubai':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#1565C0] text-white flex items-center justify-center font-bold text-[8px]">
            DCE
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            DCE Dubai
          </span>
        </div>
      );

    case 'al jaber group':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#880E4F] text-white flex items-center justify-center font-bold text-[8px]">
            AJG
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            Al Jaber Group
          </span>
        </div>
      );

    case 'jsw steel':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#C62828] text-white flex items-center justify-center font-extrabold text-[8px]">
            JSW
          </div>
          <span className="font-extrabold text-slate-900 text-xs font-display">
            JSW Steel
          </span>
        </div>
      );

    default:
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[9px]">
            {name.slice(0, 2).toUpperCase()}
          </div>
          <span className="font-bold text-slate-900 text-xs font-display">
            {name}
          </span>
        </div>
      );
  }
};
