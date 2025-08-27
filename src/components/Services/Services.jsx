import "./Services.css";

import Watchrepair1 from "../../assets/Watchrepair1.jpg";
import Jewelryrepair2 from "../../assets/Jewelryrepair2.webp";
import ServicesShowroom from "../../assets/ServicesShowroom.jpg";
import Yorktownringcleaning from "../../assets/Yorktownringcleaning.jpg";


export default function Services() {
  return (
    <section id="services-section" className="svc">
      {/* Left text block (spans 2 rows on desktop) */}
      <div className="svc-text">
        <p className="svc-watermark" aria-hidden="true">Services</p>
        <h2 className="svc-kicker">WE OFFER</h2>
        <p>
          Yorktown Jewelers combines the distinction of a luxury jeweler with the warmth of a family
          business. We offer a distinctive selection of beautifully crafted jewelry and expert services.
        </p>
        <p>
          Full‑service jeweler & designer of engagement rings, diamonds, platinum, white gold, silver
          and vintage. Services include jewelry repairs, custom designs, appraisals, silver restoration,
          and complete watch repair & restoration. We also buy gold , diamonds and fine quailty watches .
        </p>
      </div>

      {/* Top-right big tile */}
      <article className="svc-tile svc-t1">
        <img src={Yorktownringcleaning} alt="Ring Cleaning Service" />
        <div className="svc-overlay"><h3>Ring Cleaning Service</h3></div>
      </article>

      {/* Bottom row two tiles */}
      <article className="svc-tile svc-t2">
        <img src={Watchrepair1} alt="Watch Repair and Cleaning" />
        <div className="svc-overlay"><h3>Watch Repair & Cleaning</h3></div>
      </article>

      <article className="svc-tile svc-t3">
        <img src={Jewelryrepair2} alt="Jewelry Repairs" />
        <div className="svc-overlay"><h3>Jewelry Repairs</h3></div>
      </article>

      {/* Third row spanning full width */}
      <article className="svc-tile svc-t4">
        <img src={ServicesShowroom} alt="Services Showroom" />
        <div className="svc-overlay"><h3>Services Showroom</h3></div>
      </article>
    </section>
  );
}
