# BreveMente 🧠✨

**Plataforma de Salud Mental & Documentación Clínica Asistida por IA (Brifi)**

BreveMente está diseñada para transformar el flujo de trabajo de terapeutas y profesionales de la salud mental, especialmente enfocado en **Terapia Breve Estratégica (TBE)**. Con la asistencia de **Brifi**, el asistente inteligente de documentación clínica, los profesionales pueden centrarse plenamente en la atención humana y empática de sus pacientes mientras la plataforma automatiza el llenado y estructuración del expediente clínico.

---

## 📁 Estructura del Repositorio

```
BreveMente/
├── BreveMente - Guia de Uso (1).pdf   # Manual y guía de uso de la plataforma
├── Software BreveMente.pdf            # Especificación funcional y técnica
├── web/                               # Aplicación web / Landing page (Next.js)
│   ├── src/
│   │   ├── app/                       # App Router (layout, page, estilos)
│   │   └── components/                # Componentes modulares (Hero, Brifi, Features, etc.)
│   ├── public/                        # Recursos estáticos
│   └── package.json                   # Dependencias y scripts
└── README.md
```

---

## 🚀 Inicio Rápido (Web)

La aplicación web está construida con **Next.js (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS**.

### Prerrequisitos
- Node.js >= 18
- npm / yarn / pnpm

### Instalación y Ejecución

1. Entra al directorio `web`:
   ```bash
   cd web
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## ✨ Características Principales

- **Brifi (Asistente Clínico con IA)**: Escucha activa y estructuración automática de sesiones terapéuticas en expedientes clínicos.
- **Enfoque TBE**: Plantillas y lógica adaptadas a Terapia Breve Estratégica (percepción, reactividad, intentos de solución, tareas).
- **Seguridad y Privacidad**: Cumplimiento y buenas prácticas en gestión de datos sensibles de pacientes.
- **Interfaz Moderna**: Experiencia de usuario ágil, estética y optimizada para la práctica diaria en consultorio.
