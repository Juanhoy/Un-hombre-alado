import { motion } from "motion/react";
import { getCloudinaryUrl } from "@/app/config/cloudinary";

const paintings = [
  { id: 1, title: "Luz Eterna", year: "2024", url: getCloudinaryUrl('painting_1') },
  { id: 2, title: "Alma de Cristal", year: "2024", url: getCloudinaryUrl('painting_2') },
  { id: 3, title: "Horizonte Carmín", year: "2023", url: getCloudinaryUrl('painting_3') },
  { id: 4, title: "Espejismo Dorado", year: "2023", url: getCloudinaryUrl('painting_4') },
  { id: 5, title: "Vuelo Onírico", year: "2023", url: getCloudinaryUrl('painting_5') },
  { id: 6, title: "Sombra Lunar", year: "2022", url: getCloudinaryUrl('painting_6') },
];

export default function Paintings() {
  return (
    <div className="min-h-screen pt-32 lg:pt-48 pb-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[420px] justify-center px-6 lg:px-10">
        {/* Left Container */}
        <div className="w-full lg:w-[400px] flex flex-col gap-12 lg:gap-24">
          {paintings.slice(0, 3).map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden bg-gray-50 aspect-[3/4] shadow-lg mb-4">
                <img 
                  src={painting.url} 
                  alt={painting.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-medium text-lg lg:text-xl tracking-tight">{painting.title}</p>
              <p className="text-gray-400 text-sm tracking-widest uppercase">{painting.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Container */}
        <div className="w-full lg:w-[400px] flex flex-col gap-12 lg:gap-24 lg:mt-48">
          {paintings.slice(3).map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden bg-gray-50 aspect-[3/4] shadow-lg mb-4">
                <img 
                  src={painting.url} 
                  alt={painting.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-medium text-lg lg:text-xl tracking-tight">{painting.title}</p>
              <p className="text-gray-400 text-sm tracking-widest uppercase">{painting.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
