import React, { useEffect, useState } from 'react'

export const Cards = ({number = 1}) => {
    // console.log(index, pokemon.url);
    const [pokemon, setPokemon] = useState({})
    
    const getPokemon = async(name) => {

        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const resp = await fetch(url);
        const data = await resp.json();
        setPokemon(data);
    }

    useEffect(() => {
        getPokemon(number);
    }, []);

    console.log(pokemon)

    return (
        <div className='container col-md-12 col-sm-6'>
            Cards
        </div>
    );
}
