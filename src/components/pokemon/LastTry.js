import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './styles.css';
export const LastTry = () => {

    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([])
    const [type, setType] = useState("");


    const getPokemon = async() => {
        const myArray = [];
        try {

            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const resp = await fetch(url);
            const data = await resp.json();
            myArray.push(data);
            setType(data.types[0].type.name);
            setPokemonData(myArray)
            console.log(data);

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {

        getPokemon();
        
    },[]);

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    return (
        <>
        <Link to="/home">
              <button className='btn btn-outline-danger ms-4'>
                  Back
              </button>
          </Link>
        <div className='App'>
            LastTry

            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text'
                        onChange={handleChange}
                        placeholder="Search a pokemon"
                        className='inputp'
                        />
                </label>
            </form>
            {
                pokemonData.map((data) => {
                    return(
                        <div key={data.id} className={
                            (type === 'ice')
                            ? 'contenedor bg-ice'
                            : (type === 'electric')
                            ? 'contenedor bg-electric'
                            : (type === 'grass')
                            ? 'contenedor bg-grass'
                            : (type === 'steel')
                            ? 'contenedor bg-steel'
                            : (type === 'water')
                            ? 'contenedor bg-water'
                            : (type === 'fight')
                            ? 'contenedor bg-fight'
                            : (type === 'flying')
                            ? 'contenedor bg-flying'
                            : (type === 'bug')
                            ? 'contenedor bg-bug'
                            : (type === 'normal')
                            ? 'contenedor bg-normal'
                            : (type === 'rock')
                            ? 'contenedor bg-rock'
                            : (type === 'fire')
                            ? 'contenedor bg-fire'
                            : (type === 'fairy')
                            ? 'contenedor bg-fairy'
                            : (type === 'psychic')
                            ? 'contenedor bg-psychic'
                            : (type === 'pison')
                            ? 'contenedor bg-poison'
                            : (type === 'dragon')
                            ? 'contenedor bg-dragon'
                            : (type === 'ghost')
                            ? 'contenedor bg-ghost'
                            : (type === 'dark')
                            ? 'contenedor bg-darkk'
                            : (type === 'ground')
                            ? 'contenedor bg-ground'
                            : 'contendor'
                        }>
                            <img className='imgp' src={data.sprites["front_default"]} />
                            <div className='divTable'>
                                <div className='divTableBody'>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Pokemon: # {data.id}</div>
                                    <div className='divTableCell'>Name: {data.forms[0].name}</div>
                                </div>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Type</div>
                                    <div className='divTableCell'>{type}</div>
                                </div>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Height</div>
                                    <div className='divTableCell'>{data.height / 10}m</div>
                                </div>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Weight</div>
                                    <div className='divTableCell'>{data.weight / 10}Kg</div>
                                </div>
                                <div className='divTableRow'>
                                    <div className='divTableCell'>Types</div>
                                    <div className='divTableCell'>{data.types.map((data) => {
                                        return(data.type.name + "  ")
                                    })}</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
    )
}
