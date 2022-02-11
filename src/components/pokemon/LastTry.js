import React, { useEffect, useState } from 'react'

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
        <div className='App'>
            LastTry

            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text'
                        onChange={handleChange}
                        placeholder="Search a pokemon"
                    />
                </label>
            </form>
            {/* {
                pokemonData.map((info) => {
                    return(
                        <div className='card mt-3 '>
                            <div>

                            <img src={info.sprites["front_default"]} alt='img pokemon'
                                className='card-img-top' 
                            />
                            </div>
                            <div className='card-body'>
                                <h5 className='card-title'>Card title</h5>
                                <p className='card-text'>Texto aqui</p>
                            </div>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>item 1</li>
                                <li className='list-group-item'>item 2</li>
                                <li className='list-group-item'>item 3</li>
                            </ul>
                            <div className='card-body'>
                                <a className='card-link'>Link +</a>

                            </div>
                        </div>
                    )
                })
            } */}
            {/* <div className='card mt-3'>
                <img src={data.sprites["front_default"]} alt='img pokemon' />
                <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>Texto aqui</p>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>item 1</li>
                    <li className='list-group-item'>item 2</li>
                    <li className='list-group-item'>item 3</li>
                </ul>
                <div className='card-body'>
                    <a className='card-link'>Link +</a>

                </div>
            </div> */}
            {
                pokemonData.map((data) => {
                    return(
                        <div className='container'>
                            <img src={data.sprites["front_default"]} />
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
    )
}
