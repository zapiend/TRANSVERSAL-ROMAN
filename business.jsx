/* eslint-disable */
/* Business — survey results with 4 chart images */

const BUSINESS_CHARTS = [
  {
    src: "assets/business-2.jpeg",
    eyebrow: "Encuesta 01",
    title: "Carreras del futuro más mencionadas",
    desc: "Cuando preguntamos qué carrera consideran “del futuro”, la mitad de los alumnos eligió Ingeniería en IA. La ciencia de datos y el desarrollo de videojuegos también figuran fuerte — todas profesiones tecnológicas. Esto confirma la hipótesis del proyecto: las carreras vinculadas con tecnología son percibidas como las más estratégicas para los próximos años.",
    stats: [
      ["50%", "Ingeniería en IA"],
      ["46%", "Ciencia de datos"],
      ["36%", "Desarrollo de videojuegos"],
      ["30%", "Marketing digital"],
    ],
  },
  {
    src: "assets/business-1.jpeg",
    eyebrow: "Encuesta 02",
    title: "Áreas de interés de los alumnos",
    desc: "Casi la mitad del grupo se inclina por Tecnología e IA como su área profesional preferida. Negocios y marketing se posiciona en segundo lugar y diseño digital cierra el podio. La concentración de respuestas tecnológicas refuerza la idea de que la generación que está saliendo del colegio entiende a la IA no como una moda, sino como su entorno natural de trabajo.",
    stats: [
      ["44%", "Tecnología e IA"],
      ["32%", "Negocios y marketing"],
      ["24%", "Diseño y arte digital"],
    ],
  },
  {
    src: "assets/business-3.jpeg",
    eyebrow: "Encuesta 03",
    title: "Preferencias laborales",
    desc: "La modalidad de trabajo que más eligen los alumnos es trabajar en otro país, seguido de emprender su propio negocio y trabajo híbrido. El trabajo 100% presencial y el 100% remoto quedan al final. La conclusión es clara: la nueva generación no quiere estar atada ni a una oficina ni a un país.",
    stats: [
      ["66%", "Trabajar en otro país"],
      ["58%", "Emprender su negocio"],
      ["52%", "Trabajo híbrido"],
      ["26%", "Trabajo presencial"],
      ["22%", "Trabajo remoto"],
    ],
  },
  {
    src: "assets/business-4.jpeg",
    eyebrow: "Encuesta 04",
    title: "Impacto de la tecnología y la IA",
    desc: "Más del 60% del grupo opina que la IA reemplazará empleos. Un 28% piensa que solo afectará a algunos sectores, y un 8% considera que no reemplazará empleos en absoluto. La mayoría percibe la transformación como inevitable — lo que da más sentido aún a las carreras analizadas en este proyecto, todas relacionadas con cómo se diseñará, regulará y aprovechará esa transformación.",
    stats: [
      ["64%", "La IA reemplazará empleos"],
      ["28%", "Solo algunos empleos"],
      ["8%", "No reemplazará empleos"],
    ],
  },
];

function Business() {
  return (
    <section id="business" className="cf-section accent-green">
      <div className="container">
        <span className="section-number">VI</span>
        <div className="section-head reveal">
          <div className="eyebrow green"><span className="dot"></span> Business · Estudio de campo</div>
          <h2>Las carreras del futuro,<br/>
            según <em className="serif">nuestros compañeros.</em></h2>
          <p className="lead">
            Para esta materia diseñamos una encuesta dentro del colegio con preguntas
            sobre las carreras del futuro, áreas de interés, preferencias laborales y
            la percepción del impacto de la Inteligencia Artificial. Los resultados
            que siguen reflejan cómo nuestra generación entiende —y se está preparando
            para— el nuevo mundo profesional.
          </p>
          <div style={{
            display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap",
            fontFamily: "var(--font-mono)", fontSize: 12,
            color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase",
          }}>
            <div>Muestra<span style={{
              display: "block", color: "var(--ink)", fontFamily: "var(--font-sans)",
              fontSize: 16, fontWeight: 600, letterSpacing: 0, textTransform: "none", marginTop: 4,
            }}>Alumnos del colegio</span></div>
            <div>Preguntas<span style={{
              display: "block", color: "var(--ink)", fontFamily: "var(--font-sans)",
              fontSize: 16, fontWeight: 600, letterSpacing: 0, textTransform: "none", marginTop: 4,
            }}>4 ejes principales</span></div>
            <div>Periodo<span style={{
              display: "block", color: "var(--ink)", fontFamily: "var(--font-sans)",
              fontSize: 16, fontWeight: 600, letterSpacing: 0, textTransform: "none", marginTop: 4,
            }}>Ciclo 2026</span></div>
          </div>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: 32}}>
          {BUSINESS_CHARTS.map((c, i) => (
            <article key={c.title} className="reveal" style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-lg)",
              padding: 36,
              boxShadow: "var(--shadow-sm)",
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr",
                gap: 36,
                alignItems: "center",
              }} className="bus-row">
                <div style={{order: i % 2 === 0 ? 1 : 2}}>
                  <div style={{
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius)",
                    padding: 20,
                  }}>
                    <img src={c.src} alt={c.title}
                      style={{width: "100%", height: "auto", display: "block", borderRadius: 10}} />
                  </div>
                </div>
                <div style={{order: i % 2 === 0 ? 2 : 1}}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    color: "var(--gold)", marginBottom: 12,
                  }}>{c.eyebrow}</div>
                  <h3 style={{fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 32, letterSpacing: "-0.015em", lineHeight: 1.1, marginBottom: 16}}>
                    {c.title}
                  </h3>
                  <p style={{color: "var(--muted)", fontSize: 15.5, lineHeight: 1.65, marginBottom: 20}}>
                    {c.desc}
                  </p>
                  <div style={{display: "flex", flexDirection: "column", gap: 8}}>
                    {c.stats.map(([v, l]) => (
                      <div key={l} style={{
                        display: "flex", alignItems: "baseline", gap: 14,
                        padding: "10px 14px",
                        background: "var(--bg)",
                        borderRadius: 10,
                        border: "1px solid var(--line)",
                      }}>
                        <span style={{
                          fontFamily: "var(--font-mono)", fontWeight: 500,
                          fontSize: 14, color: "var(--navy)", minWidth: 44,
                        }}>{v}</span>
                        <span style={{fontSize: 14, color: "var(--ink-2)"}}>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Business });
