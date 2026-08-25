"use client";

import dynamic from "next/dynamic";

const PrototypeApp = dynamic(() => import("@/prototype-system/App"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-screen items-center justify-center bg-[#f4f4f4]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#304768] border-t-[#75afbc]" />
        <p className="text-sm font-semibold text-[#304768]">Cargando sistema clínico BreveMente...</p>
      </div>
    </div>
  ),
});

export default function PrototipoPage() {
  return (
    <main className="min-h-screen">
      <PrototypeApp />
    </main>
  );
}
