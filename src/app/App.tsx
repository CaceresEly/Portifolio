import { Footer } from '../components/layout/footer';
import { Navbar } from '../components/layout/navbar';
import { AboutSection } from '../components/sections/about_section';
import { ContactSection } from '../components/sections/contact_section';
import { EducationSection } from '../components/sections/education_section';
import { ExperienceSection } from '../components/sections/experience_section';
import { ExpertiseSection } from '../components/sections/expertise_section';
import { HeroSection } from '../components/sections/hero_section';
import { ProjectsSection } from '../components/sections/projects_section';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;