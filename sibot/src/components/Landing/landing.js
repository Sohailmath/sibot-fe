"use client";

import SlidingInComponent from "../SlidingInComponent/slidingin";
import { Button } from "../ui/button";
import LandingSvg from "./LandingSvg/landingsvg";

export default function Landing() {
  return (
    <section className="container h-lvh mx-auto bg-white text-gray-500 ">
      <div className="flex flex-row items-center justify-center h-full md:px-10">
        <div className="w-full  flex flex-col gap-3">
          <SlidingInComponent>
            <h1 className="text-5xl text-black font-bold">Welcome to SiBot</h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.1}>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, qui placeat dolore ea consequatur nam quas architecto
              itaque numquam saepe maiores distinctio odio natus necessitatibus
              voluptatibus exercitationem veritatis quibusdam similique?
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2}>
            <Button className="w-fit">Contact Us</Button>
          </SlidingInComponent>
        </div>
        <div className="w-full flex justify-end">
          <LandingSvg />
        </div>
        {/* <div className="w-full border border-black flex flex-col">
          <div className="border border-[blue] h-lvh"></div>
          <div className="border border-[blue] h-lvh"></div>
          <div className="border border-[blue] h-lvh"></div>
        </div> */}
      </div>
    </section>
  );
}
