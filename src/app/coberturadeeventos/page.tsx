import ButtonR from "@/components/buttonr";
import Cotizacion from "@/components/cotization";
import Footer from "@/components/footer";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/opinions";
import Events from "@/components/events";
import Stats from "@/components/stats";
import SubsBanner from "@/components/subsbanner";


export default function Home() {
  return (<>
    <Navbar/>
    <Cotizacion tittle= 'Cobertura de eventos' sub= 'Realiza una cotización para tu evento' par1='Amplia Cobertura de Eventos' par2='Festivales Musicales, Eventos deportivos, Eventos Masivos, Religiosos, Teatro, Políticos, Exposiciones, Escolares, etc.' par3 ='' par4=''/>
 <Events/>
  <Stats/>
  <SubsBanner/>
  <Map/>
  <Footer/>
  <ButtonR />
  </>
    
  );
}
