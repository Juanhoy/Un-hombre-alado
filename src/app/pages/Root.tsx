import { Outlet, Link, useLocation } from "react-router";
import { Navigation } from "../components/Navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Root() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="bg-white min-h-screen relative overflow-x-hidden">
      {/* 
        DESKTOP: Center column white background 
      */}
      <div className="hidden lg:block lg:fixed lg:left-1/2 lg:top-0 lg:bottom-0 lg:w-[420px] lg:-translate-x-1/2 lg:bg-white lg:z-40" />
      
      {/* 
        MOBILE HEADER (Non-Home pages or Sticky)
      */}
      <header className={`
        sticky top-0 z-[60] w-full bg-white/95 backdrop-blur-md px-6 py-6 border-b border-gray-50 flex items-center justify-between
        lg:hidden
      `}>
        <Link 
          to="/"
          className="font-['Inter:Regular',sans-serif] text-[16px] tracking-[6px] uppercase"
        >
          UN HOMBRE ALADO
        </Link>
        
        {/* Burger Button - Shown on all mobile pages */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 -mr-2 text-black hover:opacity-50 transition-opacity"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* 
        DESKTOP HEADER (Fixed in Center)
      */}
      <div className="hidden lg:block lg:fixed lg:left-1/2 lg:top-[200px] lg:-translate-x-1/2 lg:z-50 lg:w-[420px]">
        <Link 
          to="/"
          className="block font-['Inter:Regular',sans-serif] font-normal text-[24px] text-black tracking-[12px] hover:opacity-60 transition-opacity text-center uppercase"
        >
          UN HOMBRE ALADO
        </Link>
        
        <div className="mt-[120px]">
          <Navigation />
        </div>
      </div>

      {/* 
        MOBILE MENU OVERLAY
      */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] bg-white pt-32 px-10 lg:hidden"
          >
            <Navigation isMobileOverlay />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Content Area */}
      <main className="relative z-0">
        <Outlet />
      </main>
      
      {/* Global Scroll Indicator (Desktop only) */}
      <div className="hidden lg:flex fixed bottom-10 right-10 flex-col items-center gap-2 z-50 text-[10px] tracking-[0.4em] text-gray-300 transform rotate-90 origin-right translate-x-12 translate-y-20 uppercase">
        <div className="w-10 h-px bg-gray-200" />
        Scroll
      </div>
    </div>
  );
}