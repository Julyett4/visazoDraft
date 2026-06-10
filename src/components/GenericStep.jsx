import { useState } from 'react';

export default function GenericStep({
  stepBadge,
  title,
  subtitle,
  schema,
  dbOpciones,
  savedAnswers,
  infoBanner,
  onNext,
  onBack
}) {
  const [answers, setAnswers] = useState(() => {
    const initial = {};
    schema.forEach(field => {
      initial[field.id] = savedAnswers[field.id] || '';
    });
    return initial;
  });
  
  const [error, setError] = useState(false);

  const handleFieldChange = (id, val) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleNext = () => {
    let ok = true;
    schema.forEach(field => {
      if (!answers[field.id] || answers[field.id].trim() === '') {
        ok = false;
      }
    });

    if (!ok) {
      setError(true);
      return;
    }

    setError(false);
    onNext(answers);
  };

  return (
    <div className="step">
      <div className="ey">{stepBadge}</div>
      <h2 className="stitle">{title}</h2>
      <p className="ssub">{subtitle}</p>

      {infoBanner && (
        <div className="info">
          ℹ️ <span>{infoBanner}</span>
        </div>
      )}

      <div>
        {schema.map((field) => {
          const opts = dbOpciones[field.id] || [];
          const savedValue = answers[field.id];

          if (field.tipo === 'textarea') {
            return (
              <div key={field.id} className="fg">
                <label className="fl">{field.lbl} <span className="req">*</span></label>
                <textarea
                  className="fta"
                  value={savedValue}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                  placeholder="Escribe aquí..."
                />
              </div>
            );
          }

          return (
            <div key={field.id} className="fg">
              <label className="fl" htmlFor={`sel-${field.id}`}>{field.lbl} <span className="req">*</span></label>
              <div className="sw">
                <select
                  className="fs"
                  id={`sel-${field.id}`}
                  value={savedValue}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                >
                  <option value="">— Selecciona una opción —</option>
                  {opts.map((o) => (
                    <option key={o.v} value={o.v}>{o.t}</option>
                  ))}
                </select>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`errmsg ${error ? 'show' : ''}`}>
        <span>⚠</span>
        <span>Por favor responde todas las preguntas.</span>
      </div>

      <div className="snav">
        <button className="btn bgho" onClick={onBack}>← Volver</button>
        <button className="btn bpri" onClick={handleNext}>Continuar →</button>
      </div>
    </div>
  );
}
