import ButtonR from "@/components/buttonr";
import Cotizacion from "@/components/cotization";
import Footer from "@/components/footer";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/opinions";
import Emer from "@/components/emer";
import Stats from "@/components/stats";
import SubsBanner from "@/components/subsbanner";


export default function Home() {
  return (<>
    <Navbar/>
    <Cotizacion tittle= 'Emergencias' sub= 'EMERGENCIAS LAS 24 HORAS.' par1='Atención médica inmediata las 24 horas, todos los días.' par2='¿Emergencias? ¡Estamos disponibles las 24 horas!"' par3 ='' par4=''/>
 <Emer/>
  <Stats/>
  <SubsBanner/>
  <Map/>
  <Footer/>
  <ButtonR />
  </>
    
  );
}
