import { motion } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState, useRef } from "react";

// Example Cloudinary Audio URLs - Replace these with your actual Cloudinary URLs
const CLOUD_NAME = "demo"; // Replace with your cloud name
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/v1/`;

const songs = [
  { id: 1, title: "Midnight Echo", duration: "3:42", album: "Reflections", url: BASE_URL + "samples/audio/midnight_echo.mp3" },
  { id: 2, title: "Neon Dreams", duration: "4:15", album: "Reflections", url: BASE_URL + "samples/audio/neon_dreams.mp3" },
  { id: 3, title: "Silent Waters", duration: "5:01", album: "Horizons", url: BASE_URL + "samples/audio/silent_waters.mp3" },
  { id: 4, title: "Electric Pulse", duration: "3:28", album: "Horizons", url: BASE_URL + "samples/audio/electric_pulse.mp3" },
  { id: 5, title: "Fading Light", duration: "4:33", album: "Echoes", url: BASE_URL + "samples/audio/fading_light.mp3" },
  { id: 6, title: "Urban Drift", duration: "3:56", album: "Echoes", url: BASE_URL + "samples/audio/urban_drift.mp3" },
  { id: 7, title: "Crystal Vision", duration: "5:22", album: "Prisms", url: BASE_URL + "samples/audio/crystal_vision.mp3" },
  { id: 8, title: "Velvet Night", duration: "4:08", album: "Prisms", url: BASE_URL + "samples/audio/velvet_night.mp3" },
];

export default function Songs() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (id: number) => {
    if (playingId === id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      const song = songs.find(s => s.id === id);
      if (song && audioRef.current) {
        audioRef.current.src = song.url;
        audioRef.current.play().catch(e => console.error("Error playing audio", e));
        setPlayingId(id);
      }
    }
  };

  const leftSongs = songs.slice(0, 4);
  const rightSongs = songs.slice(4);

  return (
    <div className="min-h-screen pt-48 pb-40">
      <div className="flex gap-[100px] lg:gap-[420px] justify-center px-4 lg:px-20 flex-wrap lg:flex-nowrap">
        {/* Left Column */}
        <div className="w-full max-w-[400px] space-y-2">
          {leftSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-4 hover:bg-gray-50 transition-colors group cursor-pointer border-b border-gray-100 lg:border-none"
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
        <div className="w-full max-w-[400px] space-y-2">
          {rightSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index + 4) * 0.1 }}
              className="flex flex-col p-4 hover:bg-gray-50 transition-colors group cursor-pointer border-b border-gray-100 lg:border-none"
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

      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        onEnded={() => setPlayingId(null)}
      />

      {/* Mini Player */}
      {playingId && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 h-24 bg-white border-t border-gray-100 flex items-center justify-center gap-8 z-50 px-8 shadow-2xl"
        >
          <div className="absolute left-8 hidden md:flex flex-col">
            <span className="font-['Inter:Bold',sans-serif] text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
              {songs.find(s => s.id === playingId)?.title}
            </span>
            <span className="text-xs text-gray-500">
              {songs.find(s => s.id === playingId)?.album}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <SkipBack className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <button 
              onClick={() => handlePlayPause(playingId)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-lg"
            >
              {playingId ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
            </button>
            <SkipForward className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </div>

          <div className="absolute right-8 hidden lg:flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-black" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}