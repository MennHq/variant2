import React, { useState } from 'react';
import { SHOWCASE_SCENES } from '../../data/showcases';
import { ShowcaseScene } from '../../types';
import { Sparkles, Eye, Compass, ArrowRight } from 'lucide-react';

interface Option1GalleryViewProps {
  onSelectScene: (scene: ShowcaseScene) => void;
  onOpenConsultationModal: () => void;
}

export const Option1GalleryView: React.FC<Option1GalleryViewProps> = ({
  onSelectScene,
  onOpenConsultationModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Living & Lounges', 'Kitchens & Dining', 'Bedrooms & Wardrobes', 'Baths & Spas'];

  const filteredScenes = activeCategory === 'All'
    ? SHOWCASE_SCENES.slice(0, 12)
    : SHOWCASE_SCENES.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#241812] text-[#F4EFEA] min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Arch Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D1D16] text-[#C8A261] text-[11px] uppercase tracking-[0.25em] font-bold shadow-sm border border-[#C8A261]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A261]" />
            <span>OPTION 01 • THE GALLERY</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4EFEA] uppercase tracking-tight leading-tight">
            WE DON'T DESIGN INTERIORS. <br />
            <span className="italic text-[#C8A261]">WE DESIGN LEGACIES.</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#C4B5A5] max-w-xl mx-auto leading-relaxed font-semibold">
            Framed in timeless Sand Travertine tones and classic arch geometries. A showcase of bespoke architectural living across Karachi’s finest estates.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenConsultationModal}
              className="btn-clay-gold inline-flex items-center gap-2 py-3 px-6 text-xs uppercase tracking-widest cursor-pointer"
            >
              <span>Book Private Gallery Tour</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[38px] ${
                activeCategory === cat
                  ? 'btn-clay-gold scale-[1.02]'
                  : 'btn-clay-brown hover:scale-[1.01]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Arch Framed Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredScenes.map((scene) => (
            <div
              key={scene.id}
              onClick={() => onSelectScene(scene)}
              className="group bg-[#2D1E16] rounded-t-full border border-[#C8A261]/25 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Arch Top Image Container */}
              <div className="relative aspect-[4/5] bg-[#1C110B] overflow-hidden rounded-t-full">
                <img
                  src={scene.imageSrc}
                  alt={scene.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="flex items-center gap-2 text-xs text-[#F4EFEA] font-bold bg-[#1C110B]/95 backdrop-blur-md py-2 px-4 rounded-full border border-[#C8A261]/20">
                    <Eye className="w-4 h-4 text-[#C8A261]" /> View Architectural Specs
                  </span>
                </div>
              </div>

              {/* Title & Location Footer */}
              <div className="p-5 text-center space-y-1 bg-[#2D1E16]">
                <span className="text-[10px] uppercase tracking-widest text-[#C8A261] font-bold">
                  {scene.category}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-[#F4EFEA] group-hover:text-[#C8A261] transition-colors">
                  {scene.title}
                </h3>
                <p className="text-xs text-[#C4B5A5] font-semibold">
                  {scene.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
