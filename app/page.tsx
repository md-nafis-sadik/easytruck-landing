import About from "@/components/home/About";
import Company from "@/components/home/Company";
import Goal from "@/components/home/Goal";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import User from "@/components/home/User";
import Download from "@/components/shared/Download";
import Faq from "@/components/shared/Faq";

function page() {
  return (
    <main>
      <Hero />
      <Company />
      <About />
      <User />
      <Service />
      <Goal />
      <Faq />
      <Download />
    </main>
  );
}

export default page;
