import { useState } from 'react';

export default function AutorizacionStep({ onNext, onBack }) {
  const [datosChecked, setDatosChecked] = useState(false);
  const [discChecked, setDiscChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (!datosChecked || !discChecked) {
      setError(true);
      return;
    }
    setError(false);
    onNext();
  };

  return (
    <div className="step" id="step-autorizacion">
      <div className="ey">🔒 Último paso</div>
      <h1 className="stitle">Autorización y confirmación</h1>
      <p className="ssub">Antes de generar tu diagnóstico, necesitamos tu autorización para el tratamiento responsable de tu información personal.</p>
      
      <div id="form-auth">
        <label 
          className={`chk ${datosChecked ? 'on' : ''}`} 
          id="lbl-chk-datos" 
        >
          <input 
            type="checkbox" 
            id="chk-datos" 
            checked={datosChecked}
            onChange={(e) => {
              setDatosChecked(e.target.checked);
              if (error) setError(false);
            }}
            aria-invalid={error && !datosChecked ? "true" : "false"}
            aria-describedby={error && !datosChecked ? "err-auth-txt" : undefined}
            required
          />
          <span className="cht">
            Autorizo el tratamiento de mis datos personales conforme a la Ley 1581 de 2012 y la{' '}
            <a 
              href="#/privacidad" 
              style={{ color: 'var(--blue)', textDecoration: 'underline', fontWeight: '600' }} 
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              política de privacidad de Visazo Pro
            </a>.
          </span>
        </label>

        <label 
          className={`chk ${discChecked ? 'on' : ''}`} 
          id="lbl-chk-disc" 
        >
          <input 
            type="checkbox" 
            id="chk-disc" 
            checked={discChecked}
            onChange={(e) => {
              setDiscChecked(e.target.checked);
              if (error) setError(false);
            }}
            aria-invalid={error && !discChecked ? "true" : "false"}
            aria-describedby={error && !discChecked ? "err-auth-txt" : undefined}
            required
          />
          <span className="cht">
            Declaro entender que Visazo Pro no garantiza la aprobación de la visa y que este diagnóstico es de carácter orientativo.
          </span>
        </label>
      </div>

      <div className={`errmsg ${error ? 'show' : ''}`} id="err-auth" role="alert" aria-live="assertive">
        <span>⚠</span>
        <span id="err-auth-txt">Debes aceptar ambas condiciones para continuar.</span>
      </div>

      <div className="snav">
        <button className="btn bgho" onClick={onBack}>← Volver</button>
        <button className="btn bpri" onClick={handleNext}>Ver mi diagnóstico →</button>
      </div>
    </div>
  );
}
