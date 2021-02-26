import React from 'react';
import { Button } from './Button';
import './Main.css';
import '../App.css';


function Main() {
    return (
        <div className="main-container">
            <video src="/videos/Project.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    ABOUT US
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH VIDEO <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Main
