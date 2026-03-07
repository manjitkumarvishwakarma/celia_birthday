import { useMemo } from 'react';

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    const emojis = ['💖', '💕', '💗', '💝', '🌸', '✨', '⭐', '🦋', '🌹'];
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 8,
      size: Math.random() * 16 + 14,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}
