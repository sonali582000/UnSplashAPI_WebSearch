import SearchBar from "./components/SearchBar";
import SearchImage from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [image, setImage] = useState([]);
  const handleSearch = async (term) => {
    console.log(`searching with term , ${term}`);
    const response = await SearchImage(term);
    console.log(response);
    setImage(response);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageList result={image} />
    </>
  );
}

export default App;
