
import RickAndMorty from "../../assets/Projects/RickAndMorty.png"
import MoviesAPP from "../../assets/Projects/MoviesAPP.png"
import { FaGithub } from "react-icons/fa";


export const Projects = () => {
    return (
        <div className=" mb-12 h-full  bg-black text-white" name="projects" >

            <div className="max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full" >
                <div className=" items-center flex  flex-col xl:items-start">
                    <p className="text-4xl font-bold inline border-b-4 border-[#19ddd6]" >Projects</p>
                    <p className="py-4" >These are some of my projects<span className="text-[#19ddd6] text-2xl" >.</span></p>
                </div>
            </div>
            <div className="w-[50%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 text-center py-8  " >
                <div className="shadow-md shadow-[#19ddd6] hover:scale-110 duration-500 " >
                    <img className="mx-auto w-full h-[400px]" src={RickAndMorty} alt="" />
                    <div className="flex justify-center items-center  lg:flex-row flex-col gap-12 sm:gap-3 sm:pb-3 pb-0 " >
                        <p className="my-4" >RickAndMortyAPP </p>
                        <div className="p-6 mt-1 py-1 flex border-2 rounded-xl hover:bg-[#19ddd6] hover:text-black cursor-pointer " >

                            <a className="flex gap-1 " href="https://github.com/Jonybg/RickAndMortyAPP">
                                <FaGithub size={30} /><p className="mt-1" > Go GitHub</p>

                            </a>


                        </div>

                    </div>


                </div>
                <div className="shadow-md shadow-[#19ddd6] hover:scale-110 duration-500" >
                    <img className="mx-auto h-[400px] w-full" src={MoviesAPP} alt="" />
                    <div className="flex justify-center items-center  lg:flex-row flex-col gap-12 sm:gap-3 sm:pb-3 pb-0 " >
                        <p className="my-4" >Movies APP </p>
                        <div className="p-6 mt-1 py-1 flex border-2 rounded-xl hover:bg-[#19ddd6] hover:text-black cursor-pointer " >

                            <a className="flex gap-1 " href="https://github.com/Jonybg/MoviesAPP">
                                <FaGithub size={30} /><p className="mt-1" > Go GitHub</p>

                            </a>


                        </div>
                    </div>


                </div>

            </div>


        </div >
    )
}
