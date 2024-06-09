import React from 'react';
import '../Assets/Contact.css';

const Contact = () => {
    return (
        <div className='body-container'>
            <div className='Container'>
                <h2>
                    Contact
                </h2>
            </div>

            <div className='Contact-Container'>
                <div className="Contact-info">
                    <p className="Contact-head">GET IN TOUCH WITH US</p>
                    <p style={{ lineHeight: '2' }}>
                        Dealing with the daunting task of tech consulting? <br />
                        Let our expert team shoulder the burden and drive your business towards progress.
                    </p>
                    <p className="">
                        <strong>General and Sales Inquiries: </strong>hello@qualixsolutions.com
                    </p>
                    <p className="">
                        <strong>Careers: </strong>careers@qualixsolutions.com
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
