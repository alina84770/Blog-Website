import React from 'react';
import ServicesData from '../assets/ServicesData';
import ServiceCard from '../components/Services/ServiceCard';
import Banner from '../components/AllPageBanner/Banner';
const Services = () => {
  return (
    <div>

      {/* Banner component */}
      <Banner pageName={"services"} />

      {/* services */}
      <div className='row container mx-auto my-5 justify-content-center'>
        {ServicesData.map((service, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
              <ServiceCard icon={service.icon} title={service.title} description={service.description} />
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Services;
