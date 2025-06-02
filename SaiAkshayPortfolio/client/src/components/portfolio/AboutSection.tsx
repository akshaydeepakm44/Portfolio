import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { education, softSkills } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Career Objective */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                <i className="fas fa-target text-blue-600"></i>
                Career Objective
              </h3>
              <p className="text-slate-600 leading-relaxed">
                As an aspiring software engineer with a deep passion for artificial intelligence and machine learning, 
                I aim to leverage cutting-edge technologies to create impactful solutions that address real-world challenges. 
                My goal is to contribute to innovative projects that bridge the gap between advanced AI research and practical 
                applications, particularly in areas that can benefit underserved communities and improve accessibility to technology.
              </p>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center gap-3">
                <i className="fas fa-graduation-cap text-blue-600"></i>
                Education
              </h3>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600/30"></div>
                
                {education.map((item, index) => (
                  <div key={index} className="relative pl-12 pb-8">
                    <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-slate-800">{item.degree}</h4>
                      <p className="text-blue-600 font-medium">{item.institution}</p>
                      <p className="text-slate-500 text-sm">{item.duration}</p>
                      <p className="text-slate-600 mt-2">{item.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center flex items-center justify-center gap-3">
              <i className="fas fa-users text-blue-600"></i>
              Soft Skills
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${skill.icon} text-blue-600 text-2xl`}></i>
                  </div>
                  <h4 className="font-semibold text-slate-800">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
