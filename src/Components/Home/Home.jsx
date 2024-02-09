import JBPIC from "../../assets/Front/JB.png";
import { FaLongArrowAltRight, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";


export const Home = () => {
    return (
        <div className="h-[750px] mx-auto w-1/2 mt-52" name="home" >
            <div className="flex gap-20 items-center">
                <div className="hidden xl:flex">
                    <img src={JBPIC} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-5xl">
                        Hello, I'm <span className="text-[#19ddd6]">Jonathan Bello</span>
                    </h1>
                    <p className="text-lg text-white">
                        a <span className="text-[#19ddd6]">Front-End Developer</span> from Argentina, Buenos Aires.
                    </p>
                    <p className="text-lg text-white">
                        I'm passionate about creating seamless and engaging digital experiences. Let's connect and bring your web projects to life!
                    </p>
                    <div>
                        <Link to="contact" smooth={true} duration={800} >
                            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#19ddd6] hover:border-[#19ddd6] hover:text-black ">
                                Contact me
                                <span className="group-hover:rotate-90 duration-300">
                                    <FaLongArrowAltRight className="ml-3" />
                                </span>
                            </button>
                        </Link>

                    </div>
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-2">Connect with me</h2>
                        <div className="flex gap-4">
                            <a href="https://twitter.com/Jonybello1" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-white hover:text-[#19ddd6] w-6 h-6" />
                            </a>
                            <a href="https://www.facebook.com/cranckk" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-white hover:text-[#19ddd6] w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/jony_bello" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-white hover:text-[#19ddd6] w-6 h-6" />
                            </a>
                            <a href="https://wa.me/1157745108" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-white hover:text-[#19ddd6] w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
