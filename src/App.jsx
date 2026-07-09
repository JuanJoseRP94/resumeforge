import { useState } from "react";
import { initialResume } from "./data/initialResume";
import { themes } from "./data/themes";
import PersonalInfoForm from "./components/PersonalInfoForm";
import SectionsEditor from "./components/SectionsEditor";
import ResumePreview from "./components/ResumePreview";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [resume, setResume] = useState(initialResume);
  const [theme, setTheme] = useState(themes[0]);

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

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-xl font-bold text-slate-900">📄 ResumeForge</h1>
        <p className="text-sm text-slate-500">
          Editor de currículum interactivo en tiempo real
        </p>
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
          <ResumePreview resume={resume} theme={theme} />
        </div>
      </main>
    </div>
  );
}

export default App;