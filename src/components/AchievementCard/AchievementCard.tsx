import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AchievementCard = ({
  name,
  description,
  image,
  size,
  button,
  date,
}: {
  name: string;
  description: string;
  image?: string;
  size?: number;
  date: string;
  button?: {
    name: string;
    link: string;
  };
}) => {
  return (
    <div className="flex gap-3 flex-col">
      <div className=" w-full flex flex-col gap-10 border  py-10 px-5">
        <div className=" w-full h-full">
          <p className="text-sm underline">Date: {date}</p>
        </div>

        <h1 className="text-lg">{name}</h1>
        <p className="text-sm">{description}</p>
        {image && (
          <Image src={image} width={size} height={size} alt="ethdubai image" />
        )}
        {button && (
          <Link href={button.link}>
            <Button className="w-[20rem]">{button.name}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
