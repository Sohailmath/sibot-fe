import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 0,
    image: "/assets/images/p0.jpeg",
    title: "NUST Help BOT",
    shortDescription: `NUST Help Bot: A chatbot designed to help NUST students to find out the university policies easily. It is available both on web and android phones. Web: https://nust-help-bot.vercel.app/`,
    top: true,
  },
  {
    id: 1,
    image: "/assets/images/p1.jpg",
    title: "Mouseeki",
    shortDescription:
      "Mouseeki (aka AI-driven Melodic Music) is an innovative musical toolkit designed to streamline and enhance music creation",
  },
  {
    id: 2,
    title: " Resource Allocation in IRS-Assisted Cell-Free MIMO Systems",
    shortDescription:
      "Optimizing energy efficiency and data coverage in IRS-assisted 6G networks using practical phase shift models to enhance performance and spectral efficiency.",
    image: "/assets/images/p2.jpg",
  },
  {
    id: 3,
    shortDescription: `This project enhances IRS-assisted network performance in real-world environments, improving connectivity and data rates in high-density areas using intelligent reflecting surfaces and deep reinforcement learning.`,
    title:
      "Performance Analysis of IRS Assisted Networks in Real-World Environments",
    image: "/assets/images/p3.jpg",
  },
  {
    id: 4,
    title: `FreeFlowAI: A No Code Web App Builder`,
    shortDescription: `FreeFlowAI is an LLM-based no-code web app builder that converts feature descriptions into real-time code. With a drag-and-drop interface, it offers prompt-based coding, app styling, frontend-backend integration, and code download, streamlining web app creation.`,
    image: "/assets/images/p4.jpg",
  },
  {
    id: 5,
    title: `Multiple Carrier Frequency Offsets Estimation in Cooperative Networks: An Experimental Study`,
    image: "/assets/images/p5.jpg",
    shortDescription: `This project experimentally analyzes multiple carrier frequency offsets (CFOs) estimation in cooperative networks using the I-MUSIC algorithm on USRP platforms, enhancing wireless network robustness and capacity in varying channel conditions.`,
  },
];

const Products = () => {
  return (
    <div className="container px-5 py-24 mx-auto" id="team">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xl underline underline-offset-8 mb-3  md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
          Our Products
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-fr gap-y-4">
        {products.map((product, idx) => (
          <SingleProduct key={idx} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

const SingleProduct = ({ image, title, id, shortDescription, top = false }) => {
  return (
    <div className="p-2  w-full group h-full">
      <Card className="shadow-md group-hover:shadow-lg group-hover:bg-gray-200 transition-all h-full">
        <CardHeader className=" mb-3">
          <Image
            width={300}
            height={300}
            alt="team"
            className="w-72 mb-5 h-64 bg-gray-100 object-cover flex-shrink-0 rounded-full mx-auto"
            style={{
              objectPosition: top ? "top" : "center",
            }}
            src={image}
          />
          <div className="flex-grow ">
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-2">
              {shortDescription}
            </CardDescription>
          </div>
        </CardHeader>
        <CardFooter>
          {/* <Link href={`/products/${id}`}>
            <Button className="w-full hover:bg-[#5e84aa] hover:text-white transition-all            ">
              Learn More
            </Button>
          </Link> */}
        </CardFooter>
      </Card>
    </div>
  );
};
