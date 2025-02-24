import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import daystarlogo from '../assets/daystarlogo.jpg'; // Fixed the image path
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTelegram, BsInstagram } from 'react-icons/bs';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to detect which section is in the viewport
  useEffect(() => {
    const options = {
      rootMargin: '0px 0px -50% 0px', // Trigger when section is halfway in view
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id); // Set active to the section's id
        }
      });
    }, options);

    // Observe each section
    navLinks.forEach(({ label }) => {
      const section = document.getElementById(label.toLowerCase());
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Clean up observer on unmount
      navLinks.forEach(({ label }) => {
        const section = document.getElementById(label.toLowerCase());
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Scroll to the section when the link is clicked
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(sectionId);
  };

  // Scroll to home section
  const handleScrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActive(''); // Reset active state
  };

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all ${
        scrolled ? 'vibrant-gold-gradient shadow-md' : 'vibrant-gold-gradient'
      } px-8 sm:px-16`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Branding */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleScrollToHome}>
          <img
            src={daystarlogo}
            alt="logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
          />
          <p className="text-black text-[20px] sm:text-[26px] font-bold flex">
          [Store Name]
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-4 items-center">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map(({ href, label }) => (
              <li
                key={href}
                className={`${
                  active === label.toLowerCase() ? 'underline text-black' : 'text-black'
                } hover:underline text-[18px] sm:text-[22px] font-medium cursor-pointer`}
                onClick={() => handleScrollToSection(label.toLowerCase())} // Scroll to section by id
              >
                <a href={`#${label.toLowerCase()}`}>{label}</a>
              </li>
            ))}
          </ul>

          {/* Phone number */}
          <span className="text-black font-semibold text-[18px] sm:text-[22px] ml-10">
            📞 +123 456 7890
          </span>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle(!toggle)}>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="object-contain w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
            />
          </button>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 vibrant-gold-gradient absolute top-20 right-4 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <li
                  key={href}
                  className={`font-poppins font-medium text-[14px] sm:text-[16px] cursor-pointer ${
                    active === label.toLowerCase() ? 'underline text-black' : 'text-black'
                  }`}
                  onClick={() => {
                    setToggle(false);
                    handleScrollToSection(label.toLowerCase()); // Scroll to section by id
                  }}
                >
                  <a href={`#${label.toLowerCase()}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;