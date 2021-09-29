import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  //GET request
  const [listings, setListings] = useState([])
// Search Bar
const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])
  
  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    const listingsToDisplay = listings.filter(listing => listing.id !== id)
    setListings(listingsToDisplay)
  }

  const searchedItems = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))

  
  
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={searchedItems} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
