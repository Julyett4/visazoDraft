export default function PrivacyPage({ onBack }) {
  return (
    <div className="legal-page">
      {/* Header */}
      <header className="legal-header">
        <a href="/" className="logo" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <div className="lm">VP</div>
          <span className="ln dark">Visazo <strong>Pro</strong></span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="legal-badge">⚖️ Marco Legal Colombia</span>
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
          Política de Tratamiento de Datos Personales
        </h2>
        <p style={{ marginBottom: '32px', fontSize: '14.5px', color: '#475569', lineHeight: '1.7' }}>
          De conformidad con la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes, en <strong>Visazo Pro</strong> garantizamos la protección, confidencialidad y correcto tratamiento de los datos personales suministrados por nuestros usuarios en nuestra plataforma de diagnóstico y asesoría consular.
        </p>

        <div className="legal-body">
          
          {/* Sección 1 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              1. Identificación del Responsable del Tratamiento
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              La plataforma digital <strong>Visazo Pro</strong> actúa como responsable del tratamiento de los datos recolectados. Para efectos legales, de notificaciones, peticiones o quejas referidas al Habeas Data, el titular puede contactar a nuestro oficial de datos a través del correo electrónico: <a href="mailto:visazopro@gmail.com" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>visazopro@gmail.com</a>.
            </p>
          </div>

          {/* Sección 2 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              2. Tipos de Datos Recolectados y Naturaleza del Servicio
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              Visazo Pro es una plataforma independiente de asesoría consular orientada a facilitar los procesos de obtención y renovación de la visa americana B1/B2, de estudiante (F1/M1), de trabajo y otros casos especiales. Llevamos a cabo este fin mediante dos modalidades: guiando en el proceso a nuestros clientes, o ejecutándolo por ellos bajo expresa delegación (servicios de diligenciamiento del Formulario DS-160 y agendamiento de citas consulares).
            </p>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Para cumplir con este propósito, recolectamos datos personales de identificación (nombre completo, correo electrónico, número de WhatsApp) y datos de evaluación socioeconómica y migratoria (edad, estado civil, ingresos, propiedades, dependientes, ocupación laboral, intenciones de viaje e historial de visado y viajes anteriores).
            </p>
          </div>

          {/* Sección 3 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              3. Tratamiento Especial de Datos Sensibles (Historial Migratorio)
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '12px' }}>
              En virtud del Artículo 5 de la Ley 1581 de 2012, se consideran datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar discriminación. Esto incluye respuestas referentes a negaciones previas de visados, estadías no autorizadas en el extranjero (overstay), cancelaciones de visas, y registros de deportaciones.
            </p>
            <p style={{ fontSize: '13.5px', color: '#ea580c', lineHeight: '1.7', fontWeight: '500', background: 'rgba(234, 88, 12, 0.05)', border: '1px solid rgba(234, 88, 12, 0.18)', padding: '14px', borderRadius: '8px' }}>
              <strong>Carácter Facultativo:</strong> El suministro de estos datos sensibles es estrictamente voluntario y facultativo por parte del Titular. No obstante, al ser esenciales para calcular el diagnóstico de viabilidad consular y prestar la asesoría, el no suministro de dicha información impide que Visazo Pro pueda entregar el diagnóstico de perfilamiento o prestar los servicios contratados con la precisión debida.
            </p>
          </div>

          {/* Sección 4 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              4. Finalidades del Tratamiento de Datos
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              Los datos personales recopilados serán procesados para las siguientes finalidades legítimas:
            </p>
            <ul style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Calcular de forma automatizada y personalizada el porcentaje de viabilidad y factores de riesgo para tu solicitud de visa americana.</li>
              <li>Diligenciar de manera delegada el Formulario oficial consular DS-160, basándonos estrictamente en la información suministrada y verificada por el cliente.</li>
              <li>Gestionar el agendamiento de citas en el Centro de Atención al Solicitante (CAS) y la Embajada de los EE. UU. en Colombia.</li>
              <li>Establecer contacto directo vía WhatsApp y/o correo electrónico para el seguimiento del caso, resolver inquietudes y enviar recomendaciones migratorias.</li>
              <li>Tramitar y validar transacciones de pago mediante pasarelas externas seguras (MercadoPago u otras equivalentes).</li>
              <li>Enviar alertas regulatorias o noticias importantes referentes al sistema de visas de los Estados Unidos.</li>
            </ul>
          </div>

          {/* Sección 5 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              5. Derechos de los Titulares
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              Como titular de los datos personales, tienes derecho a:
            </p>
            <ul style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Conocer, actualizar y rectificar tus datos personales frente a Visazo Pro.</li>
              <li>Solicitar prueba de la autorización otorgada, salvo cuando la ley la exceptúe.</li>
              <li>Ser informado sobre el uso y tratamiento que se le ha dado a tus datos personales.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) de Colombia si consideras vulnerado tu derecho de Habeas Data.</li>
              <li>Revocar la autorización o solicitar la supresión de tus datos cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
            </ul>
          </div>

          {/* Sección 6 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              6. Procedimiento para el Ejercicio de tus Derechos
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              Podrás ejercer tus derechos enviando una comunicación al correo <strong>soporte@visazopro.com</strong> indicando tu nombre completo, número de documento y el derecho que deseas ejercer (consulta, actualización, rectificación, supresión o revocación).
            </p>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              <strong>Tiempos de respuesta (Ley 1581):</strong> Las <em>Consultas</em> se resolverán en un plazo máximo de diez (10) días hábiles, prorrogable por ese mismo término previo aviso. Los <em>Reclamos</em> (corrección, supresión o revocatoria) contarán con un plazo máximo de quince (15) días hábiles, prorrogable por ocho (8) días hábiles adicionales cuando las circunstancias lo requieran.
            </p>
          </div>

          {/* Sección 7 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              7. Intercambio de Información y Seguridad
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '8px' }}>
              Tus datos no serán vendidos, alquilados ni transferidos a terceros con fines publicitarios o lucrativos ajenos a los servicios ofrecidos. La transmisión a encargados tecnológicos (como sistemas de base de datos cifrados de Supabase y pasarelas de pago autorizadas) se hace únicamente bajo estrictos estándares de confidencialidad e idoneidad técnica.
            </p>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Visazo Pro emplea tecnologías seguras de comunicación cifrada (HTTPS) y almacenamiento protegido contra accesos no autorizados, pérdidas o adulteración de datos.
            </p>
          </div>

          {/* Sección 8 */}
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              8. Vigencia y Modificaciones
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Esta política entra en vigencia a partir de su publicación el 9 de junio de 2026. Las bases de datos se mantendrán vigentes durante el tiempo necesario para la adecuada prestación de los servicios contratados, la resolución de consultas o por el tiempo que exijan las obligaciones contractuales, contables y tributarias vigentes en Colombia.
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
