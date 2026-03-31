import { motion } from "motion/react";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

const songs = [
  { id: 1, title: "Midnight Echo", duration: "3:42", album: "Reflections" },
  { id: 2, title: "Neon Dreams", duration: "4:15", album: "Reflections" },
  { id: 3, title: "Silent Waters", duration: "5:01", album: "Horizons" },
  { id: 4, title: "Electric Pulse", duration: "3:28", album: "Horizons" },
  { id: 5, title: "Fading Light", duration: "4:33", album: "Echoes" },
  { id: 6, title: "Urban Drift", duration: "3:56", album: "Echoes" },
  { id: 7, title: "Crystal Vision", duration: "5:22", album: "Prisms" },
  { id: 8, title: "Velvet Night", duration: "4:08", album: "Prisms" },
];

export default function Songs() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handlePlayPause = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  const leftSongs = songs.slice(0, 4);
  const rightSongs = songs.slice(4);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="flex gap-[420px] justify-center px-20">
        {/* Left Column */}
        <div className="w-[400px] space-y-2">
          {leftSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-4 hover:bg-gray-50 transition-colors group cursor-pointer"
              onClick={() => handlePlayPause(song.id)}
            >
              <div className="flex items-center gap-4 mb-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-black group-hover:bg-black group-hover:text-white transition-colors">
                  {playingId === song.id ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>
                <span className="text-gray-500">{song.duration}</span>
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-lg">{song.title}</p>
                <p className="text-gray-500 text-sm">{song.album}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-[400px] space-y-2">
          {rightSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index + 4) * 0.1 }}
              className="flex flex-col p-4 hover:bg-gray-50 transition-colors group cursor-pointer"
              onClick={() => handlePlayPause(song.id)}
            >
              <div className="flex items-center gap-4 mb-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-black group-hover:bg-black group-hover:text-white transition-colors">
                  {playingId === song.id ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>
                <span className="text-gray-500">{song.duration}</span>
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-lg">{song.title}</p>
                <p className="text-gray-500 text-sm">{song.album}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}