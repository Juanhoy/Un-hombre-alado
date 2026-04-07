import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { label: "SONGS", path: "/songs" },
    { label: "DJ SETS", path: "/dj-sets" },
    { label: "PAINTINGS", path: "/paintings" },
    { label: "SHOWS", path: "/shows" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="flex flex-row lg:flex-col items-center justify-center gap-8 lg:gap-16 w-full px-4 lg:px-0">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`
              relative font-['Inter:Regular',sans-serif] font-normal 
              text-[14px] lg:text-[25px] text-black hover:opacity-60 
              transition-opacity whitespace-nowrap tracking-[0.2em] lg:tracking-[0.4em]
              ${isActive ? 'opacity-100' : 'opacity-40 lg:opacity-100'}
            `}
          >
            {item.label}
            {isActive && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}