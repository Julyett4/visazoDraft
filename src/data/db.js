export const PLANES = {
  PASAPORTE_EXITO: {
    titulo: 'Pasaporte al Éxito',
    precio: '$49.000 COP',
    emoji: '📄',
    color: 'verde',
    incluye: [
      'PDF con la lista de documentos requeridos para tu caso',
      'Recomendaciones personalizadas según tu perfil consular',
    ],
    link: import.meta.env.VITE_LINK_PASAPORTE || 'LINK_PASAPORTE_AQUI',
  },
  PLAN_PRO: {
    titulo: 'Plan Pro',
    precio: '$197.000 COP',
    emoji: '🛂',
    color: 'blue',
    incluye: [
      'Asesoría consular personalizada',
      'Diligenciamiento completo del Formulario DS-160',
      'Agendamiento de cita consular',
      '(No incluye videollamada)',
    ],
    link: import.meta.env.VITE_LINK_PRO || 'LINK_PRO_AQUI',
  },
  PLAN_PREMIUM: {
    titulo: 'Plan Premium',
    precio: '$347.000 COP',
    emoji: '⭐',
    color: 'purple',
    incluye: [
      'Asesoría integral y personalizada',
      'Videollamada de preparación para la entrevista',
      'Diligenciamiento del Formulario DS-160',
      'Agendamiento de cita consular',
      'Plan estratégico a 6 meses para mejorar tu perfil',
      'Seguimiento continuo hasta tu entrevista',
    ],
    link: import.meta.env.VITE_LINK_PREMIUM || 'LINK_PREMIUM_AQUI',
  },
  RENOV_PRO: {
    titulo: 'Plan Pro Renovación',
    precio: '$127.000 COP',
    emoji: '📋',
    color: 'blue',
    incluye: [
      'Asesoría para proceso de renovación sin entrevista',
      'Diligenciamiento de formulario de renovación',
      'Agendamiento de cita (proceso simplificado)',
    ],
    link: import.meta.env.VITE_LINK_RENOV_PRO || 'https://mpago.li/2ZTxuW5',
  },
  RENOV_PREMIUM: {
    titulo: 'Plan Premium Renovación VIP',
    precio: '$247.000 COP',
    emoji: '⭐',
    color: 'purple',
    incluye: [
      'Asesoría completa de renovación',
      'Diligenciamiento de formulario',
      'Agendamiento de cita',
      'Logística de entrega y recogida de pasaporte sin filas',
    ],
    link: import.meta.env.VITE_LINK_RENOV_PREMIUM || 'https://mpago.li/2ZoUmBu',
  },
  ESPECIAL: {
    titulo: 'Asesoría Especializada',
    precio: 'Sesión personalizada',
    emoji: '📅',
    color: 'purple',
    incluye: [
      'Análisis de viabilidad de tu visa especial',
      'Revisión de documentación técnica requerida',
      'Sesión privada con experto en visas especiales (F1, M1, H1B, L1...)',
    ],
    link: import.meta.env.VITE_LINK_ESPECIAL || 'https://mpago.li/1sczD47',
  },
};


export const DB = {
  opciones: {
    tipoTramite: [
      { v: 'B1B2', t: 'Visa de Turismo o Negocios (B1/B2)', i: '🏖️', d: 'Turismo, visita familiar, negocios de corto plazo' },
      { v: 'F1M1', t: 'Visa de Estudiante (F1 / M1)', i: '🎓', d: 'Estudios académicos, idiomas, cursos vocacionales' },
      { v: 'Trabajo', t: 'Visa de Trabajo', i: '🏢', d: 'H1B, L1, O1 y otras categorías laborales' },
      { v: 'Especial', t: 'Otro / Caso Especial', i: '📋', d: 'P, R, J, TN u otro tipo de visa especial' },
    ],
    tipoSolicitud: [
      { v: 'primera', t: 'Primera vez', i: '✨', d: 'Nunca he tenido una visa B1/B2 americana' },
      { v: 'renovacion', t: 'Renovación', i: '🔄', d: 'Ya tuve una visa B1/B2 anteriormente' },
    ],
    visaVigente: [
      { v: 'vigente', t: 'Sí, está vigente actualmente' },
      { v: 'vencida_reciente', t: 'Venció hace menos de 12 meses' },
      { v: 'vencida_antigua', t: 'Venció hace más de 12 meses' },
    ],
    visaRobadaRevocada: [
      { v: 'no', t: 'No, se encuentra en regla' },
      { v: 'si', t: 'Sí, fue reportada, extraviada o revocada' },
    ],
    overstayEEUU: [
      { v: 'no', t: 'No, siempre respeté el tiempo autorizado' },
      { v: 'si', t: 'Sí, excedí el tiempo permitido en alguna visita' },
    ],
    cambioCondiciones: [
      { v: 'no', t: 'No, mis condiciones son similares a antes' },
      { v: 'si', t: 'Sí, mi situación cambió considerablemente' },
    ],
    edad: [
      { v: 'menor18', t: 'Menor de 18 años', p: 0, im: 'Informativo' },
      { v: '18_25', t: 'Entre 18 y 25 años', p: 1, im: 'Riesgo' },
      { v: '26_45', t: 'Entre 26 y 45 años', p: -1, im: 'Positivo' },
      { v: '46_60', t: 'Entre 46 y 60 años', p: 0, im: 'Informativo' },
      { v: 'mayor60', t: 'Mayor de 60 años', p: 1, im: 'Riesgo' },
    ],
    estadoCivil: [
      { v: 'SO', t: 'Soltero(a)', p: 2, im: 'Riesgo' },
      { v: 'MA', t: 'Casado(a)', p: -1, im: 'Positivo' },
      { v: 'UL', t: 'Unión Libre', p: 0, im: 'Informativo' },
      { v: 'D', t: 'Divorciado(a)', p: 1, im: 'Riesgo' },
      { v: 'V', t: 'Viudo(a)', p: 0, im: 'Informativo' },
    ],
    ocupacion: [
      { v: 'EMP', t: 'Empleado(a) formal', p: -2, im: 'Positivo' },
      { v: 'IND', t: 'Trabajador(a) independiente', p: 0, im: 'Informativo' },
      { v: 'EMPRES', t: 'Empresario(a) / Propietario de negocio', p: -2, im: 'Positivo' },
      { v: 'EST', t: 'Estudiante', p: 1, im: 'Riesgo' },
      { v: 'HOG', t: 'Ama/o de casa', p: 2, im: 'Riesgo' },
      { v: 'DES', t: 'Desempleado(a)', p: 4, im: 'Crítico' },
    ],
    ingresosMensuales: [
      { v: 'AL', t: 'Más de $10.000.000 COP', p: -3, im: 'Positivo' },
      { v: 'SO', t: 'Entre $5.000.000 y $10.000.000 COP', p: -2, im: 'Positivo' },
      { v: 'ES', t: 'Entre $3.000.000 y $5.000.000 COP', p: -1, im: 'Positivo' },
      { v: 'BA', t: 'Entre $1.000.000 y $3.000.000 COP', p: 1, im: 'Riesgo' },
      { v: 'IN', t: 'Menos de $1.000.000 COP', p: 3, im: 'Crítico' },
    ],
    dependientes: [
      { v: 'si', t: 'Sí, tengo hijos, cónyuge u otros dependientes', p: -1, im: 'Positivo' },
      { v: 'no', t: 'No tengo personas a mi cargo', p: 1, im: 'Riesgo' },
    ],
    propiedades: [
      { v: 'si', t: 'Sí, tengo bienes a mi nombre', p: -2, im: 'Positivo' },
      { v: 'no', t: 'No tengo bienes registrados a mi nombre', p: 1, im: 'Riesgo' },
    ],
    viajesInternacionales: [
      { v: '0', t: 'Ninguno (primer viaje al exterior)', p: 3, im: 'Crítico' },
      { v: '1', t: '1 viaje', p: 1, im: 'Riesgo' },
      { v: '2', t: 'Entre 2 y 5 viajes', p: -1, im: 'Positivo' },
      { v: '3', t: 'Más de 5 viajes', p: -2, im: 'Positivo' },
    ],
    motivoViaje: [
      { v: 'turismo', t: 'Turismo / Vacaciones', p: -1, im: 'Positivo' },
      { v: 'negocios', t: 'Negocios / Conferencias', p: -1, im: 'Positivo' },
      { v: 'familia', t: 'Visitar familiares', p: 2, im: 'Riesgo' },
      { v: 'medico', t: 'Tratamiento médico', p: 0, im: 'Informativo' },
      { v: 'otro', t: 'Otro motivo', p: 1, im: 'Riesgo' },
    ],
    negacionVisa: [
      { v: 'no', t: 'No, nunca me han negado la visa', p: 0, im: 'Informativo' },
      { v: 'si_antigua', t: 'Sí, hace más de 2 años', p: 2, im: 'Riesgo' },
      { v: 'si_reciente', t: 'Sí, hace menos de 2 años', p: 5, im: 'Crítico' },
    ],
    tiempoEstadia: [
      { v: 'corto', t: 'Menos de 3 meses', p: 0, im: 'Informativo' },
      { v: 'largo', t: 'Más de 3 meses', p: 4, im: 'Crítico' },
    ],
    quienPagaViaje: [
      { v: 'YO', t: 'Yo mismo(a) con mis propios recursos', p: -2, im: 'Positivo' },
      { v: 'CONY', t: 'Mi esposo(a) / pareja', p: 0, im: 'Informativo' },
      { v: 'PAD', t: 'Mis padres', p: 1, im: 'Riesgo' },
      { v: 'FAM', t: 'Un familiar que vive en EE.UU.', p: 2, im: 'Riesgo' },
      { v: 'AMI', t: 'Un amigo que vive en EE.UU.', p: 4, im: 'Crítico' },
    ],
    familiaresIndocumentados: [
      { v: 'no', t: 'No tengo familiares indocumentados en EE.UU.', p: 0, im: 'Informativo' },
      { v: 'si', t: 'Sí, tengo familiares indocumentados allá', p: 5, im: 'Crítico' },
    ],
    deportacion: [
      { v: 'si', t: 'Sí, tuve alguna situación de este tipo', p: 10, im: 'Crítico' },
      { v: 'no', t: 'No, nunca he tenido ninguna situación de estas', p: 0, im: 'Informativo' },
    ],
    tipoEstudio: [
      { v: 'universitario', t: 'Carrera universitaria de grado' },
      { v: 'posgrado', t: 'Maestría o Doctorado' },
      { v: 'idiomas', t: 'Curso de idiomas (ESL)' },
      { v: 'vocacional', t: 'Curso vocacional o técnico (M1)' },
    ],
    poseeI20: [
      { v: 'si', t: 'Sí, ya tengo el I-20 en mis manos' },
      { v: 'en_tramite', t: 'Está en trámite / lo estoy solicitando' },
      { v: 'no', t: 'No, aún no tengo institución seleccionada' },
    ],
    financiacionEstudios: [
      { v: 'propio', t: 'Recursos propios / familia' },
      { v: 'beca', t: 'Beca o subsidio institucional' },
      { v: 'prestamo', t: 'Préstamo bancario o crédito educativo' },
      { v: 'patron', t: 'Empresa patrocinadora' },
    ],
    fondosDisponibles: [
      { v: 'si_completo', t: 'Sí, fondos completos y demostrables' },
      { v: 'parcial', t: 'Parcialmente — estoy completando los fondos' },
      { v: 'no', t: 'Aún no cuento con los fondos suficientes' },
    ],
    ofertaLaboralUSA: [
      { v: 'si', t: 'Sí, tengo oferta formal y empresa patrocinadora' },
      { v: 'no', t: 'No, aún no tengo oferta ni patrocinador' },
    ],
    peticionUSCIS: [
      { v: 'si', t: 'Sí, la petición fue aprobada por USCIS' },
      { v: 'en_tramite', t: 'Está en trámite actualmente' },
      { v: 'no', t: 'Aún no se ha iniciado el proceso' },
    ],
    soportesCasoEspecial: [
      { v: 'si', t: 'Sí, cuento con documentación completa de soporte' },
      { v: 'parcial', t: 'Tengo algunos documentos pero no todos' },
      { v: 'no', t: 'No, aún no tengo documentación de soporte' },
    ],
  },

  hallazgos: [
    { id: 'ocupacion', v: 'DES', txt: 'Solicitante actualmente desempleado' },
    { id: 'viajesInternacionales', v: '0', txt: 'No registra viajes internacionales recientes' },
    { id: 'negacionVisa', v: 'si_reciente', txt: 'Negación reciente de visa americana' },
    { id: 'familiaresIndocumentados', v: 'si', txt: 'Reporta familiares indocumentados en EE.UU.' },
    { id: 'deportacion', v: 'si', txt: 'Deportación, estancia ilegal severa o visa cancelada registrada en EE.UU.' },
  ],

  perfilamiento: [
    { perfil: 'Alta Viabilidad', min: -99, max: 1 },
    { perfil: 'Viabilidad Media', min: 2, max: 6 },
    { perfil: 'Alto Riesgo', min: 7, max: 999 },
  ],

  stepSchemas: {
    renovacion: [
      { id: 'visaVigente', lbl: '¿Tu visa anterior está vigente o venció hace menos de 12 meses?' },
      { id: 'visaRobadaRevocada', lbl: '¿Tu visa anterior fue reportada como robada, extraviada o revocada?' },
      { id: 'overstayEEUU', lbl: '¿Alguna vez excediste el tiempo autorizado en EE. UU.?' },
      { id: 'cambioCondiciones', lbl: '¿Tu situación laboral, financiera o civil cambió radicalmente desde tu primera visa?' },
    ],
    economico: [
      { id: 'edad', lbl: '¿Cuál es tu edad?' },
      { id: 'estadoCivil', lbl: '¿Cuál es tu estado civil actual?' },
      { id: 'ocupacion', lbl: '¿Cuál es tu situación laboral u ocupación principal?' },
      { id: 'ingresosMensuales', lbl: '¿A cuánto ascienden tus ingresos mensuales promedio? (COP)' },
      { id: 'dependientes', lbl: '¿Tienes personas a tu cargo (hijos, cónyuge u otros)?' },
      { id: 'propiedades', lbl: '¿Tienes bienes inmuebles o vehículos registrados a tu nombre?' },
    ],
    historial: [
      { id: 'viajesInternacionales', lbl: '¿Cuántos viajes internacionales has realizado en los últimos 5 años?' },
      { id: 'motivoViaje', lbl: '¿Cuál es el motivo principal de tu viaje a EE. UU.?' },
      { id: 'negacionVisa', lbl: '¿Te han negado la visa americana anteriormente?' },
      { id: 'tiempoEstadia', lbl: '¿Cuánto tiempo planeas quedarte en Estados Unidos?' },
      { id: 'quienPagaViaje', lbl: '¿Quién financiará los gastos de tu viaje?' },
      { id: 'familiaresIndocumentados', lbl: '¿Tienes familiares indocumentados actualmente en Estados Unidos?' },
      { id: 'deportacion', lbl: '¿Alguna vez has sido deportado de EE.UU., has tenido estancia ilegal severa o te han cancelado una visa?' },
    ],
    f1m1: [
      { id: 'tipoEstudio', lbl: '¿Qué tipo de estudios realizarás en EE. UU.?' },
      { id: 'poseeI20', lbl: '¿Ya cuentas con el Formulario I-20 emitido por la institución?' },
      { id: 'financiacionEstudios', lbl: '¿Cómo se costearán la matrícula y tu manutención durante el programa?' },
      { id: 'fondosDisponibles', lbl: '¿Cuentas con fondos demostrables para cubrir el primer año académico?' },
    ],
    trabajo: [
      { id: 'ofertaLaboralUSA', lbl: '¿Ya cuentas con una oferta de empleo formal y empresa patrocinadora en EE. UU.?' },
      { id: 'peticionUSCIS', lbl: '¿Tu empleador ya obtuvo la aprobación de la petición de trabajo (I-129 o I-797)?' },
    ],
    especial: [
      { id: 'propositoCasoEspecial', lbl: 'Describe brevemente el propósito de tu viaje y el tipo de visa que necesitas', tipo: 'textarea' },
      { id: 'soportesCasoEspecial', lbl: '¿Cuentas con documentación de soporte emitida por una agencia o institución?' },
    ],
  }
};

export const PROG = {
  'welcome': { lbl: 'Bienvenida', pct: 0 },
  'datos-personales': { lbl: 'Datos Personales', pct: 12 },
  'tipo-tramite': { lbl: 'Tipo de Trámite', pct: 25 },
  'tipo-solicitud': { lbl: 'Tipo de Solicitud', pct: 37 },
  'renovacion': { lbl: 'Verificación de Renovación', pct: 55 },
  'perfil-economico': { lbl: 'Perfil Económico', pct: 55 },
  'historial': { lbl: 'Historial Migratorio', pct: 72 },
  'f1m1': { lbl: 'Perfil Estudiantil', pct: 60 },
  'trabajo': { lbl: 'Perfil Laboral', pct: 60 },
  'especial': { lbl: 'Caso Especial', pct: 60 },
  'autorizacion': { lbl: 'Autorización', pct: 88 },
  'resultado': { lbl: 'Resultado', pct: 100 },
};
