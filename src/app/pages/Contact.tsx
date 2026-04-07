import { motion } from "motion/react";
import { Mail, Instagram, Twitter, Music } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Instagram, label: "@unhombrealado", href: "#" },
    { icon: Twitter, label: "@unhombrealado", href: "#" },
    { icon: Music, label: "Spotify", href: "#" },
  ];

  return (
    <div className="min-h-screen pt-48 pb-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[420px] justify-center px-6 lg:px-20 max-w-7xl mx-auto">
        {/* Left Column - Bookings & General */}
        <div className="w-full max-w-[400px] space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-['Inter:Regular',sans-serif] text-xs font-bold tracking-[0.4em] mb-6 text-gray-400">
              BOOKINGS
            </h3>
            <a
              href="mailto:bookings@unhombrealado.com"
              className="group flex flex-col gap-1"
            >
              <span className="text-xl font-medium group-hover:pl-2 transition-all duration-300">bookings@unhombrealado.com</span>
              <div className="h-px w-0 group-hover:w-full bg-black transition-all duration-500" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-['Inter:Regular',sans-serif] text-xs font-bold tracking-[0.4em] mb-6 text-gray-400">
              GENERAL
            </h3>
            <a
              href="mailto:info@unhombrealado.com"
              className="group flex flex-col gap-1"
            >
              <span className="text-xl font-medium group-hover:pl-2 transition-all duration-300">info@unhombrealado.com</span>
              <div className="h-px w-0 group-hover:w-full bg-black transition-all duration-500" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-12 border-t border-gray-100"
          >
            <h3 className="font-['Inter:Regular',sans-serif] text-xs font-bold tracking-[0.4em] mb-6 text-gray-400">
              MANAGEMENT
            </h3>
            <p className="text-lg font-medium mb-1">Sonic Wave Agency</p>
            <a
              href="mailto:management@sonicwave.com"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              management@sonicwave.com
            </a>
          </motion.div>
        </div>

        {/* Right Column - Social Links */}
        <div className="w-full max-w-[400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-['Inter:Regular',sans-serif] text-xs font-bold tracking-[0.4em] mb-12 text-gray-400">
              FOLLOW
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                    className="flex items-center justify-between p-6 rounded-full border border-gray-100 hover:border-black hover:bg-black hover:text-white transition-all duration-500 group shadow-sm hover:shadow-xl"
                  >
                    <div className="flex items-center gap-6">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                      <span className="text-base font-medium tracking-wide">{link.label}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}