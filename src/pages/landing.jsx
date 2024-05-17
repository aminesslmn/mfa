import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { supabase } from './../client';

export default function Landing() {
    const [loggedUsername, setLoggedUsername] = useState('')
    const [loggedEmail, setLoggedEmail] = useState('')

    const navigator = useNavigate()

    const getUser = useCallback(async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                console.log('user: ', user)
                setLoggedEmail(user.user_metadata.email)
                setLoggedUsername(user.user_metadata.full_name)
            } else {
                console.log('no logged in user yet!')
                navigator('/')
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }, [navigator]);

    useEffect(() => {
        getUser();
    }, [getUser]);
    
    const handleLogOut = async () => {
        const { error } = await supabase.auth.signOut()
        navigator('/')
        if (error) {
          console.log('error signing out, ', error)
        }
    }

    return (
        <>
            {loggedEmail && loggedUsername ? (
                <div class="container">
                <div class="column">
                    <div class="col-md-6">
                        <p class="profile-name">Hello {loggedUsername} You have succefully logged in !</p>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-danger btn-signout" onClick={handleLogOut}>Signout</button>
                    </div>
                </div>
            </div>

            ) : (
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

                    <header className="masthead bg-primary text-white text-center">
                        <div className="container d-flex align-items-center flex-column">

                            <h1 className="masthead-heading text-uppercase mb-0">AI 388 Project</h1>
                            <br />
                            <h1 className="masthead-heading text-uppercase mb-0">Multi Factor Authentication</h1>
                            <div className="divider-custom divider-light">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                <div className="divider-custom-line"></div>
                            </div>
                        </div>
                    </header>

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
                                        Salamani Amine <br /> Abdelhak Chellal <br />Manel Zitouni <br /> Aicha Zenakhri
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </nav>
            )}
        </>
          
    );
}
