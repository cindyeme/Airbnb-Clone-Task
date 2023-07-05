"use client";

import { Listing } from "@/app/types";
import ListingCard from "./ListingCard";
import EmptyState from "../EmptyState";

const Listings = ({ listings }: { listings: Array<Listing> }) => {
  return listings.length === 0 ? (
    <EmptyState />
  ) : (
    <div
      className="
            pt-24
            grid 
            grid-cols-1 
            xs:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            gap-8
          "
    >
      {listings.map((listing: Listing) => (
        <ListingCard key={listing.id} data={listing} />
      ))}
    </div>
  );
};

export default Listings;
