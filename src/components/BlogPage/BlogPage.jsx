import React, { useState } from 'react';
import Blogs from '../../assets/BlogsData.js';
import BlogCard from '../BlogCard/BlogCard';
import Pagination from '../pagination/Pagination.jsx';
import './BlogPage.css';
import Category from '../category/Category.jsx';
import SideBar from '../SideBar/SideBar.jsx';

const BlogPage = () => {
  const [category, setcategory] = useState('All');
  {/* pagination Data */}
  const [currentPage, setcurrentPage] = useState(1);
  const BlogsPerPage = 12;
  const totalPage = Math.ceil(Blogs.length / BlogsPerPage);

  //slicing indexes of blogs
  const lastBlogIndex = currentPage * BlogsPerPage;
  const startBlogIndex = lastBlogIndex - BlogsPerPage;
  let currentBlogs = Blogs.slice(startBlogIndex, lastBlogIndex);


  return (
    <div className='my-5 mx-4'>
      <div>

        {/* Blog categories */}
        <Category categoryInfo={{ category, setcategory }} />
        <hr />

        {/* Blogs */}
        <div className='row justify-content-center '>
          <div className='col-lg-9 col-md-8 col-sm-12'>
            <div className='row justify-content-center'>
              {(category === 'All' ? currentBlogs : Blogs.filter(blog => blog.category === category)).map((blog) => {
                return (
                  <div className='col-lg-4 col-md-4 col-sm-6 col-12' key={blog.id}>
                    <BlogCard id={blog.id} image={blog.image} title={blog.title} author={blog.author} publishData={blog.published_date} />
                  </div>
                )
              })}
            </div>
          </div>

          {/* sideBar */}
          <div className='col-lg-3 col-md-4 col-sm-12'>
            <div >
              <SideBar blogsData={currentBlogs} />
            </div>
          </div>
        </div>

        {/* pagination */}
        <div>
          {category === 'All' && <Pagination pageDetail={{ currentPage, setcurrentPage, totalPage }} />}
        </div>

      </div>
    </div>
  )
}

export default BlogPage
