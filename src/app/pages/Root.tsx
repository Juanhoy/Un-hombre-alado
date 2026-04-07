import { Outlet, Link } from "react-router";
import { Navigation } from "../components/Navigation";

export default function Root() {
  return (
    <div className="bg-white min-h-screen relative">
      {/* Center column with white background */}
      <div className="fixed left-1/2 top-0 bottom-0 w-[420px] -translate-x-1/2 bg-white z-40" />
      
      {/* UN HOMBRE ALADO title centered in the column */}
      <Link 
        to="/"
        className="fixed left-1/2 top-[200px] -translate-x-1/2 z-50 font-['Inter:Regular',sans-serif] font-normal text-[50px] text-black tracking-[18.5px] hover:opacity-60 transition-opacity"
      >
        UN HOMBRE ALADO
      </Link>
      
      {/* Navigation centered in the column, below CASSET */}
      <div className="fixed left-1/2 top-[320px] -translate-x-1/2 z-50">
        <Navigation />
      </div>
      
      <Outlet />
    </div>
  );
}