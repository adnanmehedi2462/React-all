import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Home(){
    return(
        <div>
        <div className="top_container">
 
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="" />
            <span>
              Adward
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link"> <NavLink to="/">Home</NavLink> <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link"> <NavLink className="Love" to="/about">About</NavLink> </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link" href="teacher.html"> <NavLink className="Love" to="/services">Services</NavLink> </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="vehicle.html"> vehicle </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>

              </ul>
  
            </div>
            </div>
        </nav>





      </div>
    </header>
    <section className="hero_section ">
      <div className="hero-container container">
        <div className="hero_detail-box">
          <h3>
            Welcome to <br/>
            Best educations
          </h3>
          <h1>
            school
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised
          </p>
          <div className="hero_btn-continer">
            <a href="" className="call_to-btn btn_white-border">
              <span>
                Contact
              </span>
              <img src="assets/images/right-arrow.png" alt=""/>
            </a>
          </div>
        </div>
        <div className="hero_img-container">
          <div>
            <img src="assets/images/hero.png" alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section className="about_section layout_padding">
    <div className="container">
      <h2 className="main-heading ">
        About School
      </h2>
      <p className="text-center">
        There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of
        passages of Lorem Ipsum available, but the majority h
      </p>
      <div className="about_img-box ">
        <img src="assets/images/kids.jpg" alt="" className="img-fluid w-100"/>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <a href="" className="call_to-btn  ">

          <span>
            Read More
          </span>
          <img src="assets/images/right-arrow.png" alt=""/>
        </a>
      </div>
    </div>
  </section>

  </div>
    );
}