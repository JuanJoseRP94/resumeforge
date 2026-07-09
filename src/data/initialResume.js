export const initialResume = {
  personalInfo: {
    name: "Juan José Romero",
    title: "Desarrollador Junior · Java · Python · React",
    email: "tu-email@ejemplo.com",
    phone: "+34 600 000 000",
    location: "España",
    summary:
      "Desarrollador junior con formación sólida en Java, Python y React. Experiencia práctica construyendo proyectos completos: APIs REST con autenticación, dashboards de análisis de datos con IA generativa, y aplicaciones web interactivas.",
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
            "API REST con Spring Boot, autenticación JWT, arquitectura en capas y tests unitarios.",
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
        { id: "skill-1", name: "Java" },
        { id: "skill-2", name: "Python" },
        { id: "skill-3", name: "React" },
        { id: "skill-4", name: "Spring Boot" },
        { id: "skill-5", name: "Análisis de datos" },
        { id: "skill-6", name: "IA generativa" },
      ],
    },
  ],
};