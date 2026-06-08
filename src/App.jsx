import React, { useState } from 'react';
import { DB, PROG, PLANES } from './data/db';
import { guardarEnSupabase } from './services/supabase';

// Helper components
import WelcomeStep from './components/WelcomeStep';
import DatosStep from './components/DatosStep';
import CardSelectStep from './components/CardSelectStep';
import GenericStep from './components/GenericStep';
import AutorizacionStep from './components/AutorizacionStep';
import ResultScreen from './components/ResultScreen';
import PlanModal from './components/PlanModal';
import RenovAlertModal from './components/RenovAlertModal';

// Helper for generating custom IDs
function uid() {
  return 'VZP-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 7).toUpperCase();
}

export default function App() {
  const [step, setStep] = useState('welcome');
  const [history, setHistory] = useState([]);
  const [fd, setFd] = useState({});
  const [sol, setSol] = useState({
    solicitudId: null,
    fechaCreacion: null,
    nombreCompleto: null,
    email: null,
    whatsapp: null,
    tipoTramite: null,
    score: 0,
    perfil: null,
    estado: null,
    respuestas: [],
    hallazgos: []
  });

  const [loading, setLoading] = useState(false);
  const [renovAlertOpen, setRenovAlertOpen] = useState(false);
  const [activePlanKey, setActivePlanKey] = useState(null);

  // Navigation handlers
  const gotoStep = (nextStep) => {
    setHistory((prev) => [...prev, step]);
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (history.length === 0) return;
    const prev = [...history];
    const target = prev.pop();
    setHistory(prev);
    setStep(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFlow = () => {
    setStep('welcome');
    setHistory([]);
    setFd({});
    setSol({
      solicitudId: null,
      fechaCreacion: null,
      nombreCompleto: null,
      email: null,
      whatsapp: null,
      tipoTramite: null,
      score: 0,
      perfil: null,
      estado: null,
      respuestas: [],
      hallazgos: []
    });
    setRenovAlertOpen(false);
    setActivePlanKey(null);
    window.location.reload();
  };

  // Processing loader
  const launchLoading = (cb) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      cb();
    }, 1800);
  };

  // Form responses handlers
  const handleStart = () => {
    gotoStep('datos-personales');
  };

  const handleDatosNext = (data) => {
    setFd((prev) => ({ ...prev, ...data }));
    gotoStep('tipo-tramite');
  };

  const handleTramiteNext = (val) => {
    setFd((prev) => ({ ...prev, tipoTramite: val }));
    if (val === 'B1B2') {
      gotoStep('tipo-solicitud');
    } else if (val === 'F1M1') {
      gotoStep('f1m1');
    } else if (val === 'Trabajo') {
      gotoStep('trabajo');
    } else {
      gotoStep('especial');
    }
  };

  const handleSolicitudNext = (val) => {
    setFd((prev) => ({ ...prev, tipoSolicitud: val }));
    if (val === 'renovacion') {
      gotoStep('renovacion');
    } else {
      gotoStep('perfil-economico');
    }
  };

  const isRenovLimpia = (data) => {
    return (data.visaVigente === 'vigente' || data.visaVigente === 'vencida_reciente')
      && data.visaRobadaRevocada === 'no'
      && data.overstayEEUU === 'no'
      && data.cambioCondiciones === 'no';
  };

  const handleRenovacionNext = (answers) => {
    const updatedFd = { ...fd, ...answers };
    setFd(updatedFd);
    
    if (isRenovLimpia(updatedFd)) {
      const generatedSol = buildSol(updatedFd, 0, 'Renovacion Limpia', [], []);
      setSol(generatedSol);
      launchLoading(() => {
        setStep('resultado');
      });
    } else {
      setRenovAlertOpen(true);
    }
  };

  const handleRenovAlertConfirm = () => {
    setRenovAlertOpen(false);
    gotoStep('perfil-economico');
  };

  const handleEconomicoNext = (answers) => {
    setFd((prev) => ({ ...prev, ...answers }));
    gotoStep('historial');
  };

  const handleHistorialNext = (answers) => {
    setFd((prev) => ({ ...prev, ...answers }));
    gotoStep('autorizacion');
  };

  const handleAltNext = (answers) => {
    setFd((prev) => ({ ...prev, ...answers }));
    gotoStep('autorizacion');
  };

  const handleAuthNext = () => {
    const updatedFd = { ...fd, autorizaDatos: true, aceptaDisclaimer: true };
    setFd(updatedFd);
    
    launchLoading(() => {
      const scoring = calcularResultado(updatedFd);
      setSol(scoring);
      setStep('resultado');
    });
  };

  // Scoring engine
  const calcularResultado = (currentFd) => {
    if (currentFd.tipoTramite !== 'B1B2') {
      return buildSol(currentFd, 0, 'Caso Especial', [], []);
    }

    let score = 0;
    let override = false;
    const respuestas = [];
    const hallazgos = [];

    const scored = [
      'edad', 'estadoCivil', 'ocupacion', 'ingresosMensuales',
      'dependientes', 'propiedades',
      'viajesInternacionales', 'motivoViaje', 'negacionVisa',
      'tiempoEstadia', 'quienPagaViaje', 'familiaresIndocumentados',
      'deportacion'
    ];

    scored.forEach((fid) => {
      const val = currentFd[fid];
      if (val === undefined || val === null || val === '') return;

      const opts = DB.opciones[fid] || [];
      const opt = opts.find((o) => o.v === val);
      if (!opt) return;

      score += (typeof opt.p === 'number') ? opt.p : 0;
      if (opt.im === 'Crítico') override = true;

      const h = DB.hallazgos.find((x) => x.id === fid && x.v === val);
      if (h) {
        hallazgos.push({ hallazgo: h.txt });
      }

      respuestas.push({ preguntaId: fid, respuesta: val });
    });

    let perfil = 'Alto Riesgo';
    if (override) {
      perfil = 'Alto Riesgo';
    } else {
      const p = DB.perfilamiento.find((x) => score >= x.min && score <= x.max);
      if (p) perfil = p.perfil;
    }

    return buildSol(currentFd, score, perfil, respuestas, hallazgos);
  };

  const buildSol = (currentFd, score, perfil, respuestas, hallazgos) => {
    return {
      solicitudId: uid(),
      fechaCreacion: new Date().toISOString(),
      nombreCompleto: currentFd.nombreCompleto,
      email: currentFd.email,
      whatsapp: currentFd.whatsapp,
      tipoTramite: currentFd.tipoTramite,
      tipoSolicitud: currentFd.tipoSolicitud || null,
      score: score,
      perfil: perfil,
      estado: 'Completado',
      respuestas: respuestas,
      hallazgos: hallazgos
    };
  };

  // Payment confirmation and Supabase logging wrapper
  const handlePaymentConfirm = async (planKey) => {
    const plan = PLANES[planKey];
    if (!plan) return;

    const dataToSave = {
      ...sol,
      planSeleccionado: planKey,
      planTitulo: plan.titulo,
      planPrecio: plan.precio,
      metadata: {
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        version: '2.4'
      }
    };

    // Save lead to Supabase (does not block redirect)
    await guardarEnSupabase(dataToSave);
    
    // Open payment link in a new tab to avoid GitHub Pages 404
    window.open(plan.link, '_blank', 'noopener,noreferrer');
  };

  // Step renderer mapping
  const renderStepContent = () => {
    switch (step) {
      case 'welcome':
        return <WelcomeStep onStart={handleStart} />;
      case 'datos-personales':
        return (
          <DatosStep 
            initialValues={fd} 
            onNext={handleDatosNext} 
            onBack={goBack} 
          />
        );
      case 'tipo-tramite':
        return (
          <CardSelectStep
            stepBadge="🛂 Paso 2 de 5"
            title="¿Qué tipo de visa necesitas?"
            subtitle="Selecciona la categoría que mejor describe tu situación. Esto determina las preguntas de tu diagnóstico."
            options={DB.opciones.tipoTramite}
            fieldName="tipoTramite"
            selectedValue={fd.tipoTramite}
            onNext={handleTramiteNext}
            onBack={goBack}
          />
        );
      case 'tipo-solicitud':
        return (
          <CardSelectStep
            stepBadge="📋 Paso 3 de 5"
            title="¿Primera vez o renovación?"
            subtitle="¿Es la primera vez que solicitas la visa B1/B2, o ya tuviste una anteriormente?"
            options={DB.opciones.tipoSolicitud}
            fieldName="tipoSolicitud"
            selectedValue={fd.tipoSolicitud}
            onNext={handleSolicitudNext}
            onBack={goBack}
          />
        );
      case 'renovacion':
        return (
          <GenericStep
            stepBadge="🔄 Verificación de Renovación"
            title="Verificación de tu visa anterior"
            subtitle="Estas 4 preguntas determinan si puedes acceder al proceso simplificado de renovación sin entrevista."
            schema={DB.stepSchemas.renovacion}
            dbOpciones={DB.opciones}
            savedAnswers={fd}
            onNext={handleRenovacionNext}
            onBack={goBack}
          />
        );
      case 'perfil-economico':
        return (
          <GenericStep
            stepBadge="💼 Paso 4 de 5"
            title="Tu perfil económico y arraigo"
            subtitle="El cónsul evalúa en profundidad tu situación en Colombia. Responde con precisión para un diagnóstico certero."
            schema={DB.stepSchemas.economico}
            dbOpciones={DB.opciones}
            savedAnswers={fd}
            onNext={handleEconomicoNext}
            onBack={goBack}
          />
        );
      case 'historial':
        return (
          <GenericStep
            stepBadge="✈️ Paso 5 de 5"
            title="Historial de viajes y visas"
            subtitle="Tu historial migratorio es uno de los factores más determinantes en la evaluación consular. Sé completamente honesto(a)."
            schema={DB.stepSchemas.historial}
            dbOpciones={DB.opciones}
            savedAnswers={fd}
            onNext={handleHistorialNext}
            onBack={goBack}
          />
        );
      case 'f1m1':
        return (
          <GenericStep
            stepBadge="🎓 Perfil Estudiantil"
            title="Tu proceso de visa de estudiante"
            subtitle="Cuéntanos sobre tu programa académico y tu estado actual de documentación."
            infoBanner="Esta información ayuda a nuestro equipo a preparar tu caso de manera óptima. El proceso F1/M1 requiere documentación muy específica."
            schema={DB.stepSchemas.f1m1}
            dbOpciones={DB.opciones}
            savedAnswers={fd}
            onNext={handleAltNext}
            onBack={goBack}
          />
        );
      case 'trabajo':
        return (
          <GenericStep
            stepBadge="🏢 Perfil Laboral"
            title="Tu proceso de visa de trabajo"
            subtitle="Las visas de trabajo en EE. UU. requieren una petición activa por parte de un empleador patrocinador."
            infoBanner="Esta información permite a nuestro equipo determinar tu categoría y el estado de tu caso con mayor precisión."
            schema={DB.stepSchemas.trabajo}
            dbOpciones={DB.opciones}
            savedAnswers={fd}
            onNext={handleAltNext}
            onBack={goBack}
          />
        );
      case 'especial':
        return (
          <GenericStep
            stepBadge="📝 Caso Especial"
            title="Cuéntanos sobre tu caso"
            subtitle="Describe tu situación brevemente. Un asesor consular senior revisará tu caso personalmente."
            infoBanner="Los casos especiales son analizados individualmente por nuestro equipo de expertos consulares."
            schema={DB.stepSchemas.especial}
            dbOpciones={DB.opciones}
            savedAnswers={fd}
            onNext={handleAltNext}
            onBack={goBack}
          />
        );
      case 'autorizacion':
        return (
          <AutorizacionStep 
            onNext={handleAuthNext} 
            onBack={goBack} 
          />
        );
      case 'resultado':
        return (
          <ResultScreen 
            sol={sol} 
            onOpenPlanModal={(key) => setActivePlanKey(key)} 
            onReset={resetFlow} 
          />
        );
      default:
        return null;
    }
  };

  const progress = PROG[step] || { lbl: '', pct: 0 };
  const showProgressBar = step !== 'welcome';

  return (
    <>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <div id="app">
        <header id="hdr">
          <div className="logo">
            <div className="lm">VP</div>
            <span className="ln">Visazo <strong>Pro</strong></span>
          </div>
          <div className="hbadge">🔒 Diagnóstico confidencial</div>
        </header>

        <div id="card">
          {showProgressBar && (
            <div id="pbar-wrap" style={{ display: 'block' }}>
              <div className="ptrack">
                <div 
                  className="pfill" 
                  id="pfill" 
                  style={{ width: `${progress.pct}%` }}
                ></div>
              </div>
              <div className="pmeta">
                <span className="plbl" id="plbl">{progress.lbl}</span>
                <span className="ppct" id="ppct">{progress.pct}%</span>
              </div>
            </div>
          )}

          <div id="sw">
            {renderStepContent()}
          </div>
        </div>

        <div className="footer">
          © 2025 Visazo Pro · Asesoría consular profesional · <a href="#privacy">Política de privacidad</a>
        </div>
      </div>

      {/* Loading Overlay */}
      <div id="loverlay" className={loading ? 'show' : ''}>
        <div className="spin"></div>
        <div className="ltxt">Calculando tu diagnóstico...</div>
        <div className="lstxt">Evaluando factores de riesgo consular. Por favor espera.</div>
      </div>

      {/* Warning/Renovation Modal */}
      <RenovAlertModal 
        isOpen={renovAlertOpen} 
        onConfirm={handleRenovAlertConfirm} 
      />

      {/* Payment checkout modal */}
      <PlanModal
        isOpen={activePlanKey !== null}
        planKey={activePlanKey}
        onClose={() => setActivePlanKey(null)}
        onConfirm={handlePaymentConfirm}
      />
    </>
  );
}
