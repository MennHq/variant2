import React from 'react';
import { ShowcaseScene } from '../types';
import { X, MapPin, Calendar, Layers, Sparkles, MessageSquare, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface LightboxModalProps {
  scene: ShowcaseScene | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onInquire: (scene: ShowcaseScene) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  scene,
  onClose,
  onNext,
  onPrev,
  onInquire,
}) => {
  if (!scene) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/70 backdrop-blur-2xl animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#DECBB7] border border-[#C8A261]/40 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 bg-[#C5AE95]/50 border-b border-[#C8A261]/20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A67C38] animate-pulse" />
            <div>
              <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#2A1B14]">
                {scene.title}
              </h3>
              <p className="text-[10px] text-[#A67C38] tracking-widest uppercase font-extrabold">
                {scene.category} • {scene.location}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-clay-sand p-2 active:scale-95 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5 text-[#2A1B14]" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
          {/* Image Canvas Container */}
          <div className="lg:col-span-8 bg-black relative flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[550px] overflow-hidden group">
            <img
              src={scene.imageSrc}
              alt={scene.title}
              className="w-full h-full object-contain max-h-[550px]"
            />

            {/* Lightbox Navigation Buttons */}
            {onPrev && (
              <button
                onClick={onPrev}
                className="btn-clay-sand absolute left-3 top-1/2 -translate-y-1/2 p-2.5 active:scale-95 cursor-pointer shadow-md flex items-center justify-center"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5 text-[#A67C38]" />
              </button>
            )}

            {onNext && (
              <button
                onClick={onNext}
                className="btn-clay-sand absolute right-3 top-1/2 -translate-y-1/2 p-2.5 active:scale-95 cursor-pointer shadow-md flex items-center justify-center"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5 text-[#A67C38]" />
              </button>
            )}
          </div>

          {/* Architectural Specs Sidebar */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-[#C5AE95]/15 border-t lg:border-t-0 lg:border-l border-[#C8A261]/20 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A67C38] font-bold">
                  ARCHITECTURAL SUMMARY
                </span>
                <p className="text-xs text-[#503B31] mt-1.5 leading-relaxed font-semibold">
                  {scene.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="space-y-3 pt-3 border-t border-[#C8A261]/15">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#503B31] flex items-center gap-1.5 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#A67C38]" /> Location:
                  </span>
                  <span className="font-bold text-[#2A1B14]">{scene.location}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#503B31] flex items-center gap-1.5 font-bold">
                    <Layers className="w-3.5 h-3.5 text-[#A67C38]" /> Spatial Scale:
                  </span>
                  <span className="font-bold text-[#2A1B14]">{scene.specs.area}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#503B31] flex items-center gap-1.5 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-[#A67C38]" /> Year Handover:
                  </span>
                  <span className="font-bold text-[#2A1B14]">{scene.specs.completionYear}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#503B31] flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#A67C38]" /> Style:
                  </span>
                  <span className="font-bold text-[#2A1B14]">{scene.specs.style}</span>
                </div>
              </div>

              {/* Key Material Palette */}
              <div className="pt-3 border-t border-[#C8A261]/15">
                <span className="text-[10px] uppercase tracking-widest text-[#A67C38] font-bold block mb-2">
                  CURATED MATERIAL PALETTE
                </span>
                <div className="space-y-1.5">
                  {scene.specs.keyMaterials.map((mat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#503B31] font-semibold">
                      <Check className="w-3.5 h-3.5 text-[#A67C38] shrink-0 mt-0.5" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 border-t border-[#C8A261]/20 mt-6">
              <button
                onClick={() => onInquire(scene)}
                className="btn-clay-gold w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs tracking-wider uppercase active:scale-98 transition-all cursor-pointer min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-[#C8A261]" />
                <span>Inquire About This Look</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
