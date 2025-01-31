import React from 'react';
import './AboutPage.css';
import aboutImage from '../../assets/about.png'
const About = () => {
  return (
    <div className='row container mx-auto  my-5 about'>
      {/* aboutPage image */}
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <img src={aboutImage} className='w-100 h-100 rounded'/>
      </div>


      {/* aboutPage detail */}
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <p className='mt-3 aboutHeading'>Who we are</p>
        <h3>We provides hight quality Articles & Blogs</h3>
        <p className='aboutInfo'>Welcome to my blog! This is a space where I explore a variety of topics, including AI, startups, security, apps, and the ever-evolving world of technology. As part of my front-end development practice, I’ve created this site to experiment with design and layout while sharing insights on these exciting subjects.While the content you’ll find here is currently filled with dummy text for now, it’s all part of my learning journey. Each blog post is a way for me to showcase my skills in web design, content layout, and development, and I'm excited to continue building on this site as I progress in my development practice.</p>
        <p>Thank you for visiting, and I hope you enjoy exploring my work!</p>
      </div>
    </div>
  )
}


export default About;
