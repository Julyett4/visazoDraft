import { PLANES } from '../data/db';

export default function ResultScreen({ sol, onOpenPlanModal, onReset }) {
  const { score, perfil, hallazgos, tipoTramite } = sol;

  // Helper for rendering plan buttons
  const renderPlanBtn = (planKey, styleClass, label, hint, price) => {
    const plan = PLANES[planKey];
    if (!plan) return null;
    return (
      <button 
        className={`plan-btn ${styleClass}`} 
        onClick={() => onOpenPlanModal(planKey)}
        key={planKey}
      >
        <div className="pb-left">
          <div className="pb-icon">{plan.emoji}</div>
          <div>
            <span className="pb-name">{label}</span>
            <span className="pb-hint">{hint}</span>
          </div>
        </div>
        <div className="pb-right">
          <span className="pb-price">{price}</span>
          <span className="pb-arrow">→</span>
        </div>
      </button>
    );
  };

  // Helper for whyVP section
  const renderWhyVP = (variant) => {
    const items = {
      verde: [
        '✅ Nuestros expertos conocen la lógica consular interna — sabemos exactamente qué busca el cónsul',
        '✅ Anticipamos las <strong>preguntas trampa</strong> que generan la temida negación 214(b)',
        '✅ Preparamos tu expediente para que proyecte arraigo, solvencia y propósito claro',
        '✅ No dejes al azar un proceso que puede marcar tu futuro — con estrategia, los números cambian',
      ],
      naranja: [
        '✅ Contamos con experiencia en casos con factores de riesgo — sabemos cómo neutralizarlos',
        '✅ Conocemos la lógica consular interna y anticipamos las <strong>preguntas trampa del 214(b)</strong>',
        '✅ Construimos argumentos sólidos para contrarrestar cada alerta detectada en tu perfil',
        '✅ No dejes tu futuro al azar — con la estrategia correcta, muchos casos "naranjas" se aprueban',
      ],
      rojo: [
        '✅ Especialistas en casos de alto riesgo — diseñamos estrategias cuando otros dicen "imposible"',
        '✅ Conocemos en profundidad las causales de negación 214(b) y cómo rebatirlas legalmente',
        '✅ Asesoría privada y confidencial, sin juicios — tu historia merece una segunda oportunidad',
        '✅ Cientos de casos complejos resueltos. El conocimiento consular interno marca la diferencia',
      ],
    };

    const list = items[variant] || [];
    return (
      <div className="why-vp">
        <div className="why-title">¿Por qué elegir Visazo Pro?</div>
        <ul className="why-list">
          {list.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    );
  };

  // 1. RENOVACIÓN LIMPIA
  if (perfil === 'Renovacion Limpia') {
    return (
      <div className="rw">
        <div className="rcirc cp">⭐</div>
        <div className="rpill pp">Renovación Perfecta</div>
        <h1 className="rtitle">¡Excelente perfil para renovación!</h1>
        <p className="rdesc">Tu historial cumple todos los criterios para renovación sin entrevista. Tu expediente está en condiciones óptimas.</p>
        
        <div className="why-vp">
          <div className="why-title">¿Por qué Visazo Pro para tu renovación?</div>
          <ul className="why-list">
            <li>✅ Expertos en renovaciones sin entrevista — documentación exacta que pide el Consulado</li>
            <li>✅ Anticipamos errores técnicos que generan rechazos en casos perfectos</li>
            <li>✅ Monitoreo y acompañamiento de inicio a fin</li>
            <li>✅ No dejes al azar un proceso que marca tu movilidad por 10 años</li>
          </ul>
        </div>

        <div className="plans-wrap">
          <div className="plans-label">🎯 Elige tu plan de renovación</div>
          {renderPlanBtn('RENOV_PRO', 'pb-blue', 'Plan Pro Renovación', 'Asesoría + Formulario + Agendamiento', '$127.000')}
          {renderPlanBtn('RENOV_PREMIUM', 'pb-purple', 'Plan Premium Renovación VIP', '+ Logística de entrega y recogida de pasaporte sin filas', '$247.000')}
        </div>

        <div className="secnote">🔒 Pago seguro · MercadoPago</div>
        <button className="btn-reset" onClick={onReset}>↩ Diligenciar nuevamente / Volver al inicio</button>
      </div>
    );
  }

  // 2. ALTERNATIVAS (F1/M1, Trabajo, Especial)
  if (tipoTramite !== 'B1B2') {
    const configMap = {
      F1M1: {
        i: '🎓',
        t: 'Solicitud de visa estudiantil recibida',
        d: 'Los procesos F1/M1 requieren documentación muy específica. Nuestro equipo analizará tu caso y te guiará paso a paso.'
      },
      Trabajo: {
        i: '🏢',
        t: 'Solicitud de visa de trabajo recibida',
        d: 'Las visas de trabajo tienen requisitos muy específicos según la categoría. Revisaremos tu elegibilidad con precisión.'
      },
      Especial: {
        i: '📋',
        t: 'Solicitud especial recibida',
        d: 'Tu caso requiere análisis personalizado por un asesor senior. Revisaremos tu situación y te presentaremos las opciones disponibles.'
      }
    };
    const current = configMap[tipoTramite] || configMap.Especial;

    return (
      <div className="rw">
        <div className="rcirc cp">{current.i}</div>
        <div className="rpill pp">Solicitud Recibida</div>
        <h1 className="rtitle">{current.t}</h1>
        <p className="rdesc">{current.d}</p>
        
        <div className="why-vp">
          <div className="why-title">¿Por qué Visazo Pro?</div>
          <ul className="why-list">
            <li>✅ Conocemos la lógica consular interna de cada categoría de visa</li>
            <li>✅ Anticipamos las <strong>preguntas trampa del cónsul</strong> para evitar negaciones</li>
            <li>✅ No dejes tu futuro al azar — con la estrategia correcta, los números cambian</li>
          </ul>
        </div>

        <div className="plans-wrap">
          <div className="plans-label">🎯 Agenda tu asesoría</div>
          {renderPlanBtn('ESPECIAL', 'pb-purple', 'Asesoría Especializada', 'Sesión para analizar viabilidad y documentación de tu visa especial', 'Consultar')}
        </div>

        <div className="secnote">🔒 Pago seguro · MercadoPago</div>
        <button className="btn-reset" onClick={onReset}>↩ Diligenciar nuevamente / Volver al inicio</button>
      </div>
    );
  }

  // 3. ALTA VIABILIDAD (VERDE)
  if (perfil === 'Alta Viabilidad') {
    return (
      <div className="rw">
        <div className="rcirc cv">✅</div>
        <div className="rpill pv">Alta Viabilidad</div>
        <h1 className="rtitle">¡Perfil con alta probabilidad de éxito!</h1>
        <div className="srow">
          <span className="slbl">Índice de riesgo consular:</span>
          <span className="sval sv">{score} pts</span>
        </div>
        <p className="rdesc">Tu perfil presenta características muy favorables. Con la documentación correcta, tus posibilidades de aprobación son muy altas.</p>
        
        {renderWhyVP('verde')}

        <div className="plans-wrap">
          <div className="plans-label">🎯 Elige tu plan de acción</div>
          {renderPlanBtn('PASAPORTE_EXITO', 'pb-verde', 'Pasaporte al Éxito', 'Lista de documentos + recomendaciones personalizadas', '$49.000')}
          {renderPlanBtn('PLAN_PRO', 'pb-blue', 'Plan Pro', 'Asesoría + DS-160 + Agendamiento de cita', '$197.000')}
        </div>

        <div className="secnote">🔒 Pago seguro · MercadoPago</div>
        <button className="btn-reset" onClick={onReset}>↩ Diligenciar nuevamente / Volver al inicio</button>
      </div>
    );
  }

  // 4. VIABILIDAD MEDIA (NARANJA)
  if (perfil === 'Viabilidad Media') {
    return (
      <div className="rw">
        <div className="rcirc cn">⚠️</div>
        <div className="rpill pn">Viabilidad Media</div>
        <h1 className="rtitle">Perfil con alertas detectadas</h1>
        <div className="srow">
          <span className="slbl">Índice de riesgo consular:</span>
          <span className="sval sn">{score} pts</span>
        </div>
        <p className="rdesc">Hemos identificado factores que requieren atención especial. Con la estrategia correcta, estos puntos pueden mitigarse significativamente.</p>
        
        {hallazgos.length > 0 && (
          <div className="hbox">
            <h2 className="hdr2">⚠️ Alertas detectadas en tu expediente</h2>
            {hallazgos.map((h, index) => (
              <div className="hrow" key={index}>
                <div className="hdot"></div>
                <span>{h.hallazgo}</span>
              </div>
            ))}
          </div>
        )}

        {renderWhyVP('naranja')}

        <div className="plans-wrap">
          <div className="plans-label">🎯 Elige tu plan de acción</div>
          {renderPlanBtn('PLAN_PRO', 'pb-blue', 'Plan Pro', 'Asesoría + DS-160 + Agendamiento de cita', '$197.000')}
          {renderPlanBtn('PLAN_PREMIUM', 'pb-purple', 'Plan Premium', 'Asesoría integral + Videollamada + Plan estratégico 6 meses', '$347.000')}
        </div>

        <div className="secnote">🔒 Pago seguro · MercadoPago</div>
        <button className="btn-reset" onClick={onReset}>↩ Diligenciar nuevamente / Volver al inicio</button>
      </div>
    );
  }

  // 5. ALTO RIESGO (ROJO)
  return (
    <div className="rw">
      <div className="rcirc cr">🚨</div>
      <div className="rpill pr">Alto Riesgo</div>
      <h1 className="rtitle">Tu caso requiere asesoría especializada</h1>
      <p className="rdesc">Tu expediente presenta factores de riesgo significativos que requieren una estrategia legal altamente específica.</p>
      
      <div className="rnote">
        🔒 <span>Por razones de <strong>confidencialidad legal</strong>, los detalles de tu evaluación serán compartidos de forma privada con nuestro equipo especializado.</span>
      </div>

      {renderWhyVP('rojo')}

      <div className="plans-wrap">
        <div className="plans-label">🎯 Tu plan recomendado</div>
        {renderPlanBtn('PLAN_PREMIUM', 'pb-rojo', 'Plan Premium', 'Asesoría integral + Videollamada + Plan estratégico 6 meses', '$347.000')}
      </div>

      <div className="secnote">🔒 Pago seguro · MercadoPago</div>
      <button className="btn-reset" onClick={onReset}>↩ Diligenciar nuevamente / Volver al inicio</button>
    </div>
  );
}
