import React from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom';

const BlogCard = ({ id,image, title, author, publishDate }) => {
  return (
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
  )
}
export default BlogCard;
