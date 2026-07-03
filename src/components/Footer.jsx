import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                <a href="#/visas/turismo">
                  Visa de Turismo B1/B2
                </a>
              </li>
              <li>
                <a href="#/visas/estudiante">
                  Visa de Estudiante F1/M1
                </a>
              </li>
              <li>
                <a href="#/visas/trabajo">
                  Visa de Trabajo H1B/L1
                </a>
              </li>
              <li>
                <a href="#/visas" className="highlight-link">
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
                <a href="#/precios">
                  Planes y Precios
                </a>
              </li>
              <li>
                <a href="#/como-funciona">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#/caracteristicas">
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
                <a href="#/blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="#/ayuda">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#/nosotros">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#/contacto">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#/empleos">
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
            <a 
              href="#/terminos" 
              className="footer-btn text-center block animate-fadeIn"
              aria-label="Términos y condiciones"
              style={{ textDecoration: 'none' }}
            >
              Términos y Condiciones
            </a>
            <a 
              href="#/privacidad" 
              className="footer-btn text-center block animate-fadeIn"
              aria-label="Políticas de privacidad"
              style={{ textDecoration: 'none' }}
            >
              Políticas de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
