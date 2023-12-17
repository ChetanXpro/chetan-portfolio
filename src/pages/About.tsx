"use client";

import React from "react";

const About = () => {
  const [showWhyNonTech, setShowWhyNonTech] = React.useState(false);
  return (
    <div className=" items-center justify-center w-full flex flex-col min-h-screen ">
      <div className=" min-h-screen w-[70%] flex justify-center flex-col items-center ">
        <h1 className="text-3xl">
          Hey there! I'm <span className="text-blue-500">Chetan Baliyan</span>
        </h1>
        <h3 className="text-2xl">I love building stuff</h3>

        <div className="  gap-3 flex flex-col p-3 border w-[80%]">
          <h1 className="text-base">About Me</h1>
          <div>
            <p className="text-base">
              My coding journey started in May 2022 when I decided to explore
              more about coding and building websites. I began by learning basic
              HTML, CSS, and JS. Being addicted to coding, I dedicated 10-15
              hours daily to it. Within 3 months, I gained proficiency in JS,
              ReactJS, and acquired a grasp of the basics of blockchains,
              understanding how they work, and got an internship as a full stack
              dev. then i explored more about ethereum and flow blockchain and
              got really into decentralization and writing smart contracts. also
              won two blockchain hackathons , and then openai released there api
              keys and llm chatbot , which attracted me to learn more about Gen
              AI , and i started exploring how llm work and build some very
              interesting projects like a telegram chatbot , and tools to
              extract structed info from PDFs and many other.
            </p>

            <p
              className="cursor-pointer "
              onClick={() => {
                setShowWhyNonTech(!showWhyNonTech);
              }}
            >
              Why a Guy from Non-tech degree doing tech stuff ?
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
