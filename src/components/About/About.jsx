import './About.css';
import Rring from '../../assets/Rring.jpg';

const About = () => {
  try{
    return (
     <div id='about-section' className='about-container'>
      <span className='about-script'>About</span>
      <div className='about-image-container'>
        <img src={Rring} alt="Rring" className="about-image" />
      </div>
      <div className='about-text-box'>
        <span className='script-text2008'>Since 2008</span>  
          <br />
          <div className='about-text'>
        Yorktown Jewelers has been proudly serving customers, offering expert craftsmanship in fine jewelry design, 
        high-quality repairs, and timepiece restoration—especially for brands
         like Rolex. Backed by 40 years of experience, they are dedicated to exceptional
          customer service and meeting the needs of every special occasion, from engagements 
          to celebrations. 
          <br /><br />
          A true family business, Yorktown Jewelers now includes the founder's son, Michael, who joined in 2019. 
          Their store features a wide variety of jewelry, perfect for anyone looking for a meaningful gift.
        </div>
      </div>
     </div>
    );
  } catch (error) {
    console.error("Error rendering About component:", error);
    return <div className="error">Something went wrong. Please try again later.</div>;
  }
};

export default About;