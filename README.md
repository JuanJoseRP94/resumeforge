# 📄 ResumeForge

Editor de currículums interactivo en tiempo real: escribe a la izquierda, ve el resultado renderizado al instante a la derecha. Reordena secciones con drag & drop, cambia de tema visual con una animación fluida, y descarga el resultado en PDF.

🔗 **[Ver demo en vivo](https://resumeforge26-46g4uaj8a-resume-forge1.vercel.app/)**

## ✨ Qué incluye

- **Edición en tiempo real**: cualquier cambio en el formulario se refleja al instante en la vista previa, sin recargar nada.
- **Reordenar secciones con drag & drop** (experiencia, educación, habilidades) — arrastra y suelta para cambiar el orden de tu CV.
- **4 temas visuales** intercambiables con transición animada (color de acento y tipografía).
- **Animaciones fluidas** con Framer Motion en la aparición/desaparición de habilidades y el reordenamiento de secciones.
- **Exportación a PDF** lista para enviar a una empresa.
- **Persistencia automática**: tu progreso se guarda solo en el navegador (localStorage), no se pierde al recargar.

## 🛠️ Stack técnico

- **React 19** + **Vite**
- **Tailwind CSS 4** para el diseño
- **Framer Motion** para las animaciones
- **@dnd-kit** para el drag & drop (accesible, ligero, mantenido activamente — sucesor de `react-beautiful-dnd`)
- **react-to-print** para la exportación a PDF
- Desplegado gratis en **Vercel**

## 🚀 Ejecutar en local

```bash
git clone https://github.com/JuanJoseRP94/resumeforge.git
cd resumeforge
npm install
npm run dev
```

Abre `http://localhost:5173`.

## 💡 Decisiones de diseño

- El currículum se modela como una **lista de secciones**, no como campos fijos — esto hace que el drag & drop sea trivial (reordenar secciones es simplemente reordenar un array) y permite añadir nuevos tipos de sección en el futuro sin rediseñar el estado.
- El estado vive centralizado en `App.jsx` y desciende por props — patrón estándar de React para mantener una única fuente de verdad.

## 📝 Licencia

MIT