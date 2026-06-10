export const VISAS_DATA = {
  turismo: {
    id: 'turismo',
    emoji: '🏖️',
    title: 'Visa de Turismo y Negocios (B1/B2)',
    shortDescription: 'La opción ideal para viajes de placer, vacaciones, visitas familiares, tratamientos médicos o negociaciones comerciales de corto plazo en EE. UU.',
    seoTitle: 'Visa de Turismo B1/B2 Americana: Requisitos y Proceso | Visazo Pro',
    seoDescription: 'Guía completa sobre la Visa B1/B2 para Estados Unidos. Conoce los costos consulares, requisitos de arraigo en Colombia y el paso a paso detallado.',
    cost: '$185 USD (Arancel consular MRV)',
    validity: 'Hasta 10 años (Múltiples entradas autorizadas)',
    category: 'B1B2',
    requirements: [
      'Pasaporte vigente en buen estado (con al menos 6 meses de validez futura).',
      'Hoja de confirmación del Formulario DS-160 debidamente completado.',
      'Demostración de estabilidad financiera (extractos bancarios, cartas laborales, certificados de ingresos).',
      'Pruebas de arraigo familiar y laboral en tu país de origen (contratos, escrituras de propiedad, registro de dependientes).',
      'Propósito claro y temporal de viaje (itinerario preliminar, reserva de hotel o carta de invitación).'
    ],
    process: [
      {
        step: 1,
        title: 'Formulario DS-160',
        text: 'Completa en línea el Formulario DS-160 de forma precisa. Toda la información consignada debe ser verdadera, ya que es la base que el cónsul usará para tu entrevista.'
      },
      {
        step: 2,
        title: 'Pago del Arancel Consular',
        text: 'Crea tu cuenta en el portal de citas de la embajada y realiza el pago de la tarifa oficial de $185 USD. Este arancel no es reembolsable y te habilita para agendar citas.'
      },
      {
        step: 3,
        title: 'Agendamiento de Citas',
        text: 'Programa dos citas obligatorias: la primera en el CAS (Centro de Atención al Solicitante) para toma de datos biométricos (foto y huellas), y la segunda en la Embajada para la entrevista con el oficial consular.'
      },
      {
        step: 4,
        title: 'Entrevista Consular',
        text: 'Asiste puntualmente a la entrevista. Responde de forma honesta, segura y directa. Lleva contigo toda la documentación de soporte que acredite tu arraigo con tu país.'
      }
    ],
    recommendations: [
      'El cónsul asume bajo la ley de inmigración que deseas quedarte en EE. UU.; tu principal objetivo es demostrar lo contrario a través de tus fuertes lazos en tu país.',
      'Durante la entrevista, responde exactamente lo que te pregunten sin extenderte innecesariamente ni entregar documentos a menos que te los soliciten.',
      'Evita comprar pasajes aéreos o reservar hoteles no cancelables antes de que la visa esté físicamente aprobada y en tus manos.'
    ]
  },
  estudiante: {
    id: 'estudiante',
    emoji: '🎓',
    title: 'Visa de Estudiante Académico (F1 / M1)',
    shortDescription: 'Diseñada para quienes planean estudiar a tiempo completo en universidades, colegios, escuelas secundarias u otros centros educativos acreditados en los Estados Unidos.',
    seoTitle: 'Visa de Estudiante F1/M1 Americana: Guía Completa de Requisitos | Visazo Pro',
    seoDescription: 'Aprende cómo solicitar la Visa de Estudiante F1 o M1. Requisitos del formulario I-20, arancel SEVIS y consejos para demostrar solvencia económica.',
    cost: '$185 USD (Visa) + $350 USD (Tarifa de registro SEVIS I-901)',
    validity: 'Duración del programa académico certificado',
    category: 'F1M1',
    requirements: [
      'Formulario I-20 original emitido y firmado por la institución académica estadounidense aprobada por el SEVP.',
      'Comprobante de pago oficial de la tarifa SEVIS I-901.',
      'Demostración de fondos suficientes para cubrir el primer año completo de estudios y costos de vida (extractos bancarios, cartas de patrocinadores o becas).',
      'Títulos académicos previos y registros de calificaciones en el país de origen.',
      'Demostración de lazos en el país de origen que garanticen tu retorno tras finalizar el programa académico.'
    ],
    process: [
      {
        step: 1,
        title: 'Admisión y Obtención del I-20',
        text: 'Aplica y sé aceptado en una institución educativa estadounidense certificada por el gobierno. Una vez admitido, la institución te enviará el Formulario I-20.'
      },
      {
        step: 2,
        title: 'Pago del SEVIS Fee',
        text: 'Realiza el pago de la tarifa de registro del SEVIS (Student and Exchange Visitor Information System) en línea antes de programar tu cita consular. El costo suele ser de $350 USD.'
      },
      {
        step: 3,
        title: 'Formulario DS-160 y Cita',
        text: 'Completa el Formulario DS-160, paga la tarifa de solicitud de visa de $185 USD y agenda tus citas biométricas y de entrevista en la embajada.'
      },
      {
        step: 4,
        title: 'Entrevista y Solvencia',
        text: 'Presenta tu I-20 y los estados de cuenta bancaria originales en la entrevista. Explica de forma clara tus metas profesionales y cómo el programa de estudios se alinea con tu plan de vida de regreso.'
      }
    ],
    recommendations: [
      'Debes ser capaz de explicar detalladamente por qué elegiste esa institución y ese programa en particular, así como tus planes de carrera futuros en tu país.',
      'Asegúrate de que tus patrocinadores financieros tengan una relación clara contigo (padres, familiares directos o empresa) y fondos demostrables en cuentas corrientes o de ahorros.',
      'El conocimiento del idioma inglés debe corresponder al nivel requerido para cursar el programa académico seleccionado.'
    ]
  },
  trabajo: {
    id: 'trabajo',
    emoji: '🏢',
    title: 'Visa de Trabajo basada en Petición (H-1B / L1 / O1)',
    shortDescription: 'Para profesionales altamente calificados, transferencias corporativas de ejecutivos y gerentes, o personas con habilidades extraordinarias en ciencias, artes o negocios.',
    seoTitle: 'Visa de Trabajo Americana H-1B, L1, O1: Requisitos | Visazo Pro',
    seoDescription: 'Todo sobre las visas de trabajo en EE. UU. Requisitos para la petición de empleador ante USCIS, costos consulares y documentación de soporte.',
    cost: '$205 USD (Arancel consular de visa) + Costos de petición (asumidos por el empleador)',
    validity: 'Generalmente de 1 a 3 años (Prorrogable según la categoría)',
    category: 'Trabajo',
    requirements: [
      'Formulario I-797 (Notificación de Aprobación de la petición I-129 emitida por USCIS).',
      'Copia completa de la petición I-129 y del acuerdo o contrato laboral firmado con la empresa estadounidense.',
      'Título profesional universitario y certificaciones que validen tu especialización en la materia.',
      'Carta oficial de la empresa patrocinadora detallando el cargo, funciones y salario ofrecido.',
      'Historial de empleo y pasaporte vigente.'
    ],
    process: [
      {
        step: 1,
        title: 'Oferta y Radicación ante USCIS',
        text: 'Tu empleador en los Estados Unidos presenta una solicitud de condición laboral ante el Departamento de Trabajo y radica la petición I-129 ante el servicio de inmigración (USCIS).'
      },
      {
        step: 2,
        title: 'Aprobación de la Petición',
        text: 'Una vez aprobada la petición, USCIS emite el Formulario I-797 (Notificación de Aprobación). Tu empleador te enviará una copia física o digital de este documento.'
      },
      {
        step: 3,
        title: 'Formulario DS-160 y Arancel',
        text: 'Diligencia el Formulario DS-160 ingresando el número de recibo de tu petición aprobada. Paga la tarifa de solicitud de visa de trabajo de $205 USD y programa las citas.'
      },
      {
        step: 4,
        title: 'Entrevista y Verificación',
        text: 'Presenta el Formulario I-797 en tu entrevista. El oficial consular verificará la autenticidad de la petición en el sistema oficial de inmigración y evaluará tu idoneidad para el cargo.'
      }
    ],
    recommendations: [
      'Conoce a fondo la empresa que te patrocina, su sector industrial, su ubicación y los detalles técnicos de las responsabilidades que ejercerás.',
      'El salario propuesto en tu contrato debe coincidir exactamente con el salario prevaleciente aprobado por el Departamento de Trabajo de EE. UU.',
      'Ten a la mano una traducción certificada de tu título universitario y el análisis de equivalencia de títulos de EE. UU. (si el título fue obtenido en el extranjero).'
    ]
  }
};

export const ALL_VISAS_DIRECTORY = [
  { code: 'A-1 / A-2', name: 'Diplomáticos', purpose: 'Embajadores, personal consular y funcionarios de gobiernos extranjeros en misión oficial.' },
  { code: 'A-3', name: 'Empleados Domésticos (A)', purpose: 'Trabajadores domésticos o empleados personales de diplomáticos con visa A-1/A-2.' },
  { code: 'B-1', name: 'Negocios Temporales', purpose: 'Consultas comerciales, asistencia a conferencias o negociaciones de corto plazo.' },
  { code: 'B-2', name: 'Turismo y Salud', purpose: 'Vacaciones, visitas a familiares o amigos, tratamientos médicos y eventos sociales.' },
  { code: 'C-1', name: 'Tránsito Directo', purpose: 'Viajeros en escala inmediata y continua a través de territorio estadounidense.' },
  { code: 'D-1', name: 'Tripulantes', purpose: 'Personal de tripulación aérea o marítima internacional que transita temporalmente.' },
  { code: 'E-1', name: 'Comerciantes (Tratado)', purpose: 'Comerciantes de países con tratados comerciales bilaterales vigentes con EE. UU.' },
  { code: 'E-2', name: 'Inversionistas (Tratado)', purpose: 'Personas que desarrollan y dirigen operaciones de una empresa mediante inversión de capital.' },
  { code: 'E-3', name: 'Especialidad (Australia)', purpose: 'Profesionales calificados en trabajos de especialidad de nacionalidad australiana.' },
  { code: 'F-1', name: 'Estudiantes Académicos', purpose: 'Estudios de tiempo completo en universidades, institutos o academias de idiomas.' },
  { code: 'G-1 / G-4', name: 'Org. Internacionales', purpose: 'Funcionarios gubernamentales asignados a entidades como la ONU, OEA, FMI o Banco Mundial.' },
  { code: 'G-5', name: 'Empleados Domésticos (G)', purpose: 'Trabajadores domésticos personales de funcionarios con visas G-1/G-4.' },
  { code: 'H-1B', name: 'Trabajo Especializado', purpose: 'Profesionales universitarios con oferta laboral especializada patrocinada por empresa de EE. UU.' },
  { code: 'H-2A', name: 'Trabajo Agrícola Temporal', purpose: 'Trabajadores para labores y cosechas del sector agrícola de carácter estacional.' },
  { code: 'H-2B', name: 'Trabajo No Agrícola', purpose: 'Trabajadores estacionales en servicios, hotelería, turismo, paisajismo o construcción.' },
  { code: 'H-3', name: 'Entrenamiento Profesional', purpose: 'Capacitación profesional o instrucción práctica patrocinada por una institución.' },
  { code: 'I', name: 'Prensa y Periodismo', purpose: 'Corresponsales, reporteros, camarógrafos y representantes de medios de comunicación.' },
  { code: 'J-1', name: 'Intercambio Cultural', purpose: 'Profesores, investigadores, becarios, estudiantes y participantes en programas Au Pair.' },
  { code: 'K-1', name: 'Prometidos (Novios)', purpose: 'Prometidos de ciudadanos estadounidenses viajando para celebrar matrimonio dentro de 90 días.' },
  { code: 'K-3', name: 'Cónyuges (Ciudadano)', purpose: 'Cónyuges de ciudadanos de EE. UU. en espera del procesamiento de residencia permanente.' },
  { code: 'L-1', name: 'Transferencia Corporativa', purpose: 'Gerentes, ejecutivos o personal con conocimientos especializados transferidos por multinacional.' },
  { code: 'M-1', name: 'Estudiantes Vocacionales', purpose: 'Estudiantes de cursos vocacionales, técnicos o comerciales de carácter no académico.' },
  { code: 'O-1', name: 'Habilidades Extraordinarias', purpose: 'Personas con logros sobresalientes en ciencias, educación, artes, negocios o deportes.' },
  { code: 'P-1', name: 'Atletas y Artistas', purpose: 'Atletas individuales o en equipo y miembros de grupos artísticos reconocidos.' },
  { code: 'P-2 / P-3', name: 'Intercambio Artístico', purpose: 'Artistas o agrupaciones en programas de intercambio recíproco o enseñanza cultural.' },
  { code: 'Q-1', name: 'Intercambio Cultural Oficial', purpose: 'Participantes en programas oficiales de intercambio cultural e historia del país.' },
  { code: 'R-1', name: 'Trabajadores Religiosos', purpose: 'Ministros y profesionales religiosos afiliados a una organización eclesiástica acreditada.' },
  { code: 'T-1', name: 'Víctimas de Trata', purpose: 'Víctimas de trata de personas que colaboran con el Departamento de Seguridad Nacional.' },
  { code: 'U-1', name: 'Víctimas de Delitos', purpose: 'Víctimas de crímenes graves (violencia doméstica, asalto) cooperantes con la justicia.' },
  { code: 'V-1', name: 'Reunificación Familiar', purpose: 'Cónyuges e hijos de residentes permanentes que han esperado más de 3 años por su petición.' }
];
