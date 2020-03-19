import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return(
        <footer id="footer" className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center inner-footer">
                        <div className="footer-logo">
                            <h1>Mayank Yadav</h1>
                        </div>
                        <div className="footerMenu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                <li>
                                    <Link to="/aboutus">About</Link>
                                    </li>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                    </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                    </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                    </li>
                            </ul>
                        </div>
                        <div className="footer-social">
                        <a href="https://facebook.com/mayankyaadav" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://linkedin.com/in/mayankyaadav" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://instagram.com/rao_mayanks" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="copyright">
                        <p>Copyright ©2019 Mayank Yadav | All rights reserved | Made with <i className="fas fa-heart"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;