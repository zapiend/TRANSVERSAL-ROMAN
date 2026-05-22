/* eslint-disable */
/* Psicología — career-match test: which of the 3 careers (Derecho / IA / Negocios) fits you best */

const CAREERS = {
  "Derecho": {
    color: "#0b1f3a",
    accent: "#2c4675",
    short: "Justicia · Argumentación · Sociedad",
    desc: "Tu mente busca orden, justicia y argumentos sólidos. Te interesa cómo se regulan las cosas, defender causas y resolver conflictos con palabras. Encajas en un mundo donde la tecnología necesita reglas, ética y supervisión humana.",
    fortalezas: ["Argumentación", "Pensamiento crítico", "Compromiso ético"],
    label: "Eres perfil de"
  },
  "Ingeniería en IA": {
    color: "#b8924a",
    accent: "#d4ae65",
    short: "Lógica · Datos · Innovación",
    desc: "Te emociona resolver problemas complejos con tecnología. Te atraen los datos, los sistemas inteligentes y construir cosas que antes no existían. Tu lugar está en el centro de la revolución digital — diseñando los modelos y herramientas del futuro.",
    fortalezas: ["Lógica-matemática", "Curiosidad técnica", "Capacidad de aprender rápido"],
    label: "Eres perfil de"
  },
  "Negocios": {
    color: "#1f6b4f",
    accent: "#2d8568",
    short: "Estrategia · Liderazgo · Mercado",
    desc: "Piensas en términos de oportunidad, equipos y resultados. Te atrae construir empresas, gestionar recursos y conectar ideas con mercados. En la economía digital, eres quien transforma una buena idea en un negocio sostenible.",
    fortalezas: ["Liderazgo", "Visión estratégica", "Comunicación"],
    label: "Eres perfil de"
  }
};

const QUESTIONS = [
{
  q: "Cuando ves una noticia sobre IA, lo primero que piensas es…",
  options: [
  ["¿Qué leyes deberían regular esto?", "Derecho"],
  ["¿Cómo está construido por dentro?", "Ingeniería en IA"],
  ["¿Qué oportunidad de negocio hay aquí?", "Negocios"]]

},
{
  q: "En un proyecto en equipo prefieres…",
  options: [
  ["Defender la postura y argumentar por qué es correcta.", "Derecho"],
  ["Construir el prototipo técnico.", "Ingeniería en IA"],
  ["Coordinar al equipo y presentarlo al jurado.", "Negocios"]]

},
{
  q: "Tu materia favorita normalmente es…",
  options: [
  ["Historia, ética o filosofía.", "Derecho"],
  ["Matemáticas, programación o física.", "Ingeniería en IA"],
  ["Economía, marketing o emprendimiento.", "Negocios"]]

},
{
  q: "Tu habilidad más fuerte es…",
  options: [
  ["Escribir y argumentar con claridad.", "Derecho"],
  ["Resolver problemas lógicos y técnicos.", "Ingeniería en IA"],
  ["Convencer, negociar y vender ideas.", "Negocios"]]

},
{
  q: "Si tuvieras que elegir un trabajo de verano…",
  options: [
  ["Apoyar en un despacho o ONG.", "Derecho"],
  ["Aprender a programar o entrenar un modelo de IA.", "Ingeniería en IA"],
  ["Trabajar en una startup o vendiendo algo propio.", "Negocios"]]

},
{
  q: "Tu personalidad se parece más a…",
  options: [
  ["Analítica y reflexiva.", "Derecho"],
  ["Curiosa y técnica.", "Ingeniería en IA"],
  ["Sociable y emprendedora.", "Negocios"]]

},
{
  q: "¿Qué problema del mundo te gustaría resolver?",
  options: [
  ["Injusticias sociales y falta de derechos.", "Derecho"],
  ["Limitaciones tecnológicas en salud o ciencia.", "Ingeniería en IA"],
  ["Falta de oportunidades económicas para la gente.", "Negocios"]]

},
{
  q: "En una junta normalmente eres quien…",
  options: [
  ["Hace las preguntas difíciles.", "Derecho"],
  ["Propone una solución técnica.", "Ingeniería en IA"],
  ["Decide qué hacemos y cómo seguimos.", "Negocios"]]

},
{
  q: "Lo que más te emociona del futuro es…",
  options: [
  ["Que existan reglas claras para la IA y la tecnología.", "Derecho"],
  ["Construir sistemas inteligentes nuevos.", "Ingeniería en IA"],
  ["Crear empresas que aprovechen la tecnología.", "Negocios"]]

},
{
  q: "Tu mayor talento académico es…",
  options: [
  ["Leer mucho y argumentar mejor.", "Derecho"],
  ["Modelos, fórmulas y código.", "Ingeniería en IA"],
  ["Liderar equipos y administrar recursos.", "Negocios"]]

},
{
  q: "Te imaginas a los 30 años trabajando en…",
  options: [
  ["Un despacho, juzgado u organismo internacional.", "Derecho"],
  ["Un laboratorio de IA o una empresa de tecnología.", "Ingeniería en IA"],
  ["Tu propia empresa o un puesto directivo.", "Negocios"]]

},
{
  q: "Frente a la IA, te interesa más…",
  options: [
  ["Sus límites éticos y legales.", "Derecho"],
  ["Cómo se construye y se mejora.", "Ingeniería en IA"],
  ["Cómo monetizarla y escalarla.", "Negocios"]]

},
{
  q: "Tu manera de estudiar es…",
  options: [
  ["Leer a fondo y tomar notas detalladas.", "Derecho"],
  ["Practicar ejercicios y resolver problemas.", "Ingeniería en IA"],
  ["Hacer resúmenes y discutirlos con otros.", "Negocios"]]

},
{
  q: "¿Qué te molesta más en un proyecto?",
  options: [
  ["Que no se respeten las reglas o los acuerdos.", "Derecho"],
  ["Que algo no funcione bien técnicamente.", "Ingeniería en IA"],
  ["Que se pierda tiempo y oportunidades.", "Negocios"]]

},
{
  q: "Si pudieras elegir un solo superpoder profesional…",
  options: [
  ["Argumentar para que la justicia siempre gane.", "Derecho"],
  ["Construir cualquier sistema inteligente que imagine.", "Ingeniería en IA"],
  ["Detectar antes que nadie el próximo gran negocio.", "Negocios"]]

}];


function CareerTest() {
  const { useState, useMemo } = React;
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState([]);

  const scores = useMemo(() => {
    const s = { "Derecho": 0, "Ingeniería en IA": 0, "Negocios": 0 };
    answers.forEach((a) => {if (a) s[a] += 1;});
    return s;
  }, [answers]);

  const winner = useMemo(() => {
    let best = "Ingeniería en IA",val = -1;
    for (const k of Object.keys(scores)) if (scores[k] > val) {val = scores[k];best = k;}
    return best;
  }, [scores]);

  const choose = (career) => {
    const next = [...answers];
    next[step] = career;
    setAnswers(next);
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) setStep(step + 1);else
      setStep(QUESTIONS.length);
    }, 220);
  };

  const reset = () => {setAnswers([]);setStep(-1);};

  // INTRO
  if (step === -1) {
    return (
      <div className="test-card reveal">
        <div className="test-meta">
          <span>Test · Psicología</span>
          <span>{QUESTIONS.length} preguntas · ~3 min</span>
        </div>
        <h3 className="test-question" style={{ marginBottom: 16 }}>
          ¿Cuál de las 3 carreras<br />
          <em className="serif">es más para ti?</em>
        </h3>
        <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 32, maxWidth: "58ch" }}>
          Responde {QUESTIONS.length} preguntas rápidas y descubre cuál de las tres
          carreras del futuro analizadas en este proyecto —Derecho, Ingeniería en
          Inteligencia Artificial o Negocios— encaja mejor con tu manera de pensar,
          tu personalidad y tus talentos.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {Object.entries(CAREERS).map(([k, v]) =>
          <div key={k} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "8px 14px 8px 8px",
            border: "1px solid var(--line)",
            borderRadius: 999,
            fontSize: 13.5,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.04em",
            color: "var(--muted)"
          }}>
              <span style={{
              width: 22, height: 22, borderRadius: "50%",
              background: v.color,
              display: "inline-block"
            }}></span>
              {k}
            </div>
          )}
        </div>
        <div className="test-controls" style={{ marginTop: 32 }}>
          <span></span>
          <button className="btn primary" onClick={() => setStep(0)}>
            Empezar el test →
          </button>
        </div>
      </div>);

  }

  // RESULT
  if (step === QUESTIONS.length) {
    const total = QUESTIONS.length;
    const pct = (k) => Math.round(scores[k] / total * 100);
    const sorted = Object.keys(CAREERS).sort((a, b) => scores[b] - scores[a]);
    const t = CAREERS[winner];

    return (
      <div className="test-card reveal">
        <div className="test-meta">
          <span>Resultado</span>
          <span>{total} de {total} respondidas</span>
        </div>

        <div className="test-result">
          <div className="result-orb" style={{ background: `linear-gradient(135deg, ${t.color} 0%, ${t.accent} 100%)` }}>
            <div>
              <div className="pct">{t.label}</div>
              <h3 style={{ fontSize: winner === "Ingeniería en IA" ? 30 : 38, lineHeight: 1.05 }}>{winner}</h3>
              <div className="pct" style={{ marginTop: 8 }}>{pct(winner)}% · carrera ideal</div>
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--muted)", marginBottom: 12
            }}>{t.short}</div>
            <h3 style={{ fontSize: 22, marginBottom: 12 }}>Tu perfil</h3>
            <p style={{ color: "var(--ink-2)", fontSize: 15.5, lineHeight: 1.65 }}>
              {t.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
              {t.fortalezas.map((f) =>
              <span key={f} style={{
                fontSize: 12, fontFamily: "var(--font-mono)",
                padding: "5px 11px", borderRadius: 999,
                background: "var(--bg)", border: "1px solid var(--line)",
                color: "var(--ink-2)"
              }}>{f}</span>
              )}
            </div>

            <div className="result-bars">
              {sorted.map((k) => {
                const c = CAREERS[k].color;
                return (
                  <div key={k} className="result-bar">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>{k}</span>
                      <span>{pct(k)}%</span>
                    </div>
                    <div className="track">
                      <div className="fill" style={{ width: `${pct(k)}%`, background: c }}></div>
                    </div>
                  </div>);

              })}
            </div>
          </div>
        </div>

        <div className="test-controls">
          <button className="btn ghost" onClick={reset}>← Volver a empezar</button>
          <a href="#calculo" className="btn primary">Continuar al siguiente módulo →</a>
        </div>
      </div>);

  }

  // QUESTION
  const q = QUESTIONS[step];
  const progress = step / QUESTIONS.length * 100;

  return (
    <div className="test-card reveal">
      <div className="test-progress"><div style={{ width: `${progress}%` }}></div></div>
      <div className="test-meta">
        <span>Pregunta {String(step + 1).padStart(2, "0")} / {String(QUESTIONS.length).padStart(2, "0")}</span>
        <span>{Math.round(progress)}% completado</span>
      </div>
      <h3 className="test-question">{q.q}</h3>
      <div className="test-options">
        {q.options.map(([text, career], i) =>
        <button key={i} className="test-option" onClick={() => choose(career)}>
            <span className="marker">{String.fromCharCode(65 + i)}</span>
            <span>{text}</span>
          </button>
        )}
      </div>
      <div className="test-controls">
        <button className="btn ghost" disabled={step === 0} onClick={() => setStep(Math.max(0, step - 1))}>← Atrás</button>
        <button className="btn ghost" onClick={reset}>Reiniciar</button>
      </div>
    </div>);

}

function Psicologia() {
  return (
    <section id="psicologia" className="cf-section accent-gold" style={{ background: "linear-gradient(180deg, transparent 0%, #fafbfd 30%, #fafbfd 80%, transparent 100%)" }}>
      <div className="container wide">
        <span className="section-number left">III</span>
        <div className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span> Psicología</div>
          <h2>¿Qué carrera del futuro<br />
            es <em className="serif">para ti?</em></h2>
          <p className="lead">
            En psicología analizamos cómo la personalidad —pensamientos, emociones y
            comportamientos— determina en qué carrera profesional puede destacar cada
            persona. Personalidad, temperamento y carácter forman tres capas que juntas
            explican por qué cada quien encuentra su propio lugar profesional. Haz el
            test y descubre cuál de las tres carreras estudiadas se ajusta más a ti.
          </p>
        </div>

        {/* Three concept cards */}
        <div className="feature-grid reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginBottom: 64 }}>
          <div className="feature">
            <span className="tag">Personalidad</span>
            <h4>Lo que te hace único</h4>
            <p>Conjunto de pensamientos, emociones y comportamientos que diferencian a cada persona y orientan tu vocación profesional.</p>
          </div>
          <div className="feature green">
            <span className="tag">Temperamento</span>
            <h4>Tu base biológica</h4>
            <p>Cómo reaccionas emocionalmente desde que naces. Influye en si te concentras en lo técnico, en lo legal o en lo estratégico.</p>
          </div>
          <div className="feature gold">
            <span className="tag">Carácter</span>
            <h4>Lo que construyes</h4>
            <p>Se forma con educación, experiencias y valores — claves para escoger una carrera que vaya con quien eres y quieres ser.</p>
          </div>
        </div>

        {/* TEST */}
        <div className="reveal" style={{ marginBottom: 80 }}>
          <CareerTest />
        </div>

        {/* Habilidades requeridas */}
        <div className="section-head reveal" style={{ marginBottom: 36, marginTop: 32 }}>
          <div className="eyebrow green"><span className="dot"></span> Habilidades transversales</div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}>Lo que cualquier carrera del futuro<br />
            <em className="serif">te va a pedir.</em></h2>
        </div>

        <div className="feature-grid reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {[
          ["Pensamiento lógico", "Sea derecho, IA o negocios — todas exigen analizar problemas con orden y argumentos."],
          ["Creatividad", "Las profesiones del futuro se reinventan constantemente: ideas nuevas son la ventaja."],
          ["Resolución de problemas", "Cada carrera enfrentará casos sin precedentes que habrá que resolver desde cero."],
          ["Adaptación tecnológica", "La tecnología cambia cada año. Aprender continuamente no es opcional para ninguna profesión."],
          ["Trabajo en equipo", "Nadie construye solo. Ingenieros, abogados y empresarios trabajan en redes interdisciplinarias."],
          ["Comunicación digital", "Explicar bien tus ideas —técnicas, legales o de negocio— es la habilidad más subestimada."]].
          map(([t, d], i) =>
          <div key={t} className="feature" style={{ borderRadius: "var(--radius)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.14em", color: "var(--gold)"
              }}>0{i + 1}</span>
                <span style={{ height: 1, flex: 1, background: "var(--line)" }}></span>
              </div>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          )}
        </div>

        {/* User-uploadable image */}
        <div className="reveal" style={{ marginTop: 64 }}>
          <image-slot
            id="psicologia-perfil"
            shape="rounded"
            radius="18"
            placeholder="Arrastra o haz clic para subir imagen — psicología y vocación"
            style={{ display: "block", width: "100%", aspectRatio: "4 / 3", background: "var(--bg-elevated)", border: "1px solid var(--line)" }} data-comment-anchor="e706c75dde-image-slot-406-11">
          </image-slot>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Psicologia, CareerTest });