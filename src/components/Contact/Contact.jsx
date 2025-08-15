// src/components/Contact/Contact.jsx
import "./Contact.css";
// import Logo from "../../assets/logo-light.svg"; // swap to your light/white logo


const Contact = () => {
const year = new Date().getFullYear();

  return (
    <footer id="contact-section" className="ft">
      <div className="ft__inner">
        {/* Brand / Logo */}
        {/* <div className="ft__brand">
          <img src={Logo} alt="Yorktown Jewelers" className="ft__logo" />
        </div> */}

        {/* Explore */}
        <nav className="ft__col" aria-label="Footer navigation">
          <h4 className="ft__title">Explore</h4>
          <ul className="ft__list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#Social">Social</a></li>
            <li><a href="#Reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Get in touch */}
        <div className="ft__col">
          <h4 className="ft__title">Get in touch</h4>
          <ul className="ft__list">
            <li>p: <a href="tel:+914-245-1023">914‑245‑1023</a></li>
            <li>e: <a href="mailto:yorktownjewelers@yahoo.com">yorktownjewelers@yahoo.com</a></li>
            <li>
              <a
                href="https://maps.app.goo.gl/gZ3NQUBGCpHNZLSF8"
                target="_blank"
                rel="noopener noreferrer"
              >
                322 Kear Street<br/>Yorktown, NY 10598
              </a>
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