import About from "@/components/About/about";
import Contact from "@/components/Contact Us/Contact";
import Footer from "@/components/Footer/footer";
import Landing from "@/components/Landing/landing";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import Team from "@/components/Team/Team";

function Page() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Products />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
}

export default Page;
