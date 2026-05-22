/* eslint-disable */
/* Contabilidad — análisis financiero de la carrera de IA */

function Contabilidad() {
  return (
    <section id="contabilidad" className="cf-section accent-green">
      <div className="container">
        <span className="section-number left">V</span>
        <div className="section-head reveal">
          <div className="eyebrow green"><span className="dot"></span> Contabilidad</div>
          <h2>El costo y la rentabilidad<br/>
            de estudiar <em className="serif">Ing. en IA.</em></h2>
          <p className="lead">
            Estudiar Ingeniería en IA exige una inversión alta: equipo potente,
            colegiaturas, software y certificaciones constantes. A cambio, los
            salarios y la demanda laboral permiten recuperar la inversión en
            pocos años. A continuación, el desglose financiero completo.
          </p>
        </div>

        {/* Inversión total */}
        <div className="reveal" style={{marginBottom: 64}}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: 18,
          }}>
            <h3>Inversión total de la carrera</h3>
            <span style={{fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)"}}>
              Análisis costo-beneficio
            </span>
          </div>

          <div className="fin-grid">
            <div className="stat">
              <div className="label">Colegiatura</div>
              <div className="value"><span className="currency">$</span>80–450k</div>
              <div className="sub">MXN · carrera completa</div>
            </div>
            <div className="stat">
              <div className="label">Laptop y equipo</div>
              <div className="value"><span className="currency">$</span>20–40k</div>
              <div className="sub">MXN · una sola vez</div>
            </div>
            <div className="stat">
              <div className="label">Certificaciones</div>
              <div className="value"><span className="currency">$</span>10–30k</div>
              <div className="sub">MXN · acumulado</div>
            </div>
            <div className="stat accent-gold">
              <div className="label">Total aproximado</div>
              <div className="value"><span className="currency">$</span>140–570k</div>
              <div className="sub">MXN · toda la carrera</div>
            </div>
          </div>
        </div>

        {/* Sueldo + ROI */}
        <div className="two-col reveal" style={{marginBottom: 64}}>
          <div>
            <h3 style={{marginBottom: 18}}>Sueldo esperado</h3>
            <table className="table-pro">
              <thead>
                <tr><th>Etapa</th><th style={{textAlign:"right"}}>Sueldo mensual (MXN)</th></tr>
              </thead>
              <tbody>
                <tr><td>Recién egresado</td><td className="num">$18,000 – $30,000</td></tr>
                <tr><td>Promedio del sector</td><td className="num">$35,000 – $60,000</td></tr>
                <tr><td>Especialista senior</td><td className="num">hasta $120,000</td></tr>
                <tr className="total"><td>Recuperación de inversión</td><td className="num">~ 2 a 3 años</td></tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 style={{marginBottom: 18}}>¿Por qué es rentable?</h3>
            <p style={{color: "var(--muted)", fontSize: 15.5, lineHeight: 1.7}}>
              La IA se usa hoy en bancos, hospitales, redes sociales, e-commerce y
              gobierno. Esa demanda no para de crecer. Aunque la inversión inicial
              es alta, los salarios la recuperan en pocos años — sobre todo si la
              persona suma experiencia y certificaciones.
            </p>
            <div className="stat accent-navy" style={{marginTop: 16}}>
              <div className="label">Demanda laboral</div>
              <div className="value" style={{fontSize: 28}}>Muy alta · creciente</div>
              <div className="sub">Las empresas están automatizando procesos masivamente.</div>
            </div>
          </div>
        </div>

        {/* Presupuesto */}
        <div className="reveal" style={{marginBottom: 64}}>
          <h3 style={{marginBottom: 18}}>Presupuesto de formación profesional</h3>
          <div className="two-col">
            <div>
              <table className="table-pro">
                <thead>
                  <tr><th>Concepto mensual</th><th style={{textAlign: "right"}}>MXN</th></tr>
                </thead>
                <tbody>
                  <tr><td>Internet y software</td><td className="num">$1,500</td></tr>
                  <tr><td>Transporte</td><td className="num">$1,500</td></tr>
                  <tr><td>Cursos y plataformas</td><td className="num">$1,200</td></tr>
                  <tr><td>Materiales</td><td className="num">$800</td></tr>
                  <tr className="total"><td>Total mensual</td><td className="num">$5,000</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="table-pro">
                <thead>
                  <tr><th>Concepto anual</th><th style={{textAlign: "right"}}>MXN</th></tr>
                </thead>
                <tbody>
                  <tr><td>Colegiatura</td><td className="num">$60,000</td></tr>
                  <tr><td>Internet y software</td><td className="num">$18,000</td></tr>
                  <tr><td>Cursos y certificaciones</td><td className="num">$20,000</td></tr>
                  <tr><td>Transporte y materiales</td><td className="num">$22,000</td></tr>
                  <tr className="total"><td>Total anual</td><td className="num">$120,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Proyección financiera personal */}
        <div className="reveal" style={{marginBottom: 64}}>
          <h3 style={{marginBottom: 18}}>Proyección financiera personal</h3>
          <p style={{color: "var(--muted)", fontSize: 15, marginBottom: 22, maxWidth: "70ch"}}>
            Supongamos una persona que invierte ~$300,000 MXN en toda la carrera
            y comienza ganando $25,000 MXN mensuales. Así se vería su flujo:
          </p>
          <div className="fin-grid">
            <div className="stat accent-navy">
              <div className="label">Inversión total</div>
              <div className="value"><span className="currency">$</span>300,000</div>
              <div className="sub">MXN · carrera completa</div>
            </div>
            <div className="stat">
              <div className="label">Sueldo mensual</div>
              <div className="value"><span className="currency">$</span>25,000</div>
              <div className="sub">MXN · sueldo inicial</div>
            </div>
            <div className="stat">
              <div className="label">Gastos personales</div>
              <div className="value"><span className="currency">$</span>12,000</div>
              <div className="sub">MXN · mensuales</div>
            </div>
            <div className="stat accent-green">
              <div className="label">Ahorro mensual</div>
              <div className="value"><span className="currency">$</span>13,000</div>
              <div className="sub">MXN · libres para invertir</div>
            </div>
          </div>
        </div>

        {/* Empleo formal vs informal */}
        <div className="reveal">
          <h3 style={{marginBottom: 18}}>Empleo formal vs informal en IA</h3>
          <div className="emp-grid">
            <div className="emp">
              <div className="emp-label">Formal</div>
              <ul>
                <li>Seguro y prestaciones</li>
                <li>Estabilidad económica</li>
                <li className="con">Horarios más estrictos</li>
              </ul>
            </div>
            <div className="emp">
              <div className="emp-label">Remoto</div>
              <ul>
                <li>Flexibilidad de horario</li>
                <li>Empleo internacional</li>
                <li className="con">Menos convivencia laboral</li>
              </ul>
            </div>
            <div className="emp">
              <div className="emp-label">Emprendimiento</div>
              <ul>
                <li>Ingresos potencialmente altos</li>
                <li>Autonomía total</li>
                <li className="con">Riesgo financiero real</li>
              </ul>
            </div>
            <div className="emp">
              <div className="emp-label">Informal</div>
              <ul>
                <li>Dinero rápido al inicio</li>
                <li className="con">Sin prestaciones</li>
                <li className="con">Sin estabilidad</li>
              </ul>
            </div>
          </div>
          <p style={{color: "var(--muted)", fontSize: 14, marginTop: 18, maxWidth: "75ch"}}>
            En Ing. en IA el trabajo remoto es muy común: muchas empresas internacionales
            contratan en línea. El empleo formal brinda estabilidad; el emprendimiento
            puede generar más dinero, pero implica riesgo económico.
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Contabilidad });
