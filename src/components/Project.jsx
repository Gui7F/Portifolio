import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectInfo = [
  {
    title: 'DevFinance$',
    shortDescription: 'Um aplicativo de finanças pessoais',
    description: 'DevFinance$ é um aplicativo de finanças pessoais que permite aos usuários gerenciar suas despesas e receitas de forma simples e eficiente. Com uma interface intuitiva, os usuários podem adicionar, editar e excluir transações financeiras, categorizando-as para melhor controle. Além disso, o aplicativo oferece gráficos e relatórios para ajudar os usuários a visualizar seus gastos e economias ao longo do tempo.',
    img: '/dev_finance.png',
    tag : ['JavaScript', 'CSS', 'HTML']
  },
  {
    title: 'Site Leana Beraldo',
    shortDescription: 'Site para psicologa Leana Beraldo',
    description: 'Site para psicologa Leana Beraldo, foi freelancer que fiz para ela captar clientes, o site foi desenvolvido utilizando React/JavaScript/Tailwind, o projeto conta com serviço de email por demanda menu de navegação e responsividade, além de otimizações SEO, foi um otimo trabalha neste site me ajudou aprimorar meus conhecimentos em varios cenários que enfrentei durante o desenvolvimmento.',
    img: '/site_leana.png',
    tag: ["React", "JavaScript", "Tailwind", "HTML","Freelancer"]
  },
  {
    title: 'Spotify Clone',
    shortDescription: 'Um clone do Spotify(Full-Stack)',
    description: 'Spotify Clone é um projeto que visa replicar a interface e funcionalidades básicas do popular serviço de streaming de música, Spotify. O clone foi desenvolvido utilizando tecnologias modernas como React/CSS/JavaScript/Express/Axios e Banco de dados MongoDB, proporcionando uma experiência de usuário semelhante à original. Os usuários podem navegar por playlists, álbuns e artistas, além de reproduzir músicas em uma interface responsiva e atraente.',
    img: '/spotify_clone.png',
    tag: ["React", "JavaScript", "Express", "MongoDB", "CSS", "Axios"]
  },
  {
    title: 'Avanti E-commerce',
    shortDescription: 'Uma Landing Page para um e-commerce',
    description: 'Avanti E-comerce é uma landing page projetada como parte de um teste tecnico, proposto pela empresa Avanti Experts E-comerce, o teste consitiu e desenvolver uma landing page utilizando apenas JavaScript/HTML/CSS, foi um projeto que serviu de muito aprendizado pois consegui aprimorar muito minha compreensão sobre box model e tambem sobre manipulação de DOM, e por fim afir minha lógica de programação, o projeto foi desenvolvido em 7 dias.',
    img: '/avanti_e-commerce.png',
    tag: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: 'Blog Games',
    shortDescription: "Um blog sobre jogos(Full-Stack)",
    description: 'Blog Games, foi projeto desenvolvido em meu curso de React, onde criei um aplicação como desafio, a aplicação conta com serviços de back-end Firebase, as funcionalidades consiste em criação de cadastro, login de usuário e validação das rotas e formulários em geral, tambem conta com uma Dashboard para gerenciamento dos posts dos usuários da aplicação, foi um projeto muito legal de desenvolver e me serviu como aprendizado para integrações com serviços Firebase',
    img: '/game_blog.png',
    tag: ["React", "JavaScript", "Firebase", "CSS"]
  },
  {
    title: 'GitHub Profiel Finder',
    shortDescription:'Um buscador de perfils GitHub',
    description: 'GitHub Profiel Finder, foi outro projeto proposto por Avanti Experts E-comerce como teste tecnico, o projeto foi desenvolvido utilizando React/Tailwind/Octokit, com o Octokit (Biblioteca Oficial GitHub) consegui conectar e consumir a API(REST) do GitHub, e com isso atraves do nome do usuário do GitHub requistar a API informações sobre o usuário como nome e foto de perfil e tambem sua BIO, o projeto me serviu de muito aprendizado.',
    img: '/github_profiel_finder.png',
    tag: ["React", "JavaScript", "Tailwind", "Octokit"]
  },
  {
    title: 'Audio Book',
    shortDescription:'Um audio book de Dom Casmurro',
    description:'Audio Book, foi um projeto desenvolvido com JavaScript/HTML/CSS, este projeto foi de suma importância para mim compreender formas de lidar com manipulações de DOM de forma de dinâmica e tambem ajudou muito aprimorar minha lógica de programação em eventos de click, o projeto conta o livro completo e todos capitulos gravados por iniciativa volutárias então o audio vai variar em cada gravação',
    img: '/audio_book.png',
    tag: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: 'Apple Watch',
    shortDescription:'Uma Landing Page (Desktop)',
    description: 'Apple Watch Landing Page, é uma projeto construido com JavaScript/HTML/CSS, foi um projeto desenvolvido e idealizado para Desktop por isso não conta com Resposvidade, porem é um projeto que faz exatamente oque foi proposto fazer cria uma pagina de vendas dos Apple Watch Clone, este projeto tambem me ajudou aprender lógica e manipulação do DOM, foi muito util ter esta experiência.',
    img: '/aple_watch.png',
    tag: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: 'Em Breve',
    shortDescription:'Em breve teremos novos Projetos.',
    description: 'Em breve teremos novos projetos Full-Stack, com integração de back-end e front-end, com tecnologias como Express/MongoDB/Prisma/PostGreSQL, e tambem com integração de API REST, e tambem com serviços de autenticação como Auth0/Firebase/JWT/Bcrypt, e tambem com serviços de deploy como Vercel/Render/AWS, e por fim com serviços de CI/CD como GitHub Actions.',
    img: '/em_breve.png',
    tag: ["Technology", "Coming Soon", "Full-Stack"]
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
            tag={project.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
