import { Navbar } from '../components/layout/navbar';
import { HeroSection } from '../components/sections/hero_section';
import { AboutSection } from '../components/sections/about_section';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}

export default App;