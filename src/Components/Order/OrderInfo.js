import React from 'react'


function OrderInfo(props){
    const empty = props.foodInfo.Total == 0 ? <p>Order is empty! Please add some items</p> : null
    const total = props.foodInfo.Total != 0 ? <OrderTotal total={props.foodInfo.Total}/> : null
    console.log(props.foodInfo.Total)
return (
}