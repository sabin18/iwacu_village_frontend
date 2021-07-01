import React, { useEffect, useState } from "react"
import productImages  from "../../assets/images/product/img-9.jpeg"
import productImages4  from "../../assets/images/product/img-20.jpeg"
import productImages2  from "../../assets/images/product/img-11.jpeg"
import productImages3  from "../../assets/images/product/img-12.jpeg"
import productImages1  from "../../assets/images/product/img-19.jpeg"
import categories from '../Home/categories'


const Portfolio =()=>{
return(
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Our Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
               {categories.map((category,index)=>(
              <li data-filter={category.name}>{category.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
        {categories.map((category,index)=>(
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={category.image} className="img-fluid" alt="" style={{height:'300px', width:"100%"}} />
              <div className="portfolio-info">
                <h4>{category.name}</h4>
                <p>{category.name}</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
    )
}

export default Portfolio