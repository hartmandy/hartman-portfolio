import ImageSlider from "./components/ImageSlider";
import Intro from "./components/Intro";
import "./index.css";

export default function Homepage() {
  return (
    <div className="container mx-auto w-screen h-screen">
      <Intro />
      <ImageSlider />
    </div>
  );
}
