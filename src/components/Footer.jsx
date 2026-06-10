import React from 'react';

export default function Footer({ onPrivacyClick, onTermsClick, onVisaNavigate, onPricingClick, onHowItWorksClick, onFeaturesClick }) {
  const currentYear = new Date().getFullYear();

  // Prevents jumping to the top of the page for dummy links
  const handleDummyClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Logo & Description */}
          <div className="footer-col brand-col">
            <div className="logo">
              <div className="lm">VP</div>
              <span className="ln">Visazo <strong>Pro</strong></span>
            </div>
            <p className="footer-desc">
              Visazo Pro: Diagnóstico inteligente y asesoría consular de alto nivel para asegurar el éxito de tu visa americana.
            </p>
          </div>

          {/* Column 2: Visas Americanas */}
          <div className="footer-col">
            <h4 className="footer-title">Visas Americanas</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="/visas/turismo" 
                  onClick={(e) => { e.preventDefault(); onVisaNavigate('turismo'); }}
                >
                  Visa de Turismo B1/B2
                </a>
              </li>
              <li>
                <a 
                  href="/visas/estudiante" 
                  onClick={(e) => { e.preventDefault(); onVisaNavigate('estudiante'); }}
                >
                  Visa de Estudiante F1/M1
                </a>
              </li>
              <li>
                <a 
                  href="/visas/trabajo" 
                  onClick={(e) => { e.preventDefault(); onVisaNavigate('trabajo'); }}
                >
                  Visa de Trabajo H1B/L1
                </a>
              </li>
              <li>
                <a 
                  href="/visas" 
                  onClick={(e) => { e.preventDefault(); onVisaNavigate('hub'); }} 
                  className="highlight-link"
                >
                  Conoce todas las visas &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Nuestros Productos */}
          <div className="footer-col">
            <h4 className="footer-title">Nuestros Productos</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="/precios" 
                  onClick={(e) => { e.preventDefault(); onPricingClick(); }}
                >
                  Planes y Precios
                </a>
              </li>
              <li>
                <a 
                  href="/como-funciona" 
                  onClick={(e) => { e.preventDefault(); onHowItWorksClick(); }}
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a 
                  href="/caracteristicas" 
                  onClick={(e) => { e.preventDefault(); onFeaturesClick(); }}
                >
                  Características
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Recursos */}
          <div className="footer-col">
            <h4 className="footer-title">Recursos</h4>
            <ul className="footer-links">
              <li>
                <a href="#blog" onClick={handleDummyClick}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#ayuda" onClick={handleDummyClick}>
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#nosotros" onClick={handleDummyClick}>
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={handleDummyClick}>
                  Contacto
                </a>
              </li>
              <li>
                <a href="#empleos" onClick={handleDummyClick}>
                  Empleos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row: Copyright and Legal Buttons */}
        <div className="footer-bottom">
          <div className="footer-bottom-info">
            <p className="copyright">
              &copy; {currentYear} Visazo Pro. Todos los derechos reservados.
            </p>
            <p className="location">
              <span className="loc-pin">📍</span> Bogotá, Colombia.
            </p>
          </div>
          <div className="footer-bottom-actions">
            <button 
              type="button" 
              className="footer-btn" 
              onClick={onTermsClick}
              aria-label="Términos y condiciones"
            >
              Términos y Condiciones
            </button>
            <button 
              type="button" 
              className="footer-btn" 
              onClick={onPrivacyClick}
              aria-label="Políticas de privacidad"
            >
              Políticas de Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
