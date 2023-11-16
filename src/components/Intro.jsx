import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import email from "../images/email.png";
import profilePicture from "../images/pfp.jpg";

export default function Intro() {
  return (
    <div className="grid place-items-center p-8 mx-auto h-screen">
      <div className="flex gap-6 flex-col md:flex-row">
        <img
          src={profilePicture}
          alt="profile"
          className="w-64 h-64 object-cover rounded-full mx-auto md:mx-0"
        />

        <div className="my-auto text-center md:text-left">
          <h1 className="text-4xl font-bold mb-3">Mandy Hartman</h1>
          <h3 className="text-xl font-semibold ">
            React Developer @{" "}
            <a
              href="https://www.visualarchives.org"
              className="text-violet-200 hover:text-violet-300"
            >
              Visual Archives
            </a>
          </h3>
          <p className="max-w-sm">
            Specializing in web applications and digital collection projects for
            museums, archives, and higher education.
          </p>

          <span className="flex items-center mt-4 justify-center md:justify-start">
            <a href="https://www.github.com/hartmandy">
              <img src={github} alt="GitHub" className="w-[30px] mr-4" />
            </a>
            <a href="https://www.linkedin.com/in/hartmandy">
              <img src={linkedin} alt="Linkedin" className="w-[30px] mr-4" />
            </a>
            <a href="https://www.twitter.com/hartmandyyy">
              <img src={twitter} alt="Twitter" className="w-[30px] mr-4" />
            </a>
            <a href="mailto:AmandaHartman@VisualArchives.org">
              <img src={email} alt="Email" className="w-[35px]" />
            </a>
          </span>
        </div>
      </div>

      <div class="flex justify-center mb-4 mt-10">
        <div class="animate-bounce sm:mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 text-violet-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
