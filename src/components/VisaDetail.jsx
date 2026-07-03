import React from 'react';

export default function VisaDetail({ visa, onHomeClick, onHubClick, onStartDiagnostic }) {
  if (!visa) return null;

  return (
    <div className="visa-detail">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="#/" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#/visas" onClick={(e) => { e.preventDefault(); onHubClick(); }}>
              Visas Americanas
            </a>
          </li>
          <li>
            <span aria-current="page">{visa.title.split(' (')[0]}</span>
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <div className="visa-detail-hero">
        <div className="visa-detail-badge">
          <span className="visa-emoji">{visa.emoji}</span> Guía de Requisitos y Proceso
        </div>
        <h1 className="visa-title-main">{visa.title}</h1>
        <p className="visa-desc-main">{visa.shortDescription}</p>
      </div>

      {/* Quick Specs Cards */}
      <div className="visa-specs">
        <div className="spec-card">
          <div className="spec-icon">💵</div>
          <div className="spec-info">
            <span className="spec-label">Costo de Solicitud</span>
            <strong className="spec-val">{visa.cost}</strong>
          </div>
        </div>
        <div className="spec-card">
          <div className="spec-icon">📅</div>
          <div className="spec-info">
            <span className="spec-label">Vigencia Oficial</span>
            <strong className="spec-val">{visa.validity}</strong>
          </div>
        </div>
      </div>

      {/* Grid: Requirements and Process */}
      <div className="visa-sections-grid">
        {/* Requirements Box */}
        <div className="detail-section req-section">
          <h2 className="section-title">📋 Requisitos Indispensables</h2>
          <p className="section-intro">
            Asegúrate de reunir todos los documentos y cumplir con los criterios antes de agendar tu cita:
          </p>
          <ul className="req-list">
            {visa.requirements.map((req, idx) => (
              <li key={idx} className="req-item">
                <span className="check-box">✓</span>
                <span className="req-text">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process Steps */}
        <div className="detail-section proc-section">
          <h2 className="section-title">⚡ Proceso Oficial de Solicitud</h2>
          <p className="section-intro">
            Este es el camino que debes seguir para completar tu trámite ante la embajada:
          </p>
          <div className="timeline">
            {visa.process.map((p) => (
              <div key={p.step} className="timeline-item">
                <div className="timeline-num">{p.step}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{p.title}</h3>
                  <p className="timeline-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Recommendations Callout */}
      <div className="recommendations-box">
        <div className="rec-header">
          <span className="rec-icon">💡</span>
          <h3 className="rec-title">Consejos Clave de Consultores Senior</h3>
        </div>
        <ul className="rec-list">
          {visa.recommendations.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>
      </div>

      {/* CTA Box to Start Flow */}
      <div className="detail-cta-box">
        <h3 className="cta-box-title">¿Cumples con el perfil para esta visa?</h3>
        <p className="cta-box-text">
          Evalúa tus posibilidades de aprobación antes de realizar pagos consulares. Nuestro motor simula los criterios del Departamento de Estado.
        </p>
        <button
          type="button"
          className="btn bpri bblk"
          onClick={() => onStartDiagnostic(visa.category)}
        >
          Evaluar Mi Perfil para esta Visa &rarr;
        </button>
      </div>
    </div>
  );
}
