import React from 'react';
import SectionWrapper from "../hoc/SectionWrapper";


const About = () => {
  return (
    <section className="vibrant-gold-gradient py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-4">
          About Us
        </h2>
        <p className="text-xl text-black mb-6">
          At [Store Name], we believe in offering a variety of high-quality shoes that combine comfort, style, and durability. Whether you're looking for the latest trends or classic styles, we have something for everyone.
        </p>
        <p className="text-lg text-black">
          Founded in [Year], we are committed to bringing you the best shopping experience with a personalized touch. Our collection is carefully curated to provide you with the best footwear for any occasion. Explore our selection today, and let us help you step into comfort and style.
        </p>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");