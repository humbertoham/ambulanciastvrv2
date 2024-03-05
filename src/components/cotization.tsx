import { PhoneIcon} from '@heroicons/react/24/outline'
export default function Cotizacion() {
  return (
<>  <div>
<div className=" min-h-96 rounded-3xl mul cot max-w-6xl my-8 mx-auto grid grid-cols-1 md:grid-cols-2 ">

    <div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto  md:px-0 md:py-0  flex flex-col">
      <h1 className="text-white font-bold md:text-6xl text-4xl md:text-left text-center">Ambulancias TVR</h1>
      <h2 className="text-white mt-6 font-bold md:text-left text-center md:text-4xl text-2xl">Estamos para ti</h2>
      <hr
  className=" h-1 border-t-0 bg-white md:max-w-32 my-8 " />
  <ul className="list-disc md:text-2xl text-xl text-white pl-0 md:mx-0 mx-auto md:pl-20">
    <li>Ambulancias desde $999 pesos.</li>
    <li>Respuesta Inmediata</li>
    <li>Atendemos Pacientes de COVID.</li>
    <li>Amplia Cobertura las 24 horas.</li>
  </ul>
  <a
                href="#"
                className=" rounded-xl block mt-16 bt mx-auto md:mx-0 max-w-52 px-3.5 py-2.5 text-md font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                <PhoneIcon className='phone' />
                ¡LLAMAR AHORA!
              </a>
    </div>

    <div className=' rounded-3xl bg-zinc-100 my-20  mx-4  md:mx-auto md:pt-12 pt-6 pb-12 px-8 flex flex-col'>

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


</>
  )
}
