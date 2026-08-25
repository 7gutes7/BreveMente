import { Icon } from "./icons";

const trustPoints = [
  "Datos protegidos y consentimiento del paciente",
  "Método validado clínicamente",
  "IA entrenada en TBE",
];

function HeroMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-neural-tint via-conciencia-soft to-transparent opacity-70 blur-2xl"
      />

      <div className="rounded-3xl border border-border-soft bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-border-soft px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neural text-white">
              <Icon name="brain" className="h-4.5 w-4.5" strokeWidth={1.6} />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight text-ink">Expediente — TX Psicoterapia TBE</p>
              <p className="text-xs text-ink-muted">Sra. Rosa Espinosa · Folio 247890</p>
            </div>
          </div>
          <span className="hidden rounded-full bg-conciencia-soft px-3 py-1 text-xs font-semibold text-conciencia-deep sm:block">
            Sesión 1
          </span>
        </div>

        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between rounded-xl bg-digital px-4 py-3">
            <div className="flex items-center gap-2 text-xs font-medium text-ink-soft">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-conciencia-soft text-conciencia-deep">
                <Icon name="mic" className="h-3.5 w-3.5" />
              </span>
              Grabación en curso
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-conciencia-deep" />
            </div>
            <span className="text-xs font-semibold text-neural">03:06 min</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {["Percepción", "Pensamientos", "Sensaciones", "Reacciones"].map((f) => (
              <div key={f} className="rounded-lg border border-border-soft px-3 py-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">{f}</p>
                <p className="mt-0.5 h-2 w-3/4 rounded-full bg-neural-soft" />
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border-soft px-3 py-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">PX · F1 · F2</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {["Diario de abordo", "Bloquear TS", "WF 5×5 min"].map((c) => (
                <span key={c} className="rounded-full bg-conciencia-soft px-2.5 py-0.5 text-[11px] font-medium text-conciencia-deep">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-digital px-3 py-2.5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">Valoración del Cambio</p>
              <p className="text-xs font-semibold text-conciencia-deep">Mejoría significativa</p>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neural text-white">
              <Icon name="check" className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-border-soft bg-digital-bright px-5 py-3.5">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-neural px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neural-dark">
            <Icon name="sparkles" className="h-4 w-4" />
            Brifi rellena expediente
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft text-ink-soft transition-colors hover:bg-digital" aria-label="Regenerar">
            <Icon name="clock" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border-soft bg-white px-4 py-3 shadow-card sm:-left-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-conciencia-soft text-conciencia-deep">
          <Icon name="clock" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">Tiempo recuperado</p>
          <p className="text-lg font-bold text-neural">+45 min / día</p>
        </div>
      </div>

      <div className="absolute -right-2 -top-5 flex items-center gap-2 rounded-full border border-border-soft bg-white px-4 py-2 shadow-card sm:-right-6">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neural text-white">
          <Icon name="sparkles" className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-semibold text-neural">Brifi escucha, tú acompañas</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 lg:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(70%_60%_at_50%_0%,#e9eff6_0%,rgba(233,239,246,0)_70%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-8 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-4 py-1.5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-conciencia" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neural">
              Inteligencia Empática para la Salud
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-neural-deep sm:text-5xl lg:text-[3.4rem]">
            El futuro del diagnóstico es{" "}
            <span className="text-conciencia-dark">humano</span>, potenciado por IA.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            BreveMente asume la carga administrativa del expediente clínico.{" "}
            <strong className="font-semibold text-ink">Brifi</strong> escucha la sesión y
            documenta por ti, devolviéndote el tiempo invaluable para centrarte en lo que
            realmente importa: el cuidado directo y empático del paciente.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#plataforma"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neural px-7 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-neural-dark hover:shadow-card-hover"
            >
              Explorar la plataforma
              <Icon name="arrow-right" className="h-4.5 w-4.5" />
            </a>
            <a
              href="#brifi"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-neural-tint bg-white px-7 py-3.5 text-base font-semibold text-neural transition-all hover:border-conciencia hover:text-conciencia-deep"
            >
              <Icon name="play" className="h-4 w-4" />
              Ver demostración
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-2.5">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-ink-soft">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-conciencia-soft text-conciencia-deep">
                  <Icon name="check" className="h-3 w-3" strokeWidth={2.4} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-6">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
