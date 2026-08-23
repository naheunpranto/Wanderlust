import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { GoArrowLeft, GoArrowUpLeft } from "react-icons/go";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const DestinationPageDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country } = destination;

  console.log(destination);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-5">
        <div>
          <Button variant="ghost" className={""}>
            <GoArrowLeft className="" />
            Back to Destination
          </Button>
        </div>

        <div className="flex gap-3">
          <EditModal destination={destination}/>
          <Button
            variant="ghost"
            className={"border border-red-600 text-red-600 rounded-sm"}
          >
            <RiDeleteBin6Line /> Cancel
          </Button>
        </div>
      </div>

      <Image
        alt={destination}
        src={imageUrl}
        width={500}
        height={800}
        className="block mx-auto w-200 object-cover"
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
    </div>
  );
};

export default DestinationPageDetails;
