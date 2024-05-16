import React from 'react';

const Login = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">MFA</a>
          <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="index.html">Home</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="login.html">Login</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="signup.html">Sign up</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <br /><br /><br />
      <section className="page-section" id="login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Login</h2>
              <hr className="divider my-4" />
              <form className="login-form">
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div><br />
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div><br />
                <button type="submit" className="btn btn-primary btn-xl">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
