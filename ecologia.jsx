/* eslint-disable */
/* Ecología — periódico sobre impacto ambiental de la IA */

function Ecologia() {
  return (
    <section id="ecologia" className="cf-section accent-green">
      <div className="container">
        <span className="section-number">XII</span>
        <div className="section-head reveal">
          <div className="eyebrow green"><span className="dot"></span> Ecología</div>
          <h2>El costo ambiental<br/>
            de la <em className="serif">revolución digital.</em></h2>
          <p className="lead">
            En ecología investigamos el impacto ambiental de la Ingeniería en Inteligencia
            Artificial: cuánta energía consume el entrenamiento de modelos, cuánta agua
            usan los centros de datos para refrigerarse y cómo —al mismo tiempo— la
            propia IA puede ayudar a optimizar el consumo energético de ciudades enteras.
            El resultado lo presentamos como periódico de edición especial.
          </p>
        </div>

        <div className="reveal" style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-lg)",
          padding: 24,
          boxShadow: "var(--shadow-md)",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: 16, padding: "0 8px", flexWrap: "wrap", gap: 12,
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--green)",
              }}>Periódico · Edición especial</div>
              <h3 style={{margin: "4px 0 0", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.01em"}}>
                El costo ambiental de la revolución digital
              </h3>
            </div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--muted)",
            }}>Proyecto transversal · Ecología</div>
          </div>

          <img src="assets/ecologia-periodico.png"
               alt="Periódico — El costo ambiental de la revolución digital"
               style={{
                 width: "100%", height: "auto", display: "block",
                 borderRadius: "var(--radius)",
                 border: "1px solid var(--line)",
                 background: "white",
               }} />
        </div>

        {/* highlights */}
        <div className="reveal" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 32,
        }} className="eco-grid">
          {[
            ["Energía", "El entrenamiento de un modelo grande puede consumir tanta electricidad como cientos de hogares en un año."],
            ["Agua", "Los centros de datos generan calor extremo y necesitan grandes cantidades de agua potable para refrigerarse."],
            ["Optimización", "La misma IA puede gestionar semáforos, alumbrado y maquinaria para reducir el consumo total de las ciudades."],
          ].map(([k, v]) => (
            <div key={k} style={{
              padding: 22, border: "1px solid var(--line)",
              borderRadius: "var(--radius)", background: "var(--bg-elevated)",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--green)", marginBottom: 10,
              }}>{k}</div>
              <p style={{margin: 0, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55}}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Ecologia });
