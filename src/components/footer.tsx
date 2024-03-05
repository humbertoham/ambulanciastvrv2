

export default function Footer(){
    return(
        <>
        <footer className="bg-zinc-100 mul grid grid-cols-3 px-16">


  <div className="py-16 sm:px-6 col-span-3 px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500"> Contáctanos </span>

          <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
          614 155 6904
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <li>tvremergenciasmedicas@hotmail.com</li>
          <li>Lunes a Domingo: 24 hrs.</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Servicios</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Traslados locales </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Traslado en incubadora </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Traslados de COVID </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Terapia intensiva</a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Cobertura de eventos </a>

            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Traslados foráneos </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Compañía</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Nosotros </a>
            </li>

          
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
      

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2024. AmbulanciasTVR. Derechos Reservados.
        </p>
      </div>
    </div>
  </div>
</footer>
        
        
        </>
    )
}