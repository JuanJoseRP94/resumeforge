function EducationEditor({ items, onChange }) {
  const updateItem = (id, field, value) => {
    onChange(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addItem = () => {
    onChange([
      ...items,
      { id: `edu-${Date.now()}`, degree: "", institution: "", period: "" },
    ]);
  };

  const removeItem = (id) => {
    onChange(items.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="border border-slate-200 rounded-lg p-3 space-y-2 relative">
          <button
            onClick={() => removeItem(item.id)}
            className="absolute top-2 right-2 text-slate-400 hover:text-red-500 text-xs"
            title="Eliminar"
          >
            ✕
          </button>
          <input
            className="w-full rounded border border-slate-300 px-2 py-1.5 text-sm pr-5"
            placeholder="Título / formación"
            value={item.degree}
            onChange={(e) => updateItem(item.id, "degree", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              className="rounded border border-slate-300 px-2 py-1.5 text-sm"
              placeholder="Centro de estudios"
              value={item.institution}
              onChange={(e) => updateItem(item.id, "institution", e.target.value)}
            />
            <input
              className="rounded border border-slate-300 px-2 py-1.5 text-sm"
              placeholder="Periodo"
              value={item.period}
              onChange={(e) => updateItem(item.id, "period", e.target.value)}
            />
          </div>
        </div>
      ))}
      <button
        onClick={addItem}
        className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
      >
        + Añadir formación
      </button>
    </div>
  );
}

export default EducationEditor;