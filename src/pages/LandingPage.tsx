import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';

const SearchArtLanding = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSectors, setVisibleSectors] = useState<number[]>([]);
  const [visibleCarousel, setVisibleCarousel] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  console.log(setIsLogin);
  
  const sectorsRef = useRef(null);
  const carouselRef = useRef(null);
  const sectorRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '50px'
    };

    const sectorObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
          setVisibleSectors(prev => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === carouselRef.current) {
            setTimeout(() => setVisibleCarousel(true), 100);
          }
        }
      });
    };

    const sectorObserver = new IntersectionObserver(sectorObserverCallback, observerOptions);
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectorRefs.current.forEach(ref => {
      if (ref) sectorObserver.observe(ref);
    });

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      sectorObserver.disconnect();
      observer.disconnect();
    };
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
      <div className="min-h-screen relative overflow-hidden"    style={{
          backgroundImage: `url('MapSearchart.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        
        }}>
        {/* World Map Background */}
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-20"       
    >
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
      <div ref={sectorsRef} className="relative z-10 bg-[#0f1d30] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-gray-300 text-sm sm:text-base mb-12 sm:mb-16 max-w-3xl mx-auto">
            Discover a diverse range of sectors, each providing in-depth insights into subsectors and indicators within them
          </h2>

          {/* Sectors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
            {/* Agriculture */}
            <div 
              ref={(el) => { sectorRefs.current[0] = el; }}
              data-index="0"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[1] = el; }}
              data-index="1"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[2] = el; }}
              data-index="2"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[3] = el; }}
              data-index="3"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[4] = el; }}
              data-index="4"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[5] = el; }}
              data-index="5"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[6] = el; }}
              data-index="6"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[7] = el; }}
              data-index="7"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[8] = el; }}
              data-index="8"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[9] = el; }}
              data-index="9"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(9) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[10] = el; }}
              data-index="10"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
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
            <div 
              ref={(el) => { sectorRefs.current[11] = el; }}
              data-index="11"
              className={`flex flex-col items-center group cursor-pointer transform transition-all duration-700 ease-out ${
                visibleSectors.includes(11) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
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
<div ref={carouselRef} className={`relative min-h-[600px] flex items-center overflow-hidden transform transition-all duration-3000 ease-out ${visibleCarousel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  {/* Left Arrow */}
  <button
    onClick={prevSlide}
    className="absolute left-4 sm:left-6 lg:left-12 z-20 p-3 rounded-full border-2 transition-all duration-500 hover:scale-110 active:scale-95"
    aria-label="Previous dashboard"
    style={{ 
      top: '50%', 
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      borderColor: '#4b5563'
    }}
  >
    <ArrowLeft className="w-6 h-6 text-gray-300" />
  </button>

  {/* Slide Content */}
<div className="w-full px-16 sm:px-20 lg:px-32">
  <div className="relative">
    {dashboards.map((dashboard, index) => (
      <div
        key={index}
        className={`transition-all duration-5000 ease-in-out ${
          index === currentSlide
            ? 'opacity-100 translate-x-0 scale-100 relative'
            : index < currentSlide
            ? 'opacity-0 -translate-x-full scale-95 absolute inset-0 pointer-events-none'
            : 'opacity-0 translate-x-full scale-95 absolute inset-0 pointer-events-none'
        }`}
      >
        {/* Title - Centered at Top */}
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#ff5722' }}>
          {dashboard.title}
        </h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content - Left Side */}
          <div className="flex flex-col justify-start mt-12">
            <p className="text-lg leading-relaxed" style={{ 
              color: '#d1d5db',
              textAlign: 'justify',
              textJustify: 'inter-word',
              lineHeight: '1.8'
            }}>
              {dashboard.description}
            </p>
          </div>

          {/* Dashboard Image - Right Side */}
          <div className="flex flex-col">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={dashboard.image}
                alt={dashboard.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent"></div>
            </div>
            
            {/* More Button - Below Image, Right Aligned */}
          <div className="pt-4 flex justify-end">
  <button 
    className="inline-flex items-center space-x-10 px-30 py-2.5 rounded-md transition-all duration-300 hover:opacity-80 sm:px-12 md:px-14"
    style={{ 
      backgroundColor: '#284068',
      color: '#ffffff',
    }}
  >
    <span className="text-base">More</span>
    <ArrowRight className="w-5 h-5" />
  </button>
</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  {/* Right Arrow */}
  <button
    onClick={nextSlide}
    className="absolute right-4 sm:right-6 lg:right-12 z-20 p-3 rounded-full border-2 transition-all duration-3000 hover:scale-110 active:scale-95"
    aria-label="Next dashboard"
    style={{ 
      top: '50%', 
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      borderColor: '#4b5563'
    }}
  >
    <ArrowRight className="w-6 h-6 text-gray-300" />
  </button>
</div>
      
      <Footer />
    </div>
  );
};

export default SearchArtLanding;