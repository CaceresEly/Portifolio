import { Navbar } from '../components/layout/navbar';
import { AboutSection } from '../components/sections/about_section';
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
      </main>
    </>
  );
}

export default App;