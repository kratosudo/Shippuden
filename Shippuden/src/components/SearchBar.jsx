import React, { useState } from "react";
 const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const handleSearch = () => {
        onSearch(query);
    };
    return (
        <div className="flex p-4">
            <input type="text" value={query} onChange={(e) =>
                setQuery(e.target.value)}
                placeholder="search character"
                className="border border-gray-400 rounded w-full"
            />
            <button onClick={handleSearch} 
            className="rounded text-white p-2 bg-black">
                search
            </button>
        </div>
    );
 };
 export default SearchBar;