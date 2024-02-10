import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  githubLink: string;
  buttons: {
    name: string;
    link: string;
  }[];
  FullDescriptionHTML: string;
}

const ProjectCard = ({
  onClick,
  selectedProject,
  project,
}: {
  onClick?: () => void;
  project: Project;
  selectedProject?: Project;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer py-6 flex-col gap-3  ${
        selectedProject?.name === project.name
          ? "border border-black"
          : "border"
      } p-2`}
    >
      <h1 className="text-lg text-[#212121]">{project.name}</h1>
      <p className="text-sm text-[#616161]">{project.description}</p>
      <div>
        {project?.buttons.map((button) => {
          return (
            <Button key={button.name}>
              <Link href={button.link}>{button.name}</Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
