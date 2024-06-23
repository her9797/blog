import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Main = () => {
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
                                    <img className="slider-item js-fullheight" style={{height: '953px'}} src="/minseop1.jpg" />
                                </div>
                                <div className="item">
                                    <img className="slider-item js-fullheight" style={{height: '953px'}} src="/minseop2.jpg" />
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
                                        <a href="#">
                                            <span className="icon-twitter"></span>
                                        </a>
                                    </li>
                                    <li className="ftco-animate fadeInUp ftco-animated">
                                        <a href="#">
                                            <span className="icon-facebook"></span>
                                        </a>
                                    </li>
                                    <li className="ftco-animate fadeInUp ftco-animated">
                                        <a href="#">
                                            <span className="icon-instagram"></span>
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
                            <a href="images/image_1.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/image_1.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
                            <a href="images/image_2.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/image_2.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
                            <a href="images/image_3.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/image_3.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
                            <a href="images/image_4.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/image_4.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate fadeInUp ftco-animated">
                            <a href="images/image_5.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/image_5.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
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
