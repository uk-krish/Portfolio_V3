import React from 'react'
import profile from '../assets/hero_image2.jpg'
import { motion } from 'framer-motion'
import { Common } from '../config/Varients'

const About = () => {

  return (
    <section
      id='about' name="about" className='flex mt-16'>
      <motion.div
        variants={Common}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className='lg:w-3/5  w-4/5 mx-auto mt-20'>
        <div className='flex items-center text-center '>
          <p className='md:text-2xl w-full text-lg text-c_white font-bold'><span className='mr-1 text-primary'>01.</span> About Me</p>
        </div>

        <div className='flex w-full  gap-10 mid:flex-row flex-col mt-20'>
          <img className='w-80 h-80 justify-center mx-auto object-fit ' src={profile} alt="" />
          <div className=''>
            Unlock the full potential of your web presence with a seasoned Frontend Developer deeply passionate about crafting captivating digital experiences. With expertise in HTML, CSS, JavaScript, and TypeScript, coupled with a flair for creating visually stunning interfaces, I am committed to delivering cutting-edge websites that leave a lasting impact. Together, let&apos;s transform your visions into reality and elevate your online journey to new heights of success.
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About