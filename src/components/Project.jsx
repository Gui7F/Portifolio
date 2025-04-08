import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectInfo = [
  {
    title: 'DevFinance$',
    shortDescription: 'Um aplicativo de finanças pessoais',
    description: 'DevFinance$ é um aplicativo de finanças pessoais que permite aos usuários gerenciar suas despesas e receitas de forma simples e eficiente. Com uma interface intuitiva, os usuários podem adicionar, editar e excluir transações financeiras, categorizando-as para melhor controle. Além disso, o aplicativo oferece gráficos e relatórios para ajudar os usuários a visualizar seus gastos e economias ao longo do tempo.',
    img: '../public/dev_finance.png',
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    img: 'https://via.placeholder.com/150',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3',
    img: 'https://via.placeholder.com/150',
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do projeto 4',
    img: 'https://via.placeholder.com/150',
  },
  {
    title: 'Projeto 5',
    description: 'Descrição do projeto 5',
    img: 'https://via.placeholder.com/150',
  },
  {
    title: 'Projeto 6',
    description: 'Descrição do projeto 6',
    img: 'https://via.placeholder.com/150',
  },
];

const Projects = () => {

  return (
    <div className="m-auto w-full h-full">
      <div className="2xl:grid 2xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-4 grid col-span-1"> 
        {ProjectInfo.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            img={project.img}
            shortDescription={project.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
