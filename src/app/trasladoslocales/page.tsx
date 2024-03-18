import ButtonR from "@/components/buttonr";
import Cotizacion from "@/components/cotization";
import Footer from "@/components/footer";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/opinions";
import Services from "@/components/services";
import Stats from "@/components/stats";
import SubsBanner from "@/components/subsbanner";
import Local from "@/components/locales";

export default function Home() {
  return (<>
    <Navbar/>
    <Cotizacion tittle= 'Traslados locales' sub= 'Realiza una cotización para tu traslado' par1='Amplia cobertura en Chihuaha.' par2='Ofrecemos tiempos de respuesta rápidos y traslados seguros a hospitales, clínicas u otros centros médicos en toda la región de Chihuahua.' par3 ='' par4=''/>
    <Local/>
  <Stats/>
  <SubsBanner/>
  <Map/>
  <Footer/>
  <ButtonR />
  </>
    
  );
}
