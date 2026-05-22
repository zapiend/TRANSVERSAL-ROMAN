/* eslint-disable */
/* Speaking — Roundtable Discussion video (YouTube embed) */

function Speaking() {
  return (
    <section id="speaking" className="cf-section accent-gold" style={{background: "linear-gradient(180deg, transparent 0%, #fafbfd 30%, #fafbfd 80%, transparent 100%)"}}>
      <div className="container">
        <span className="section-number left">VIII</span>
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span> Speaking · English</div>
          <h2>Roundtable<br/>
            <em className="serif">Discussion.</em></h2>
          <p className="lead">
            This is our video for the Literature cross-curricular project: a
            roundtable discussion about <em className="serif">Artificial Intelligence Engineering</em>,
            its pros, cons, and areas of opportunity. Cuatro estudiantes debaten en
            inglés cómo la IA está cambiando el trabajo, la educación y la ética
            profesional.
          </p>
        </div>

        <div className="reveal">
          <div style={{
            position: "relative",
            background: "linear-gradient(155deg, var(--navy) 0%, var(--navy-2) 60%, #1c3a6a 100%)",
            borderRadius: "var(--radius-lg)",
            padding: 8,
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
          }}>
            {/* tech grid texture */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%)",
              pointerEvents: "none",
            }}></div>

            {/* video frame label */}
            <div style={{
              position: "absolute", top: 24, left: 28, zIndex: 2,
              display: "flex", gap: 8, alignItems: "center",
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              pointerEvents: "none",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#e54848",
                boxShadow: "0 0 0 4px rgba(229,72,72,0.18)",
              }}></span>
              Video · Roundtable Discussion
            </div>

            <div style={{
              position: "relative", zIndex: 2,
              aspectRatio: "16 / 9",
              width: "100%",
              borderRadius: "calc(var(--radius-lg) - 8px)",
              overflow: "hidden",
              background: "#0a1a30",
            }}>
              <iframe
                src="https://www.youtube.com/embed/Q2N_a8sTqAY?rel=0&modestbranding=1"
                title="Roundtable Discussion — Artificial Intelligence Engineering"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  border: "0",
                  display: "block",
                }}
              ></iframe>
            </div>
          </div>

          {/* meta strip below the video */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginTop: 14, padding: "0 8px", flexWrap: "wrap", gap: 8,
          }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--muted)",
            }}>YouTube · Roundtable Discussion</span>
            <a href="https://www.youtube.com/watch?v=Q2N_a8sTqAY"
               target="_blank" rel="noopener noreferrer"
               style={{
                 fontFamily: "var(--font-mono)", fontSize: 11,
                 letterSpacing: "0.14em", textTransform: "uppercase",
                 color: "var(--navy)",
                 display: "inline-flex", alignItems: "center", gap: 6,
               }}>
              Ver en YouTube →
            </a>
          </div>
        </div>

        {/* speakers / topics */}
        <div className="reveal" style={{marginTop: 36}}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
          }} className="speaking-grid">
            {[
              ["Pros", "Faster work, scalable services, new opportunities in every industry."],
              ["Cons", "Job replacement, bias, privacy concerns and dependency on technology."],
              ["Opportunities", "New careers, ethical roles, A.I. literacy and global mobility."],
            ].map(([k, v]) => (
              <div key={k} style={{
                padding: 22,
                background: "var(--bg-elevated)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
              }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--gold)", marginBottom: 10,
                }}>{k}</div>
                <p style={{fontSize: 14.5, color: "var(--ink-2)", margin: 0, lineHeight: 1.55}}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Speaking });
