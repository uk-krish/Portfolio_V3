import { FaBehance, FaLinkedinIn, FaDribbble, FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { socialMedia } from "../config";
import { motion } from "framer-motion";
import { Common } from "../config/Varients";

const SocialMedia = () => {
    const openLink = (url) => {
        window.open(url, "_blank");
    };
    return (
        <motion.div
        variants={Common}
        initial="hidden"
        animate="visible"
         className="md:flex flex-col fixed hidden bottom-0  items-center ml-12 ">
            <div className="text-2xl flex flex-col">
                {
                    socialMedia.map((e) => (
                        <div
                            onClick={() => openLink(e.link)}
                            className="hover:scale-125 cursor-pointer mb-5" key={e.id}>
                            {e.logo}
                        </div>
                    ))
                }
            </div>
            <div className="w-[2px] h-24 bg-button"></div>
        </motion.div>
    )
}

export default SocialMedia