import React from "react";

function Projects() {
  const projectsDetails = [
    {
      project: "Expense tracker",
      description:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
      role: "Backend development",
      image:
        "https://cdn.dribbble.com/users/477071/screenshots/14019398/media/d3c2951a35d3f4bdc1dfc6c2e96850a7.jpg?compress=1&resize=1200x900&vertical=top",
      link: "",
    },
    {
      project: "Crypto Admin Dashboard",
      description:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
      role: "Backend development",
      image:
        "https://cdn.dribbble.com/userupload/5606527/file/original-5090b4558747d83c04fbb84f2a060db7.png?compress=1&resize=2048x1536",
      link: "",
    },
    {
      project: "EHR",
      description:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
      role: "Backend development",
      image:
        "https://cdn.dribbble.com/userupload/5015926/file/original-c087797951528ea691a4c8c54c0aea11.png?compress=1&resize=1504x1128",
      link: "",
    },
    {
      project: "E-commerce app",
      description:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
      role: "Backend development",
      image:
        "https://cdn.dribbble.com/userupload/3265843/file/original-800d12b95b2f8bf7c18b19a678884634.jpg?compress=1&resize=2048x1536",
      link: "",
    },
    {
      project: "E-commerce app",
      description:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
      role: "Backend development",
      image:
        "https://cdn.dribbble.com/userupload/3265843/file/original-800d12b95b2f8bf7c18b19a678884634.jpg?compress=1&resize=2048x1536",
      link: "",
    },
    {
      project: "E-commerce app",
      description:
        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. ",
      role: "Backend development",
      image:
        "https://cdn.dribbble.com/userupload/3265843/file/original-800d12b95b2f8bf7c18b19a678884634.jpg?compress=1&resize=2048x1536",
      link: "",
    },
  ];
  return (
    <section className="mb-6">
      <div className="text-center px-4 mb-4">
        <h1 className=" text-4xl mb-4">Featured Projects</h1>
        <h4>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque rem aperiam, eaque ipsa quae.
        </h4>
      </div>
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 flex-col px-6 gap-8 justify-items-center items-center max-w-full  ">
        {projectsDetails.map((detail) => (
          <div class="cards bg-gray-800 h-[350px] p-4  border border-gray-200 rounded-lg ">
            <a href="/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {detail.project}
              </h5>
            </a>
            <h3 className="mb-2 font-normal text-gray-400 ">{detail.role}</h3>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {detail.description}
            </p>
            <div className="mb-3">
              <img
                className="m-auto block w-[60%] aspect-[3/2]  "
                src={detail.image}
                alt="some project pictures"
              />
            </div>

            <div className="cards-overlay">
              <a
                href={projectsDetails.link}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit site
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
