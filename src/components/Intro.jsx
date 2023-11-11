import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="justify-center">
      <h1 className="text-3xl font-bold">Mandy Hartman</h1>
      <h3 className="text-2xl font-semibold ">
        React Developer @{" "}
        <Link
          to="https://www.visualarchives.org"
          classname="no-underline text-orange-200"
        >
          Visual Archives
        </Link>
      </h3>
      <p>
        Specializing in web applications and digital collection projects for
        museums, archives, and higher education.
      </p>
    </div>
  );
}
