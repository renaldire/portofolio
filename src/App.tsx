import { About } from "./components/About";
import { CareerMetrics } from "./components/CareerMetrics";
import { Contact } from "./components/Contact";
import { EngineeringApproach } from "./components/EngineeringApproach";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { SelectedWork } from "./components/SelectedWork";

export function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CareerMetrics />
        <SelectedWork />
        <EngineeringApproach />
        <ExperienceTimeline />
        <About />
      </main>
      <Contact />
    </>
  );
}
