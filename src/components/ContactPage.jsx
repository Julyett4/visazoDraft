import React, { useState } from 'react';
import { enviarMensajeContacto } from '../services/contact';

export default function ContactPage({ onBack }) {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketId, setTicketId] = useState('');

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = 'Este campo es obligatorio.';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Ingresa una dirección de correo válida.';
      }
    } else if (name === 'nombre' && value.trim().length < 3) {
      error = 'El nombre debe tener al menos 3 caracteres.';
    } else if (name === 'mensaje' && value.trim().length < 10) {
      error = 'El mensaje debe tener al menos 10 caracteres.';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        ...form,
        fecha: new Date().toISOString(),
        metadata: {
          userAgent: navigator.userAgent,
          url: window.location.href
        }
      };

      const result = await enviarMensajeContacto(payload);

      if (result.success) {
        // Generate a random ticket ID
        const randomId = 'TK-' + Math.floor(100000 + Math.random() * 900000);
        setTicketId(randomId);
        setStatus('success');
      } else {
        setErrorMessage(result.error || 'Ocurrió un error inesperado al enviar el mensaje.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Error de red. Por favor verifica tu conexión.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <div className="visas-hub contact-page-view">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="#/" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Contacto</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Soporte y Consultas</span>
        <h1 className="hub-title">Ponte en Contacto</h1>
        <p className="hub-subtitle">
          ¿Tienes dudas sobre nuestros servicios, aranceles o necesitas soporte técnico? Escríbenos y te responderemos en breve.
        </p>
      </div>

      <div className="contact-container">
        {status === 'success' ? (
          /* Success Screen */
          <div className="contact-status-card success">
            <div className="status-badge success">✓</div>
            <h2 className="status-title">¡Mensaje recibido con éxito!</h2>
            <p className="status-text">
              Hemos registrado tu solicitud bajo el radicado de soporte: <strong>{ticketId}</strong>.
            </p>
            <p className="status-subtext">
              Un asesor de nuestro equipo legal revisará tu consulta y te responderá en menos de <strong>24 horas hábiles</strong> a la dirección de correo: <strong>{form.email}</strong>.
            </p>
            <div className="status-actions">
              <button type="button" className="btn bpri" onClick={onBack}>
                Volver al inicio
              </button>
              <button type="button" className="btn bgho" onClick={handleReset}>
                Enviar otro mensaje
              </button>
            </div>
          </div>
        ) : (
          /* Contact Form Card */
          <div className="contact-form-card">
            {status === 'error' && (
              <div className="contact-form-error-banner">
                <span>🚨</span>
                <p>{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid-2">
                {/* Nombre */}
                <div className="fg">
                  <label htmlFor="nombre" className="fl">
                    Nombre Completo <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={`fi ${errors.nombre ? 'input-error' : ''}`}
                    placeholder="Escribe tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                  {errors.nombre && <span className="form-field-error">{errors.nombre}</span>}
                </div>

                {/* Email */}
                <div className="fg">
                  <label htmlFor="email" className="fl">
                    Correo Electrónico <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`fi ${errors.email ? 'input-error' : ''}`}
                    placeholder="ejemplo@correo.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                  />
                  {errors.email && <span className="form-field-error">{errors.email}</span>}
                </div>
              </div>

              {/* Asunto */}
              <div className="fg">
                <label htmlFor="asunto" className="fl">
                  Asunto <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  className={`fi ${errors.asunto ? 'input-error' : ''}`}
                  placeholder="Ej: Dudas sobre el Formulario DS-160"
                  value={form.asunto}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                {errors.asunto && <span className="form-field-error">{errors.asunto}</span>}
              </div>

              {/* Mensaje */}
              <div className="fg">
                <label htmlFor="mensaje" className="fl">
                  Mensaje <span className="req">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className={`fta ${errors.mensaje ? 'input-error' : ''}`}
                  placeholder="Escribe detalladamente tu consulta..."
                  value={form.mensaje}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                {errors.mensaje && <span className="form-field-error">{errors.mensaje}</span>}
              </div>

              {/* Form Footer */}
              <div className="contact-form-footer">
                <p className="form-disclaimer">
                  🔒 Toda tu información viaja de forma cifrada y está protegida bajo nuestra política de datos.
                </p>
                <button
                  type="submit"
                  className="btn bpri contact-submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="btn-spinner"></span>
                      Enviando mensaje...
                    </>
                  ) : (
                    'Enviar Mensaje →'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Support Sidebar details */}
        <div className="contact-sidebar">
          <div className="sidebar-box border-blue">
            <h4 className="sidebar-box-title">Canales Directos</h4>
            <div className="sidebar-item">
              <span className="sidebar-icon">✉️</span>
              <div>
                <span className="sidebar-label">Soporte por Email</span>
                <a href="mailto:soporte@visazopro.com" className="sidebar-link">
                  soporte@visazopro.com
                </a>
              </div>
            </div>
            <div className="sidebar-item">
              <span className="sidebar-icon">💬</span>
              <div>
                <span className="sidebar-label">WhatsApp Corporativo</span>
                <a href="https://wa.me/573000000000" className="sidebar-link" target="_blank" rel="noopener noreferrer">
                  +57 (300) 000-0000
                </a>
              </div>
            </div>
          </div>

          <div className="sidebar-box border-purple">
            <h4 className="sidebar-box-title">Horario de Atención</h4>
            <p className="sidebar-text">
              Lunes a Viernes: 8:00 AM - 6:00 PM
            </p>
            <p className="sidebar-text">
              Sábados: 9:00 AM - 1:00 PM
            </p>
            <p className="sidebar-text-muted">
              (Hora de Colombia / UTC-5)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
