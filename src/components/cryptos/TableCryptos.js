import React from 'react';
import { Coin } from './Coin';

export const TableCryptos = ({coins, search}) => {

    const filtro = coins.filter( (coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase()) || 
        coin.symbol.toLowerCase().includes(search.toLowerCase()) ; 
    });


    return(
        <table className='table table-dark mt-4 table-hover table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Current Price</th>
                    <th>Price Change</th>
                    <th>Max Price 24h</th>
                </tr>
            </thead>
            <tbody>
                {                   //i me funciona como contador y a la vez de key
                    filtro.map( (coin, i) => (
                        <Coin 
                            coin={coin}
                            key={i}
                            index={i+1}
                        />
                    ))
                }
            </tbody>
        </table>
    );
};
