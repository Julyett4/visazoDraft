import React, { useState } from 'react';

export default function BlogIndexPage({ onBack }) {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 'ART-001',
      title: '5 errores mortales al diligenciar el Formulario DS-160',
      tag: 'Formularios',
      date: '9 de Junio, 2026',
      readTime: '5 min',
      emoji: '📝',
      color: 'blue',
      snippet: 'El Formulario DS-160 es la pieza angular de tu trámite consular. Conoce cuáles son las inconsistencias y errores de traducción que provocan negaciones automáticas.',
      content: `El Formulario DS-160 es el documento principal que los oficiales de visas estadounidenses revisan antes de tenerte frente a la ventanilla. De hecho, el cónsul toma aproximadamente el 80% de su decisión basándose exclusivamente en lo que respondiste allí.

Aquí te explicamos cuáles son los 5 errores más comunes y cómo evitarlos:

1. **Inconsistencias de ingresos**: Escribir un salario bruto diferente al neto o no saber explicar la procedencia de tus ingresos secundarios. Todo lo que digas verbalmente debe coincidir con el DS-160.
2. **Errores de traducción**: Traducir nombres de empresas u ocupaciones de forma literal que puedan sonar confusas. Por ejemplo, traducir "Profesional de Ventas" de una forma que sugiera que vas a trabajar informalmente allá.
3. **No registrar viajes anteriores**: Omitir viajes internacionales en los últimos 5 años. Tu historial migratorio demuestra que eres un viajero confiable que regresa a su país de origen.
4. **Fechas de viaje incoherentes**: Poner una estadía estimada de 3 meses cuando pides vacaciones de un empleo formal que solo te da 15 días libres al año. Esto es una alerta roja de inmediato.
5. **No declarar familiares en EE. UU.**: Omitir de mala fe a tus padres, hijos o hermanos que residan allá (legal o ilegalmente). El sistema consular cruza bases de datos y la mentira generará un veto permanente.`
    },
    {
      id: 'ART-002',
      title: 'Cómo responder a las preguntas trampa del cónsul americano',
      tag: 'Entrevista',
      date: '2 de Junio, 2026',
      readTime: '7 min',
      emoji: '🎤',
      color: 'purple',
      snippet: '¿A qué viaja? ¿Quién paga su viaje? ¿Tiene familiares en Estados Unidos? Te explicamos la lógica consular detrás de estas preguntas de la entrevista.',
      content: `La entrevista consular de visa B1/B2 suele durar entre 90 segundos y 3 minutos. En ese lapso, el oficial debe determinar si tienes intenciones de quedarte a vivir o trabajar ilegalmente en los Estados Unidos (presunción de inmigrante de la sección 214-b).

Aquí desglosamos las preguntas clave y la mejor forma de abordarlas:

- **¿Cuál es el motivo de su viaje?**
  *La trampa:* Responder con dudas o dar discursos largos.
  *La clave:* Sé directo y conciso. Di "Voy de vacaciones por 10 días a Orlando y Miami" en lugar de "Pues, quiero conocer y pasear un poco...".

- **¿Tiene familiares en Estados Unidos?**
  *La trampa:* Negar a un familiar que vive allá por temor a que te asocien con él.
  *La clave:* La honestidad es innegociable. La base de datos registra peticiones anteriores y parentescos. Si tienes familiares allá, decláralos y enfócate en demostrar que tu vida y arraigos fuertes están aquí.

- **¿Quién paga su viaje?**
  *La trampa:* Poner que te lo patrocina un tercero sin justificación sólida.
  *La clave:* El cónsul prefiere ver solvencia propia. Si te lo paga tu empresa o tus padres, lleva cartas certificadas. Si te lo paga un amigo en EE. UU., es una alerta alta de sospecha de patrocinio migratorio.`
    },
    {
      id: 'ART-003',
      title: 'Guía de Renovación: ¿Cómo calificar para omitir la entrevista?',
      tag: 'Renovación',
      date: '25 de Mayo, 2026',
      readTime: '4 min',
      emoji: '🔄',
      color: 'verde',
      snippet: 'La Embajada permite la exención de entrevista consular para ciertos casos de renovación B1/B2. Descubre los términos y requerimientos actualizados.',
      content: `La renovación de la visa americana B1/B2 es significativamente más sencilla que la primera solicitud, gracias al programa de exención de entrevista (Interview Waiver Program). No obstante, es un error confiarse y cometer fallas técnicas.

Criterios obligatorios para calificar:

1. **Categoría Idéntica**: Estar renovando exactamente el mismo tipo de visa (ej. B1/B2 a B1/B2).
2. **Fecha de Vencimiento**: Tu visa anterior debe estar vigente o haber vencido en los últimos 48 meses (el tiempo permitido suele ajustarse por directrices internas).
3. **Buen Historial**: No haber sido arrestado, deportado, ni haber excedido el tiempo de estadía autorizado en tus visitas previas.
4. **Nacionalidad**: Debes tramitar la visa en el país de tu nacionalidad o residencia legal.

**El proceso de Buzón (Dropbox):**
Aunque no tengas que ver al cónsul frente a frente, de igual forma debes enviar tu pasaporte, la hoja de confirmación del DS-160 y fotos al CAS. Si tu formulario está mal diligenciado o tu situación socioeconómica cambió drásticamente, la embajada puede revocar la exención y citarte a entrevista presencial de control.`
    }
  ];

  return (
    <div className="visas-hub blog-page-view">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Inicio
            </a>
          </li>
          <li>
            <span aria-current="page">Blog</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="visas-hub-header">
        <span className="hub-badge">Artículos y Guías</span>
        <h1 className="hub-title">Blog de Consejos Consulares</h1>
        <p className="hub-subtitle">
          Aprende a preparar tu trámite con las mejores recomendaciones y evita las causales comunes de negación de visa.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="visas-grid">
        {articles.map((art) => (
          <div key={art.id} className="visa-card">
            <div className="visa-card-icon">{art.emoji}</div>
            <div className="visa-card-body" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span className="hub-badge" style={{ margin: 0, padding: '3px 8px', fontSize: '10px' }}>
                  {art.tag}
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>
                  {art.readTime}
                </span>
              </div>
              
              <h2 className="visa-card-title" style={{ fontSize: '17px', lineHeight: '1.3' }}>
                {art.title}
              </h2>
              <p className="visa-card-desc" style={{ flexGrow: 1, fontSize: '13px', marginTop: '10px' }}>
                {art.snippet}
              </p>
              
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '10px' }}>
                Publicado: {art.date}
              </div>
            </div>
            
            <div className="visa-card-footer">
              <button 
                type="button" 
                className="visa-card-btn"
                onClick={() => setActiveArticle(art)}
              >
                Leer artículo completo &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Read Article Overlay Modal */}
      {activeArticle && (
        <div id="modal-overlay" className="show" onClick={() => setActiveArticle(null)}>
          <div className="mbox" style={{ maxWidth: '750px', textAlign: 'left' }} onClick={(e) => e.stopPropagation()}>
            <button className="mclose" onClick={() => setActiveArticle(null)}>✕</button>
            
            <div className="card-header-section" style={{ margin: 0, paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="card-emoji" style={{ fontSize: '36px' }}>{activeArticle.emoji}</div>
              <div>
                <span className={`mbadge mb-${activeArticle.color}`} style={{ marginBottom: '6px' }}>
                  {activeArticle.tag}
                </span>
                <h3 className="mtitulo" style={{ margin: 0, textAlign: 'left', fontSize: '20px', lineHeight: '1.3' }}>
                  {activeArticle.title}
                </h3>
              </div>
            </div>
            
            <div className="job-modal-meta" style={{ margin: '14px 0 20px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
              📅 Publicado el {activeArticle.date} &nbsp;|&nbsp; ⏱️ Lectura de {activeArticle.readTime}
            </div>

            <div className="article-body-content" style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '10px' }}>
              {activeArticle.content.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '16px' }}
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n/g, '<br />')
                  }}
                />
              ))}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                type="button" 
                className={`btn bpri mc-${activeArticle.color}`}
                onClick={() => setActiveArticle(null)}
              >
                Cerrar Artículo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
