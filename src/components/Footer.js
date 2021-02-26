import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to recieve our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Please enter your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>  
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            CHARTER <i className='fas fa-ship' />
                        </Link>
                    </div>
                    <small className='website-rights'>Joško Bilić © 2021</small>
                    <div className='social-icons'>
                        <Link 
                          className='social-icon-link facebook'
                          to='/'
                          target='_blank'
                          aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link 
                          className='social-icon-link instagram'
                          to='/'
                          target='_blank'
                          aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link 
                          className='social-icon-link youtube'
                          to='/'
                          target='_blank'
                          aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link 
                          className='social-icon-link twitter'
                          to='/'
                          target='_blank'
                          aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
