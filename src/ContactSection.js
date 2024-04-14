import React from 'react';
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md';

function ContactSection() {
    return (
        <section id="contact-section" className="main-menu-section">
            <h2>Contact Us</h2>
            <div className="contact-info">
                    <MdPhone className="contact-icon" />
                    <p>Phone: (+996)995 285 894</p>
                    <MdMail className="contact-icon" />
                    <p>Mail: akifcan.duman@iaau.edu.kg</p>
                    <MdLocationOn className="contact-icon" />
                    <p>Elebaeva 7,Kyrgyzstan,Bishkek</p>

            </div>
        </section>
    );
}

export default ContactSection;
