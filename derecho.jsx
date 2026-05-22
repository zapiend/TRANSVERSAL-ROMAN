/* eslint-disable */
/* Derecho — regulaciones de IA, protección de datos, telemedicina */

const LAWS = [
  {
    title: "Ley Federal de Protección de Datos Personales",
    tag: "LFPDPPP",
    desc: "Protege la información personal de los usuarios y obliga a las empresas a cuidar los datos que recopilan mediante sistemas de IA.",
  },
  {
    title: "Constitución Política de los Estados Unidos Mexicanos",
    tag: "Marco constitucional",
    desc: "Protege derechos fundamentales como privacidad, libertad de expresión y acceso a la información.",
  },
  {
    title: "Código Penal Federal",
    tag: "Delitos digitales",
    desc: "Se aplica cuando la IA se utiliza para cometer delitos como fraude digital, robo de identidad o difusión de información falsa.",
  },
  {
    title: "Normas de propiedad intelectual y derechos de autor",
    tag: "Propiedad intelectual",
    desc: "Regulan el uso de imágenes, música, textos o contenido generado por inteligencia artificial.",
  },
];

const RISKS = [
  {
    pill: "Privacidad",
    title: "Violación de privacidad",
    desc: "La IA recopila y analiza grandes cantidades de información personal.",
    example: "Una app de IA guarda datos médicos o conversaciones privadas sin permiso del usuario.",
  },
  {
    pill: "Identidad",
    title: "Robo de identidad y fraudes",
    desc: "La IA puede usarse para crear voces, imágenes o videos falsos.",
    example: "Los \"deepfakes\" pueden imitar a una persona para cometer estafas o difundir información falsa.",
  },
  {
    pill: "Autor",
    title: "Derechos de autor",
    desc: "Algunas IA generan contenido utilizando obras existentes sin autorización.",
    example: "Una IA crea imágenes copiando estilos de artistas sin dar créditos ni permiso.",
  },
  {
    pill: "Sesgo",
    title: "Discriminación o decisiones injustas",
    desc: "Los sistemas de IA pueden tener errores o sesgos.",
    example: "Un sistema automático de contratación rechaza candidatos por género, edad o apariencia.",
  },
  {
    pill: "Responsabilidad",
    title: "Responsabilidad por errores",
    desc: "No siempre está claro quién responde cuando una IA comete un error.",
    example: "Un vehículo autónomo provoca un accidente — ¿culpa del usuario, del fabricante o del programador?",
  },
  {
    pill: "Datos",
    title: "Fuga de información",
    desc: "Los modelos de IA pueden filtrar datos sensibles entrenados sin control.",
    example: "Un chatbot revela información confidencial de empresas o usuarios por errores en su entrenamiento.",
  },
];

const TELEMED = [
  ["Diagnósticos correctos", "El médico debe actuar con cuidado y utilizar información confiable, aún cuando un sistema de IA apoye la decisión."],
  ["Protección de datos del paciente", "La información médica es confidencial y debe mantenerse segura en cada plataforma."],
  ["Consentimiento del paciente", "El paciente debe aceptar explícitamente recibir atención médica por medios electrónicos."],
  ["Herramientas tecnológicas seguras", "Las plataformas digitales deben proteger la privacidad y minimizar riesgos de error."],
];

function Derecho() {
  return (
    <section id="derecho" className="cf-section accent-navy">
      <div className="container">
        <span className="section-number left">X</span>
        <div className="section-head reveal">
          <div className="eyebrow navy"><span className="dot"></span> Derecho</div>
          <h2>Regulaciones, riesgos<br/>
            y <em className="serif">protección de datos.</em></h2>
          <p className="lead">
            México no cuenta todavía con una ley específica que regule la Inteligencia
            Artificial. Sin embargo, existen marcos legales que se aplican a su uso —
            especialmente en privacidad, derechos digitales y responsabilidad legal.
            Aquí mapeamos los principales.
          </p>
        </div>

        {/* Laws list */}
        <div className="reveal" style={{marginBottom: 80}}>
          <h3 style={{marginBottom: 18}}>Principales regulaciones aplicables a la IA</h3>
          <div className="law-list">
            {LAWS.map(l => (
              <div key={l.title} className="law-row">
                <div>
                  <h4>{l.title}</h4>
                  <div className="law-tag">{l.tag}</div>
                </div>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risks */}
        <div className="reveal" style={{marginBottom: 80}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18}}>
            <h3>Riesgos legales del uso de IA</h3>
            <span style={{fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)"}}>
              6 escenarios
            </span>
          </div>
          <div className="risk-grid">
            {RISKS.map(r => (
              <div key={r.title} className="risk">
                <span className="pill">{r.pill}</span>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
                <div className="ex"><b>Ejemplo</b>{r.example}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Protección de datos + ARCO */}
        <div className="reveal" style={{marginBottom: 80}}>
          <div className="two-col">
            <div>
              <div className="eyebrow gold" style={{marginBottom: 14}}><span className="dot"></span> Protección de datos</div>
              <h3 style={{fontSize: 28}}>Tu información personal<br/>está protegida por ley.</h3>
              <p style={{color: "var(--muted)", fontSize: 15.5, lineHeight: 1.7}}>
                La protección de datos es el conjunto de leyes y derechos que cuidan la
                información personal: nombre, dirección, teléfono, correo, fotografías,
                información médica y datos bancarios. La IA funciona analizando datos
                masivos — por eso, proteger la privacidad de los usuarios es fundamental.
              </p>
              <div style={{
                display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18,
              }}>
                {["Nombre", "Dirección", "Teléfono", "Correo", "Fotografías", "Información médica", "Datos bancarios"].map(d => (
                  <span key={d} style={{
                    fontSize: 12, fontFamily: "var(--font-mono)",
                    padding: "6px 12px", borderRadius: 999,
                    background: "var(--bg-elevated)", border: "1px solid var(--line)",
                    color: "var(--ink-2)",
                  }}>{d}</span>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "var(--muted)", marginBottom: 14,
              }}>Derechos ARCO</div>
              <div className="arco">
                {[
                  ["A", "Acceso"],
                  ["R", "Rectificación"],
                  ["C", "Cancelación"],
                  ["O", "Oposición"],
                ].map(([l, w]) => (
                  <div key={l} className="arco-item">
                    <div className="letter">{l}</div>
                    <div className="word">{w}</div>
                  </div>
                ))}
              </div>
              <p style={{color: "var(--muted)", fontSize: 14, marginTop: 18}}>
                Cada persona puede acceder a sus datos, pedir que se corrijan, solicitar
                su eliminación y oponerse a ciertos usos de su información.
              </p>
            </div>
          </div>
        </div>

        {/* Telemedicina */}
        <div className="reveal">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18}}>
            <h3>Responsabilidad legal en telemedicina e IA médica</h3>
            <span style={{fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)"}}>
              Caso de estudio
            </span>
          </div>
          <p style={{color: "var(--muted)", fontSize: 15.5, marginBottom: 28, maxWidth: "75ch"}}>
            Aunque el diagnóstico se realice por internet o con apoyo de IA, los médicos
            siguen siendo legalmente responsables de sus decisiones y tratamientos.
            Estas son sus obligaciones fundamentales:
          </p>

          <div className="feature-grid" style={{gridTemplateColumns: "repeat(2, 1fr)"}}>
            {TELEMED.map(([t, d], i) => (
              <div key={t} className="feature">
                <span className="tag">Obligación 0{i + 1}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section id="conclusion" className="cf-section">
      <div className="container">
        <div className="conclusion reveal">
          <div className="eyebrow"><span className="dot"></span> Conclusión general</div>
          <h2 style={{marginTop: 18}}>
            Derecho, IA y Negocios<br/>
            son inversiones <em className="serif" style={{color: "var(--gold-2)"}}>viables</em>.
          </h2>
          <p style={{marginTop: 24, position: "relative", zIndex: 2}}>
            Las tres carreras tendrán enorme importancia en una sociedad cada vez más
            tecnológica y globalizada. Cada una exige tiempo, dinero y preparación, pero
            todas ofrecen crecimiento laboral y estabilidad económica.
          </p>
          <p style={{position: "relative", zIndex: 2}}>
            <strong style={{color: "white"}}>Ingeniería en IA</strong> destaca por sus altos
            salarios y demanda tecnológica; <strong style={{color: "white"}}>Derecho</strong>{" "}
            seguirá siendo indispensable por la regulación, la justicia y los nuevos retos
            digitales; <strong style={{color: "white"}}>Negocios</strong> será clave para el
            crecimiento de empresas y emprendimientos. Elegir cualquiera de estas carreras
            puede ser rentable si la persona desarrolla habilidades, experiencia y capacidad
            de adaptarse a los cambios del futuro.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FUENTES (consolidadas al final) ---------- */
const SOURCES_APA = [
  "BBVA. (2024). Carreras del futuro relacionadas con tecnología. BBVA.",
  "Cámara de Diputados. (2010). Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Diario Oficial de la Federación.",
  "Castells, M. (2001). La era de la información. Siglo XXI Editores.",
  "DataPath. (2024). Carreras tecnológicas en México.",
  "Diario Oficial de la Federación. (s.f.). Normatividad mexicana sobre protección de datos personales.",
  "El Economista. (2024). Demanda laboral y sueldos en el sector tecnológico.",
  "El País México. (2024). Riesgos legales de la inteligencia artificial.",
  "Estudiantes México. (2024). Costos y becas de carreras universitarias.",
  "Harari, Y. N. (2018). 21 lecciones para el siglo XXI. Debate.",
  "IA México News. (2024). Tendencias del mercado laboral en inteligencia artificial.",
  "IBM. (2024). ¿Qué es la inteligencia artificial? IBM.",
  "Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI). (s.f.). Derechos ARCO.",
  "National Geographic. (2023). ¿Qué es la inteligencia artificial? National Geographic.",
  "Ordine, N. (2013). La utilidad de lo inútil. Acantilado.",
  "Publimetro México. (2024). Sueldos de profesionistas en tecnología.",
  "PwC México. (2024). El futuro del trabajo y la inteligencia artificial.",
  "Russell, S., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach. Pearson.",
  "Suprema Corte de Justicia de la Nación. (s.f.). Resoluciones sobre protección de datos personales.",
  "Universidad Nacional Autónoma de México (UNAM). (2023). Importancia de las humanidades.",
  "UNESCO. (2021). Recomendación sobre la ética de la inteligencia artificial. UNESCO.",
  "UNESCO. (2024). Inteligencia artificial y educación. UNESCO.",
];

function Fuentes() {
  return (
    <section id="fuentes" className="cf-section" style={{paddingTop: 60}}>
      <div className="container">
        <div className="section-head reveal" style={{marginBottom: 36}}>
          <div className="eyebrow"><span className="dot"></span> Bibliografía · Sistema APA</div>
          <h2 style={{fontSize: "clamp(28px, 3.4vw, 44px)"}}>
            Fuentes <em className="serif">consultadas.</em>
          </h2>
        </div>

        <div className="reveal" style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius-lg)",
          padding: 40,
          boxShadow: "var(--shadow-sm)",
        }}>
          <ol style={{
            listStyle: "none", padding: 0, margin: 0,
            display: "flex", flexDirection: "column",
            gap: 14,
          }}>
            {SOURCES_APA.map((s, i) => (
              <li key={i} style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr",
                gap: 16,
                paddingBottom: 14,
                borderBottom: i === SOURCES_APA.length - 1 ? "none" : "1px solid var(--line)",
                alignItems: "baseline",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  letterSpacing: "0.1em", color: "var(--gold)",
                }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{
                  color: "var(--ink-2)", fontSize: 15, lineHeight: 1.65,
                  // hanging indent for APA-style
                  paddingLeft: 28,
                  textIndent: "-28px",
                }}>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Derecho, Conclusion, Fuentes });
