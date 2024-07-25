import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="container px-5 py-24 mx-auto" id="contact">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xl  underline underline-offset-8 mb-3  md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>
        <section className="text-gray-600 body-font relative mt-5" id="contact">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              marginheight="0"
              marginwidth="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5688633456366!2d72.98747037532323!3d33.64241917331412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df972812b99c3b%3A0xef60183cceeb48c5!2sSEECS%20UG%20Block!5e0!3m2!1sen!2s!4v1721894041592!5m2!1sen!2s"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative  shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Write to us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Send us an email to get contacted by our specialists
              </p>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <Button className="w-full hover:bg-[#5e84aa] hover:text-white transition-all            ">
                Send
              </Button>
              {/* <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
