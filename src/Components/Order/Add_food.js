import React from 'react';

function AddFood(props) {
    return (
        <div className="card  border border-dark bg-light">
            <div className='AddFood'>
                <p className='Name'> Food: {props.name}</p>
                <p className='Price'>Price: {props.price}KGS</p>
                <button className='Button' onClick={() => props.add(props.name)}>Add</button>
            </div>
        </div>
);
}

export default AddFood;
