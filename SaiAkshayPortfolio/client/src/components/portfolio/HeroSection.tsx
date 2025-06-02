import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/constants';

export default function HeroSection() {
  const { personalInfo } = PORTFOLIO_DATA;

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-600">SAM</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-slate-800 mb-4"
          >
            {personalInfo.firstName}
            <br />
            <span className="text-blue-600">{personalInfo.lastName}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>{personalInfo.phone}</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6 mb-8"
          >
            <a
              href={personalInfo.linkedin}
              className="w-12 h-12 bg-white hover:bg-blue-600 hover:text-white text-blue-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href={personalInfo.github}
              className="w-12 h-12 bg-white hover:bg-slate-800 hover:text-white text-slate-800 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-blue-600" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
