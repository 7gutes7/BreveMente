import type { Metadata } from "next";
import { Inclusive_Sans } from "next/font/google";
import "./globals.css";

const inclusive = Inclusive_Sans({
  variable: "--font-inclusive",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BreveMente — Inteligencia Empática para la Salud",
  description:
    "BreveMente es la plataforma clínica con IA para profesionales de la salud mental. Brifi escucha la sesión y rellena el expediente por ti, devolviéndote el tiempo para lo que importa: cuidar a tu paciente.",
  keywords: [
    "BreveMente",
    "salud mental",
    "IA clínica",
    "expediente clínico",
    "terapia breve estratégica",
    "psiquiatras",
    "psicólogos",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inclusive.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-digital font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
