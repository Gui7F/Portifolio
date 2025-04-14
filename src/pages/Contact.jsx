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
<SpotlightCard className="custom-spotlight-card 2xl:w-[60%] w-[90%] m-auto h-auto 2xl:m-auto mb-[100px]" spotlightColor="rgba(147, 167, 180, 0.5)">
  <div className="text-slate-300 flex justify-between w-full h-full">
    
    {/* Texto */}
    <div className="2xl:w-2/3 pr-8 lg:w-[80%] max-[900px]:hidden max-[480px]:hidden">
      <h1 className="2xl:text-5xl text-2xl mb-20">Entre em contato comigo</h1>
      <p className="2xl:text-[22px] mb-40 md:w-[80%] lg:text-[18px]"><span>"</span> Vamos trabalhar juntos, cooperar em projetos com confiança e honestidade, com codigo limpo e bem estruturado, com entrega de valores e resolução de problemas para atingir nosso objetivos e realizar sonhos. <span>"</span></p>
      <h2 className='2xl:text-2xl lg:text-[18px]'>Rede Social</h2>
      <div className="flex space-x-4 mt-4 m-auto text-center text-3xl">
        <a href="https://github.com/Gui7F" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/gui-web-developer/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://wa.me/5516988287084?text=Ol%C3%A1%20Gui%2C%20tudo%20bem%3F" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
    
    {/* Formulário */}
    <div className="2xl:w-1/3 lg:w-[40%] md:w-[75%] m-auto w-full">
      <h1 className='2xl:text-3xl lg:text-[18px] mb-7'>EMAIL</h1>
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