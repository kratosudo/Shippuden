import React, { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect (() => {
        const fetchCharacterDetails = async () => {
            const response = await fetch
              ("https://dattebayo-api.onrender.com/api/characters/${id}");
              const data = await response.json();
              setCharacter(data);        
        };
        fetchCharacterDetails();
    }, [id]);

    if (!character) return
    <p>Loading...</p>;


    return (
        <div className="p-3">
            <h1 className="font-bold text-2xl">{character.name}</h1>
            <p>{character.description}</p>
            


        </div>
    )
};

export default CharacterDetails;
