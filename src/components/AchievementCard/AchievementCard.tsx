import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const AchievementCard = ({
  name,
  description,
  image,
  size,
  button,
}: {
  name: string;
  description: string;
  image?: string;
  size?: number;
  button?: {
    name: string;
    link: string;
  };
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      <div className=" w-full flex flex-col gap-10 border py-10 px-5">
        <h1 className="text-lg">{name}</h1>
        <p className="text-sm">{description}</p>
        {image && (
          <Image src={image} width={size} height={size} alt="ethdubai image" />
        )}
        {button && <Button className="w-[20rem]">{button.name}</Button>}
      </div>
    </div>
  );
};

export default AchievementCard;
