import { motion } from "framer-motion";
import { themes } from "../data/themes";

export default function ThemeSwitcher({ selectedTheme, onSelect }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
        Tema visual
      </h2>
      <div className="flex gap-3 flex-wrap">
        {themes.map((theme) => {
          const isSelected = theme.id === selectedTheme.id;
          return (
            <button
              key={theme.id}
              onClick={() => onSelect(theme)}
              className="relative flex flex-col items-center gap-1.5 focus:outline-none"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: theme.accent,
                  boxShadow: isSelected
                    ? `0 0 0 3px white, 0 0 0 5px ${theme.accent}`
                    : "none",
                }}
              >
                {isSelected && (
                  <motion.span
                    layoutId="theme-check"
                    className="text-white text-sm"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.div>
              <span className="text-xs text-slate-500">{theme.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}