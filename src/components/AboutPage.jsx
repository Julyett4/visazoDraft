import React from 'react';

export default function AboutPage({ onBack, onStartDiagnostic }) {
  const team = [
    {
      name: 'Carlos Mendoza',
      role: 'Director de Asesoría Legal',
      badge: 'Ex-Oficial Consular',
      bio: 'Ex-oficial de visas con más de 12 años de experiencia dentro del Departamento de Estado. Experto en evaluar arraigos y preparar entrevistas complejas.',
      emoji: '👔',
      color: 'blue'
    },
    {
      name: 'Dra. Diana Restrepo',
      role: 'Asesora Consular Senior',
      badge: 'Especialista DS-160',
      bio: 'Abogada especialista en derecho migratorio internacional. Ha supervisado y corregido con éxito más de 3,500 formularios DS-160.',
      emoji: '👩‍💼',
      color: 'purple'
    },
    {
      name: 'Nicolás Giraldo',
      role: 'Director de Tecnología',
      badge: 'Creador del Algoritmo',
      bio: 'Ingeniero de sistemas enfocado en optimizar procesos legales. Diseñó el motor de análisis de riesgo de viabilidad y el bot de búsqueda de citas.',
      emoji: '👨‍💻',
      color: 'verde'
    }
  ];

  return (
    <div className="visas-hub about-page-view">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="#/" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Acerca de</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Nuestra Compañía</span>
        <h1 className="hub-title">Quiénes Somos</h1>
        <p className="hub-subtitle">
          Combinamos rigurosidad legal y tecnología inteligente para guiarte en tu camino hacia los Estados Unidos.
        </p>
      </div>

      {/* Story, Mission, Vision Block */}
      <div className="about-details-container">
        <div className="about-main-card">
          <h2 className="about-section-title">Nuestra Historia</h2>
          <p className="about-text">
            Nacimos en Bogotá como una firma boutique de consultoría legal migratoria. Al darnos cuenta de que más del 85% de las negaciones de visa bajo la sección 214(b) ocurren por errores simples en el formulario DS-160 o falta de preparación en la entrevista, decidimos democratizar la asesoría.
          </p>
          <p className="about-text">
            Hoy en día, <strong>Visazo Pro</strong> es una plataforma inteligente que evalúa los perfiles automáticamente, identifica riesgos al instante y provee la mejor estrategia de preparación guiada por expertos.
          </p>
        </div>

        <div className="about-split-grid">
          <div className="about-sub-card">
            <span className="about-sub-icon">🎯</span>
            <h3 className="about-sub-title">Nuestra Misión</h3>
            <p className="about-sub-text">
              Eliminar la incertidumbre y frustración del trámite de visa americana, ofreciendo transparencia completa, tecnología analítica y asesoría honesta.
            </p>
          </div>
          <div className="about-sub-card">
            <span className="about-sub-icon">👁️</span>
            <h3 className="about-sub-title">Nuestra Visión</h3>
            <p className="about-sub-text">
              Consolidarnos como la plataforma digital de preparación y viabilidad migratoria líder en América Latina, logrando la mayor tasa de éxito de aprobación.
            </p>
          </div>
        </div>
      </div>

      {/* Team Showcase */}
      <div className="team-section-container">
        <h2 className="team-main-title">Nuestro Equipo Asesor</h2>
        <p className="team-subtitle">Profesionales de primer nivel dedicados a estructurar tu expediente consular con excelencia.</p>
        
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className={`team-card border-${member.color}`}>
              <div className="team-avatar-container">
                <span className="team-avatar-emoji">{member.emoji}</span>
              </div>
              <span className={`team-badge mb-${member.color}`}>{member.badge}</span>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="hub-cta-box about-cta-box">
        <h3 className="hub-cta-title">¿Quieres que nuestro equipo evalúe tu perfil?</h3>
        <p className="hub-cta-text">
          Inicia tu diagnóstico interactivo gratuito de 3 minutos y descubre tus probabilidades de aprobación.
        </p>
        <button
          type="button"
          className="btn bpri bblk"
          onClick={() => onStartDiagnostic('B1B2')}
        >
          Iniciar Diagnóstico Gratis &rarr;
        </button>
      </div>
    </div>
  );
}
