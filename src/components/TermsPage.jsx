export default function TermsPage({ onBack }) {
  return (
    <div className="legal-page">
      {/* Header */}
      <header className="legal-header">
        <a href="#/" className="logo" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <div className="lm">VP</div>
          <span className="ln dark">Visazo <strong>Pro</strong></span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="legal-badge">⚖️ Términos de Servicio</span>
          <button 
            onClick={onBack}
            style={{
              background: '#e2e8f0',
              border: 'none',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              color: '#475569',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#cbd5e1'}
            onMouseOut={(e) => e.target.style.background = '#e2e8f0'}
          >
            ← Volver
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="legal-content">
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
          Términos y Condiciones de Uso
        </h2>
        <p style={{ marginBottom: '32px', fontSize: '14.5px', color: '#475569', lineHeight: '1.7' }}>
          Por favor, lea atentamente estos Términos y Condiciones de Uso antes de utilizar nuestra plataforma y contratar los servicios de asesoría consular ofrecidos por <strong>Visazo Pro</strong>.
        </p>

        <div className="legal-body">
          
          {/* Sección 1 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              1. Aceptación de los Términos
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Al acceder, navegar o utilizar la plataforma digital <strong>Visazo Pro</strong> y cualquiera de sus servicios asociados, el usuario manifiesta que ha leído, comprendido y aceptado en su totalidad estos Términos y Condiciones. Si no está de acuerdo con las presentes cláusulas, deberá abstenerse de usar el sitio y contratar los servicios.
            </p>
          </div>

          {/* Sección 2 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              2. Independencia y Exclusión de Afiliación Oficial
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              <strong>Visazo Pro</strong> es una plataforma y marca operada de forma privada e independiente. <strong>NO tiene ningún tipo de afiliación, asociación, patrocinio ni vínculo oficial con el Gobierno de los Estados Unidos de América</strong>, la Embajada de los EE. UU. en Colombia, el Departamento de Estado de los EE. UU., ni con ninguna otra entidad consular, migratoria o gubernamental nacional o extranjera.
            </p>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Cualquier enlace o mención a portales y herramientas oficiales (como el sitio web del Centro de Solicitud de Visas electrónicas CEAC, el Formulario DS-160 original o el portal oficial de citas de la embajada) se realiza exclusivamente con fines prácticos para guiar al usuario en su propio proceso.
            </p>
          </div>

          {/* Sección 3 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              3. Naturaleza del Servicio y Exclusión de Garantía de Aprobación
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              El usuario reconoce y acepta de forma expresa que los servicios que presta Visazo Pro son de <strong>obligación de medio y no de resultado</strong>:
            </p>
            <ul style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', paddingLeft: '24px', listStyleType: 'disc', marginBottom: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Nuestra labor consiste en estructurar la información, identificar factores de riesgo, diligenciar los formularios oficiales bajo delegación e instrucciones del usuario, y asesorar técnicamente para la preparación de su caso.</li>
              <li><strong>La aprobación, negación o aplazamiento de cualquier tipo de visa es facultad discrecional y exclusiva de los Oficiales Consulares</strong> del Gobierno de los Estados Unidos.</li>
              <li><strong>Visazo Pro no garantiza la aprobación o expedición de la visa.</strong></li>
            </ul>
            <p style={{ fontSize: '13.5px', color: '#dc2626', lineHeight: '1.7', fontWeight: '500', background: 'rgba(220, 38, 38, 0.05)', border: '1px solid rgba(220, 38, 38, 0.18)', padding: '14px', borderRadius: '8px' }}>
              <strong>Sin Reembolso por Denegación:</strong> Teniendo en cuenta que los servicios de análisis técnico, diligenciamiento del Formulario DS-160 y agendamiento conllevan horas de procesamiento profesional ya ejecutadas, las decisiones consulares desfavorables o denegaciones de visa no darán derecho a reembolsos parciales o totales de los pagos realizados a Visazo Pro.
            </p>
          </div>

          {/* Sección 4 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              4. Descripción de los Planes y Tarifas de Asesoría
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              Los servicios de asesoría se encuentran tasados de forma fija en pesos colombianos (COP) según el plan seleccionado por el usuario en la plataforma:
            </p>
            <ul style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li><strong>Pasaporte al Éxito ($49.000 COP):</strong> Entrega en formato digital (PDF) del reporte diagnóstico de viabilidad con recomendaciones y listas de chequeo.</li>
              <li><strong>Plan Pro ($197.000 COP):</strong> Asesoría personalizada, diligenciamiento delegado del Formulario DS-160 y agendamiento técnico de citas consulares (no incluye simulacro de entrevista por videollamada).</li>
              <li><strong>Plan Premium ($347.000 COP):</strong> Asesoría integral completa, diligenciamiento del DS-160, agendamiento de citas, videollamada personalizada de preparación de entrevista, plan estratégico a 6 meses y acompañamiento continuo.</li>
              <li><strong>Plan Pro Renovación ($127.000 COP):</strong> Asesoría y diligenciamiento de formulario de renovación sin entrevista, más agendamiento del proceso simplificado.</li>
              <li><strong>Plan Premium Renovación VIP ($247.000 COP):</strong> Asesoría, diligenciamiento, agendamiento de citas y soporte logístico complementario.</li>
              <li><strong>Asesoría Especializada:</strong> Tarifa variable para visas académicas (F1/M1), laborales o casos especiales complejos que requieran revisión personalizada.</li>
            </ul>
          </div>

          {/* Sección 5 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              5. Exclusividad del Pago de Tasas Consulares Oficiales
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.7', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
              IMPORTANTE: Los importes facturados por Visazo Pro corresponden únicamente a los honorarios de asesoramiento técnico y servicios de diligenciamiento.
            </p>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Ninguno de nuestros planes incluye el valor de la tasa oficial consular (Derechos de Visa / Tarifa MRV) que cobra directamente el Gobierno de los Estados Unidos (ej. USD $185 o su equivalente legal vigente). Dicho arancel consular debe ser costeado directamente por el solicitante/usuario mediante los canales oficiales autorizados de la embajada.
            </p>
          </div>

          {/* Sección 6 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              6. Obligaciones de Veracidad de la Información
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              El usuario es el único responsable de la veracidad, exactitud, completitud y licitud de todos los datos suministrados a Visazo Pro. La plataforma realiza el diligenciamiento del Formulario DS-160 basándose de buena fe en los datos que el usuario nos proporciona de manera voluntaria.
            </p>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              El suministro de datos falsos, incorrectos, alterados, incompletos u omitidos puede ocasionar el rechazo definitivo de la visa e inhabilitación migratoria para ingresar a los Estados Unidos. Visazo Pro no se hace responsable bajo ninguna circunstancia de las consecuencias de la información inexacta o fraudulenta provista por el usuario.
            </p>
          </div>

          {/* Sección 7 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              7. Política de Pagos, Retracto y Devoluciones
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              Todos los pagos dentro del sitio se efectúan a través de pasarelas de pago certificadas (MercadoPago u homólogas). Al procesar el pago de un plan, el usuario autoriza la ejecución del servicio de forma inmediata.
            </p>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              <strong>Derecho de Retracto:</strong> De conformidad con las excepciones legales aplicables a los contratos de prestación de servicios cuya ejecución comience antes de los dos o cinco días (Art. 47 Ley 1480 de 2011 - Estatuto del Consumidor en Colombia), el usuario acepta que, una vez se inicie el diligenciamiento personalizado de su formulario, se entregue el diagnóstico interactivo o se agenden citas, no habrá derecho a retracto ni reembolsos de dinero.
            </p>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              <strong>Reprogramaciones:</strong> Las videollamadas de preparación agendadas dentro del Plan Premium pueden reprogramarse sin costo adicional con un aviso mínimo de 24 horas hábiles de anticipación. El incumplimiento o inasistencia a la videollamada programada sin previo aviso se considerará como servicio prestado.
            </p>
          </div>

          {/* Sección 8 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              8. Limitación de Responsabilidad
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              Visazo Pro no asume ninguna responsabilidad legal por fallos o demoras inherentes a plataformas de terceros o del Gobierno de los EE. UU. Esto incluye, pero no se limita a:
            </p>
            <ul style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Caídas del sistema oficial de visas (CEAC / AIS).</li>
              <li>Ausencia o retraso en la disponibilidad de fechas para citas consulares.</li>
              <li>Cancelación o reprogramación masiva de citas por parte de la Embajada de los EE. UU. en Colombia.</li>
              <li>Retrasos en la entrega física de pasaportes y visados por parte de la mensajería autorizada.</li>
            </ul>
          </div>

          {/* Sección 9 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              9. Propiedad Intelectual
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Todos los contenidos de la plataforma (incluyendo el software de diagnóstico interactivo, algoritmos de puntuación, diseño visual, logos, textos explicativos y bases de datos) son propiedad intelectual exclusiva de Visazo Pro. Queda estrictamente prohibida la reproducción, copia, distribución o comercialización no autorizada de cualquier elemento del sitio.
            </p>
          </div>

          {/* Sección 10 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              10. Ley Aplicable y Jurisdicción
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Los presentes Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes vigentes de la República de Colombia. Cualquier controversia jurídica derivada del uso de la plataforma será resuelta por los tribunales y juzgados competentes en territorio colombiano.
            </p>
          </div>

        </div>

        {/* Footer Navigation */}
        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'center' }}>
          <button 
            className="btn bpri" 
            onClick={onBack} 
            style={{ width: '100%', maxWidth: '300px', cursor: 'pointer' }}
          >
            Volver al Diagnóstico
          </button>
        </div>
      </div>
    </div>
  );
}
