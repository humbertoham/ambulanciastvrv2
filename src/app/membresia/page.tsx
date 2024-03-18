import ButtonR from "@/components/buttonr";
import Cotizacion from "@/components/cotization";
import Footer from "@/components/footer";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/opinions";
import Services from "@/components/services";
import Stats from "@/components/stats";
import SubsBanner from "@/components/subsbanner";
import Benefit from "@/components/benefit";

export default function Home() {
  return (<>
    <Navbar/>
    <Cotizacion tittle= 'Membresías' sub= 'Planes de Afiliación' par1='Tiempo de respuesta inmediata y garantía de llegada.' par2='Atención ilimitada a urgencias y/o emergencias.' par3 ='' par4=''/>
    <Benefit/>
  <SubsBanner/>
  <Map/>
  <Footer/>
  <ButtonR />
  </>
    
  );
}
