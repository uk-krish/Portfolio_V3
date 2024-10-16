import { FaBehance, FaLinkedinIn, FaDribbble, FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";



const SocialMedia = () => {
    return (
        <div className="md:flex flex-col fixed hidden bottom-0  items-center ml-12 ">
            <div className="text-2xl flex flex-col">
                <div className="hover:scale-125 mb-5"><FaGithub /></div>
                <div className="hover:scale-125 mb-5"><FaEnvelope /></div>
                <div className="hover:scale-125 mb-5"><FaLinkedinIn /></div>
                <div className="hover:scale-125 mb-5"><FaBehance /></div>
                <div className="hover:scale-125 mb-5"><FaDribbble /></div>
            </div>
            <div className="w-[2px] h-24 bg-button"></div>
        </div>
    )
}

export default SocialMedia