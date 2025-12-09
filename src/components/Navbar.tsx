import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../context/ThemeContext";

export const Navbar: React.FC<{ isLogin: boolean }> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="top-0 left-0 right-0 flex justify-between items-center px-8 py-6 sticky z-50">
        <div className="flex items-center gap-2">
         
          <img src="/Frame7.png" alt="Description"   style={{ width: '50px', height: '50px' }} />

       
          <a href="/landing" className="text-xl max-[400px]:text-base font-bold hover:opacity-80 transition-opacity" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF', textShadow: theme === 'light' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none' }}>
            SEARCHART
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors font-semibold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}>Policy area</a>
          <a href="#" className="hover:text-gray-400 transition-colors font-semibold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}>Dashboard</a>
          <a href="#" className="hover:text-gray-400 transition-colors font-semibold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}>Subscription</a>
          <a href="#" className="hover:text-gray-400 transition-colors font-semibold" style={{ color: theme === 'light' ? '#000000' : '#FFFFFF' }}>About Us</a>
          
          <button 
            onClick={toggleTheme}
            className="text-yellow-400 hover:text-yellow-300 transition-colors bg-transparent border rounded-md p-2"
            aria-label="Toggle theme"
            style={{ background: 'transparent', borderColor: theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)' }}
          >
            {theme === 'dark' ?  <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>

        {/* Sign in/up Buttons - Always visible on desktop */}
   <div className="hidden lg:flex gap-3">
  <a href="/landing">
    <button className="px-6 py-2 font-semibold rounded-md hover:opacity-80 active:opacity-60 transition-all text-sm" style={{background: 'initial', color: theme === 'light' ? '#000000' : '#FFFFFF'}}>
      Sign in
    </button>
  </a>
  <a href="/signup">
    <button className="px-6 py-2 font-semibold rounded-md hover:opacity-80 active:opacity-60 transition-all text-sm" style={{background: 'initial', color: theme === 'light' ? '#000000' : '#FFFFFF'}}>
      Sign up
    </button>
  </a>
</div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="text-yellow-400 hover:text-yellow-300 transition-colors bg-transparent border rounded-md p-2"
            aria-label="Toggle theme"
            style={{ background: 'transparent', borderColor: theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)' }}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 max-[400px]:w-3.5 max-[400px]:h-3.5" /> : <Moon className="w-5 h-5 max-[400px]:w-3.5 max-[400px]:h-3.5" />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: theme === 'light' ? '#000000' : '#808080' }}
            className="relative"
          >
            {isMenuOpen ? <X className="w-6 h-6 max-[400px]:w-4 max-[400px]:h-4" /> : <Menu className="w-6 h-6 max-[400px]:w-4 max-[400px]:h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - PORTAL ILE document.body-ye render olunur */}
      {isMenuOpen && createPortal(
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 lg:hidden"
            style={{ 
              zIndex: 9998,
            }}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Sidebar */}
          <div 
            className="fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-xl lg:hidden transform transition-transform duration-300 ease-in-out translate-x-0"
            style={{ 
              zIndex: 9999,
            }}
          >
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
              <div className="flex flex-col gap-6 px-8 py-6">
                <a href="#" className="font-semibold" style={{ color: '#FFFFFF' }}>Policy area</a>
                <a href="#" className="font-semibold" style={{ color: '#FFFFFF' }}>Dashboard</a>
                <a href="#" className="font-semibold" style={{ color: '#FFFFFF' }}>Subscription</a>
                <a href="#" className="font-semibold" style={{ color: '#FFFFFF' }}>About Us</a>
                <button className="py-2 font-semibold rounded-md text-sm w-fit" style={{background: 'initial', color: '#FFFFFF', paddingLeft: 0, paddingRight: '1.5rem'}}>
                  Sign in
                </button>
                <button className="py-2 font-semibold rounded-md text-sm w-fit" style={{background: 'initial', color: '#FFFFFF', paddingLeft: 0, paddingRight: '1.5rem'}}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};