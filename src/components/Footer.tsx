import { Facebook, Instagram, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-[#0a1628] border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-6">
          <a 
            href="#policy" 
            className="  transition-colors text-sm sm:text-base"
          >
            Policy area
          </a>
          <a 
            href="#dashboard" 
            className="  transition-colors text-sm sm:text-base"
          >
            Dashboard
          </a>
          <a 
            href="#about" 
            className="  transition-colors text-sm sm:text-base"
          >
            About us
          </a>
          <a 
            href="#contact" 
            className="transition-colors text-sm sm:text-base"
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className=" transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs sm:text-sm">
          <p>
            Copyright © 2023{' '}
            <a 
              href="#privacy" 
              className=" transition-colors"
            >
              Privacy and policy
            </a>
            {' • '}
            <a 
              href="#searchart" 
              className=" transition-colors"
            >
              Searchart
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;