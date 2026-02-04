import { motion } from 'framer-motion';

interface SparkleProps {
  className?: string;
}

export const Sparkle = ({ className = '' }: SparkleProps) => {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`text-gold ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M10 0L11.5 7L18 8.5L11.5 10L10 17L8.5 10L2 8.5L8.5 7L10 0Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};

interface SparkleGroupProps {
  count?: number;
  className?: string;
}

export const SparkleGroup = ({ count = 5, className = '' }: SparkleGroupProps) => {
  const positions = [
    { top: '10%', left: '5%', delay: 0 },
    { top: '20%', right: '10%', delay: 0.3 },
    { top: '60%', left: '8%', delay: 0.6 },
    { top: '70%', right: '5%', delay: 0.9 },
    { top: '40%', left: '3%', delay: 1.2 },
    { top: '50%', right: '8%', delay: 0.2 },
    { top: '80%', left: '12%', delay: 0.5 },
    { top: '30%', right: '3%', delay: 0.8 },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {positions.slice(0, count).map((pos, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={pos}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: pos.delay,
            duration: 0.5,
          }}
        >
          <Sparkle />
        </motion.div>
      ))}
    </div>
  );
};
