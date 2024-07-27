import Image from "next/image";

const About = () => {
  return (
    <div className="container px-5 py-24 mx-auto" id="about">
      <div className="flex flex-col text-center w-full mb-4 md:mb-12 lg:mb-16">
        <h2 className="text-xl underline underline-offset-8 mb-3  md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
          About Us
        </h2>
      </div>
      <div className="flex items-start flex-wrap mt-4">
        <p className="md:w-2/3 mx-auto leading-relaxed text-base text-gray-500  md:pr-20 pb-10">
          <strong>Welcome to Sibot</strong>, where we revolutionize
          communication with cutting-edge AI-based chatbots. Our mission is to
          create intelligent, conversational agents that enhance user
          experiences, streamline operations, and drive business growth. With a
          team of experts in artificial intelligence and natural language
          processing, we deliver innovative chatbot solutions tailored to meet
          the unique needs of various industries. At Sibot, we are committed to
          transforming the way businesses interact with their customers through
          smart, efficient, and engaging AI technologies. SiBot is a NUST
          Spin-Off company with origin in Pakistan with contributors in USA,
          Australia, KSA and UAE.
        </p>
        <div className="md:w-1/3 w-full">
          <Image
            src="/assets/images/p5.jpg"
            alt="about"
            width={400}
            height={400}
            className="object-cover w-full h-auto object-center rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
