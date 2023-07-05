"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FavoriteButton from "../FavoriteButton";
import Button from "../Button";
import { Listing } from "@/app/types";
import { AiFillStar } from "react-icons/ai";
import { CSSProperties } from "react";

interface ListingCardProps {
  data: Listing;
  reservation?: null;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
}) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            rounded-xl
            xs:mb-1
            mb-2
            xl:mb-0
          "
        >
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            style={
              {
                "--swiper-pagination-color": "#FFFFFF",
                "--swiper-pagination-bullet-inactive-color": "#DDDDDD",
                "--swiper-pagination-bullet-inactive-opacity": "0.5",
                "--swiper-pagination-bullet-size": "6px",
                "--swiper-pagination-bullet-horizontal-gap": "4px",
              } as CSSProperties
            }
          >
            <SwiperSlide>
              <div className="w-full h-[350px] xs:h-[250px] md:h-[270px] xl:h-[284px] rounded-xl relative">
                <Image
                  fill
                  className="
              object-cover 
              w-full 
              h-full 
              overflow-hidden
              transition rounded-xl
            "
                  src={
                    data.homeMainPic ||
                    "https://placehold.co/600x400/000000/FFF"
                  }
                  sizes="100vw"
                  loading="lazy"
                  alt={data.name}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[350px] xs:h-[250px] md:h-[270px] xl:h-[284px] rounded-xl relative">
                <Image
                  fill
                  className="
              object-cover 
              w-full 
              h-full 
              overflow-hidden
              transition rounded-xl
            "
                  src={
                    data.carouselPic1 ||
                    "https://placehold.co/600x400/000000/FFF"
                  }
                  sizes="100vw"
                  loading="lazy"
                  alt={data.name}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[350px] xs:h-[250px] md:h-[270px] xl:h-[284px] rounded-xl relative">
                <Image
                  fill
                 className="
              object-cover 
              w-full 
              h-full 
              overflow-hidden
              transition rounded-xl
            "
                  src={
                    data.carouselPic2 ||
                    "https://placehold.co/600x400/000000/FFF"
                  }
                  sizes="100vw"
                  loading="lazy"
                  alt={data.name}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[350px] xs:h-[250px] md:h-[270px] xl:h-[284px] rounded-xl relative">
                <Image
                  fill
                 className="
              object-cover 
              w-full 
              h-full 
              overflow-hidden
              transition rounded-xl
            "
                  src={
                    data.carouselPic3 ||
                    "https://placehold.co/600x400/000000/FFF"
                  }
                  sizes="100vw"
                  loading="lazy"
                  alt={data.name}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[350px] xs:h-[250px] md:h-[270px] xl:h-[284px] rounded-xl relative">
                <Image
                  fill
                 className="
              object-cover 
              w-full 
              h-full 
              overflow-hidden
              transition rounded-xl
            "
                  src={
                    data.carouselPic4 ||
                    "https://placehold.co/600x400/000000/FFF"
                  }
                  sizes="100vw"
                  loading="lazy"
                  alt={data.name}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[350px] xs:h-[250px] md:h-[270px] xl:h-[284px] rounded-xl relative">
                <Image
                  fill
                 className="
              object-cover 
              w-full 
              h-full 
              overflow-hidden
              transition rounded-xl
            "
                  src={
                    data.carouselPic5 ||
                    "https://placehold.co/600x400/000000/FFF"
                  }
                  sizes="100vw"
                  loading="lazy"
                  alt={data.name}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <FavoriteButton />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-semibold text-md">
            {"Africa"}, {"Nigeria"}
          </div>
          <div className="flex gap-1 items-center text-xs">
            <AiFillStar size={10} />
            <span>{data.stars}</span>
          </div>
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
