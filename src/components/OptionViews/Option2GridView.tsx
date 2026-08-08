import React from 'react';
import { SHOWCASE_SCENES } from '../../data/showcases';
import { ShowcaseScene } from '../../types';
import { Grid, Layers, Award, CheckCircle, ArrowUpRight, Compass } from 'lucide-react';

interface Option2GridViewProps {
  onSelectScene: (scene: ShowcaseScene) => void;
  onOpenConsultationModal: () => void;
}

export const Option2GridView: React.FC<Option2GridViewProps> = ({
  onSelectScene,
  onOpenConsultationModal,
}) => {
  const metrics = [
    { label: 'DELIVERED ROOMS', value: '650+', icon: Layers },
    { label: 'LUXURY HOMES', value: '180+', icon: Grid },
    { label: 'YEARS IN KARACHI', value: '12+', icon: Award },
    { label: 'CLIENT SATISFACTION', value: '99%', icon: CheckCircle },
  ];

  return (
    <div className="bg-[#241812] text-[#F4EFEA] min-h-screen py-12 px-4 sm:px-6 lg:px-8 border-t border-[#C8A261]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Tagline & Data Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D1D16] border border-[#C8A261]/30 text-[#C8A261] text-[10px] uppercase tracking-widest font-extrabold shadow-sm">
            <Grid className="w-3.5 h-3.5" />
            <span>OPTION 02 • THE ARCHITECTURAL GRID</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F4EFEA] uppercase">
            GREAT DESIGN IS WHERE <br />
            <span className="text-[#C8A261]">FUNCTION MEETS BEAUTY.</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#C4B5A5] max-w-xl mx-auto leading-relaxed font-semibold">
            Data-driven architectural precision, structural working drawings, and rigid quality metrics engineered for Karachi’s premier residential and commercial builds.
          </p>
        </div>

        {/* Live Metrics Grid Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#2D1E16] p-8 rounded-[2.5rem] border border-[#C8A261]/30 shadow-sm">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="text-center p-5 rounded-[2rem] bg-[#1C110B] border border-[#C8A261]/25">
                <Icon className="w-5 h-5 text-[#C8A261] mx-auto mb-2" />
                <div className="font-serif-luxury text-3xl font-extrabold text-[#F4EFEA]">
                  {m.value}
                </div>
                <div className="text-[10px] text-[#C4B5A5] uppercase tracking-widest font-extrabold mt-1">
                  {m.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Data Grid Showcase */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-[#C8A261]/25 pb-4">
            <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#F4EFEA] uppercase">
              Architectural Index & Technical Data Cards
            </h2>
            <span className="text-xs text-[#C8A261] font-bold uppercase tracking-wider bg-[#2D1D16]/60 px-3 py-1 rounded-full border border-[#C8A261]/20">Showing 28 Completed Projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOWCASE_SCENES.map((scene) => (
              <div
                key={scene.id}
                onClick={() => onSelectScene(scene)}
                className="bg-[#2D1E16] border border-[#C8A261]/25 rounded-[2.5rem] overflow-hidden hover:border-[#C8A261]/80 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-video bg-[#1C110B] overflow-hidden">
                  <img
                    src={scene.imageSrc}
                    alt={scene.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#1C110B]/95 border border-[#C8A261]/30 text-[9px] font-bold text-[#F4EFEA] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm animate-fade-in">
                    {scene.specs.area}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-[#C8A261] uppercase tracking-widest block">
                      {scene.category} • {scene.location}
                    </span>
                    <h3 className="font-serif-luxury text-lg font-bold text-[#F4EFEA] group-hover:text-[#C8A261] transition-colors leading-snug">
                      {scene.title}
                    </h3>
                  </div>

                  {/* Technical Specs Compact Table */}
                  <div className="grid grid-cols-2 gap-4 text-[10px] text-[#C4B5A5] pt-3 border-t border-[#C8A261]/15">
                    <div>
                      <span className="text-[#C8A261] font-bold uppercase tracking-wider block mb-0.5">Style</span> 
                      <span className="font-bold text-[#F4EFEA]">{scene.specs.style}</span>
                    </div>
                    <div>
                      <span className="text-[#C8A261] font-bold uppercase tracking-wider block mb-0.5">Handover</span> 
                      <span className="font-bold text-[#F4EFEA]">{scene.specs.completionYear}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs text-[#C8A261] font-bold border-t border-[#C8A261]/15">
                    <span>View Technical Sheet</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
