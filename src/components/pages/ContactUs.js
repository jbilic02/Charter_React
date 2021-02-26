import React from 'react'
import '../../App.css'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <div className='contact-us'>
            <h1> CONTACT US </h1> 
            <ul className='contact-us__items'>
                <p><mark>Email: info@info.com</mark></p>
                <p><mark>Phone: +385 91 1111111</mark></p>
                <p><mark>INFO OFFICE: TROGIR - CROATIA, ADRESS: Trg Ivana Pavla, Trogir 21220</mark></p>
                
                <p className='text'>Boat charter and tour company. Our main boat base is in Trogir.
                 Our boat rental service is also available in Split, Kastela, Čiovo,
                 Hvar, Brač, Šolta, Primosten, Poljica, Seget donji, Seget vranjica, Marina, Rogoznica, Drvenik, Omiš,
                 Milna, Bol, Sevid and all other places in middle Dalmatia (Croatia). If you don't have boat licence we
                 offer also professional skipper service. Also if you don't have expirience on the sea
                 we offer boat skiper trening. Boats for rent in our fleet are motorboats up to 8m long with powerfull outboard engine,
                 we have only best boat brands beneteau, jeanneau, atlantic, maestral, saver, fisher.
                 All boats are refirbished every year, they are in great shape and fully equiped. We also provides boat tours, speedboat transfers and boat rental with accomodation.
                </p>
            </ul>

        </div>
        
    )
}
