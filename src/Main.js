import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';


const Main = () => {

    const iconStyle = (backgroundColor) => ({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
    });

    return (
        <div id="colorlib-page">
            <section className="ftco-section-no-padding bg-light">
                <div className="hero-wrap">
                    <div className="overlay"></div>
                    <div className="d-flex align-items-center js-fullheight" style={{ height: '953px' }}>
                        <div className="author-image text img d-flex" >
                            <OwlCarousel
                                className="home-slider js-fullheight owl-carousel owl-loaded owl-drag"
                                items={1}
                                loop
                                nav
                                style={{ height: '953px' }}
                            >
                                <div className="item">
                                    <img className="slider-item js-fullheight" style={{ height: '953px' }} src="/minseop1.jpg" />
                                </div>
                                <div className="item">
                                    <img className="slider-item js-fullheight" style={{ height: '953px' }} src="/minseop2.jpg" />
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className="author-info text p-3 p-md-5">
                            <div className="desc">
                                <span className="subheading">Hello! I'm</span>
                                <h1 className="big-letter">MIN SEOP</h1>
                                <h1 className="mb-4">
                                    <span>저는 백앤드 개발자</span> 심민섭 <span>입니다</span>
                                </h1>
                                <p className="mb-4">
                                    I am A Photographer from America Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                </p>
                                <h3 className="signature h1">Sim minseop</h3>
                                <ul className="ftco-social mt-3">
                                    <li className="ftco-animate fadeInUp ftco-animated">
                                        <a href="https://github.com/her9797" style={iconStyle('#000000')}>
                                            <FaGithub style={{ color: '#ffffff', fontSize: '20px' }} />
                                        </a>
                                    </li>
                                    <li className="ftco-animate fadeInUp ftco-animated">
                                        <a href="https://www.instagram.com/min.sup/coding_ori/" style={iconStyle('#000000')}>
                                            <FaYoutube style={{ color: '#ffffff', fontSize: '20px' }} />
                                        </a>
                                    </li>
                                    <li className="ftco-animate fadeInUp ftco-animated">
                                        <a href="https://www.youtube.com/@her97/coding_ori" style={iconStyle('#000000')}>
                                            <FaInstagram style={{ color: '#ffffff', fontSize: '20px' }} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section instagram">
                <div className="container">
                    <div className="row justify-content-center mb-2 pb-3">
                        <div className="col-md-7 heading-section heading-section-2 text-center ftco-animate fadeInUp ftco-animated">
                            <h2 className="mb-4">My Project</h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
                            <a href="https://github.com/her9797/LOGIN" className="insta-img image-popup" style={{ backgroundImage: 'url(images/login1.gif)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <FaGithub style={{ color: '#ffffff', fontSize: '100px', marginBottom: 'auto', marginTop: 'auto' }} />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
                            <a href="https://github.com/her9797/LOGIN" className="insta-img image-popup" style={{ backgroundImage: 'url(images/login2.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <FaGithub style={{ color: '#ffffff', fontSize: '100px', marginBottom: 'auto', marginTop: 'auto' }} />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
                            <a href="https://github.com/her9797/REVEL-UP" className="insta-img image-popup" style={{ backgroundImage: 'url(images/revelup1.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <FaGithub style={{ color: '#ffffff', fontSize: '100px', marginBottom: 'auto', marginTop: 'auto' }} />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
                            <a href="https://github.com/her9797/REVEL-UP" className="insta-img image-popup" style={{ backgroundImage: 'url(images/revelup2.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <FaGithub style={{ color: '#ffffff', fontSize: '100px', marginBottom: 'auto', marginTop: 'auto' }} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;
