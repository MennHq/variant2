import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface CostEstimatorProps {
  onOpenConsultationModal: (notes?: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenConsultationModal }) => {
  const [sqFt, setSqFt] = useState(2500);
  const [scope, setScope] = useState<'full' | 'living' | 'kitchen' | 'bath' | 'office'>('full');
  const [tier, setTier] = useState<'bespoke' | 'signature' | 'royal'>('signature');

  // Pricing multiplier matrix per sqft in PKR
  const baseRateMap = {
    full: { bespoke: 3800, signature: 6200, royal: 10500 },
    living: { bespoke: 4200, signature: 7100, royal: 11800 },
    kitchen: { bespoke: 5500, signature: 9200, royal: 14500 },
    bath: { bespoke: 6000, signature: 9800, royal: 15800 },
    office: { bespoke: 3200, signature: 5400, royal: 8900 },
  };

  const rate = baseRateMap[scope][tier];
  const totalPKR = sqFt * rate;
  const minPKR = Math.round((totalPKR * 0.92) / 100000) / 10; // in Millions
  const maxPKR = Math.round((totalPKR * 1.1) / 100000) / 10; // in Millions

  // Timeline calculation
  const getTimeline = () => {
    if (sqFt < 1200) return '6 to 8 Weeks';
    if (sqFt < 3000) return '10 to 14 Weeks';
    if (sqFt < 6000) return '16 to 22 Weeks';
    return '24 to 36 Weeks';
  };

  const scopeLabels = {
    full: 'Full Luxury Residence (Bungalow / Villa)',
    living: 'Living Salon & Formal Dining Suite',
    kitchen: 'Chef Marble Kitchen & Pantry',
    bath: 'Master Spa Bath & Wet Suite',
    office: 'Corporate Executive Suite',
  };

  const tierLabels = {
    bespoke: 'Bespoke Modern',
    signature: 'Signature Gold',
    royal: 'Heritage Royal',
  };

  const handleBookWithEstimate = () => {
    const summary = `Estimated Investment: PKR ${minPKR}M - ${maxPKR}M for ${sqFt} sq.ft (${scopeLabels[scope]} - ${tierLabels[tier]} Tier)`;
    onOpenConsultationModal(summary);
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-[#D4BFAB] border-t border-[#C8A261]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5AE95]/60 border border-[#C8A261]/30 text-[#A67C38] text-[10px] uppercase tracking-widest font-extrabold mb-3 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#A67C38]" />
            <span>Interactive Investment Estimator</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#2A1B14] tracking-tight">
            Calculate Architectural Investment Range
          </h2>
          <p className="text-xs sm:text-sm text-[#503B31] mt-3 leading-relaxed font-semibold">
            Select your spatial area, room scope, and finish tier to receive a real-time architectural budget and timeline projection.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#C5AE95]/30 rounded-[2.5rem] border border-[#C8A261]/35 p-6 sm:p-8 shadow-sm">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Square Footage Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold text-[#2A1B14] uppercase tracking-wider">
                  1. Spatial Footprint (Sq. Ft.)
                </label>
                <span className="text-sm font-serif-luxury font-bold text-[#2A1B14] px-4 py-1.5 bg-[#DECBB7] rounded-full border border-[#C8A261]/30 shadow-sm">
                  {sqFt.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full accent-[#A67C38] bg-[#DECBB7] rounded-full h-2 cursor-pointer border border-[#C8A261]/20"
              />
              <div className="flex justify-between text-[10px] text-[#503B31] font-bold mt-2">
                <span>500 sq.ft (Suite)</span>
                <span>2,500 sq.ft (Floor)</span>
                <span>10,000 sq.ft (Bungalow)</span>
              </div>
            </div>

            {/* Scope Selection Buttons */}
            <div>
              <label className="block text-xs font-bold text-[#2A1B14] uppercase tracking-wider mb-3">
                2. Project Architectural Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'full', label: 'Full Luxury Residence' },
                  { id: 'living', label: 'Living & Formal Dining' },
                  { id: 'kitchen', label: 'Chef Marble Kitchen' },
                  { id: 'bath', label: 'Master Spa Suite' },
                  { id: 'office', label: 'Corporate Office' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScope(item.id as any)}
                    className={`py-3 px-4 text-xs font-bold text-left transition-all cursor-pointer min-h-[44px] rounded-full ${
                      scope === item.id
                        ? 'btn-clay-gold scale-[1.02]'
                        : 'btn-clay-sand hover:scale-[1.01]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Tier Selection */}
            <div>
              <label className="block text-xs font-bold text-[#2A1B14] uppercase tracking-wider mb-3">
                3. Interior Specification & Finish Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'bespoke', name: 'Bespoke', note: 'Imported Veneer & Tile' },
                  { id: 'signature', name: 'Signature Gold', note: 'Italian Marble & Walnut' },
                  { id: 'royal', name: 'Heritage Royal', note: 'Full Custom Artisanal' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTier(item.id as any)}
                    className={`py-3.5 px-3 rounded-[1.25rem] text-center transition-all cursor-pointer ${
                      tier === item.id
                        ? 'btn-clay-gold scale-[1.02]'
                        : 'btn-clay-sand hover:scale-[1.01]'
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight">{item.name}</div>
                    <div className={`text-[9px] mt-1 font-bold ${tier === item.id ? 'text-[#18110D]/90' : 'text-[#503B31]/70'}`}>
                      {item.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Output Column */}
          <div className="lg:col-span-5 bg-[#DECBB7] rounded-[2rem] border border-[#C8A261]/35 p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-5">
              <span className="text-[10px] uppercase tracking-widest text-[#A67C38] font-bold block">
                ESTIMATED ARCHITECTURAL INVESTMENT
              </span>

              {/* Price Tag */}
              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#2A1B14]">
                  PKR {minPKR}M - {maxPKR}M
                </div>
                <div className="text-[11px] text-[#A67C38] mt-1 font-extrabold tracking-wider uppercase">
                  Approx. USD ${Math.round((totalPKR * 0.95) / 280).toLocaleString()} - ${Math.round((totalPKR * 1.05) / 280).toLocaleString()}
                </div>
              </div>

              {/* Estimated Handover Timeline */}
              <div className="flex items-center gap-2.5 text-xs text-[#503B31] p-3.5 rounded-full bg-[#C5AE95]/30 border border-[#C8A261]/20 font-semibold">
                <Clock className="w-4 h-4 text-[#A67C38]" />
                <span>Estimated Handover: <strong className="text-[#2A1B14] font-bold">{getTimeline()}</strong></span>
              </div>

              {/* Key Architectural Deliverables */}
              <div className="space-y-2.5 pt-3 border-t border-[#C8A261]/15">
                <span className="text-[10px] uppercase tracking-widest text-[#A67C38] font-bold block">
                  INCLUDED STUDIO DELIVERABLES:
                </span>
                {[
                  '3D Ultra-HD Photorealistic Renderings',
                  'Full Structural & Electrical Working Drawings',
                  'Bill of Quantities (BOQ) & Material Spec Sheets',
                  'Dedicated Senior Architect Site Supervision',
                  'Turnkey Handover with 1-Year Structural Guarantee',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#503B31] font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#A67C38] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Action */}
            <div className="pt-6">
              <button
                onClick={handleBookWithEstimate}
                className="btn-clay-gold w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs tracking-wider uppercase hover:brightness-110 active:scale-98 transition-all cursor-pointer min-h-[46px]"
              >
                <span>Lock Quote & Book Studio</span>
                <ArrowRight className="w-4 h-4 text-[#18110D]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
