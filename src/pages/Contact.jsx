import React from 'react'
import ContactPage from '../components/ContactPage/ContactPage';
import Banner from '../components/AllPageBanner/Banner';

const Contact = () => {
  return (
    <div>

      {/* Banner component */}
      <Banner pageName={"Contact"} />

      {/* contactpage component */}
      <ContactPage />

    </div>
  )
}

export default Contact;
