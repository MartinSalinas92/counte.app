import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp =({value})=>{

    const [counte, setCounter]= useState(value);

    const hashechoclick= (e)=>{

        //cuando hace click aument
        setCounter(counte + 1)
    }

    const resetValor=()=>{

        //cuando hace click restaura al prop que manda por index

        setCounter(value)
    }

    const disminuirNumero=()=>{

        //cuando hace click disminuye el numero

        setCounter(counte -1)
    }


    return (

        <Fragment>

            <h1>Hola Mundo</h1>

            <h2>{counte}</h2>

            <button onClick={hashechoclick}>+1</button>
            <button onClick={resetValor}>Reset</button>
            <button onClick={disminuirNumero}>Disminuir</button>

        </Fragment>
    )
}

CounterApp.propTypes={

    value: PropTypes.number.isRequired
}


export default CounterApp