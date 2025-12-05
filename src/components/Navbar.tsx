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
        <span className="text-xl max-[400px]:text-base font-bold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF', textShadow: theme === 'light' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none' }}>SEARCHART</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        <a href="#" className="hover:text-gray-400 transition-colors font-semibold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}>Policy area</a>
        <a href="#" className="hover:text-gray-400 transition-colors font-semibold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}>Dashboard</a>
        <a href="#" className="hover:text-gray-400 transition-colors font-semibold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}>Subscription</a>
        <a href="#" className="hover:text-gray-400 transition-colors font-semibold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}>About Us</a>
        
        <button 
          onClick={toggleTheme}
          className="text-yellow-400 hover:text-yellow-300 transition-colors bg-transparent"
          aria-label="Toggle theme"
          style={{ background: 'transparent' }}
        >
          {theme === 'dark' ?  <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
      </div>

      {/* Sign in/up Buttons - Always visible on desktop */}
      <div className="hidden lg:flex gap-3">
        <button className="px-6 py-2 font-semibold border rounded-md hover:opacity-80 active:opacity-60 transition-all text-sm" style={{background: 'initial', color: theme === 'light' ? '#000000' : '#FFFFFF', borderColor: theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'}}>
          Sign in
        </button>
        <button className="px-6 py-2 font-semibold border rounded-md hover:opacity-80 active:opacity-60 transition-all text-sm" style={{background: 'initial', color: theme === 'light' ? '#000000' : '#FFFFFF', borderColor: theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'}}>
          Sign up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className="text-yellow-400 hover:text-yellow-300 transition-colors bg-transparent"
          aria-label="Toggle theme"
          style={{ background: 'transparent' }}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 max-[400px]:w-3.5 max-[400px]:h-3.5" /> : <Moon className="w-5 h-5 max-[400px]:w-3.5 max-[400px]:h-3.5" />}
        </button>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}
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
        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMenuOpen(false)}
          style={{ background: 'transparent' }}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col h-full pt-20">
          {/* Menu Items */}
          <div className="flex flex-col gap-8 px-8 py-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold" style={{ color: "#FFFFFF" }}>Policy area</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold" style={{ color: "#FFFFFF" }}>Dashboard</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold" style={{ color: "#FFFFFF" }}>Subscription</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold" style={{ color: "#FFFFFF" }}>About Us</a>
            
            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="px-6 py-2 text-white font-semibold border border-white/30 rounded-md hover:border-white/50 active:bg-black transition-all text-sm" style={{background: 'initial'}}>
                Sign in
              </button>
              <button className="px-6 py-2 text-white font-semibold border border-white/30 rounded-md hover:border-white/50 active:bg-black transition-all text-sm" style={{background: 'initial'}}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};