import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard
        key={listing.id}
        id={listing.id}
        description={listing.description}
        image={listing.image}
        location={listing.location}
        handleDelete={handleDelete}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
