import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: 'rose' | 'lavender';
}

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      const petalCount = isMobile ? 12 : 20;
      for (let i = 0; i < petalCount; i++) {
        newPetals.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 8 + Math.random() * 8,
          size: isMobile ? 20 + Math.random() * 15 : 28 + Math.random() * 22,
          rotation: Math.random() * 360,
          type: Math.random() > 0.5 ? 'rose' : 'lavender',
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: -30,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(petal.id) * (isMobile ? 50 : 100)],
            rotate: [petal.rotation, petal.rotation + 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {petal.type === 'rose' ? (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              className="text-rose opacity-70"
            >
              <path
                d="M12 2C12 2 8 6 8 10C8 14 12 18 12 18C12 18 16 14 16 10C16 6 12 2 12 2Z"
                fill="currentColor"
              />
              <path
                d="M12 6C12 6 9 9 9 12C9 15 12 18 12 18C12 18 15 15 15 12C15 9 12 6 12 6Z"
                fill="hsl(var(--rose-light))"
                opacity="0.6"
              />
            </svg>
          ) : (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-70"
            >
              {/* Lavender flower stem with multiple small petals */}
              <ellipse cx="12" cy="8" rx="3" ry="5" fill="hsl(270, 60%, 70%)" />
              <ellipse cx="10" cy="12" rx="2.5" ry="4" fill="hsl(270, 50%, 75%)" />
              <ellipse cx="14" cy="12" rx="2.5" ry="4" fill="hsl(270, 50%, 75%)" />
              <ellipse cx="12" cy="16" rx="2" ry="3" fill="hsl(270, 40%, 80%)" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};