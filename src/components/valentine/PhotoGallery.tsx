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
];

const PolaroidFrame = ({ photo, index }: { photo: PhotoFrame; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ rotate: `${photo.rotation}deg` }}
      initial={{ opacity: 0, y: 50, rotate: photo.rotation }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-cream p-3 pb-12 shadow-lg rounded-sm relative">
        {/* Photo placeholder */}
        <div className="aspect-square w-full bg-gradient-to-br from-rose-light/30 to-gold-light/30 flex items-center justify-center overflow-hidden">
          <div className="text-center p-4">
            <motion.div
              className="text-6xl mb-2"
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              📷
            </motion.div>
            <p className="font-body text-sm text-muted-foreground">
              Add your photo here
            </p>
          </div>
        </div>

        {/* Caption */}
        <motion.div
          className="absolute bottom-2 left-0 right-0 text-center"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          <p className="font-script text-lg text-foreground/80 px-2">
            {photo.caption}
          </p>
        </motion.div>

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

        {/* Photo grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {photos.map((photo, index) => (
            <PolaroidFrame key={photo.id} photo={photo} index={index} />
          ))}
        </div>

        {/* Note about adding photos */}
        <motion.p
          className="text-center mt-8 md:mt-12 font-body text-sm md:text-base text-muted-foreground italic px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          ✨ Add your favorite photos to make this gallery truly special ✨
        </motion.p>
      </div>
    </section>
  );
};
