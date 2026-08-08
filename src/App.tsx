import React, { useState, useEffect } from 'react';
import { ConceptVariant, ShowcaseScene } from './types';
import { SHOWCASE_SCENES } from './data/showcases';
import { HeaderNav } from './components/HeaderNav';
import { LightboxModal } from './components/LightboxModal';
import { BookConsultationModal } from './components/BookConsultationModal';
import Silk from './components/Silk';

import { MasterBentoView } from './components/OptionViews/MasterBentoView';
import { Option1GalleryView } from './components/OptionViews/Option1GalleryView';
import { Option2GridView } from './components/OptionViews/Option2GridView';
import { Option3EspressoView } from './components/OptionViews/Option3EspressoView';
import { PortfolioView } from './components/PortfolioView';

export default function App() {
  const [currentVariant, setCurrentVariant] = useState<ConceptVariant>('master');
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');
  const [lightboxScene, setLightboxScene] = useState<ShowcaseScene | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);
  const [consultationPreselectedTitle, setConsultationPreselectedTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleLocation = () => {
      if (window.location.pathname === '/portfolio' || window.location.hash === '#portfolio') {
        setCurrentView('portfolio');
      } else {
        setCurrentView('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  const navigateToPortfolio = () => {
    setCurrentView('portfolio');
    try {
      window.history.pushState({}, '', '/portfolio');
    } catch {
      window.location.hash = '#portfolio';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    try {
      window.history.pushState({}, '', '/');
    } catch {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultationModal = (preselectedTitle?: string) => {
    setConsultationPreselectedTitle(preselectedTitle);
    setConsultationModalOpen(true);
  };

  const handleInquireFromLightbox = (scene: ShowcaseScene) => {
    setLightboxScene(null);
    handleOpenConsultationModal(`Inquiry regarding look: "${scene.title}" (${scene.location})`);
  };

  const handleNextLightbox = () => {
    if (!lightboxScene) return;
    const currentIndex = SHOWCASE_SCENES.findIndex((s) => s.id === lightboxScene.id);
    const nextIndex = (currentIndex + 1) % SHOWCASE_SCENES.length;
    setLightboxScene(SHOWCASE_SCENES[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxScene) return;
    const currentIndex = SHOWCASE_SCENES.findIndex((s) => s.id === lightboxScene.id);
    const prevIndex = (currentIndex - 1 + SHOWCASE_SCENES.length) % SHOWCASE_SCENES.length;
    setLightboxScene(SHOWCASE_SCENES[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#241812] text-[#F4EFEA] font-sans selection:bg-[#C8A261] selection:text-[#18110D] relative">
      {/* Premium Silk Flowing Background Layer */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Silk
          speed={9.9}
          scale={1.1}
          color="#3D291E"
          noiseIntensity={0.8}
          rotation={0}
        />
      </div>

      {/* Main Studio Header Navigation */}
      <HeaderNav
        onOpenConsultationModal={() => handleOpenConsultationModal()}
        onNavigatePortfolio={navigateToPortfolio}
        onNavigateHome={navigateToHome}
      />

      {/* Active View / Route */}
      <main className={`relative z-10 ${currentView === 'portfolio' ? 'pt-24 sm:pt-28' : ''}`}>
        {currentView === 'portfolio' ? (
          <PortfolioView
            onSelectScene={setLightboxScene}
            onOpenConsultationModal={handleOpenConsultationModal}
            onBackToHome={navigateToHome}
          />
        ) : (
          <>
            {currentVariant === 'master' && (
              <MasterBentoView
                onSelectScene={setLightboxScene}
                onOpenConsultationModal={handleOpenConsultationModal}
                onNavigatePortfolio={navigateToPortfolio}
              />
            )}

            {currentVariant === 'option1' && (
              <Option1GalleryView
                onSelectScene={setLightboxScene}
                onOpenConsultationModal={() => handleOpenConsultationModal()}
              />
            )}

            {currentVariant === 'option2' && (
              <Option2GridView
                onSelectScene={setLightboxScene}
                onOpenConsultationModal={() => handleOpenConsultationModal()}
              />
            )}

            {currentVariant === 'option3' && (
              <Option3EspressoView
                onSelectScene={setLightboxScene}
                onOpenConsultationModal={() => handleOpenConsultationModal()}
              />
            )}
          </>
        )}
      </main>

      {/* Image Lightbox Modal */}
      <LightboxModal
        scene={lightboxScene}
        onClose={() => setLightboxScene(null)}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
        onInquire={handleInquireFromLightbox}
      />

      {/* Book Consultation Modal */}
      <BookConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedTitle={consultationPreselectedTitle}
      />
    </div>
  );
}
