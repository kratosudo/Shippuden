import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Characters from "../components/Characters";
 const Home = () => {
    const [searchQuery, setSearchQuery] =useState('');
    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    return (
        <div>
            <h1 className="font-bold my-4 text-center">Welcome to Shippuden,.</h1>
            <SearchBar onSearch={handleSearch} />
            <Characters searchQuery={searchQuery}/>
        </div>
    )
 };
 export default Home;