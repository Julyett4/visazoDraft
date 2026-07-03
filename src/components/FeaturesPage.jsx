import React from 'react';

export default function FeaturesPage({ onBack, onStartDiagnostic }) {
  const features = [
    {
      icon: '🧠',
      title: 'Algoritmo de Viabilidad Consular',
      desc: 'Simula el comportamiento de evaluación oficial cruzando variables de arraigo nacional, perfil financiero, nexos familiares e historial migratorio.',
      color: 'blue'
    },
    {
      icon: '📝',
      title: 'Diligenciamiento del DS-160',
      desc: 'Evita errores de transcripción o inconsistencias de datos que gatillan de inmediato una entrevista sospechosa o una negación automática.',
      color: 'purple'
    },
    {
      icon: '⚡',
      title: 'Agendamiento Inteligente',
      desc: 'Monitoreamos la plataforma de citas 24/7 y te agendamos en las fechas liberadas o canceladas más prontas para reducir el tiempo de espera.',
      color: 'verde'
    },
    {
      icon: '👥',
      title: 'Expertos Ex-Consulares',
      desc: 'Toda la preparación estratégica del caso es supervisada por profesionales con experiencia interna en procesos consulares de EE. UU.',
      color: 'blue'
    },
    {
      icon: '🛡️',
      title: 'Privacidad y Encriptación',
      desc: 'Garantizamos que toda tu información personal y financiera viaja de forma cifrada (HTTPS) y es procesada bajo absoluta reserva legal.',
      color: 'purple'
    },
    {
      icon: '📊',
      title: 'Monitoreo de Estado',
      desc: 'Recibes actualizaciones en tiempo real sobre el estado de tu trámite, recordatorios y notificaciones importantes directo en tu WhatsApp.',
      color: 'verde'
    }
  ];

  return (
    <div className="visas-hub features-page-view">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="#/" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Características</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Tecnología & Estrategia</span>
        <h1 className="hub-title">Características de nuestro sistema</h1>
        <p className="hub-subtitle">
          Un ecosistema diseñado meticulosamente para mitigar tus riesgos consulares y maximizar tu aprobación.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-showcase-grid">
        {features.map((feat, idx) => (
          <div key={idx} className={`feature-showcase-card border-${feat.color}`}>
            <div className="feature-showcase-header">
              <span className="feature-showcase-icon">{feat.icon}</span>
              <h3 className="feature-showcase-title">{feat.title}</h3>
            </div>
            <p className="feature-showcase-desc">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Value statement */}
      <div className="infographic-summary">
        <div className="info-box-summary flex-col-tablet">
          <div className="summary-stat">
            <span className="stat-num">98%</span>
            <span className="stat-lbl">Satisfacción</span>
          </div>
          <div className="info-box-content">
            <h4 className="info-box-title">Respaldado por resultados reales</h4>
            <p className="info-box-text">
              Nuestra metodología rigurosa combina tecnología de punta y conocimiento experto para brindar un servicio transparente, rápido y libre de frustraciones.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="hub-cta-box features-cta-box">
        <h3 className="hub-cta-title">¿Quieres ver el sistema en acción?</h3>
        <p className="hub-cta-text">
          Evalúa gratis la viabilidad de tu visa en este momento usando nuestro motor interactivo.
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
