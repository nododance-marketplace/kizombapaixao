import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Styles from "@/components/Styles";
import Aulas from "@/components/Aulas";
import Comunidade from "@/components/Comunidade";
import Bookings from "@/components/Bookings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Styles />
        <Aulas />
        <Comunidade />
        <Bookings />
      </main>
      <Footer />
    </>
  );
}
