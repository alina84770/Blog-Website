import React from 'react';
import './ServiceCard.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServiceCard = ({ icon, title, description }) => {
  {/* animation on scroll */ }
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-right">
      <div className='serviveCard  p-3 mt-5 mx-2'>
        <p className='icon'>{icon}</p>
        <h4>{title}</h4>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard;
