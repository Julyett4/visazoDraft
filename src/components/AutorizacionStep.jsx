import React, { useState } from 'react';

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
      <h2 className="stitle">Autorización y confirmación</h2>
      <p className="ssub">Antes de generar tu diagnóstico, necesitamos tu autorización para el tratamiento responsable de tu información personal.</p>
      
      <div id="form-auth">
        <label 
          className={`chk ${datosChecked ? 'on' : ''}`} 
          id="lbl-chk-datos" 
          onClick={() => setDatosChecked(!datosChecked)}
        >
          <input 
            type="checkbox" 
            id="chk-datos" 
            checked={datosChecked}
            onChange={(e) => e.stopPropagation()}
          />
          <span className="cht">
            Autorizo el tratamiento de mis datos personales conforme a la Ley 1581 de 2012 y la política de privacidad de Visazo Pro.
          </span>
        </label>

        <label 
          className={`chk ${discChecked ? 'on' : ''}`} 
          id="lbl-chk-disc" 
          onClick={() => setDiscChecked(!discChecked)}
        >
          <input 
            type="checkbox" 
            id="chk-disc" 
            checked={discChecked}
            onChange={(e) => e.stopPropagation()}
          />
          <span className="cht">
            Declaro entender que Visazo Pro no garantiza la aprobación de la visa y que este diagnóstico es de carácter orientativo.
          </span>
        </label>
      </div>

      <div className={`errmsg ${error ? 'show' : ''}`} id="err-auth">
        <span>⚠</span>
        <span>Debes aceptar ambas condiciones para continuar.</span>
      </div>

      <div className="snav">
        <button className="btn bgho" onClick={onBack}>← Volver</button>
        <button className="btn bpri" onClick={handleNext}>Ver mi diagnóstico →</button>
      </div>
    </div>
  );
}
