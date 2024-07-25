import Landing from "@/components/Landing/landing";
import Navbar from "@/components/Navbar/Navbar";
import Timeline from "@/components/Timeline/Timeline";

function Page() {
  return (
    <div>
      <Navbar />
      <Landing />
      <div id="about">
        <Timeline />
      </div>
    </div>
  );
}

export default Page;
