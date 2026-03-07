import { useState, useEffect, useCallback } from 'react';
import StarField from './components/StarField';
import FloatingHearts from './components/FloatingHearts';
import Countdown from './components/Countdown';
import DailyGiftSection from './components/DailyGiftSection';
import BirthdaySurprise from './components/BirthdaySurprise';
import confetti from 'canvas-confetti';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth(); // 0-indexed, March = 2
    const day = now.getDate();

    if (month === 2 && day === 14) {
      setIsBirthday(true);
      setCurrentDay(14);
    } else if (month === 2 && day >= 1 && day <= 13) {
      setCurrentDay(day);
    } else {
      // For demo/preview: show countdown state
      setCurrentDay(0);
    }

    // Loading animation
    setTimeout(() => setLoaded(true), 500);
    setTimeout(() => setShowContent(true), 1200);
  }, []);

  const entranceConfetti = useCallback(() => {
    if (isBirthday) {
      const duration = 3000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.6 },
          colors: ['#ff6b9d', '#ffd700', '#e6b3ff', '#a8e6cf', '#ff4081'],
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.6 },
          colors: ['#ff6b9d', '#ffd700', '#e6b3ff', '#a8e6cf', '#ff4081'],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [isBirthday]);

  useEffect(() => {
    if (showContent) {
      entranceConfetti();
    }
  }, [showContent, entranceConfetti]);

  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(135deg, #0a0015 0%, #1a0030 30%, #0d0020 60%, #150025 100%)' }}>
      <StarField />
      <FloatingHearts />

      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
          loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ background: 'linear-gradient(135deg, #0a0015, #1a0030)' }}
      >
        <div className="text-center">
          <div className="text-7xl md:text-8xl mb-6 animate-gift-bounce">🎁</div>
          <p className="text-pink-300 text-xl animate-pulse">Loading something special...</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-20 transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation Decorative Header */}
        <header className="pt-6 pb-2 px-4 text-center">
          <div className="flex justify-center gap-2 text-lg md:text-xl mb-2">
            {['🌸', '✨', '💖', '✨', '🌸'].map((e, i) => (
              <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
            ))}
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-8 md:py-16 px-4 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-pink-500/5 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Decorative ring */}
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-pink-500/20 flex items-center justify-center mx-auto animate-rotate-slow"
                style={{ boxShadow: '0 0 60px rgba(255,107,157,0.15)' }}>
                <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl md:text-7xl">
                    {isBirthday ? '🎂' : '🎁'}
                  </div>
                </div>
              </div>
              {/* Orbiting elements */}
              {['💖', '⭐', '🌸', '✨'].map((e, i) => (
                <div
                  key={i}
                  className="absolute text-xl md:text-2xl"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 90}deg) translateX(90px) rotate(-${i * 90}deg)`,
                    animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  {e}
                </div>
              ))}
            </div>

            <h1
              className="text-5xl md:text-8xl font-bold mb-4 animate-text-glow"
              style={{
                fontFamily: "'Great Vibes', cursive",
                background: 'linear-gradient(135deg, #ff6b9d, #ffd700, #e6b3ff, #ff4081)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'birthday-text 4s ease infinite, text-glow 2s ease-in-out infinite',
              }}
            >
              {isBirthday ? 'Happy Birthday' : 'For Célia'}
            </h1>

            {isBirthday ? (
              <h2
                className="text-4xl md:text-6xl font-bold text-pink-300 mb-6"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Célia! 🎉
              </h2>
            ) : (
              <p className="text-lg md:text-xl text-pink-300/80 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Something magical is being prepared just for you... ✨
              </p>
            )}

            <div className="flex justify-center gap-4 text-2xl md:text-3xl">
              {['🎈', '🎀', '🌟', '🎀', '🎈'].map((e, i) => (
                <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.25}s` }}>{e}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="px-4">
          <Countdown isBirthday={isBirthday} />
        </section>

        {/* Divider */}
        <div className="flex justify-center items-center gap-4 py-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-500/50" />
          <span className="text-2xl">💝</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>

        {/* Daily Gift or Birthday Surprise */}
        {isBirthday ? (
          <BirthdaySurprise />
        ) : (
          <DailyGiftSection currentDay={currentDay} isBirthday={isBirthday} />
        )}

        {/* Pre-birthday gift boxes section (visible when not birthday) */}
        {!isBirthday && (
          <section className="py-12 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center birthday-gradient-text mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
              🎁 Birthday Gift Boxes 🎁
            </h2>
            <p className="text-center text-pink-300/60 mb-8">These will unlock on Célia's birthday — March 14th!</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 text-center opacity-60"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                      border: '2px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-full h-0.5 bg-white/10" />
                      <div className="absolute w-0.5 h-full bg-white/10" />
                    </div>
                    <div className="absolute -top-2 text-lg">🎀</div>
                    <span className="text-3xl">🔒</span>
                  </div>
                  <p className="text-white/40 text-xs">Unlocks March 14</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Fun Facts / Birthday Trivia Section */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-purple-500/5 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-pink-500/5 blur-2xl" />

            <div className="relative z-10">
              <div className="text-5xl mb-4">🌟</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Did You Know?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="glass-card rounded-xl p-5 text-center">
                  <div className="text-3xl mb-2">♓</div>
                  <h3 className="text-pink-300 font-bold mb-1">Pisces</h3>
                  <p className="text-white/60 text-sm">March 14 makes Célia a creative, compassionate Pisces!</p>
                </div>
                <div className="glass-card rounded-xl p-5 text-center">
                  <div className="text-3xl mb-2">🔢</div>
                  <h3 className="text-pink-300 font-bold mb-1">Pi Day!</h3>
                  <p className="text-white/60 text-sm">March 14 (3/14) is also Pi Day — how perfectly mathematical! π</p>
                </div>
                <div className="glass-card rounded-xl p-5 text-center">
                  <div className="text-3xl mb-2">🌷</div>
                  <h3 className="text-pink-300 font-bold mb-1">Spring Baby</h3>
                  <p className="text-white/60 text-sm">Born in the season of new beginnings and blooming flowers!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beautiful Quote Section */}
        <section className="py-12 px-4 max-w-3xl mx-auto text-center">
          <div className="relative">
            <div className="text-6xl text-pink-500/20 absolute -top-4 left-4" style={{ fontFamily: 'serif' }}>"</div>
            <blockquote className="text-xl md:text-2xl text-pink-200/80 italic leading-relaxed px-12" style={{ fontFamily: "'Dancing Script', cursive" }}>
              The world is more beautiful because you are in it, Célia. 
              May every moment of your life be filled with as much joy as you bring to others.
            </blockquote>
            <div className="text-6xl text-pink-500/20 absolute -bottom-8 right-4" style={{ fontFamily: 'serif' }}>"</div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {['💕', '🌸', '💕'].map((e, i) => (
              <span key={i} className="animate-float text-xl" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center border-t border-white/5">
          <div className="flex justify-center gap-3 text-2xl mb-4">
            {['🌹', '💖', '🎂', '💖', '🌹'].map((e, i) => (
              <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>{e}</span>
            ))}
          </div>
          <p className="text-pink-300/40 text-sm">
            Crafted with infinite love for Célia 💝
          </p>
          <p className="text-pink-300/30 text-xs mt-2">
            March 14th — A day the world became brighter ✨
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
