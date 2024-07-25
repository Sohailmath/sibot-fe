"use client";

import SlidingInComponent from "../SlidingInComponent/slidingin";

export default function Footer() {
  const quickLinks = [
    { title: "About", path: "#about" },
    { title: "Products", path: "#projects" },
    { title: "Contact", path: "#contact" },
    { title: "Team", path: "#team" },
  ];

  return (
    <section className="w-full bg-black text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold w-full tracking-wide my-5">
          <a href="#">SiBot</a>
        </h1>
        <div className="flex flex-row">
          <ul className="flex w-1/2 flex-row gap-5 ">
            {quickLinks.map((link, idx) => {
              return (
                <SlidingInComponent delay={idx * 0.1} direction="left">
                  <li className="group w-fit">
                    <a href={link.path} className="relative">
                      <span className="font-light">{link.title}</span>
                      <span className="absolute border-b border-white -bottom-1 left-0 w-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </a>
                  </li>
                </SlidingInComponent>
              );
            })}
          </ul>
        </div>
        <div className="text-gray-400 mt-10 w-full flex items-end justify-end">
          Developed at HPC Lab Seecs
        </div>
      </div>
    </section>
  );
}
