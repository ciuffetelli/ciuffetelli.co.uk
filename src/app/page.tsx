import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Solutions } from "@/sections/Solutions";

export default function Home() {
  return (
    <div className="pt-11">
      <About />
      <Solutions />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
