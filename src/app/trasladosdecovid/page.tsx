import ButtonR from "@/components/buttonr";
import Cotizacion from "@/components/cotization";
import Footer from "@/components/footer";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Covid from "@/components/covid";
import Services from "@/components/services";
import Stats from "@/components/stats";
import SubsBanner from "@/components/subsbanner";


export default function Home() {
  return (<>
    <Navbar/>
    <Cotizacion tittle= 'Traslados COVID' sub= 'Realiza una cotización para tu traslado COVID' par1='Amplia cobertura en Servicios' par2='Traslado de Covid, Terapia intensiva, Incubadora, Ambulancias de Alta Especialidad, Traslado Aéreo, etc.' par3 ='' par4=''/>
 <Covid/>
  <Stats/>
  <SubsBanner/>
  <Map/>
  <Footer/>
  <ButtonR />
  </>
    
  );
}
