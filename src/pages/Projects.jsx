import React from 'react'
import { projects } from '../Constants'
import CTA from '../components/CTA'
import { arrow } from "../assets/icons";
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className='text-slate-500 mt-2 leading-relaxed'>
          Welcome to the Projects section, where creativity meets innovation and where ideas take shape into tangible solutions. This space showcases a curated selection of my endeavors, each representing a journey of exploration, problem-solving, and craftsmanship. From software applications to design prototypes, these projects are more than just artifacts; they are a reflection of my passion for creating meaningful experiences and making a positive impact.
        </p>

        <p>
          Through these projects, I aim to demonstrate not only my technical skills but also my ability to conceptualize and execute ideas from inception to completion. Each project embodies a unique set of challenges and opportunities, and in navigating through them, I've honed my ability to adapt, collaborate, and iterate towards achieving excellence.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {
          projects.map((project) => (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={project.iconUrl} alt='threads' className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'> {project.name} </h4>
                <p className='mt-2 text-slate-500'>{project.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600'> Live Link </Link>
                  <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <hr className='border-slate-200' />
      <CTA />

    </section>
  )
}

export default Projects