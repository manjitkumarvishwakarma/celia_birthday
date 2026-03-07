import { useState, useCallback } from 'react';
import { dailyGifts, type DailyGift } from '../data/gifts';
import confetti from 'canvas-confetti';

interface DailyGiftSectionProps {
  currentDay: number; // 1-14 (day of march)
  isBirthday: boolean;
}

export default function DailyGiftSection({ currentDay, isBirthday }: DailyGiftSectionProps) {
  const [openedGift, setOpenedGift] = useState<DailyGift | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [hasOpenedToday, setHasOpenedToday] = useState(false);

  const triggerConfetti = useCallback(() => {
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#ff6b9d', '#ffd700', '#e6b3ff', '#a8e6cf', '#ff4081'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#ff6b9d', '#ffd700', '#e6b3ff', '#a8e6cf', '#ff4081'],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const handleOpenGift = () => {
    if (hasOpenedToday || isBirthday) return;

    setIsOpening(true);

    // Find today's gift
    const todayGift = dailyGifts.find(g => g.day === currentDay);
    if (!todayGift) return;

    setTimeout(() => {
      setOpenedGift(todayGift);
      setIsOpening(false);
      setHasOpenedToday(true);
      triggerConfetti();
    }, 1500);
  };

  if (isBirthday) return null;

  // Before March 1st or after March 13th (not birthday)
  if (currentDay < 1 || currentDay > 13) {
    return (
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="text-6xl mb-6">🎁</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Daily Gift Box
          </h2>
          <p className="text-pink-300/80 text-lg">
            Daily gifts start from March 1st! Come back then for special surprises leading up to Célia's birthday! 🎉
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold birthday-gradient-text mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
          ✨ Today's Special Gift ✨
        </h2>
        <p className="text-pink-300/70">
          Day {currentDay} of 14 — {14 - currentDay} day{14 - currentDay !== 1 ? 's' : ''} until the birthday!
        </p>
        {/* Progress bar */}
        <div className="mt-4 max-w-md mx-auto h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${(currentDay / 14) * 100}%`,
              background: 'linear-gradient(90deg, #ff6b9d, #ffd700, #e6b3ff)',
            }}
          />
        </div>
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-500/5 blur-xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/5 blur-xl" />

        {!openedGift && !isOpening && (
          <>
            <div className="text-7xl md:text-8xl mb-6 animate-gift-bounce">🎁</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              March {currentDay} — Your daily gift is ready!
            </h3>
            <button
              onClick={handleOpenGift}
              className="relative px-8 py-4 rounded-full text-white font-bold text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #ff6b9d, #ff4081, #e91e63)',
                boxShadow: '0 0 30px rgba(255, 107, 157, 0.5)',
              }}
            >
              <span className="relative z-10">🎀 Open Today's Gift 🎀</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            <p className="text-white/40 text-sm mt-4">One gift per day — make it count! 💫</p>
          </>
        )}

        {isOpening && (
          <div className="py-8">
            <div className="text-7xl md:text-8xl mb-6" style={{ animation: 'gift-bounce 0.3s ease-in-out infinite' }}>
              🎁
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-pink-400"
                  style={{
                    animation: 'float 0.6s ease-in-out infinite',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <p className="text-pink-300 text-lg mt-4">Opening your gift...</p>
          </div>
        )}

        {openedGift && !isOpening && (
          <div className="animate-scale-in">
            <div className="text-7xl md:text-8xl mb-6 animate-float">
              {openedGift.emoji}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: openedGift.color, fontFamily: "'Dancing Script', cursive" }}>
              {openedGift.title}
            </h3>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-6">
              {openedGift.message}
            </p>
            <div className="glass-card rounded-2xl p-4 inline-block mt-2" style={{ borderColor: `${openedGift.color}33` }}>
              <p className="text-pink-300 text-sm">
                🕐 Come back tomorrow for another special gift!
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {['✨', '💖', '🌟', '💖', '✨'].map((e, i) => (
                <span key={i} className="animate-float text-xl" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Timeline of past gifts */}
      <div className="mt-8 flex justify-center gap-2 flex-wrap">
        {dailyGifts.map((gift) => (
          <div
            key={gift.day}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
              gift.day < currentDay
                ? 'bg-pink-500/30 border border-pink-500/50'
                : gift.day === currentDay
                ? 'bg-pink-500/50 border-2 border-pink-400 scale-110'
                : 'bg-white/5 border border-white/10'
            }`}
            title={gift.day <= currentDay ? gift.title : `Day ${gift.day}`}
          >
            {gift.day < currentDay ? (
              <span className="text-base">{gift.emoji}</span>
            ) : gift.day === currentDay ? (
              <span className="text-base">🎁</span>
            ) : (
              <span className="text-white/30 text-xs">{gift.day}</span>
            )}
          </div>
        ))}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm border ${
          currentDay >= 14 ? 'bg-gold/30 border-yellow-400' : 'bg-white/5 border-white/10'
        }`}>
          <span className={currentDay >= 14 ? 'text-base' : 'text-white/30 text-xs'}>
            {currentDay >= 14 ? '🎂' : '14'}
          </span>
        </div>
      </div>
    </section>
  );
}
