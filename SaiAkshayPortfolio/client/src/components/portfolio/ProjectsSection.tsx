import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Icon/Image */}
                <div className={`h-48 flex items-center justify-center ${
                  index === 0 
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-500' 
                    : 'bg-gradient-to-br from-emerald-500 to-green-400'
                }`}>
                  <div className="text-center text-white">
                    <i className={`${index === 0 ? 'fas fa-graduation-cap' : 'fas fa-heartbeat'} text-4xl mb-2`}></i>
                    <p className="text-sm opacity-80">
                      {index === 0 ? 'AI Education Platform' : 'Healthcare Analytics'}
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <i className={`${index === 0 ? 'fas fa-graduation-cap' : 'fas fa-heartbeat'} text-blue-600 text-xl`}></i>
                    <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          tech === 'Python' ? 'bg-blue-100 text-blue-800' :
                          tech === 'TensorFlow' ? 'bg-green-100 text-green-800' :
                          tech === 'React' ? 'bg-purple-100 text-purple-800' :
                          tech === 'Flask' ? 'bg-orange-100 text-orange-800' :
                          tech === 'NLP' ? 'bg-red-100 text-red-800' :
                          tech === 'Scikit-learn' ? 'bg-purple-100 text-purple-800' :
                          tech === 'MongoDB' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 border-blue-200 hover:border-blue-300"
                      asChild
                    >
                      <a href={project.liveUrl}>
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-slate-600 hover:text-slate-800"
                      asChild
                    >
                      <a href={project.githubUrl}>
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
