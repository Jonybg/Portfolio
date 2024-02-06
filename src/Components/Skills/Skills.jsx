import HTML from "../../assets/Skills/html.png"
import CSS from "../../assets/Skills/css.png"
import JS from "../../assets/Skills/javascript.png"
import NODE from "../../assets/Skills/node.png"
import REACT from "../../assets/Skills/react.png"
import TAILWIND from "../../assets/Skills/tailwind.png"
import GITHUB from "../../assets/Skills/github.png"






export const Skills = () => {



    return (

        <div className=" mb-12 h-full  bg-black text-white" name="skills" >
            <div className="max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full" >
                <div className=" items-center flex  flex-col xl:items-start">
                    <p className="text-4xl font-bold inline border-b-4 border-[#19ddd6]" >Skills</p>
                    <p className="py-4" > These are the technologies I've worked with<span className="text-[#19ddd6] text-2xl" >.</span></p>

                </div>

                <div className="w-full  grid grid-cols-2 xl:grid-cols-6 sm:grid-cols-3 gap-4 text-center py-8 shadow-md shadow-[#19ddd6] " >
                    <div className=" hover:scale-110 duration-500" >
                        <img className="w-6 mx-auto" src={HTML} alt="" />
                        <p className="my-4" >HTML</p>
                    </div>
                    <div className=" hover:scale-110 duration-500" >

                        <img className="w-6 mx-auto" src={CSS} alt="" />
                        <p className="my-4" >CSS</p>
                    </div>
                    <div className=" hover:scale-110 duration-500" >
                        <img className="w-6 mx-auto" src={JS} alt="" />
                        <p className="my-4" >JS</p>
                    </div>
                    <div className=" hover:scale-110 duration-500" >
                        <img className="w-8 mx-auto" src={GITHUB} alt="" />
                        <p className="my-4" >GIT HUB</p>
                    </div>
                    <div className=" hover:scale-110 duration-500" >
                        <img className="w-6 mx-auto" src={TAILWIND} alt="" />
                        <p className="my-4" >TAILWIND</p>
                    </div>
                    <div className=" hover:scale-110 duration-500" >
                        <img className="w-6 mx-auto" src={NODE} alt="" />
                        <p className="my-4" >NODE</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
