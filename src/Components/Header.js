import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import {FaBlackberry} from 'react-icons/fa';

class Header extends Component {

  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
        <header id="header" class="header">
          <div className="container-fluid">
            <div className="row header-row">
              <div className="logo-container">
                <Link to="/">
                  <h2>Mayank Yadav</h2>
                </Link>
                <button type="button" className="nav-btn" onClick={this.handleToggle}>
                  <FaBlackberry className="nav-btn-icon"/>
                </button>
              </div>
              <nav>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                  <li className="nav-link">
                    <Link className="nav-item" to="/">Home</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-item" to="/aboutus">About Us</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-item" to="/experience">Experience</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-item" to="/qualification">Qualification</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-item" to="/hire">Hire Me!</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    )
  }
}

export default Header;