import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='bg-dark text-secondary pt-4 pb-2'>
            <div className='row container mx-auto'>
                <ul className='col-lg-2 col-md-4 col-sm-6 col-6 list-unstyled mt-sm-3'>
                    <li className='text-white fw-bold'>Category</li>
                    <li className='mt-1'>News</li>
                    <li className='mt-1'>Worid</li>
                    <li className='mt-1'>Games</li>
                    <li className='mt-1'>References</li>
                </ul>

                <ul className='col-lg-2 col-md-4 col-sm-6 col-6 list-unstyled mt-sm-3'>
                    <li className='text-white fw-bold'>Apples</li>
                    <li className='mt-1'>Web</li>
                    <li className='mt-1'>ecommerce</li>
                    <li className='mt-1'>Business</li>
                    <li className='mt-1'>Entertainment</li>
                    <li className='mt-1'>Portfolio</li>
                </ul>

                <ul className='col-lg-2 col-md-4 col-sm-6 col-6 list-unstyled mt-sm-3'>
                    <li className='text-white fw-bold'>Cherry</li>
                    <li className='mt-1'>Media</li>
                    <li className='mt-1'>Brochure</li>
                    <li className='mt-1'>Nonprofit</li>
                    <li className='mt-1'>Education</li>
                    <li className='mt-1'>Projects</li>
                </ul>

                <ul className='col-lg-2 col-md-4 col-sm-6 col-6 list-unstyled mt-sm-3'>
                    <li className='text-white fw-bold'>Business</li>
                    <li className='mt-1'>Infopreneur</li>
                    <li className='mt-1'>Personal</li>
                    <li className='mt-1'>Wiki</li>
                    <li className='mt-1'>Forum</li>
                    <li className='mt-1'>Projects</li>
                </ul>

                <div className='col-lg-4 col-md-6 col-sm-12 mt-sm-3'>
                    <p className='text-white fw-bold'>Subscribe for updates</p>
                    <div className='form d-flex gap-1'>
                        <input type="text" placeholder='email id' className='form-control' />
                        <button className='btn btn-outline-light fw-bold text white'>subscribe</button>
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit corrupti expedita excepturi reprehenderit voluptates!</p>
                </div>

                <hr className='mt-4' />
                <p className='text-center'>&copy; 2025.  All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
