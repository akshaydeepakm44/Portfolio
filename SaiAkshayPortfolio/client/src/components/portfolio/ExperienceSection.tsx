import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { experience } = PORTFOLIO_DATA;

  const colors = ['bg-blue-600', 'bg-cyan-500', 'bg-purple-500', 'bg-orange-500'];

  return (
    <section id="experience" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600/30"></div>

            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-center mb-12"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-blue-600 font-medium mb-2">{item.company}</p>
                        <p className="text-slate-500 text-sm mb-3">{item.duration}</p>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${colors[index]} rounded-full border-4 border-white shadow-md z-10`}></div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${colors[index]} rounded-full border-4 border-white shadow-md z-10`}></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-blue-600 font-medium mb-2">{item.company}</p>
                        <p className="text-slate-500 text-sm mb-3">{item.duration}</p>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600/30"></div>
              
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-12 pb-8"
                >
                  <div className={`absolute left-2 w-4 h-4 ${colors[index]} rounded-full border-4 border-white shadow-md`}></div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{item.company}</p>
                    <p className="text-slate-500 text-sm mb-3">{item.duration}</p>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
