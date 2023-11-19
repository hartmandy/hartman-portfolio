export default function Contact() {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-center place-items-center">
      <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl p-4">
        Contact Me
      </h2>
      <p className="mb-8 font-light sm:text-xl">
        Want to chat about your next project?
      </p>

      <a
        href="mailto:amandahartman@visualarchives.org"
        className="inline-block px-6 py-2 text-white font-semibold rounded-md bg-violet-300"
      >
        Send an Email
      </a>
    </div>
  );
}
