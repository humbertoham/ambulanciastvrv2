import { PhoneIcon} from '@heroicons/react/24/outline'
export default function Emer() {
    return (
      <>
          
         

<div className="  max-w-6xl mx-auto rounded-3xl text-gray-600 md:mb-0 mb-10 grid grid-cols-1 md:grid-cols-2 ">
 
<div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto  md:px-5 md:py-0 pb-5  px-10 flex flex-col"> 
            
            <img src="./images/emer2.jpeg" className="rounded-3xl"/>
          
          
          
          </div>


          <div className=" md:ml-16 max-w-70 md:mt-20 mb-0  mx-auto  md:px-0 md:py-0  px-10 flex flex-col"> 
          <h1 className="font-bold text-4xl text-gray-900">Emergencias</h1>
          <p className="py-10"><span className='font-bold'>Amublancias TVR</span> acude al lugar donde ocurre la emergencia con Unidades básicas o de Terapia Intensiva Móvil, equipadas con avanzada tecnología en equipo médico y la atención de <span className='font-bold'>Médicos Especialistas, Paramédicos y Enfermeros </span> altamente capacitados.</p>
       
          <a
                href="tel:+526141556904"
                className=" transition rounded-xl block  bt mx-auto md:mx-0 max-w-52 px-3.5 py-2.5 text-md font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                <PhoneIcon className='phone' />
                ¡LLAMAR AHORA!
              </a>
          </div>
        

</div>

<div className="  max-w-6xl mx-auto rounded-3xl text-gray-600    grid grid-cols-1 md:grid-cols-2 ">
   


          <div className=" md:ml-16 max-w-70 md:mt-20 mb-0  mx-auto  md:px-0 md:py-0  px-10 flex flex-col"> 
          <h1 className="font-bold text-4xl text-gray-900">Ambulancias cuentan con:</h1>
          <ul className="list-disc pl-10 pt-10 text-gray-600">
            <li >
            Oxígeno.</li>
            <li className="pt-2">
            Monitor de signos vitales.

</li>
<li className="pt-2">
DAE (Desfibrilador Automático Externo). 
</li>
<li className="pt-2">
Variedad de camillas.
</li>
<li className="pt-2">
Atención de paramédico o medico certificados.
</li>
<li className="pt-2">
Equipo de inmovilización.
</li>
<li className="pt-2">
Y con todo lo que la normatividad nos exige. 

</li>

          </ul>

          <p className='pt-10'> Al arribo de la unidad se valora el estado del paciente, se estabiliza y se traslada a hospital o clínica según lo prefiera el cliente. </p>
         
          </div>
      

          <div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto  md:px-5 md:py-0 pb-5  px-10 flex flex-col"> 
            
            <img src="./images/emer.jpeg" className="rounded-3xl"/>
          
          
          
          </div>
</div>
  



      
      
      
      </>
    )
  }
  