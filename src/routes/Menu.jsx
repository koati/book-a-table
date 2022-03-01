import React from 'react'
// import data from './data'

const Menu = ({ data }) => {

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
                        <div className='drink-container'>
                            <img className='drink-photo' src={drink.photo} alt='drink' />
                        </div>
                        <div className='drink-name'>{drink.name}</div>
                        <div className="drink-price"> {drink.price} </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Menu