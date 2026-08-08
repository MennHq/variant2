import React, { useState } from 'react';
import { MATERIAL_SWATCHES } from '../data/materials';
import { Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export const MaterialPaletteExplorer: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState(MATERIAL_SWATCHES[0]);

  return (
    <section id="materials" className="py-16 sm:py-24 bg-[#D4BFAB] border-t border-[#C8A261]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5AE95]/60 border border-[#C8A261]/30 text-[#A67C38] text-[10px] uppercase tracking-widest font-extrabold mb-3 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-[#A67C38]" />
              <span>Materiality & Texture Archive</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#2A1B14] tracking-tight">
              Curated Architectural Material Swatches
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#503B31] max-w-md leading-relaxed font-semibold">
            Every surface is selected from certified quarries and artisan mills across Italy, Germany, and North America for supreme tactile finish.
          </p>
        </div>

        {/* Material Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Active Material Feature Card */}
          <div className="lg:col-span-7 bg-[#C5AE95]/15 rounded-[2.5rem] border border-[#C8A261]/30 overflow-hidden shadow-sm relative group">
            <div className="relative h-[320px] sm:h-[420px] bg-[#C5AE95] overflow-hidden">
              <img
                src={activeMaterial.imageSrc}
                alt={activeMaterial.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#2A1B14] font-extrabold bg-[#DECBB7]/95 px-3 py-1.5 rounded-full border border-[#C8A261]/30 inline-block mb-2 shadow-sm">
                  {activeMaterial.category} • Origin: {activeMaterial.origin}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FDFBF7]">
                  {activeMaterial.name}
                </h3>
                <p className="text-xs text-[#FDFBF7]/90 mt-2 leading-relaxed max-w-xl font-medium">
                  {activeMaterial.description}
                </p>
              </div>
            </div>
          </div>

          {/* Selector Thumbnails Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {MATERIAL_SWATCHES.map((mat) => {
              const isSelected = activeMaterial.id === mat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setActiveMaterial(mat)}
                  className={`p-4 rounded-[1.5rem] text-left transition-all duration-300 cursor-pointer border flex flex-col justify-between min-h-[110px] ${
                    isSelected
                      ? 'bg-[#C8A261]/25 border-[#C8A261] shadow-md shadow-[#C8A261]/15 scale-[1.02]'
                      : 'bg-[#DECBB7] border-[#C8A261]/20 hover:border-[#C8A261]/50 hover:bg-[#C5AE95]/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span
                      className="w-5 h-5 rounded-full border border-[#C8A261]/30 shadow-sm shrink-0"
                      style={{ backgroundColor: mat.colorHex }}
                    />
                    <ArrowUpRight className={`w-4 h-4 ${isSelected ? 'text-[#A67C38]' : 'text-[#503B31]/40'}`} />
                  </div>

                  <div>
                    <div className="font-serif-luxury text-sm font-bold text-[#2A1B14] leading-tight group-hover:text-[#A67C38] transition-colors">
                      {mat.name}
                    </div>
                    <div className="text-[10px] text-[#503B31] mt-1 font-bold truncate">
                      {mat.finish}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
