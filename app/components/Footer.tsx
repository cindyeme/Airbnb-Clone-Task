import React from "react";
import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
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
      "
    >
      <Container>
        <div
          className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
        >
          <div
            className="
            text-sm flex gap-2 text-neutral-600
          "
          >
            © {new Date().getFullYear()} Airbnb, Inc.·{" "}
            <Link href={"#"} className="hover:underline">
              Terms
            </Link>{" "}
            ·{" "}
            <Link href={"#"} className="hover:underline">
              Sitemap
            </Link>{" "}
            ·{" "}
            <Link href={"#"} className="hover:underline">
              Privacy
            </Link>
            ·{" "}
            <Link href={"#"} className="hover:underline">
              Your Privacy Choices
            </Link>{" "}
            ·{" "}
            <Link href={"#"} className="hover:underline">
              Destinations
            </Link>
          </div>
          <div
            className="
            text-sm 
            font-semibold flex gap-4
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
