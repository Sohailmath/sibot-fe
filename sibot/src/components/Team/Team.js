"use client";

import Image from "next/image";
import SlidingInComponent from "../SlidingInComponent/slidingin";

const teamMembers = [
  {
    name: "Dr Soahil Iqbal",
    image: "/assets/images/siqbal.jpeg",
    role: "CEO and Founder",
  },
  {
    name: "Dr Qurat Ul Ain",
    image: "/assets/images/qain.jpeg",
    role: "Cheif Scientist and Co-Founder",
  },
  {
    name: "Khizer Tariq",
    image: "/assets/images/ktariq.jpeg",
    role: "CTO and Co-Founder",
  },
  {
    name: "Ali Safdar",
    image: "/assets/images/awais.jpeg",
    role: "CPO and Co-Founder",
  },
];

const Team = () => {
  return (
    <div className="container px-5 py-24 mx-auto" id="team">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xl underline underline-offset-8 mb-3  md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
          Our Team
        </h2>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 mt-4">
          Our Team is motivated to provide easy access to any information
          quickly and smartly.
        </p>
      </div>
      <div class="flex flex-wrap">
        {teamMembers.map((member, idx) => (
          <SlidingInComponent
            delay={idx * 0.1}
            class={"p-2 lg:w-1/3 md:w-1/2 w-full"}
          >
            <SingleTeamMember key={idx} {...member} />
          </SlidingInComponent>
        ))}
      </div>
    </div>
  );
};

export default Team;

const SingleTeamMember = ({ name, image, role }) => {
  return (
    <div className="p-2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-gray-100 tranis hover:shadow-lg hover:bg-gray-200">
        <Image
          width={64}
          height={64}
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={image}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
