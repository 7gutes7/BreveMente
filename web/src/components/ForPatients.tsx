import { Icon, type IconName } from "./icons";

const features: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "target",
    title: "Medicina de precisión",
    description:
      "Evaluamos continuamente factores de riesgo clínicos para posibilitar intervenciones proactivas, antes de que las patologías evolucionen.",
  },
  {
    icon: "heart",
    title: "Interacción humanizada",
    description:
      "El profesional recupera el contacto visual y empático pleno durante la consulta: la tecnología permanece invisible.",
  },
  {
    icon: "shield",
    title: "Continuidad del cuidado",
    description:
      "Estrategias terapéuticas ajustadas al perfil, al historial longitudinal y a los determinantes sociales de la salud de cada paciente.",
  },
];

export function ForPatients() {
  return (
    <section id="pacientes" className="bg-digital py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-conciencia-dark">
            Para el paciente
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neural-deep sm:text-4xl">
            Cuidado profundamente humano, con tecnología invisible.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Cada interacción suma al bienestar integral. La IA trabaja en segundo plano para
            que el vínculo terapéutico sea el protagonista.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-border-soft bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-conciencia-soft text-conciencia-deep">
                <Icon name={f.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
