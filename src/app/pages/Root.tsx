import { Outlet, Link } from "react-router";
import { Navigation } from "../components/Navigation";

export default function Root() {
  return (
    <div className="bg-white min-h-screen relative overflow-x-hidden">
      {/* Center column with white background - Only fixed on Desktop */}
      <div className="hidden lg:block lg:fixed lg:left-1/2 lg:top-0 lg:bottom-0 lg:w-[420px] lg:-translate-x-1/2 lg:bg-white lg:z-40" />
      
      {/* 
        Header/Title Wrapper 
        On Mobile: Sticky at top
        On Desktop: Fixed in center column
      */}
      <header className="sticky top-0 lg:fixed lg:left-1/2 lg:top-[200px] lg:-translate-x-1/2 z-50 bg-white/80 backdrop-blur-md lg:bg-transparent w-full lg:w-[420px] py-8 lg:py-0">
        <Link 
          to="/"
          className="block font-['Inter:Regular',sans-serif] font-normal text-[20px] lg:text-[24px] text-black tracking-[8px] lg:tracking-[12px] hover:opacity-60 transition-opacity text-center uppercase"
        >
          UN HOMBRE ALADO
        </Link>
        
        {/* Navigation - Hidden on mobile in the fixed center, instead we'll put it below title or use a mobile menu */}
        <div className="mt-8 lg:mt-[120px] px-4 overflow-x-auto lg:overflow-visible no-scrollbar">
          <Navigation />
        </div>
      </header>
      
      {/* Main Content Area */}
      <main className="relative z-0">
        <Outlet />
      </main>
      
      {/* Mobile background spacer to avoid content being under header */}
      <div className="h-20 lg:hidden" />
    </div>
  );
}