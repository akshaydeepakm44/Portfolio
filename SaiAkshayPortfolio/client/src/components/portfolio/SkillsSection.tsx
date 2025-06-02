import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { skills } = PORTFOLIO_DATA;

  const skillCategories = [
    { title: "Programming", skills: skills.programming, icon: "fas fa-code" },
    { title: "Machine Learning", skills: skills.machineLearning, icon: "fas fa-brain" },
    { title: "NLP & Speech Analytics", skills: skills.nlp, icon: "fas fa-microphone" },
    { title: "Tools & Platforms", skills: skills.tools, icon: "fas fa-tools" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                  <i className={`${category.icon} text-blue-600`}></i>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <i className={`${skill.icon} text-lg`} style={{
                        color: skill.icon.includes('python') ? '#3776ab' :
                               skill.icon.includes('js') ? '#f7df1e' :
                               skill.icon.includes('java') ? '#ed8b00' :
                               skill.icon.includes('react') ? '#61dafb' :
                               skill.icon.includes('node') ? '#339933' :
                               skill.icon.includes('git') ? '#f05032' :
                               skill.icon.includes('docker') ? '#2496ed' :
                               skill.icon.includes('aws') ? '#ff9900' :
                               skill.icon.includes('linux') ? '#000000' :
                               '#6366f1'
                      }}></i>
                      <span className="text-slate-700">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
