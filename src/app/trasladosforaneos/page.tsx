import ButtonR from "@/components/buttonr";
import Cotizacion from "@/components/cotization";
import Footer from "@/components/footer";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/opinions";
import Services from "@/components/services";
import Stats from "@/components/stats";
import SubsBanner from "@/components/subsbanner";
import Foraneos from "@/components/foraneos";

export default function Home() {
  return (<>
    <Navbar/>
    <Cotizacion tittle= 'Traslados foráneos' sub= 'Realiza una cotización para tu traslado foráneo' par1='Amplia cobertura en Traslados Foráneos' par2='Traslados en Ambulancia y aérea toda la Republica Mexicana' par3 ='' par4=''/>
 <Foraneos/>
  <Stats/>
  <SubsBanner/>
  <Map/>
  <Footer/>
  <ButtonR />
  </>
    
  );
}
