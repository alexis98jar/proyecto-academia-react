import React from 'react'
import { Link } from 'react-router-dom'
import pokeball from '../img/pokeball.png'
import criptos from '../img/cripto.jpeg'
import '../homestyles.css'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'


// style={{width: 300, backgroundColor: 'red'}}
export const HomeScreen = () => {
  return (
    <div>
        <h2 className='text-center'>
          Inicio
        </h2>
        <div className='tarjetas'>
          <OwlCarousel
            className='owl-theme'
            // items="3"
            autoplay
            nav
            dots
            loop
            margin={10}
            responsive ={{
              0: {items:1},
              600: {items:2},
              1000: {items:3}
            }}
            
          >

          {/* Card pokeapi */}
          <div className='text-center tarjetaP' style={{width: 300}} >
            <img className='image' src={pokeball} alt='pokeball'/>
            <div className='card-body'>
              <h5>Api Pokemon</h5>
              <p>Aplicación para buscar pokemons por nombre o ID con el API de Pokeapi</p>
              <Link to="/pokeapi">
                <button className='btn btn-warning'>
                  Pokeapi
                </button>
              </Link>
            </div>
          </div>

          {/* Card crypto */}
          <div className='text-center tarjetaC' style={{width: 300}} >
            <img className='imagec' src={criptos} alt='pokeball'/>
            <div className='card-body'>
              <h5>Api Criptomonedas</h5>
              <p>Aplicación para buscar criptomonedas con el API de Coingecko</p>
              <Link to="/crypto">
                <button className='btn btn-outline-warning'>
                  Criptomonedas
                </button>
              </Link>
            </div>
          </div>

          </OwlCarousel>
        </div>
    </div>
  )
}
