import React from 'react'
import '../../App.css'
import './Products.css'

//<div className='products__container'>
export default function Products() {
    return (
        <div className='products'>
            <div className='products__container'>
                <ul className='products__items'>
                    <li className="header">JENNEAU MERRY FISHER</li>
                    <li className="small">PERIOD</li>
                    <li className="small">01.06. - 15.09.</li>
                    <li className="grey">DAY PRICE: 350 euro / 2660 Kuna</li>
                    <li className="grey">WEEK PRICE: 1790 euro / 13604 Kuna</li>
                
                    <li className="aa"><a href="/contact-us" className="button">RENT</a></li>
                </ul>
            </div>


            <div className='products__container'>
                <ul className='products__items'>
                    <li className="header">MARLIN 790</li>
                    <li className="small">PERIOD</li>
                    <li className="small">01.06. - 15.09.</li>
                    <li className="grey">DAY PRICE: 350 euro / 2660 Kuna</li>
                    <li className="grey">WEEK PRICE: 1790 euro / 13604 Kuna</li>
                
                    <li className="aa"><a href="/contact-us" className="button">RENT</a></li>
                </ul>
            </div>


            <div className='products__container'>
                <ul className='products__items'>
                    <li className="header">BENETEAU FLYER</li>
                    <li className="small">PERIOD</li>
                    <li className="small">01.06. - 15.09.</li>
                    <li className="grey">DAY PRICE: 240 euro / 1820 Kuna</li>
                    <li className="grey">WEEK PRICE: 1400 euro / 10640 Kuna</li>
                
                    <li className="aa"><a href="/contact-us" className="button">RENT</a></li>
                </ul>
            </div>


            <div className='products__container'>
                <ul className='products__items'>
                    <li className="header">ATLANTIC MARINE</li>
                    <li className="small">PERIOD</li>
                    <li className="small">01.06. - 15.09.</li>
                    <li className="grey">DAY PRICE: 250 euro / 1895 Kuna</li>
                    <li className="grey">WEEK PRICE: 1490 euro / 11295 Kuna</li>
                
                    <li className="aa"><a href="/contact-us" className="button">RENT</a></li>
                </ul>
            </div>

        
        </div>
    )
}
