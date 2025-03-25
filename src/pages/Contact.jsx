import React from 'react'
// components
import SpotlightCard from '../components/SpotlightCard'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'



const Contact = () => {
  return (
<SpotlightCard className="custom-spotlight-card w-[60%] m-auto h-auto" spotlightColor="rgba(147, 167, 180, 0.5)">
  <div className="text-slate-300 flex justify-between w-full h-full">
    
    {/* Texto */}
    <div className="w-2/3 pr-8">
      <h1 className="text-5xl mb-20">Entre em contato comigo</h1>
      <p className="text-2xl mb-40"><span>"</span>Vamos trabalhar juntos, cooperar em projetos com confiança e honestidade, com codigo limpo e bem estruturado, com entrega de valores e resolução de problemas para atingir nosso objetivos e realizar sonhos. <span>"</span></p>
      <h2 className='text-2xl'>Rede Social</h2>
      <div className="flex space-x-4 mt-4 m-auto text-center text-3xl">  
        <button><FontAwesomeIcon icon={faGithub}/></button>
        <button><FontAwesomeIcon icon={faLinkedinIn}/></button>
        <button><FontAwesomeIcon icon={faWhatsapp}/></button>
      </div>
    </div>
    
    {/* Formulário */}
    <div className="w-1/3">
      <h1 className='text-3xl mb-7'>Email</h1>
      <label className='text-sm'>NOME</label>
      <input type="text" required className="block w-full mb-4 bg-neutral-800 focus:outline-none rounded-md p-1"/>
      <label className='text-sm'>EMAIL</label>
      <input type="email" required className="block w-full mb-4 bg-neutral-800 focus:outline-none rounded-md p-1"/>
      <label className='text-sm'>MENSAGEM</label>
      <textarea className="block w-full h-[250px] mb-4 bg-neutral-800 focus:outline-none rounded-md p-1"></textarea>
      <button type="submit" className='bg-neutral-800 px-4 py-1 rounded-md'>Enviar</button>
    </div>
  </div>
</SpotlightCard>

  )
}

export default Contact