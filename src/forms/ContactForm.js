import React from 'react';

const ContactForm = () => {
    return (
        <section className="ftco-section contact-section">
            <div className="container">
                <div className="row d-flex mb-5 contact-info">
                    <div className="col-md-12 mb-4">
                        <h2 className="h3 font-weight-bold">Contact Information</h2>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-light p-4">
                            <p><span>Address:</span> 서울특별시 성북구 보국문로 174 401호</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-light p-4">
                            <p><span>Phone:</span> <a href="tel://01040358227">+ 010 4035 8227</a></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-light p-4">
                            <p><span>Email:</span> <a href="mailto:hermes970120@naver.com">hermes970120@naver.com</a></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-light p-4">
                            <p><span>Website</span> <a href="https://github.com/her9797">My Github</a></p>
                        </div>
                    </div>
                </div>
                <div className="row block-9">
                    <div className="col-md-6 d-flex">
                        <form action="#" className="bg-light p-5 contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
