import { motion } from "motion/react";
import { ExternalLink, Play } from "lucide-react";

const djSets = [
  {
    id: 1,
    title: "Sunset Sessions Vol. 3",
    date: "March 15, 2026",
    duration: "90 min",
    platform: "SoundCloud",
    link: "#",
  },
  {
    id: 2,
    title: "Underground Frequencies",
    date: "February 28, 2026",
    duration: "120 min",
    platform: "Mixcloud",
    link: "#",
  },
  {
    id: 3,
    title: "Rooftop Residency #12",
    date: "January 20, 2026",
    duration: "105 min",
    platform: "SoundCloud",
    link: "#",
  },
  {
    id: 4,
    title: "Late Night Chronicles",
    date: "December 10, 2025",
    duration: "85 min",
    platform: "Mixcloud",
    link: "#",
  },
  {
    id: 5,
    title: "Festival Highlights 2025",
    date: "November 5, 2025",
    duration: "150 min",
    platform: "YouTube",
    link: "#",
  },
  {
    id: 6,
    title: "Warehouse Vibes",
    date: "October 12, 2025",
    duration: "95 min",
    platform: "SoundCloud",
    link: "#",
  },
];

export default function DJSets() {
  const leftSets = djSets.filter((_, index) => index % 2 === 0);
  const rightSets = djSets.filter((_, index) => index % 2 === 1);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="flex gap-[420px] justify-center px-20">
        {/* Left Column */}
        <div className="w-[400px] space-y-6">
          {leftSets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="border border-black p-6 hover:bg-black hover:text-white transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-['Inter:Regular',sans-serif] text-lg mb-2">
                    {set.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm mb-1">
                    {set.date}
                  </p>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm">
                    {set.duration} • {set.platform}
                  </p>
                </div>
                <Play className="w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <a
                href={set.link}
                className="inline-flex items-center gap-2 mt-2 text-sm hover:underline"
              >
                Listen Now <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-[400px] space-y-6">
          {rightSets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 2 + 1) * 0.15 }}
              className="border border-black p-6 hover:bg-black hover:text-white transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-['Inter:Regular',sans-serif] text-lg mb-2">
                    {set.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm mb-1">
                    {set.date}
                  </p>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm">
                    {set.duration} • {set.platform}
                  </p>
                </div>
                <Play className="w-10 h-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <a
                href={set.link}
                className="inline-flex items-center gap-2 mt-2 text-sm hover:underline"
              >
                Listen Now <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}