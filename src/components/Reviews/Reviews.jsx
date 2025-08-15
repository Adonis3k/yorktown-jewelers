// ReviewsSection.jsx
import { useState, useEffect } from 'react';
import "./Reviews.css";

const reviews = [
  {
    name: "David R.",
    text: "Mike and Myron at Yorktown Jewelers are top-notch! This is a true family-run business that treats every customer like one of their own. The quality of their products is unmatched—unique, and built to last. From start to finish, the experience was seamless and honest. I highly recommend Yorktown Jewelers to anyone looking for exceptional service and timeless pieces. Thanks Mike!",
    rating: 5
  },
  {
    name: "Ashley H.",
    text: "Truly exceptional service. Myron and his son genuinely care about the quality of their work and the satisfaction of their customers. If something isn't perfect, they go above and beyond to make it so. My husband and I only like to spend money when these two things are present: quality and kindness. That's exactly what is at Yorktown jewelers! Highly recommend!",
    rating: 5
  },
  {
    name: "Juanita R.",
    text: "I wanted a new setting for my emerald cut diamond ring and band. I told Myron what my vision was to combine the two rings into one. He brought my vision to life with such ease. He listened to what I wanted and sent me two designs. The result was an absolute stunning ring! I highly recommend Yorktown Jewlers.",
    rating: 5
  },
   { 
    name: "Rosalie T.",
    text: "I’ve been to Yorktown Jewelers a few times now and it’s always been a wonderful interaction. They fixed a ring for me that another jeweler said wasn’t possible and it came out beautiful. They are very friendly, knowledgeable and have good prices. They also take the time to answer all of my questions and never rush me.",
    rating: 5
},
{
    name: "Briget R.",
    text: "Myron helped me to design stunning earrings that incorporated pearls from a family heirloom at a fair price. I was updated every step of the way and the earrings were complete far ahead of the desired date in mind. The recipient of the gift was overjoyed, as they are truly beautiful! I will definitely be going back to Yorktown Jewelers in the future and am looking forward to it!",
    rating: 5
}, 
{
    name: "Briget R.",
    text: "This was my first time at Yorktown Jewelers. They couldn't be nicer or more helpful. Some time ago the shank broke off my wedding ring which made it unwearable plus it also had a cracked stone. I was so lucky to be told it could be repaired. 5 days later I picked it up and it looks like a brand new ring! Its stunning!! I highly recommend them for all your jewelry needs!",
     rating: 5
}

];

function Reviews() {
  return (
    <section id="reviews-section" className="reviews">
            <a
        href="https://www.google.com/maps/place/Yorktown+Jewelers+LLC"
        target="_blank"
        rel="noopener noreferrer"
        className="view-all"
      >
<h1>⭐⭐⭐⭐⭐ Google Reviews ⭐⭐⭐⭐⭐</h1>
      </a>
      <div className="review-grid">
        {reviews.map((review, idx) => (
          <div className="review-card" key={idx}>
            <p className="review-text">"{review.text}"</p>
            <p className="review-rating">
              {"⭐".repeat(review.rating)}
            </p>
            <p className="review-name">- {review.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Reviews;