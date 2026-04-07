import { motion, useScroll, useTransform } from "motion/react";
import { getCloudinaryUrl } from "@/app/config/cloudinary";
import { useRef } from "react";
import { Navigation } from "../components/Navigation";

// Fallback assets
import imgCasset41 from "@/assets/2c578c4c7df81b17a1b3b0ba45510faaea7f9f6f.png";
import imgCasset11 from "@/assets/7a015c877b6f8546033e8b9314c8427a6a15fc8c.png";
import imgCasset21 from "@/assets/7f8d7ed936523d863d863f945090b1e46b9c6989.png";
import imgCasset31 from "@/assets/83060ca2ee4d5a079edf8a9d57a3ad60efff63d8.png";

const USE_CLOUDINARY = false;

// The complete collection of images for the home page
const IMAGES = [
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_1') : imgCasset11, width: 447, height: 563, xOffset: -40 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_2') : imgCasset31, width: 324, height: 427, xOffset: 60 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_3') : imgCasset21, width: 342, height: 428, xOffset: -20 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_4') : imgCasset41, width: 450, height: 500, xOffset: 80 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_1') : imgCasset11, width: 400, height: 500, xOffset: -60 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_2') : imgCasset31, width: 380, height: 480, xOffset: 30 },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Desktop Scroll Mapping (Inverse Parallax)
  // We use a larger range to ensure a lot of movement
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-60%", "0%"]);

  // Create a more diverse set for each column
  const leftColumnSet = [...IMAGES, ...IMAGES, ...IMAGES];
  const rightColumnSet = [...IMAGES.reverse(), ...IMAGES, ...IMAGES];

  return (
    <div ref={containerRef} className="relative bg-white min-h-[500vh] lg:min-h-[400vh]">
      
      {/* 
        -------------------------------------------
        MOBILE LAYOUT (Central Menu + Single Column)
        -------------------------------------------
      */}
      <div className="lg:hidden flex flex-col items-center">
        <div className="py-24 w-full bg-white z-20">
          <Navigation />
        </div>

        <div className="w-full px-6 flex flex-col gap-32 pb-40 relative z-10">
          {IMAGES.map((image, index) => (
            <motion.div 
              key={`mobile-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: image.xOffset / 2 }}
              className="relative shadow-xl rounded-sm overflow-hidden w-full max-w-[320px] mx-auto"
            >
              <img src={image.src} alt="" className="w-full h-auto block" />
            </motion.div>
          ))}
        </div>
      </div>


      {/* 
        -------------------------------------------
        DESKTOP LAYOUT (Inverse Parallax side columns)
        -------------------------------------------
      */}
      <div className="hidden lg:fixed lg:inset-0 lg:flex lg:gap-[600px] lg:justify-center lg:px-4 lg:overflow-hidden lg:pointer-events-none">
        
        {/* Left Column (Moves UP) */}
        <motion.div style={{ y: leftY }} className="w-[450px] flex flex-col gap-32 pt-24 items-center">
          {leftColumnSet.map((image, index) => (
            <div 
              key={`left-${index}`} 
              className="relative flex-shrink-0"
              style={{ transform: `translateX(${image.xOffset}px)` }}
            >
              <div className="shadow-2xl rounded-sm overflow-hidden bg-gray-50">
                <img src={image.src} alt="" style={{ width: image.width, height: 'auto' }} className="block" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Column (Moves DOWN) */}
        <motion.div style={{ y: rightY }} className="w-[450px] flex flex-col gap-32 pt-24 items-center">
          {rightColumnSet.map((image, index) => (
            <div 
              key={`right-${index}`} 
              className="relative flex-shrink-0"
              style={{ transform: `translateX(${-image.xOffset}px)` }}
            >
              <div className="shadow-2xl rounded-sm overflow-hidden bg-gray-50">
                <img src={image.src} alt="" style={{ width: image.width, height: 'auto' }} className="block" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Fixed Overlay (Desktop) */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white opacity-40 z-10" />
      
      {/* Aesthetic Scroll Prompt (Desktop) */}
      <div className="hidden lg:flex fixed bottom-10 right-10 flex-col items-center gap-2 z-50 text-[10px] tracking-[0.4em] text-gray-300 transform rotate-90 origin-right translate-x-12 translate-y-20 uppercase">
        <div className="w-10 h-px bg-gray-200" />
        Explore
      </div>
    </div>
  );
}