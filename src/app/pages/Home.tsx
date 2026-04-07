import { motion, useScroll, useTransform } from "motion/react";
import { getCloudinaryUrl } from "@/app/config/cloudinary";
import { useRef } from "react";

// Fallback assets
import imgCasset41 from "@/assets/2c578c4c7df81b17a1b3b0ba45510faaea7f9f6f.png";
import imgCasset11 from "@/assets/7a015c877b6f8546033e8b9314c8427a6a15fc8c.png";
import imgCasset21 from "@/assets/7f8d7ed936523d863d863f945090b1e46b9c6989.png";
import imgCasset31 from "@/assets/83060ca2ee4d5a079edf8a9d57a3ad60efff63d8.png";

const USE_CLOUDINARY = false;

const LEFT_IMAGES = [
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_1') : imgCasset11, width: 447, height: 563 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_3') : imgCasset21, width: 342, height: 428 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_5') : imgCasset11, width: 400, height: 500 },
];

const RIGHT_IMAGES = [
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_2') : imgCasset31, width: 324, height: 427 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_4') : imgCasset41, width: 450, height: 500 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_6') : imgCasset31, width: 380, height: 480 },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Mapping scroll distance based on height - on mobile move a little less
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <div ref={containerRef} className="relative min-h-[400vh] lg:min-h-[300vh] bg-white">
      {/* 
        Responsive view:
        The gap expands from nothing on mobile to 600px on desktop.
      */}
      <div className="fixed inset-0 pointer-events-none flex gap-4 lg:gap-[600px] justify-center px-4 overflow-hidden">
        
        {/* Left Column */}
        <motion.div 
          style={{ y: leftY }}
          className="w-1/2 lg:w-[450px] flex flex-col gap-8 lg:gap-24 pt-24 items-center"
        >
          {[...LEFT_IMAGES, ...LEFT_IMAGES].map((image, index) => (
            <div
              key={`left-${index}`}
              className="relative shadow-xl rounded-sm overflow-hidden flex-shrink-0"
            >
              <img 
                src={image.src} 
                alt="Visual Left" 
                className="w-full h-auto block" 
              />
            </div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div 
          style={{ y: rightY }}
          className="w-1/2 lg:w-[450px] flex flex-col gap-8 lg:gap-24 pt-24 items-center"
        >
          {[...RIGHT_IMAGES, ...RIGHT_IMAGES].map((image, index) => (
            <div
              key={`right-${index}`}
              className="relative shadow-xl rounded-sm overflow-hidden flex-shrink-0"
            >
              <img 
                src={image.src} 
                alt="Visual Right" 
                className="w-full h-auto block" 
              />
            </div>
          ))}
        </motion.div>
        
      </div>

      {/* Decorative Fixed Overlay - Slightly less opaque on mobile */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white opacity-60 lg:opacity-40 z-10" />
      
      {/* Scroll indicator - Hidden on mobile */}
      <div className="hidden lg:flex fixed bottom-10 right-10 flex-col items-center gap-2 z-50 text-[10px] tracking-[0.4em] text-gray-300 transform rotate-90 origin-right translate-x-12 translate-y-20 uppercase">
        <div className="w-10 h-px bg-gray-200" />
        Scroll
      </div>
    </div>
  );
}