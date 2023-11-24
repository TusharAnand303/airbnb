"use client";
import useCountries from "@/app/hooks/userCountries";
import userSearchModal from "@/app/hooks/userSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {

  const searchModal = userSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get('locationValue');
  const startDate = params?.get('startDate');
  const endDate = params?.get('endDate');
  const guestCount = params?.get('guestCount');

  const locationLabel = useMemo(()=>{
    if(locationValue){
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere'
  },[getByValue, locationValue]);

  const durationLabel = useMemo(()=>{
    if(startDate && endDate){
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if(diff == 0){
        diff = 1
      }
      return `${diff} Days`;
    }
    return 'Any Week'
  },[startDate, endDate]);

  const guestLabel = useMemo(()=>{
    if(guestCount){
      return `${guestCount} Guests`
    }
    return 'Add Guests';
  },[guestCount]);

  return (
    <div onClick={searchModal.onOpen} className="md:ml-[7rem] lg:ml-[8rem] xl:ml-[9rem] 2xl:ml-[10rem] border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div className="sm:block hidden text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          {durationLabel}
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">{guestLabel}</div>
          <div className="p-2 bg-rose-500 rounded-full text-white font-bold">
            <BiSearch size={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
