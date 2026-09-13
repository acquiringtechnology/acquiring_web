'use client';

import { useEffect, useState } from 'react';

export default function AnimatedHeroLogo() {
  const [stage, setStage] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPrefersReduced(true);
      setStage(5);
      return;
    }

    // Sequence timings according to preferred specifications:
    // 0.0s – 0.5s : Logo icon begins appearing
    // 0.5s – 1.4s : Geometric icon pieces assemble
    // 1.4s – 2.0s : Icon settles
    // 2.0s – 2.7s : ACQUIRING appears
    // 2.7s – 3.2s : TECHNOLOGY appears
    // 3.2s+       : Complete logo remains visible & stable

    const t1 = setTimeout(() => setStage(1), 100);  // Icon badge emerges
    const t2 = setTimeout(() => setStage(2), 500);  // Pieces assemble
    const t3 = setTimeout(() => setStage(3), 1900); // ACQUIRING appears
    const t4 = setTimeout(() => setStage(4), 2600); // TECHNOLOGY appears
    const t5 = setTimeout(() => setStage(5), 3200); // Complete settled state

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (prefersReduced) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 0',
        }}
      >
        <img
          src="/logo.png"
          alt="Acquiring Technology"
          style={{
            width: '100%',
            maxWidth: '420px',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    );
  }

  const isIconBaseVisible = stage >= 1;
  const isPiecesAssembled = stage >= 2;
  const isAcquiringVisible = stage >= 3;
  const isTechnologyVisible = stage >= 4;
  const isComplete = stage >= 5;

  return (
    <div
      style={{
        width: '100%',
        minHeight: 'clamp(360px, 48vh, 520px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none',
        overflow: 'visible',
      }}
    >
      {/* Subtle ambient corporate backdrop glow */}
      <div
        style={{
          position: 'absolute',
          width: 'clamp(260px, 65%, 440px)',
          height: 'clamp(260px, 65%, 440px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176, 24, 42, 0.12) 0%, rgba(176, 24, 42, 0.02) 50%, transparent 70%)',
          filter: 'blur(36px)',
          pointerEvents: 'none',
          opacity: isIconBaseVisible ? 1 : 0,
          transition: 'opacity 1.6s ease',
        }}
      />

      {/* 
        Mathematical SVG stage (396 x 108 viewBox)
        Guarantees that nothing is EVER clipped or misaligned regardless of screen width.
      */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '430px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isComplete ? 'scale(1)' : isPiecesAssembled ? 'scale(1.015)' : 'scale(0.98)',
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <svg
          viewBox="0 0 396 108"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            overflow: 'visible',
          }}
          aria-label="Acquiring Technology Animated Logo"
        >
          {/* ── 1. Icon Container Group ── */}
          <g
            style={{
              filter: isComplete
                ? 'drop-shadow(0 12px 24px rgba(176, 24, 42, 0.30))'
                : 'drop-shadow(0 6px 16px rgba(176, 24, 42, 0.16))',
              transition: 'filter 1.2s ease',
            }}
          >
            {/* Red Rounded Rectangle Base */}
            <image
              href="/logo-slices/icon-bg.png"
              x="0"
              y="0"
              width="112"
              height="108"
              style={{
                opacity: isIconBaseVisible ? 1 : 0,
                transform: isIconBaseVisible ? 'scale(1)' : 'scale(0.85)',
                transformOrigin: '56px 54px',
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            {/* Right Diagonal Bar Piece (Glides in from upper-right) */}
            <image
              href="/logo-slices/icon-piece-right.png"
              x="0"
              y="0"
              width="112"
              height="108"
              style={{
                opacity: isPiecesAssembled ? 1 : 0,
                transform: isPiecesAssembled
                  ? 'translate3d(0, 0, 0) rotate(0deg) scale(1)'
                  : 'translate3d(24px, -24px, 0) rotate(14deg) scale(0.88)',
                transformOrigin: '56px 54px',
                transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            {/* Left Chevron Piece (Glides in from bottom-left) */}
            <image
              href="/logo-slices/icon-piece-left.png"
              x="0"
              y="0"
              width="112"
              height="108"
              style={{
                opacity: isPiecesAssembled ? 1 : 0,
                transform: isPiecesAssembled
                  ? 'translate3d(0, 0, 0) rotate(0deg) scale(1)'
                  : 'translate3d(-20px, 20px, 0) rotate(-16deg) scale(0.88)',
                transformOrigin: '56px 54px',
                transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.08s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.08s',
              }}
            />
          </g>

          {/* ── 2. Wordmark Typography: ACQUIRING ── */}
          <g
            style={{
              opacity: isAcquiringVisible ? 1 : 0,
              transform: isAcquiringVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-28px, 0, 0)',
              transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <image
              href="/logo-slices/text-acquiring.png"
              x="114"
              y="14"
              width="282"
              height="44"
            />
          </g>

          {/* ── 3. Wordmark Typography: TECHNOLOGY ── */}
          <g
            style={{
              opacity: isTechnologyVisible ? 1 : 0,
              transform: isTechnologyVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-22px, 0, 0)',
              transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <image
              href="/logo-slices/text-technology.png"
              x="114"
              y="62"
              width="282"
              height="32"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
