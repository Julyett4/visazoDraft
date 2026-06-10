
export default function RenovAlertModal({ isOpen, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div id="renov-alert" className="show">
      <div className="ra-box">
        <div className="ra-icon">📋</div>
        <h3 className="ra-title">Información importante sobre tu caso</h3>
        <div className="ra-banner">
          ⚠️ <strong>Debido a tu historial, el sistema detecta que debes presentarte a entrevista consular.</strong><br /><br />
          Continuaremos con el perfilamiento completo para Primera Vez y así determinar tu nivel de viabilidad con precisión.
        </div>
        <p className="ra-sub">No te preocupes — nuestro equipo tiene experiencia en casos complejos. El diagnóstico completo nos permitirá diseñar la mejor estrategia para ti.</p>
        <button className="ra-btn" onClick={onConfirm}>Entendido, continuar con el diagnóstico →</button>
      </div>
    </div>
  );
}
