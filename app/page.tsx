import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import User from "@/components/home/User";

function page() {
  return (
    <main className="font-siliguri bg-white">
      <Hero />
      {/* <Company /> */}
      <About />
      <User />
      {/* <Service /> */}
      {/* <Goal /> */}
      {/* <Faq /> */}
      {/* <Download /> */}
    </main>
  );
}

export default page;
