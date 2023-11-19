export default function Contact() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <section>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl p-4 text-center">
              Contact Me
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center  sm:text-xl">
              Want to chat about your next project?
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-neutral-100 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-neutral-100 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let me know how I can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-neutral-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <a
                href="mailto:amandahartman@visualarchives.org"
                className="inline-block px-6 py-2 text-white font-semibold rounded-md mt-4 bg-violet-300"
              >
                Send Message
              </a>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
