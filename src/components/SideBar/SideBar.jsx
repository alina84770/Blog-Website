import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
const SideBar = ({ blogsData }) => {
    const latestBlogs = blogsData.slice(0, 5);
    const popularBlogs = blogsData.slice(6, 10);
    return (
        <div className='sideBar shadow px-3 py-2 rounded'>

            {/* latest Blogs */}
            <div>
                <h2>Latest <span>Blogs</span></h2>
                {latestBlogs.map((latestBlogInfo, index) => {
                    return (
                        <div key={index}>
                            <p>{latestBlogInfo.title}</p>
                            <p><Link to={`/blog/${latestBlogInfo.id}`} className='text-decoration-none link'>Read more<FaLongArrowAltRight className='fs-5 ms-1' /></Link></p>
                            <hr />
                        </div>

                    )
                })}
            </div>


            {/* popular Blogs */}
            <div className='mt-5'>
                <h2>Popular <span>Blogs</span></h2>
                {popularBlogs.map((popularBlogInfo, index) => {
                    return (
                        <div key={index}>
                            <p>{popularBlogInfo.title}</p>
                            <p><Link to={`/blog/${popularBlogInfo.id}`} className='text-decoration-none link'>Read more<FaLongArrowAltRight className='fs-5 ms-1' /></Link></p>
                            <hr />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SideBar;
