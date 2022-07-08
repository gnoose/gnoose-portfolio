import React, { useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { personalData } from '../core/data/base';

Modal.setAppElement("#root");

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  function toggleModal(index: number) {
    setIsOpen(!isOpen);
    setOpenIndex(index);
  }

  return (
    <div className="w-full bg-secondary py-100">
      <p className="text-25 text-light-500 font-light text-center mb-50">PROJECTS</p>
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-40 sm:gap-40 lg:gap-50">
          {personalData.projects.map((project, index) => (
            <div key={index} className="bg-white p-20 drop-shadow-xl" onClick={() => toggleModal(index)}>
              <div className="flex flex-col justify-center items-center">
                <img className="h-250 rounded-md overflow-hidden" src={project.thumbnail} alt={project.title}/>
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
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleModal(openIndex)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
      >
        <div className="w-screen md:w-800 p-20">
          <p className="text-20 text-center text-light-400 mb-30">{ personalData.projects[openIndex].title }</p>
          <Swiper
            spaceBetween={10}
            slidesPerView={personalData.projects[openIndex].images.length > 1 ? 1.2 : 1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            { personalData.projects[openIndex].images.map((path, index) => <SwiperSlide key={index}><img className="h-400 rounded-md overflow-hidden" src={path} alt="Image" /></SwiperSlide>) }
          </Swiper>
          <div className="mt-30 text-light-500">
            <p className="font-bold text-center mb-20">{ personalData.projects[openIndex].subTitle }</p>
            <p>{ personalData.projects[openIndex].content }</p>
          </div>
          <div className="flex justify-center mt-30">
            <button className="btn btn-mini btn-danger" onClick={() => toggleModal(openIndex)}>Close modal</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}