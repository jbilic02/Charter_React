import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our products</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='/images/fisher795.jpg' 
                        text='Length: 7.95m
                        Engine: YAMAHA 200HP
                        Persons: 9
                        Year: 2019'
                        label='JEANNEAU MERRY FISHER 795'
                        path='/products'/>


                        <CardItem src='/images/marlin790.jpg' 
                        text='Length: 7.90m
                        Engine: MERCURY 250HP                        
                        Persons: 12  
                        Year: 2019' 
                        label='MARLIN 790 PRO SPECIAL EDITION'
                        path='/products'/>

                    </ul> 

                    <ul className='cards__items'>
                        <CardItem src='/images/flyer6.6.jpg' 
                        text='Length: 6.60m
                        Engine: SUZUKI 150HP                        
                        Persons: 8                        
                        Year: 2019'
                        label='BENETEAU FLYER 6.6 OPEN'
                        path='/products'/>
                        

                        <CardItem src='/images/marine670.jpg' 
                        text='Length: 6.65m
                        Engine: HONDA 200HP
                        Persons: 10
                        Year: 2019'
                        label='ATLANTIC MARINE OPEN 670'
                        path='/products'/>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
