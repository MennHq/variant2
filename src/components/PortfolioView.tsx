import React, { useState, useMemo } from 'react';
import { SHOWCASE_SCENES } from '../data/showcases';
import { ShowcaseScene, CategoryFilter } from '../types';
import {
  Search,
  Filter,
  Grid3X3,
  Grid2X2,
  MapPin,
  Eye,
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Sparkles,
  SlidersHorizontal,
  Check,
  Calendar,
  Layers,
} from 'lucide-react';

interface PortfolioViewProps {
  onSelectScene: (scene: ShowcaseScene) => void;
  onOpenConsultationModal: (preselectedTitle?: string) => void;
  onBackToHome: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onSelectScene,
  onOpenConsultationModal,
  onBackToHome,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [gridCols, setGridCols] = useState<3 | 2>(3);

  const categories: CategoryFilter[] = [
    'All',
    'Living & Lounges',
    'Kitchens & Dining',
    'Bedrooms & Wardrobes',
    'Baths & Spas',
    'Commercial & Workspaces',
    'Penthouses & Facades',
  ];

  const filteredScenes = useMemo(() => {
    return SHOWCASE_SCENES.filter((scene) => {
      const matchesCategory =
        selectedCategory === 'All' || scene.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        scene.title.toLowerCase().includes(query) ||
        scene.location.toLowerCase().includes(query) ||
        scene.category.toLowerCase().includes(query) ||
        scene.description.toLowerCase().includes(query) ||
        scene.specs.keyMaterials.some((mat) => mat.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#241812] text-[#F4EFEA] min-h-screen pt-6 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Header & Breadcrumb Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#C8A261]/25 pb-8 pt-4">
          <div className="space-y-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-extrabold text-[#C8A261] hover:text-[#F4EFEA] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
 
            <h1 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold text-[#F4EFEA] uppercase tracking-tight leading-tight">
              PORTFOLIO <span className="text-[#C8A261]">CATALOG</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#C4B5A5] max-w-2xl leading-relaxed font-semibold">
              Explore our complete architectural and interior design archive featuring luxury private residences, penthouses, duplexes, and commercial developments across Karachi.
            </p>
          </div>
 
          <div className="flex items-center gap-3 self-start md:self-auto w-full md:w-auto">
            <button
              onClick={() => onOpenConsultationModal('General Portfolio Inquiry')}
              className="btn-clay-gold w-full sm:w-auto px-6 py-3.5 text-xs font-bold tracking-wider uppercase active:scale-98 transition-all cursor-pointer min-h-[44px]"
            >
              Book Project Consultation
            </button>
          </div>
        </div>
 
        {/* Filter Controls Bar */}
        <div className="bg-[#2D1E16] backdrop-blur-xl p-6 rounded-[2.5rem] border border-[#C8A261]/25 space-y-6 shadow-sm">
          {/* Top Row: Search Input & Layout Density Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C8A261]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by villa name, location (e.g. DHA), material..."
                className="w-full bg-[#1C110B] text-[#F4EFEA] placeholder-[#C4B5A5]/60 text-xs rounded-full pl-11 pr-10 py-3.5 border border-[#C8A261]/30 focus:outline-none focus:border-[#C8A261] focus:ring-1 focus:ring-[#C8A261]/50 transition-all min-h-[44px] font-semibold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#C4B5A5] hover:text-[#F4EFEA] font-bold"
                >
                  Clear
                </button>
              )}
            </div>
 
            {/* Layout Toggles + Counter */}
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <span className="text-xs text-[#C8A261] font-extrabold uppercase tracking-wider">
                {filteredScenes.length} {filteredScenes.length === 1 ? 'Project' : 'Projects'} Found
              </span>
 
              <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full">
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-2 rounded-full transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center ${
                    gridCols === 3
                      ? 'btn-clay-gold'
                      : 'btn-clay-brown'
                  }`}
                  title="3-Column Grid"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(2)}
                  className={`p-2 rounded-full transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center ${
                    gridCols === 2
                      ? 'btn-clay-gold'
                      : 'btn-clay-brown'
                  }`}
                  title="2-Column Large Grid"
                >
                  <Grid2X2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
 
          {/* Bottom Row: Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pt-3 border-t border-[#C8A261]/15 touch-pan-x">
            <span className="text-[11px] text-[#C4B5A5] uppercase tracking-widest font-bold mr-1 flex items-center gap-1.5 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#C8A261]" />
              Filter:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs font-bold whitespace-nowrap transition-all cursor-pointer min-h-[38px] ${
                  selectedCategory === category
                    ? 'btn-clay-gold scale-[1.02]'
                    : 'btn-clay-brown hover:scale-[1.01]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
 
        {/* Gallery Grid */}
        {filteredScenes.length === 0 ? (
          <div className="text-center py-20 bg-[#2D1E16] rounded-[2.5rem] border border-[#C8A261]/25 space-y-4">
            <Compass className="w-12 h-12 text-[#C8A261] mx-auto opacity-80" />
            <h3 className="font-serif-luxury text-xl font-bold text-[#F4EFEA]">
              No matching portfolio projects found
            </h3>
            <p className="text-xs text-[#C4B5A5] font-semibold">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="btn-clay-gold px-6 py-2.5 text-xs font-bold uppercase cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 ${
              gridCols === 3
                ? 'md:grid-cols-2 lg:grid-cols-3'
                : 'md:grid-cols-2'
            } gap-8`}
          >
            {filteredScenes.map((scene) => (
              <div
                key={scene.id}
                onClick={() => onSelectScene(scene)}
                className="group bg-[#2D1E16] rounded-[2.5rem] border border-[#C8A261]/25 overflow-hidden hover:border-[#C8A261]/80 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-[#1C110B] overflow-hidden">
                  <img
                    src={scene.imageSrc}
                    alt={scene.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-90" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#1C110B]/95 border border-[#C8A261]/35 text-[10px] font-bold text-[#F4EFEA] px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {scene.category}
                  </div>

                  {/* Hover Eye Icon */}
                  <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-[#1C110B]/95 border border-[#C8A261]/35 text-[#C8A261] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#C8A261] font-bold">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {scene.location}
                      </span>
                      <span className="text-[10px] text-[#C4B5A5] uppercase tracking-wider font-extrabold">
                        {scene.specs.area} • {scene.specs.completionYear}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold uppercase text-[#F4EFEA] group-hover:text-[#C8A261] transition-colors leading-tight">
                      {scene.title}
                    </h3>

                    <p className="text-xs text-[#C4B5A5] line-clamp-2 leading-relaxed font-semibold">
                      {scene.description}
                    </p>
                  </div>

                  {/* Material Pills */}
                  <div className="pt-4 border-t border-[#C8A261]/15 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {scene.specs.keyMaterials.slice(0, 3).map((mat, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] uppercase tracking-wider text-[#C4B5A5] font-bold bg-[#1C110B]/40 border border-[#C8A261]/20 px-2.5 py-1 rounded-full"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-[#C8A261] pt-1">
                      <span>EXPLORE PROJECT LIGHTBOX</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-16 bg-[#2D1E16] border border-[#C8A261]/30 p-8 sm:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F4EFEA]">
              Envisioning a similar aesthetic for your property?
            </h3>
            <p className="text-xs sm:text-sm text-[#C4B5A5] font-semibold">
              Our senior interior architects deliver full turnkey space planning, 3D renders, and bespoke craftsmanship in Karachi.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultationModal('Portfolio Page Inquiry')}
            className="btn-clay-gold px-8 py-4 text-xs font-bold uppercase tracking-widest cursor-pointer shrink-0 min-h-[48px]"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
