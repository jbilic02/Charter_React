import React from 'react'
import { Link } from 'react-router-dom'

function ServicesItem(props) {
    return (
        <>
            <li className='services__item'>
                <Link className='services__item__link' to={props.path}>
                    <figure className='services__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='Travel Image'
                        className='services__item__img' />
                    </figure>
                    <div className='services__item__info'>
                        <h5 className='services__item__text' >{props.text}</h5>
                    </div>
                </Link>
            </li>   
        </>
    )
}

export default ServicesItem
