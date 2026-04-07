import { motion, useScroll, useTransform } from "motion/react";
import { getCloudinaryUrl } from "@/app/config/cloudinary";
import { useRef } from "react";

// Fallback to local assets if Cloudinary is not configured
import imgCasset31 from "@/assets/83060ca2ee4d5a079edf8a9d57a3ad60efff63d8.png";
import imgCasset11 from "@/assets/7a015c877b6f8546033e8b9314c8427a6a15fc8c.png";
import imgCasset21 from "@/assets/7f8d7ed936523d863d863f945090b1e46b9c6989.png";
import imgCasset41 from "@/assets/2c578c4c7df81b17a1b3b0ba45510faaea7f9f6f.png";

const USE_CLOUDINARY = false;

// Divide the images for the left and right columns
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
  
  // Track the scroll of the entire page
  const { scrollYProgress } = useScroll();

  // Create inverse scroll relationships
  // As scroll goes from 0% to 100% of the page:
  // Left column moves from Y: 0 to Y: -500px (moving UP)
  // Right column moves from Y: -500px to Y: 0 (moving DOWN)
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-white">
      {/* 
        Fixed viewport wrapper that contains the side columns.
        This wrapper stays in place while the user scrolls 300vh of page height.
      */}
      <div className="fixed inset-0 pointer-events-none flex gap-[600px] justify-center px-4 overflow-hidden">
        
        {/* Left Column - Inverse Parallax */}
        <motion.div 
          style={{ y: leftY }}
          className="w-[450px] flex flex-col gap-24 pt-24 items-center"
        >
          {/* We repeat the images to make the scroll feel long and infinite */}
          {[...LEFT_IMAGES, ...LEFT_IMAGES].map((image, index) => (
            <div
              key={`left-${index}`}
              className="relative shadow-2xl rounded-sm overflow-hidden flex-shrink-0"
            >
              <img 
                src={image.src} 
                alt="Artist Portrait Left" 
                style={{ width: image.width, height: 'auto' }}
                className="block" 
              />
            </div>
          ))}
        </motion.div>

        {/* Right Column - Normal Parallax (shuffled) */}
        <motion.div 
          style={{ y: rightY }}
          className="w-[450px] flex flex-col gap-24 pt-24 items-center"
        >
          {[...RIGHT_IMAGES, ...RIGHT_IMAGES].map((image, index) => (
            <div
              key={`right-${index}`}
              className="relative shadow-2xl rounded-sm overflow-hidden flex-shrink-0"
            >
              <img 
                src={image.src} 
                alt="Artist Portrait Right" 
                style={{ width: image.width, height: 'auto' }}
                className="block" 
              />
            </div>
          ))}
        </motion.div>
        
      </div>

      {/* Decorative Fixed Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white opacity-40 z-10" />
      
      {/* Scroll indicator (aesthetic) */}
      <div className="fixed bottom-10 right-10 flex flex-col items-center gap-2 z-50 text-[10px] tracking-[0.4em] text-gray-300 transform rotate-90 origin-right translate-x-12 translate-y-20">
        <div className="w-10 h-px bg-gray-200" />
        SCROLL TO EXPLORE
      </div>
    </div>
  );
}