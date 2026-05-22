/* eslint-disable */
/* Main app: nav + hero + integrantes + intro + topic cards */

const { useState, useEffect, useRef, useMemo } = React;

const SECTIONS = [
{ id: "inicio", label: "Inicio" },
{ id: "intro", label: "Introducción" },
{ id: "psicologia", label: "Psicología" },
{ id: "calculo", label: "Cálculo" },
{ id: "contabilidad", label: "Contabilidad" },
{ id: "business", label: "Business" },
{ id: "cambridge", label: "Cambridge" },
{ id: "speaking", label: "Speaking" },
{ id: "literature", label: "Literature" },
{ id: "derecho", label: "Derecho" },
{ id: "historia", label: "Historia" },
{ id: "ecologia", label: "Ecología" },
{ id: "conclusion", label: "Conclusión" }];


const INTEGRANTES = [
{ name: "Elina Canchola", role: "Investigación" },
{ name: "Fernanda Martínez", role: "Diseño y contenido" },
{ name: "Renata Guillén", role: "Análisis" },
{ name: "Luisa Fernanda Vives", role: "Redacción" },
{ name: "Gabriel Fernández", role: "Investigación" },
{ name: "Román Martínez", role: "Coordinación" }];


const initials = (name) =>
name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

function Nav() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = "inicio";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#inicio" className="nav-brand">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>Carreras del Futuro</span>
        </a>
        <div className="nav-links">
          {SECTIONS.slice(1).map((s) =>
          <a key={s.id}
          href={`#${s.id}`}
          className={active === s.id ? "active" : ""}>{s.label}</a>
          )}
        </div>
      </div>
    </nav>);

}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <div className="eyebrow"><span className="dot"></span> Proyecto Transversal · 2026</div>
            <h1 style={{ marginTop: 18 }}>
              Carreras del <span className="accent">Futuro</span>.
            </h1>
            <p className="lead">
              Un proyecto que conecta <em className="serif">tecnología, sociedad,
              economía, derecho y pensamiento crítico</em> para entender los
              trabajos que transformarán las próximas décadas — desde la
              Inteligencia Artificial hasta el Derecho y los Negocios.
            </p>
            <div className="hero-meta">
              <div>Materias<span>10 integradas</span></div>
              <div>Carreras<span>3 analizadas</span></div>
              <div>Equipo<span>6 integrantes</span></div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="hero-visual">
              <div>
                <div className="badge-row">
                  <span className="badge">DERECHO</span>
                  <span className="badge">ING · IA</span>
                  <span className="badge">NEGOCIOS</span>
                </div>
              </div>
              <h3 className="viz-title">
                Tres disciplinas.<br />
                Un futuro<br />
                <em>compartido.</em>
              </h3>
              <div className="signal" aria-hidden="true">
                {[0.35, 0.7, 0.5, 0.9, 0.4, 0.65, 0.3, 0.85, 0.55, 0.7, 0.4, 0.6, 0.3, 0.5, 0.75].map((v, i) =>
                <i key={i} style={{ height: `${v * 100}%`, animationDelay: `${i * 0.12}s` }}></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function Intro() {
  return (
    <section id="intro" className="cf-section accent-gold">
      <div className="container">
        <span className="section-number left">II</span>
        <div className="section-head reveal">
          <div className="eyebrow gold"><span className="dot"></span> Introducción</div>
          <h2>El mundo del trabajo<br />
            <em className="serif">está cambiando.</em></h2>
          <p className="lead">
            En los próximos años, las carreras de Derecho, Ingeniería en Inteligencia
            Artificial y Negocios evolucionarán por tres fuerzas: avances tecnológicos,
            cambios sociales e innovación global. Esta presentación explora cómo esas
            transformaciones cambiarán el futuro de cada profesión y su impacto en la
            sociedad — conectándolo con las materias que cursamos este semestre.
          </p>
        </div>

        <div className="topics-grid">
          <a href="#derecho" className="topic law reveal">
            <span className="glyph"></span>
            <div>
              <div className="num">01 / Carrera</div>
              <h3>Derecho</h3>
              <p>Privacidad, datos personales, telemedicina, regulación de IA y nuevos riesgos legales del entorno digital.</p>
            </div>
            <div className="arrow">Ver sección →</div>
          </a>

          <a href="#contabilidad" className="topic ai reveal reveal-delay-1">
            <span className="glyph"></span>
            <div>
              <div className="num">02 / Carrera</div>
              <h3>Ingeniería<br />en IA</h3>
              <p>Sistemas inteligentes, automatización y la profesión más demandada de la próxima década.</p>
            </div>
            <div className="arrow">Ver sección →</div>
          </a>

          <a href="#contabilidad" className="topic biz reveal reveal-delay-2">
            <span className="glyph"></span>
            <div>
              <div className="num">03 / Carrera</div>
              <h3>Negocios</h3>
              <p>Emprendimiento, economía digital y la gestión de empresas en un mundo cada vez más conectado.</p>
            </div>
            <div className="arrow">Ver sección →</div>
          </a>
        </div>

        {/* Imágenes principales — 3 slots for the carreras */}
        <div className="reveal" style={{ marginTop: 56 }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: 16
          }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--muted)"
            }}>Imágenes principales</span>
            <span style={{ fontSize: 12, color: "var(--muted-2)" }}>Arrastra o haz clic para subir</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <image-slot id="img-derecho" shape="rounded" radius="18"
            placeholder="Derecho"
            style={{ display: "block", width: "100%", aspectRatio: "3 / 4", background: "var(--bg-elevated)", border: "1px solid var(--line)" }}></image-slot>
            <image-slot id="img-ia" shape="rounded" radius="18"
            placeholder="Ingeniería en IA"
            style={{ display: "block", width: "100%", aspectRatio: "3 / 4", background: "var(--bg-elevated)", border: "1px solid var(--line)" }}></image-slot>
            <image-slot id="img-negocios" shape="rounded" radius="18"
            placeholder="Negocios"
            style={{ display: "block", width: "100%", aspectRatio: "3 / 4", background: "var(--bg-elevated)", border: "1px solid var(--line)" }}></image-slot>
          </div>
        </div>
      </div>
    </section>);

}

function Integrantes() {
  return (
    <section className="cf-section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: 36 }}>
          <div className="eyebrow navy"><span className="dot"></span> Equipo</div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}>Integrantes del proyecto</h2>
        </div>
        <div className="team-grid">
          {INTEGRANTES.map((m, i) =>
          <div key={m.name} className={`member reveal reveal-delay-${i % 3 + 1}`}>
              <div className="avatar">{initials(m.name)}</div>
              <div>
                <div className="name">{m.name}</div>
                <div className="role">{m.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* Scroll reveal observer */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Integrantes />
      <Intro />
      <Psicologia />
      <Calculo />
      <Contabilidad />
      <Business />
      <Cambridge />
      <Speaking />
      <Literature />
      <Derecho />
      <Historia />
      <Ecologia />
      <Conclusion />
      <Fuentes />
      <Footer />
    </>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>© 2026 · Proyecto Transversal · Carreras del Futuro</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted-2)" }}>
          Derecho · Ingeniería IA · Negocios
        </div>
      </div>
    </footer>);

}

Object.assign(window, { App });