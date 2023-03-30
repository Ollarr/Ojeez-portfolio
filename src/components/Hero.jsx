import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

function Hero() {
  return (
    <div>
      <div className="mt-8 px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              Hi, I am Ojietuahmen Samuel
            </h5>
            <h5>I am a full stack web and mobile app developer</h5>
            <p className="mb-6 text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae explicabo. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex justify-center space-x-4">
              <a
                href="/"
                className="text-gray-600 align-self-center text-xl  transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <AiOutlineGithub />
              </a>
              <a
                href="/"
                className="text-gray-600 align-self-center text-xl transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
