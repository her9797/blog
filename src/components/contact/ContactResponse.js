const ContactResponse = () => {
    return (
        <div className="col-md-6 d-flex">
            <div className="bg-light p-4 ">
                <h3 className="border-bottom">Contact & Responses</h3>
                <ul className="list-unstyled">
                    <li className="pb-4">
                        <div className="border-bottom pb-4">
                            <p><strong>Name:</strong> John Doe</p>
                            <p><strong>Email:</strong> john@example.com</p>
                            <p><strong>Subject:</strong> Inquiry</p>
                            <p><strong>Message:</strong> I would like to know more about your services.</p>
                        </div>
                    </li>
                    <li className="pb-4">
                        <div className="border-bottom pb-4">
                            <p><strong>Name:</strong> Jane Smith</p>
                            <p><strong>Email:</strong> jane@example.com</p>
                            <p><strong>Subject:</strong> Support</p>
                            <p><strong>Message:</strong> I need help with my order.</p>
                        </div>
                    </li>
                    <li>
                        <p><strong>Name:</strong> Bob Johnson</p>
                        <p><strong>Email:</strong> bob@example.com</p>
                        <p><strong>Subject:</strong> Feedback</p>
                        <p><strong>Message:</strong> Great service, keep it up!</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactResponse;