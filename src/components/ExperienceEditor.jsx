function ExperienceEditor({ items, onChange }) {
  const updateItem = (id, field, value) => {
    onChange(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addItem = () => {
    onChange([
      ...items,
      {
        id: `exp-${Date.now()}`,
        role: "",
        company: "",
        period: "",
        description: "",
      },
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
          <div className="grid grid-cols-2 gap-2 pr-5">
            <input
              className="rounded border border-slate-300 px-2 py-1.5 text-sm"
              placeholder="Puesto"
              value={item.role}
              onChange={(e) => updateItem(item.id, "role", e.target.value)}
            />
            <input
              className="rounded border border-slate-300 px-2 py-1.5 text-sm"
              placeholder="Empresa"
              value={item.company}
              onChange={(e) => updateItem(item.id, "company", e.target.value)}
            />
          </div>
          <input
            className="w-full rounded border border-slate-300 px-2 py-1.5 text-sm"
            placeholder="Periodo (ej: 2024 - Actualidad)"
            value={item.period}
            onChange={(e) => updateItem(item.id, "period", e.target.value)}
          />
          <textarea
            className="w-full rounded border border-slate-300 px-2 py-1.5 text-sm min-h-[60px] resize-none"
            placeholder="Descripción"
            value={item.description}
            onChange={(e) => updateItem(item.id, "description", e.target.value)}
          />
        </div>
      ))}
      <button
        onClick={addItem}
        className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
      >
        + Añadir experiencia
      </button>
    </div>
  );
}

export default ExperienceEditor;