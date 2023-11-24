"use client";

import useCountries from "@/app/hooks/userCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";
const Map = dynamic(()=> import('../Map'),{
    ssr: false
})

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-8 -mt-4">
      <div className="flex flex-col gap-2 pl-4 -mt-4">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div className="flex gap-2">
            Posted by {user?.name} <Avatar src={user?.image} />
          </div>
        </div>
      </div>
      <div className="pl-4 text-lg -mt-5 flex flex-row items-start gap-2 font-light text-gray-600">
        <div>{guestCount} Guests </div>,<div>{roomCount} Rooms </div>,
        <div>{bathroomCount} Bathroom </div>
      </div>
      <hr />
      {
        category && (
            <ListingCategory
            icon={category.icon}
            label={category.label}
            description={category.description}
            />
        )
      }
      <hr />
      <div className="p-4 text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
      <Map center={coordinates}/>
    </div>
  );
};

export default ListingInfo;
