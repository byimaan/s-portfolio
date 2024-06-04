// Byimaan



import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">

      <div className="grid place-content-center h-dvh w-full">
        <Intro />
      </div>

      <SectionDivider />
      
      <About />

      <Projects/>

    </main>
  )
}
