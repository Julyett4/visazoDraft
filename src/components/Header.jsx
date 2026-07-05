import React, { useState, useEffect, useRef } from 'react';

export default function Header({
  minimal = false,
  onStartDiagnostic
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [a11yMenuOpen, setA11yMenuOpen] = useState(false);
  const a11yRef = useRef(null);

  // Load preferences from localStorage
  const [highContrast, setHighContrast] = useState(() => localStorage.getItem('hc') === 'true');
  const [grayscale, setGrayscale] = useState(() => localStorage.getItem('gs') === 'true');
  const [largeText, setLargeText] = useState(() => localStorage.getItem('lt') === 'true');
  const [textSpacing, setTextSpacing] = useState(() => localStorage.getItem('ts') === 'true');
  const [dyslexicFont, setDyslexicFont] = useState(() => localStorage.getItem('df') === 'true');
  const [underlineLinks, setUnderlineLinks] = useState(() => localStorage.getItem('ul') === 'true');
  const [highlightInteractives, setHighlightInteractives] = useState(() => localStorage.getItem('hi') === 'true');
  const [readingGuide, setReadingGuide] = useState(() => localStorage.getItem('rg') === 'true');
  const [stopAnimations, setStopAnimations] = useState(() => localStorage.getItem('sa') === 'true');
  const [largeCursor, setLargeCursor] = useState(() => localStorage.getItem('lc') === 'true');

  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-high-contrast', highContrast);
    localStorage.setItem('hc', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-grayscale', grayscale);
    localStorage.setItem('gs', grayscale);
  }, [grayscale]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-large-text', largeText);
    localStorage.setItem('lt', largeText);
  }, [largeText]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-text-spacing', textSpacing);
    localStorage.setItem('ts', textSpacing);
  }, [textSpacing]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-dyslexic-font', dyslexicFont);
    localStorage.setItem('df', dyslexicFont);
  }, [dyslexicFont]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-underline-links', underlineLinks);
    localStorage.setItem('ul', underlineLinks);
  }, [underlineLinks]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-highlight-interactives', highlightInteractives);
    localStorage.setItem('hi', highlightInteractives);
  }, [highlightInteractives]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-reading-guide', readingGuide);
    localStorage.setItem('rg', readingGuide);
  }, [readingGuide]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-stop-animations', stopAnimations);
    localStorage.setItem('sa', stopAnimations);
  }, [stopAnimations]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-large-cursor', largeCursor);
    localStorage.setItem('lc', largeCursor);
  }, [largeCursor]);

  useEffect(() => {
    if (!readingGuide) return;
    const handleMouseMove = (event) => {
      setMouseY(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [readingGuide]);

  // Click outside listener for closing accessibility dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (a11yRef.current && !a11yRef.current.contains(event.target)) {
        setA11yMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    const nextVal = !mobileMenuOpen;
    setMobileMenuOpen(nextVal);
    if (nextVal) {
      setA11yMenuOpen(false);
    }
  };

  const handleLinkClick = (callback) => {
    if (callback) callback();
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header site-header relative z-50 w-full bg-transparent flex justify-center">
      {/* maxWidth de 1100px inline para garantizar la alineación matemática con el Footer */}
      <div 
        className="mx-auto flex h-20 w-full items-center justify-between px-6"
        style={{ maxWidth: '1100px' }}
      >
        
        {/* LOGO (Consistente con Footer) */}
        <a 
          href="#/" 
          onClick={() => setMobileMenuOpen(false)}
          className="logo cursor-pointer transition-transform hover:scale-[1.01]"
        >
          <div className="lm">VP</div>
          <span className="ln">Visazo <strong>Pro</strong></span>
        </a>

        {/* RIGHT FLEX PANEL */}
        <div className="flex items-center gap-3">
          {/* NAVEGACIÓN EN CASO DE MODO COMPLETO */}
          {!minimal ? (
            <>
              {/* Desktop Navigation Menu (Consistente con los estilos de enlaces del Footer) */}
              <nav className="hidden lg:flex items-center gap-8">
                <a 
                  href="#/como-funciona"
                  className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200"
                >
                  ¿Cómo funciona?
                </a>
                <a 
                  href="#/caracteristicas"
                  className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200"
                >
                  Características
                </a>
                <a 
                  href="#/precios"
                  className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200"
                >
                  Precios
                </a>
                <a 
                  href="#/visas"
                  className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200"
                >
                  Hub de Visas
                </a>
                <a 
                  href="#/blog"
                  className="text-[14.5px] font-medium text-white/55 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </nav>

              {/* Desktop Action Buttons */}
              <div className="hidden lg:flex items-center" style={{ marginLeft: '48px', marginRight: '48px' }}>
                <button
                  type="button"
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
                type="button"
                onClick={toggleMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors lg:hidden cursor-pointer"
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

          {/* ACCESSIBILITY PANEL WIDGET */}
          <div className="relative flex items-center" ref={a11yRef}>
            <button
              type="button"
              onClick={() => {
                const nextVal = !a11yMenuOpen;
                setA11yMenuOpen(nextVal);
                if (nextVal) {
                  setMobileMenuOpen(false);
                }
              }}
              className="a11y-toggle-btn flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              aria-label="Panel de opciones de accesibilidad"
              title="Ajustes de accesibilidad"
              aria-expanded={a11yMenuOpen}
              aria-haspopup="true"
            >
              <svg className="h-4.5 w-4.5" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z"/>
              </svg>
            </button>

            {a11yMenuOpen && (
              <div 
                className="a11y-dropdown fixed left-1/2 -translate-x-1/2 top-[84px] lg:absolute lg:left-auto lg:right-0 lg:translate-x-0 lg:top-[50px] z-50 w-[90vw] max-w-[340px] lg:w-80 rounded-2xl animate-fadeIn"
                style={{ 
                  direction: 'ltr',
                  backgroundColor: 'rgba(6, 15, 30, 0.98)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '20px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
                }}
              >
                <div className="flex items-center justify-between pb-3 mb-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span className="text-xs font-bold text-white/90 tracking-wider uppercase">
                    Opciones de Accesibilidad
                  </span>
                  <button 
                    type="button" 
                    onClick={() => setA11yMenuOpen(false)}
                    className="text-white/40 hover:text-white transition-colors cursor-pointer focus:outline-none"
                    aria-label="Cerrar panel de accesibilidad"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col gap-2.5 pr-1.5" style={{ maxHeight: '380px', overflowY: 'auto' }}>
                  {/* Option 1: High Contrast */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Alto contraste</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Ajusta filtros de visibilidad</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={highContrast}
                      onClick={() => setHighContrast(!highContrast)}
                      className={`a11y-switch ${highContrast ? 'active' : ''}`}
                      aria-label="Alternar alto contraste"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 2: Grayscale */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Escala de grises</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Visualización monocromática</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={grayscale}
                      onClick={() => setGrayscale(!grayscale)}
                      className={`a11y-switch ${grayscale ? 'active' : ''}`}
                      aria-label="Alternar escala de grises"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 3: Large Text */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Texto más grande</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Aumenta el tamaño de la letra</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={largeText}
                      onClick={() => setLargeText(!largeText)}
                      className={`a11y-switch ${largeText ? 'active' : ''}`}
                      aria-label="Alternar texto más grande"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 4: Text Spacing */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Espaciado de texto</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Aumenta separación de letras</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={textSpacing}
                      onClick={() => setTextSpacing(!textSpacing)}
                      className={`a11y-switch ${textSpacing ? 'active' : ''}`}
                      aria-label="Alternar espaciado de texto"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 5: Dyslexic Font */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Fuente dislexia</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Usa tipografía OpenDyslexic</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={dyslexicFont}
                      onClick={() => setDyslexicFont(!dyslexicFont)}
                      className={`a11y-switch ${dyslexicFont ? 'active' : ''}`}
                      aria-label="Alternar fuente para dislexia"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 6: Underline Links */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Subrayar enlaces</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Añade subrayado a hipervínculos</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={underlineLinks}
                      onClick={() => setUnderlineLinks(!underlineLinks)}
                      className={`a11y-switch ${underlineLinks ? 'active' : ''}`}
                      aria-label="Alternar subrayado de enlaces"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 7: Highlight Interactives */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Resaltar interactivos</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Borde brillante en botones</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={highlightInteractives}
                      onClick={() => setHighlightInteractives(!highlightInteractives)}
                      className={`a11y-switch ${highlightInteractives ? 'active' : ''}`}
                      aria-label="Alternar resaltar interactivos"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 8: Reading Guide */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Guía de lectura</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Regla horizontal de enfoque</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={readingGuide}
                      onClick={() => setReadingGuide(!readingGuide)}
                      className={`a11y-switch ${readingGuide ? 'active' : ''}`}
                      aria-label="Alternar guía de lectura"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 9: Pause Animations */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Pausar animaciones</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Detiene movimiento del fondo</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={stopAnimations}
                      onClick={() => setStopAnimations(!stopAnimations)}
                      className={`a11y-switch ${stopAnimations ? 'active' : ''}`}
                      aria-label="Alternar pausar animaciones"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>

                  {/* Option 10: Large Cursor */}
                  <div 
                    className="flex items-center justify-between hover:bg-white/10 hover:border-white/45 transition-all duration-150"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)'
                    }}
                  >
                    <div>
                      <span className="text-xs font-semibold text-white/95 block">Cursor gigante</span>
                      <span className="text-[10px] text-white/40 block mt-0.5">Cursor más grande y visible</span>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={largeCursor}
                      onClick={() => setLargeCursor(!largeCursor)}
                      className={`a11y-switch ${largeCursor ? 'active' : ''}`}
                      aria-label="Alternar cursor gigante"
                    >
                      <div className="a11y-switch-handle"></div>
                    </button>
                  </div>
                </div>
                
                <div className="pt-3.5 mt-3.5 flex justify-between items-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setHighContrast(false);
                      setGrayscale(false);
                      setLargeText(false);
                      setTextSpacing(false);
                      setDyslexicFont(false);
                      setUnderlineLinks(false);
                      setHighlightInteractives(false);
                      setReadingGuide(false);
                      setStopAnimations(false);
                      setLargeCursor(false);
                    }}
                    className="text-[11px] font-semibold text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Restablecer ajustes
                  </button>
                  <span className="text-[10px] text-white/30">Visazo Pro</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL (Subtle Full-Width Dropdown) */}
      {!minimal && mobileMenuOpen && (
        <div 
          className="lg:hidden absolute top-[78px] left-0 w-full z-50 bg-[#060f1e]/98 backdrop-blur-xl border-b border-white/10 px-6 pt-5 flex flex-col gap-3 shadow-2xl animate-fadeIn"
          style={{ paddingBottom: '28px' }}
        >
          <a 
            href="#/como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-4 rounded-xl bg-transparent border border-white/25 text-white/80 active:bg-white/5 active:border-white focus:outline-none transition-all text-sm font-semibold block"
            style={{ background: 'transparent', paddingTop: '16px', paddingBottom: '16px' }}
          >
            ¿Cómo funciona?
          </a>
          <a 
            href="#/caracteristicas"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-4 rounded-xl bg-transparent border border-white/25 text-white/80 active:bg-white/5 active:border-white focus:outline-none transition-all text-sm font-semibold block"
            style={{ background: 'transparent', paddingTop: '16px', paddingBottom: '16px' }}
          >
            Características
          </a>
          <a 
            href="#/precios"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-4 rounded-xl bg-transparent border border-white/25 text-white/80 active:bg-white/5 active:border-white focus:outline-none transition-all text-sm font-semibold block"
            style={{ background: 'transparent', paddingTop: '16px', paddingBottom: '16px' }}
          >
            Precios
          </a>
          <a 
            href="#/visas"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-4 rounded-xl bg-transparent border border-white/25 text-white/80 active:bg-white/5 active:border-white focus:outline-none transition-all text-sm font-semibold block"
            style={{ background: 'transparent', paddingTop: '16px', paddingBottom: '16px' }}
          >
            Hub de Visas
          </a>
          <a 
            href="#/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-4 rounded-xl bg-transparent border border-white/25 text-white/80 active:bg-white/5 active:border-white focus:outline-none transition-all text-sm font-semibold block"
            style={{ background: 'transparent', paddingTop: '16px', paddingBottom: '16px' }}
          >
            Blog
          </a>
          
          <div className="pt-5 mt-3 border-t border-white/5">
            <button
              type="button"
              onClick={() => handleLinkClick(onStartDiagnostic)}
              className="btn bpri bblk py-3.5 text-sm font-semibold focus:outline-none cursor-pointer"
            >
              Comenzar diagnóstico &rarr;
            </button>
          </div>
        </div>
      )}
      {readingGuide && (
        <div 
          style={{
            position: 'fixed',
            top: `${mouseY}px`,
            left: 0,
            right: 0,
            height: '24px',
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            borderTop: '1px solid rgba(37, 99, 235, 0.5)',
            borderBottom: '1px solid rgba(37, 99, 235, 0.5)',
            boxShadow: '0 0 15px rgba(37, 99, 235, 0.15)',
            pointerEvents: 'none',
            zIndex: 99999,
            transform: 'translateY(-50%)',
            transition: 'top 0.05s ease-out'
          }}
        />
      )}
    </header>
  );
}
