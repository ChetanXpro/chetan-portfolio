import AchievementCard from "@/components/AchievementCard/AchievementCard";
import React from "react";

const Achievement = () => {
  return (
    <div className="gap-10 items-center  flex flex-col">
      <h1 className="text-2xl font-bold">Some Achievements</h1>
      <div className="flex gap-10 w-[70%] flex-wrap">
        {/* <div className="w-[50%] flex flex-wrap gap-1"> */}
        <div className="flex flex-col gap-5">
          <AchievementCard
            date="December 2023"
            name="Winner at ETHIndia 2023"
            description={`
            D-FIR is a decentralized FIR system built on top of the Ethereum Blockchain. It is a system that enables citizens to register FIRs without having to visit a police station. Additionally, it allows the police to manage FIRs and update their statuses.

We have introduced user abstraction to shield users from the complexities of the blockchain.
          `}
            image="/ethindia.png"
            size={700}
          />
        </div>
        <div className="flex flex-col gap-5">
          <AchievementCard
            date="October 2023"
            name="I achieved 2 million+ views on Instagram using my short video automation tool."
            description={`
            I built this tool to automate the process of creating short videos for Instagram, YouTube Shorts, and TikTok. I used Quora to scrape data and then utilized that data to generate short videos. A user just needs to provide an interesting Quora link, and the tool will automatically generate a short video for it. I generated 30+ videos with this tool and uploaded them on Instagram. It turned out that I got more than 2 million views and thousands of likes and comments. In the future, I will add more templates to it.
          `}
            button={{
              link: "https://www.instagram.com/factsclipzz/reels",
              name: "View Instagram Account",
            }}
          />
        </div>
        <div className="flex flex-col gap-5">
          <AchievementCard
            date="April 2022"
            name="Winner in ETHDubai x SushiSwap x Mantle Hackathon 2022"
            description={`Our team build "Flow-Flash-Loans" Project, Flash Loans provide a very
          easy way to gain access to capital for a single transaction. This
          extra access to capital can be used for arbitrage opportunities,
          liqudations, etc. Currently, there is no easy way to get Flash Loans
          in Flow. We have come up with an interface and specification that can
          be used by DEXs already present on Flow to provide secure Flash Loans
          to their users, which will end up with them earning extra fees above
          the swap fees.`}
            image="/ethdubai.png"
            size={600}
          />
        </div>
        {/* </div> */}
        {/* <div className="w-[50%]"> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default Achievement;
