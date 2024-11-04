import React from 'react'
import hero_image from "../assets/hero_image2.jpg"
import Scrolldown from '../components/Scrolldown';
import CircleTop from '../components/CircleTop';
import CircleBottom from '../components/CircleBottom';
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-scroll';
import { socialMedia } from '../config';
import { delay, motion } from 'framer-motion';
import { childVariants, fadeInVariant } from '../config/Varients';

const Home = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = "../UNNIKRISHNAN C.pdf";
        link.download = "Unnikrishnan C Resume";
        link.click();
    }

    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <main className="md:w-3/5 w-4/5 m-auto ">
            <CircleTop />
            <CircleBottom />
            <motion.section
                variants={fadeInVariant}
                initial="hidden"
                animate="visible"
                // whileInView="visible"
                // viewport={{ once: false, amount: 0.7 }} 
                className='w-full md:my-56 my-40'>
                <div className='space-y-5'>
                    <motion.p variants={childVariants} className=''>Hello, I am</motion.p>
                    <motion.h1 variants={childVariants} className="text-3xl lg:text-7xl text-c_white font-bold">Unnikrishnan C</motion.h1>
                    <motion.p variants={childVariants} className='font-semibold md:text-3xl text-2xl text-[#6EACDA]'>I am a Full Stack Developer</motion.p>
                    <motion.p variants={childVariants} >Dedicated to crafting immersive digital experiences that captivate, engage, and inspire users worldwide.</motion.p>
                </div>
                <motion.div variants={childVariants}>
                    <div className="text-2xl flex md:flex-row flex-col md:space-x-10   my-12 ">
                        <button onClick={handleDownload} className="bg-button hover:bg-primary hover:text-button text-black p-4 flex items-center text-base max-w-max rounded-lg text-bold ">Download Resume
                            <MdOutlineFileDownload className='mx-2' />
                        </button>
                        <section className='flex space-x-5 items-center md:mt-0 mt-7'>
                            {
                                socialMedia.map((e) => (
                                    <div
                                        onClick={() => openLink(e.link)}
                                        className='hover:scale-125  cursor-pointer' key={e.id}>
                                        {e.logo}
                                    </div>
                                ))
                            }
                        </section>
                    </div>
                    <Link to={"about"} className='mt-10  cursor-pointer'>
                        <Scrolldown />
                    </Link>
                </motion.div>
            </motion.section>
        </main>
    )
}

export default Home