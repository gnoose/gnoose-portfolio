import React from 'react';

import { personalData } from '../core/data/base';

export default function AboutMe() {
  return (
    <div className="pt-50 pb-100 container mx-auto">
      <p className="text-25 text-light-500 font-light text-center mb-30">ABOUT ME</p>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:basis-1/3">
          <div className="p-20 border text-light-75 shadow-inner shadow-light-100">
            <div className="flex justify-center items-center">
              <img className="h-250 rounded-md overflow-hidden" src="assets/images/avatar.png" alt="Avatar"/>
            </div>
            <div className="grid grid-cols-3 gap-6 space-y-10 px-20 pt-30">
              {personalData.frameworks.map((framework, index) => (<div className="flex justify-center items-center" key={index}>
                <img className="h-60 w-60" src={ "assets/images/frameworks/" + framework } alt={framework}/>
              </div>))}
            </div>
          </div>
        </div>

        <div className="lg:basis-2/3 pt-50 lg:pt-0 lg:pl-50">
          <div className="border text-light-100">
            <div className="w-full h-40 bg-light-75 flex items-center px-10">
              <div className="h-10 w-10 mx-5 rounded-full bg-primary"></div>
              <div className="h-10 w-10 mx-5 rounded-full bg-warning"></div>
              <div className="h-10 w-10 mx-5 rounded-full bg-danger"></div>
            </div>
            <div className="text-light-500 p-30">
              <h1 className="text-20">Hello 👋</h1>
              <br/>
              <p dangerouslySetInnerHTML={ {__html: personalData.introduction} } />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}