import React, { useState } from "react";
import RickAndMorty from "../../assets/Projects/RickAndMorty.png";
import MoviesAPP from "../../assets/Projects/MoviesAPP.png";
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return (
        <div className="mb-12 h-full bg-black text-white" name="projects">
            <div className="max-w-[1000px] mx-auto p4 flex flex-col justify-center w-full h-full">
                <div className="items-center flex flex-col xl:items-start">
                    <p className="text-4xl font-bold inline border-b-4 border-[#19ddd6]">Projects</p>
                    <p className="py-4">These are some of my projects<span className="text-[#19ddd6] text-2xl">.</span></p>
                </div>
            </div>
            <div className="w-[50%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 text-center py-8">
                <ProjectCard
                    title="RickandMorty APP"
                    image={RickAndMorty}
                    githubLink="https://github.com/Jonybg/RickAndMortyAPP"
                />
                <ProjectCard
                    title="Movies APP"
                    image={MoviesAPP}
                    githubLink="https://github.com/Jonybg/MoviesAPP"
                />
            </div>
        </div>
    );
}

