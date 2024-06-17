import React, { useState, useEffect } from "react";
import JBPIC from "../../assets/Front/JB.png";
import { FaLongArrowAltRight, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-scroll";

export const Home = () => {
    const [typedText, setTypedText] = useState("");
    const textToType = " Jonathan Bello";
    const typingSpeed = 100;

    useEffect(() => {
        let currentIndex = 0;
        const typingTimer = setInterval(() => {
            if (currentIndex <= textToType.length) {
                setTypedText(textToType.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingTimer);

                document.getElementById("blinking-cursor").classList.add("blinking-cursor");
            }
        }, typingSpeed);

        return () => clearInterval(typingTimer);
    }, []);

    return (
        <div className="h-[750px] mx-auto w-1/2 mt-52" name="home">
            <div className="flex gap-20 items-center">
                <div className="hidden xl:flex">
                    <img src={JBPIC} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-5xl">
                        Hello, I'm
                        <span className="text-[#19ddd6]"> {typedText}</span>

                        <span id="blinking-cursor" className="text-white">|</span>
                    </h1>
                    <p className="text-lg text-white">
                        a <span className="text-[#19ddd6]">Front-End Developer</span> from Argentina, Buenos Aires.
                    </p>
                    <p className="text-lg text-white">
                        I'm passionate about creating seamless and engaging digital experiences. Let's connect and bring your web
                        projects to life!
                    </p>
                    <div>
                        <Link to="contact" smooth={true} duration={800}>
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
                        <div className="flex  gap-4">
                            <a className="xl:hidden flex " href="https://github.com/Jonybg" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-white hover:text-[#19ddd6] w-6 h-6" />
                            </a>
                            <a className="xl:hidden flex " href="https://www.linkedin.com/in/jonathan-bello-1427a9223/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-white hover:text-[#19ddd6] w-6 h-6" />
                            </a>
                            <a className="xl:hidden flex " href="mailto:jonathanbellogabriel@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MdEmail className="text-white hover:text-[#19ddd6] w-6 h-6" />
                            </a>


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
