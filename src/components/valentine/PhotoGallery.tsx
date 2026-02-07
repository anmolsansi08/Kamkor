import { motion } from 'framer-motion';
import { useState } from 'react';

interface PhotoFrame {
  id: number;
  caption: string;
  rotation: number;
}

const photos: PhotoFrame[] = [
  { id: 1, caption: 'Best memories together 💕', rotation: -3 },
  { id: 2, caption: 'Adventures we shared ✨', rotation: 2 },
  { id: 3, caption: 'Laughter never ends 😄', rotation: -2 },
  { id: 4, caption: 'Friends forever 💖', rotation: 4 },
  { id: 5, caption: 'Moments to cherish 🌸', rotation: -4 },
  { id: 6, caption: 'You mean the world 🌍', rotation: 1 },
  { id: 7, caption: 'Unforgettable days 🌟', rotation: -1 },
  { id: 8, caption: 'Always in my heart 💗', rotation: 3 },
  { id: 9, caption: 'Partners in crime 😂', rotation: -3 },
];

const PolaroidFrame = ({ photo, index }: { photo: PhotoFrame; index: number }) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ rotate: `${photo.rotation}deg` }}
      initial={{ opacity: 0, y: 50, rotate: photo.rotation }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="bg-cream p-3 pb-4 shadow-lg rounded-sm relative">
        {/* Photo placeholder */}
        <div className="aspect-square w-full bg-gradient-to-br from-rose-light/30 to-gold-light/30 flex items-center justify-center overflow-hidden">
          <motion.div
            className="text-5xl md:text-6xl"
            whileHover={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            📷
          </motion.div>
        </div>

        {/* Tape effect */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-gold/30 rounded-sm transform -rotate-2" />
      </div>
    </motion.div>
  );
};

export const PhotoGallery = () => {
  return (
    <section className="relative py-12 md:py-20 px-3 md:px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3 md:mb-4">
            Our Memories
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            Moments that make our friendship special
          </p>
          <div className="h-px w-36 md:w-48 mx-auto mt-3 md:mt-4 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-10">
          {photos.map((photo, index) => (
            <PolaroidFrame key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
