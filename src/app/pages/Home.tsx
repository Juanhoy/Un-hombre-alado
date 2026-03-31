import { motion } from "motion/react";
import imgCasset31 from "figma:asset/83060ca2ee4d5a079edf8a9d57a3ad60efff63d8.png";
import imgCasset11 from "figma:asset/7a015c877b6f8546033e8b9314c8427a6a15fc8c.png";
import imgCasset21 from "figma:asset/7f8d7ed936523d863d863f945090b1e46b9c6989.png";
import imgCasset41 from "figma:asset/2c578c4c7df81b17a1b3b0ba45510faaea7f9f6f.png";

export default function Home() {
  const images = [
    { src: imgCasset11, className: "absolute h-[563px] left-[146px] top-[65px] w-[447px]", delay: 0 },
    { src: imgCasset31, className: "absolute h-[427px] right-[146px] top-[172px] w-[324px]", delay: 0.2 },
    { src: imgCasset21, className: "absolute h-[428px] left-[200px] top-[727px] w-[342px]", delay: 0.4 },
    { src: imgCasset41, className: "absolute h-[500px] right-[100px] top-[700px] w-[450px]", delay: 0.6 },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={image.className}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: image.delay, ease: "easeOut" }}
        >
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={image.src} 
          />
        </motion.div>
      ))}
    </div>
  );
}