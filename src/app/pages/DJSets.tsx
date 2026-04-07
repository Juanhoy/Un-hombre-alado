import { motion } from "motion/react";
import { ExternalLink, Play } from "lucide-react";

const djSets = [
  { id: 1, title: "Sunset Sessions Vol. 3", date: "March 15, 2026", duration: "90 min", platform: "SoundCloud", link: "#" },
  { id: 2, title: "Underground Frequencies", date: "February 28, 2026", duration: "120 min", platform: "Mixcloud", link: "#" },
  { id: 3, title: "Rooftop Residency #12", date: "January 20, 2026", duration: "105 min", platform: "SoundCloud", link: "#" },
  { id: 4, title: "Late Night Chronicles", date: "December 10, 2025", duration: "85 min", platform: "Mixcloud", link: "#" },
  { id: 5, title: "Festival Highlights 2025", date: "November 5, 2025", duration: "150 min", platform: "YouTube", link: "#" },
  { id: 6, title: "Warehouse Vibes", date: "October 12, 2025", duration: "95 min", platform: "SoundCloud", link: "#" },
];

export default function DJSets() {
  const leftSets = djSets.filter((_, index) => index % 2 === 0);
  const rightSets = djSets.filter((_, index) => index % 2 === 1);

  return (
    <div className="min-h-screen pt-32 lg:pt-48 pb-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[420px] justify-center px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-full lg:w-[400px] space-y-6">
          {leftSets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="border border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-['Inter:Regular',sans-serif] text-lg lg:text-xl mb-2">{set.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm mb-1">{set.date}</p>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm">{set.duration} • {set.platform}</p>
                </div>
                <Play className="w-8 h-8 lg:w-10 lg:h-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <a href={set.link} className="inline-flex items-center gap-2 mt-2 text-sm hover:underline tracking-widest font-bold">
                LISTEN NOW <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[400px] space-y-6">
          {rightSets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="border border-black p-6 hover:bg-black hover:text-white transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-['Inter:Regular',sans-serif] text-lg lg:text-xl mb-2">{set.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm mb-1">{set.date}</p>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm">{set.duration} • {set.platform}</p>
                </div>
                <Play className="w-8 h-8 lg:w-10 lg:h-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <a href={set.link} className="inline-flex items-center gap-2 mt-2 text-sm hover:underline tracking-widest font-bold">
                LISTEN NOW <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}