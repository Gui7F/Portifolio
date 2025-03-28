import React from 'react'
import ShinyText from '../components/ShinyText'
import Project from '../components/Project'

const Projects = () => {
  return (
    <div className='m-auto 2xl:w-3/4 w-[90%] 2xl:m-auto mb-[200px]'>
      <h1 className='text-5xl text-center mb-10'><ShinyText text={"Projetos"} className=''/></h1>
      <div>
        <Project/>
      </div>
    </div>
  )
}

export default Projects