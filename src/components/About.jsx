import { BsLaptop, BsFillPhoneFill, BsCodeSlash } from "react-icons/bs";

const About = () => {
  return (
    <div className="px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 lg:w-20 lg:h-20"></div>
      <div className="flex items-center flex-col lg:flex-row">
        <div className="mb-4 lg:w-1/2">
          <h2 className=" font-[poppins] text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            What I do?
          </h2>
        </div>
        <div className="lg:w-1/2">
          <div className="px-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="max-w-screen-lg sm:mx-auto">
              <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-center  ">
                  <div className="flex  w-[500px] border-rounded border-2 py-4 mb-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                        <BsLaptop />
                      </div>
                    </div>
                    <div>
                      <h2 className="mb-2 font-semibold leading-5">
                        Web development
                      </h2>
                      <p className="text-left text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae.
                      </p>
                    </div>
                  </div>
                  <div className="flex  w-[500px] border-rounded border-2 py-4 mb-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                        <BsFillPhoneFill />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 font-semibold leading-5">
                        Mobile App development
                      </h6>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae.
                      </p>
                    </div>
                  </div>
                  <div className="flex  w-[500px] border-rounded border-2 py-4 mb-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                        <BsCodeSlash />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 font-semibold leading-5">
                        Data Engineering
                      </h6>
                      <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
