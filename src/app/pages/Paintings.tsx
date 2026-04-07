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
    <div className="min-h-screen pt-48 pb-20 bg-white">
      <div className="flex gap-[420px] justify-center px-10">
        {/* Left Container */}
        <div className="w-[400px] flex flex-col gap-24">
          {paintings.slice(0, 3).map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden bg-gray-50 aspect-[3/4] shadow-lg mb-4">
                <img 
                  src={painting.url} 
                  alt={painting.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-medium text-lg">{painting.title}</p>
              <p className="text-gray-400 text-sm">{painting.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Container */}
        <div className="w-[400px] flex flex-col gap-24 mt-48">
          {paintings.slice(3).map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index + 3) * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden bg-gray-50 aspect-[3/4] shadow-lg mb-4">
                <img 
                  src={painting.url} 
                  alt={painting.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-medium text-lg">{painting.title}</p>
              <p className="text-gray-400 text-sm">{painting.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
