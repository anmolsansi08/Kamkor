import { motion } from 'framer-motion';

interface PhotoFrame {
  id: number;
  imageSrc: string;
  imageAlt: string;
  rotation: number;
}

const rotationPattern = [-3, 2, -2, 4, -4, 1, -1, 3];

const imageModules = import.meta.glob('/src/Pics/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const shuffle = <T,>(items: T[]): T[] => {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

const photos: PhotoFrame[] = shuffle(Object.entries(imageModules))
  .map(([filePath, imageSrc], index) => {
    const fileName = filePath.split('/').pop() ?? `photo-${index + 1}`;
    const baseName = fileName.replace(/\.[^.]+$/, '');
    return {
      id: index + 1,
      imageSrc,
      imageAlt: baseName.replace(/[_-]+/g, ' ').trim() || `Photo ${index + 1}`,
      rotation: rotationPattern[index % rotationPattern.length],
    };
  });

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
        <div className="aspect-square w-full bg-gradient-to-br from-rose-light/30 to-gold-light/30 overflow-hidden">
          <img
            src={photo.imageSrc}
            alt={photo.imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = '/placeholder.svg';
            }}
          />
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

        {photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-10">
            {photos.map((photo, index) => (
              <PolaroidFrame key={photo.id} photo={photo} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center font-body text-muted-foreground">
            No images found in <code>src/Pics</code>.
          </p>
        )}
      </div>
    </section>
  );
};

  
