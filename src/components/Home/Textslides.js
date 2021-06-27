import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import imagesiled1 from '../../assets/images/slide/imagesiled1.jpg';
import imagesiled2 from '../../assets/images/slide/imagesiled2.jpg';
import imagesiled3 from '../../assets/images/slide/imageslided3.png';
import { withNamespaces } from 'react-i18next';


const TextSlider = (props) => {
  
    return (
     <React.Fragment>
          <section id="hero">
      <div classNameName="hero-container">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

          {/* <!-- Slide 1 --> */}
          <div className="carousel-item active">
            <div className="carousel-background"><img src={imagesiled1} alt="" /></div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">{props.t('Welcome to')}<span>YAhealth (Youth and Adolescents Health)</span></h2>
                <p className="animate__animated animate__fadeInUp h5">{props.t('YAhealth (Youth and Adolescents Health) is Sexual and Reproductive Health educative software of Mobile App (Android &amp; IOS) and Website, and innovation that is going torapidly increase demand and sustainably improve youth/adolescents’ access to, anduptake of FP/ASRH services, including consistent use of modern contraceptives among married and/or sexually active youth, access to Antenatal Care, Postnatal Care, Sexually Transmitted Infections treatment, and Gender Based Violence prevention services')}.</p>
                <a href="#pubished" className="btn-get-started animate__animated animate__fadeInUp scrollto">{props.t('Get Started')}</a>
              </div>
            </div>
          </div>

          {/* <!-- Slide 2 --> */}
          <div className="carousel-item">
            <div className="carousel-background bg-image"><img src={imagesiled2} alt="" style={{height: "100vh", width:"100vw"}}/></div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">{props.t('Get trusted Sexual and Reproductive Health information')}</h2>           
<div className="d-block animate__animated animate__fadeInUp">
<p className="animate__animated animate__fadeInUp h5">
{props.t('Get trusted Sexual and Reproductive Health information on your phone or Computer everywhere and at any time in')}:
</p>
<p className="animate__animated animate__fadeInUp h5">
{props.t('A friendly way')},
{props.t('Confidential and private means')},
{props.t('Entertaining way')}, 
{props.t('Time saving means')},
{props.t('Less costly means')},
{props.t('Stigma free and non-judgmental means')}.
</p>
</div>

                <a href="#pubished" className="btn-get-started animate__animated animate__fadeInUp scrollto">{props.t('Get Started')}</a>
              </div>
            </div>
          </div>

          {/* <!-- Slide 3 --> */}
          <div className="carousel-item">
            <div className="carousel-background"><img src={imagesiled3} alt="" style={{height: "100vh", width:"100vw",}}/></div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2 className="animate__animated animate__fadeInDown">{props.t('About This Software')}</h2>
                <div className="carousel-background"><img src={imagesiled3} alt="" /></div>
                <p className="animate__animated animate__fadeInUp h5">{props.t('This Software is made possible by the support of the American People through the United States Agency for International Development (USAID) under the USAID/INGOBYI Activity implemented through IntraHealth International')}.</p>
                <a href="#pubished" className="btn-get-started animate__animated animate__fadeInUp scrollto">{props.t('Get Started')}</a>
              </div>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon icofont-thin-double-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon icofont-thin-double-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </div>
    </section>
            </React.Fragment>
          );
    }
    export default(withNamespaces()(TextSlider));
              