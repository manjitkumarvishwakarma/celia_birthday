import { useState, useEffect, useCallback } from 'react';
import { birthdayGifts, birthdayMessages } from '../data/gifts';
import GiftBox from './GiftBox';
import confetti from 'canvas-confetti';

export default function BirthdaySurprise() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const massiveConfetti = useCallback(() => {
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.5 },
        colors: ['#ff6b9d', '#ffd700', '#e6b3ff', '#a8e6cf', '#ff4081', '#87ceeb'],
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.5 },
        colors: ['#ff6b9d', '#ffd700', '#e6b3ff', '#a8e6cf', '#ff4081', '#87ceeb'],
      });
      confetti({
        particleCount: 5,
        angle: 90,
        spread: 120,
        origin: { x: 0.5, y: 0 },
        colors: ['#ff6b9d', '#ffd700', '#e6b3ff', '#a8e6cf', '#ff4081'],
        gravity: 1.5,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % birthdayMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleRevealSurprise = () => {
    setShowSurprise(true);
    massiveConfetti();
    // Fire confetti again after a delay
    setTimeout(() => massiveConfetti(), 2000);
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Giant Birthday Banner */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink-500/10 blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10">
          <div className="text-6xl md:text-8xl mb-4">
            <span className="animate-wave inline-block" style={{ animationDelay: '0s' }}>🎂</span>
          </div>
          <h1
            className="text-5xl md:text-8xl font-bold birthday-gradient-text mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Happy Birthday Célia!
          </h1>
          <div className="flex justify-center gap-3 text-3xl md:text-4xl my-6">
            {['🎈', '🎉', '🥳', '🎊', '🎁', '💝', '🎈'].map((e, i) => (
              <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
            ))}
          </div>

          {/* Rotating messages */}
          <div className="h-16 flex items-center justify-center overflow-hidden">
            <p
              key={currentMessageIndex}
              className="text-xl md:text-2xl text-pink-200 animate-slide-up max-w-2xl mx-auto"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {birthdayMessages[currentMessageIndex]}
            </p>
          </div>
        </div>
      </div>

      {/* Birthday Cake Section */}
      <div className="glass-card rounded-3xl p-8 md:p-12 text-center mb-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-yellow-500/5 blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-pink-500/5 blur-2xl" />

        <div className="relative z-10">
          <div className="text-8xl md:text-9xl mb-6 animate-cake-wobble">🎂</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Make a Wish, Célia! 🌟
          </h2>
          <p className="text-pink-300/80 text-lg mb-4">
            Close your eyes, take a deep breath, and blow out the candles... 🕯️✨
          </p>
          <div className="flex justify-center gap-1 text-3xl mb-6">
            {Array.from({ length: 7 }, (_, i) => (
              <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.15}s` }}>🕯️</span>
            ))}
          </div>
        </div>
      </div>

      {/* Gift Boxes Grid */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center birthday-gradient-text mb-8" style={{ fontFamily: "'Dancing Script', cursive" }}>
          🎁 Your Birthday Gifts 🎁
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {birthdayGifts.map((gift, index) => (
            <GiftBox
              key={index}
              emoji={gift.emoji}
              title={gift.title}
              message={gift.message}
              color={gift.color}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Special Surprise Button */}
      {!showSurprise ? (
        <div className="text-center mb-12">
          <div className="glass-card rounded-3xl p-8 md:p-12 inline-block">
            <div className="text-6xl mb-4 animate-gift-bounce">🎀</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
              One Last Surprise...
            </h3>
            <p className="text-pink-300/70 mb-6">Are you ready for something truly special?</p>
            <button
              onClick={handleRevealSurprise}
              className="relative px-10 py-5 rounded-full text-white font-bold text-xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden group rainbow-border border-2"
              style={{
                background: 'linear-gradient(135deg, #ff6b9d, #9c27b0, #ff4081)',
                boxShadow: '0 0 40px rgba(255, 107, 157, 0.6), 0 0 80px rgba(156, 39, 176, 0.3)',
              }}
            >
              <span className="relative z-10">✨ Reveal the Big Surprise ✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-scale-in mb-12">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,157,0.1), rgba(156,39,176,0.1), rgba(255,215,0,0.1))',
              boxShadow: '0 0 60px rgba(255,107,157,0.3), 0 0 120px rgba(156,39,176,0.15)',
              border: '2px solid rgba(255,107,157,0.3)',
            }}
          >
            <div className="absolute inset-0">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: 0.3,
                  }}
                >
                  {['💖', '✨', '🌟', '💕', '🌸'][i % 5]}
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <div className="text-7xl md:text-9xl mb-6">💝</div>
              <h2
                className="text-4xl md:text-6xl font-bold birthday-gradient-text mb-6"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Dear Célia
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 text-white/90 text-lg md:text-xl leading-relaxed">
                <p>
                  On this beautiful day, March 14th, the world became a better place because you were born. 🌍💫
                </p>
                <p>
                  You are a shining light that brightens everyone's day. Your kindness, your smile, 
                  your laughter — they are gifts to everyone who knows you. 🌟
                </p>
                <p>
                  May this new year of your life bring you endless joy, love, laughter, 
                  and all the dreams your heart desires. You deserve nothing but the absolute best! 💕
                </p>
                <p className="text-2xl md:text-3xl font-bold birthday-gradient-text pt-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
                  Happy Birthday, Bhutki! 🎂🎉
                </p>
                <p className="text-pink-300/70 text-base pt-2">
                  Here's to making this your most magical year yet! 🦄✨
                </p>
              </div>

              <div className="mt-8 flex justify-center gap-3 text-4xl flex-wrap">
                {['🎂', '🎁', '💝', '🌹', '👑', '💎', '🦋', '🌈', '⭐', '🎉'].map((e, i) => (
                  <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Birthday Message */}
      <div className="text-center py-8">
        <p className="text-pink-300/50 text-sm">
          Made with 💖 for the most amazing person — Célia
        </p>
        <div className="flex justify-center gap-2 mt-3 text-xl">
          {['💖', '🎂', '💖'].map((e, i) => (
            <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
