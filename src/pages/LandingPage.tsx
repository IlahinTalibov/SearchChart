import  { useState, useEffect, useRef } from 'react';
import {ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';

const SearchArtLanding = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSectors, setVisibleSectors] = useState(false);
  const [visibleCarousel, setVisibleCarousel] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  

  console.log(setIsLogin)
  
  const sectorsRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '50px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectorsRef.current) {
            setTimeout(() => setVisibleSectors(true), 100);
          } else if (entry.target === carouselRef.current) {
            setTimeout(() => setVisibleCarousel(true), 100);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectorsRef.current) {
      observer.observe(sectorsRef.current);
    }
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const dashboards = [
    {
      title: "Country Comparison Dashboard",
      description: "The Comparison Dashboard provides a user-friendly interface to compare key performance indicators (KPIs) across countries and years. With easy-to-interpret charts, users can quickly assess and visualize the amount and rank changes of selected indicators over time, enabling them to identify trends and compare country performances effectively.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    {
      title: "Country Overview Dashboard",
      description: "The Overview Dashboard offers a comprehensive overview of a country's performance in various sectors, subsectors and indicators throughout the years. Through nine intuitive charts, users can track overall percentile changes, sector scores, and indicator performances, empowering them to make data-driven decisions and gain valuable insights into the country's progress and areas for potential growth.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % dashboards.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + dashboards.length) % dashboards.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  return (
    <div className="bg-[#0a1628] text-white">
      {/* Sticky Navbar Container */}
      <div className="sticky top-0 z-50 bg-[#0a1628] shadow-md">
        <Navbar isLogin={isLogin} />
      </div>

      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor">
              <path d="M150,200 L180,190 L200,210 L190,230 L160,225 Z" />
              <path d="M250,150 L300,140 L320,170 L310,200 L270,190 Z" />
              <path d="M400,180 L450,175 L480,200 L470,230 L420,220 Z" />
              <path d="M550,160 L600,155 L630,185 L620,210 L570,200 Z" />
              <path d="M700,190 L750,185 L780,210 L770,240 L720,230 Z" />
              <path d="M200,350 L250,340 L270,370 L260,400 L220,390 Z" />
              <path d="M350,320 L400,315 L430,345 L420,375 L370,365 Z" />
              <path d="M500,340 L550,335 L580,365 L570,395 L520,385 Z" />
              <path d="M300,500 L350,490 L370,520 L360,550 L320,540 Z" />
              <path d="M450,480 L500,475 L530,505 L520,535 L470,525 Z" />
              <ellipse cx="850" cy="450" rx="80" ry="100" />
              <circle cx="950" cy="550" r="40" />
            </g>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12">
            Welcome to <span className="text-orange-500">SEARCHART</span>!
          </h1>
          
          <p className="max-w-4xl text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed px-2">
            The ultimate data analytics platform designed for managers in business, education, economics, health,
            and army, as well as government officials and researchers. Our dashboards are specifically designed to help
            you make critical strategic decisions, whether you're looking to benchmark your organization's
            performance against industry standards, evaluate different countries' performances, or conduct further
            research.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce cursor-pointer"
        >
          <span className="text-gray-400 text-xs sm:text-sm">Scroll to</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 -mt-3 sm:-mt-4" />
        </div>
      </div>

      {/* Sectors Section */}
      <div ref={sectorsRef} className={`relative z-10 bg-[#0f1d30] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ease-out ${visibleSectors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-gray-300 text-sm sm:text-base mb-12 sm:mb-16 max-w-3xl mx-auto">
            Discover a diverse range of sectors, each providing in-depth insights into subsectors and indicators within them
          </h2>

          {/* Sectors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
            {/* Agriculture */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop" 
                  alt="Agriculture" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Agriculture</span>
            </div>

            {/* Economy */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=400&fit=crop" 
                  alt="Economy" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Economy</span>
            </div>

            {/* Technology & Innovation */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop" 
                  alt="Technology" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-xs sm:text-base text-center group-hover:text-orange-500 transition-colors">Technology &<br/>Innovation</span>
            </div>

            {/* Health */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop" 
                  alt="Health" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Health</span>
            </div>

            {/* Education */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop" 
                  alt="Education" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Education</span>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop" 
                  alt="Social" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Social</span>
            </div>

            {/* Army */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=400&fit=crop" 
                  alt="Army" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Army</span>
            </div>

            {/* Government */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=400&fit=crop" 
                  alt="Government" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Government</span>
            </div>

            {/* Transportation */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop" 
                  alt="Transportation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Transportation</span>
            </div>

            {/* Index */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop" 
                  alt="Index" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Index</span>
            </div>

            {/* Business */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop" 
                  alt="Business" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Business</span>
            </div>

            {/* Other */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 mb-3 sm:mb-4 ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl text-gray-400 group-hover:text-orange-500 transition-colors">...</span>
              </div>
              <span className="text-white text-sm sm:text-base group-hover:text-orange-500 transition-colors">Other</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Carousel Section */}
    {/* Carousel Content */}
       {/* Carousel Content */}
          <div ref={carouselRef} className={`relative min-h-[600px] flex items-center overflow-hidden transform transition-all duration-1000 ease-out ${visibleCarousel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:left-4 lg:left-8 z-20 p-3 sm:p-4 rounded-full border-2 border-gray-600 hover:border-orange-500 bg-[#0a1628] hover:bg-gray-800 transition-all duration-300 group"
              aria-label="Previous dashboard"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
            </button>

            {/* Slide Content */}
            <div className="w-full px-12 sm:px-20 lg:px-24">
              <div className="relative">
                {dashboards.map((dashboard, index) => (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-3000 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0 scale-100 relative'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full scale-95 absolute inset-0 pointer-events-none'
                        : 'opacity-0 translate-x-full scale-95 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-6">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
                        {dashboard.title}
                      </h2>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        {dashboard.description}
                      </p>
                      <button className="inline-flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 group">
                        <span>More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Dashboard Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative rounded-lg overflow-hidden shadow-2xl ring-2 ring-gray-700 hover:ring-orange-500 transition-all duration-300">
                        <img
                          src={dashboard.image}
                          alt={dashboard.title}
                          className="w-full h-auto object-cover"
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 sm:right-4 lg:right-8 z-20 p-3 sm:p-4 rounded-full border-2 border-gray-600 hover:border-orange-500 bg-[#0a1628] hover:bg-gray-800 transition-all duration-300 group"
              aria-label="Next dashboard"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
            </button>
          </div>
      <Footer />
    </div>
  );
};

export default SearchArtLanding;