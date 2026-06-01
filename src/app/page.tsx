import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <div className="pt-11">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
