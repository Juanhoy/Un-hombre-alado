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

const IMAGES = [
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_1') : imgCasset11, width: 447, height: 563 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_2') : imgCasset31, width: 324, height: 427 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_3') : imgCasset21, width: 342, height: 428 },
  { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_4') : imgCasset41, width: 450, height: 500 },
];

/**
 * Common Horizontal Carousel for Mobile
 */
function HorizontalTicker({ images, speed = 10, reverse = false }: { images: any[], speed?: number, reverse?: boolean }) {
  const duplicated = [...images, ...images, ...images];
  return (
    <div className="w-full overflow-hidden flex-shrink-0 py-4 h-[180px] flex items-center">
      <motion.div
        animate={{ x: reverse ? [0, -100 * images.length / 3 + '%'] : [-100 * images.length / 3 + '%', 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 items-center whitespace-nowrap"
      >
        {duplicated.map((image, i) => (
          <div key={i} className="w-[140px] h-[140px] flex-shrink-0 shadow-lg rounded-sm overflow-hidden bg-gray-50 uppercase tracking-widest text-[8px] flex items-center justify-center">
             <img src={image.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Desktop Scroll Mapping
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <div ref={containerRef} className="relative bg-white lg:min-h-[300vh]">
      
      {/* 
        -------------------------------------------
        MOBILE LAYOUT (Stacked Rows + Central Menu)
        -------------------------------------------
      */}
      <section className="lg:hidden h-screen flex flex-col justify-between py-4 select-none">
        {/* Top Horizontal Row */}
        <HorizontalTicker images={IMAGES} speed={15} />

        {/* Center Main Menu */}
        <div className="flex-1 flex items-center py-8">
           <Navigation />
        </div>

        {/* Bottom Horizontal Row */}
        <HorizontalTicker images={IMAGES} speed={20} reverse />
      </section>


      {/* 
        -------------------------------------------
        DESKTOP LAYOUT (Inverse Parallax side columns)
        -------------------------------------------
      */}
      <div className="hidden lg:fixed lg:inset-0 lg:flex lg:gap-[600px] lg:justify-center lg:px-4 lg:overflow-hidden lg:pointer-events-none">
        {/* Left Column */}
        <motion.div style={{ y: leftY }} className="w-[450px] flex flex-col gap-24 pt-24 items-center">
          {[...IMAGES, ...IMAGES].map((image, index) => (
            <div key={`left-${index}`} className="relative shadow-2xl rounded-sm overflow-hidden flex-shrink-0">
              <img src={image.src} alt="" style={{ width: image.width, height: 'auto' }} className="block" />
            </div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div style={{ y: rightY }} className="w-[450px] flex flex-col gap-24 pt-24 items-center">
          {[...IMAGES, ...IMAGES].map((image, index) => (
            <div key={`right-${index}`} className="relative shadow-2xl rounded-sm overflow-hidden flex-shrink-0">
              <img src={image.src} alt="" style={{ width: image.width, height: 'auto' }} className="block" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Fixed Overlay (Desktop) */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white opacity-40 z-10" />
    </div>
  );
}