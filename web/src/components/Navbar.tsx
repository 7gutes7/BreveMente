"use client";

import { useState } from "react";
import { Icon } from "./icons";

const links = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#profesionales", label: "Profesionales" },
  { href: "#brifi", label: "Brifi" },
  { href: "#pacientes", label: "Pacientes" },
  { href: "#funciona", label: "Cómo funciona" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-digital-bright/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="BreveMente inicio">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-neural text-white">
            <Icon name="brain" className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <span className="text-xl font-semibold tracking-tight text-neural">
            Breve<span className="text-conciencia-dark">Mente</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-neural"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contacto"
            className="text-sm font-semibold text-neural transition-colors hover:text-neural-dark"
          >
            Acceso
          </a>
          <a
            href="#contacto"
            className="rounded-lg bg-neural px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neural-dark"
          >
            Agenda una demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-digital lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border-soft bg-digital-bright px-5 pb-6 pt-2 lg:hidden"
          aria-label="Móvil"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-digital hover:text-neural"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-neural px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Agenda una demo
          </a>
        </nav>
      )}
    </header>
  );
}
