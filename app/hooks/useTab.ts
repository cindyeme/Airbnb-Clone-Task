"use client";

import { useCallback, useEffect, useState } from "react";
import { listings } from "../store/listings";
import { Listing } from "../types";

const useTab = () => {
  const [listingsToDisplay, setListingsToDisplay] =
    useState<Array<Listing>>(listings);
  const [activeCategory, setActiveCategory] = useState("rooms");

  const handleTabChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  useEffect(() => {
    if (activeCategory === "rooms") {
      setListingsToDisplay(listings);
    } else {
      const filtered = listings.filter((item) => item.type === activeCategory);
      setListingsToDisplay(filtered);
    }
  }, [activeCategory]);

  return {
    listingsToDisplay,
    activeCategory,
    handleTabChange,
  };
};

export default useTab;
