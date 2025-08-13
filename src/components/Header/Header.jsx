import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div className="Banner">
        <button className="nav-toggle" onClick={this.toggleNav}>☰</button>
        <div className={`navitems ${this.state.isOpen ? 'open' : ''}`}> 
          <ul>
             <li>
              <Link
                to="home -section"
                smooth={true}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-section"
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services-section"
                smooth={true}
                duration={1000}
              >
                Services
              </Link>
            </li>        <li>
              <Link
                to="Social-section"
                smooth={true}
                duration={1000}
                
              >
                Social
              </Link>
            </li>
            <li>
              <Link
                to="Reviews-section"
                smooth={true}
                duration={1000}
                
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={1000}
               
              >
                Contact
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
