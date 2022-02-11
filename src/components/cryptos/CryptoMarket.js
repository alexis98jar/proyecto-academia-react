import React, { useEffect, useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { TableCryptos } from './TableCryptos';


export const CryptoMarket = () => {

    const [coins, setCoins] = useState([]);

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(search);
        setSearch(e.target.value);
    }

    const getCoins = async() => {

        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
        const respuesta = await fetch( url );
        const data = await respuesta.json();
        setCoins(data);
    }

    useEffect(() => {

        getCoins();
    }, []);


    return (
        <>
            {/* <Navbar /> */}
            <div className="container">
                <div className='row'>
                    <h2 className='text-center'>Mercado de Criptomonedas</h2>
                    <input 
                        type='text' 
                        placeholder='🔎Search' 
                        className='form-control bg-dark text-light text-center' 
                        onChange={handleSearch}
                    />
                    <TableCryptos 
                        coins={coins}
                        search={search} 
                    />
                </div>
            </div>
        </>
    );
};
