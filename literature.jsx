/* eslint-disable */
/* Literature — infografía + breve explicación */

function Literature() {
  return (
    <section id="literature" className="cf-section accent-navy">
      <div className="container">
        <span className="section-number">IX</span>
        <div className="section-head reveal">
          <div className="eyebrow gold"><span className="dot"></span> Literature · English</div>
          <h2>Lo que necesita saber<br />
            un <em className="serif">A.I. Engineer.</em></h2>
          <p className="lead">
            As part of the Literature module, we researched the profile of an Artificial
            Intelligence engineer and summarized the key knowledge, skills, and mindset
            in this infographic.
          </p>
        </div>

        <div className="reveal" style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-lg)",
          padding: 24,
          boxShadow: "var(--shadow-md)"
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: 16, padding: "0 8px"
          }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--gold)"
            }}>Infografía · Literature</span>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--muted)"
            }}>A.I. Engineer · perfil completo</span>
          </div>
          <img src="assets/literature-infografia.jpeg"
          alt="Artificial Intelligence Engineer — What You Must Know & Skills You Need"
          style={{
            width: "100%", height: "auto", display: "block",
            borderRadius: "var(--radius)",
            border: "1px solid var(--line)"
          }} />
        </div>

        <div className="feature-grid reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 32 }}>
          {[
          ["Core Knowledge", "Mathematics, programming, machine learning, deep learning, and AI specializations."],
          ["Technical Skills", "Model development and deployment, debugging, APIs, databases, and cloud platforms."],
          ["Soft Skills + Mindset", "Communication, teamwork, critical thinking, continuous learning, and resilience."]].
          map(([t, d]) =>
          <div key={t} className="feature">
              <span className="tag">{t}</span>
              <p style={{ marginTop: 8 }}>{d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { Literature });