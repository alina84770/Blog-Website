import React from 'react';
import './ServiceCard.css';
const ServiceCard = ({ icon, title, description }) => {
  return (

    <div className='serviveCard  p-3 mt-5 mx-2'>
        <p className='icon'>{icon}</p>
        <h4>{title}</h4>
        <p className='description'>{description}</p>
    </div>
  )
}

export default ServiceCard;
