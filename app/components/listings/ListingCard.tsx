"use client";

import useCountries from "@/app/hooks/userCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionId = "",
  actionLabel,
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }
      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  }, [reservation]);

  return (
    <div
      className="col-span-1 cursor-pointer group"
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-ful relative overflow-hidden rounded-xl m-4 md:m-0 xl:m-0 lg:m-0 2xl:m-0">
          <Image
            fill
            alt="Listings"
            src={data.imageSrc}
            className="object-cover h-full w-full group-hover:scale-110 transition "
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser}/>
          </div>
        </div>
        <div className="pl-4 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0">
        <div className="font-semibold text-lg ">
            {location?.region},{" "}<span className="text-gray-500 text-md">{location?.label}</span>
        </div>
        <div className="font-light text-neutral-500 mt-2 mb-2">
            { reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1 mb-2">
            <div className="font-semibold">
                ₹ {price} /-
            </div>
            {!reservation && (
                <div className="font-light">
                    night
                </div>
            )}
        </div>
        {
            onAction && actionLabel && (
                <Button
                disabled={disabled}
                small
                label={actionLabel}
                onClick={handleCancel}
                />
            )
        }
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
