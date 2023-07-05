"use client";

import Image from "next/image";

import HeartButton from "../HeartButton";
import Button from "../Button";
import { Listing } from "@/app/_types";

interface ListingCardProps {
  data: Listing;
  reservation?: null;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  currentUser,
}) => {

  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
            mb-2
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.homeMainPic || "https://placehold.co/600x400/000000/FFF"}
            alt="Listing"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-md">
          {'Africa'}, {'Nigeria'}
        </div>
        <div className="font-light text-neutral-500 capitalize">
          {data.name}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold text-sm">${data.price}</div>
          <div className="font-light text-sm">night</div>
        </div>
        {onAction && actionLabel && (
          <Button disabled={disabled} small label={actionLabel} />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
