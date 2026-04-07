import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Navigation({ isMobileOverlay = false }: { isMobileOverlay?: boolean }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  const navItems = [
    { label: "SONGS", path: "/songs" },
    { label: "DJ SETS", path: "/dj-sets" },
    { label: "PAINTINGS", path: "/paintings" },
    { label: "SHOWS", path: "/shows" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className={`
      flex flex-col items-center justify-center gap-12 lg:gap-16 w-full text-center
      ${isMobileOverlay ? "gap-12" : (isHome ? "gap-12" : "gap-16")}
    `}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`
              relative font-['Inter:Regular',sans-serif] font-normal 
              text-[20px] lg:text-[25px] text-black hover:opacity-60 
              transition-opacity whitespace-nowrap tracking-[0.4em] lg:tracking-[0.4em]
            `}
          >
            {item.label}
            {isActive && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-2 lg:-bottom-2 left-0 right-0 h-0.5 bg-black"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}