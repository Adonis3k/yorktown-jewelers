import "./Services.css";

import Watchrepair1 from "../../assets/Watchrepair1.jpg";
import Jewelryrepair2 from "../../assets/Jewelryrepair2.webp";
import ServicesShowroom from "../../assets/ServicesShowroom.jpg";
import Yorktownringcleaning from "../../assets/Yorktownringcleaning.jpg";
import DiamondNecklace from "../../assets/diamond necklace.jpg"; // hero tile (top-right style)

export default function Services() {
  return (
    <section className="svc">
      {/* Left text block (spans 2 rows on desktop) */}
      <div className="svc-text">
        <p className="svc-watermark" aria-hidden="true">services</p>
        <h2 className="svc-kicker">what we offer</h2>
        <p>
          Yorktown Jewelers combines the distinction of a luxury jeweler with the warmth of a family
          business. We offer a distinctive selection of beautifully crafted jewelry and expert services.
        </p>
        <p>
          Full‑service jeweler & designer of engagement rings, diamonds, platinum, white gold, silver
          and vintage. Services include jewelry repairs, custom designs, appraisals, silver restoration,
          and complete watch repair & restoration.
        </p>
      </div>

      {/* Top-right big tile */}
      <article className="svc-tile svc-t1">
        <img src={DiamondNecklace} alt="Custom Made Designs" />
        <div className="svc-overlay"><h3>Custom Made Designs</h3></div>
      </article>

      {/* Right column small tile */}
      <article className="svc-tile svc-t2">
        <img src={Jewelryrepair2} alt="Large Collection of Precious Stones" />
        <div className="svc-overlay"><h3>Large Collection of Precious Stones</h3></div>
      </article>

      {/* Bottom row three tiles */}
      <article className="svc-tile svc-t3">
        <img src={ServicesShowroom} alt="Jewelry and Watch Appraisals" />
        <div className="svc-overlay"><h3>Jewelry & Watch Appraisals</h3></div>
      </article>

      <article className="svc-tile svc-t4">
        <img src={Watchrepair1} alt="Watch Repair and Cleaning" />
        <div className="svc-overlay"><h3>Watch Repair & Cleaning</h3></div>
      </article>

      <article className="svc-tile svc-t5">
        <img src={Yorktownringcleaning} alt="Jewelry Cleaning" />
        <div className="svc-overlay"><h3>Jewelry Cleaning</h3></div>
      </article>
    </section>
  );
}
