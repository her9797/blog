import React from 'react';

const Aside = () => {
    return (
        <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
            <h1 id="colorlib-logo"><a href="index.html"><span className="img" style={{backgroundImage: 'url(images/author.jpg)'}}></span>Louie Smith</a></h1>
            <nav id="colorlib-main-menu" role="navigation">
                <ul>
                    <li className="colorlib-active"><a href="index.html">Home</a></li>
                    <li><a href="collection.html">Collection</a></li>
                    <li><a href="about.html">About Me</a></li>
                    <li><a href="services.html">My Services</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>

            <div className="colorlib-footer">
                <h3>Newsletter</h3>
                <div className="d-flex justify-content-center">
                    <form action="#" className="colorlib-subscribe-form">
                        <div className="form-group d-flex">
                            <div className="icon"><span className="icon-paper-plane"></span></div>
                            <input type="text" className="form-control" placeholder="Enter Email Address" />
                        </div>
                    </form>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
