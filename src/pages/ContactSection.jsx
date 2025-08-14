import Lottie from "lottie-react";
import contactUs from "../assets/Contact Us.json";
const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-base-200 bg-opacity-20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-base-content mb-12">
          Have questions or want a custom trip? Fill out the form below and
          we’ll get back to you shortly!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <form
            action="mailto:support@journeybay.com"
            method="POST"
            encType="text/plain"
            className="grid gap-4 bg-base-100 p-8 rounded-2xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full rounded-xl p-4 bg-base-100 border-base-200 border-2  focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full rounded-xl p-4  bg-base-100 border-base-200 border-2  focus:border-blue-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered w-full rounded-xl p-4  bg-base-100 border-base-200 border-2  focus:border-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="textarea textarea-bordered w-full rounded-xl p-4 h-32 resize-none  bg-base-100 border-base-200 border-2  focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary rounded-full px-8 py-4 mt-2 hover:scale-105 transition"
            >
              Send Message
            </button>

            <p className="mt-2 text-gray-500 text-sm text-center">
              Or email us directly at{" "}
              <a
                href="mailto:support@journeybay.com"
                className="text-blue-600 underline"
              >
                support@journeybay.com
              </a>
            </p>
          </form>

          <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
              <Lottie animationData={contactUs} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
