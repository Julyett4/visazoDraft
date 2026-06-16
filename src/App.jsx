import { useState, useEffect } from 'react';
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
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import Footer from './components/Footer';
import VisasHub from './components/VisasHub';
import VisaDetail from './components/VisaDetail';
import { VISAS_DATA } from './data/visasData';
import PricingPage from './components/PricingPage';
import HowItWorksPage from './components/HowItWorksPage';
import FeaturesPage from './components/FeaturesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import JobsPage from './components/JobsPage';
import BlogIndexPage from './components/BlogIndexPage';
import HelpCenterPage from './components/HelpCenterPage';
import Header from './components/Header';


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

  const [showPrivacy, setShowPrivacy] = useState(
    window.location.pathname === '/privacidad' || 
    window.location.hash === '#privacy' || 
    window.location.hash === '#/privacidad'
  );

  const [showTerms, setShowTerms] = useState(
    window.location.pathname === '/terminos' || 
    window.location.hash === '#terms' || 
    window.location.hash === '#/terminos'
  );

  const [showPricing, setShowPricing] = useState(
    window.location.pathname === '/precios' || 
    window.location.hash === '#planes' || 
    window.location.hash === '#/precios' ||
    window.location.hash === '#/planes'
  );

  const [showHowItWorks, setShowHowItWorks] = useState(
    window.location.pathname === '/como-funciona' || 
    window.location.hash === '#como-funciona' || 
    window.location.hash === '#/como-funciona'
  );

  const [showFeatures, setShowFeatures] = useState(
    window.location.pathname === '/caracteristicas' || 
    window.location.hash === '#caracteristicas' || 
    window.location.hash === '#/caracteristicas'
  );

  const [showAbout, setShowAbout] = useState(
    window.location.pathname === '/nosotros' || 
    window.location.hash === '#nosotros' || 
    window.location.hash === '#/nosotros'
  );

  const [showContact, setShowContact] = useState(
    window.location.pathname === '/contacto' || 
    window.location.hash === '#contacto' || 
    window.location.hash === '#/contacto'
  );

  const [showJobs, setShowJobs] = useState(
    window.location.pathname === '/empleos' || 
    window.location.hash === '#empleos' || 
    window.location.hash === '#/empleos'
  );

  const [showBlog, setShowBlog] = useState(
    window.location.pathname === '/blog' || 
    window.location.hash === '#blog' || 
    window.location.hash === '#/blog'
  );

  const [showHelp, setShowHelp] = useState(
    window.location.pathname === '/ayuda' || 
    window.location.hash === '#ayuda' || 
    window.location.hash === '#/ayuda'
  );

  const getVisaRouteFromUrl = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path === '/visas') return 'hub';
    if (path === '/visas/turismo') return 'turismo';
    if (path === '/visas/estudiante') return 'estudiante';
    if (path === '/visas/trabajo') return 'trabajo';
    if (hash === '#visas' || hash === '#/visas') return 'hub';
    if (hash === '#visas/turismo' || hash === '#/visas/turismo') return 'turismo';
    if (hash === '#visas/estudiante' || hash === '#/visas/estudiante') return 'estudiante';
    if (hash === '#visas/trabajo' || hash === '#/visas/trabajo') return 'trabajo';
    return null;
  };

  const [visaRoute, setVisaRoute] = useState(getVisaRouteFromUrl());

  useEffect(() => {
    const handleUrlChange = () => {
      const isPriv = window.location.pathname === '/privacidad' || 
                     window.location.hash === '#privacy' || 
                     window.location.hash === '#/privacidad';
      setShowPrivacy(isPriv);

      const isTerms = window.location.pathname === '/terminos' || 
                      window.location.hash === '#terms' || 
                      window.location.hash === '#/terminos';
      setShowTerms(isTerms);

      const isPricing = window.location.pathname === '/precios' || 
                        window.location.hash === '#planes' || 
                        window.location.hash === '#/precios' ||
                        window.location.hash === '#/planes';
      setShowPricing(isPricing);

      const isHow = window.location.pathname === '/como-funciona' || 
                    window.location.hash === '#como-funciona' || 
                    window.location.hash === '#/como-funciona';
      setShowHowItWorks(isHow);

      const isFeat = window.location.pathname === '/caracteristicas' || 
                     window.location.hash === '#caracteristicas' || 
                     window.location.hash === '#/caracteristicas';
      setShowFeatures(isFeat);

      const isAbout = window.location.pathname === '/nosotros' || 
                      window.location.hash === '#nosotros' || 
                      window.location.hash === '#/nosotros';
      setShowAbout(isAbout);

      const isContact = window.location.pathname === '/contacto' || 
                        window.location.hash === '#contacto' || 
                        window.location.hash === '#/contacto';
      setShowContact(isContact);

      const isJobs = window.location.pathname === '/empleos' || 
                     window.location.hash === '#empleos' || 
                     window.location.hash === '#/empleos';
      setShowJobs(isJobs);

      const isBlog = window.location.pathname === '/blog' || 
                     window.location.hash === '#blog' || 
                     window.location.hash === '#/blog';
      setShowBlog(isBlog);

      const isHelp = window.location.pathname === '/ayuda' || 
                     window.location.hash === '#ayuda' || 
                     window.location.hash === '#/ayuda';
      setShowHelp(isHelp);

      setVisaRoute(getVisaRouteFromUrl());
    };
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handlePrivacyBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowPrivacy(false);
    } else {
      window.history.back();
    }
  };

  const handleTermsBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowTerms(false);
    } else {
      window.history.back();
    }
  };

  const handlePricingBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowPricing(false);
    } else {
      window.history.back();
    }
  };

  const handleHowItWorksBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowHowItWorks(false);
    } else {
      window.history.back();
    }
  };

  const handleFeaturesBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowFeatures(false);
    } else {
      window.history.back();
    }
  };

  const handleAboutBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowAbout(false);
    } else {
      window.history.back();
    }
  };

  const handleContactBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowContact(false);
    } else {
      window.history.back();
    }
  };

  const handleJobsBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowJobs(false);
    } else {
      window.history.back();
    }
  };

  const handleBlogBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowBlog(false);
    } else {
      window.history.back();
    }
  };

  const handleHelpBack = () => {
    const hasHistory = window.history.state !== null;
    if (!hasHistory) {
      window.history.pushState(null, '', '/');
      setShowHelp(false);
    } else {
      window.history.back();
    }
  };

  const handleSelectPlanFromPricing = (planKey) => {
    setActivePlanKey(planKey);
  };

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
  const showProgressBar = step !== 'welcome' && !showPrivacy && !showTerms && !showPricing && !showHowItWorks && !showFeatures && !showAbout && !showContact && !showJobs && !showBlog && !showHelp;

  // Navigation callbacks for Visas Americanas
  const handleHomeClick = () => {
    window.history.pushState(null, '', '/');
    setVisaRoute(null);
    setShowPrivacy(false);
    setShowTerms(false);
    setShowPricing(false);
    setShowHowItWorks(false);
    setShowFeatures(false);
    setShowAbout(false);
    setShowContact(false);
    setShowJobs(false);
    setShowBlog(false);
    setShowHelp(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHubClick = () => {
    window.history.pushState(null, '', '/visas');
    setVisaRoute('hub');
    setShowPrivacy(false);
    setShowTerms(false);
    setShowPricing(false);
    setShowHowItWorks(false);
    setShowFeatures(false);
    setShowAbout(false);
    setShowContact(false);
    setShowJobs(false);
    setShowBlog(false);
    setShowHelp(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVisaNavigate = (routeKey) => {
    window.history.pushState(null, '', `/visas/${routeKey}`);
    setVisaRoute(routeKey);
    setShowPrivacy(false);
    setShowTerms(false);
    setShowPricing(false);
    setShowHowItWorks(false);
    setShowFeatures(false);
    setShowAbout(false);
    setShowContact(false);
    setShowJobs(false);
    setShowBlog(false);
    setShowHelp(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartForVisa = (category) => {
    setFd({ tipoTramite: category });
    setHistory([]);
    setStep('datos-personales');
    setVisaRoute(null);
    setShowPrivacy(false);
    setShowTerms(false);
    setShowPricing(false);
    setShowHowItWorks(false);
    setShowFeatures(false);
    setShowAbout(false);
    setShowContact(false);
    setShowJobs(false);
    setShowBlog(false);
    setShowHelp(false);
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic SEO meta-tags updater
  useEffect(() => {
    let title = 'Evaluador de Viabilidad Consular | Visazo Pro';
    let description = 'Diagnóstico inteligente para visa americana. Evalúa tu perfil consular en minutos con nuestra herramienta de asesoría legal de alto nivel.';

    if (showPrivacy) {
      title = 'Política de Privacidad | Visazo Pro';
      description = 'Políticas de confidencialidad, protección de datos personales y términos legales de Visazo Pro.';
    } else if (showTerms) {
      title = 'Términos y Condiciones | Visazo Pro';
      description = 'Términos de servicio, disclaimer de asesoría consular y condiciones de uso de la plataforma Visazo Pro.';
    } else if (showPricing) {
      title = 'Planes y Precios | Visazo Pro';
      description = 'Planes de suscripción y servicios de asesoría consular para visa americana.';
    } else if (showHowItWorks) {
      title = 'Cómo Funciona | Visazo Pro';
      description = 'Conoce el proceso de 5 pasos para diligenciar tu formulario DS-160 y prepararte para tu entrevista de visa.';
    } else if (showFeatures) {
      title = 'Características de nuestro sistema | Visazo Pro';
      description = 'Las ventajas tecnológicas y legales de preparar tu visa con Visazo Pro.';
    } else if (showAbout) {
      title = 'Acerca de Nosotros | Visazo Pro';
      description = 'Conoce la historia, misión, visión y el equipo de expertos detrás de Visazo Pro.';
    } else if (showContact) {
      title = 'Contacto y Soporte | Visazo Pro';
      description = 'Ponte en contacto con nuestro equipo para recibir soporte o resolver dudas sobre tu trámite de visa.';
    } else if (showJobs) {
      title = 'Trabaja con Nosotros | Visazo Pro';
      description = 'Explora las vacantes activas y únete al equipo de talento de Visazo Pro.';
    } else if (showBlog) {
      title = 'Blog de Consejos Consulares | Visazo Pro';
      description = 'Guías y artículos útiles para preparar tu entrevista de visa y diligenciar el DS-160 sin errores.';
    } else if (showHelp) {
      title = 'Centro de Ayuda | Visazo Pro';
      description = 'Preguntas frecuentes y soporte técnico sobre agendamientos, formularios y pagos.';
    } else if (visaRoute === 'hub') {
      title = 'Categorías de Visas Americanas | Visazo Pro';
      description = 'Información oficial sobre visas de turismo, estudiante y trabajo para Estados Unidos. Requisitos y aranceles consulares.';
    } else if (visaRoute && VISAS_DATA[visaRoute]) {
      const v = VISAS_DATA[visaRoute];
      title = v.seoTitle;
      description = v.seoDescription;
    }

    document.title = title;
    
    // Update meta description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', description);
    }
  }, [showPrivacy, showTerms, showPricing, showHowItWorks, showFeatures, visaRoute]);

  const isDiagnosticInProgress = step !== 'welcome' && 
    !showPrivacy && !showTerms && !showPricing && 
    !showHowItWorks && !showFeatures && !showAbout && 
    !showContact && !showJobs && !showBlog && !showHelp && 
    !visaRoute;

  const hideHeader = showPrivacy || showTerms;

  return (
    <>
      <div className="orb-wrapper">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
      </div>

      {!hideHeader && (
        <Header
          minimal={isDiagnosticInProgress}
          onHomeClick={handleHomeClick}
          onHowItWorksClick={() => {
            window.history.pushState({ isHow: true }, '', '/como-funciona');
            setShowPrivacy(false); setShowTerms(false); setShowPricing(false);
            setShowHowItWorks(true); setShowFeatures(false); setShowAbout(false);
            setShowContact(false); setShowJobs(false); setShowBlog(false); setShowHelp(false);
            setVisaRoute(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onFeaturesClick={() => {
            window.history.pushState({ isFeat: true }, '', '/caracteristicas');
            setShowPrivacy(false); setShowTerms(false); setShowPricing(false);
            setShowHowItWorks(false); setShowFeatures(true); setShowAbout(false);
            setShowContact(false); setShowJobs(false); setShowBlog(false); setShowHelp(false);
            setVisaRoute(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onPricingClick={() => {
            window.history.pushState({ isPricing: true }, '', '/precios');
            setShowPrivacy(false); setShowTerms(false); setShowPricing(true);
            setShowHowItWorks(false); setShowFeatures(false); setShowAbout(false);
            setShowContact(false); setShowJobs(false); setShowBlog(false); setShowHelp(false);
            setVisaRoute(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onVisasHubClick={() => {
            window.history.pushState({ isVisas: true }, '', '/visas');
            setShowPrivacy(false); setShowTerms(false); setShowPricing(false);
            setShowHowItWorks(false); setShowFeatures(false); setShowAbout(false);
            setShowContact(false); setShowJobs(false); setShowBlog(false); setShowHelp(false);
            setVisaRoute('hub');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onBlogClick={() => {
            window.history.pushState({ isBlog: true }, '', '/blog');
            setShowPrivacy(false); setShowTerms(false); setShowPricing(false);
            setShowHowItWorks(false); setShowFeatures(false); setShowAbout(false);
            setShowContact(false); setShowJobs(false); setShowBlog(true); setShowHelp(false);
            setVisaRoute(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onStartDiagnostic={() => handleStartForVisa()}
        />
      )}

      {showPrivacy ? (
        <PrivacyPage onBack={handlePrivacyBack} />
      ) : showTerms ? (
        <TermsPage onBack={handleTermsBack} />
      ) : showPricing ? (
        <PricingPage 
          onBack={handlePricingBack} 
          onSelectPlan={handleSelectPlanFromPricing}
          onStartDiagnostic={handleStartForVisa}
        />
      ) : showHowItWorks ? (
        <HowItWorksPage 
          onBack={handleHowItWorksBack}
          onStartDiagnostic={handleStartForVisa}
        />
      ) : showFeatures ? (
        <FeaturesPage 
          onBack={handleFeaturesBack}
          onStartDiagnostic={handleStartForVisa}
        />
      ) : showAbout ? (
        <AboutPage 
          onBack={handleAboutBack} 
          onStartDiagnostic={handleStartForVisa}
        />
      ) : showContact ? (
        <ContactPage onBack={handleContactBack} />
      ) : showJobs ? (
        <JobsPage onBack={handleJobsBack} />
      ) : showBlog ? (
        <BlogIndexPage onBack={handleBlogBack} />
      ) : showHelp ? (
        <HelpCenterPage onBack={handleHelpBack} />
      ) : visaRoute === 'hub' ? (
        <VisasHub 
          onNavigate={handleVisaNavigate} 
          onHomeClick={handleHomeClick} 
          onStartDiagnostic={handleStartForVisa}
        />
      ) : (visaRoute && VISAS_DATA[visaRoute]) ? (
        <VisaDetail 
          visa={VISAS_DATA[visaRoute]}
          onHomeClick={handleHomeClick}
          onHubClick={handleHubClick}
          onStartDiagnostic={handleStartForVisa}
        />
      ) : (
        <div id="app">

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
        </div>
      )}

      <Footer
        onPrivacyClick={() => {
          window.history.pushState({ isPrivacy: true }, '', '/privacidad');
          setShowPrivacy(true);
          setShowTerms(false);
          setShowPricing(false);
          setShowHowItWorks(false);
          setShowFeatures(false);
          setShowAbout(false);
          setShowContact(false);
          setShowJobs(false);
          setShowBlog(false);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onTermsClick={() => {
          window.history.pushState({ isTerms: true }, '', '/terminos');
          setShowPrivacy(false);
          setShowTerms(true);
          setShowPricing(false);
          setShowHowItWorks(false);
          setShowFeatures(false);
          setShowAbout(false);
          setShowContact(false);
          setShowJobs(false);
          setShowBlog(false);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onPricingClick={() => {
          window.history.pushState({ isPricing: true }, '', '/precios');
          setShowPrivacy(false);
          setShowTerms(false);
          setShowPricing(true);
          setShowHowItWorks(false);
          setShowFeatures(false);
          setShowAbout(false);
          setShowContact(false);
          setShowJobs(false);
          setShowBlog(false);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onHowItWorksClick={() => {
          window.history.pushState({ isHow: true }, '', '/como-funciona');
          setShowPrivacy(false);
          setShowTerms(false);
          setShowPricing(false);
          setShowHowItWorks(true);
          setShowFeatures(false);
          setShowAbout(false);
          setShowContact(false);
          setShowJobs(false);
          setShowBlog(false);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onFeaturesClick={() => {
          window.history.pushState({ isFeat: true }, '', '/caracteristicas');
          setShowPrivacy(false);
          setShowTerms(false);
          setShowPricing(false);
          setShowHowItWorks(false);
          setShowFeatures(true);
          setShowAbout(false);
          setShowContact(false);
          setShowJobs(false);
          setShowBlog(false);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onAboutClick={() => {
          window.history.pushState({ isAbout: true }, '', '/nosotros');
          setShowPrivacy(false);
          setShowTerms(false);
          setShowPricing(false);
          setShowHowItWorks(false);
          setShowFeatures(false);
          setShowAbout(true);
          setShowContact(false);
          setShowJobs(false);
          setShowBlog(false);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onContactClick={() => {
          window.history.pushState({ isContact: true }, '', '/contacto');
          setShowPrivacy(false);
          setShowTerms(false);
          setShowPricing(false);
          setShowHowItWorks(false);
          setShowFeatures(false);
          setShowAbout(false);
          setShowContact(true);
          setShowJobs(false);
          setShowBlog(false);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onJobsClick={() => {
          window.history.pushState({ isJobs: true }, '', '/empleos');
          setShowPrivacy(false);
          setShowTerms(false);
          setShowPricing(false);
          setShowHowItWorks(false);
          setShowFeatures(false);
          setShowAbout(false);
          setShowContact(false);
          setShowJobs(true);
          setShowBlog(false);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onBlogClick={() => {
          window.history.pushState({ isBlog: true }, '', '/blog');
          setShowPrivacy(false);
          setShowTerms(false);
          setShowPricing(false);
          setShowHowItWorks(false);
          setShowFeatures(false);
          setShowAbout(false);
          setShowContact(false);
          setShowJobs(false);
          setShowBlog(true);
          setShowHelp(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onHelpClick={() => {
          window.history.pushState({ isHelp: true }, '', '/ayuda');
          setShowPrivacy(false);
          setShowTerms(false);
          setShowPricing(false);
          setShowHowItWorks(false);
          setShowFeatures(false);
          setShowAbout(false);
          setShowContact(false);
          setShowJobs(false);
          setShowBlog(false);
          setShowHelp(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onVisaNavigate={handleVisaNavigate}
      />

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
