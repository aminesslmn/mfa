import React, { useState } from 'react';
import { supabase } from "./../client";

export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) {
                console.error('Error signing in:', error.message);
                return;
            }
            setShowMessage(true)
            
            try {
                await supabase.auth.signInWithOtp({
                    email: email,
                    options: {
                      
                      emailRedirectTo: 'http://localhost:5173/'
                    }
                  } ,)
            } catch (error) {
                setShowMessage(false)
            } 
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be 6-20 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.');
            return false;
        }
        setPasswordError('');
        return true;
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
        

            <br /><br /><br />
            {/* Sign Up Section */}
            <section className="page-section" id="signup">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mt-0">Sign In</h2>
                            <hr className="divider my-4" />
                            {/* Sign Up Form */}
                            <form className="signup-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div><br />
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        onBlur={validatePassword}
                                    />
                                    {passwordError && (
                                        <div className="invalid-feedback">
                                            {passwordError}
                                        </div>
                                    )}
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
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer text-center">
                {/* Footer content */}
            </footer>
        </nav>
    );
}
