import hero_image from "../assets/hero_image2.jpg"
import { FaBehance, FaLinkedinIn, FaDribbble, FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";



const HomeContainer = () => {
    return (
        <main className="relative w-5/6 mx-auto ">
            <section className="flex flex-col md:flex-row justify-between items-center my-0 md:my-24 relative  space-y-28 ">
                <div className="md:w-6/12  lg:mx-6 mx-24 space-y-6 mt-24 ">
                    <p>Hello, I am</p>
                    <h1 className="text-4xl lg:text-5xl font-bold">Unnikrishnan C</h1>
                    <p>I am a Full Stack Developer</p>
                    <p>Dedicated to crafting immersive digital experiences that captivate, engage, and inspire users worldwide.</p>
                    <div className="flex items-center">
                        <button className="bg-button text-black p-4 rounded-lg ">About me</button>
                        <div className="flex flex-row ml-10 text-2xl space-x-10  ">
                            <div className="hover:scale-125"><FaGithub /></div>
                            <div className="hover:scale-125"><FaEnvelope /></div>
                            <div className="hover:scale-125"><FaLinkedinIn /></div>
                            <div className="hover:scale-125"><FaBehance /></div>
                            <div className="hover:scale-125"><FaDribbble /></div>
                        </div>
                    </div>
                </div>

                <div className="w-[300px]  md:w-[400px]">
                    <img className="w-full z-20 rounded-full " src={hero_image} alt="" />
                </div> v
            </section>

        </main>
    )
}

export default HomeContainer;