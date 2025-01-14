"use client";

import Image from "next/image";
import SlidingInComponent from "../SlidingInComponent/slidingin";
import { Button } from "../ui/button";
import LandingSvg from "./LandingSvg/landingsvg";

export default function Landing() {
  return (
    <section className="container md:h-lvh mx-auto bg-white text-gray-500 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-end mt-0 md:mt-5 md:justify-center h-full">
        <div className="w-full  flex flex-col gap-3">
          <SlidingInComponent>
            <h1 className="text-5xl text-black font-bold">Welcome to SiBot</h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.1}>
            <p className="">
              Welcome to SiBot! At SiBot, we specialize in creating AI-powered
              chatbots designed to revolutionize customer support and enhance
              user experiences. Our solutions provide quick answers and smart
              solutions, ensuring efficiency, cost reduction, and consistent
              quality in customer interactions.
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2}>
            <Button className="w-fit">
              <a href="#contact-us">Contact Us</a>
            </Button>
          </SlidingInComponent>
        </div>
        <div className="w-3/4 flex justify-end">
          {/* <LandingSvg /> */}
          <SlidingInComponent>
            <Image
              src={"/assets/images/robot.jpg"}
              width={450}
              height={450}
              alt="landing img"
            />
          </SlidingInComponent>
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
