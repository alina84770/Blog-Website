import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import BlogPage from '../../components/BlogPage/BlogPage';
const Home = () => {
  return (
    <div>
      <div className='text-center bg-dark home'>
        <h1 className='text-white'>Welcome To <span>Our Blogs</span></h1>
        <p className='text-white w-75 mx-auto'>start your blog toda and join a community of writers and readers who are passionate about aharing their stories and ideas.we offer everything you need to get started, fromhelped tips and tutorials.</p>
        <Link to="/blog"><button className='border-0 text-white fw-bold py-2 px-3 rounded'>learn more<FaLongArrowAltRight className='fs-4 ms-1' /></button></Link>
      </div>
      <BlogPage />
    </div>
  )
}

export default Home;
