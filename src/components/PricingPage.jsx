import React, { useState } from 'react';
import PricingCard from './PricingCard';

export default function PricingPage({ onBack, onSelectPlan, onStartDiagnostic }) {
  const [isRenovacion, setIsRenovacion] = useState(false);

  // One-time payment plan data
  const plansPrimeraVez = [
    {
      planKey: 'PASAPORTE_EXITO',
      title: 'Pasaporte al Éxito',
      emoji: '📄',
      price: '$49.000 COP',
      features: [
        'PDF con la lista de documentos requeridos para tu caso',
        'Recomendaciones personalizadas según tu perfil consular',
        'Guía detallada de aranceles y tasas oficiales',
        'Soporte técnico vía correo electrónico'
      ],
      isRecommended: false,
      color: 'verde',
      ctaText: 'Adquirir Pasaporte'
    },
    {
      planKey: 'PLAN_PRO',
      title: 'Plan Pro',
      emoji: '🛂',
      price: '$197.000 COP',
      features: [
        'Asesoría consular personalizada por chat',
        'Diligenciamiento completo del Formulario DS-160',
        'Agendamiento técnico de cita consular',
        'Revisión y validación de documentos de soporte',
        'Monitoreo prioritario de citas libres'
      ],
      isRecommended: true,
      color: 'blue',
      ctaText: 'Adquirir Plan Pro'
    },
    {
      planKey: 'PLAN_PREMIUM',
      title: 'Plan Premium',
      emoji: '⭐',
      price: '$347.000 COP',
      features: [
        'Asesoría integral y videollamada de preparación',
        'Diligenciamiento completo del Formulario DS-160',
        'Agendamiento técnico de citas consulares',
        'Plan estratégico a 6 meses para robustecer tu perfil',
        'Seguimiento prioritario continuo hasta tu entrevista'
      ],
      isRecommended: false,
      color: 'purple',
      ctaText: 'Adquirir Plan Premium'
    }
  ];

  const plansRenovacion = [
    {
      planKey: 'RENOV_PRO',
      title: 'Plan Pro Renovación',
      emoji: '📋',
      price: '$127.000 COP',
      features: [
        'Asesoría para proceso de renovación sin entrevista',
        'Diligenciamiento delegado de formulario de renovación',
        'Agendamiento de cita en CAS (proceso simplificado)',
        'Soporte técnico de dudas vía chat'
      ],
      isRecommended: true,
      color: 'blue',
      ctaText: 'Adquirir Pro Renovación'
    },
    {
      planKey: 'RENOV_PREMIUM',
      title: 'Plan Premium Renovación VIP',
      emoji: '⭐',
      price: '$247.000 COP',
      features: [
        'Asesoría completa y personalizada de renovación',
        'Diligenciamiento de formulario de renovación sin entrevista',
        'Agendamiento de cita en CAS (proceso simplificado)',
        'Logística de entrega y recogida de pasaporte sin filas',
        'Soporte prioritario en todo el proceso'
      ],
      isRecommended: false,
      color: 'purple',
      ctaText: 'Adquirir Premium VIP'
    }
  ];

  const activePlans = isRenovacion ? plansRenovacion : plansPrimeraVez;

  const faqs = [
    {
      q: '¿Qué método de pago aceptan?',
      a: 'Aceptamos tarjetas de crédito, débito (PSE), efectivo a través de Efecty y transferencias bancarias de manera segura con MercadoPago.'
    },
    {
      q: '¿Los precios incluyen el arancel consular oficial?',
      a: 'No, las tarifas de Visazo Pro corresponden a honorarios por asesoría y gestión delegada. El valor del arancel oficial consular (USD $185 o su equivalente legal) debe ser cancelado directamente al canal oficial de la Embajada.'
    },
    {
      q: '¿Puedo cambiar de plan si me equivoco?',
      a: 'Sí, si deseas subir de categoría antes de que iniciemos el diligenciamiento de tus formularios oficiales, puedes hacerlo abonando la diferencia correspondiente.'
    }
  ];

  return (
    <div className="visas-hub pricing-page-view">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="#/" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Planes y Precios</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Inversión Inteligente</span>
        <h1 className="hub-title">Planes y Precios de Asesoría</h1>
        <p className="hub-subtitle">
          Selecciona el nivel de acompañamiento y el tipo de trámite que necesitas para tu visa americana.
        </p>

        {/* Pricing Toggle Switch - Primera Vez vs Renovación */}
        <div className="pricing-toggle-container">
          <button
            type="button"
            className={`pricing-toggle-btn ${!isRenovacion ? 'active' : ''}`}
            onClick={() => setIsRenovacion(false)}
          >
            Primera Vez
          </button>
          <div className="pricing-toggle-switch" onClick={() => setIsRenovacion(!isRenovacion)} aria-hidden="true">
            <div className={`switch-handle ${isRenovacion ? 'annual' : ''}`}></div>
          </div>
          <button
            type="button"
            className={`pricing-toggle-btn ${isRenovacion ? 'active' : ''}`}
            onClick={() => setIsRenovacion(true)}
          >
            Renovación
            <span className="save-badge">Sin Entrevista</span>
          </button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="pricing-grid-container">
        {activePlans.map((plan) => (
          <PricingCard
            key={plan.planKey}
            title={plan.title}
            emoji={plan.emoji}
            price={plan.price}
            period="Pago único"
            features={plan.features}
            isRecommended={plan.isRecommended}
            color={plan.color}
            ctaText={plan.ctaText}
            onCtaClick={() => onSelectPlan(plan.planKey)}
          />
        ))}
      </div>

      {/* Trust elements */}
      <div className="pricing-trust-section">
        <div className="trust-item">
          <span className="trust-icon">🔒</span>
          <div>
            <h3 className="trust-title">Pago Único y Cifrado</h3>
            <p className="trust-desc">No hay cargos recurrentes ni suscripciones mensuales. Todo se procesa de forma segura a través de MercadoPago.</p>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">🛡️</span>
          <div>
            <h3 className="trust-title">Garantía de Acompañamiento</h3>
            <p className="trust-desc">En planes Pro y Premium te acompañamos gratuitamente en un segundo intento si tu visa llega a ser negada.</p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="pricing-faq-section">
        <h2 className="faq-main-title">Preguntas frecuentes</h2>
        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-card">
              <h3 className="faq-question">{faq.q}</h3>
              <p className="faq-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct link to free test */}
      <div className="hub-cta-box pricing-cta-box">
        <h3 className="hub-cta-title">¿Quieres medir tus probabilidades de aprobación primero?</h3>
        <p className="hub-cta-text">
          Realiza gratis nuestro diagnóstico inteligente de 3 minutos para evaluar las alertas de riesgo consular en tu perfil.
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
