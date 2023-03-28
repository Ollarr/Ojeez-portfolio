import React from "react";

function Footer() {
  const footerLinks = [
    { name: "about", link: "/about" },
    { name: "projects", link: "/projects" },
    { name: "contact", link: "/contact" },
  ];
  return (
    <footer class="bg-gray-900 mt-6 ">
      <div class="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/" class="flex items-center mb-4 sm:mb-0">
            {/* <img src="/" class="h-8 mr-3" alt="footerLogo" /> */}
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white ">
              &lt;Ojeez/&gt;
            </div>
          </a>
          <ul class="flex flex-wrap items-center justify-items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerLinks.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-md md:my-0 my-7 font-[nunito] capitalize"
              >
                <a href={link.link} className="mr-4 md:mr-6">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
        </span>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a href="https://github.com/Ollarr" target="_blank" rel="noreferrer">
            Made by Dev Ollar™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
