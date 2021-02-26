import React from 'react';
import '../../App.css';
import CardItem from './ServiceItem';
import './Services.css';

function Services() {
    return(
        <div className='services'>
             <h1> SERVICES </h1>
             <div className='services__container'>
                <div className='services__wrapper'>
                    <ul className='services__items'>
                        <CardItem src='/images/training.jpg' 
                        text="SKIPPER TRAINING"
                        path='/services'
                        />

                        <CardItem src='/images/transfers.jpg' 
                        text="BOAT TRANSFERS"
                        path='/services'
                        />

                        <CardItem src='/images/equipment.jpg' 
                        text="WATER SPORT EQUIPMENT"
                        path='/services'
                        />
                        
                        <CardItem src='/images/tips.jpg' 
                        text="TIPS (Bareboat rental)"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>


    )  
}
export default Services