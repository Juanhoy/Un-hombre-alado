import { motion } from "motion/react";
import { Mail, Instagram, Twitter, Music } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Instagram, label: "@cassetmusic", href: "#" },
    { icon: Twitter, label: "@cassetmusic", href: "#" },
    { icon: Music, label: "Spotify", href: "#" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="flex gap-[420px] justify-center px-20">
        {/* Left Column - Bookings & General */}
        <div className="w-[400px] space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-['Inter:Regular',sans-serif] text-xl tracking-[6px] mb-4">
              BOOKINGS
            </h3>
            <a
              href="mailto:bookings@cassetmusic.com"
              className="inline-flex items-center gap-2 text-base hover:opacity-60 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              bookings@cassetmusic.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-['Inter:Regular',sans-serif] text-xl tracking-[6px] mb-4">
              GENERAL
            </h3>
            <a
              href="mailto:info@cassetmusic.com"
              className="inline-flex items-center gap-2 text-base hover:opacity-60 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              info@cassetmusic.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-gray-200"
          >
            <h3 className="font-['Inter:Regular',sans-serif] text-xl tracking-[6px] mb-4">
              MANAGEMENT
            </h3>
            <p className="text-base mb-2">Sonic Wave Agency</p>
            <a
              href="mailto:management@sonicwave.com"
              className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">management@sonicwave.com</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Social Links */}
        <div className="w-[400px]">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-['Inter:Regular',sans-serif] text-xl tracking-[6px] mb-8">
              FOLLOW
            </h3>
            <div className="space-y-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 hover:opacity-60 transition-opacity group"
                  >
                    <div className="w-14 h-14 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-base">{link.label}</span>
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