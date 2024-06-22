import React from 'react';

const Footer = () => {

    
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container px-md-5">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Recent Photos</h2>
              <ul className="list-unstyled photo">
                {/* <li><a href="#" className="img" style={{backgroundImage: `url(${url('../images/image_1.jpg').default})`}}></a></li>
                <li><a href="#" className="img" style={{backgroundImage: `url(${url('../images/image_2.jpg').default})`}}></a></li>
                <li><a href="#" className="img" style={{backgroundImage: `url(${url('../images/image_3.jpg').default})`}}></a></li>
                <li><a href="#" className="img" style={{backgroundImage: `url(${url('../images/image_4.jpg').default})`}}></a></li>
                <li><a href="#" className="img" style={{backgroundImage: `url(${url('../images/image_5.jpg').default})`}}></a></li>
                <li><a href="#" className="img" style={{backgroundImage: `url(${url('../images/image_6.jpg').default})`}}></a></li> */}
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Archives</h2>
              <ul className="list-unstyled categories">
                <li><a href="#">November 2018 <span>(105)</span></a></li>
                <li><a href="#">October 2018 <span>(212)</span></a></li>
                <li><a href="#">September 2018 <span>(150)</span></a></li>
                <li><a href="#">August 2018 <span>(100)</span></a></li>
                <li><a href="#">July 2018 <span>(200)</span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                  <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
