import React from 'react';

import { personalData } from '../core/data/base';

export default function ContactUs() {
  return (
    <div className="w-full pt-50 pb-20 bg-light-500">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          {personalData.contactUs.map((item, index) => (
            <div key={index} className="m-10" title={item.link}>
              <a href={item.link}><img className="w-30 h-30 rounded-md overflow-hidden" src={item.icon} alt="Contact US"/></a>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white text-center text-12">Copyright © Jie Li</p>
    </div>
  )
}