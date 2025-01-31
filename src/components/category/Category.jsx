import React from 'react';
import './Category.css';
const Category = ({categoryInfo}) => {
    const blogCategory = ['All', 'Startups', 'Security', 'AI', 'Apps', 'Tech' ];
    
  return (
    <div>
       <div className='d-flex gap-lg-5 gap-md-5 gap-sm-2 justify-content-center categories'>
        {blogCategory.map((item,index)=>{
            return(
            <p key={index} onClick={() => categoryInfo.setcategory(item)} className={categoryInfo.category === item && "active"}>{item}</p> 
        )
        })}
      </div>
    </div>
  )
}

export default Category;
