import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import { FaFacebook, FaDribbble, FaTwitter } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useForm } from 'react-hook-form';

const Navbar = () => {
    const [loginState, setLoginState] = useState('Sign Up');
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

    // Handle form submission
    const onSubmit = async (data) => {
        console.log("Form data is:", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        reset();
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
                <div className="container">
                    {/* Logo */}
                    <h1 className="navbar-brand fs-2 fw-bold text-white">Design<span>Dk</span></h1>

                    {/* Menu Icon */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <IoMenu className='text-white fs-2' />
                    </button>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto text-center py-3 mb-2 mb-lg-0 gap-5 d-flex justify-content-center">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => isActive ? "active-links" : "default-links"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className={({ isActive }) => isActive ? "active-links" : "default-links"}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => isActive ? "active-links" : "default-links"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className={({ isActive }) => isActive ? "active-links" : "default-links"}>Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "active-links" : "default-links"}>Contact</NavLink>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="d-flex align-items-center gap-4 justify-content-center">
                            <div className="social-icons text-white">
                                <FaFacebook className='fs-5 me-4 icon' />
                                <FaDribbble className='fs-5 me-4 icon' />
                                <FaTwitter className='fs-5 me-4 icon' />
                            </div>
                            <button className="login-btn fw-bold" data-bs-toggle="modal" data-bs-target="#signupModal">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />

            {/* Bootstrap Modal */}
            <div className="modal fade bg-dark" id="signupModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h5 className="modal-title">{loginState}</h5>
                            <IoClose className="btn-close fs-3 text-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body pb-5 px-5">
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                {/* Username */}
                                {loginState === "Sign Up" && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className="w-100 py-2 px-2 mt-4"
                                            {...register("username", {
                                                required: "Username is required",
                                                minLength: { value: 5, message: "Name should be at least 5 characters long" },
                                                maxLength: { value: 20, message: "Name must be less than 20 characters" }
                                            })}
                                        />
                                        {errors.username && <p className='text-danger'>{errors.username.message}</p>}
                                    </>
                                )}

                                {/* Email */}
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                            message: "Enter a valid email address",
                                        }
                                    })}
                                    placeholder="Email"
                                    className="w-100 mt-2 py-2 px-2 mt-4"
                                />
                                {errors.email && <p className="text-danger">{errors.email.message}</p>}

                                {/* Password */}
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-100 my-2 py-2 px-2 mt-4"
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: "Password must include at least 8 characters, one uppercase, one lowercase, one number, and one special character"
                                        }
                                    })}
                                />
                                {errors.password && <p className="text-danger">{errors.password.message}</p>}

                                {loginState === 'Sign Up' && (
                                    <p className='mt-3'>
                                        If you already have an account?{" "}
                                        <span className='text-success fw-bold' onClick={() => setLoginState('Login')}>
                                            Login Here
                                        </span>
                                    </p>
                                )}

                                <button type="submit" className="w-100 mt-3 border-0 rounded fw-bold">
                                    {isSubmitting ? "Submitting..." : (loginState === 'Sign Up' ? "Register" : "Login")}
                                </button>

                                {loginState === "Login" && (
                                    <p className='mt-3'>
                                        Create a new account.{" "}
                                        <span className='fw-bold text-success' onClick={() => setLoginState('Sign Up')}>
                                            Click here
                                        </span>
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
