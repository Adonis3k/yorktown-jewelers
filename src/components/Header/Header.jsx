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
                to="home-section"
                smooth={true}
                duration={1000}
                offset={-36}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-section"
                smooth={true}
                duration={1000}
                offset={-65}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services-section"
                smooth={true}
                duration={1000}
                offset={-65}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="social-section"
                smooth={true}
                duration={1000}
                offset={-65}
              >
                Social
              </Link>
            </li>
            <li>
              <Link
                to="reviews-section"
                smooth={true}
                duration={1000}
                offset={-36}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="contact-section"
                smooth={true}
                duration={1000}
                offset={-36}
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
