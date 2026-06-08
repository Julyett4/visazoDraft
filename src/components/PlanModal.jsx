import React, { useState } from 'react';
import { PLANES } from '../data/db';

export default function PlanModal({ isOpen, planKey, onClose, onConfirm }) {
  const [loading, setLoading] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  if (!isOpen || !planKey) return null;

  const plan = PLANES[planKey];
  if (!plan) return null;

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm(planKey);
    setLoading(false);
    setShowFallback(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div 
      id="modal-overlay" 
      className="show" 
      onClick={handleOverlayClick}
    >
      <div className="mbox" id="mbox">
        <button className="mclose" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="memoji" id="m-emoji">{plan.emoji}</div>
        
        <div style={{ textAlign: 'center' }}>
          <span className={`mbadge mb-${plan.color}`} id="m-badge">
            {plan.titulo}
          </span>
        </div>
        
        <h3 className="mtitulo" id="m-titulo">{plan.titulo}</h3>
        <div className="mprecio" id="m-precio">{plan.precio}</div>
        
        <div className="minc-lbl">¿Qué incluye?</div>
        <ul className="minc-list" id="m-incluye">
          {plan.incluye.map((inc, i) => (
            <li key={i}>{inc}</li>
          ))}
        </ul>
        
        <button 
          className={`mcta mc-${plan.color}`} 
          id="m-cta" 
          disabled={loading}
          onClick={handleConfirm}
        >
          {loading ? '⏳ Asegurando tu cupo...' : 'Confirmar y Pagar →'}
        </button>
        
        <div 
          className="mfallback" 
          id="m-fallback"
          style={{ display: showFallback ? 'block' : 'none' }}
        >
          ✅ ¡Solicitud registrada! Si la ventana de pago no se abrió,{' '}
          <a 
            id="m-fallback-link" 
            href={plan.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            haz clic aquí para continuar
          </a>.
        </div>
        
        <p className="msecure">🔒 Pago 100% seguro · MercadoPago</p>
      </div>
    </div>
  );
}
