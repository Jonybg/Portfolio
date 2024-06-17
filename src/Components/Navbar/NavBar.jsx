import { useState } from "react";
import Logo from "../../assets/Navbar/Logo 2.png"
import { IoMenu } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import 'animate.css';

export const NavBar = () => {


    const [menu, setmenu] = useState(false)

    const togglemenu = () => {
        setmenu(!menu)
    }




    return (

        // #19ddd6

        <>
            <div className="bg-black h-[80px] flex  justify-around items-center fixed top-0 w-full ">

                <div className="m-4 ">
                    <Link to="home" smooth={true} duration={500} offset={-220}>
                        <img className="h-[30px] cursor-pointer hover:scale-110 duration-100" src={Logo} alt="Logo" />
                    </Link>


                </div>
                <div className=" flex justify-between gap-10 m-4">


                    <ul className={`text-white sm:flex gap-5 nav-list cursor-pointer  ${menu ? "flex" : "hidden"} `} >
                        <li>
                            <Link to="home" smooth={true} duration={500} offset={-220} >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} offset={-220} >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500} offset={-220}  >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} offset={-220}  >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} offset={-100}  >
                                Contact
                            </Link>
                        </li>


                    </ul>

                    <div className="text-white cursor-pointer  ">
                        <IoMenu className="sm:hidden " onClick={togglemenu} style={{ fontSize: "1.5rem" }} />
                    </div>

                </div>



            </div >
            <div className="hidden xl:flex fixed flex-col top-[35%] left-0" >
                <ul className="flex flex-col gap-1" >
                    <li className=" p-1 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#19ddd6] "
                    >
                        <a className=" flex justify-between items-center w-full text-black-300" href="https://github.com/Jonybg">
                            GitHub <FaGithub className="m-3" size={30} />
                        </a>
                    </li>
                    <li className=" p-1 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#19ddd6] "
                    >
                        <a className="  flex justify-between items-center w-full text-black-300" href="https://www.linkedin.com/in/jonathan-bello-1427a9223/">
                            LinKedin <FaLinkedin className="m-3" size={30} />
                        </a>
                    </li>
                    <li className="p-1 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#19ddd6] "
                    >
                        <a className="flex justify-between items-center w-full text-black-300" href="mailto:jonathanbellogabriel@gmail.com">
                            Email <MdEmail className="m-3" size={30} />
                        </a>
                    </li>


                </ul>


            </div>


        </>

    )
}