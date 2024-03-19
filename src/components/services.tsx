'use client';

   
  export default function Services() {
    return (<>
   <div className="max-w-screen-xl mul  mx-auto p-5 sm:p-10 md:p-16">

   <h2 className="mb-4 text-3xl sm:text-4xl mx-6 text-black text-center font-bold">Servicios de Ambulancias</h2>
   <hr
  className="mb-16 h-1 border-t-0 bg-black max-w-16 mx-auto" />


<div className="grid grid-cols-1 md:grid-cols-2 col-auto lg:grid-cols-3 gap-10">

    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/trasladoslocales"></a>
        <div className="relative"><a href="/trasladoslocales">
                <img className="w-full"
                    src="./images/serv6.jpg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
          
        </div>
        <div className="px-6 py-4 bg-zinc-100 mb-auto">
            <a href="/trasladoslocales"
                className="font-bold text-2xl text-center text-gray-700 hover:text-orange-500 transition duration-500 ease-in-out inline-block mb-2">Traslados locales</a>
            <p className="text-gray-500 text-md">
            Traslados locales rápidos y seguros. Nuestro servicio de ambulancia garantiza un transporte eficiente con atención experta, priorizando la comodidad y seguridad del paciente.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/trasladoslocales"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>
          
        </div>
    </div>



    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/trasladoenincubadora"></a>
        <div className="relative"><a href="/trasladoenincubadora">
                <img className="w-full"
                    src="./images/serv2.jpg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 py-4 bg-zinc-100 mb-auto">
            <a href="/trasladoenincubadora"
                className="font-bold text-2xl text-center text-gray-700 hover:text-orange-500 transition duration-500 ease-in-out inline-block mb-2">Traslado en incubadora</a>
            <p className="text-gray-500 text-md">
                
Brindamos traslados en incubadora con especial atención pediátrica. Nuestro equipo altamente capacitado asegura un transporte seguro y cómodo para los recién nacidos, priorizando su bienestar.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/trasladoenincubadora"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>

            
        </div>
    </div>


    
    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/trasladosdecovid"></a>
        <div className="relative"><a href="/trasladosdecovid">
                <img className="w-full"
                    src="./images/serv1.jpeg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 bg-zinc-100 py-4 mb-auto">
            <a href="/trasladosdecovid"
                className="font-bold text-2xl text-center text-gray-700 hover:text-orange-500 transition duration-500 ease-in-out inline-block mb-2">Traslados de COVID</a>
            <p className="text-gray-500 text-md">
               
Traslados seguros de pacientes con COVID-19. Personal capacitado, medidas de bioseguridad y vehículos equipados para garantizar un transporte eficiente y cuidado durante la pandemia.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/trasladosdecovid"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>

           
        </div>
    </div>
    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/terapiaintensiva"></a>
        <div className="relative"><a href="/terapiaintensiva">
                <img className="w-full"
                    src="./images/serv3.jpg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 bg-zinc-100 py-4 mb-auto">
            <a href="/terapiaintensiva"
                className="font-bold text-2xl text-center text-gray-700 hover:text-orange-500 transition duration-500 ease-in-out inline-block mb-2">Terapia intensiva</a>
            <p className="text-gray-500 text-md">
                
Terapia intensiva de vanguardia. Nuestro equipo especializado proporciona cuidados críticos avanzados, utilizando tecnologías innovadoras para asegurar la mejor atención en situaciones médicas graves.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/terapiaintensiva"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>

           
        </div>
    </div>
    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/coberturadeeventos"></a>
        <div className="relative"><a href="/coberturadeeventos">
                <img className="w-full"
                    src="./images/serv4.jpeg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 bg-zinc-100 py-4 mb-auto">
            <a href="/coberturadeeventos"
                className="font-bold text-2xl text-center text-gray-700 hover:text-orange-500 transition duration-500 ease-in-out inline-block mb-2">Cobertura de eventos</a>
            <p className="text-gray-500 text-md">
               
Cobertura completa de eventos. Ofrecemos servicios profesionales para asegurar una experiencia sin contratiempos. Desde emergencias médicas hasta seguridad, garantizamos la tranquilidad de su evento.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/coberturadeeventos"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>

          
        </div>
    </div>
    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/trasladosforaneos"></a>
        <div className="relative"><a href="/trasladosforaneos">
                <img className="w-full"
                    src="./images/serv5.jpg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 bg-zinc-100 py-4 mb-auto">
            <a href="/trasladosforaneos"
                className="font-bold text-2xl text-center text-gray-700 hover:text-orange-500 transition duration-500 ease-in-out inline-block mb-2">Traslados foráneos</a>
            <p className="text-gray-500 text-md">
           
Garantizamos traslados foráneos seguros y eficientes. Nuestro servicio, respaldado por personal capacitado y vehículos equipados, proporciona comodidad y atención especializada para su tranquilidad en viajes de larga distancia.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/trasladosforaneos"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>

           
        </div>
    </div>
    <div className="rounded-3xl   overflow-hidden lg:col-start-2 bg-zinc-100 shadow-lg flex flex-col">
        <a href="/emergencias"></a>
        <div className="relative"><a href="/emergencias">
                <img className="w-full"
                    src="./images/serv7.jpeg"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 bg-zinc-100 py-4 mb-auto">
            <a href="/trasladosforaneos"
                className="font-bold text-2xl text-center text-gray-700 hover:text-orange-500 transition duration-500 ease-in-out inline-block mb-2">Emergencias </a>
            <p className="text-gray-500 text-md">
            EMERGENCIAS LAS 24 HORAS.


            </p><p className="text-gray-500 ">
Puede tener la confiaza que siempre habrá una ambulancia disponible para usted con personal capacitado y equipo de alta tecnología y con un tiempo aproximado de 15 minutos al arribo.
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/emergencias"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>

           
        </div>
    </div>
</div>

</div>
      </>
    );
  }