"use client";

import Container from "./components/Container";
import Listings from "./components/listings/Listings";
import Categories from "./components/navbar/Categories";
import useTab from "./hooks/useTab";

export default function Home() {
  const { listingsToDisplay, activeCategory, handleTabChange } = useTab();
  console.log({ listingsToDisplay, activeCategory }, "<<");
  return (
    <main>
      <div className="fixed top-[5rem] w-full bg-white z-10 border-t-[1px]">
        <Categories active={activeCategory} onChange={handleTabChange} />
      </div>
      <section className="pb-20 pt-28">
        <Container>
          <Listings listings={listingsToDisplay} />
        </Container>
      </section>
    </main>
  );
}
