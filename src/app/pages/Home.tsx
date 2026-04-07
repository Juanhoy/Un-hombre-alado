import { motion } from "motion/react";
import { getCloudinaryUrl } from "@/app/config/cloudinary";

// Fallback to local assets if Cloudinary is not configured
import imgCasset31 from "@/assets/83060ca2ee4d5a079edf8a9d57a3ad60efff63d8.png";
import imgCasset11 from "@/assets/7a015c877b6f8546033e8b9314c8427a6a15fc8c.png";
import imgCasset21 from "@/assets/7f8d7ed936523d863d863f945090b1e46b9c6989.png";
import imgCasset41 from "@/assets/2c578c4c7df81b17a1b3b0ba45510faaea7f9f6f.png";

const USE_CLOUDINARY = false;

// The list of images for the artist. You can easily add more here!
const IMAGE_LIST = [
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_1') : imgCasset11, width: 447, height: 563 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_2') : imgCasset31, width: 324, height: 427 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_3') : imgCasset21, width: 342, height: 428 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_4') : imgCasset41, width: 450, height: 500 },
];

/**
 * A reusable Ticker Column component for the vertical loop effect
 */
function TickerColumn({ images, speed = 40, reverse = false }: { images: any[], speed?: number, reverse?: boolean }) {
  // Triple the images to ensure no gaps during the loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="h-screen overflow-hidden relative w-[450px]">
      <motion.div
        animate={{ 
          y: reverse ? [0, -100 * images.length / 3 + '%'] : [-100 * images.length / 3 + '%', 0] 
        }}
        initial={{ y: reverse ? 0 : -100 * images.length / 3 + '%' }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-col gap-24 items-center"
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="relative shadow-2xl rounded-sm overflow-hidden flex-shrink-0"
          >
            <img 
              src={image.src} 
              alt={`Artist visual ${index}`} 
              style={{ width: image.width, height: 'auto' }}
              className="block opacity-90 hover:opacity-100 transition-opacity duration-500" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative h-screen bg-white overflow-hidden">
      {/* 
        The side containers for the loop effect.
        We increased the inner gap to 600px to ensure plenty of space around the title.
      */}
      <div className="flex gap-[600px] justify-center px-4 w-full">
        
        {/* Left Vertical Ticker */}
        <TickerColumn images={IMAGE_LIST} speed={60} />

        {/* Right Vertical Ticker (Scrolled in reverse for dynamic feel) */}
        <TickerColumn images={IMAGE_LIST} speed={45} reverse />
        
      </div>

      {/* Subtle depth overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-white/20 via-transparent to-white/20 z-10" />
      
      {/* Instructions Overlay for User (Can be removed later) */}
      <div className="fixed bottom-4 left-4 text-[10px] text-gray-300 pointer-events-none tracking-widest uppercase">
        Looping Vertical Motion • Un hombre alado
      </div>
    </div>
  );
}