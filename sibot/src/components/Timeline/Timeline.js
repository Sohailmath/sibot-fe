import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const steps = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
];

export default function Timeline({}) {
  return (
    <div className="container  py-4" id="about">
      <h2 className="text-xl underline underline-offset-8 mb-3  md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
        How It Works
      </h2>
      <div className="flex items-center lg:items-start mt-5 flex-wrap lg:flex-nowrap">
        <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6 ">
          {steps.map((step, idx) => (
            <StepContainer
              key={idx}
              description={step}
              no={idx + 1}
              last={idx === steps.length - 1}
            />
          ))}
          <div className="flex gap-4">
            <Button className="bg-my-primary text-white" asChild>
              <Link href={"#contact"}>Contact Us</Link>
            </Button>
          </div>
        </div>
        <Image
          src="/assets/images/robot.jpg"
          width={500}
          height={500}
          alt="overview"
          className="hidden md:block w-auto h-auto md:w-1/2 "
        />
      </div>
    </div>
  );
}

const StepContainer = ({ description, no, last = false }) => {
  return (
    <div className={`flex z-0 relative ${last ? "pb-6" : "pb-10"}`}>
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        {!last && (
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        )}
      </div>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white relative z-10">
        <div className=" rounded-full grid place-items-center">{no}</div>
      </div>
      <div className="flex-grow pl-4">
        <p className="leading-relaxed text-gray-400">{description}</p>
      </div>
    </div>
  );
};
