const stats = [
  { value: "+45 min", label: "recuperados por día", detail: "menos documentación fuera de consulta" },
  { value: "0 horas", label: "de «pajama time»", detail: "adiós al trabajo administrativo nocturno" },
  { value: "1 clic", label: "para llenar el expediente", detail: "Brifi rellena tras grabar la sesión" },
  { value: "32", label: "protocolos TBE", detail: "según DX.OP y SPR del paciente" },
];

export function TrustBar() {
  return (
    <section aria-label="Cifras clave" className="border-y border-border-soft bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 py-10 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.value} className="px-2 py-3 text-center lg:py-2">
            <p className="text-3xl font-bold tracking-tight text-neural lg:text-4xl">{s.value}</p>
            <p className="mt-1.5 text-sm font-semibold text-ink">{s.label}</p>
            <p className="mx-auto mt-1 max-w-[220px] text-xs leading-relaxed text-ink-muted">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
