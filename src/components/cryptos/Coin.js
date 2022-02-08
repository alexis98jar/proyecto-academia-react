import React from 'react';

export const Coin = ({coin, index}) => {
    const urlCoin = "https://www.coingecko.com/es/monedas/";
    return(
        <tr>
            <td>{index}</td>
            <td><a href={urlCoin + coin.id}>
                <img src={coin.image} className="img-fluid img-thubnail me-2" alt='cripto icon' />
                </a>
            <span>{coin.name}</span>
            <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
            </td>
            <td>{coin.current_price} USD$</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success numbers' : 'text-danger numbers'}>
                {coin.price_change_percentage_24h}%
            </td>
            <td>{coin.high_24h} USD$</td>
        </tr>
        );
};
