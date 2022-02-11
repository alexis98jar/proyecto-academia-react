import React from 'react'
import { Link } from 'react-router-dom'

export const HomeScreen = () => {
  return (
    <div>
        HomeScreen
        <Link to="/pokeapi">Pokeapi</Link>
        <Link to="/crypto">
            <button className='btn btn-outline-info'>
                Criptomonedas
            </button>
        </Link>
    </div>
  )
}
