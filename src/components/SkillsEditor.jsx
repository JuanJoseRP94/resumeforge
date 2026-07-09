import { useState } from "react";

function SkillsEditor({ items, onChange }) {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    const trimmed = newSkill.trim();
    if (!trimmed) return;
    onChange([...items, { id: `skill-${Date.now()}`, name: trimmed }]);
    setNewSkill("");
  };

  const removeSkill = (id) => {
    onChange(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        {items.map((item) => (
          <span
            key={item.id}
            className="bg-indigo-50 text-indigo-700 text-xs font-medium pl-3 pr-1.5 py-1 rounded-full flex items-center gap-1.5"
          >
            {item.name}
            <button
              onClick={() => removeSkill(item.id)}
              className="text-indigo-400 hover:text-red-500"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 rounded border border-slate-300 px-2 py-1.5 text-sm"
          placeholder="Nueva habilidad"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addSkill()}
        />
        <button
          onClick={addSkill}
          className="bg-indigo-600 text-white text-sm font-medium px-3 py-1.5 rounded hover:bg-indigo-700"
        >
          Añadir
        </button>
      </div>
    </div>
  );
}

export default SkillsEditor;