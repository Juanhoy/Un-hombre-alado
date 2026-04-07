import { motion } from "motion/react";
import { getCloudinaryUrl } from "@/app/config/cloudinary";

// Fallback to local assets if Cloudinary is not configured
import imgCasset31 from "@/assets/83060ca2ee4d5a079edf8a9d57a3ad60efff63d8.png";
import imgCasset11 from "@/assets/7a015c877b6f8546033e8b9314c8427a6a15fc8c.png";
import imgCasset21 from "@/assets/7f8d7ed936523d863d863f945090b1e46b9c6989.png";
import imgCasset41 from "@/assets/2c578c4c7df81b17a1b3b0ba45510faaea7f9f6f.png";

const USE_CLOUDINARY = false; // Set to true once you've uploaded your images

export default function Home() {
  const images = [
    { 
      src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_1') : imgCasset11, 
      className: "absolute h-[563px] left-[146px] top-[65px] w-[447px]", 
      delay: 0 
    },
    { 
      src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_2') : imgCasset31, 
      className: "absolute h-[427px] right-[146px] top-[172px] w-[324px]", 
      delay: 0.2 
    },
    { 
      src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_3') : imgCasset21, 
      className: "absolute h-[428px] left-[200px] top-[727px] w-[342px]", 
      delay: 0.4 
    },
    { 
      src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_4') : imgCasset41, 
      className: "absolute h-[500px] right-[100px] top-[700px] w-[450px]", 
      delay: 0.6 
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={image.className}
          initial={{ opacity: 0, scale: 0.9, rotate: (index % 2 === 0 ? -2 : 2) }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: image.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            alt={`Un hombre alado - Visual ${index + 1}`} 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full shadow-2xl rounded-sm grayscale hover:grayscale-0 transition-all duration-700" 
            src={image.src} 
          />
        </motion.div>
      ))}
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/10" />
    </div>
  );
}