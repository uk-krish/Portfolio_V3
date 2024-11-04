import { motion } from "framer-motion"
import { Common } from "../config/Varients"



const Contact = () => {
    return (
        <section id='contact' className='flex mt-32 mb-10 '>
            <motion.div 
            variants={Common}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className='w-4/5 mx-auto mt-16 '>
                <div className='items-center space-y-2 text-center'>
                    <h1 className='md:text-2xl w-full text-lg text-c_white font-bold'><span className='mr-1 text-primary'>04.</span> Contact</h1>
                    <p>Feel free to reach out to me for any queries, collaborations, or just to say hi!</p>
                </div>

                <div className="justify-center flex p-3 mt-10  ">
                    <a
                        href="mailto:unnikrishnan131100@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="border-primary border-2 p-3 rounded-md text-primary hover:bg-primary hover:text-white font-bold delay-300 ease-in-out">
                        Say Hello
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact