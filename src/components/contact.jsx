import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
export default function Contact() {



  return (
<>  <div>
<div className=" min-h-96 rounded-3xl bg-zinc-100 mul max-w-6xl my-8 mx-auto grid grid-cols-1 md:grid-cols-2 ">
    <div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto  md:px-0 md:py-0 py-10 flex flex-col">
        <div className='md:px-0'>
    <p className='text-blue-600  text-center md:text-left text-sm font-bold pb-5' >RESPUESTA INMEDIATA</p>

      <h1 className="text-black font-bold md:text-6xl text-4xl md:text-left text-center">Contácto</h1>
      <h2 className="text-gray-600 mt-6 font-normal md:text-left md:px-0 px-10 text-left md:text-lg text-md">Atendemos cualquier urgencia y emergencia en todo el área metropolitana de Chihuaha, contamos con equipo de alta especialidad, a demas de unidades de modelos recientes.</h2>
     
      <h2 className="text-gray-600 font-bold mt-6  md:text-left text-center md:text-lg text-md"><EnvelopeIcon className='bicon'/> Correo </h2>
      <h2 className="text-gray-800 mt-6 font-bold  md:text-left text-center md:text-3xl text-xl">tvremergenciasmedicas@hotmail.com</h2>
      <h2 className="text-gray-600 mt-6 font-bold  md:text-left text-center md:text-lg text-md">
      <PhoneIcon className='bicon'/>¡Llamanos!</h2>
<h2 className="text-gray-800 mt-6 font-bold md:text-left text-center md:text-3xl text-md">  614 155 6904</h2>
</div>
    </div>

    <div className=' rounded-3xl bg-white my-20  mx-4 shadow-lg  md:mx-auto md:pt-12 pt-6 pb-12 px-8 flex flex-col'>

    <h1 className='text-center font-semibold text-black text-4xl'> Solicita una cotización</h1>
    <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" flex-auto block  mx-auto mt-3 min-w-full rounded-full border-0 bg-white/5 px-5 py-2 text-black shadow-sm ring-1 ring-inset ring-blue first:focus:ring-blue focus:ring-inset  sm:text-sm sm:leading-6"
                placeholder="Email:"
              />
                <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className=" flex-auto block  mx-auto mt-3 min-w-full rounded-full border-0 bg-white/5 px-5 py-2 text-black shadow-sm ring-1 ring-inset ring-blue first:focus:ring-blue focus:ring-inset  sm:text-sm sm:leading-6"
                placeholder="Nombre:"
              />
                <input
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                className=" flex-auto block  mx-auto mt-3 min-w-full rounded-full border-0 bg-white/5 px-5 py-2 text-black shadow-sm ring-1 ring-inset ring-blue first:focus:ring-blue focus:ring-inset  sm:text-sm sm:leading-6"
                placeholder="Número:"
              />
               <textarea id="message" rows={4} className="flex-auto block  mx-auto mt-3 min-w-full rounded-xl border-0 bg-white/5 px-5 py-2 text-black shadow-sm ring-1 ring-inset ring-blue first:focus:ring-blue focus:ring-inset  sm:text-sm sm:leading-6" placeholder="Mensaje:"></textarea>
              <button
                type="submit"
                className=" rounded-xl mx-auto block min-w-full  mt-3 bt px-3.5 py-2.5 text-lg font-bold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Enviar
              </button>
    </div>

</div>

</div>
         
<div className="  max-w-6xl mx-auto  text-gray-600 grid grid-cols-1 md:grid-cols-2 ">
            
            <div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto  md:px-0 md:py-0  px-10 flex flex-col"> 
              
              <img src="./images/contact.jpeg" className="rounded-3xl"/>
            
            
            
            </div>
  
            <div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto  md:px-0 md:py-0  px-10 flex flex-col"> 
            <h1 className="font-bold text-4xl text-gray-900">Estamos para ti</h1>
            <hr
  className=" h-1 border-t-0 bg-black md:max-w-32 mt-8 " />
            
            <p className="my-10">En <span className='font-bold'>Ambulancias TVR</span>, nos enorgullece ser una empresa reconocida que atiende y brinda servicios pre-hospitalarios en toda el área metropolitana de Chihuahua. Con años de experiencia y un compromiso inquebrantable con la atención médica de calidad, nos hemos convertido en un pilar confiable en la comunidad cuando se trata de emergencias médicas y traslados de ambulancias.</p>
            </div>
      
  
  </div>
    

</>
  )
}
