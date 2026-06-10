import React, { useState } from 'react';

export default function HelpCenterPage({ onBack }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = [
    {
      title: 'Formularios y DS-160',
      emoji: '📝',
      desc: 'Guías paso a paso para responder preguntas y corregir datos ya confirmados.',
      color: 'blue'
    },
    {
      title: 'Citas y Agendamiento',
      emoji: '📅',
      desc: 'Procesos de agendamiento, citas familiares y bots de búsqueda de fechas.',
      color: 'purple'
    },
    {
      title: 'Planes y Pagos',
      emoji: '💳',
      desc: 'Medios de pago, facturación PSE, MercadoPago y políticas de reembolso.',
      color: 'verde'
    },
    {
      title: 'Entrevista Consular',
      emoji: '🎤',
      desc: 'Recomendaciones de vestimenta, documentación física y simulacros.',
      color: 'blue'
    }
  ];

  const faqs = [
    {
      id: 'faq-1',
      q: '¿Cómo puedo cambiar la fecha de mi cita consular?',
      a: 'Si contrataste un plan Pro o Premium, nuestro equipo se encarga del monitoreo continuo. Si deseas hacerlo tú mismo, debes ingresar al portal oficial de citas (AIS), seleccionar "Reprogramar cita" y buscar cupos disponibles. Recuerda que no debes cancelar tu cita anterior hasta haber seleccionado la nueva fecha.'
    },
    {
      id: 'faq-2',
      q: '¿Qué pasa si me equivoco en mi formulario DS-160 confirmado?',
      a: 'Una vez que envías y confirmas el Formulario DS-160 ante el CEAC, este no puede ser editado. No obstante, puedes crear un nuevo formulario duplicando la información del anterior, corregir el dato y guardar la nueva hoja de confirmación. En planes Pro y Premium, nosotros realizamos esta auditoría técnica y corrección de forma delegada.'
    },
    {
      id: 'faq-3',
      q: '¿Qué documentos debo llevar el día de mi entrevista?',
      a: 'Los únicos documentos obligatorios son: tu pasaporte vigente (y pasaportes anteriores si tienen visas previas), la hoja de confirmación del DS-160 y la confirmación de la cita. Recomendamos llevar documentos que demuestren tu arraigo (cartas laborales, extractos bancarios, escrituras), los cuales solo se deben mostrar si el cónsul lo solicita expresamente.'
    },
    {
      id: 'faq-4',
      q: '¿Cuánto tiempo tardan en entregarme el pasaporte visado?',
      a: 'El procesamiento de la visa por parte de la Embajada de los EE. UU. en Colombia toma entre 5 y 10 días hábiles después de aprobada la visa. El pasaporte será enviado a la oficina de mensajería (DHL) que seleccionaste durante el agendamiento o entregado a tu domicilio.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query);
  });

  const handleFaqToggle = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="visas-hub help-page-view">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Centro de Ayuda</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Centro de Soporte</span>
        <h1 className="hub-title">¿Cómo podemos ayudarte hoy?</h1>
        <p className="hub-subtitle">
          Busca guías rápidas o explora categorías para resolver tus inquietudes sobre el trámite de visa.
        </p>
      </div>

      {/* Search Box */}
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
          placeholder="Busca por palabra clave (ej. cita, DS-160, pago, pasaporte)..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Categories Grid (hidden when searching for clarity) */}
      {!searchQuery && (
        <div className="help-categories-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className={`help-cat-card border-${cat.color}`}>
              <div className="help-cat-icon">{cat.emoji}</div>
              <h3 className="help-cat-title">{cat.title}</h3>
              <p className="help-cat-desc">{cat.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* FAQ Section */}
      <div className="pricing-faq-section" style={{ borderTop: searchQuery ? 'none' : '1px solid rgba(255,255,255,0.08)', paddingTop: searchQuery ? 0 : '50px' }}>
        <h2 className="faq-main-title" style={{ marginBottom: '30px' }}>
          {searchQuery ? 'Resultados de Búsqueda de Preguntas' : 'Preguntas Frecuentes Destacadas'}
        </h2>
        
        <div className="help-accordion-container" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div key={faq.id} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="accordion-header"
                    onClick={() => handleFaqToggle(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="accordion-question">{faq.q}</span>
                    <span className="accordion-arrow">{isOpen ? '▼' : '▶'}</span>
                  </button>
                  {isOpen && (
                    <div className="accordion-content">
                      <p className="accordion-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="no-results" style={{ width: '100%' }}>
              <p>No encontramos artículos de soporte que coincidan con tu búsqueda.</p>
              <button 
                type="button" 
                className="btn bpri" 
                style={{ marginTop: '15px' }}
                onClick={() => setSearchQuery('')}
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Direct Contact Banner */}
      <div className="hub-cta-box help-cta-box">
        <h3 className="hub-cta-title">¿No encontraste la respuesta que buscabas?</h3>
        <p className="hub-cta-text">
          Nuestro equipo de expertos está a tu disposición. Envíanos un mensaje directo y te responderemos en breve.
        </p>
        <button
          type="button"
          className="btn bpri bblk"
          onClick={() => window.history.pushState({ isContact: true }, '', '/contacto')}
        >
          Contactar Soporte Técnico &rarr;
        </button>
      </div>
    </div>
  );
}
