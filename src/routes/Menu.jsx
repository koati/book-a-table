import React from 'react'
import data from '../data'

const Menu = () => {

    return (
        <div id='menu'>
            <div className='pizzas'>
                {data.pizzas.map(pizza =>
                    <div key={pizza.name} className='pizza'>
                        <div className='pizza-name'>{pizza.name}</div> ◈
                        <div className='pizza-description'>{pizza.description}</div> ◈
                        <div className="pizza-price"> {pizza.price} </div>
                    </div>
                )}
            </div>
            <div className='drinks'>
                {data.drinks.map(drink =>
                    <div key={drink.name} className='drink'>
                        <img className='drink-photo' src={'img/'+drink.photo} alt='drink' />
                        <div className='drink-name'>{drink.name}</div>
                        <div className="drink-price"> {drink.price} </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Menu