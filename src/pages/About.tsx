"use client";

import React from "react";

const About = () => {
  return (
    <div className=" items-center    w-full flex flex-col  ">
      <div className=" w-[100%] flex gap-3 justify-center flex-col items-center ">
        <h1 className="text-3xl">About Me</h1>

        <div className="  gap-3 flex flex-col items-center p-3  w-full md:w-[70%]">
          {/* <h1 className="text-base">Abo</h1> */}
          <div className="gap-10 flex  w-full flex-col">
            <p className="text-base  text-[#212121] text-center">
              My coding journey started in May 2022 when I decided to explore
              more about coding and building websites. I began by learning basic
              HTML, CSS, and JS. Addicted to coding, I dedicated 10-15 hours
              daily to it. Within 3 months, I gained skills in JS, ReactJS, and
              acquired a grasp of the basics of blockchains, understanding how
              they work, and landed an internship as a full-stack dev. And then,
              I explored more about Ethereum and Flow blockchains. I got really
              into decentralization and writing smart contracts. I also won two
              blockchain hackathons. After that, OpenAI released LLM and an API
              for it, which attracted me to learn more about Gen AI. I started
              exploring how LLM works and built some very interesting projects
              like an AI Telegram chatbot and tools to extract structured info
              from PDFs and many others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
