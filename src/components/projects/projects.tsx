import React from 'react';

import { personalData } from '../core/data/base';

export default function Projects() {
  return (
    <div className="w-full bg-secondary py-100">
      <p className="text-25 text-light-500 font-light text-center mb-50">PROJECTS</p>
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 sm:gap-40 lg:gap-50">
          {personalData.projects.map((project, index) => (
            <div key={index} className="bg-white p-20 drop-shadow-xl">
              <div className="flex flex-col justify-center items-center">
                <img className="w-250 h-250 rounded-md overflow-hidden" src={project.thumbnail} alt={project.title}/>
                <div className="bg-light-400 px-15 rounded-b-lg">
                  <span className="text-white">{project.year}</span>
                </div>
              </div>
              <div className="px-20 pt-30">
                <p className="text-20 text-center text-light-400">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}