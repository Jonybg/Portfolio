import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const ProjectCard = ({ title, image, githubLink, vercelLink }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className=" z-1 shadow-md shadow-[#19ddd6] hover:scale-110 duration-500 cursor-pointer h-auto "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className="p-3">{title}</h2>
            <div>
                <img className={`mx-auto  h-[300px] w-full rounded-sm p-2 ${isHovered ? 'opacity-10' : 'opacity-100'}`} src={image} alt={title} />
                {isHovered && (
                    <div className="absolute top-0 left-0 w-full h-full gap-10 flex justify-center items-center">
                        <a className="flex gap-1" href={githubLink}>
                            <FaGithub size={50} className="text-white" />
                        </a>
                        <a className="flex gap-1" href={vercelLink}>
                            <FiExternalLink size={50} className="text-white" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
