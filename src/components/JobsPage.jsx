import React, { useState } from 'react';

export default function JobsPage({ onBack }) {
  const [selectedJob, setSelectedJob] = useState(null);

  const vacancies = [
    {
      id: 'VAC-001',
      title: 'Asesor Consular Senior',
      department: 'Legal & Operaciones',
      location: 'Remoto (Colombia)',
      type: 'Tiempo Completo',
      salary: '$3.500.000 - $4.500.000 COP',
      desc: 'Supervisarás perfiles de viabilidad de clientes de alto riesgo y auditarás la radicación de solicitudes complejas ante el CEAC.',
      reqs: [
        'Abogado titulado con tarjeta profesional.',
        'Mínimo 3 años de experiencia en asesoría migratoria para EE. UU.',
        'Excelente redacción y atención al detalle.',
        'Deseable: Experiencia laboral previa en consulados o embajadas.'
      ],
      color: 'blue'
    },
    {
      id: 'VAC-002',
      title: 'Especialista en Diligenciamiento DS-160',
      department: 'Operaciones',
      location: 'Híbrido (Bogotá)',
      type: 'Tiempo Completo',
      salary: '$2.000.000 - $2.500.000 COP',
      desc: 'Responsable del correcto vaciado de información y traducción al inglés de los datos de solicitantes en el formulario oficial DS-160.',
      reqs: [
        'Estudiante de últimos semestres de Lenguas Modernas, Derecho o afines.',
        'Nivel de inglés avanzado (C1 certificado).',
        'Velocidad de digitación y alta capacidad analítica.',
        'Manejo estricto de confidencialidad de datos personales.'
      ],
      color: 'verde'
    },
    {
      id: 'VAC-003',
      title: 'Desarrollador React / Full-Stack',
      department: 'Tecnología & Producto',
      location: 'Remoto (Colombia / LATAM)',
      type: 'Contrato por Prestación de Servicios',
      salary: 'A convenir según experiencia',
      desc: 'Mantener y optimizar nuestra aplicación frontend en React, el motor de diagnóstico dinámico y las integraciones seguras de pasarela de pago.',
      reqs: [
        'Mínimo 3 años de experiencia con React.js, TailwindCSS y Vite.',
        'Experiencia con APIs REST, Supabase, PostgreSQL y servicios Node.js.',
        'Conocimientos en metodologías ágiles y sistemas de control de versiones Git.',
        'Perfil autónomo orientado a la experiencia del usuario (UX/UI).'
      ],
      color: 'purple'
    }
  ];

  return (
    <div className="visas-hub jobs-page-view">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Empleos</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Talento & Cultura</span>
        <h1 className="hub-title">Únete a Visazo Pro</h1>
        <p className="hub-subtitle">
          Ayúdanos a construir el futuro de la asesoría legal migratoria en América Latina. Buscamos mentes brillantes y analíticas.
        </p>
      </div>

      {/* Grid of Job Openings */}
      <div className="jobs-section-container">
        <h2 className="jobs-main-title">Vacantes Activas</h2>
        <div className="jobs-grid">
          {vacancies.map((job) => (
            <div key={job.id} className={`job-card border-${job.color}`}>
              <div className="job-card-header">
                <span className="job-type-pill">{job.type}</span>
                <span className="job-location">{job.location}</span>
              </div>
              
              <h3 className="job-title">{job.title}</h3>
              <span className="job-dept">{job.department}</span>
              <p className="job-desc">{job.desc}</p>
              
              <div className="job-card-footer">
                <span className="job-salary">{job.salary}</span>
                <button
                  type="button"
                  className="btn bpri job-apply-btn"
                  onClick={() => setSelectedJob(job)}
                >
                  Ver requisitos &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate values and benefits */}
      <div className="infographic-summary">
        <div className="info-box-summary">
          <span className="info-box-emoji">🚀</span>
          <div className="info-box-content">
            <h4 className="info-box-title">Nuestra Cultura Corporativa</h4>
            <p className="info-box-text">
              Trabajamos con autonomía, flexibilidad de horarios, y un fuerte enfoque en el bienestar de nuestro equipo. Valoramos el aprendizaje constante y los aportes de innovación en todos los niveles.
            </p>
          </div>
        </div>
      </div>

      {/* Application Dialog Modal */}
      {selectedJob && (
        <div id="modal-overlay" className="show" onClick={() => setSelectedJob(null)}>
          <div className="mbox" onClick={(e) => e.stopPropagation()}>
            <button className="mclose" onClick={() => setSelectedJob(null)}>✕</button>
            <div className="memoji">💼</div>
            
            <div style={{ textAlign: 'center' }}>
              <span className={`mbadge mb-${selectedJob.color}`}>
                {selectedJob.department}
              </span>
            </div>
            
            <h3 className="mtitulo">{selectedJob.title}</h3>
            <p className="job-modal-meta">
              📍 {selectedJob.location} &nbsp;|&nbsp; ⏱️ {selectedJob.type}
            </p>
            
            <div className="job-modal-details">
              <h4 className="job-details-subtitle">Descripción del Cargo</h4>
              <p className="job-details-text">{selectedJob.desc}</p>
              
              <h4 className="job-details-subtitle">Requisitos Mínimos</h4>
              <ul className="job-details-list">
                {selectedJob.reqs.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>

              <h4 className="job-details-subtitle">Rango Salarial</h4>
              <p className="job-details-text">{selectedJob.salary}</p>
            </div>

            <div className="job-application-instructions border-blue">
              <h4 className="apply-instructions-title">¿Cómo postularse?</h4>
              <p className="apply-instructions-text">
                Envía tu hoja de vida en formato PDF al correo{' '}
                <a href="mailto:talento@visazopro.com" className="apply-email-link">
                  talento@visazopro.com
                </a>{' '}
                con el asunto: <strong>Postulación {selectedJob.title} - {selectedJob.id}</strong>.
              </p>
              <p className="apply-instructions-text-muted">
                * Adjunta una carta de presentación corta explicando tu experiencia relevante.
              </p>
            </div>

            <button
              type="button"
              className={`mcta mc-${selectedJob.color}`}
              onClick={() => {
                window.location.href = `mailto:talento@visazopro.com?subject=Postulacion%20${encodeURIComponent(selectedJob.title)}%20-%20${selectedJob.id}`;
              }}
            >
              Postularse por Correo →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
