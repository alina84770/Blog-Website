import React from 'react';
import AboutPage from '../components/AboutPage/AboutPage';
import Banner from '../components/AllPageBanner/Banner';
const About = () => {
  return (
    <div>

      {/* Banner component */}
      <Banner pageName={"About"} />

      {/* AboutPage component */}
      <AboutPage />

    </div>

  )
}

export default About;
