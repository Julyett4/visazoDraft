import { useState } from 'react';

export default function DatosStep({ initialValues, onNext, onBack }) {
  const [nombre, setNombre] = useState(initialValues.nombreCompleto || '');
  const [email, setEmail] = useState(initialValues.email || '');
  const [wa, setWa] = useState(initialValues.whatsapp || '');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({ nombre: false, email: false, whatsapp: false });

  const handleNext = () => {
    const n = nombre.trim();
    const e = email.trim();
    const w = wa.trim();

    const nErr = !n;
    const eErr = !e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    const wErr = !w || w.replace(/\D/g, '').length < 10;

    setErrors({ nombre: nErr, email: eErr, whatsapp: wErr });

    if (nErr || eErr || wErr) {
      if (!n || !e || !w) {
        setError('Por favor completa todos los campos antes de continuar.');
      } else if (eErr) {
        setError('Por favor ingresa un correo electrónico válido (ej: nombre@dominio.com).');
      } else {
        setError('El número de WhatsApp debe tener mínimo 10 dígitos. Incluye el código de país (ej: +573001234567).');
      }
      return;
    }

    setError('');
    onNext({ nombreCompleto: n, email: e, whatsapp: w });
  };

  return (
    <div className="step" id="step-datos-personales">
      <div className="ey">📝 Paso 1 de 5</div>
      <h1 className="stitle">¿Con quién estamos hablando?</h1>
      <p className="ssub">Esta información nos permitirá enviarte tu diagnóstico personalizado de forma privada y confidencial.</p>
      
      <div className="fg">
        <label className="fl" htmlFor="i-nombre">Nombre completo <span className="req">*</span></label>
        <input 
          className="fi" 
          id="i-nombre" 
          type="text" 
          placeholder="Ej. María Fernanda López" 
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            if (errors.nombre) setErrors(prev => ({ ...prev, nombre: false }));
          }}
          autoComplete="name" 
          aria-invalid={errors.nombre ? "true" : "false"}
          aria-describedby={errors.nombre ? "err-datos-txt" : undefined}
          required
        />
      </div>
      
      <div className="fg">
        <label className="fl" htmlFor="i-email">Correo electrónico <span className="req">*</span></label>
        <input 
          className="fi" 
          id="i-email" 
          type="email" 
          placeholder="tu@correo.com" 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors(prev => ({ ...prev, email: false }));
          }}
          autoComplete="email" 
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "err-datos-txt" : undefined}
          required
        />
      </div>
      
      <div className="fg">
        <label className="fl" htmlFor="i-wa">WhatsApp con código de país <span className="req">*</span></label>
        <input 
          className="fi" 
          id="i-wa" 
          type="tel" 
          placeholder="+57 300 000 0000" 
          value={wa}
          onChange={(e) => {
            setWa(e.target.value);
            if (errors.whatsapp) setErrors(prev => ({ ...prev, whatsapp: false }));
          }}
          autoComplete="tel" 
          aria-invalid={errors.whatsapp ? "true" : "false"}
          aria-describedby={errors.whatsapp ? "err-datos-txt wa-hint" : "wa-hint"}
          required
        />
        <small id="wa-hint" style={{ fontSize: '12px', color: 'var(--g500)', marginTop: '5px', display: 'block' }}>
          Mínimo 10 dígitos. Ej: +573001234567
        </small>
      </div>

      <div className={`errmsg ${error ? 'show' : ''}`} id="err-datos" role="alert" aria-live="assertive">
        <span>⚠</span>
        <span id="err-datos-txt">{error}</span>
      </div>

      <div className="snav">
        <button className="btn bgho" onClick={onBack}>← Volver</button>
        <button className="btn bpri" onClick={handleNext}>Continuar →</button>
      </div>
    </div>
  );
}
