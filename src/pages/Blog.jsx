import React from 'react';
import BlogPage from '../components/BlogPage/BlogPage';
import Banner from '../components/AllPageBanner/Banner';

const Blog = () => {
  return (
    <div>

      {/* Banner component */}
      <Banner pageName={"Blog"} />

      {/* BlogPage component */}
      <BlogPage />

    </div>
  )
}

export default Blog;
