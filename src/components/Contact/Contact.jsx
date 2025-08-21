import { Link } from 'react-scroll';
import './Contact.css';
import logo from '../Logo/Logo.png';



const Contact = () => {
const year = new Date().getFullYear();

  return (
    <footer id="contact-section" className="ft">
      <div className="ft__inner">
<div className="logoContact-container">
      <a href="#home">
        <img src={logo} alt="Yorktown Jewelers Logo" className="logo-img" />
      </a>
    </div>
        <nav className="ft__col" aria-label="Footer navigation">
          <h4 className="ft__title">Explore</h4>
          <ul className="ft__list">
            <li><Link to="home-section" smooth={true} duration={1000} offset={-36}>Home</Link></li>
            <li><Link to="about-section" smooth={true} duration={1000} offset={-75}>About</Link></li>
            <li><Link to="services-section" smooth={true} duration={1000} offset={-70}>Services</Link></li>
            <li><Link to="social-section" smooth={true} duration={1000} offset={-75}>Social</Link></li>
            <li><Link to="reviews-section" smooth={true} duration={1000} offset={-36}>Reviews</Link></li>
            <li><Link to="contact-section" smooth={true} duration={1000} offset={-36}>Contact</Link></li>
          </ul>
        </nav>

        {/* Get in touch */}
        <div className="ft__col">
          <h4 className="ft__title">Get in touch</h4>
          <ul className="ft__list">
            <li>p: <a href="tel:+914-245-1023">914‑245‑1023</a></li>
           <li>e: <a href="mailto:yorktownjewelers@yahoo.com" 
           className="email-link">yorktownjewelers@yahoo.com</a></li>
            <li>
              <a
                href="https://maps.app.goo.gl/gZ3NQUBGCpHNZLSF8"
                target="_blank"
                rel="noopener noreferrer"
              >
                322 Kear Street<br/>Yorktown, NY 10598<br />
              </a>
            </li>
            <li>
  <strong>Store Hours:</strong><br />
  Monday–Friday 10am – 6pm<br />
  Saturday 10am – 5pm
</li>


          </ul>
        </div>

        {/* Social & legal */}
        <div className="ft__col">
          <h4 className="ft__title">Connect with us</h4>
          <div className="ft__social">
            <a
              href="https://www.facebook.com/profile.php?id=100063957397079/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="ft__icon"
            >
              {/* Facebook SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.36 2 2 6.49 2 12.06 2 17.07 5.66 21.16 10.44 22v-7.01H7.9v-2.93h2.54V9.41c0-2.5 1.5-3.88 3.79-3.88 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57v1.88h2.79l-.45 2.93h-2.34V22C18.34 21.16 22 17.07 22 12.06z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/yorktownjewelers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="ft__icon"
            >
              {/* Instagram SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-2.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
            </a>
            {/* Add TikTok/X if needed */}
          </div>

          <div className="ft__legal">
            <p>© {year} Yorktown Jewelers</p>
            <p>All Rights Reserved.</p>
            <a 
  href="https://www.AdonisMadera.com/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <p className="ft__credits">Web Design by Adonis Madera</p>
</a>

          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        className="ft__toTop"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
}
export default Contact;