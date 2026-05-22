/* eslint-disable */
/* Computer Lab — careers of the future in Mexico (table image) */

function ComputerLab() {
  return (
    <section id="computerlab" className="cf-section accent-navy">
      <div className="container wide">
        <span className="section-number left">XIII</span>

        <div className="section-head reveal">
          <div className="eyebrow navy"><span className="dot"></span> Computer Lab · English</div>
          <h2>Careers of the future<br/>
            in <em className="serif">Mexico.</em></h2>
          <p className="lead">
            In Computer Lab, we built a comparative table of ten careers expected to
            grow the most during the next decade in Mexico. For each program we mapped
            its academic <em className="serif">area</em>, the
            <em className="serif"> university</em> offering it, and its
            <em className="serif"> duration in years</em>. The table shows that most
            future-oriented careers belong to engineering, health and analytics — and
            that public universities like UNAM and private ones like Tec de Monterrey
            and Anáhuac are leading the offer.
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
                color: "var(--navy)",
              }}>Activity #9 · Comparative Table</div>
              <h3 style={{margin: "4px 0 0", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, letterSpacing: "-0.01em"}}>
                Careers, areas, universities and duration
              </h3>
            </div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--muted)",
            }}>Computer Lab</div>
          </div>

          <img src="assets/computerlab-tabla.png"
               alt="Computer Lab — Careers of the future in Mexico (table)"
               style={{
                 width: "100%", height: "auto", display: "block",
                 borderRadius: "var(--radius)",
                 border: "1px solid var(--line)",
                 background: "white",
               }} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ComputerLab });
