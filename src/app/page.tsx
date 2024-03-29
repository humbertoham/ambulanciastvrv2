import ButtonR from "@/components/buttonr";
import Cotizacion from "@/components/cotization";
import Footer from "@/components/footer";
import Map from "@/components/map";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/opinions";
import Services from "@/components/services";
import Stats from "@/components/stats";
import SubsBanner from "@/components/subsbanner";

import Init from "@/components/init";

export default function Home() {
  return (<>
    <Navbar/>
    <Cotizacion tittle= 'Ambulancias TVR' sub= 'Tu salud, nuestra prioridad.' par1='Ambulancias desde $800 pesos.' par2='Respuesta Inmediata' par3 ='Atendemos Pacientes de COVID.' par4='Amplia Cobertura las 24 horas.'/>
  <Services/>
  <Init/>
  <Stats/>
  <Testimonials/>
  <SubsBanner/>
  <Map/>
  <Footer/>
  <ButtonR />
  </>
    
  );
}
