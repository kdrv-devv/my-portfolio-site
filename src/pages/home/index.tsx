import { useRef } from "react";
import Footer from "../../components/footer";
import Aboutme from "../../components/home-components/aboutme";
import Projects from "../../components/home-components/projects";
import Skills from "../../components/home-components/skills";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";

const Home = () => {
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar
        scrollToSkills={() =>
          skillsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToAbout={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToProjects={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Showcase ref={showcaseRef} />
      <Aboutme ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </>
  );
};

export default Home;
