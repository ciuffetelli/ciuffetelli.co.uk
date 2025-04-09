import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-screen-lg mx-auto">
        <About />
        <Skills />
				<Projects />
				<Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<p>
    			© {new Date().getFullYear()} Daniel C. All rights reserved.
  			</p>
      </footer>
    </div>
  );
}
