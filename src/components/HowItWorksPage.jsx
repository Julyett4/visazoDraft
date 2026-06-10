import React from 'react';

export default function HowItWorksPage({ onBack, onStartDiagnostic }) {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Consular Inicial',
      icon: '📝',
      desc: 'Diligencias nuestro formulario dinámico de 3 minutos. Evaluamos las variables socioeconómicas y migratorias clave en tu perfil.',
      color: 'blue'
    },
    {
      number: '02',
      title: 'Identificación de Alertas de Riesgo',
      icon: '🔍',
      desc: 'Nuestro motor inteligente procesa tu información y detecta causales comunes de negación (art. 214b) y factores críticos.',
      color: 'purple'
    },
    {
      number: '03',
      title: 'Estrategia Consular a la Medida',
      icon: '🛡️',
      desc: 'Te asignamos un plan de acción para neutralizar las alertas de tu perfil. Nuestros asesores ex-consulares trazan tu hoja de ruta.',
      color: 'verde'
    },
    {
      number: '04',
      title: 'Diligenciamiento DS-160 y Agendamiento',
      icon: '✍️',
      desc: 'Diligenciamos el formulario oficial de forma impecable sin errores gramaticales y buscamos la fecha de cita más cercana disponible.',
      color: 'blue'
    },
    {
      number: '05',
      title: 'Simulación y Entrevista Exitosa',
      icon: '🎤',
      desc: 'Realizamos una videollamada interactiva emulando la entrevista real con el cónsul. Vas preparado para responder con total seguridad.',
      color: 'purple'
    }
  ];

  return (
    <div className="visas-hub how-it-works-view">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Cómo funciona</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Paso a Paso</span>
        <h1 className="hub-title">¿Cómo funciona Visazo Pro?</h1>
        <p className="hub-subtitle">
          Simplificamos el proceso de solicitud de visa americana combinando tecnología y experiencia legal estratégica.
        </p>
      </div>

      {/* Steps Timeline UI */}
      <div className="steps-timeline">
        {steps.map((step, idx) => (
          <div key={idx} className="timeline-item">
            {/* Connector Line */}
            {idx < steps.length - 1 && <div className="timeline-connector"></div>}
            
            {/* Number Indicator */}
            <div className={`timeline-badge border-${step.color}`}>
              <span className="step-num">{step.number}</span>
            </div>

            {/* Content Card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <span className="timeline-card-icon">{step.icon}</span>
                <h3 className="timeline-card-title">{step.title}</h3>
              </div>
              <p className="timeline-card-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Infographic Panel */}
      <div className="infographic-summary">
        <div className="info-box-summary">
          <span className="info-box-emoji">🎯</span>
          <div className="info-box-content">
            <h4 className="info-box-title">El 94% de nuestros usuarios preparados consiguen la aprobación</h4>
            <p className="info-box-text">
              La diferencia entre una visa aprobada y una negada radica en la preparación y en la consistencia de tu DS-160 con tus respuestas verbales.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="hub-cta-box how-cta-box">
        <h3 className="hub-cta-title">¿Listo para dar el primer paso?</h3>
        <p className="hub-cta-text">
          Conoce tu viabilidad consular gratis hoy mismo con nuestro simulador inteligente.
        </p>
        <button
          type="button"
          className="btn bpri bblk"
          onClick={() => onStartDiagnostic('B1B2')}
        >
          Comenzar Diagnóstico Gratis &rarr;
        </button>
      </div>
    </div>
  );
}
