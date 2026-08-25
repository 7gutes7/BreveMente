import { Icon } from "./icons";

const columns = [
  {
    title: "Plataforma",
    links: ["Expediente clínico", "Brifi con IA", "Biblioteca digital", "Reportes y constancias", "Bitácora de supervisión"],
  },
  {
    title: "Recursos",
    links: ["Manuales TBE", "Protocolos TBE", "CIE-11", "DSM-5-TR"],
  },
  {
    title: "Empresa",
    links: ["Privacidad", "Términos", "Ética IA", "Soporte"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-digital-bright">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neural text-white">
                <Icon name="brain" className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="text-xl font-semibold tracking-tight text-neural">
                Breve<span className="text-conciencia-dark">Mente</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Inteligencia Empática para la Salud. La plataforma de IA que devuelve el tiempo
              al cuidado directo del paciente.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#inicio"
                      className="text-sm text-ink-soft transition-colors hover:text-neural"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-soft pt-8 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © 2026 BreveMente. Inteligencia Empática para la Salud.
          </p>
          <p className="text-xs text-ink-muted">
            Hecho con cuidado para clínicos y sus pacientes.
          </p>
        </div>
      </div>
    </footer>
  );
}
