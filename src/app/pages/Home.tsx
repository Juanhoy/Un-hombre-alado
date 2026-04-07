import { motion } from "motion/react";
import { getCloudinaryUrl } from "@/app/config/cloudinary";

// Fallback to local assets if Cloudinary is not configured
import imgCasset31 from "@/assets/83060ca2ee4d5a079edf8a9d57a3ad60efff63d8.png";
import imgCasset11 from "@/assets/7a015c877b6f8546033e8b9314c8427a6a15fc8c.png";
import imgCasset21 from "@/assets/7f8d7ed936523d863d863f945090b1e46b9c6989.png";
import imgCasset41 from "@/assets/2c578c4c7df81b17a1b3b0ba45510faaea7f9f6f.png";

const USE_CLOUDINARY = false;

export default function Home() {
  const images = [
    { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_1') : imgCasset11, width: 447, height: 563, mt: 100 },
    { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_3') : imgCasset21, width: 342, height: 428, mt: 350 },
    { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_5') : imgCasset11, width: 400, height: 500, mt: 400 }, // Repeat for demo
  ];

  const secondaryImages = [
    { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_2') : imgCasset31, width: 324, height: 427, mt: 100 },
    { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_4') : imgCasset41, width: 450, height: 500, mt: 300 },
    { src: USE_CLOUDINARY ? getCloudinaryUrl('artist_hero_6') : imgCasset31, width: 380, height: 480, mt: 400 }, // Repeat for demo
  ];

  return (
    <div className="relative min-h-[200vh] bg-white overflow-x-hidden">
      {/* Scrollable Container with Two Side Gutters */}
      <div className="flex gap-[420px] justify-center px-10 pb-40">
        
        {/* Left Gutter - Images */}
        <div className="w-[400px] flex flex-col items-center">
          {images.map((image, index) => (
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              style={{ marginTop: index === 0 ? image.mt : 200 }}
              className="relative shadow-2xl rounded-sm overflow-hidden"
            >
              <img 
                src={image.src} 
                alt="Artist Portrait" 
                style={{ width: image.width, height: 'auto' }}
                className="block hover:scale-110 transition-transform duration-1000 ease-in-out" 
              />
            </motion.div>
          ))}
        </div>

        {/* Right Gutter - Images */}
        <div className="w-[400px] flex flex-col items-center">
          {secondaryImages.map((image, index) => (
            <motion.div
              key={`right-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: (index + 3) * 0.2 }}
              style={{ marginTop: index === 0 ? image.mt : 200 }}
              className="relative shadow-2xl rounded-sm overflow-hidden"
            >
              <img 
                src={image.src} 
                alt="Artist Portrait" 
                style={{ width: image.width, height: 'auto' }}
                className="block hover:scale-110 transition-transform duration-1000 ease-in-out" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background depth overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(255,255,255,0.2)_100%)] z-10" />
    </div>
  );
}