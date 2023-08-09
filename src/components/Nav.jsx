import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo1 from "../assets/img/instagram.png"
import logo2 from "../assets/img/discord.png"
import logo3 from "../assets/img/twitter.png"
import { Link } from "react-router-dom";
import Genesis from '../assets/img/Genesis.png'
import MANY_YEARS from '../assets/img/MANY.png'
import grid_img1 from "../assets/img/gridimg1.png"
import img_2004 from '../assets/img/2004.png'
import img_2005 from '../assets/img/2005.png'
import img_2006 from '../assets/img/2006.png'
import img_2006_2 from "../assets/img/2006_2nd.png"
import img_2007 from '../assets/img/2007.png'
import img_2008 from '../assets/img/2008.png'
import img_2010 from '../assets/img/img2010.png'
import img_2011_14 from '../assets/img/2011-14.png'
import THIS_ARTIST from '../assets/img/This_Artist.png'
import grid_img2 from "../assets/img/gridimg2.png"
import grid_img3 from "../assets/img/gridimg3.png"
import grid_img4 from "../assets/img/gridimg4.png"
import grid_img5 from "../assets/img/gridimg5.png"
import grid_img6 from "../assets/img/gridimg6.png"
import grid_img7 from "../assets/img/gridimg7.png"
import grid_img8 from "../assets/img/gridimg8.png"
import grid_img9 from "../assets/img/gridimg9.png"
import grid_img10 from "../assets/img/gridimg10.png"
import grid_img11 from "../assets/img/gridimg11.png"
import grid_img12 from "../assets/img/gridimg12.png"
import grid_img13 from "../assets/img/gridimg13.png"
import grid_img14 from "../assets/img/gridimg14.png"
import grid_img15 from "../assets/img/gridimg15.png"
import grid_img16 from "../assets/img/gridimg16.png"
import grid_img17 from "../assets/img/gridimg17.png"
import grid_img18 from "../assets/img/gridimg18.png"
import grid_img19 from "../assets/img/gridimg19.png"
import grid_img20 from "../assets/img/gridimg20.png"
import grid_img21 from "../assets/img/gridimg21.png"
import grid_img22 from "../assets/img/gridimg22.png"
import grid_img23 from "../assets/img/gridimg23.png"
import grid_img24 from "../assets/img/gridimg24.png"
import grid_img25 from "../assets/img/gridimg25.png"
import gradient_icon from "../assets/img/gridicon.png"




const Nav = () => {
  const [showNavbar, setShowNavbar] =useState(true);
  if (showNavbar) {
      document.body.classList.remove('overflow_hidden');
  } else {
      document.body.classList.add('overflow_hidden')
  }
  return (
    <section className="bg_color">
      <Container>
        <nav className='d-flex align-items-center justify-content-between pt-3'>
          <div>
             <a href="https://instagram.com/"><img src={logo1} alt="#" /></a>
             <a href="https://discord.com/"><img src={logo2} alt="#" /></a>
             <a href="https://twitter.com/"><img src={logo3} alt="#" /></a>
         </div>
              <div className='d-flex align-items-center'>
                  <ul className={showNavbar ? 'd-flex align-items-center gap-5 mb-0 nav_sm' : 'd-flex align-items-center gap-5 mb-0 nav_sm nav_show'} >
                      <li><Link className='link Name_1'>Home</Link></li>
                      <li><Link className='link Name_1'>OUR STORY</Link></li>
                      <li><Link className='link Name_1'>Roadmap</Link></li>
                      <li><Link className='link Name_1'>Traits</Link></li>
                      <li><Link className='link Name_1'>Team</Link></li>
                      <li><Link className='link Name_1'>Genesis</Link></li>
                      <li><Link className='link Name_1'>FAQs</Link></li>
                      <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                  </ul>
               </div>
               <span title="open"
                            className="d-inline d-lg-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
        </nav>
      </Container>
            <section>
            <div className='overdflow-hidden my_container px-3 py-5'>
                <Row className='py-5 mb_90 center_timeline'>
                    <Col lg={6} className='pe-0 pb-5'>
                        <div className='d-flex align-items-center justify-content-lg-end pt-3'>
                            <img src={Genesis} alt="#" />
                        </div>
                        <img className='pt-4 ps-2 ms-sm-5 pb-3' src={MANY_YEARS} alt="#" />
                        <div className='d_grid d-grid'>
                            <div className='designed_to_decorate ms-5 pt-5 pe-3'>
                                <img className='w-100 h-100' src={grid_img1} alt="#" />
                            </div>
                            <div className=' img_2004 pt-4 ps-4'>
                                <img className='w-100' src={img_2004} alt="#" />
                            </div>
                            <div className=' img_2006 pt-5 mt-3'>
                                <img className='w-100' src={img_2006} alt="#" />
                            </div>
                            <div className=' pop_art_idea ps-4 pe-4 mt-4'>
                                <img className='w-100 h-100' src={grid_img2} alt="#" />
                            </div>
                            <div className='grid_img_1 pt-5'>
                                <img className='w-100 h-100' src={grid_img3} alt="#" />
                            </div>
                            <div className='grid_img_2 mx-3 py-5'>
                                <img className='w-100' src={grid_img4} alt="#" />
                            </div>
                            <div className='Mcmanus mx-4 pe-sm-4 py-5'>
                                <img className='w-100' src={grid_img5} alt="#" />
                            </div>
                            <div className='img_2007'>
                                <img className='w-100' src={img_2007} alt="#" />
                            </div>
                            <div className='three_people_img  ms-5 pe-3 py-5'>
                                <img className='w-100' src={grid_img6} alt="#" />
                            </div>
                            <div className='Arts pe-sm-5 pb-5 pb-sm-0 mx-5'>
                                <img className='w-100' src={grid_img7} alt="#" />
                            </div>
                            <div className='grid_img_3 pe-sm-5 pe-3'>
                                <img className='w-100 h-100' src={grid_img8} alt="#" />
                            </div>
                            <div className='exhibitions pt-sm-5 mt-5 pe-4 ps-sm-5 ms-sm-5'>
                                <img className='w-100 h-100' src={grid_img9} alt="#" />
                            </div>
                            <div className='img_2011-14 pt-5 pb-sm-5 pe-5 pe-sm-0 ps-sm-5 ms-sm-5'>
                                <img className='w-100 h-100' src={img_2011_14} alt="#" />
                            </div>
                            <div className='grid_img_4 py-4 ps-sm-5 pe-2 pe-sm-0'>
                                <img className='w-100 h-100' src={grid_img10} alt="#" />
                            </div>
                            <div className='potts_point py-5  mt_5 pe-4 ps-4'>
                                <img className='w-100' src={grid_img11} alt="#" />
                            </div>
                            <div className='Leon_gallery ps-sm-5 pe-2 pe-sm-0'>
                                <img className='w-100 h-100' src={grid_img12} alt="#" />
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <img className='pt-5 L_vs_p' src={gradient_icon} alt="gradient_icon" />
                        <img className='ps-sm-5 mx-sm-5 pt-5' src={THIS_ARTIST} alt="#" />

                        <div className='d-grid d_grid'>
                            <div className='img_2005 mx-sm-3 pt-5'>
                                <img className='w-100' src={img_2005} alt="#" />
                            </div>
                            <div className='grid_img_5 ms-sm-2 pt-5 pt-sm-0 pe-3 pe-sm-0'>
                                <img className='w-100 h-100' src={grid_img13} alt="#" />
                            </div>
                            <div className='grid_img_6 ms-sm-5 pe-3 pe-sm-5 pt-sm-2 pt-5'>
                                <img className='w-100' src={grid_img14} alt="#" />
                            </div>
                            <div className='couple_img ms-sm-4 pe-3 pt-5'>
                                <img className='w-100 h-100' src={grid_img15} alt="#" />
                            </div>
                            <div className='soto_art ms-sm-4 pe-3 ps-1 pt-5'>
                                <img className='w-100 h-100' src={grid_img16} alt="#" />
                            </div>
                            <div className='Style_news ms-sm-4 pt-5 pe-3'>
                                <img className='w-100 h-100' src={grid_img17} alt="#" />
                            </div>
                            <div className='img_2006_1 ms-sm-3 pe-5 pe-sm-0 pt-5'>
                                <img className='w-100' src={img_2006_2} alt="#" />
                            </div>
                            <div className='grid_img_7 pt-sm-0 pt-5 me-sm-3 ms-sm-5 '>
                                <img className='w-100' src={grid_img18} alt="#" />
                            </div>
                            <div className='digital_divide mt-4'>
                                <img className='w-100 h-100' src={grid_img19} alt="#" />
                            </div>
                            <div className='Leon_krasenstein pt-5 mx-sm-5 pe-3 pe-sm-0'>
                                <img className='w-100 h-100' src={grid_img20} alt="#" />
                            </div>
                            <div className='couple_img_2 pe-3 pe-sm-0 pt-5 ms-sm-5 ps-sm-4'>
                                <img className='w-100 h-100' src={grid_img21} alt="#" />
                            </div>
                            <div className='img_2008 pt-5 mx-sm-3 pb-4 pe-5 pe-sm-0 pb-sm-0'>
                                <img className='w-100 h-100' src={img_2008} alt="#" />
                            </div>
                            <div className='couple_img_3 pt-4 pb-4 pe-3 pe-sm-0 pb-sm-0'>
                                <img className='w-100 h-100' src={grid_img22} alt="#" />
                            </div>
                            <div className='img_2010 pt-4 mx-sm-3 pe-5 pe-sm-0 pb-4'>
                                <img className='w-100 h-100' src={img_2010} alt="#" />
                            </div>
                            <div className='grid_img_8 pt-5 ms-sm-5 pe-3'>
                                <img className='w-100 h-100' src={grid_img23} alt="#" />
                            </div>
                            <div className='grid_img_9 pe-3 pe-sm-0'>
                                <img className='w-100 h-100 mt-5' src={grid_img24} alt="#" />
                            </div>
                            <div className='drawing_a_crowd pt-sm-4 pt-5 mt-5 mt-sm-0 ms-sm-5 pe-3'>
                                <img className='w-100 h-100' src={grid_img25} alt="#" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </section>
    </section>
  );
};

export default Nav;
