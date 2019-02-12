import React from 'react';
import AddFood from './Add_food'

function OrderForm(props) {
    return <div className='OrderForm'>
        <AddFood name = {"Hamburger"} add = {props.add} price = {80} />
        <AddFood name = {"Cheeseburger"} add = {props.add} price = {90} />
        <AddFood name = {"Fries"} add = {props.add} price = {50} />
        <AddFood name = {"Coffee"} add = {props.add} price = {40} />
        <AddFood name = {"Tea"} add = {props.add} price = {60} />
        <AddFood name = {"Cola"} add = {props.add} price = {45} />
    </div>

}

export default OrderForm;