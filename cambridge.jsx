/* eslint-disable */
/* Cambridge — English essay on the future of AI Engineering */

function Cambridge() {
  return (
    <section id="cambridge" className="cf-section accent-navy" style={{ background: "linear-gradient(180deg, transparent 0%, #fafbfd 30%, #fafbfd 80%, transparent 100%)" }}>
      <div className="container wide">
        <span className="section-number">VII</span>
        <div className="section-head reveal">
          <div className="eyebrow navy"><span className="dot"></span> Cambridge · English</div>
          <h2>The Future of<br />
            <em className="serif">A.I. Engineering.</em></h2>
          <p className="lead">
            As part of our Cambridge English module, our team prepared a short
            opinion essay on whether Artificial Intelligence Engineering will become
            one of the most important professions of the next decade.
          </p>
        </div>

        <div className="reveal">
          <article className="essay">
            <h3>Will Artificial Intelligence Engineering become one of the most important professions of the future?</h3>
            <div className="question">Opinion essay · CEFR B2 · 350 words</div>

            <p className="first">
              Artificial Intelligence is becoming one of the fastest-growing technologies in
              the world. Many companies and industries now use A.I. to improve their services,
              solve problems and make work more efficient. Because of this, the profession of
              A.I. Engineering is becoming more important every year. In our opinion, A.I.
              Engineering will be one of the most important professions of the future because
              technology will continue advancing and affecting everyday life.
            </p>

            <p>
              Currently, A.I. engineers work on creating intelligent systems, machine learning
              programs, chatbots and automated technologies. Big companies are investing heavily
              in artificial intelligence research and development. A.I. is already being used
              in education, healthcare, transportation and business to increase productivity
              and reduce human error. As technology keeps growing, more companies will need
              professionals who really understand how it works.
            </p>

            <p>
              There are clear advantages and disadvantages. One advantage is that A.I. can make
              work faster, more accurate and create entirely new opportunities in technology
              and innovation. However, some traditional jobs may disappear because of
              automation. Another problem is that A.I. can be misused — to spread
              misinformation, invade privacy or make unfair decisions — if it is not designed
              and used ethically.
            </p>

            <p>
              Our team would recommend that students interested in this career develop strong
              skills in mathematics, programming and problem solving. It is also important to
              study ethics and responsibility, because A.I. has a real impact on society.
              Future A.I. engineers should keep learning new tools and improve their creativity
              and teamwork skills, since this field changes very quickly.
            </p>

            <p>
              In conclusion, Artificial Intelligence Engineering is a profession that will
              continue growing in the future. It offers innovation, efficiency and new
              opportunities, but it also brings ethical and social challenges. Even so, A.I.
              engineers will play an important role in building technology that improves
              people's lives. For this reason, anyone interested in this career should
              prepare with both technical knowledge and a strong sense of responsibility.
            </p>
          </article>
        </div>

        {/* image placeholder */}
        <div className="reveal" style={{ marginTop: 48 }}>
          <div className="two-col">
            <image-slot
              id="cambridge-team"
              shape="rounded"
              radius="18"
              placeholder="Arrastra o haz clic para subir imagen — equipo Cambridge"
              style={{ display: "block", width: "100%", aspectRatio: "1 / 1", background: "var(--bg-elevated)", border: "1px solid var(--line)" }} data-comment-anchor="b5ed14f214-image-slot-74-13">
            </image-slot>
            <div>
              <div className="eyebrow gold" style={{ marginBottom: 14 }}><span className="dot"></span> Key takeaways</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["Growth", "A.I. Engineering will remain one of the fastest-growing fields in the next decade."],
                  ["Ethics", "Responsibility, privacy and bias-awareness are as important as technical skill."],
                  ["Skills", "Math, programming and continuous learning are the foundation of this career."],
                  ["Impact", "A.I. engineers will build the tools that shape how people work and live."],
                ].map(([k, v]) => (
                  <li key={k} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 16, alignItems: "baseline" }}>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 11,
                      letterSpacing: "0.16em", textTransform: "uppercase",
                      color: "var(--gold)",
                    }}>{k}</span>
                    <span style={{ color: "var(--ink-2)", fontSize: 15 }}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Cambridge });