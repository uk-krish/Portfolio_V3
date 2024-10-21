import React from 'react'
import { Tech_logo } from '../config'

const Skills = () => {
    return (
        <section id='skills' className='flex'>
            <div className='w-3/5 mx-auto mt-16 space-y-16 '>
                <div className='items-center space-y-2 text-center'>
                    <h1 className='md:text-2xl w-full text-lg text-c_white font-bold'><span className='mr-1 text-primary'>02.</span> Tech Stacks</h1>
                    <p>Tools, Frameworks and Languages I work with</p>
                </div>
                <div className='mt-5 items-center mx-auto flex md:flex-row flex-col flex-wrap gap-10 justify-center'>
                    {
                        Tech_logo.map((i) => (
                            <div className='relative before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-primary before:-mx-1 hover:scale-110  w-max bg-[#0a1e29] p-2 flex items-center ' key={i.id}>
                                <img className='w-6 ml-2' src={i?.logo} alt="" />
                                <p className='ml-2'>{i.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div></section>
    )
}

export default Skills