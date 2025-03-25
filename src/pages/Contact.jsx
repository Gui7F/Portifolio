import React from 'react'
import SpotlightCard from '../components/SpotlightCard'

const Contact = () => {
  return (
<SpotlightCard className="custom-spotlight-card w-[60%] m-auto h-[500px]" spotlightColor="rgba(147, 167, 180, 0.5)">
  <div className="text-slate-300 flex justify-between w-full h-full">
    
    {/* Texto */}
    <div className="w-2/3 pr-8">
      <h1 className="text-5xl">Entre em contato comigo</h1>
      <p className="text-2xl">Vamos trabalhar juntos, cooperar em projetos e viver a tecnologia</p>
      <div className="flex space-x-4 mt-4">
        <button>GitHub</button>
        <button>LinkedIn</button>
        <button>Whatsapp</button>
      </div>
    </div>
    
    {/* Formulário */}
    <div className="w-1/3">
      <label>Nome</label>
      <input type="text" required className="block w-full mb-4"/>
      <label>Email</label>
      <input type="text" required className="block w-full mb-4"/>
      <label>Mensagem</label>
      <textarea className="block w-full h-[250px] mb-4"></textarea>
    </div>
  </div>
</SpotlightCard>

  )
}

export default Contact