import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Cards } from './Cards';

export const Poke = () => {
    const [pokemon, setPokemon] = useState([]);

    const [search, setSearch] = useState('')

    const [number, setNumber] = useState('')
    // useEffect(() => {
    //     getPokemon('charmander');
    // },[]);

    // const getPokemon = async(name) => {

    //     const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    //     const resp = await fetch(url);
    //     const data = await resp.json();
    //     setPokemon(data);
    // }
    
    const handleSearch = (e) => {
        e.preventDefault();
        setNumber(e.target.value);
    }

    const handleFind = () => {

        // console.log('buscando')
        // getPokemon(search);
        // console.log(pokemon.forms[0].name)
    }
    console.log(pokemon)
    
    return (
        <div className='container'>
            <Link to="/home">
            <button className='btn btn-danger me-3'>
                Back
            </button>
            </Link>
            Pokeapi
            <div>

                <input 
                    type='text'
                    className='form-control bg-dark text-light text-center'
                    placeholder='Sear by name or #, excample: charmander'
                    onChange={handleSearch}
                    />
                <button 
                    className='btn'
                    onClick={handleFind}
                >
                    Search
                </button>
            </div>
            <Cards number = {number} />
        </div>
    )
    
  
}
