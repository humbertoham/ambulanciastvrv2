
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





export default function Mem() {
    return (
      <>
          
          <div className="bg-zinc-100   mul grid grid-cols-1 md:grid-cols-2 px-16 ">
              
          <div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto  md:px-0 md:py-0  flex flex-col">

          <p>COBERTURA COMPLETA PARA TI Y TU FAMILIA</p>
          <h1 className="font-bold text-5xl">Adquiere tu membresía</h1>




    </div>

    <div className=' rounded-3xl bg-zinc-100 mt-5  mx-4  md:mx-auto md:pt-12 pt-6 pb-12 px-8 flex flex-col'>



        <a href="/membresia" className="bg-orange-500 inline transition my-2 text-white max-w-60 font-bold mx-auto rounded-full text-center py-3 border-2 border-sky-600 border-solid hover:bg-orange-600  px-5">MEMBRESÍAS</a> <a href="https://api.whatsapp.com/send/?phone=%2B526141556904" className="wbg my-2 inline transition text-white max-w-60 font-bold rounded-full text-center py-3 px-3 mx-auto border-2 border-sky-600 border-solid"><FontAwesomeIcon className='w-6 h-6 inline px-1 py-1' icon={faWhatsapp} />ENVIAR UN WHATSAPP</a>


    
    </div>





</div>
  
      
      
      
      </>
    )
  }
  