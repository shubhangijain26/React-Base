import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        id="search"
        type="text"
        placeholder="Search for restaurants, cuisines or dishes"
      ></input>
    </div>
  );
};

export default Search;