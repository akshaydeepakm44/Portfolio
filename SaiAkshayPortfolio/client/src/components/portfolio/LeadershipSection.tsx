import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function LeadershipSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { leadership } = PORTFOLIO_DATA;

  const icons = ['fas fa-crown', 'fas fa-users', 'fas fa-microphone'];
  const colors = ['from-blue-600 to-blue-500', 'from-cyan-500 to-emerald-500', 'from-purple-500 to-purple-600'];

  return (
    <section id="leadership" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Leadership & Mentorship</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className={`bg-gradient-to-br ${colors[index]} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${icons[index]} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{role.title}</h3>
                <p className={`font-medium mb-4 ${
                  index === 0 ? 'text-blue-600' :
                  index === 1 ? 'text-cyan-500' :
                  'text-purple-600'
                }`}>
                  {role.organization}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
