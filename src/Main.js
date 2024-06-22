import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';

function Main() {

    return (
        <div>
            <section className="ftco-section-no-padding bg-light">
                <div className="hero-wrap">
                    <div className="overlay"></div>
                    <div className="d-flex align-items-center js-fullheight">
                        <div className="author-image text img d-flex">
                            <section className="home-slider js-fullheight owl-carousel">
                                <div className="slider-item js-fullheight" style={{ backgroundImage: 'url(images/author.jpg)' }}></div>
                                <div className="slider-item js-fullheight" style={{ backgroundImage: 'url(images/author-2.jpg)' }}></div>
                            </section>
                        </div>
                        <div className="author-info text p-3 p-md-5">
                            <div className="desc">
                                <span className="subheading">Hello! I'm</span>
                                <h1 className="big-letter">Minsup</h1>
                                <h1 className="mb-4">
                                    <span>안녕하세요</span> 백앤드 개발자 <span>심민섭 입니다</span>
                                </h1>
                                <p className="mb-4">
                                    I am A Photographer from America Far far away, behind the word mountains, far from the countries Vokalia
                                    and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                    the Semantics, a large language ocean.
                                </p>
                                <h3 className="signature h1">Sim minsup</h3>
                                <ul className="ftco-social mt-3">
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className="icon-twitter"></span>
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className="icon-facebook"></span>
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
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
        </div>
    );
}

export default Main;