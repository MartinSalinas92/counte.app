import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Apiprimer from '../PrimerCompont';

describe('Pruebas en <Apiprimer />', ()=>{

   /* test('debe mostrar el mensaje Hola Mundo', () => {

        const saludo='Hola mundo';

        const {getByText}= render(<Apiprimer saludo={saludo} />)

        expect(getByText(saludo)).toBeInTheDocument();


        
    })*/


    test('Debe de Mostrar <Apiprimer /> correctamente', () => {

        const saludo= 'Hola mundo';
        //shallow es igual al render
        const wrapper= shallow(<Apiprimer saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
        
    })
    test('Debe Mostrar el subtitulo enviado por el props ', () => {

        const saludo='Hola mundo';
        const subTitulo= 'Soy un subtitulo';

        const wrapper= shallow(
            <Apiprimer 

            saludo={saludo}
            subtitulo={subTitulo}
        />);

        const TextoSubtitulo=wrapper.find('p').text();

        //console.log(TextoSubtitulo);

        expect(TextoSubtitulo).toBe(subTitulo);
        
    })
    
    
    

})