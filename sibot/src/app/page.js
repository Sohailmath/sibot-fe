import Landing from "@/components/Landing/landing";
import Navbar from "@/components/Navbar/Navbar";
import Team from "@/components/Team/Team";
import Timeline from "@/components/Timeline/Timeline";

function Page() {
  return (
    <div>
      <Navbar />
      <Landing />
      <div
        className="w-full py-4 h-96 bg-blue-900 grid place-items-center mb-6"
        id="projects"
      >
        <h1 className="text-4xl text-white  font-bold text-center uppercase">
          products
        </h1>
      </div>
      <Timeline />
      <Team />
    </div>
  );
}

export default Page;
