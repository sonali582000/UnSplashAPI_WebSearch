import "../styles/SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <label>Enter Search Term</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
