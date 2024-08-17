import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Characters = ({searchQuery}) => {
    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await 
            fetch('https://dattebayo-api.onrender.com/api/characters')
            const data = await response.json();
            setCharacters(data);
        };
        fetchCharacters();
    },[]);

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes (
        searchQuery.toLowerCase())       
    );
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredCharacters.map((character) =>
            (
                <Link to={`/character/${character.id}`} key={character.id}>
                    <div className="rounded-md border p-4 bg-slate-500">
                        <h2 className="text-lg text-bold">{character.name}</h2>
                        <p>{character.description}</p>
                    </div>
                
                </Link>  
            
           ) )}


        </div>
    );

};

export default Characters;


