export default function ResumePreview({ resume }) {
  const { personalInfo, sections } = resume;

  return (
    <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-[720px] mx-auto min-h-[900px]">
      <header className="border-b-2 border-indigo-500 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {personalInfo.name || "Tu nombre"}
        </h1>
        <p className="text-indigo-600 font-medium mt-1">{personalInfo.title}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 mt-3">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
        {personalInfo.summary && (
          <p className="text-sm text-slate-600 mt-4 leading-relaxed">
            {personalInfo.summary}
          </p>
        )}
      </header>

      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.id}>
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">
              {section.title}
            </h2>

            {section.type === "experience" &&
              section.items.map((item) => (
                <div key={item.id} className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-slate-800">
                      {item.role}
                    </span>
                    <span className="text-xs text-slate-400">{item.period}</span>
                  </div>
                  <div className="text-sm text-slate-500">{item.company}</div>
                  <p className="text-sm text-slate-600 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}

            {section.type === "education" &&
              section.items.map((item) => (
                <div key={item.id} className="mb-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-slate-800">
                      {item.degree}
                    </span>
                    <span className="text-xs text-slate-400">{item.period}</span>
                  </div>
                  <div className="text-sm text-slate-500">
                    {item.institution}
                  </div>
                </div>
              ))}

            {section.type === "skills" && (
              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item.id}
                    className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}