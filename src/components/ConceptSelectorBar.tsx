import React from 'react';
import { ConceptVariant } from '../types';
import { Layers, Frame, Grid, Sparkles } from 'lucide-react';

interface ConceptSelectorBarProps {
  currentVariant: ConceptVariant;
  onSelectVariant: (variant: ConceptVariant) => void;
}

export const ConceptSelectorBar: React.FC<ConceptSelectorBarProps> = ({
  currentVariant,
  onSelectVariant,
}) => {
  const options = [
    {
      id: 'master' as ConceptVariant,
      label: 'Master Combined Bento',
      subtitle: 'Warm Travertine Full-Length',
      icon: Layers,
    },
    {
      id: 'option1' as ConceptVariant,
      label: 'Option 01: The Gallery',
      subtitle: 'Sand Travertine & Arch Framing',
      icon: Frame,
    },
    {
      id: 'option2' as ConceptVariant,
      label: 'Option 02: Architectural Grid',
      subtitle: 'Structured Metrics & Blueprint',
      icon: Grid,
    },
    {
      id: 'option3' as ConceptVariant,
      label: 'Option 03: Luxury Residence',
      subtitle: 'Travertine Sand Aesthetics',
      icon: Sparkles,
    },
  ];

  return (
    <div className="sticky top-0 z-40 bg-[#1C110B]/95 backdrop-blur-xl border-b border-[#C8A261]/25 shadow-md shadow-[#18110D]/5">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-3 overflow-x-auto hide-scrollbar py-1 touch-pan-x">
          <div className="flex items-center gap-2 shrink-0 pr-3 border-r border-[#C8A261]/20">
            <span className="w-2 h-2 rounded-full bg-[#C8A261] animate-pulse" />
            <span className="text-[10px] tracking-widest uppercase font-extrabold text-[#C8A261]">
              LAYOUT VARIANTS
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isActive = currentVariant === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => onSelectVariant(opt.id)}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-xs transition-all duration-200 cursor-pointer min-h-[40px] ${
                    isActive
                      ? 'btn-clay-gold scale-[1.02]'
                      : 'btn-clay-brown hover:scale-[1.01] hover:bg-[#3E291F]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#C8A261]' : 'text-[#C4B5A5]'}`} />
                  <div className="text-left whitespace-nowrap">
                    <div className="font-bold leading-tight">{opt.label}</div>
                    <div className={`text-[9px] ${isActive ? 'text-[#F4EFEA]/95 font-bold' : 'text-[#C4B5A5]/75'}`}>
                      {opt.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
