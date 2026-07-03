import React, { useState } from 'react';
import { VISAS_DATA, ALL_VISAS_DIRECTORY } from '../data/visasData';

export default function VisasHub({ onNavigate, onHomeClick, onStartDiagnostic }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the complete directory based on search query
  const filteredDirectory = ALL_VISAS_DIRECTORY.filter((visa) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      visa.code.toLowerCase().includes(query) ||
      visa.name.toLowerCase().includes(query) ||
      visa.purpose.toLowerCase().includes(query)
    );
  });

  return (
    <div className="visas-hub">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="#/" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Visas Americanas</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Documentación Oficial de Visas</span>
        <h1 className="hub-title">Guías de Visas Americanas</h1>
        <p className="hub-subtitle">
          Selecciona tu categoría de interés para conocer requisitos y procesos detallados, o busca tu tipo de visa en el directorio completo A-Z.
        </p>
      </div>

      {/* Search Bar */}
      <div className="visa-search-box">
        <svg 
          className="search-icon-svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          className="visa-search-input" 
          placeholder="Busca por tipo (ej. Turismo, Estudiante, Novios, K-1, J-1)..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Main Visas Section (Featured detailed guides) */}
      {!searchQuery && (
        <>
          <div className="visas-grid">
            {Object.values(VISAS_DATA).map((visa) => (
              <div key={visa.id} className="visa-card">
                <div className="visa-card-icon">{visa.emoji}</div>
                <div className="visa-card-body">
                  <h2 className="visa-card-title">{visa.title}</h2>
                  <p className="visa-card-desc">{visa.shortDescription}</p>
                  
                  <div className="visa-card-meta">
                    <div className="meta-item">
                      <span className="meta-label">Costo arancel:</span>
                      <span className="meta-value">{visa.cost.split(' (')[0]}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Vigencia:</span>
                      <span className="meta-value">{visa.validity.split(' (')[0]}</span>
                    </div>
                  </div>
                </div>
                
                <div className="visa-card-footer">
                  <button 
                    type="button" 
                    className="visa-card-btn"
                    onClick={() => onNavigate(visa.id)}
                  >
                    Ver requisitos y proceso &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Directory Section (Full list of visas) */}
      <div className="directory-section">
        <h2 className="directory-title">
          {searchQuery ? 'Resultados de Búsqueda' : 'Directorio de Visas de No Inmigrante (A-Z)'}
        </h2>
        <p className="directory-subtitle">
          {searchQuery 
            ? `Se encontraron ${filteredDirectory.length} categorías coincidentes en el directorio oficial.` 
            : 'Listado completo de todas las categorías oficiales de visas americanas temporales.'}
        </p>

        <div className="directory-grid">
          {filteredDirectory.length > 0 ? (
            filteredDirectory.map((visa, idx) => (
              <div key={idx} className="directory-card">
                <div className="directory-header">
                  <span className="directory-badge">{visa.code}</span>
                  <h3 className="directory-name">{visa.name}</h3>
                </div>
                <p className="directory-purpose">{visa.purpose}</p>
                <button 
                  type="button" 
                  className="directory-btn"
                  onClick={() => onStartDiagnostic('Especial')}
                >
                  Iniciar Asesoría Consular &rarr;
                </button>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No encontramos categorías que coincidan con tu búsqueda.</p>
              <button 
                type="button" 
                className="btn bpri bblk no-results-btn"
                onClick={() => onStartDiagnostic('Especial')}
              >
                Solicitar Consulta Especializada
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA back to flow */}
      <div className="hub-cta-box">
        <h3 className="hub-cta-title">¿Quieres medir tus probabilidades de aprobación?</h3>
        <p className="hub-cta-text">
          Evalúa tu perfil de arraigo e historial de viajes con nuestro simulador para saber si estás listo para presentarte al cónsul.
        </p>
        <button 
          type="button" 
          className="btn bpri bblk" 
          onClick={onHomeClick}
        >
          Comenzar Diagnóstico Gratis &rarr;
        </button>
      </div>
    </div>
  );
}
