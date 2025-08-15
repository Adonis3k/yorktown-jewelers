import IG1 from "../../assets/IG1.png";
import IG2 from "../../assets/IG2.png";
import IG3 from "../../assets/IG3.png";
import IG4 from "../../assets/IG4.png";
import IG5 from "../../assets/IG5.png";
import IG6 from "../../assets/IG6.png";
import IG7 from "../../assets/IG7.png";

import "./Social.css";

const images = [
  { src: IG1, link: "https://www.instagram.com/p/DHgbxEsukef/" },
  { src: IG2, link: "https://www.instagram.com/p/DJ14MsPuZJN/" },
  { src: IG3, link: "https://www.instagram.com/p/DKKlGc5u5bq/" },
  { src: IG4, link: "https://www.instagram.com/p/DMMEFUNvrta/?img_index=1" },
  { src: IG5, link: "https://www.instagram.com/p/DMvgqF_ycML/" },
  { src: IG6, link: "https://www.instagram.com/p/DMyc3znSoVc/" },
  { src: IG7, link: "https://www.instagram.com/p/CvsNDrLMSoZ/" }
];

export default function Social() {
return (
    <section id="social-section" className="social-section">
      {/* Instagram Icon Link */}
 <div className="instagram-text">
  <a
    href="https://www.instagram.com/yorktownjewelers/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="instagram-link"
  >
    <span>Follow us on Instagram</span>
    <svg
      viewBox="0 0 24 24"
      className="instagram-icon">
    
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-2.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
    </svg>
    <span>YorktownJewelers/</span>
  </a>
</div>
      

      {/* Instagram Image Grid */}
      <div className="ig-gallery">
        {images.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.src} alt={`Instagram ${idx + 1}`} />
          </a>
        ))}
      </div>
    </section>
  );
}