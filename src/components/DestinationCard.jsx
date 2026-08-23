import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { IoCalendarNumberOutline } from "react-icons/io5";

const DestinationCard = ({ destination }) => {
  const {_id, imageUrl, destinationName, price, country, duration } = destination;

  return (
    <Card className="border">
      <div className="p-5">
        <Image
          alt={destinationName}
          src={imageUrl}
          height={400}
          width={400}
          className="object-cover h-52"
        />

        <div>
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
        <div className="">
          <Link href={`/destination/${_id}`}>
            <Button variant="ghost" className={"mt-2 text-cyan-500"}>
              <FiExternalLink />
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;
