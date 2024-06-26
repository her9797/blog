import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container px-md-5">
        <div className="row">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contact</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <a href="#">
                      <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                      <span className="text">+082 4035 8227</span>
                    </a>
                  </li>
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <a href="#">
                      <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
                      <span className="text">hermes970120@naver.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Follow Us</h2>
              <ul className="ftco-footer-social list-unstyled">
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href="#" style={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
                    <FaGithub />
                    <span style={{ marginLeft: '5px' }}>Github</span>
                  </a>
                </li>
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href="#" style={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
                    <FaYoutube style={{ color: '#ffffff', fontSize: '20px' }} />
                    <span style={{ marginLeft: '5px' }}>Youtube</span>
                  </a>
                </li>
                <li className="ftco-animate fadeInUp ftco-animated">
                  <a href="#" style={{ display: 'flex', alignItems: 'center', color: '#ffffff', fontSize: '15px' }}>
                    <FaInstagram style={{ color: '#ffffff', fontSize: '20px' }} />
                    <span style={{ marginLeft: '5px' }}>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0">
              Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <a href="https://github.com/her9797">Minseop</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
