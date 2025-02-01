import React from 'react';
import './BlogDetailPage.css';
import Blogs from '../../assets/BlogsData.js';
import { useParams } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import SideBar from '../../components/SideBar/SideBar';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const BlogDetailPage = () => {
    {/* animation on scroll */ }
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { id } = useParams();
    const blogDetail = Blogs.find((blog) => blog.id === Number(id));
    return (
        <div className='row my-5 container mx-auto blogDetail'>
            <div className="col-lg-8 col-md-7 col-sm-12 col-12">
                <img src={blogDetail.image} className='w-100 rounded' loading='lazy' data-aos="fade-down" />
                <h3 className='mt-3'>{blogDetail.title}</h3>
                <div className='d-flex gap-3 mt-4'>
                    <FaUser className='fs-5' />
                    <p>{blogDetail.author} | {blogDetail.published_date}</p>
                </div>
                <div className='d-flex gap-4 mt-2'>
                    <FaClock className='fs-5' />
                    <p>5 mintunes</p>
                </div>
                <p>{blogDetail.title}</p>
                <div data-aos="fade-right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod quisquam nam perferendis error sint iste, perspiciatis quos dicta eaque suscipit ipsa fugiat. Doloremque nisi libero quisquam esse tempora aspernatur eligendi dolor, laudantium alias. Nemo aliquid consequatur culpa labore assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod quisquam nam perferendis error sint iste, perspiciatis quos dicta eaque suscipit ipsa fugiat. Doloremque nisi libero quisquam esse tempora aspernatur eligendi dolor, laudantium alias. Nemo aliquid consequatur culpa labore assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod quisquam nam perferendis error sint iste, perspiciatis quos dicta eaque suscipit ipsa fugiat. Doloremque nisi libero quisquam esse tempora aspernatur eligendi dolor, laudantium alias. Nemo aliquid consequatur culpa labore assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod quisquam nam perferendis error sint iste, perspiciatis quos dicta eaque suscipit ipsa fugiat. Doloremque nisi libero quisquam esse tempora aspernatur eligendi dolor, laudantium alias. Nemo aliquid consequatur culpa labore assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod quisquam nam perferendis error sint iste, perspiciatis quos dicta eaque suscipit ipsa fugiat. Doloremque nisi libero quisquam esse tempora aspernatur eligendi dolor, laudantium alias. Nemo aliquid consequatur culpa labore assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod quisquam nam perferendis error sint iste, perspiciatis quos dicta eaque suscipit ipsa fugiat. Doloremque nisi libero quisquam esse tempora aspernatur eligendi dolor, laudantium alias. Nemo aliquid consequatur culpa labore assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod quisquam nam perferendis error sint iste, perspiciatis quos dicta eaque suscipit ipsa fugiat. Doloremque nisi libero quisquam esse tempora aspernatur eligendi dolor, laudantium alias. Nemo aliquid consequatur culpa labore assumenda.</p>
                </div>
            </div>

            {/* sideBar */}
            <div className='col-lg-4 col-md-5 col-sm-12 col-12' data-aos="fade-left">
                <SideBar blogsData={Blogs} />
            </div>
        </div>
    )
}

export default BlogDetailPage;
