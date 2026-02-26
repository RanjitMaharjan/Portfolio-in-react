import React, { useState, useEffect } from 'react';
import './nav.css';
import { FaHome, FaUserAlt, FaBook } from 'react-icons/fa';
import { RiServiceFill, RiCustomerServiceFill } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6, // section visible %
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <FaHome />
      </a>

      <a
        href="/#about"
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserAlt />
      </a>

      <a
        href="/#experience"
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <FaBook />
      </a>

      <a
        href="/#service"
        className={activeNav === '#service' ? 'active' : ''}
      >
        <RiServiceFill />
      </a>

      <a
        href="/#contact"
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <RiCustomerServiceFill />
      </a>
    </nav>
  );
};

export default Nav;