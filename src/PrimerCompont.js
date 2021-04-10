
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Apiprimer= ({saludo, subtitulo})=>{

   

    return(

        <Fragment>

            <h1>{ saludo }</h1>

            <p>{ subtitulo }</p>


        </Fragment>

    )

    
    
   
}

Apiprimer.propTypes={

    saludo: PropTypes.string.isRequired
}

Apiprimer.defaultProps={
    subtitulo:'Soy un subtitulo'
}

export default Apiprimer;