import React, { useState } from 'react';

export default function CardSelectStep({ 
  stepBadge, 
  title, 
  subtitle, 
  options, 
  fieldName, 
  selectedValue, 
  onNext, 
  onBack 
}) {
  const [selected, setSelected] = useState(selectedValue || '');
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!selected) {
      setError(true);
      return;
    }
    setError(false);
    onNext(selected);
  };

  return (
    <div className="step">
      <div className="ey">{stepBadge}</div>
      <h2 className="stitle">{title}</h2>
      <p className="ssub">{subtitle}</p>
      
      <div className="cgrid">
        {options.map((opt) => (
          <label key={opt.v} className="cc">
            <input 
              type="radio" 
              name={fieldName} 
              value={opt.v} 
              checked={selected === opt.v}
              onChange={() => setSelected(opt.v)} 
            />
            <div className="ci">
              {opt.i ? <div className="cion">{opt.i}</div> : null}
              <div className="cb">
                <div className="ct">{opt.t}</div>
                {opt.d ? <div className="cd">{opt.d}</div> : null}
              </div>
              <div className="crd"></div>
            </div>
          </label>
        ))}
      </div>

      <div className={`errmsg ${error ? 'show' : ''}`}>
        <span>⚠</span>
        <span>Por favor selecciona una opción.</span>
      </div>

      <div className="snav">
        <button className="btn bgho" onClick={onBack}>← Volver</button>
        <button className="btn bpri" onClick={handleNext}>Continuar →</button>
      </div>
    </div>
  );
}
