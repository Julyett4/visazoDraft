import { useState } from 'react';

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
    <div className="step" role="radiogroup" aria-labelledby="step-title" aria-describedby="step-subtitle">
      <div className="ey">{stepBadge}</div>
      <h1 className="stitle" id="step-title">{title}</h1>
      <p className="ssub" id="step-subtitle">{subtitle}</p>
      
      <div className="cgrid">
        {options.map((opt) => {
          const isDesc = !!opt.d;
          const descId = isDesc ? `desc-${opt.v}` : '';
          const errorId = error ? 'err-card-txt' : '';
          const describedBy = [descId, errorId].filter(Boolean).join(' ') || undefined;

          return (
            <label key={opt.v} className="cc">
              <input 
                type="radio" 
                name={fieldName} 
                value={opt.v} 
                checked={selected === opt.v}
                onChange={() => {
                  setSelected(opt.v);
                  setError(false);
                }} 
                aria-invalid={error ? "true" : "false"}
                aria-describedby={describedBy}
              />
              <div className="ci">
                {opt.i ? <div className="cion" aria-hidden="true">{opt.i}</div> : null}
                <div className="cb">
                  <div className="ct">{opt.t}</div>
                  {opt.d ? <div className="cd" id={`desc-${opt.v}`}>{opt.d}</div> : null}
                </div>
                <div className="crd" aria-hidden="true"></div>
              </div>
            </label>
          );
        })}
      </div>

      <div className={`errmsg ${error ? 'show' : ''}`} id="err-card" role="alert" aria-live="assertive">
        <span>⚠</span>
        <span id="err-card-txt">Por favor selecciona una opción.</span>
      </div>

      <div className="snav">
        <button className="btn bgho" onClick={onBack}>← Volver</button>
        <button className="btn bpri" onClick={handleNext}>Continuar →</button>
      </div>
    </div>
  );
}
