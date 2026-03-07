import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ isBirthday }: { isBirthday: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let birthday = new Date(currentYear, 2, 14); // March 14

      if (now > birthday) {
        birthday = new Date(currentYear + 1, 2, 14);
      }

      const diff = birthday.getTime() - now.getTime();

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  if (isBirthday) {
    return (
      <div className="text-center my-8 animate-scale-in">
        <div className="text-6xl mb-4 animate-wave">🎉</div>
        <h2 className="text-3xl md:text-5xl font-bold birthday-gradient-text" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Today is the Day!
        </h2>
        <p className="text-pink-300 text-lg mt-3">March 14th — Célia's Birthday! 🎂</p>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', color: 'from-pink-500 to-rose-500' },
    { value: timeLeft.hours, label: 'Hours', color: 'from-purple-500 to-violet-500' },
    { value: timeLeft.minutes, label: 'Minutes', color: 'from-blue-500 to-cyan-500' },
    { value: timeLeft.seconds, label: 'Seconds', color: 'from-amber-500 to-yellow-500' },
  ];

  return (
    <div className="text-center my-8 md:my-12">
      <h2 className="text-xl md:text-2xl text-pink-300 mb-6 font-light tracking-wider">
        ✨ Counting Down to Célia's Birthday ✨
      </h2>
      <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="glass-card rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] animate-pulse-glow"
          >
            <div className={`text-3xl md:text-5xl font-bold bg-gradient-to-b ${unit.color} bg-clip-text text-transparent`}>
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-pink-300/70 mt-2 uppercase tracking-widest">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
