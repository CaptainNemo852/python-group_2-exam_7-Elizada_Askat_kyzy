import React from 'react';
import Hamburger from './Hamburger/Hamburger';
import Cheeseburger from './Cheeseburger/Cheeseburger';
import Fries from './Fries/Fries';
import Coffee from './Coffee/Coffee';
import Tea from './Tea/Tea';
import Cola from './Cola/Cola';

function Food(props) {

    const { Hamburger, Cheeseburger, Fries,Coffee, Tea, Cola,} = props.foods;

    let foods = [];
    for (let i = 0; i < Hamburger.count; i++) foods.push(<Hamburger/>);
    for (let i = 0; i < Cheeseburger.count; i++) foods.push(<Cheeseburger/>);
    for (let i = 0; i < Fries.count; i++) foods.push(<Fries/>);
    for (let i = 0; i < Coffee.count; i++) foods.push(<Coffee/>);
    for (let i = 0; i < Tea.count; i++) foods.push(<Tea/>);
    for (let i = 0; i < Cola.count; i++) foods.push(<Cola/>);

    return <div className='Food'>
        {foods}
    </div>
}


export default Food;