export default function PersonalInfoForm({ personalInfo, onChange }) {
  const handleField = (field) => (e) => {
    onChange({ ...personalInfo, [field]: e.target.value });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-3">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
        Información personal
      </h2>

      <input
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Nombre completo"
        value={personalInfo.name}
        onChange={handleField("name")}
      />

      <input
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Título profesional"
        value={personalInfo.title}
        onChange={handleField("title")}
      />

      <div className="grid grid-cols-2 gap-3">
        <input
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Email"
          value={personalInfo.email}
          onChange={handleField("email")}
        />
        <input
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Teléfono"
          value={personalInfo.phone}
          onChange={handleField("phone")}
        />
      </div>

      <input
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Ubicación"
        value={personalInfo.location}
        onChange={handleField("location")}
      />

      <textarea
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[80px] resize-none"
        placeholder="Resumen profesional"
        value={personalInfo.summary}
        onChange={handleField("summary")}
      />
    </div>
  );
}