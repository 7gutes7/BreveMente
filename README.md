# BreveMente 🧠✨

**Plataforma de Salud Mental & Documentación Clínica Asistida por IA (Brifi)**

BreveMente está diseñada para transformar el flujo de trabajo de terapeutas y profesionales de la salud mental, especialmente enfocado en **Terapia Breve Estratégica (TBE)**. Con la asistencia de **Brifi**, el asistente inteligente de documentación clínica, los profesionales pueden centrarse plenamente en la atención humana y empática de sus pacientes mientras la plataforma automatiza el llenado y estructuración del expediente clínico.

---

## 📁 Estructura del Repositorio

```
BreveMente/
├── BreveMente - Guia de Uso (1).pdf   # Manual y guía de uso de la plataforma
├── Software BreveMente.pdf            # Especificación funcional y técnica
├── web/                               # Aplicación web / Landing page (Next.js 16 + React 19)
│   ├── src/
│   │   ├── app/                       # App Router (layout, page, estilos)
│   │   └── components/                # Componentes modulares (Hero, Brifi, Features, etc.)
│   ├── public/                        # Recursos estáticos
│   └── package.json                   # Dependencias y scripts
├── prototipo/                         # Prototipos funcionales y pruebas de concepto
│   └── brevemente-system/             # Sistema clínico interactivo completo (Vite + React 18 + TS)
│       ├── src/
│       │   ├── pages/                 # Expediente clínico, Campus, Agenda, Dashboard, etc.
│       │   ├── components/            # Asistente Senda/Brifi, Protocolos, Alertas de riesgo
│       │   └── services/              # Logs de auditoría, tours guiados, simulación de riesgo
│       └── package.json
└── README.md
```

---

## 🚀 Inicio Rápido

### 1. Landing Page (`web`)
Construida con **Next.js (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS**.
```bash
cd web
npm install
npm run dev
```

### 2. Prototipo del Sistema Clínico (`prototipo/brevemente-system`)
Prototipo interactivo completo con **Vite**, **React 18**, **TypeScript**, **Tailwind CSS**, **Recharts** y **Lucide React**.
```bash
cd prototipo/brevemente-system
npm install
npm run dev
```

---

## ✨ Características Principales

- **Brifi / Senda (Asistente Clínico con IA)**: Escucha activa y estructuración automática de sesiones terapéuticas en expedientes clínicos.
- **Expediente Clínico TBE**: Registro de sesiones, transcripción, formulación estratégica y tareas.
- **Campus & Supervisión**: Módulos formativos y supervisión de casos clínicos en equipo.
- **Analítica y Agenda**: Dashboard de métricas, evolución clínica de pacientes y control de citas.
- **Seguridad y Auditoría**: Trazabilidad de accesos y consentimiento informado.
