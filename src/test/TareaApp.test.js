import React from "react";
//import '@testing-library/jest-dom';
import { shallow } from "enzyme";

import CounterApp from '../TareaApp';



describe('Pruebas para componente <ConunteApp />, correctamente',()=>{

    let wrapper=shallow(<CounterApp value={10}/>);

    beforeEach(()=>{

        wrapper= shallow(<CounterApp value={10} />);

    });

    test('pruebas del componente CounteAPP', () => {

      

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de mostrar el valor por defecto de 100', () => {

        const valor= 100

        const wrapper= shallow(<CounterApp value={valor} />);

        const mostrarValorporDefe= wrapper.find('h2').text();

        //console.log(mostrarValorporDefe);

        expect(mostrarValorporDefe).toBe('100');
        
    });

    test('Debe incrementar con el boton +1', () => {

        //at sirve para verificar que boton quiero utilizar
         wrapper.find('button').at(0).simulate('click');
        
        const mostrarValorporDefe= wrapper.find('h2').text();
        //console.log(mostrarValorporDefe);
        expect(mostrarValorporDefe).toBe('11');

        
    });

    test('Debe disminuir con el boton -1', () => {

        //at sirve para verificar que boton quiero utilizar
        wrapper.find('button').at(2).simulate('click');
        
        const mostrarValorporDefe= wrapper.find('h2').text();
        //console.log(mostrarValorporDefe);
        expect(mostrarValorporDefe).toBe('9');
        
    })

    test('Debe colocar el valor por defecto con el btn reset', () => {
        
        const wrapper=  shallow(<CounterApp  value={10}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText= wrapper.find('h2').text().trim();

        //console.log(counterText)

        expect(counterText).toBe('10');
    })
    
    
    
    
    

  



});