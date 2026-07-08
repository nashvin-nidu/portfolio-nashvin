import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Research from "@/components/Research";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Research />
      </main>
      <Contact />
    </SmoothScroll>
  );
}
