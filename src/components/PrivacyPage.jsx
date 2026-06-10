
export default function PrivacyPage({ onBack }) {
  return (
    <div className="step" id="step-privacy" style={{ padding: '36px 28px', textAlign: 'left' }}>
      <div className="ey" style={{ marginBottom: '12px' }}>⚖️ Marco Legal Colombia</div>
      <h2 className="stitle" style={{ fontSize: '24px', marginBottom: '8px' }}>
        Política de Tratamiento de Datos Personales
      </h2>
      <p className="ssub" style={{ marginBottom: '24px', fontSize: '13.5px', lineHeight: '1.6' }}>
        De conformidad con la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas concordantes, en <strong>Visazo Pro</strong> garantizamos la protección, confidencialidad y correcto tratamiento de los datos personales suministrados por nuestros usuarios en nuestra plataforma de diagnóstico y asesoría consular.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '500px', overflowY: 'auto', paddingRight: '10px', marginBottom: '24px', borderBottom: '1px solid var(--g200)', borderTop: '1px solid var(--g200)', paddingTop: '15px' }}>
        
        {/* Sección 1 */}
        <div>
          <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--g900)', marginBottom: '6px' }}>
            1. Identificación del Responsable del Tratamiento
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6' }}>
            La plataforma digital <strong>Visazo Pro</strong> actúa como responsable del tratamiento de los datos recolectados. Para efectos legales, de notificaciones, peticiones o quejas referidas al Habeas Data, el titular puede contactar a nuestro oficial de datos a través del correo electrónico: <a href="mailto:visazopro@gmail.com" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: '600' }}>visazopro@gmail.com</a>.
          </p>
        </div>

        {/* Sección 2 */}
        <div>
          <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--g900)', marginBottom: '6px' }}>
            2. Tipos de Datos Recolectados y Naturaleza del Servicio
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', marginBottom: '8px' }}>
            Visazo Pro es una plataforma independiente de asesoría consular orientada a facilitar los procesos de obtención y renovación de la visa americana B1/B2, de estudiante (F1/M1), de trabajo y otros casos especiales. Llevamos a cabo este fin mediante dos modalidades: guiando en el proceso a nuestros clientes, o ejecutándolo por ellos bajo expresa delegación (servicios de diligenciamiento del Formulario DS-160 y agendamiento de citas consulares).
          </p>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6' }}>
            Para cumplir con este propósito, recolectamos datos personales de identificación (nombre completo, correo electrónico, número de WhatsApp) y datos de evaluación socioeconómica y migratoria (edad, estado civil, ingresos, propiedades, dependientes, ocupación laboral, intenciones de viaje e historial de visado y viajes anteriores).
          </p>
        </div>

        {/* Sección 3 */}
        <div>
          <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--g900)', marginBottom: '6px' }}>
            3. Tratamiento Especial de Datos Sensibles (Historial Migratorio)
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', marginBottom: '8px' }}>
            En virtud del Artículo 5 de la Ley 1581 de 2012, se consideran datos sensibles aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar discriminación. Esto incluye respuestas referentes a negaciones previas de visados, estadías no autorizadas en el extranjero (overstay), cancelaciones de visas, y registros de deportaciones.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', fontWeight: '500', background: 'rgba(234, 88, 12, 0.05)', border: '1px solid rgba(234, 88, 12, 0.18)', padding: '10px', borderRadius: 'var(--rs)' }}>
            <strong>Carácter Facultativo:</strong> El suministro de estos datos sensibles es estrictamente voluntario y facultativo por parte del Titular. No obstante, al ser esenciales para calcular el diagnóstico de viabilidad consular y prestar la asesoría, el no suministro de dicha información impide que Visazo Pro pueda entregar el diagnóstico de perfilamiento o prestar los servicios contratados con la precisión debida.
          </p>
        </div>

        {/* Sección 4 */}
        <div>
          <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--g900)', marginBottom: '6px' }}>
            4. Finalidades del Tratamiento de Datos
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', marginBottom: '6px' }}>
            Los datos personales recopilados serán procesados para las siguientes finalidades legítimas:
          </p>
          <ul style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc' }}>
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
          <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--g900)', marginBottom: '6px' }}>
            5. Derechos de los Titulares
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', marginBottom: '6px' }}>
            Como titular de los datos personales, tienes derecho a:
          </p>
          <ul style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>Conocer, actualizar y rectificar tus datos personales frente a Visazo Pro.</li>
            <li>Solicitar prueba de la autorización otorgada, salvo cuando la ley la exceptúe.</li>
            <li>Ser informado sobre el uso y tratamiento que se le ha dado a tus datos personales.</li>
            <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) de Colombia si consideras vulnerado tu derecho de Habeas Data.</li>
            <li>Revocar la autorización o solicitar la supresión de tus datos cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
          </ul>
        </div>

        {/* Sección 6 */}
        <div>
          <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--g900)', marginBottom: '6px' }}>
            6. Procedimiento para el Ejercicio de tus Derechos
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', marginBottom: '8px' }}>
            Podrás ejercer tus derechos enviando una comunicación al correo <strong>soporte@visazopro.com</strong> indicando tu nombre completo, número de documento y el derecho que deseas ejercer (consulta, actualización, rectificación, supresión o revocación).
          </p>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6' }}>
            <strong>Tiempos de respuesta (Ley 1581):</strong> Las <em>Consultas</em> se resolverán en un plazo máximo de diez (10) días hábiles, prorrogable por cinco (5) días más previo aviso. Los <em>Reclamos</em> (corrección, supresión o revocatoria) contarán con un plazo máximo de quince (15) días hábiles, prorrogable por ocho (8) días hábiles adicionales cuando las circunstancias lo requieran.
          </p>
        </div>

        {/* Sección 7 */}
        <div>
          <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--g900)', marginBottom: '6px' }}>
            7. Intercambio de Información y Seguridad
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6', marginBottom: '8px' }}>
            Tus datos no serán vendidos, alquilados ni transferidos a terceros con fines publicitarios o lucrativos ajenos a los servicios ofrecidos. La transmisión a encargados tecnológicos (como sistemas de base de datos cifrados de Supabase y pasarelas de pago autorizadas) se hace únicamente bajo estrictos estándares de confidencialidad e idoneidad técnica.
          </p>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6' }}>
            Visazo Pro emplea tecnologías seguras de comunicación cifrada (HTTPS) y almacenamiento protegido contra accesos no autorizados, pérdidas o adulteración de datos.
          </p>
        </div>

        {/* Sección 8 */}
        <div>
          <h3 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--g900)', marginBottom: '6px' }}>
            8. Vigencia y Modificaciones
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: '1.6' }}>
            Esta política entra en vigencia a partir de su publicación el 9 de junio de 2026. Las bases de datos se mantendrán vigentes durante el tiempo necesario para la adecuada prestación de los servicios contratados, la resolución de consultas o por el tiempo que exijan las obligaciones contractuales, contables y tributarias vigentes en Colombia.
          </p>
        </div>

      </div>

      <div className="snav" style={{ display: 'flex', gap: '10px' }}>
        <button 
          className="btn bpri" 
          onClick={onBack} 
          style={{ width: '100%', cursor: 'pointer' }}
        >
          Volver al Diagnóstico
        </button>
      </div>
    </div>
  );
}
