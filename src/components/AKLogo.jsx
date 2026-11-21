import React from 'react';

/**
 * Official AK Brand Logo Component
 * Geometric AK monogram with integrated smartphone silhouette,
 * peeking Android mascot inside the 'A', and orbital digital pixel accents.
 * Gradient: Purple (#7C3AED) -> Electric Violet (#9333EA) -> Pink (#EC4899) -> Coral (#FF5C70) -> Orange (#FF8A3D)
 */
export default function AKLogo({
  size = 40,
  showWordmark = false,
  showTagline = false,
  variant = 'default', // 'default' | 'iconOnly' | 'squircle'
  className = '',
  animated = false,
}) {
  const gradientId = React.useId();
  const shadowId = React.useId();

  // Pure SVG Vector representation of the official AK Logo
  const LogoIcon = (
    <svg
      viewBox="0 0 540 400"
      className="w-full h-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main AK Brand Gradient */}
        <linearGradient id={`ak-grad-${gradientId}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="25%" stopColor="#9333EA" />
          <stop offset="55%" stopColor="#EC4899" />
          <stop offset="80%" stopColor="#FF5C70" />
          <stop offset="100%" stopColor="#FF8A3D" />
        </linearGradient>

        {/* Orbit Gradient */}
        <linearGradient id={`orbit-grad-${gradientId}`} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="30%" stopColor="#9333EA" />
          <stop offset="70%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#FF8A3D" />
        </linearGradient>

        {/* Smartphone Border Gradient */}
        <linearGradient id={`phone-grad-${gradientId}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#FF8A3D" />
        </linearGradient>

        {/* A Apex Silver/White Gradient */}
        <linearGradient id={`a-grad-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="75%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Neon Glow Filter */}
        <filter id={`glow-${shadowId}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#9333EA" floodOpacity="0.4" />
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#FF5C70" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* ── 1. ORBITAL RING SWOOSH (Behind phone and AK) ── */}
      <g opacity="0.95">
        <path
          d="M 60 220 C 50 280, 160 330, 310 300 C 460 270, 520 180, 480 130 C 450 90, 370 85, 290 105 C 230 120, 140 160, 60 220 Z"
          fill="none"
          stroke={`url(#orbit-grad-${gradientId})`}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray="460 200"
        />
        {/* Orbital Digital Pixel Cubes (Breaking out on upper-right) */}
        <rect x="445" y="115" width="14" height="14" rx="2" fill="#FF5C70" />
        <rect x="468" y="98" width="12" height="12" rx="2" fill="#FF8A3D" />
        <rect x="488" y="120" width="10" height="10" rx="2" fill="#FFA07A" />
        <rect x="435" y="92" width="11" height="11" rx="2" fill="#EC4899" />
        <rect x="495" y="85" width="8" height="8" rx="1.5" fill="#FF8A3D" />
      </g>

      {/* ── 2. INTEGRATED SMARTPHONE SILHOUETTE ── */}
      <g transform="translate(230, 160) rotate(-14) translate(-230, -160)">
        {/* Phone Body */}
        <rect
          x="145"
          y="40"
          width="165"
          height="250"
          rx="26"
          fill="#0F0E0D"
          stroke={`url(#phone-grad-${gradientId})`}
          strokeWidth="9"
        />
        {/* Camera / Speaker Pill */}
        <rect x="202" y="55" width="50" height="7" rx="3.5" fill="#7C3AED" opacity="0.75" />
      </g>

      {/* ── 3. GEOMETRIC 'A' MONOGRAM WITH ANDROID MASCOT ── */}
      <g filter={`url(#glow-${shadowId})`}>
        {/* Outer White / Silver 'A' Chevron Shape */}
        <path
          d="M 205 75 L 85 275 L 145 275 L 205 170 L 265 275 L 325 275 Z"
          fill={`url(#a-grad-${gradientId})`}
          stroke="#050508"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Android Robot Head Inside Negative Space of 'A' */}
        <g transform="translate(168, 205)">
          {/* Antennae */}
          <line x1="16" y1="20" x2="6" y2="4" stroke="#050508" strokeWidth="5" strokeLinecap="round" />
          <line x1="16" y1="20" x2="6" y2="4" stroke={`url(#ak-grad-${gradientId})`} strokeWidth="3.5" strokeLinecap="round" />
          
          <line x1="58" y1="20" x2="68" y2="4" stroke="#050508" strokeWidth="5" strokeLinecap="round" />
          <line x1="58" y1="20" x2="68" y2="4" stroke={`url(#ak-grad-${gradientId})`} strokeWidth="3.5" strokeLinecap="round" />

          {/* Dome Head */}
          <path
            d="M 12 36 A 25 25 0 0 1 62 36 Z"
            fill="#050508"
            stroke="#050508"
            strokeWidth="3"
          />
          <path
            d="M 13 35 A 24 24 0 0 1 61 35 Z"
            fill={`url(#ak-grad-${gradientId})`}
          />

          {/* Android Eyes */}
          <circle cx="26" cy="24" r="3" fill="#FFFFFF" />
          <circle cx="48" cy="24" r="3" fill="#FFFFFF" />
        </g>

        {/* ── 4. GEOMETRIC 'K' INTEGRATED ARMS (Gradient) ── */}
        {/* Upper Arm of K */}
        <path
          d="M 235 185 L 340 75 L 405 75 L 285 200 Z"
          fill={`url(#ak-grad-${gradientId})`}
          stroke="#050508"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Lower Arm of K */}
        <path
          d="M 270 190 L 415 310 L 350 310 L 225 208 Z"
          fill={`url(#ak-grad-${gradientId})`}
          stroke="#050508"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  if (variant === 'squircle') {
    return (
      <div
        className={`relative rounded-3xl p-3 flex items-center justify-center bg-[#0B0B14] border border-white/10 shadow-2xl shadow-purple-900/30 overflow-hidden ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-pink-600/10 to-orange-500/10 pointer-events-none" />
        <div className="w-full h-full relative z-10 flex items-center justify-center">
          {LogoIcon}
        </div>
      </div>
    );
  }

  if (variant === 'iconOnly') {
    return (
      <div
        className={`relative flex items-center justify-center ${className}`}
        style={{ width: size, height: size * 0.74 }}
      >
        {LogoIcon}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Monogram Symbol */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform hover:scale-105"
        style={{ width: size, height: size * 0.74 }}
      >
        {LogoIcon}
      </div>

      {/* Wordmark and Tagline */}
      {(showWordmark || showTagline) && (
        <div className="flex flex-col text-left">
          {showWordmark && (
            <span className="font-heading font-black tracking-[0.22em] text-[#F5F0E8] text-base sm:text-lg leading-tight flex items-center gap-1.5">
              <span>ASHUTOSH</span>
            </span>
          )}

          {showTagline && (
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-4 h-[2px] rounded-full bg-[#FF6B35]" />
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#9C9388]">
                Engineering Intelligence
              </span>
              <span className="w-4 h-[2px] rounded-full bg-[#2EC4B6]" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
