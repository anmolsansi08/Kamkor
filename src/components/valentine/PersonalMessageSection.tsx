import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriterText';
import { useState } from 'react';

export const PersonalMessageSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  const message = `My dearest friend,

Even though miles separate us, you're always close to my heart. Every laugh we've shared, every late-night conversation, every moment of support — they all mean the world to me.

You make my life brighter just by being in it. Thank you for being the amazing person you are.

Distance is just a number when friendship is this strong. 💕

Forever your friend`;

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="vintage-border parchment-texture p-8 md:p-12 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setShowMessage(true)}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold/50" />

          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              A Letter For You
            </h2>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>

          {/* Message content */}
          <div className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 whitespace-pre-line">
            {showMessage && (
              <TypewriterText
                text={message}
                delay={500}
                speed={30}
              />
            )}
          </div>

          {/* Signature */}
          <motion.div
            className="mt-8 text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 8 }}
          >
            <p className="font-script text-2xl text-primary">With all my love ❤️</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
