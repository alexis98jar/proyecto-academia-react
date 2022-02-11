import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Cards } from './Cards';

export const Pokeapi = () => {
    
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    },[]);

    const getPokemons = async() => {

        const url = "https://pokeapi.co/api/v2/pokemon/"
        const resp = await fetch(url);
        const data = await resp.json();
        setPokemons(data.results);
    }

    // pokemons.map(pokemon => (console.log(pokemon)));
    // const {results } = pokemons;

    // const recorrer = async() => {
        
    //     await results.map( pokemon => ( console.log(pokemon.url)));
    // }

    // useEffect(() => {
    //     recorrer();
    // },[]);


    
    return (
        <div className='container'>
            <Link to="/home">
            <button className='btn btn-danger me-3'>
                Back
            </button>
            </Link>
            Pokeapi
            <div>
                {
                    pokemons.map( (pokemon, i) => ( 
                        <Cards
                            key = {pokemon.name}
                            index = {i+i} 
                            pokemon ={pokemon}
                        />
                    ))
                }
                {/* <Cards pokemons = {results} /> */}
            </div>
            
        </div>
    )
}
