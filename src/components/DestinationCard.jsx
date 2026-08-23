import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { IoCalendarNumberOutline } from "react-icons/io5";

const DestinationCard = ({ destination }) => {
  const { imageUrl, destinationName, price, country, duration } = destination;

  return (
    <Card className="border">
      <div className="p-5">
        <Image alt={destinationName} src={imageUrl} height={400} width={400} className="object-cover h-52"/>

        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <FiMapPin />
              <span>{country}</span>
            </div>
            <h2 className="text-xl font-semibold">{destinationName}</h2>
            <div className="flex items-center gap-2">
              <IoCalendarNumberOutline />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;
