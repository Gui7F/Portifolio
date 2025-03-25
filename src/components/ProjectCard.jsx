import React from 'react';

const ProjectCard = ({ title, description, img }) => {
  return (
    <div className=" h-[350px] bg-black text-slate-300 rounded-lg shadow-2xl flex flex-col items-center p-4 border border-neutral-600  shadow-slate-300 ">
      <div className='w-full h-full overflow-hidden'>
      <img src={img} alt={title} className="w-full h-auto rounded-md object-cover" />
      </div>
      
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
};

export default ProjectCard;
