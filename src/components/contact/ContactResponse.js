import React, { useState } from 'react';

const ContactResponse = () => {
    // 예시 연락처 데이터
    const contacts = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            subject: 'Inquiry',
            message: 'I would like to know more about your services.'
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            subject: 'Support',
            message: 'I need help with my order.'
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            subject: 'Support',
            message: 'I need help with my order.'
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            subject: 'Support',
            message: 'I need help with my order.'
        },
        {
            name: 'Jane Smith',
            email: 'jane@example.com',
            subject: 'Support',
            message: 'I need help with my order.'
        }
    ];

    // 페이지당 항목 수
    const itemsPerPage = 2;

    // 현재 페이지 상태 설정
    const [currentPage, setCurrentPage] = useState(1);

    // 현재 페이지의 연락처 항목 가져오기
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentContacts = contacts.slice(indexOfFirstItem, indexOfLastItem);

    // 다음 페이지로 이동
    const nextPage = () => {
        if (currentPage < Math.ceil(contacts.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // 이전 페이지로 이동
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="col-md-6" style={{ maxWidth: '600px', maxHeight: '1000px'}}>
            <div className="bg-light p-4 contact-response-container" style={{ height: '600px', position: 'relative' }}>
                <h3 className="border-bottom">Contact & Responses</h3>
                <ul className="list-unstyled">
                    {currentContacts.map((contact, index) => (
                        <li key={index} className="pb-4">
                            <div className="border-bottom pb-4">
                                <p><strong>Name:</strong> {contact.name}</p>
                                <p><strong>Email:</strong> {contact.email}</p>
                                <p><strong>Subject:</strong> {contact.subject}</p>
                                <p><strong>Message:</strong> {contact.message}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4" style={{ position: 'absolute', bottom: '10px', left: 'auto', right: 'auto' }}>
                    <button className="btn btn-primary mr-2" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                    <button className="btn btn-primary" onClick={nextPage} disabled={currentPage === Math.ceil(contacts.length / itemsPerPage)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ContactResponse;
