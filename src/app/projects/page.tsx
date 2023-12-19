"use client";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Project = () => {
  const projectsList = [
    {
      name: "Short video automation",
      description:
        "A short content automation bot, which can generate short videos for youtube and instagram",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "",
        },
      ],
      FullDescriptionHTML: `I build this tool to automate the process of creating short videos for youtube shorts ,instagram reels and tiktok , a user just need to provide a interesting quora link , and then tool will automatically generate short video for it , i generated 30+ videos with this tool and uploaded those on instagram , and it turned out that i got more then 2 million views and tousand of likes comments , in future i will add more templates to it.`,
    },
    {
      name: "Nodejs whisper",
      description:
        "NodeJS Bindings for Whisper - the CPU version of OpenAI's Whisper, as initially crafted in C++ by ggerganov.",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "",
        },
      ],
      FullDescriptionHTML: `NodeJS Bindings for Whisper - the CPU version of OpenAI's Whisper, as initially crafted in C++ by ggerganov.`,
    },

    {
      name: "Chatgpt Telegram Bot",
      description:
        "A Telegram chatbot that can answer your questions, generate text-to-image and text-to-audio, correct grammar in English, and even send you random funny jokes.",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "",
        },
      ],
      FullDescriptionHTML: `NodeJS Bindings for Whisper - the CPU version of OpenAI's Whisper, as initially crafted in C++ by ggerganov.`,
    },
  ];

  const [selectedProject, setSelectedProject] = React.useState(projectsList[0]);
  return (
    <div className=" bg-black w-full  text-white  flex-col flex items-center   ">
      <div className=" w-full  h-[10%]  flex items-center justify-center ">
        <h1 className="text-2xl font-bold ">Projects</h1>
      </div>
      <div className="flex relative mt-10 h-full  flex-1    justify-between w-full">
        <div className="  h-full  w-full md:w-[60%] flex flex-1 items-center  flex-col ">
          <div className=" flex-1 text-white w-full flex flex-col gap-2 p-3 ">
            {projectsList.map((project) => {
              return (
                <ProjectCard
                  key={project.name}
                  onClick={() => {
                    console.log("clicked");
                    console.log(project);

                    setSelectedProject(project);
                  }}
                  project={project}
                />
              );
            })}
          </div>
        </div>

        <div className="flex-1 sticky top-3 mt-3 h-full overflow-y-auto  border   items-center     hidden md:flex md:flex-col py-7">
          <div className=" px-4">
            <h1 className="text-xl">Project Details</h1>
            <div className="flex flex-col gap-3 py-4">
              <h1 className="text-lg">{selectedProject?.name}</h1>
              <div>
                <p className="text-sm">
                  {selectedProject?.FullDescriptionHTML}
                </p>
              </div>
              <div>
                {selectedProject?.buttons.map((button) => {
                  return (
                    <Button key={button.name}>
                      <Link href={button.link}>{button.name}</Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
