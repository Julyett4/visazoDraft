import React, { useState } from 'react';

export default function Header({
  minimal = false,
  onHomeClick,
  onHowItWorksClick,
  onFeaturesClick,
  onPricingClick,
  onVisasHubClick,
  onBlogClick,
  onStartDiagnostic
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (callback) => {
    if (callback) callback();
    setMobileMenuOpen(false);
  };
  return (
    <header className="site-header w-full bg-transparent flex justify-center">
      {/* maxWidth de 1100px inline para garantizar la alineación matemática con el Footer */}
      <div 
        className="mx-auto flex h-20 w-full items-center justify-between px-6"
        style={{ maxWidth: '1100px' }}
      >
        
        {/* LOGO (Consistente con Footer) */}
        <div 
          onClick={() => handleLinkClick(onHomeClick)} 
          className="logo cursor-pointer transition-transform hover:scale-[1.01]"
        >
          <div className="lm">VP</div>
          <span className="ln">Visazo <strong>Pro</strong></span>
        </div>

        {/* NAVEGACIÓN EN CASO DE MODO COMPLETO */}
        {!minimal ? (
          <>
            {/* Desktop Navigation Menu (Consistente con los estilos de enlaces del Footer) */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => handleLinkClick(onHowItWorksClick)}
                className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                ¿Cómo funciona?
              </button>
              <button 
                onClick={() => handleLinkClick(onFeaturesClick)}
                className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Características
              </button>
              <button 
                onClick={() => handleLinkClick(onPricingClick)}
                className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Precios
              </button>
              <button 
                onClick={() => handleLinkClick(onVisasHubClick)}
                className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Hub de Visas
              </button>
              <button 
                onClick={() => handleLinkClick(onBlogClick)}
                className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Blog
              </button>
            </nav>

            {/* Desktop Action Buttons (Refinado sin el badge redundante para máxima limpieza) */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => handleLinkClick(onStartDiagnostic)}
                className="footer-btn cursor-pointer"
                style={{
                  background: 'var(--blue)',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '13px',
                  padding: '8px 20px'
                }}
              >
                Iniciar Diagnóstico
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={toggleMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors md:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </>
        ) : (
          /* MODO MINIMALISTA (Durante el cuestionario - Consistente con el hbadge original) */
          <div className="flex items-center gap-3">
            <div className="hbadge">
              🔒 Diagnóstico confidencial
            </div>
          </div>
        )}
      </div>

      {/* MOBILE MENU PANEL */}
      {!minimal && mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#060f1e]/98 backdrop-blur-lg border-b border-white/5 px-6 py-6 flex flex-col gap-4 animate-fadeIn shadow-2xl">
          <button 
            onClick={() => handleLinkClick(onHowItWorksClick)}
            className="text-left text-base font-medium text-white/60 hover:text-white transition-colors py-2 border-b border-white/5 cursor-pointer"
          >
            ¿Cómo funciona?
          </button>
          <button 
            onClick={() => handleLinkClick(onFeaturesClick)}
            className="text-left text-base font-medium text-white/60 hover:text-white transition-colors py-2 border-b border-white/5 cursor-pointer"
          >
            Características
          </button>
          <button 
            onClick={() => handleLinkClick(onPricingClick)}
            className="text-left text-base font-medium text-white/60 hover:text-white transition-colors py-2 border-b border-white/5 cursor-pointer"
          >
            Precios
          </button>
          <button 
            onClick={() => handleLinkClick(onVisasHubClick)}
            className="text-left text-base font-medium text-white/60 hover:text-white transition-colors py-2 border-b border-white/5 cursor-pointer"
          >
            Hub de Visas
          </button>
          <button 
            onClick={() => handleLinkClick(onBlogClick)}
            className="text-left text-base font-medium text-white/60 hover:text-white transition-colors py-2 border-b border-white/5 cursor-pointer"
          >
            Blog
          </button>
          
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/40 px-1">
              🔒 Diagnóstico 100% confidencial
            </div>
            <button
              onClick={() => handleLinkClick(onStartDiagnostic)}
              className="w-full text-center py-3 rounded-full text-sm font-semibold text-white cursor-pointer"
              style={{
                background: 'var(--blue)',
                border: 'none'
              }}
            >
              Iniciar Diagnóstico
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
