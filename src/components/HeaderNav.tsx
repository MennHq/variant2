import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Calendar, Compass, PhoneCall, ChevronRight } from 'lucide-react';

interface HeaderNavProps {
  onOpenConsultationModal: () => void;
  activeSection?: string;
  onNavigateSection?: (sectionId: string) => void;
  onNavigatePortfolio?: () => void;
  onNavigateHome?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenConsultationModal,
  onNavigateSection,
  onNavigatePortfolio,
  onNavigateHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkPath = () => {
      setIsPortfolio(
        window.location.pathname.includes('/portfolio') || 
        window.location.hash.includes('#portfolio')
      );
    };

    handleScroll();
    checkPath();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', checkPath);
    window.addEventListener('hashchange', checkPath);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', checkPath);
      window.removeEventListener('hashchange', checkPath);
    };
  }, []);

  const navLinks = [
    { name: 'WORK', id: 'portfolio' },
    { name: 'SERVICES', id: 'studio' },
    { name: 'STUDIO', id: 'studio' },
    { name: 'JOURNAL', id: 'studio' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'portfolio' && onNavigatePortfolio) {
      onNavigatePortfolio();
      return;
    }
    if (id === 'contact') {
      onOpenConsultationModal();
      return;
    }
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-45 transition-all duration-500 ${
        isPortfolio
          ? 'bg-[#18110D] border-b border-[#C8A261]/20 py-4 shadow-lg'
          : isScrolled
            ? 'bg-[#18110D]/95 border-b border-[#C8A261]/15 backdrop-blur-md py-4 shadow-lg'
            : 'bg-transparent border-b border-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Wordmark (Matching Image Left side) */}
        <button
          onClick={() => {
            if (onNavigateHome) onNavigateHome();
            else {
              const el = document.getElementById('hero');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer text-left border-0 bg-transparent p-0 focus:outline-none"
        >
          <img
            src="https://i.postimg.cc/qqxT1nHB/logo.webp"
            alt="Al Hammad Interiors & Architects"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col justify-center">
            <h1 className="font-serif-luxury text-base sm:text-lg lg:text-xl font-bold text-[#C8A261] tracking-[0.2em] leading-none uppercase">
              AL HAMMAD
            </h1>
            <p className="text-[6px] sm:text-[7px] lg:text-[8px] text-[#C8A261]/90 uppercase tracking-[0.32em] font-extrabold mt-1.5">
              INTERIORS & ARCHITECTS
            </p>
          </div>
        </button>

        {/* Navigation Links and Menu Trigger (Matching Image Right side) */}
        <div className="flex items-center gap-6 sm:gap-10">
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id)}
                className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] text-[#F4EFEA]/90 hover:text-[#C8A261] transition-all duration-300 cursor-pointer py-1"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Minimalist 2-Line Hamburger Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="group flex flex-col gap-1.5 w-6 cursor-pointer p-1.5 -mr-1.5 focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <span className="h-[1.5px] w-full bg-[#C8A261] group-hover:bg-[#F4EFEA] transition-colors duration-300 rounded-full" />
            <span className="h-[1.5px] w-full bg-[#C8A261] group-hover:bg-[#F4EFEA] transition-colors duration-300 rounded-full" />
          </button>
        </div>
      </div>

      {/* Premium Full/Sidebar Navigation Drawer Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="w-[85%] max-w-sm h-full bg-[#1C110B] border-l border-[#C8A261]/25 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#C8A261]/20">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.postimg.cc/qqxT1nHB/logo.webp"
                    alt="Al Hammad Interiors Logo"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-serif-luxury text-base font-bold text-[#C8A261] tracking-wider">AL HAMMAD</div>
                    <div className="text-[9px] text-[#C4B5A5]/80 uppercase tracking-[0.2em] font-bold mt-0.5">Interiors & Architects</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#C8A261] hover:text-[#F4EFEA] cursor-pointer"
                  aria-label="Close Mobile Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Studio Info Badge */}
              <div className="my-6 p-4 rounded-3xl bg-[#C8A261]/5 border border-[#C8A261]/20 text-xs">
                <div className="flex items-center gap-2 text-[#C8A261] font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Karachi Studio Office</span>
                </div>
                <p className="text-[#C4B5A5] text-[11px] leading-relaxed">
                  Suite 402, Al-Hammad Tower, Main Khayaban-e-Shahbaz, DHA Phase 6, Karachi
                </p>
              </div>

              {/* Drawer Menu Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.id)}
                    className="w-full flex items-center justify-between py-3.5 px-3 rounded-full text-left text-xs font-bold uppercase tracking-wider text-[#F4EFEA]/85 hover:bg-[#C8A261]/10 hover:text-[#C8A261] transition-all cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C8A261]/60" />
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-[#C8A261]/20 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="btn-clay-gold w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs tracking-wider active:scale-98 transition-all cursor-pointer min-h-[48px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Studio Consultation</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href="tel:+922135848888"
                  className="btn-clay-brown py-3 flex items-center justify-center gap-1.5 min-h-[44px] font-bold transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C8A261]" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/923008295555?text=${encodeURIComponent('Hello Al Hammad Interiors')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 flex items-center justify-center gap-1.5 font-bold min-h-[44px] text-white rounded-full"
                  style={{
                    background: '#25D366',
                    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.5), inset -3px -3px 6px rgba(18, 120, 50, 0.3)'
                  }}
                >
                  <Compass className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
