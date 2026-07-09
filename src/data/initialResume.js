export const initialResume = {
  personalInfo: {
    name: "Tu nombre completo",
    title: "Tu título profesional ( Desarrollador web, Diseñador gráfico, etc. )",
    email: "email@ejemplo.com",
    phone: "+34 600 000 000",
    location: "Ciudad, País",
    summary:
      "Breve resumen profesional. Describe tus habilidades, experiencia y objetivos de carrera en unas pocas líneas.",
  },
  sections: [
    {
      id: "experience",
      type: "experience",
      title: "Experiencia",
      items: [
        {
          id: "exp-1",
          role: "Proyecto personal",
          company: "JobTrackr API",
          period: "2026",
          description:
            "Descripción de la experiencia laboral o proyecto personal. Puedes detallar tus responsabilidades, logros y tecnologías utilizadas.",
        },
      ],
    },
    {
      id: "education",
      type: "education",
      title: "Educación",
      items: [
        {
          id: "edu-1",
          degree: "Título / formación",
          institution: "Centro de estudios",
          period: "Año - Año",
        },
      ],
    },
    {
      id: "skills",
      type: "skills",
      title: "Habilidades",
      items: [
        { id: "skill-1", name: "Habilidad 1" },
        { id: "skill-2", name: "Habilidad 2" },
        { id: "skill-3", name: "Habilidad 3" },
        { id: "skill-4", name: "Habilidad 4" },
        { id: "skill-5", name: "Habilidad 5" },
        { id: "skill-6", name: "Habilidad 6" },
      ],
    },
  ],
};