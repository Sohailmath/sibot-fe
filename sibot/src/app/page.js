import Landing from "@/components/Landing/landing";
import Navbar from "@/components/Navbar/Navbar";
import Team from "@/components/Team/Team";
import Timeline from "@/components/Timeline/Timeline";

function Page() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Timeline />
      <Team />
    </div>
  );
}

export default Page;
