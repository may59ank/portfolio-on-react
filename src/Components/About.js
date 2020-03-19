import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Mayankimage from '../img/mayank-portfolio.png';
import Facebook from '../img/facebook.png';
import Linkedin from '../img/linkedin.png';
import Instagram from '../img/instagram.png';

class About extends Component {

    state = {
        profile: 'I\'m a front-end'
    }

    profileHandler = () => {
        this.setState({
            profile: 'React Developer'
        })
    }

    profileHandlerReverse = () => {
        this.setState({
            profile: 'I\'m a front-end' 
        })
    }

    render() {
        return (
            <section id="about" className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 about-left-img" onMouseOver={this.profileHandlerReverse} onTouchMove={this.profileHandlerReverse}>
                            <div className="about-left">
                                {/* <img src={Mayankimage} alt="Mayank"></img> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" onMouseOver={this.profileHandler} onTouchMove={this.profileHandler}>
                            <div className="about-right">
                                <div className="about-me-text">
                                    <p><strong>ABOUT ME </strong></p>
                                </div>
                                <h1><strong>{this.state.profile}</strong></h1>
                                <p className="pt-4 pb-4">My name is Mayank yadav, I'm an engineering graduate of 2018 batch passout from Krishna Engineering College. I've been into web development and blogging since my 1<sup>st</sup> yr of engineering where I had a blog which crossed over 0.3M views in a span of just 5-6 months...</p>
                                <div className="row download-cv">
                                    <div className="col-md-4 col-6 download-cv-btn">
                                        <a href="https://facebook.com" className="btn btn-custom">DOWNLOAD CV</a>
                                    </div>
                                    <div className="col-md-8 col-6" id="social">
                                        <a href="https://facebook.com/mayankyaadav" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook"></img></a>
                                        <a href="https://linkedin.com/in/mayankyaadav" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin"></img></a>
                                        <a href="https://instagram.com/rao_mayanks" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram"></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;