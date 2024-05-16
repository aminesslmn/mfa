import React, { useState } from 'react';
import { supabase } from "./../client";

export default function SignupForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        // Password matching
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
        try {
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                  data: {
                    'full_name': fullName
                  }
                }

            });
            if (error) {
                setErrorMessage('Error signing up: ' + error.message);
                return;
            }
            setShowMessage(true);
        } catch (error) {
            setErrorMessage('Error signing up: ' + error.message);
        }
    };

    return (
        <nav id="page-top">
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">MFA</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="login">Login</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="signup">Sign up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
            {/* Navbar code */}
            <br /><br /><br />
            {/* Sign Up Section */}
            <section className="page-section" id="signup">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mt-0">Sign Up</h2>
                            <hr className="divider my-4" />
                            {/* Sign Up Form */}
                            <form className="signup-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Full Name"
                                        value={fullName}
                                        onChange={handleFullNameChange}
                                    />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div><br/>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div><br/>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary btn-xl">
                                    Sign Up
                                </button>
                            </form>
                            {showMessage && (
                                <div className="alert alert-success mt-3" role="alert">
                                    Please check your email for verification.
                                </div>
                            )}
                            {errorMessage && (
                                <div className="alert alert-danger mt-3" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Security Project</h4>
                            <p className="lead mb-0">
                                Group 06
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">Members</h4>
                            <p className="lead mb-0">
                                Salamani Amine <br /> Abdelhak Chellal <br /> Manel Zitouni <br /> Aicha Zenakhri
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </nav>
    );
}
