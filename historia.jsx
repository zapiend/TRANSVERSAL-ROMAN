/* eslint-disable */
/* Historia — IA y humanidades */

function Historia() {
  return (
    <section id="historia" className="cf-section accent-green" style={{ background: "linear-gradient(180deg, transparent 0%, #fafbfd 30%, #fafbfd 80%, transparent 100%)" }}>
      <div className="container wide">
        <span className="section-number">XI</span>
        <div className="section-head reveal">
          <div className="eyebrow navy"><span className="dot"></span> Historia · Investigación</div>
          <h2>Ingeniería en IA<br />
            y las <em className="serif">humanidades.</em></h2>
          <p className="lead">
            La Ingeniería en Inteligencia Artificial es una de las carreras más
            importantes actualmente. Su crecimiento ha provocado que las humanidades
            —como historia y filosofía— pierdan visibilidad. Esta investigación analiza
            por qué ocurrió ese cambio y por qué las humanidades siguen siendo
            necesarias para entender lo que la tecnología está construyendo.
          </p>
        </div>

        {/* Bloque tipo paper académico */}
        <div className="reveal" style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-lg)",
          padding: 48,
          boxShadow: "var(--shadow-md)"
        }}>
          <div className="hist-grid" style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: 40
          }}>
            <aside style={{
              borderRight: "1px solid var(--line)", paddingRight: 24,
              display: "flex", flexDirection: "column", gap: 22
            }} className="hist-aside">
              {[
              ["Pregunta",
              "¿Cómo ha influido la Ing. en IA en la pérdida de importancia de las humanidades?"],
              ["Metodología",
              "La investigación se realizó mediante la búsqueda y análisis de artículos, libros y páginas confiables relacionadas con inteligencia artificial y humanidades."],
              ["Objetivo",
              "Analizar cómo el avance de la Inteligencia Artificial ha cambiado la importancia de las humanidades en la actualidad."]].
              map(([k, v]) =>
              <div key={k}>
                  <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 10.5,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "var(--gold)", marginBottom: 8
                }}>{k}</div>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: 13.5, lineHeight: 1.6 }}>{v}</p>
                </div>
              )}
            </aside>

            <div className="hist-body" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <Apartado n="01" title="Introducción">
                Hoy en día, muchas personas prefieren carreras relacionadas con tecnología
                e inteligencia artificial porque tienen más oportunidades laborales. Sin
                embargo, las humanidades siguen siendo importantes para comprender la
                sociedad y los problemas éticos.
              </Apartado>

              <Apartado n="02" title="Planteamiento del problema">
                Las carreras tecnológicas tienen más valor actualmente, mientras que las
                humanidades son consideradas menos útiles. El problema es entender cómo
                la Inteligencia Artificial ha influido en este cambio.
              </Apartado>

              <Apartado n="03" title="Justificación">
                Esta investigación es importante porque ayuda a comprender cómo la
                tecnología ha cambiado la educación y las carreras profesionales.
                También permite reflexionar sobre la importancia de las humanidades.
              </Apartado>

              <Apartado n="04" title="Resultados">
                Se encontró que las carreras tecnológicas son más valoradas porque tienen
                mayor demanda laboral. Sin embargo, las humanidades siguen siendo
                necesarias porque ayudan a desarrollar pensamiento crítico y valores
                éticos.
              </Apartado>

              <Apartado n="05" title="Conclusiones">
                La Inteligencia Artificial es una carrera del futuro muy importante, pero
                las humanidades también siguen siendo necesarias. Ambas áreas pueden
                complementarse para mejorar la sociedad.
              </Apartado>
            </div>
          </div>
        </div>

        {/* recurso gráfico */}
        <div className="reveal" style={{ marginTop: 48 }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: 14
          }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--muted)"
            }}>Recurso gráfico · Historia</span>
            <span style={{ fontSize: 12, color: "var(--muted-2)" }}>Arrastra o haz clic para subir</span>
          </div>
          <image-slot
            id="historia-recurso"
            shape="rounded"
            radius="18"
            placeholder="Imagen, línea de tiempo o infografía — IA y humanidades"
            style={{ display: "block", width: "100%", aspectRatio: "4 / 3", background: "var(--bg-elevated)", border: "1px solid var(--line)" }} data-comment-anchor="a6e022d91d-image-slot-107-11">
          </image-slot>
        </div>
      </div>
    </section>);

}

function Apartado({ n, title, children }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.16em", color: "var(--muted)"
        }}>{n}</span>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, letterSpacing: "-0.01em", color: "var(--navy)" }}>
          {title}
        </h3>
      </div>
      <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 15.5, lineHeight: 1.7, maxWidth: "68ch" }}>
        {children}
      </p>
    </div>);

}

Object.assign(window, { Historia });