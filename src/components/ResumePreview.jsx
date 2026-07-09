import { motion, AnimatePresence } from "framer-motion";

export default function ResumePreview({ resume, theme }) {
  const { personalInfo, sections } = resume;

  return (
    <motion.div
      key={theme.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-xl rounded-xl p-10 w-full max-w-[720px] mx-auto min-h-[900px]"
      style={{ fontFamily: theme.body }}
    >
      <header
        className="pb-4 mb-6"
        style={{ borderBottom: `2px solid ${theme.accent}` }}
      >
        <h1
          className="text-3xl font-bold text-slate-900"
          style={{ fontFamily: theme.heading }}
        >
          {personalInfo.name || "Tu nombre"}
        </h1>
        <p className="font-medium mt-1" style={{ color: theme.accent }}>
          {personalInfo.title}
        </p>
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
        <AnimatePresence>
          {sections.map((section) => (
            <motion.section
              key={section.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: theme.accent, fontFamily: theme.heading }}
              >
                {section.title}
              </h2>

              {section.type === "experience" &&
                section.items.map((item) => (
                  <div key={item.id} className="mb-3">
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold text-slate-800">
                        {item.role}
                      </span>
                      <span className="text-xs text-slate-400">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-sm text-slate-500">
                      {item.company}
                    </div>
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
                      <span className="text-xs text-slate-400">
                        {item.period}
                      </span>
                    </div>
                    <div className="text-sm text-slate-500">
                      {item.institution}
                    </div>
                  </div>
                ))}

              {section.type === "skills" && (
                <div className="flex flex-wrap gap-2">
                  <AnimatePresence>
                    {section.items.map((item) => (
                      <motion.span
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: theme.accentSoft,
                          color: theme.accent,
                        }}
                      >
                        {item.name}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}