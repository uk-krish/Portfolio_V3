import React from 'react'
import hero_image from "../assets/hero_image2.jpg"

import Scrolldown from '../components/Scrolldown';


const Home = () => {
    return (
        <main className="relative w-3/4 m-auto mt-52 ">
            <div className='space-y-5'>
                <p className=''>Hello, I am</p>
                <h1 className="text-4xl lg:text-7xl text-[#ecf0ff] font-bold">Unnikrishnan C</h1>
                <p className='font-semibold text-3xl text-[#6EACDA]'>I am a Full Stack Developer</p>
                <p>Dedicated to crafting immersive digital experiences that captivate, engage, and inspire users worldwide.</p>
                <button className="bg-button text-black p-4 rounded-lg ">Say hello 👋</button>
            </div>
            <div className='mt-10 md:block hidden cursor-pointer'>
                <Scrolldown />
            </div>
        </main>
    )
}

export default Home