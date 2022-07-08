import React from 'react';

import { personalData } from '../core/data/base';

export default function Skills() {
  return (
    <div className="w-full py-100 bg-light-500">
      <p className="text-25 text-light-50 font-light text-center mb-50">SKILLS</p>
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap justify-between">
          {personalData.skills.map((item, index) => (
            <div key={index} className="p-20 bg-light-400 rounded-xl m-10 overflow-hidden flex flex-col justify-center items-center">
              <img className="h-50 w-50 mb-10" src={item.icon} alt={item.name}/>
              <div className="text-center max-w-100">
                <p className="text-white truncate">{item.name}</p>
                <p className="text-white truncate">~ {item.age} years ~</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}