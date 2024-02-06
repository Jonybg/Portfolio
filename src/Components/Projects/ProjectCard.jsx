import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, image, githubLink }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="shadow-md shadow-[#19ddd6] hover:scale-110 duration-500 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className="p-3">{title}</h2>
            <div className="relative">
                <img className={`mx-auto h-[400px] w-full ${isHovered ? 'opacity-50' : 'opacity-100'}`} src={image} alt={title} />
                {isHovered && (
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <a className="flex gap-1" href={githubLink}>
                            <FaGithub size={50} className="text-white" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};
