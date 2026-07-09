import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ExperienceEditor from "./ExperienceEditor";
import EducationEditor from "./EducationEditor";
import SkillsEditor from "./SkillsEditor";

function SortableSection({ section, onUpdateItems }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        {/* El "asa" de arrastre: solo esta zona activa el drag, así los
            inputs de dentro siguen siendo clicables con normalidad. */}
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-600 touch-none"
          title="Arrastrar para reordenar"
        >
          ⠿
        </button>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
          {section.title}
        </h2>
      </div>

      {section.type === "experience" && (
        <ExperienceEditor
          items={section.items}
          onChange={(items) => onUpdateItems(section.id, items)}
        />
      )}
      {section.type === "education" && (
        <EducationEditor
          items={section.items}
          onChange={(items) => onUpdateItems(section.id, items)}
        />
      )}
      {section.type === "skills" && (
        <SkillsEditor
          items={section.items}
          onChange={(items) => onUpdateItems(section.id, items)}
        />
      )}
    </div>
  );
}

export default SortableSection;