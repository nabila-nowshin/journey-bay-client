import { Link } from "react-router";
import bgVideo from "../assets/hero.mp4";

const HeroBanner = () => {
  return (
    <div className="relative w-full mb-40">
      {/* Background Video */}
      <div className="h-[60vh]">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        ></video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.3)] z-10"></div>

      {/* Glass Card */}
      <div className="absolute z-20 flex flex-col items-center justify-center text-center bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 overflow-visible">
        <div className="bg-base-100/40 backdrop-blur-md rounded-2xl p-5 md:p-10 shadow-lg  w-full ">
          <h1 className="text-2xl lg:text-5xl font-bold text-base-content mb-4">
            Discover Your Next Journey
          </h1>
          <p className="text-base-content text-lg mb-6">
            Tailored packages for every traveler — mountains, seas, and beyond.
          </p>
          <Link to="/packages">
            <button className="btn btn-primary btn-outline  px-4 md:px-8 py-3 rounded-full ">
              Explore All Packages
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
