import React from 'react';
import ReactDOM from 'react-dom';
import Apiprimer from './PrimerCompont';
import CounterApp from './TareaApp';

import './index.css';



const divRoot= document.querySelector('#root');

//Lo que indica en reactDOM.render la variable saludo va a estar dentro de divRoot

ReactDOM.render(<CounterApp  value={10}/>, divRoot);
//ReactDOM.render(<Apiprimer saludo='Hola mundo'/>, divRoot);