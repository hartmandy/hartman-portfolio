import image1 from "../images/bmc.png";
import image2 from "../images/edu.png";
import image3 from "../images/jenzabarchatbot.png";
import image4 from "../images/roofing.png";
import image5 from "../images/avl.png";
import image6 from "../images/visualarchives.png";

function Projects() {
  return (
    <div className="grid grid-cols-1  p-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <a href="https://www.bmcyearbook.org">
        <img
          src={image1}
          alt="BMC Yearbook"
          className=" rounded-lg mr-6 sm:mx-3"
        />
      </a>

      <a href="https://edu-dashboard-neon.vercel.app/">
        <img
          src={image2}
          alt="Education Dashboard"
          className=" rounded-lg mr-6 sm:mx-3"
        />
      </a>

      <a href="https://jenzabar.com/product/chatbot">
        <img src={image3} alt="Jenzabar" className=" rounded-lg mr-6 sm:mx-3" />
      </a>

      <a href="https://www.linkedin.com/in/hartmandy/">
        <img
          src={image4}
          alt="Roofing Map"
          className=" rounded-lg mr-6 sm:mx-3"
        />
      </a>

      <a href="https://collection.ashevilleart.org/portfolios/list?records=18">
        <img
          src={image5}
          alt="Asheville Art Museum"
          className=" rounded-lg mr-6 sm:mx-3"
        />
      </a>

      <a href="https://www.visualarchives.org">
        <img
          src={image6}
          alt="Visual Archives"
          className=" rounded-lg mr-6 sm:mx-3"
        />
      </a>

      <a href="https://www.linkedin.com/in/hartmandy/" className="p-3">
        View More
      </a>
    </div>
  );
}

export default Projects;
