"use client";

import React from "react";

const About = () => {
  const [showWhyNonTech, setShowWhyNonTech] = React.useState(false);
  return (
    <div className=" items-center justify-center w-full flex flex-col min-h-screen ">
      <div className=" min-h-screen w-[100%] flex gap-8 justify-center flex-col items-center ">
        <h1 className="text-3xl">
          Hey there! I'm <span className="text-blue-500">Chetan Baliyan</span>
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
              they work, and landed an internship as a full-stack dev. Then, I
              explored more about Ethereum and Flow blockchains and got really
              into decentralization and writing smart contracts. I also won two
              blockchain hackathons. After that, OpenAI released LLM and an API
              for it, which attracted me to learn more about General AI. I
              started exploring how LLM works and built some very interesting
              projects like an AI Telegram chatbot and tools to extract
              structured info from PDFs and many others.
            </p>

            <p
              className="cursor-pointer m"
              onClick={() => {
                setShowWhyNonTech(!showWhyNonTech);
              }}
            >
              =: Why a Guy from Non-tech degree doing tech stuff ?
            </p>

            {showWhyNonTech && (
              <p>
                So, from a young age, I was very interested in computers and
                their languages. However, I was more interested in cricket, so I
                did not focus on learning computers very much. I played cricket
                at some levels, and at that time, I invested too much time in
                cricket. To give more time to it, I took a non-tech course in my
                college, but, in the end, I had to leave it due to some family
                reasons. So, then I thought, 'Now what?' Then I tried to learn
                some tech stuff.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
