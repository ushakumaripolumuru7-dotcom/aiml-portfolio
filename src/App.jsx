import { ThemeProvider } from './components/portfolio/ThemeContext';
import ParticleBackground from './components/portfolio/ParticleBackground';
import Navbar from './components/portfolio/Navbar';
import HeroSection from './components/portfolio/HeroSection';
import AboutSection from './components/portfolio/AboutSection';
import SkillsSection from './components/portfolio/SkillsSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ExperienceSection from './components/portfolio/ExperienceSection';
import AchievementsSection from './components/portfolio/AchievementsSection';
import BlogSection from './components/portfolio/BlogSection';
import ContactSection from './components/portfolio/ContactSection';
import Footer from './components/portfolio/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
