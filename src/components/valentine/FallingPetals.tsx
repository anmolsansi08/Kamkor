import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 20; i++) {
        newPetals.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 8 + Math.random() * 8,
          size: 15 + Math.random() * 15,
          rotation: Math.random() * 360,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

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
            x: [0, Math.sin(petal.id) * 100],
            rotate: [petal.rotation, petal.rotation + 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
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
        </motion.div>
      ))}
    </div>
  );
};
