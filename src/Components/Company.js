import React from 'react';
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/react-fontawesome';


const Company = (props) => {
    return (
        <div>
            <div className="col-md-4">
                <div className="card"></div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-subtitle">{props.subtitle}</p>
                    <div className="card-text pt-2">
                        <p>{props.text}</p>
                    </div>
                </div>
                <div className="card-details">
                    <p style={{ float: "left" }}>{props.duration}</p>
                    <p style={{ float: "right" }}>{props.location}</p>
                </div>
            </div>
        </div>
    )
}

export default Company;