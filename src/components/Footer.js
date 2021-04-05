
import React from 'react'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import { FiFacebook, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi'
import { GoLocation, GoMail } from 'react-icons/go'

const Footer = () => {

    return (
        <footer className='footer-container'>
            <div className='footer-wrapper'>
                <div className="footer-grid">
                    <div className='footer-item'>
                        <h4>korean beauty</h4>
                        <blockquote>
                            <p>
                                <q><i>Be good to your skin. you'll wear it
                    every day for the rest of your live</i>.</q>
                                <br />
                                <strong>- Renée -</strong>
                            </p></blockquote>

                        <br />
                        <ul className='social-links' aria-label="social links">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="facebook link"><FiFacebook /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/nataliabakakuri/" target="_blank" rel="noreferrer" aria-label="Linkedin link"><FiLinkedin /></a>
                            </li>
                            <li>
                                <a href="https://github.com/theonomiMC" target="_blank" rel="noreferrer" aria-label="Github link"><FiGithub /></a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-item' aria-label="Site navigation">
                        <h4>navigate</h4>
                        <ul>
                            <li>
                                <Link to="/products" >best sellers</Link>
                            </li>
                            <li>
                                <Link to="/10-step-skincare" >skincare routine</Link>
                            </li>
                            <li>
                                <NavHashLink
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                    to="/#skincare-test"> Skin Test</NavHashLink>
                            </li>
                            <li>
                                <Link to="/wishlist"

                                >Wishlist</Link>
                            </li>
                            <li>
                                <NavHashLink to="/#about"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                >About me</NavHashLink>
                            </li>

                        </ul>
                    </div>
                    <div className='footer-item' aria-label="korean brands in georgia">
                        <h4>korean brands in georgia</h4>
                        <ul>
                            <li>
                                <a href="https://psp.ge/brand/missha.html" target="_blank" rel="external noreferrer">
                                    missha</a>
                            </li>
                            <li>
                                <a href="https://psp.ge/brand/mizon.html" target="_blank" rel="external noreferrer">
                                    mizon
                                </a>
                            </li>
                            <li>
                                <a href="https://www.aversi.ge/ka/products/list/176/Accoje" target="_blank" rel="external noreferrer">
                                    accoje</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/Skinfoodgeorgia/" target="_blank" rel="external noreferrer">
                                    skinfood</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item" id="contact" role='contact'>
                        <h4>contact</h4>
                        <ul>
                            <li>
                                <GoLocation />
                                <p>Tbilisi, Georgia</p>
                            </li>
                            <li>
                                <GoMail />
                                <p>teonomi@gmail.com</p>
                            </li>
                            <li>
                                <FiPhone />
                                <p>+995 5XX XXX XXX</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
