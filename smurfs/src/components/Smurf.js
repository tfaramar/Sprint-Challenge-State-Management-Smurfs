import React from 'react';

const Smurf = (props) => {
    return (
        <div className='smurf-container'>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
            <button>Remove Smurf</button>
        </div>
    )
}

export default Smurf;