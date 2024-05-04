import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import nasa from "@/public/nasa.jpg";
import Home2 from "@/components/Home2";
export default function Home() {
  return (
    <>
      <Navbar />
      <Home2 />
      <Hero />
      <Image src={nasa} width={100} height={100} alt="nasa" />
    </>
  );
}
