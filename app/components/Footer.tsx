import React from "react";
import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { PiHeartBold, PiUserCircle } from "react-icons/pi";
import Container from "./Container";

const Footer = () => {
  return (
    <div
      className="
        border-t
        border-t-neutral-300
        bg-white
        w-full 
        py-3 
        fixed
        bottom-0
        z-20
      "
    >
      <Container>
        <div
          className="
          flex 
          flex-col
          gap-2
          md:gap-0
          md:flex-row 
          items-center 
          justify-center
          md:justify-between
        "
        >
          <div className="flex gap-3 md:hidden">
            <div
              className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-1
        p-3
        hover:text-neutral-800
        transition
        cursor-pointer text-neutral-500
      `}
            >
              <IoSearch size={26} />
              <div className="font-medium text-xs capitalize text-center">
                {"Explore"}
              </div>
            </div>
            <div
              className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-1
        p-3
        hover:text-neutral-800
        transition
        cursor-pointer text-neutral-500
      `}
            >
              <PiHeartBold size={26} />
              <div className="font-medium text-xs capitalize text-center">
                {"Wishlists"}
              </div>
            </div>
            <div
              className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-1
        p-3
        hover:text-neutral-800
        transition
        cursor-pointer text-neutral-500
      `}
            >
              <PiUserCircle size={26} />
              <div className="font-medium text-xs capitalize text-center">
                {"Log in"}
              </div>
            </div>
          </div>

          <div
            className="
            text-sm md:flex md:gap-2 text-neutral-600 hidden
          "
          >
            <span>© {new Date().getFullYear()} Airbnb, Inc.</span>·
            <Link href={"#"} className="hover:underline">
              Terms
            </Link>
            ·
            <Link href={"#"} className="hover:underline">
              Sitemap
            </Link>
            ·
            <Link href={"#"} className="hover:underline">
              Privacy
            </Link>
            ·
            <Link href={"#"} className="hover:underline">
              Your Privacy Choices
            </Link>
            ·
            <Link href={"#"} className="hover:underline">
              Destinations
            </Link>
          </div>
          <div
            className="
            text-sm 
            font-semibold md:flex gap-4 hidden
          "
          >
            <span className="flex items-center gap-1">
              <BiGlobe size={16} />
              <Link href={"#"} className="hover:underline">
                English (US)
              </Link>
            </span>{" "}
            <span>
              ${" "}
              <Link href={"#"} className="hover:underline">
                USD
              </Link>
            </span>{" "}
            <Link href={"#"} className="hover:underline">
              Support & resources
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
