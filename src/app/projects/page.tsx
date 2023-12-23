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
    {
      name: "askme",
      description:
        "askme is a command-line interface (CLI) tool to chat with your PDF data. It can perform operations such as adding PDFs to a vector DB for similarity searches etc.",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/askme",
        },
      ],
      FullDescriptionHTML: `So, I've created a simple CLI tool to chat with PDF data. This was my first project in Go. I'm familiar with JS, Python and a bit of Rust, but I had no idea about Go concepts. So, I built this tool and learned a lot about Go along the way. Langchaingo makes it easy to interact with vector databases and the OpenAI APIs.`,
    },
    {
      name: "DocumentAI",
      description:
        "A app to extract structured data from a pdf for any other file",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/Document-AI",
        },
      ],
      FullDescriptionHTML: `This tool allows you to extract information from a PDF. You just need to define a schema, provide a PDF, and the tool will extract the information and return a proper JSON with all the required details. This can be a good opensource alternative to Google's DocumentAI.
      `,
    },
    {
      name: "video-transcoding-service",
      description: "A cloud video transcoding service",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/video-transcoding-service",
        },
      ],
      FullDescriptionHTML: `A video transcoding service built with AWS Lambda, ECS, and FFmpeg for editing audio and video files programmatically. This service can be used to convert video files to different formats, and more. It can be used as a backend for a course app or a video sharing app.`,
    },
    {
      name: "LaunchKit",
      description:
        "A Nextjs template to ship your product fast, It can save more then 1 day of a dev who want to ship a product fast",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/LaunchKit",
        },
      ],
      FullDescriptionHTML: `This Next.js 13.5 template to Ship fast and is designed to eliminate the tedious and time-consuming setup tasks that most developers find boring. It provides all the essential configurations and integrations you need to kickstart your next Product. With this template, you can bypass the initial hurdles and rapidly develop your product, getting it ready for launch in no time. Some of the features include: Payment Processing with , Authentication (Google and email logins) , Database setup, Email integration and more.
      `,
    },
    {
      name: "gitscan",
      description:
        "GitScan: A powerful tool for examining and searching through all details and history of a Git repository.",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/gitscan",
        },
      ],
      FullDescriptionHTML: `GitScan is a simple but very useful tool for looking through all the details of a Git repository. This can be a big help if you need to check and want to search anything in your all previous commits.
      The script uses Git and Unix commands to look through everything in your Git repository and print out details of all Git objects.

Objects in Git include things like commit objects, where details about changes are stored, blob objects, which store file data, and tree objects, which are like directories.


      `,
    },
    {
      name: "Task-management",
      description:
        "TaskMate is a task management application that allows users to create, manage, and organize tasks efficiently. This repository contains the source code for both the frontend (client) and backend (server) of the application.",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/Task-management",
        },
      ],
      FullDescriptionHTML: `TaskMate is a task management application that allows users to create, manage, and organize tasks efficiently. This repository contains the source code for both the frontend (client) and backend (server) of the application. Features include: User authentication with jwt access and refresh token.
      Create new tasks with a title, description, status, and priority.
      View a list of tasks and their details.
      Edit and update existing tasks.
      Filter tasks by various criteria, such as status, priority, and completion.
      Sort tasks by date.
      Upload and update avatar images
      Data cache so that backend can server some frequently visited routes values faster.
      


      `,
    },
    {
      name: "snake-game",
      description: "A snake game",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/snake-game",
        },
      ],
      FullDescriptionHTML: `A snake game built with React and TailwindCSS. This is a simple game that can be played in the browser.

      `,
    },
    {
      name: "chat-with-website",
      description: "A app where user can chat with a given website",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/chat-with-website",
        },
      ],
      FullDescriptionHTML: `A app where user can chat with a given website, In this app i used vector database to store the data of website and then used it to answer the questions of user.
      using openai ada model for embedding.

      `,
    },
    {
      name: "chat-with-pdf",
      description:
        "This is a web app where user can talk with there pdf , just need to run few scripts to ingest there pdf, and then with web interface they can talk with pdf      ",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/chat-with-pdf",
        },
      ],
      FullDescriptionHTML: `This is a web app where user can talk with there pdf , just need to run few scripts to ingest there pdf, and then with web interface they can talk with pdf

      `,
    },
    {
      name: "amazon-Linux-wkhtmltopdf-layer",
      description: "This is a layer of wkhtmltopdf binary on amazon linux",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/amazon-Linux-wkhtmltopdf-layer",
        },
      ],
      FullDescriptionHTML: `This is a layer of wkhtmltopdf binary on amazon linux, anyone can use this layer for there own usecase.
      For my usecase i used this layer for my nodejs aws lambda function.
      wkhtmltopdf is an open source (LGPLv3) command line tool to render HTML into PDF using the Qt WebKit rendering engine. These run entirely "headless" and do not require a display or display service.
      `,
    },
    {
      name: "Public-Key-Cryptography",
      description:
        "This is a basic project to show how public key cryptography work By using Elliptic Curve Digital Signatures",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/Public-Key-Cryptography",
        },
      ],
      FullDescriptionHTML: `public-key cryptography
      cryptography based on two keys: one public key, one private key. This allows the use of digital signatures, triggering a variety of use cases. For one, a user can cryptographically sign a message and send it to others. Anyone will be able to verify the integrity and sender of the message, all without revealing the sender's private key. ECDSA is an algorithm that is based on public-key cryptography.
      
      This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.
      
      However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.
      `,
    },
    {
      name: "post-management      ",
      description:
        "This is a role base Post management project , creators can create posts and then send that for review to admin,then admin can reject and approve them and public can see approved post",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/post-management",
        },
      ],
      FullDescriptionHTML: `This is a role base Post management project , creators can create posts and then send that for review to admin,then admin can reject and approve them and public can see approved post
      `,
    },
    {
      name: "web-crawler",
      description: "Website crawler tool",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/web-crawler",
        },
      ],
      FullDescriptionHTML: `A command line tool to crawl a website
      `,
    },
    {
      name: "wallet-server-authentication",
      description:
        "A example of how to use crypto wallet for authentication with servers",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/wallet-server-authentication",
        },
      ],
      FullDescriptionHTML: `A example of how to use crypto wallet for authentication with servers
      `,
    },
    {
      name: "draw-ai",
      description: "A tool to convert ideas into realistic images",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "https://github.com/ChetanXpro/draw-ai",
        },
      ],
      FullDescriptionHTML: `A tool to convert ideas into realistic images

      `,
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
