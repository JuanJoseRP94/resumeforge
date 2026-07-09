import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { initialResume } from "./data/initialResume";
import { themes } from "./data/themes";
import PersonalInfoForm from "./components/PersonalInfoForm";
import SectionsEditor from "./components/SectionsEditor";
import ResumePreview from "./components/ResumePreview";
import ThemeSwitcher from "./components/ThemeSwitcher";

const STORAGE_KEY = "resumeforge-data";
const THEME_KEY = "resumeforge-theme";

function loadInitialResume() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialResume;
  } catch {
    return initialResume;
  }
}

function loadInitialTheme() {
  try {
    const savedId = localStorage.getItem(THEME_KEY);
    return themes.find((t) => t.id === savedId) || themes[0];
  } catch {
    return themes[0];
  }
}

function App() {
  const [resume, setResume] = useState(loadInitialResume);
  const [theme, setTheme] = useState(loadInitialTheme);
  const previewRef = useRef(null);

  // Guardado automático: cada vez que el currículum o el tema cambian,
  // los persistimos en localStorage. Así el trabajo no se pierde al
  // recargar la página o cerrar la pestaña.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
  }, [resume]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme.id);
  }, [theme]);

  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `CV-${resume.personalInfo.name || "curriculum"}`,
  });

  const updatePersonalInfo = (personalInfo) => {
    setResume((prev) => ({ ...prev, personalInfo }));
  };

  const reorderSections = (sections) => {
    setResume((prev) => ({ ...prev, sections }));
  };

  const updateSectionItems = (sectionId, items) => {
    setResume((prev) => ({
      ...prev,
      sections: prev.sections.map((s) =>
        s.id === sectionId ? { ...s, items } : s
      ),
    }));
  };

  const handleReset = () => {
    if (!confirm("¿Restablecer el currículum a los datos de ejemplo? Se perderán los cambios actuales.")) {
      return;
    }
    setResume(initialResume);
    setTheme(themes[0]);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">📄 ResumeForge</h1>
          <p className="text-sm text-slate-500">
            Editor de currículum interactivo en tiempo real
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="text-sm text-slate-500 hover:text-slate-700 px-3 py-2"
          >
            Restablecer
          </button>
          <button
            onClick={handlePrint}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            ⬇ Descargar PDF
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
        <div className="space-y-4">
          <ThemeSwitcher selectedTheme={theme} onSelect={setTheme} />
          <PersonalInfoForm
            personalInfo={resume.personalInfo}
            onChange={updatePersonalInfo}
          />
          <SectionsEditor
            sections={resume.sections}
            onReorder={reorderSections}
            onUpdateItems={updateSectionItems}
          />
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <div ref={previewRef}>
            <ResumePreview resume={resume} theme={theme} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;