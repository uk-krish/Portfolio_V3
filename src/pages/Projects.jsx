import React from 'react'
import { projects_List } from '../config'
import noimage from "../assets/noimages.png"
const Projects = () => {
    return (
      <section id='projects' className='flex '>
          <div className='w-4/5 mx-auto mt-24 space-y-16'>
            <div className='items-center space-y-2 text-center'>
                <h1 className='md:text-2xl w-full text-lg text-c_white font-bold'><span className='mr-1 text-primary'>03.</span> Projects</h1>
                <p>Some of the projects I’ve worked on</p>
            </div>
            <div className='w-full  flex gap-16 flex-wrap mx-auto justify-center'>
                {
                    projects_List.map((m) => (
                        <div className='max-w-96 p-2 relative bg-[#0a1e29] ' key={m.id}>
                            <img className='w-full h-52' src={m.image ? m.image : noimage} alt="" />
                            <h1 className='mx-3 text-c_white mt-3 text-lg font-bold'>{m.title} </h1>
                            <p className='mx-3 mt-5 mb-10'>{m.describe} </p>
                            <div className='absolute flex items-center space-x-5 bottom-3 right-3'>
                                <a className='cursor-pointer hover:underline hover:scale-110 text-primary font-bold'>Demo</a>
                                <a className='cursor-pointer hover:underline hover:scale-110 text-primary font-bold'>	Code /&gt;</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
    )
}

export default Projects