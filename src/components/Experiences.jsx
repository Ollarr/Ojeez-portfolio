import React from "react";

function Experiences() {
  const workExperiences = [
    {
      role: "Backend role",
      decsription:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.",
      time: "May 9th 2018 - August 25th 2018",
    },
    {
      role: "Backend role",
      decsription:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.",
      time: "May 9th 2018 - August 25th 2018",
    },
    {
      role: "Backend role",
      decsription:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.",
      time: "May 9th 2018 - August 25th 2018",
    },
    {
      role: "Backend role",
      decsription:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.",
      time: "May 9th 2018 - August 25th 2018",
    },
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Working Experiences
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="flex flex-col items-center justify-items-center gap-8 ">
        {workExperiences.map((experience) => {
          return (
            <div className="flex items-center">
              <div className="text-start">
                <h6 className="mb-2 font-bold text-3xl leading-5">
                  {experience.role}
                </h6>
                <p className="text-sm text-gray-900">
                  {experience.decsription}
                </p>
                <p className="text-sm font-bold text-gray-900">
                  {experience.time}
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;
