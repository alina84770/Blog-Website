import React from 'react';
import './ContactPage.css';
import contactImage from '../../assets/contact.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactPage = () => {
    {/* animation on scroll */ }
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='row container mx-auto my-5 contact'>
            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right">
                <img src={contactImage} className='w-100 h-100' />
            </div>

            {/* Contact Form */}
            <div className="col-lg-6 col-md-6 col-sm-12 contactForm" data-aos="fade-left">
                <form className="form p-4 w-100 ">

                    <input type="text" className='form-control mt-4 border-dark py-2' placeholder='Full Name' />
                    <input type="email" className='form-control mt-4 border-dark py-2' placeholder='example@gamil.com' />
                    <input type="text" className='form-control mt-4 border-dark py-2' placeholder='Enter Your Subject' />

                    <div className='mt-4'>
                        <textarea rows='5' cols='23' className='form-control border-dark' placeholder='Type your message'></textarea>
                    </div>

                    <button className='mt-4 text-white fw-bold'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default ContactPage;
