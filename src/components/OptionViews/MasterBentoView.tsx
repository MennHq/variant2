import React, { useState } from 'react';
import { SHOWCASE_SCENES } from '../../data/showcases';
import { CLIENT_REVIEWS } from '../../data/reviews';
import { ShowcaseScene, CategoryFilter } from '../../types';
import {
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  Award,
  Eye,
  Star,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageSquare,
  Clock,
  Play,
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  ChevronRight,
} from 'lucide-react';

interface MasterBentoViewProps {
  onSelectScene: (scene: ShowcaseScene) => void;
  onOpenConsultationModal: (preselectedTitle?: string) => void;
  onNavigatePortfolio?: () => void;
}

export const MasterBentoView: React.FC<MasterBentoViewProps> = ({
  onSelectScene,
  onOpenConsultationModal,
  onNavigatePortfolio,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const categories: CategoryFilter[] = [
    'All',
    'Living & Lounges',
    'Kitchens & Dining',
    'Bedrooms & Wardrobes',
    'Baths & Spas',
    'Commercial & Workspaces',
    'Penthouses & Facades',
  ];

  const filteredScenes = selectedCategory === 'All'
    ? SHOWCASE_SCENES
    : SHOWCASE_SCENES.filter((s) => s.category === selectedCategory);

  const featuredProjects = [
    {
      id: 'scene-02',
      title: 'GULSHAN VILLA',
      location: 'GULSHAN-E-IQBAL BLOCK 4',
      subtitle: '500 SQ YD  •  2024',
      imageSrc: 'https://i.postimg.cc/yxVhZ4VJ/image-(4).webp',
      scene: SHOWCASE_SCENES.find((s) => s.id === 'scene-02') || SHOWCASE_SCENES[0],
    },
    {
      id: 'scene-01',
      title: 'PENTHOUSE DUPLEX',
      location: 'DHA PHASE 8',
      subtitle: '4500 SQ FT  •  2024',
      imageSrc: 'https://i.postimg.cc/RhM1H5Mh/image-(6).webp',
      scene: SHOWCASE_SCENES.find((s) => s.id === 'scene-01') || SHOWCASE_SCENES[1],
    },
    {
      id: 'scene-28',
      title: 'BAHRIA SPORTS CITY VILLA',
      location: 'BAHRIA TOWN KARACHI',
      subtitle: '350 SQ YD  •  2024',
      imageSrc: 'https://i.postimg.cc/hGgMW3wP/image-(28).webp',
      scene: SHOWCASE_SCENES.find((s) => s.id === 'scene-28') || SHOWCASE_SCENES[2],
    },
    {
      id: 'scene-03',
      title: 'CREEK VISTA RESIDENCE',
      location: 'DHA PHASE 8 CREEK VISTAS',
      subtitle: '3800 SQ FT  •  2024',
      imageSrc: 'https://i.postimg.cc/3NKjv5K0/image-(3).webp',
      scene: SHOWCASE_SCENES.find((s) => s.id === 'scene-03') || SHOWCASE_SCENES[3],
    },
    {
      id: 'scene-18',
      title: 'EMAAR OCEANFRONT TOWER',
      location: 'EMAAR OCEANFRONT DHA',
      subtitle: '3200 SQ FT  •  2024',
      imageSrc: 'https://i.postimg.cc/Hnp0yDp3/image-(18).webp',
      scene: SHOWCASE_SCENES.find((s) => s.id === 'scene-18') || SHOWCASE_SCENES[4],
    },
    {
      id: 'scene-24',
      title: 'NAVY HOUSING DUPLEX',
      location: 'KARACHI CANTONMENT',
      subtitle: '4200 SQ FT  •  2024',
      imageSrc: 'https://i.postimg.cc/fyw79nw7/image-(24).webp',
      scene: SHOWCASE_SCENES.find((s) => s.id === 'scene-24') || SHOWCASE_SCENES[5],
    },
  ];

  const journeyGallery = [
    { src: 'https://i.postimg.cc/sxVPhdVZ/image-(1).webp', alt: 'Luxury Bedroom' },
    { src: 'https://i.postimg.cc/wM65m86v/image-(8).webp', alt: 'Marble Kitchen' },
    { src: 'https://i.postimg.cc/RhM1H5Mh/image-(6).webp', alt: 'Fluted Media Lounge' },
    { src: 'https://i.postimg.cc/fyw79nw7/image-(24).webp', alt: 'Drawing Room' },
    { src: 'https://i.postimg.cc/3NKjv5K0/image-(3).webp', alt: 'Double Height Suite' },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Spatial Audit & 3D Renders',
      desc: 'In-person site survey in Karachi, laser measurement, and ultra-HD 3D photorealistic renderings.',
    },
    {
      num: '02',
      title: 'Material Spec & BOQ',
      desc: 'Selection of Italian travertine marble, smoked walnut veneers, and transparent itemized Bill of Quantities.',
    },
    {
      num: '03',
      title: 'Artisanal Build & Joinery',
      desc: 'Custom factory fabrication of fluted acoustic panels, glass wardrobes, and site execution by senior architects.',
    },
    {
      num: '04',
      title: 'Turnkey Handover & Warranty',
      desc: 'White-glove final styling, deep cleaning, and 1-year structural warranty certificate handover.',
    },
  ];

  return (
    <div className="bg-[#241812] text-[#F4EFEA] min-h-screen">
      {/* 1. HERO SECTION (Matching Image 101%) */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
        {/* Hero Background Image with Rich Mocha Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/yxVhZ4VJ/image-(4).webp"
            alt="Luxury Interior Architecture Hero"
            className="w-full h-full object-cover object-center brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Hero Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-44 pb-16 w-full">
          <div className="max-w-2xl space-y-6">
            {/* Eyebrow Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C8A261]">
              THE ART OF LUXURY LIVING
            </p>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#FDFBF7] uppercase tracking-tight leading-[1.05]">
              WE DON'T <br />
              DESIGN INTERIORS. <br />
              <span className="text-[#C8A261]">WE DESIGN STATUS.</span>
            </h1>

            {/* Sub-brand Location Info */}
            <div className="pt-2 border-t border-[#C8A261]/25">
              <p className="font-serif-luxury text-base sm:text-lg tracking-wider text-[#FDFBF7] font-semibold uppercase">
                AL HAMMAD INTERIORS & ARCHITECTS
              </p>
              <p className="text-xs text-[#C4B5A5] uppercase tracking-[0.25em] font-semibold mt-0.5">
                KARACHI • PAKISTAN
              </p>
            </div>

            {/* Services Pill Links */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] sm:text-xs text-[#C4B5A5] uppercase tracking-wider font-semibold">
              <span className="hover:text-[#C8A261] transition-colors">LUXURY INTERIOR DESIGN</span>
              <span className="text-[#C8A261]/50">•</span>
              <span className="hover:text-[#C8A261] transition-colors">ARCHITECTURE</span>
              <span className="text-[#C8A261]/50">•</span>
              <span className="hover:text-[#C8A261] transition-colors">TURNKEY EXECUTION</span>
            </div>

            {/* CTA Discover Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('work');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-clay-brown inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase active:scale-98 cursor-pointer group min-h-[48px]"
              >
                <span>DISCOVER OUR WORK</span>
                <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE BANNER (Luxury Dark Mocha & Gold Texture) */}
      <section className="bg-[#2D1D16] text-[#F4EFEA] py-12 lg:py-16 border-b border-[#C8A261]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Huge Stat Left */}
            <div className="md:col-span-4 flex items-baseline gap-4 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-[#C8A261]/25 pb-6 md:pb-0">
              <span className="font-serif-luxury text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#C8A261]">
                12+
              </span>
              <span className="font-sans text-xs font-extrabold uppercase tracking-[0.3em] text-[#C8A261]">
                YEARS
              </span>
            </div>

            {/* Description Right */}
            <div className="md:col-span-8 space-y-3">
              <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-5xl font-medium text-[#F4EFEA] leading-tight">
                Creating timeless luxury residences across Karachi.
              </h2>
              <div className="w-12 h-1 bg-[#C8A261] rounded-full mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION (2 Rows x 3 Columns = 6 Cards) */}
      <section id="work" className="py-16 sm:py-24 bg-[#241812] border-b border-[#C8A261]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A261] font-bold">
                ARCHITECTURAL SHOWCASE
              </p>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold uppercase text-[#F4EFEA]">
                FEATURED PROJECTS
              </h2>
            </div>
            <p className="text-xs text-[#C4B5A5] max-w-sm leading-relaxed font-medium">
              A curated selection of our finest private residences, luxury duplexes, and commercial transformations in Karachi.
            </p>
          </div>

          {/* 3-Column x 2-Row Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectScene(proj.scene)}
                className="group bg-[#2D1E16] rounded-[2.5rem] border border-[#C8A261]/20 hover:border-[#C8A261]/85 transition-all duration-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-[#1C110B] overflow-hidden">
                  <img
                    src={proj.imageSrc}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-80" />
                  
                  {/* Location Glass Badge */}
                  {proj.location && (
                    <div className="absolute top-3 left-3 bg-[#1C110B]/90 backdrop-blur-md border border-[#C8A261]/40 text-[9px] font-bold text-[#F4EFEA] px-3 py-1 rounded-full uppercase tracking-wider">
                      {proj.location}
                    </div>
                  )}

                  {/* Quick View Icon */}
                  <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-[#1C110B]/90 backdrop-blur-md border border-[#C8A261]/40 text-[#C8A261] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Title & Specs */}
                <div className="p-6 space-y-2 bg-[#2D1E16]/40">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-luxury text-lg font-bold uppercase tracking-wider text-[#F4EFEA] group-hover:text-[#C8A261] transition-colors leading-tight">
                      {proj.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#C8A261] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-[#C4B5A5]/80 font-extrabold">
                    {proj.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom See More Button */}
          <div className="text-center border-t border-[#C8A261]/20 pt-10">
            <button
              onClick={() => {
                if (onNavigatePortfolio) {
                  onNavigatePortfolio();
                } else {
                  const el = document.getElementById('full-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-clay-gold inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] active:scale-98 transition-all cursor-pointer group min-h-[48px] w-full sm:w-auto"
            >
              <span>SEE MORE PORTFOLIO PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-[#C8A261] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. VIDEO TRANSFORMATION BANNER (Matching Image 101%) */}
      <section className="relative py-24 lg:py-36 bg-black overflow-hidden border-b border-[#C8A261]/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/3NKjv5K0/image-(3).webp"
            alt="Luxury Villa Transformation Video Preview"
            className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18110D] via-transparent to-[#18110D]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-6">
          {/* Circular Play Trigger */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#C8A261]/60 bg-[#18110D]/90 hover:bg-[#C8A261] hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto cursor-pointer group"
            style={{
              boxShadow: '0 10px 25px rgba(200, 162, 97, 0.2), inset 2px 2px 4px rgba(255, 255, 255, 0.25), inset -3px -3px 6px rgba(24, 17, 13, 0.4)'
            }}
            aria-label="Play Villa Transformation Video"
          >
            <Play className="w-8 h-8 text-[#C8A261] group-hover:text-[#18110D] fill-current translate-x-0.5 transition-colors" />
          </button>

          <div className="space-y-2">
            <p className="font-serif-luxury text-lg sm:text-2xl uppercase tracking-widest text-[#F4EFEA] font-semibold">
              LUXURY VILLA TRANSFORMATION
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C8A261] font-medium">
              WATCH VIDEO
            </p>
          </div>
        </div>
      </section>

      {/* 5. STATS SECTION (Luxury Dark Mocha & Gold Texture) */}
      <section className="bg-[#2D1D16] text-[#F4EFEA] py-12 lg:py-16 border-b border-[#C8A261]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#C8A261]/20">
            <div className="p-4 space-y-1">
              <div className="font-serif-luxury text-4xl sm:text-5xl font-extrabold text-[#C8A261]">
                650+
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C4B5A5]">
                ROOMS DESIGNED
              </div>
            </div>

            <div className="p-4 space-y-1 pt-6 md:pt-4">
              <div className="font-serif-luxury text-4xl sm:text-5xl font-extrabold text-[#C8A261]">
                180+
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C4B5A5]">
                LUXURY HOMES
              </div>
            </div>

            <div className="p-4 space-y-1 pt-6 md:pt-4">
              <div className="font-serif-luxury text-4xl sm:text-5xl font-extrabold text-[#C8A261]">
                12+
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C4B5A5]">
                YEARS
              </div>
            </div>

            <div className="p-4 space-y-1 pt-6 md:pt-4">
              <div className="font-serif-luxury text-4xl sm:text-5xl font-extrabold text-[#C8A261]">
                99%
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C4B5A5]">
                CLIENT SATISFACTION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL JOURNEY / INSTAGRAM SHOWCASE GRID */}
      <section id="journal" className="py-16 sm:py-20 bg-[#241812] border-b border-[#C8A261]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C4B5A5] font-bold">
              FOLLOW OUR JOURNEY <span className="text-[#C8A261] ml-2">@ALHAMMAD.INTERIORS</span>
            </p>
            <a
              href="https://www.instagram.com/al_hammad_interior/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-[#C8A261] hover:underline flex items-center gap-1.5 font-bold"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {journeyGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSelectScene(SHOWCASE_SCENES[idx % SHOWCASE_SCENES.length])}
                className="group relative aspect-square bg-[#1C110B] overflow-hidden border border-[#C8A261]/20 cursor-pointer rounded-2xl"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                  <Instagram className="w-6 h-6 text-[#C8A261]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION (Matching Image 101%) */}
      <section id="contact" className="py-16 sm:py-24 bg-[#241812] border-b border-[#C8A261]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#2D1E16] border border-[#C8A261]/25 p-8 sm:p-12 rounded-[2rem]">
            {/* Left Column Text & Button */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold uppercase text-[#F4EFEA] tracking-tight leading-[1.1]">
                LET'S CREATE <br />
                SOMETHING <br />
                <span className="text-[#C8A261]">EXCEPTIONAL.</span>
              </h2>

              <div>
                <button
                  onClick={() => onOpenConsultationModal()}
                  className="btn-clay-gold inline-flex items-center gap-3 px-8 py-3.5 text-xs font-extrabold tracking-[0.2em] uppercase cursor-pointer group"
                >
                  <span>BOOK CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A261] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column Luxury Image */}
            <div className="lg:col-span-6 relative aspect-[16/11] bg-black overflow-hidden border border-[#C8A261]/20 rounded-[2rem]">
              <img
                src="https://i.postimg.cc/Hnp0yDp3/image-(18).webp"
                alt="Opulent Luxury Dining Room"
                className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700 rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 10. ARCHITECTURAL METHODOLOGY & PROCESS */}
      <section id="studio" className="py-16 sm:py-24 bg-[#1C110B]/50 border-t border-[#C8A261]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D1D16] border border-[#C8A261]/30 text-[#C8A261] text-[10px] uppercase tracking-widest font-extrabold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>OUR METHODOLOGY</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#F4EFEA] uppercase">
              Step-by-Step Architectural Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#2D1E16] p-8 rounded-[2.5rem] border border-[#C8A261]/25 relative space-y-3"
              >
                <div className="font-serif-luxury text-3xl font-extrabold text-[#C8A261]">
                  {step.num}
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#F4EFEA] uppercase">
                  {step.title}
                </h3>
                <p className="text-xs text-[#C4B5A5] leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. VERIFIED CLIENT REVIEWS */}
      <section className="py-16 sm:py-24 bg-[#241812] border-t border-[#C8A261]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D1D16] border border-[#C8A261]/30 text-[#C8A261] text-[10px] uppercase tracking-widest font-extrabold mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-extrabold text-[#F4EFEA] uppercase">
              Verified Client Endorsements
            </h2>
            <p className="text-xs sm:text-sm text-[#C4B5A5] mt-2 font-semibold">
              Endorsed by prominent Karachi homeowners, surgeons, corporate directors, and real estate developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#2D1E16] p-8 rounded-[2.5rem] border border-[#C8A261]/25 space-y-4 shadow-sm relative"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-[#C8A261] gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8A261]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#C8A261] bg-[#1C110B] px-3 py-1.5 rounded-full border border-[#C8A261]/20 font-bold uppercase tracking-wider">
                    Handover {review.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#F4EFEA] italic leading-relaxed font-semibold">
                  "{review.quote}"
                </p>

                <div className="pt-3 border-t border-[#C8A261]/15 flex items-center justify-between">
                  <div>
                    <div className="font-serif-luxury font-bold text-sm text-[#C8A261]">
                      {review.name}
                    </div>
                    <div className="text-[11px] text-[#C4B5A5] font-semibold">{review.role}</div>
                  </div>
                  <div className="text-right text-[10px] text-[#C8A261] font-bold">
                    {review.location}
                    <div className="text-[9px] text-[#C4B5A5]/75 font-semibold">{review.projectType}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FOOTER (Matching Image 101%) */}
      <footer className="bg-[#1C110B] border-t border-[#C8A261]/20 pt-16 pb-24 lg:pb-16 text-xs text-[#C4B5A5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#C8A261]/15">
            {/* Logo Column */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#C8A261] flex items-center justify-center font-serif-luxury font-bold text-base text-[#C8A261] bg-[#2D1D16]">
                  AH
                </div>
                <div>
                  <div className="font-serif-luxury text-base font-bold uppercase text-[#F4EFEA] tracking-wider">
                    AL HAMMAD
                  </div>
                  <div className="text-[9px] text-[#C4B5A5] uppercase tracking-[0.2em] font-bold">
                    INTERIORS & ARCHITECTS
                  </div>
                </div>
              </div>
            </div>

            {/* Address Column */}
            <div className="md:col-span-4 space-y-2">
              <p className="font-bold text-[#F4EFEA] uppercase tracking-wider">
                KARACHI, PAKISTAN
              </p>
              <p className="text-[#C4B5A5] font-medium">
                +92 21 35848888
              </p>
              <p className="text-[#C4B5A5] font-medium">
                info@alhammadinteriors.com
              </p>
            </div>

            {/* Socials Column */}
            <div className="md:col-span-4 space-y-2 md:text-right">
              <p className="font-bold text-[#F4EFEA] uppercase tracking-wider">
                FOLLOW US
              </p>
              <div className="flex items-center gap-4 md:justify-end text-[#C8A261] pt-1">
                <a href="https://www.instagram.com/al_hammad_interior/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#C8A261]/30 hover:border-[#C8A261] hover:bg-[#C8A261]/10 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/alhammadinteriors/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#C8A261]/30 hover:border-[#C8A261] hover:bg-[#C8A261]/10 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C4B5A5]/60 gap-4">
            <p>© {new Date().getFullYear()} AL HAMMAD INTERIORS & ARCHITECTS. ALL RIGHTS RESERVED.</p>
            <p>KARACHI • PAKISTAN</p>
          </div>
        </div>
      </footer>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#18110D] border border-[#C8A261]/40 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-[#C8A261]/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C8A261] uppercase tracking-widest">
                <Play className="w-4 h-4 fill-current" />
                <span>LUXURY VILLA TRANSFORMATION • ARCHITECTURAL SHOWCASE</span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-xs uppercase tracking-wider text-[#C4B5A5] hover:text-[#F4EFEA] px-3 py-1 bg-[#241812] border border-[#C8A261]/30 rounded-lg cursor-pointer"
              >
                Close ✕
              </button>
            </div>
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src="https://i.postimg.cc/3NKjv5K0/image-(3).webp"
                alt="Video presentation frame"
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
                  Full High-Definition Cinematic Walkthrough
                </p>
                <p className="text-xs text-[#C4B5A5] max-w-md">
                  Experience the spatial transformation of a double-height residence in DHA Phase 8, featuring custom marble finishes, bespoke acoustics, and automated ambient lighting.
                </p>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenConsultationModal('Request Private Video & Portfolio Presentation');
                  }}
                  className="px-6 py-3 rounded-xl bg-[#C8A261] text-[#18110D] font-bold text-xs uppercase tracking-wider hover:brightness-110 cursor-pointer"
                >
                  Schedule Private Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
