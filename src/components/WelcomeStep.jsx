import React from 'react';

export default function WelcomeStep({ onStart }) {
  return (
    <div className="step active" id="step-welcome">
      <div className="ww">
        <div className="wbadge">✦ Motor de evaluación consular</div>
        <h1 className="wtitle">Evaluador de<br /><span className="hl">Viabilidad Consular</span></h1>
        <p className="wdesc">Responde en 3 minutos y nuestro sistema evaluará tu perfil usando los mismos criterios que aplica el Departamento de Estado de EE. UU.</p>
        <div className="wfeats">
          <div className="wfrow">
            <div className="wficon">⚡</div>
            <span>Diagnóstico instantáneo basado en criterios consulares reales</span>
          </div>
          <div className="wfrow">
            <div className="wficon">🛡️</div>
            <span>Tu información es 100% confidencial y protegida</span>
          </div>
          <div className="wfrow">
            <div className="wficon">📋</div>
            <span>Resultado personalizado con plan de acción específico</span>
          </div>
        </div>
        <button className="btn bpri bblk" onClick={onStart}>Comenzar diagnóstico &rarr;</button>
        <p className="wleg">⏱ Aprox. 3 minutos · Sin compromiso · 100% gratuito</p>
      </div>
    </div>
  );
}
