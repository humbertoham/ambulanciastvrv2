
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function SubsBanner() {
  return (
    <div className="relative mul isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16  lg:grid-cols-1">
          <div className="">
            <h2 className="text-3xl font-bold tracking-tight text-center text-black sm:text-4xl">¡Suscribete a nuestras promociones!
</h2>
            <p className="mt-4 text-center text-lg leading-8 text-gray-700">
            Te enviaremos promociones.
            </p>
            <div className="mt-6 flex gap-x-4">
            
              <div className='mx-auto'>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" flex-auto sm:max-w-screen-lg mx-2 max-md:block  max-md:mx-auto max-md:mt-3  rounded-full border-0 bg-white/5 px-5 py-2 text-white shadow-sm ring-1 ring-inset ring-blue first:focus:ring-blue focus:ring-inset  sm:text-sm sm:leading-6"
                placeholder="Email:"
              />
                <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="flex-auto rounded-full max-md:block  max-md:mx-auto max-md:mt-3  border-0 mx-2 bg-white/5 px-5 py-2 text-white shadow-sm ring-1 ring-inset ring-blue focus:ring-blue focus:ring-inset  sm:text-sm sm:leading-6"
                placeholder="Nombre:"
              />
               <input
                id="phone "
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                className=" flex-auto max-md:block  max-md:mx-auto max-md:mt-3  rounded-full border-0 mx-2 bg-white/5 px-5 py-2 text-white shadow-sm ring-1 ring-inset ring-blue focus:ring-blue focus:ring-inset  sm:text-sm sm:leading-6"
                placeholder="Número:"
              />
              <button
                type="submit"
                className=" transition rounded-full max-md:block max-md:mx-auto max-md:mt-3 bt px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Subscribete
              </button>

            

              </div>
            </div>
          </div>
         
        </div>
      </div>

    </div>
  )
}
