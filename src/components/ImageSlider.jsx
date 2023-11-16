import image1 from "../images/bmc.png";
import image2 from "../images/edu.png";
import image3 from "../images/bmc.png";

function ImageSlider() {
  return (
    <div className="slider-container relative overflow-hidden">
      <div className="slider grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-transform duration-300">
        <a href="https://www.bmcyearbook.org">
          <img src={image1} alt="BMC Yearbook" className=" rounded-lg mr-6" />
        </a>

        <a href="https://edu-dashboard-neon.vercel.app/">
          <img
            src={image2}
            alt="Education Dashboard"
            className=" rounded-lg mr-4"
          />
        </a>

        <a href="https://www.bmcyearbook.org">
          <img src={image1} alt="App" className=" rounded-lg mr-4" />
        </a>
      </div>
    </div>
  );
}

export default ImageSlider;
