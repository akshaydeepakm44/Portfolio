import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { achievements, certifications } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Achievements & Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Speech Contest Achievements */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center flex items-center justify-center gap-3">
              <i className="fas fa-trophy text-yellow-500"></i>
              Competition Awards
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${
                      index === 0 ? 'fas fa-medal' :
                      index === 1 ? 'fas fa-award' :
                      'fas fa-star'
                    } text-yellow-600 text-2xl`}></i>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{award.title}</h4>
                  <p className="text-yellow-600 font-medium mb-1">{award.organization}</p>
                  <p className="text-slate-500 text-sm">{award.year}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center flex items-center justify-center gap-3">
              <i className="fas fa-certificate text-blue-600"></i>
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    cert.issuer === 'Microsoft' ? 'bg-blue-100' :
                    cert.issuer === 'IIIT Hyderabad' ? 'bg-purple-100' :
                    cert.issuer === 'Edyst' ? 'bg-yellow-100' :
                    'bg-green-100'
                  }`}>
                    <i className={`${
                      cert.issuer === 'Microsoft' ? 'fab fa-microsoft text-blue-600' :
                      cert.issuer === 'IIIT Hyderabad' ? 'fas fa-brain text-purple-600' :
                      cert.issuer === 'Edyst' ? 'fab fa-python text-yellow-600' :
                      'fas fa-language text-green-600'
                    } text-2xl`}></i>
                  </div>
                  <h4 className="font-medium text-slate-800 mb-2">{cert.title}</h4>
                  <p className={`text-sm font-medium mb-1 ${
                    cert.issuer === 'Microsoft' ? 'text-blue-600' :
                    cert.issuer === 'IIIT Hyderabad' ? 'text-purple-600' :
                    cert.issuer === 'Edyst' ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {cert.issuer}
                  </p>
                  <p className="text-slate-500 text-xs">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
