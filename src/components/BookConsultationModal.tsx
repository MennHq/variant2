import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageSquare, Phone, MapPin, Send } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTitle?: string;
}

export const BookConsultationModal: React.FC<BookConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTitle,
}) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: 'Full Luxury Residence',
    location: 'DHA Phase 8, Karachi',
    approxAreaSqFt: 3500,
    budgetRange: 'PKR 15M - 30M (Signature Luxury)',
    preferredDate: '',
    notes: preselectedTitle ? `Inquiry regarding design style: "${preselectedTitle}"` : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirectSubmit = () => {
    const text = `*New Studio Consultation Request*%0A` +
      `*Name:* ${formData.name || 'Not provided'}%0A` +
      `*Phone:* ${formData.phone || 'Not provided'}%0A` +
      `*Project Type:* ${formData.projectType}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Approx Area:* ${formData.approxAreaSqFt} sq.ft%0A` +
      `*Budget Range:* ${formData.budgetRange}%0A` +
      `*Preferred Date:* ${formData.preferredDate || 'Flexible'}%0A` +
      `*Notes:* ${formData.notes || 'N/A'}`;

    window.open(`https://wa.me/923008295555?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#DECBB7] border border-[#C8A261]/40 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 bg-[#C5AE95]/50 border-b border-[#C8A261]/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C8A261]/15 border border-[#C8A261]/40 flex items-center justify-center text-[#A67C38]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg font-bold text-[#2A1B14]">
                Reserve Architectural Consultation
              </h3>
              <p className="text-[10px] text-[#A67C38] uppercase tracking-widest font-extrabold">
                Al Hammad Interiors & Architects • Karachi Studio
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-[#503B31] hover:text-[#2A1B14] hover:bg-[#C5AE95]/80 border border-[#C8A261]/20 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C8A261]/20 border border-[#C8A261] text-[#A67C38] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-[#2A1B14]">
                Consultation Request Received
              </h4>
              <p className="text-xs text-[#503B31] max-w-md mx-auto leading-relaxed font-semibold">
                Thank you. A Senior Principal Architect from Al Hammad Interiors will contact you within 2 hours to confirm your appointment at our DHA Phase 6 Studio.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirectSubmit}
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-full text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  style={{
                    background: '#25D366',
                    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.5), inset -3px -3px 6px rgba(18, 120, 50, 0.3)'
                  }}
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Send via WhatsApp Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="btn-clay-sand py-3 px-6 text-xs font-bold uppercase cursor-pointer active:scale-95"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {preselectedTitle && (
                <div className="p-3 rounded-xl bg-[#C5AE95]/50 border border-[#C8A261]/30 text-xs text-[#A67C38] flex items-center gap-2">
                  <span className="font-bold">Selected Concept:</span>
                  <span className="text-[#2A1B14] font-bold">{preselectedTitle}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#503B31] mb-1 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Tariq Mansoor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#C5AE95]/20 border border-[#C8A261]/40 rounded-full px-4 py-3 text-xs text-[#2A1B14] focus:border-[#C8A261] focus:ring-1 focus:ring-[#C8A261]/50 focus:outline-none min-h-[44px] placeholder-[#503B31]/55"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#503B31] mb-1 font-bold">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#C5AE95]/20 border border-[#C8A261]/40 rounded-full px-4 py-3 text-xs text-[#2A1B14] focus:border-[#C8A261] focus:ring-1 focus:ring-[#C8A261]/50 focus:outline-none min-h-[44px] placeholder-[#503B31]/55"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#503B31] mb-1 font-bold">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#C5AE95]/20 border border-[#C8A261]/40 rounded-full px-4 py-3 text-xs text-[#2A1B14] focus:border-[#C8A261] focus:ring-1 focus:ring-[#C8A261]/50 focus:outline-none min-h-[44px]"
                  >
                    <option value="Full Luxury Residence">Full Luxury Residence (Bungalow)</option>
                    <option value="Penthouse & Sky Suite">Penthouse & Sky Suite</option>
                    <option value="Living Salon & Dining">Living Salon & Dining Suite</option>
                    <option value="Chef Kitchen & Dining">Chef Marble Kitchen</option>
                    <option value="Master Spa Bath">Master Spa Bath Suite</option>
                    <option value="Corporate Executive Office">Corporate Executive Office</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#503B31] mb-1 font-bold">
                    Property Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#C5AE95]/20 border border-[#C8A261]/40 rounded-full px-4 py-3 text-xs text-[#2A1B14] focus:border-[#C8A261] focus:ring-1 focus:ring-[#C8A261]/50 focus:outline-none min-h-[44px]"
                  >
                    <option value="DHA Phase 8, Karachi">DHA Phase 8, Karachi</option>
                    <option value="DHA Phase 6, Karachi">DHA Phase 6, Karachi</option>
                    <option value="Clifton Blocks 1-9, Karachi">Clifton, Karachi</option>
                    <option value="KDA Scheme 1, Karachi">KDA Scheme 1, Karachi</option>
                    <option value="PECHS / Sindhi Muslim">PECHS / Sindhi Muslim, Karachi</option>
                    <option value="Navy Housing / Creek Vistas">Navy Housing / Creek Vistas</option>
                    <option value="Bahria Town / Other">Bahria Town / Other Location</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#503B31] mb-1 font-bold">
                  Estimated Investment Tier
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full bg-[#C5AE95]/20 border border-[#C8A261]/40 rounded-full px-4 py-3 text-xs text-[#2A1B14] focus:border-[#C8A261] focus:ring-1 focus:ring-[#C8A261]/50 focus:outline-none min-h-[44px]"
                >
                  <option value="PKR 8M - 15M (Bespoke Interior)">PKR 8 Million - 15 Million (Bespoke Interior)</option>
                  <option value="PKR 15M - 30M (Signature Luxury)">PKR 15 Million - 30 Million (Signature Luxury)</option>
                  <option value="PKR 30M - 60M (Royal Architectural)">PKR 30 Million - 60 Million (Royal Architectural)</option>
                  <option value="PKR 60M+ (Monumental Estate)">PKR 60 Million+ (Monumental Estate)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#503B31] mb-1 font-bold">
                  Additional Notes / Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Share details about timber preferences, marble work, timeline, or floor plans..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#C5AE95]/20 border border-[#C8A261]/40 rounded-2xl p-3.5 text-xs text-[#2A1B14] focus:border-[#C8A261] focus:ring-1 focus:ring-[#C8A261]/50 focus:outline-none placeholder-[#503B31]/55"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirectSubmit}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-white font-bold text-xs uppercase cursor-pointer min-h-[48px]"
                  style={{
                    background: '#25D366',
                    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.5), inset -3px -3px 6px rgba(18, 120, 50, 0.3)'
                  }}
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>WhatsApp Fast-Track</span>
                </button>

                <button
                  type="submit"
                  className="btn-clay-gold w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-4 font-bold text-xs uppercase cursor-pointer min-h-[48px]"
                >
                  <Send className="w-4 h-4 text-[#C8A261]" />
                  <span>Submit Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
