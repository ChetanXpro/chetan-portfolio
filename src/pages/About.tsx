"use client";

import React from "react";

const About = () => {
  const [showWhyNonTech, setShowWhyNonTech] = React.useState(false);
  return (
    <div className=" items-center justify-center w-full flex flex-col min-h-screen ">
      <div className=" min-h-screen w-[100%] flex gap-8 justify-center flex-col items-center ">
        <h1 className="text-3xl">
          Hey there! I&apos;m{" "}
          <span className="text-blue-500">Chetan Baliyan</span>
        </h1>
        <h3 className="text-2xl">I love building stuff</h3>

        <div className="  gap-3 flex flex-col p-3 border w-[80%]">
          <h1 className="text-base">About Me</h1>
          <div className="gap-10 flex flex-col">
            <p className="text-base">
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

            <p
              className="cursor-pointer m"
              onClick={() => {
                setShowWhyNonTech(!showWhyNonTech);
              }}
            >
              =: Click here if you are curious about why a guy with a non-tech
              degree is doing tech stuff.
            </p>

            {showWhyNonTech && (
              <p>
                From a young age, I was very interested in computers and their
                languages. However, my greater passion was cricket, so I
                didn&apos;t focus much on learning computers. I played cricket
                at different levels, investing a lot of time in it. I chose an
                easier, non-tech course in college, but, in the end, I had to
                leave it due to some personal reasons. So, I thought, &apos;Now
                what?&apos; That&apos;s when I decided to get into Tech.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
