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
  project,
}: {
  onClick?: () => void;
  project: Project;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col gap-3 border p-2"
    >
      <h1 className="text-lg">{project.name}</h1>
      <p className="text-sm">{project.description}</p>
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
