import { useEffect } from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import LeadershipSection from '@/components/portfolio/LeadershipSection';
import AchievementsSection from '@/components/portfolio/AchievementsSection';
import ContactSection from '@/components/portfolio/ContactSection';

export default function Portfolio() {
  useEffect(() => {
    // Set smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="font-inter bg-gray-50 text-slate-800">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <LeadershipSection />
      <AchievementsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Sai Akshay Deepak Maradapudi. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
