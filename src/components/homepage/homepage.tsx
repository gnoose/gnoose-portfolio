import React, { useMemo } from 'react';
import Typical from 'react-typical';

import { personalData } from '../core/data/base';

export default function HomePage() {

  const roleList = useMemo(() => personalData.roles.map((role) => [role.toUpperCase(), 2500]).flat(), []);

  return (
    <div className="w-full h-screen bg-secondary flex flex-col justify-center items-center">
      <div>
        <div>
          <img className="h-250" src="assets/images/engineer.svg" alt="Engineer Avatar" />
        </div>
        <div className="text-center my-20">
          <p className="text-40 font-bold text-light-400">{ personalData.name }</p>
        </div>
      </div>
      <Typical className="text-25 font-extralight text-light-500 opacity-80" steps={roleList} loop={100} />
    </div>
  )
}