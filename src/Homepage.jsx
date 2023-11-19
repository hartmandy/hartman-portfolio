import Projects from "./components/Projects";
import Intro from "./components/Intro";
import "./index.css";
import Contact from "./components/Contact";

export default function Homepage() {
  return (
    <div className="container mx-auto w-screen h-screen">
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
}
