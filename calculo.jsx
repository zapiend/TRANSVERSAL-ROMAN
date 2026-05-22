/* eslint-disable */
/* Cálculo — 4 chart placeholders (user will add their charts) */

const CHARTS = [
{
  num: "01",
  title: "Evolución de Egresados en Ciencia de Datos",
  region: "México",
  x: "Años",
  y: "Número de egresados",
  note: "Crecimiento sostenido en los últimos años."
},
{
  num: "02",
  title: "Evolución de Egresados en Ingeniería en Software",
  region: "México",
  x: "Años",
  y: "Número de egresados",
  note: "Una de las carreras de mayor expansión."
},
{
  num: "03",
  title: "Egresados en Telecomunicaciones y Sistemas",
  region: "México",
  x: "Años",
  y: "Número de egresados",
  note: "Tendencia estable con repuntes recientes."
},
{
  num: "04",
  title: "Predicción de Egresados en Ingeniería en IA",
  region: "México · proyección",
  x: "Años",
  y: "Número de egresados",
  note: "Carrera emergente — crecimiento exponencial estimado."
}];


/* Drop-zone image slot (uses <image-slot> web component, plus a click-to-upload
   fallback that reads a File into a data URL and shows it inline). */
function ChartImageSlot({ id, label }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: "4 / 3",
      borderRadius: 14,
      overflow: "hidden",
      background: "#fafbfd"
    }}>
      <image-slot
        id={id}
        shape="rounded"
        radius="14"
        placeholder={label}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          background: "var(--bg-elevated)"
        }}>
      </image-slot>
    </div>);

}

function Calculo() {
  return (
    <section id="calculo" className="cf-section accent-navy">
      <div className="container">
        <span className="section-number">IV</span>
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span> Cálculo · Estadística</div>
          <h2>Tendencias y proyección<br />
            de <em className="serif">egresados en tecnología.</em></h2>
          <p className="lead">
            En cálculo analizamos la evolución del número de egresados de carreras
            tecnológicas en México y proyectamos el crecimiento esperado para
            Ingeniería en Inteligencia Artificial. Aquí están las cuatro gráficas
            que sustentan nuestro análisis — pueden reemplazarse por las versiones
            finales del equipo.
          </p>
        </div>

        <div className="chart-grid">
          {CHARTS.map((c, i) =>
          <div key={c.num} className={`chart-card reveal reveal-delay-${i % 3 + 1}`}>
              <div className="chart-meta">
                <div>
                  <div className="gnum">Gráfica {c.num}</div>
                  <h4>{c.title}</h4>
                </div>
                <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--muted)"
              }}>{c.region}</span>
              </div>

              {/* Drop your chart image here — click or drag-and-drop */}
              <ChartImageSlot
              id={`grafica-${c.num}`}
              label={`Arrastra o haz clic para subir la Gráfica ${c.num}`} />
            

              <div className="axes">
                <span><b>Eje X:</b> {c.x}</span>
                <span><b>Eje Y:</b> {c.y}</span>
              </div>
              <p style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 12, marginBottom: 0 }}>
                {c.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { Calculo });