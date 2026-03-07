import { useState } from 'react';

interface GiftBoxProps {
  emoji: string;
  title: string;
  message: string;
  color: string;
  index: number;
  isLocked?: boolean;
}

export default function GiftBox({ emoji, title, message, color, index, isLocked }: GiftBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (isLocked) {
    return (
      <div className="relative group">
        <div
          className="glass-card rounded-2xl p-6 text-center cursor-not-allowed opacity-50 transition-all duration-300"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div className="text-5xl mb-3">🔒</div>
          <p className="text-white/40 text-sm">Locked</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full glass-card rounded-2xl p-6 text-center cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 animate-gift-bounce"
          style={{
            animationDelay: `${index * 0.3}s`,
            borderColor: `${color}33`,
            boxShadow: `0 0 30px ${color}22`,
          }}
        >
          {/* Gift Box Lid */}
          <div
            className="relative mx-auto w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${color}33, ${color}11)`,
              border: `2px solid ${color}55`,
            }}
          >
            {/* Ribbon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-1 rounded-full" style={{ background: `${color}88` }} />
              <div className="absolute w-1 h-full rounded-full" style={{ background: `${color}88` }} />
            </div>
            {/* Bow */}
            <div className="absolute -top-3 text-2xl">🎀</div>
            <span className="text-3xl md:text-4xl relative z-10">🎁</span>
          </div>
          <p className="text-white/80 text-sm font-medium">Click to Open!</p>
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              boxShadow: `0 0 40px ${color}44, inset 0 0 40px ${color}11`,
            }}
          />
        </button>
      ) : (
        <div
          className="glass-card rounded-2xl p-6 text-center animate-scale-in"
          style={{
            borderColor: `${color}55`,
            boxShadow: `0 0 40px ${color}33`,
            background: `linear-gradient(135deg, ${color}11, ${color}05)`,
          }}
        >
          <div className="text-5xl md:text-6xl mb-4 animate-float" style={{ animationDelay: '0.2s' }}>
            {emoji}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2" style={{ color }}>
            {title}
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            {message}
          </p>
          <div className="mt-4 flex justify-center gap-1">
            {['💖', '✨', '💖'].map((e, i) => (
              <span key={i} className="animate-float text-lg" style={{ animationDelay: `${i * 0.3}s` }}>
                {e}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
