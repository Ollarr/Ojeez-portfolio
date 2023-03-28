import React from "react";

function About() {
  const aboutMe = [
    {
      title: "web development",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
    },
    {
      title: "Mobile app development",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
    },
    {
      title: "Data Engineering",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
    },
  ];
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="flex items-center justify-items-center gap-x-2 md:divide-x-4 flex-col lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            What I do
          </h2>
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-6 items-center justify-items-start">
            {aboutMe.map((about) => {
              return (
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:translate-x-2">
                  <h6 className="mb-2 font-semibold leading-5">
                    {about.title}
                  </h6>
                  <p className="text-sm text-gray-900">{about.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
