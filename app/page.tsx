import Container from "./components/Container";
import { listings } from "./store/listings";
import ListingCard from "./components/listings/ListingCard";

export default function Home() {
  return (
    <main>
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard currentUser={null} key={listing.id} data={listing} />
          ))}
        </div>
      </Container>
    </main>
  );
}
