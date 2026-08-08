import React, { useState } from 'react';
import { SHOWCASE_SCENES } from '../../data/showcases';
import { ShowcaseScene } from '../../types';
import { Sparkles, Sun, Moon, ArrowRight, Eye, Shield, Compass } from 'lucide-react';

interface Option3EspressoViewProps {
  onSelectScene: (scene: ShowcaseScene) => void;
  onOpenConsultationModal: () => void;
}

export const Option3EspressoView: React.FC<Option3EspressoViewProps> = ({
  onSelectScene,
  onOpenConsultationModal,
}) => {
  const [ambientGlow, setAmbientGlow] = useState<boolean>(true);

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 bg-[#241812] text-[#F4EFEA] border-t border-[#C8A261]/20`}>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D1D16] border border-[#C8A261]/40 text-[#C8A261] text-[10px] uppercase tracking-widest font-extrabold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A261]" />
              <span>OPTION 03 • THE LUXURY ESPRESSO AESTHETICS</span>
            </span>

            {/* Ambient Lighting Toggle */}
            <button
              onClick={() => setAmbientGlow(!ambientGlow)}
              className="btn-clay-brown p-1.5 hover:scale-105 transition-all cursor-pointer text-xs flex items-center gap-1.5 px-3 py-1.5 font-bold"
              title="Toggle Ambient Gold Lighting Effect"
            >
              {ambientGlow ? <Sun className="w-3.5 h-3.5 text-[#C8A261]" /> : <Moon className="w-3.5 h-3.5 text-[#C8A261]" />}
              <span className="text-[10px] uppercase font-extrabold">{ambientGlow ? 'Soft Glow' : 'Studio Light'}</span>
            </button>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4EFEA] uppercase leading-tight">
            THE ART OF LUXURY LIVING <br />
            <span className="text-[#C8A261] italic">DESIGNED FOR THE WAY YOU LIVE.</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#C4B5A5] max-w-xl mx-auto leading-relaxed font-semibold">
            Draped in rich dark espresso brown, premium cocoa textures, and luxury gold accents. Designed for distinguished clients seeking timeless, warm architectural serenity.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenConsultationModal}
              className="btn-clay-gold inline-flex items-center gap-2 py-3 px-6 text-xs uppercase tracking-wider active:scale-98 transition-all cursor-pointer min-h-[44px]"
            >
              <span>Schedule Private Residence Review</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Featured Espresso Showcase Slider/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOWCASE_SCENES.map((scene) => (
            <div
              key={scene.id}
              onClick={() => onSelectScene(scene)}
              className={`group bg-[#2D1E16] rounded-[2.5rem] overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between border-[#C8A261]/25 hover:border-[#C8A261]/80 shadow-sm hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] bg-[#1C110B] overflow-hidden">
                <img
                  src={scene.imageSrc}
                  alt={scene.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F4EFEA] bg-[#1C110B]/95 px-3 py-1 rounded-full border border-[#C8A261]/30">
                    {scene.location}
                  </span>
                  <span className="p-2.5 rounded-full bg-[#1C110B]/95 text-[#C8A261] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-6 space-y-3">
                <span className="text-[9px] uppercase tracking-widest text-[#C8A261] font-bold">
                  {scene.category}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-[#F4EFEA] group-hover:text-[#C8A261] transition-colors leading-snug">
                  {scene.title}
                </h3>
                <p className="text-xs text-[#C4B5A5] line-clamp-2 leading-relaxed font-semibold">
                  {scene.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
