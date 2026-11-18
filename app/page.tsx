import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";



export default function Home(){
    return(
      <div className="min-h-screen bg-white text-slate-900 font-sans">
        <Navbar/>
       <Hero/>
      <AboutSection/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      </div>
    )
} 