import { motion } from "motion/react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const upcomingShows = [
  {
    id: 1,
    venue: "The Warehouse",
    city: "Berlin, Germany",
    date: "April 15, 2026",
    time: "22:00",
    ticketLink: "#",
  },
  {
    id: 2,
    venue: "Neon Club",
    city: "London, UK",
    date: "April 28, 2026",
    time: "23:00",
    ticketLink: "#",
  },
  {
    id: 3,
    venue: "Underground",
    city: "Amsterdam, Netherlands",
    date: "May 12, 2026",
    time: "21:30",
    ticketLink: "#",
  },
  {
    id: 4,
    venue: "Sunset Festival",
    city: "Barcelona, Spain",
    date: "June 5, 2026",
    time: "19:00",
    ticketLink: "#",
  },
];

const pastShows = [
  {
    id: 1,
    venue: "Metro City",
    city: "Paris, France",
    date: "March 10, 2026",
  },
  {
    id: 2,
    venue: "Club Momentum",
    city: "Copenhagen, Denmark",
    date: "February 20, 2026",
  },
  {
    id: 3,
    venue: "Electric Dreams",
    city: "Brussels, Belgium",
    date: "January 15, 2026",
  },
  {
    id: 4,
    venue: "Studio 54 Revival",
    city: "New York, USA",
    date: "December 8, 2025",
  },
  {
    id: 5,
    venue: "Techno Temple",
    city: "Tokyo, Japan",
    date: "November 20, 2025",
  },
  {
    id: 6,
    venue: "Bass Cathedral",
    city: "Los Angeles, USA",
    date: "October 30, 2025",
  },
];

export default function Shows() {
  const leftPastShows = pastShows.filter((_, index) => index % 2 === 0);
  const rightPastShows = pastShows.filter((_, index) => index % 2 === 1);

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Upcoming Shows - Full Width Sections */}
      <div className="mb-16 px-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Inter:Regular',sans-serif] text-2xl tracking-[8px] mb-8 text-center"
        >
          UPCOMING
        </motion.h3>
        
        <div className="flex gap-[420px] justify-center">
          {/* Left side shows */}
          <div className="w-[400px] space-y-6">
            {upcomingShows.slice(0, 2).map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="border-b border-gray-200 pb-6 hover:border-black transition-colors"
              >
                <h4 className="font-['Inter:Regular',sans-serif] text-xl mb-2">
                  {show.venue}
                </h4>
                <div className="flex flex-col gap-1 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{show.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{show.date} • {show.time}</span>
                  </div>
                </div>
                <a
                  href={show.ticketLink}
                  className="inline-flex items-center gap-2 px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors text-sm"
                >
                  Tickets <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right side shows */}
          <div className="w-[400px] space-y-6">
            {upcomingShows.slice(2).map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                className="border-b border-gray-200 pb-6 hover:border-black transition-colors"
              >
                <h4 className="font-['Inter:Regular',sans-serif] text-xl mb-2">
                  {show.venue}
                </h4>
                <div className="flex flex-col gap-1 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{show.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{show.date} • {show.time}</span>
                  </div>
                </div>
                <a
                  href={show.ticketLink}
                  className="inline-flex items-center gap-2 px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors text-sm"
                >
                  Tickets <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Shows */}
      <div className="px-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-['Inter:Regular',sans-serif] text-2xl tracking-[8px] mb-8 text-center"
        >
          PAST SHOWS
        </motion.h3>
        
        <div className="flex gap-[420px] justify-center">
          {/* Left Column */}
          <div className="w-[400px] space-y-4">
            {leftPastShows.map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="p-6 bg-gray-50"
              >
                <h4 className="font-['Inter:Regular',sans-serif] text-lg mb-2">
                  {show.venue}
                </h4>
                <p className="text-gray-600 text-sm mb-1">{show.city}</p>
                <p className="text-gray-500 text-sm">{show.date}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-[400px] space-y-4">
            {rightPastShows.map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="p-6 bg-gray-50"
              >
                <h4 className="font-['Inter:Regular',sans-serif] text-lg mb-2">
                  {show.venue}
                </h4>
                <p className="text-gray-600 text-sm mb-1">{show.city}</p>
                <p className="text-gray-500 text-sm">{show.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}