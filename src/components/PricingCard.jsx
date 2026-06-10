import React from 'react';

export default function PricingCard({
  title,
  emoji,
  price,
  period = 'Pago único',
  features,
  isRecommended,
  ctaText = 'Comenzar ahora',
  color = 'blue', // 'blue', 'purple', 'verde'
  onCtaClick
}) {
  return (
    <div className={`pricing-card ${isRecommended ? 'recommended' : ''} border-${color}`}>
      {isRecommended && <div className="recommended-badge">★ Recomendado</div>}
      
      <div className="card-header-section">
        <div className="card-emoji">{emoji}</div>
        <h3 className="card-title">{title}</h3>
      </div>
      
      <div className="card-price-section">
        <div className="card-price-container">
          <span className="card-price">{price}</span>
          <span className="card-period">/ {period}</span>
        </div>
      </div>

      <div className="card-features-section">
        <div className="features-title">¿Qué incluye?</div>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-check">✓</span>
              <span className="feature-text">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-cta-section">
        <button 
          type="button"
          className={`btn bpri bblk cta-button-accent mc-${color}`}
          onClick={onCtaClick}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
