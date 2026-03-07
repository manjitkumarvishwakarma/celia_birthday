import { useMemo } from 'react';

export default function StarField() {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.size > 2 ? '#fff' : 'rgba(255,255,255,0.6)',
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: star.size > 2 ? '0 0 6px rgba(255,255,255,0.8)' : 'none',
          }}
        />
      ))}
    </div>
  );
}
