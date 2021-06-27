import React, { useEffect, useState } from "react"
import productImages  from "../../assets/images/users/avatar-1.jpg"
import productImages4  from "../../assets/images/users/avatar-2.jpg"
import productImages2  from "../../assets/images/users/avatar-5.jpg"
import productImages3  from "../../assets/images/users/avatar-4.jpg"
// import productImages1  from "../../assets/images/product/img-5.png"


const Team =()=>{
return(
    <section id="team" className="team">
    <div className="container">

      <div className="section-title">
        <h2>Our Team</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row">

        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="member">
            <img src={productImages} className="img-fluid" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
              <div className="social">
                <a href=""><i className="icofont-twitter"></i></a>
                <a href=""><i className="icofont-facebook"></i></a>
                <a href=""><i className="icofont-instagram"></i></a>
                <a href=""><i className="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
          <div className="member">
            <img src={productImages2} className="img-fluid" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
              <div className="social">
                <a href=""><i className="icofont-twitter"></i></a>
                <a href=""><i className="icofont-facebook"></i></a>
                <a href=""><i className="icofont-instagram"></i></a>
                <a href=""><i className="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
          <div className="member">
            <img src={productImages3} className="img-fluid" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
              <div className="social">
                <a href=""><i className="icofont-twitter"></i></a>
                <a href=""><i className="icofont-facebook"></i></a>
                <a href=""><i className="icofont-instagram"></i></a>
                <a href=""><i className="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
          <div className="member">
            <img src={productImages4} className="img-fluid" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
              <div className="social">
                <a href=""><i className="icofont-twitter"></i></a>
                <a href=""><i className="icofont-facebook"></i></a>
                <a href=""><i className="icofont-instagram"></i></a>
                <a href=""><i className="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

    )
}

export default Team