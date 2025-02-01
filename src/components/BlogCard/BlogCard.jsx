import React from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogCard = ({ id, image, title, author, publishDate }) => {
  {/* animation on scroll */ }
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-right">
      <Link to={`/blog/${id}`} className='text-decoration-none'>
        <div className="blogCard rounded pb-3 mb-4">
          <img src={image} className='w-100 p-2 rounded' loading='lazy' />
          <div className='px-2'>
            <h6>{title}</h6>
            <p>{author}</p>
            <p>published: {publishDate}</p>
          </div>
        </div>
      </Link>
    </div>

  )
}
export default BlogCard;
