import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Experience extends Component {
    state = {
        exp: [
            { img: require("../img/forlocal.jpg"), title: 'ForLocal.net', subtitle: 'Engineering Lead', text: 'From gathering data to planning out the project I did everythin. Managed a team of 6 people and delivered various projects within timeline.', duration: '5 Mon', location: 'Gurgaon' },
            { img: require("../img/webshup.jpg"), title: 'Webshup.com', subtitle: 'Web Developer', text: 'Got to learn various skills at webshup. like theme customization, website optimization, responsive web design etc.', duration: '8 Mon', location: 'Noida' },
            { img: require("../img/midealabs.jpg"), title: 'Midealabs', subtitle: 'Part-time Web Developer', text: 'Worked as a part-time web developer. In this 1 year, I developed more than 15 websites including 1 ecommerce portal.', duration: '1 yr', location: 'New Delhi' }
        ]
    }

    render() {
        return (
            <section id="experience" className="experience">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12 mb-5">
                            <h1 className="text-center"><strong>Working Experience</strong></h1>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.exp.map((item, index) => {
                            return (
                                <div key={index} className="col-md-4">
                                    <div className="card">
                                        <img src={item.img} className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-subtitle">{item.subtitle}</p>
                                            <div className="card-text pt-2">
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                        <div className="card-details">
                                            <p style={{ float: "left" }}>{item.duration}</p>
                                            <p style={{ float: "right" }}>{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section >
        )
    }
}

export default Experience;