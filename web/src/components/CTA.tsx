import { Icon } from "./icons";

export function CTA() {
  return (
    <section id="contacto" className="bg-digital py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-neural-deep via-neural to-conciencia-deep px-7 py-16 text-center shadow-card-hover sm:px-14 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-conciencia/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-neural-tint/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-conciencia">
              Únete a la nueva era clínica
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Vivir mejor, <span className="italic text-conciencia">cuidar mejor.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Agenda una demostración y descubre cuánto tiempo puedes devolverle a tu consulta
              — y a tu vida.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-neural-deep shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                Agenda una demo
                <Icon name="arrow-right" className="h-4.5 w-4.5" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
