'use client';

import { useCallback, useState } from "react";
import { listings } from "../store/listings";
import { Listing } from "../types";

const useTab = () => {
  const [listingsToDisplay, setListingsToDisplay] =
    useState<Array<Listing>>(listings);
  const [activeCategory, setActiveCategory] = useState("rooms");

  const handleDisplayCategoryListings = useCallback(
    (category: string) => {
      setActiveCategory(category);

      const parsedListings = (listings ?? []).filter(
        (p) => p.type === activeCategory
      );
      setListingsToDisplay(parsedListings);
    },
    [activeCategory]
  );

  console.log({ listingsToDisplay });

  return { listingsToDisplay, activeCategory, handleDisplayCategoryListings };
};

export default useTab;
