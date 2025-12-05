import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export const Navbar: React.FC<{ isLogin: boolean }> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-10">
      <div className="flex items-center gap-2">
        <Search className="w-6 h-6 max-[400px]:w-4 max-[400px]:h-4 text-red-500" />
        <span className="text-white text-xl max-[400px]:text-base">SEARCHART</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm" style={{ color: "#FFFFFF" }}>Policy area</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm" style={{ color: "#FFFFFF" }}>Dashboard</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm" style={{ color: "#FFFFFF" }}>Subscription</a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm" style={{ color: "#FFFFFF" }}>About Us</a>
        
        <button 
          onClick={toggleTheme}
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ?  <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>

      {/* Sign in/up Buttons - Always visible on desktop */}
      <div className="hidden lg:flex gap-3">
        <button className="px-6 py-2 text-white border border-white/30 rounded-md hover:border-white/50 active:bg-black transition-all text-sm" style={{background: 'initial'}}>
          Sign in
        </button>
        <button className="px-6 py-2 text-white border border-white/30 rounded-md hover:border-white/50 active:bg-black transition-all text-sm" style={{background: 'initial'}}>
          Sign up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 max-[400px]:w-3.5 max-[400px]:h-3.5" /> : <Moon className="w-5 h-5 max-[400px]:w-3.5 max-[400px]:h-3.5" />}
        </button>
        
        <button 
          className="text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6 max-[400px]:w-4 max-[400px]:h-4" /> : <Menu className="w-6 h-6 max-[400px]:w-4 max-[400px]:h-4" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-xl lg:hidden z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-20">
          {/* Menu Items */}
          <div className="flex flex-col gap-8 px-8 py-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm" style={{ color: "#FFFFFF" }}>Policy area</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm" style={{ color: "#FFFFFF" }}>Dashboard</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm" style={{ color: "#FFFFFF" }}>Subscription</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm" style={{ color: "#FFFFFF" }}>About Us</a>
            
            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="px-6 py-2 text-white border border-white/30 rounded-md hover:border-white/50 active:bg-black transition-all text-sm" style={{background: 'initial'}}>
                Sign in
              </button>
              <button className="px-6 py-2 text-white border border-white/30 rounded-md hover:border-white/50 active:bg-black transition-all text-sm" style={{background: 'initial'}}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};