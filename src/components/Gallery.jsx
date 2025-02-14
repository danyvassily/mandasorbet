import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [2, 3, 4, 5].map(num => `${num}.jpg`);

  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Galerie Photos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative overflow-hidden rounded-lg shadow-xl"
          >
            <img 
              src={img} 
              alt={`Cocktail ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery; 