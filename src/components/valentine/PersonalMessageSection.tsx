import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriterText';
import { useState } from 'react';

export const PersonalMessageSection = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showSignature, setShowSignature] = useState(false);

  const message = `
  
  My dearest,

Happy Valentine's Day.

Even with miles between us, you remain the person my heart reaches for first. Some connections don't just happen. They unfold slowly, like petals opening, until one day you realize this person has become woven into the very fabric of your days. That's what you are to me.

I find myself thinking about the way it feels to talk to you. How effortless, how natural, like coming home. Your laugh has a way of rewriting my entire mood. Your presence, even through a screen, quiets every restless thing inside me.

I'll be honest with you, because you deserve that. Sometimes this feels like something we're building together. Something mutual, something shared. In those moments, I feel seen by you in ways I can't explain. But other times, I wonder if I'm the only one holding this so tightly. I wonder if the space between your messages is just life being busy, or something quieter. It's a strange place to stand, loving someone and not always knowing if the weight of it is felt on both sides.

But even in that uncertainty, I stay. Not because I need you to match me perfectly, but because what we have, even on the days it feels uneven, still means more to me than most things ever have.

There's a softness in you that undoes me. You're thoughtful without trying, strong in the quietest ways, and there's so much beauty in how you see the world. When I think of you, I think of warmth I want to fall into. I think of a connection that feels like the safest place I've ever known, even when I'm unsure of where I stand within it.

So here's what I need you to know today: I love you. Not just in the way of ordinary affection, but deeply, achingly, in the way that makes your name feel like a secret I carry everywhere.

If I could give you anything today, it would be this: a promise that my heart is yours for as long as you'll have it. A reminder that you are adored exactly as you are. And maybe, a quiet hope that you'll let me know I matter to you too. Not because I doubt you, but because sometimes my heart just needs to hear it.

I miss you. I'm grateful for you. I'm yours.

Forever and always

  `;

  return (
    <section className="relative py-12 md:py-20 px-3 md:px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="vintage-border parchment-texture p-5 md:p-8 lg:p-12 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          onViewportEnter={() => setShowMessage(true)}
        >
          {/* Decorative corners - smaller on mobile */}
          <div className="absolute top-2 md:top-4 left-2 md:left-4 w-6 md:w-8 h-6 md:h-8 border-l-2 border-t-2 border-gold/50" />
          <div className="absolute top-2 md:top-4 right-2 md:right-4 w-6 md:w-8 h-6 md:h-8 border-r-2 border-t-2 border-gold/50" />
          <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-6 md:w-8 h-6 md:h-8 border-l-2 border-b-2 border-gold/50" />
          <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-6 md:w-8 h-6 md:h-8 border-r-2 border-b-2 border-gold/50" />

          {/* Header */}
          <motion.div
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">
              A Letter For You
            </h2>
            <div className="h-px w-24 md:w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>

          {/* Message content */}
          <div className="font-body text-base md:text-lg lg:text-xl leading-relaxed text-foreground/90 whitespace-pre-line">
            {showMessage && (
              <TypewriterText
                text={message}
                delay={500}
                speed={30}
                onComplete={() => setShowSignature(true)}
              />
            )}
          </div>

          {/* Signature */}
          {showSignature && (
            <motion.div
              className="mt-6 md:mt-8 text-right"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-script text-xl md:text-2xl text-primary">With all my love ❤️</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
