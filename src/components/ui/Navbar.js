import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const {name} = useSelector( state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch( startLogout());
    }
  
    return(
      <div className='navbar navbar-dark bg-dark mb-4'>
        <span className='navbar-brand ms-4'>
            Hola:  {` ${name}`}
        </span>

        <button 
          className='btn btn-outline-danger me-4'
          onClick={handleLogout}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span> Salir</span>

        </button>
              
        </div>
    );
}
