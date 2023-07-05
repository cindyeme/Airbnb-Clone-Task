"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { GoKey } from "react-icons/go";
import { MdOutlineVilla } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "beachfront",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "amazing pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },

  {
    label: "islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "mansions",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "new",
    icon: GoKey,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = ({
  active,
  onChange,
}: {
  active: string;
  onChange: (category: string) => void;
}) => {

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        <CategoryBox
          label={"rooms"}
          icon={LiaBedSolid}
          selected={active === "rooms"}
          onClick={() => onChange("rooms")}
        />
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={active === item.label}
            onClick={() => onChange(item.label)}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
